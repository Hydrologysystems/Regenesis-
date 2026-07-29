import React from 'react';
import { Compass, Zap, ShieldCheck } from 'lucide-react';

interface VenturaLogoProps {
  size?: 'sm' | 'md' | 'lg';
  textColor?: string;
  showText?: boolean;
}

const VenturaLogo: React.FC<VenturaLogoProps> = ({ size = 'sm', textColor = 'text-[#e2b13d]', showText = false }) => {
  const sizeClasses = size === 'lg' ? 'w-12 h-12' : size === 'md' ? 'w-10 h-10' : 'w-8 h-8';
  return (
    <div className="flex items-center gap-2">
      <img 
        src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784752107/Ventura_logo_version_2_3_copy_2_dt5rra.png" 
        alt="Thomas Ventura Logo" 
        className={`${sizeClasses} object-contain`}
      />
      {showText && <span className={`font-serif font-bold ${textColor}`}>THOMAS VENTURA</span>}
    </div>
  );
};

const trilogyPhases = [
  {
    step: 'I',
    title: 'THE SURVIVAL CODE',
    subtitle: 'Awareness & Origin',
    description: 'Map the implicit memory, stress patterns, and subconscious neural wiring that dictate leadership reactions under pressure.',
    icon: Compass,
  },
  {
    step: 'II',
    title: 'THE BIOLOGICAL RECOVERY',
    subtitle: 'Interruption & Protocol',
    description: 'Decondition autonomic nervous system threats and interrupt high-stress loops with precision bio-nervous architecture.',
    icon: Zap,
  },
  {
    step: 'III',
    title: 'EXPANSION ARCHITECTURE',
    subtitle: 'Embodiment & Scale',
    description: 'Anchor sustainable high-capacity output, neural stability, and exponential growth without physical exhaustion.',
    icon: ShieldCheck,
  },
];

export const ScienceManifesto: React.FC = () => {
  return (
    <section id="science" className="bg-[#090A0C] text-white py-16">
      {/* Container 1: Gold-Framed Paragraph Block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-xl border border-[#D4AF37]/40 bg-gradient-to-b from-[#14161D] to-[#0E1015] p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]"></div>

          <div className="space-y-6 text-center sm:text-left">
            <p className="text-base sm:text-lg md:text-xl text-[#E2E8F0] leading-relaxed font-light">
              The <strong className="text-[#F3E5AB] font-bold">REGENESIS Project™</strong> is a comprehensive body of work designed to help <strong className="text-white font-semibold">High-Stakes Leaders, Operators, and Visionaries</strong> decode their own limitations and unlock potential capacity. It explains how the <strong className="text-[#D4AF37] font-semibold">Survival Source Code</strong> was written—forming the behavior, identity, and neurochemistry that currently runs your life—and how to rewrite that code for upgraded expansion.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-[#E2E8F0] leading-relaxed font-light">
              The trilogy moves from Awareness to Interruption to Embodiment—addressing not just the &lsquo;Software&rsquo; of mindset and discipline, but the &lsquo;Hardware&rsquo;—the total <strong className="text-[#F3E5AB] font-bold">Biological Architecture</strong> that drives identity, personality, behavior, and sustained growth.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Banner with Light High-Contrast Backdrop */}
      <div className="relative py-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed border-y border-[#D4AF37]/30">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span className="text-5xl font-serif text-[#D4AF37] block mb-2 opacity-80">&ldquo;</span>
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-md">
            The hardest part of building a business isn&apos;t the Strategy. It is the <span className="text-[#F3E5AB] underline decoration-[#D4AF37]/60 underline-offset-8">subconscious war</span> against your own biological capacity.
          </blockquote>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Container 2: Repeated Context Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
        <div className="rounded-xl border border-[#D4AF37]/30 bg-[#12141A] p-8 sm:p-10 shadow-lg">
          <p className="text-sm sm:text-base text-[#B3BDCC] leading-relaxed font-light text-center">
            The <strong className="text-[#F3E5AB]">REGENESIS Project™</strong> serves as the definitive roadmap for leaders who refuse to sacrifice health and personal stability in pursuit of market domination. By addressing biological architecture first, operators unlock sustainable scale.
          </p>
        </div>
      </div>

      {/* Container 3: The Core Operational Thesis Card Block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-b from-[#120f0a] via-[#0d0a07] to-[#0a0805] border border-[#3d2e1b] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#e2b13d]/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#e2b13d]/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Logo Emblem & Eyebrow Badge */}
            <div className="flex flex-col items-center gap-3">
              <VenturaLogo size="sm" textColor="text-[#e2b13d]" showText={false} />
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c160c] border border-[#3d2e18] text-xs font-mono font-bold text-[#e2b13d] uppercase tracking-widest shadow-inner">
                <Compass className="w-3.5 h-3.5" />
                <span>THE CORE OPERATIONAL THESIS</span>
              </span>
            </div>

            {/* Core Thesis Statement */}
            <p className="text-lg sm:text-2xl lg:text-3xl font-light leading-relaxed text-stone-200 font-sans tracking-tight">
              The REGENESIS Project™ is an operational blueprint designed to help{' '}
              <strong className="text-white font-bold bg-gradient-to-r from-[#f0cb62] via-[#e2b13d] to-[#caa049] bg-clip-text text-transparent">
                High-Stakes Leaders & Visionaries
              </strong>{' '}
              decode personal limitations and unlock permanent biological capacity.
            </p>

            <p className="text-sm sm:text-base text-stone-200 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
              It reveals how your <strong className="text-white font-semibold">Survival Source Code</strong> was written—shaping the automatic behavior and neurochemistry currently running your business—and provides the exact protocols to rewrite that code for sustainable exponential growth.
            </p>

            {/* 3 Trilogy Phase Cards */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
              {trilogyPhases.map((phase) => {
                const IconComponent = phase.icon;
                return (
                  <div 
                    key={phase.step}
                    className="group bg-[#18130b] border border-[#4d3a24] hover:border-[#e2b13d] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#fce289] bg-[#241b0f] px-2.5 py-1 rounded-md border border-[#4d3a24]">
                        PHASE {phase.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#241b0f] border border-[#4d3a24] group-hover:border-[#e2b13d] text-[#fce289] flex items-center justify-center transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-1 group-hover:text-[#fce289] transition-colors">
                      {phase.title}
                    </h3>

                    <p className="text-xs font-mono text-[#fce289] mb-3 font-semibold">
                      {phase.subtitle}
                    </p>

                    <p className="text-xs text-stone-200 leading-relaxed font-normal">
                      {phase.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
