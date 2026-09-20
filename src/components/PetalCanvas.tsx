import { useEffect, useRef } from 'react';

interface PetalCanvasProps {
  intensity?: number;
  className?: string;
}

export function PetalCanvas({ intensity = 28, className = '' }: PetalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;

    interface Petal {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotSpeed: number;
      phase: number;
      color: string;
      alpha: number;
    }

    let petals: Petal[] = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initPetals();
    };

    const colors = [
      'rgba(185, 28, 28, ',   // Tsubaki crimson
      'rgba(136, 19, 24, ',   // Deep camellia wine
      'rgba(168, 128, 74, ',  // Warm bronze luster
      'rgba(217, 185, 188, ', // Camellia blush
    ];

    const initPetals = () => {
      petals = [];
      const count = Math.min(intensity, Math.floor((width * height) / 45000));
      for (let i = 0; i < count; i++) {
        petals.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 4 + Math.random() * 8,
          speedY: 0.3 + Math.random() * 0.7,
          speedX: (Math.random() - 0.5) * 0.4,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.015,
          phase: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.25 + Math.random() * 0.45,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let t = 0;
    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      for (const p of petals) {
        p.y += p.speedY;
        p.x += Math.sin(t + p.phase) * 0.6 + p.speedX;
        p.rotation += p.rotSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        // Tumbling effect
        ctx.scale(1, 0.4 + Math.abs(Math.cos(p.phase + t * 0.8)) * 0.6);

        ctx.beginPath();
        const s = p.size;
        ctx.moveTo(0, -s);
        ctx.bezierCurveTo(s * 0.75, -s * 0.5, s * 0.8, s * 0.6, 0, s);
        ctx.bezierCurveTo(-s * 0.8, s * 0.6, -s * 0.75, -s * 0.5, 0, -s);
        ctx.closePath();

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-10 opacity-70 transition-opacity duration-700 ${className}`}
    />
  );
}
