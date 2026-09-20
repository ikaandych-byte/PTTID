/**
 * Web Audio synthesizer for Hakuba S9 Tsubaki Edition.
 * Generates an atmospheric acoustic background hum and a thrilling flat-plane V8 rev note.
 */

let audioCtx: AudioContext | null = null;
let ambientGain: GainNode | null = null;
let isAmbientPlaying = false;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function toggleAmbientAtmosphere(enable?: boolean): boolean {
  const ctx = getAudioContext();
  const shouldPlay = enable !== undefined ? enable : !isAmbientPlaying;

  if (shouldPlay) {
    if (isAmbientPlaying) return true;

    // Create dual warm ambient drone
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    ambientGain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(110, ctx.currentTime); // A2 octave

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, ctx.currentTime);

    ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
    ambientGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2.5);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(ctx.destination);

    osc1.start();
    osc2.start();

    isAmbientPlaying = true;
    return true;
  } else {
    if (ambientGain && audioCtx) {
      ambientGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
      setTimeout(() => {
        isAmbientPlaying = false;
      }, 1200);
    }
    return false;
  }
}

/**
 * Synthesizes a realistic flat-plane crank 4.0L V8 high-rev throttle surge
 */
export function playV8RevSound(): void {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Dual pulse oscillators for V8 cylinder firing texture
    const oscMain = ctx.createOscillator();
    const oscSub = ctx.createOscillator();
    const noiseBuffer = createExhaustNoiseBuffer(ctx);
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    const engineFilter = ctx.createBiquadFilter();
    engineFilter.type = 'bandpass';
    engineFilter.Q.setValueAtTime(3.2, now);

    const mainGain = ctx.createGain();

    // Sound profile: Idle rumble -> rapid throttle blip to 9,200 RPM harmonic -> overrun crackle
    oscMain.type = 'sawtooth';
    oscSub.type = 'square';

    // Frequency throttle curve
    oscMain.frequency.setValueAtTime(95, now); // Idle ~ 750 RPM
    oscMain.frequency.exponentialRampToValueAtTime(460, now + 0.55); // Peak rev ~ 9,200 RPM
    oscMain.frequency.exponentialRampToValueAtTime(140, now + 1.6); // Drop back

    oscSub.frequency.setValueAtTime(47.5, now);
    oscSub.frequency.exponentialRampToValueAtTime(230, now + 0.55);
    oscSub.frequency.exponentialRampToValueAtTime(70, now + 1.6);

    engineFilter.frequency.setValueAtTime(260, now);
    engineFilter.frequency.exponentialRampToValueAtTime(1600, now + 0.55);
    engineFilter.frequency.exponentialRampToValueAtTime(340, now + 1.6);

    // Gain envelope
    mainGain.gain.setValueAtTime(0.001, now);
    mainGain.gain.linearRampToValueAtTime(0.18, now + 0.15);
    mainGain.gain.linearRampToValueAtTime(0.22, now + 0.55);
    mainGain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

    oscMain.connect(engineFilter);
    oscSub.connect(engineFilter);
    noiseSource.connect(engineFilter);
    engineFilter.connect(mainGain);
    mainGain.connect(ctx.destination);

    oscMain.start(now);
    oscSub.start(now);
    noiseSource.start(now);

    oscMain.stop(now + 1.85);
    oscSub.stop(now + 1.85);
    noiseSource.stop(now + 1.85);
  } catch (err) {
    console.warn('Audio playback not permitted or supported:', err);
  }
}

function createExhaustNoiseBuffer(ctx: AudioContext): AudioBuffer {
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.15;
  }
  return buffer;
}
