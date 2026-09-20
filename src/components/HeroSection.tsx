import { useState } from 'react';
import { ArrowRight, Play, Star, Target, X } from 'lucide-react';
import heroFactoryImage from '../assets/images/hero_stamping_plant_1789908932348.jpg';

interface HeroSectionProps {
  onOpenReserve?: () => void;
}

const CLIENT_LOGOS = [
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png',
];

export function HeroSection({ onOpenReserve }: HeroSectionProps) {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  return (
    <section
      id="hero"
      className="hero-wash bg-center md:pt-32 md:pb-20 bg-cover pt-24 pb-12 relative overflow-hidden text-[#2A2521]"
      style={{
        maskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 85%, transparent)',
      }}
    >
      {/* Background industrial stamping factory plant image matching uploaded asset */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `url(${heroFactoryImage})`,
        }}
      />

      {/* Volumetric ambient lighting highlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#D9B9BC]/30 blur-[130px] rounded-full" />
        <div className="absolute bottom-[15%] left-[10%] w-[550px] h-[450px] bg-[#A8804A]/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 md:mt-14 lg:mt-16 mb-12 sm:mb-16 md:mb-20 lg:mb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Award-Winning Design Badge (Subtitle/Eyebrow) */}
            <div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both]">
              <div className="inline-flex items-center gap-x-2 sm:gap-x-3 bg-white/75 border border-[#2A2521]/14 rounded-full pt-2 pr-3 sm:pr-4 pb-2 pl-3 sm:pl-4 backdrop-blur-lg shadow-sm">
                <span className="text-[10px] sm:text-xs tracking-wider uppercase flex items-center gap-1.5 sm:gap-2 font-manrope font-semibold text-[#2A2521]/80">
                  Award-Winning Design
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A8804A] fill-[#A8804A]" />
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] font-manrope font-medium tracking-tighter text-[#2A2521] drop-shadow-sm">
              Crafting Digital
              <br />
              <span className="bg-clip-text font-manrope font-medium text-transparent tracking-tighter bg-gradient-to-br from-[#2A2521] via-[#A8804A] to-[#b91c1c] pr-1">
                Experiences
              </span>
              <br />
              That Matter
            </h1>

            {/* Subtitle Description */}
            <p className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] font-manrope text-base sm:text-lg text-[#2A2521]/75 max-w-xl leading-relaxed">
              We design interfaces that combine beauty with functionality, creating seamless experiences that users love and businesses thrive on.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both]">
              {/* Primary: View Portfolio */}
              <a
                href="#gallery"
                className="group inline-flex transition-all duration-300 hover:shadow-xl hover:bg-[#3D352F] text-sm font-manrope font-medium text-[#F7F3EE] bg-[#2A2521] rounded-full pt-3 sm:pt-4 pr-6 sm:pr-8 pb-3 sm:pb-4 pl-6 sm:pl-8 shadow-md gap-x-2 sm:gap-x-3 items-center justify-center hover:scale-[1.02] active:scale-[0.99]"
              >
                <span className="font-manrope">View Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#A8804A] group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: Watch Showreel */}
              <button
                type="button"
                onClick={() => setIsShowreelOpen(true)}
                className="group inline-flex hover:text-[#2A2521] transition-all duration-300 hover:border-[#2A2521]/40 hover:bg-white text-sm font-manrope font-medium text-[#2A2521]/80 border-[#2A2521]/20 border bg-white/60 backdrop-blur-md rounded-full pt-3 sm:pt-4 pr-6 sm:pr-8 pb-3 sm:pb-4 pl-6 sm:pl-8 gap-x-2 sm:gap-x-3 items-center justify-center shadow-sm hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 text-[#b91c1c] fill-[#b91c1c]" />
                <span className="font-manrope">Watch Showreel</span>
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Card 1: 150+ Projects Delivered */}
            <div
              className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white/80 border border-[#2A2521]/14 w-full h-fit rounded-2xl sm:rounded-3xl relative shadow-[0_8px_32px_rgba(42,37,33,0.06)] backdrop-blur-xl"
            >
              <div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] pt-6 sm:pt-8 pr-6 sm:pr-8 pb-6 sm:pb-8 pl-6 sm:pl-8 relative">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-[#2A2521]/15 flex items-center justify-center bg-[#2A2521] text-[#F7F3EE] shadow-sm">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7F3EE]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl tracking-tighter font-manrope font-bold text-[#2A2521]">150+</div>
                    <div className="text-xs sm:text-sm text-[#2A2521]/70 font-manrope">Projects Delivered</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-[#2A2521]/70 font-manrope">Client Satisfaction</span>
                    <span className="text-xs sm:text-sm font-semibold font-manrope text-[#2A2521]">98%</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-[#2A2521]/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r rounded-full from-[#2A2521] to-[#A8804A]"
                      style={{ width: '98%' }}
                    />
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2A2521]/20 to-transparent my-3 sm:my-4" />

                {/* 3 Metric Columns */}
                <div className="flex justify-between mb-3 sm:mb-4 gap-2">
                  <div className="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl hover:bg-[#2A2521]/5 hover:-translate-y-0.5 flex-1 py-1">
                    <div className="text-xl sm:text-2xl leading-tight font-manrope font-bold text-[#2A2521]">
                      5+
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#2A2521]/60 uppercase tracking-wide font-manrope font-medium">Years</div>
                  </div>
                  <div className="w-px h-10 sm:h-12 my-auto bg-gradient-to-b from-transparent via-[#2A2521]/20 to-transparent" />
                  <div className="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl hover:bg-[#2A2521]/5 hover:-translate-y-0.5 flex-1 py-1">
                    <div className="text-xl sm:text-2xl leading-tight font-manrope font-bold text-[#2A2521]">
                      24/7
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#2A2521]/60 uppercase tracking-wide font-manrope font-medium">Support</div>
                  </div>
                  <div className="w-px h-10 sm:h-12 my-auto bg-gradient-to-b from-transparent via-[#2A2521]/20 to-transparent" />
                  <div className="text-center px-1 sm:px-2 cursor-pointer transition-all duration-300 rounded-xl sm:rounded-2xl hover:bg-[#2A2521]/5 hover:-translate-y-0.5 flex-1 py-1">
                    <div className="text-xl sm:text-2xl leading-tight font-manrope font-bold text-[#2A2521]">
                      100%
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#2A2521]/60 uppercase tracking-wide font-manrope font-medium">Quality</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-[#2A2521]/5 border border-[#2A2521]/15 text-[#2A2521] cursor-pointer transition-all duration-300 hover:-translate-y-px font-manrope font-semibold">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#16a34a] animate-pulse" />
                    ACTIVE
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-[#A8804A]/10 border border-[#A8804A]/30 text-[#A8804A] font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-px font-manrope">
                    <Star className="w-3 h-3 text-[#A8804A] fill-[#A8804A]" />
                    PREMIUM
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Featured Clients Marquee */}
            <div
              className="overflow-hidden transition-all duration-300 [animation:fadeSlideIn_0.8s_ease-out_0.7s_both] bg-white/80 border border-[#2A2521]/14 w-full h-fit rounded-2xl sm:rounded-3xl relative shadow-[0_8px_32px_rgba(42,37,33,0.06)] backdrop-blur-xl"
            >
              <div className="pt-6 sm:pt-8 pr-6 sm:pr-8 pb-6 sm:pb-8 pl-6 sm:pl-8 relative">
                <h3 className="text-base sm:text-lg mb-3 sm:mb-4 font-manrope font-bold text-[#2A2521]">
                  Featured Clients
                </h3>
                <div className="overflow-hidden relative">
                  <div
                    style={{
                      maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    }}
                  >
                    <div className="animate-marquee-logos py-1">
                      {/* Set 1 */}
                      <div className="flex gap-4 sm:gap-6 shrink-0 items-center">
                        {CLIENT_LOGOS.map((url, idx) => (
                          <div
                            key={`logo-1-${idx}`}
                            className="inline-flex items-center justify-center bg-center w-[120px] sm:w-[140px] h-[32px] sm:h-[40px] bg-contain bg-no-repeat rounded-xl opacity-80 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                            style={{ backgroundImage: `url(${url})` }}
                          />
                        ))}
                      </div>
                      {/* Set 2 (Seamless loop) */}
                      <div className="flex gap-4 sm:gap-6 shrink-0 items-center">
                        {CLIENT_LOGOS.map((url, idx) => (
                          <div
                            key={`logo-2-${idx}`}
                            className="inline-flex items-center justify-center bg-center w-[120px] sm:w-[140px] h-[32px] sm:h-[40px] bg-contain bg-no-repeat rounded-xl opacity-80 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                            style={{ backgroundImage: `url(${url})` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showreel Lightbox Modal */}
      {isShowreelOpen && (
        <div className="fixed inset-0 z-50 bg-[#2A2521]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-[#F7F3EE] rounded-3xl p-6 sm:p-8 border border-[#2A2521]/20 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#2A2521]/15 mb-4">
              <div>
                <h3 className="font-manrope text-xl font-bold text-[#2A2521]">Digital Experience Showreel</h3>
                <p className="text-xs text-[#2A2521]/60 font-manrope">Showcase of award-winning precision & craftsmanship</p>
              </div>
              <button
                type="button"
                onClick={() => setIsShowreelOpen(false)}
                className="w-9 h-9 rounded-full bg-[#2A2521]/10 hover:bg-[#2A2521] hover:text-[#F7F3EE] flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#2A2521] flex items-center justify-center border border-[#2A2521]/20 shadow-inner group">
              <img
                src={heroFactoryImage}
                alt="Showreel preview - Stamping & Robotics Automation Plant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenReserve?.()}
                  className="w-16 h-16 rounded-full bg-[#F7F3EE] text-[#2A2521] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  <Play className="w-7 h-7 fill-[#2A2521] ml-1" />
                </button>
                <span className="text-white text-xs font-manrope tracking-widest uppercase">Click to Launch Full Demo</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-manrope text-[#2A2521]/60">PTTID Technics · Studio Portfolio</span>
              <button
                type="button"
                onClick={() => {
                  setIsShowreelOpen(false);
                  onOpenReserve?.();
                }}
                className="text-xs font-manrope font-medium px-4 py-2 bg-[#2A2521] text-[#F7F3EE] rounded-full hover:bg-[#3D352F] transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
