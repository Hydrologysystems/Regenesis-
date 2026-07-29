import React from 'react';
import { Activity, ShieldCheck, Zap, Dna } from 'lucide-react';

interface QuoteSectionProps {
  onExploreScience?: () => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ onExploreScience }) => {
  return (
    <section 
      id="science-section" 
      className="relative bg-fixed bg-cover bg-center text-[#1A1A1A] py-28 px-6 sm:px-12 lg:px-16 border-b border-[#1A1A1A]/10 overflow-hidden"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000')` }}
    >
      {/* Light Overlay for Crisp Contrast and Subtle Parallax Depth */}
      <div className="absolute inset-0 bg-[#FFFFFF]/90 backdrop-blur-[2px] z-0 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Centered Editorial Pull Quote */}
        <div className="flex flex-col items-center">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] font-semibold text-[#6C6863]">
              Core Biological Doctrine
            </span>
            <span className="h-px w-10 bg-[#D4AF37]" />
          </div>

          <blockquote className="font-playfair font-normal text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight italic mb-8">
            &ldquo;The hardest part of building a business isn&apos;t the Strategy. It is the subconscious war against your own <span className="not-italic text-[#D4AF37] border-b-2 border-[#D4AF37]">biological capacity</span>.&rdquo;
          </blockquote>

          <div className="flex items-center gap-4 pt-4 border-t border-[#1A1A1A]/15">
            <div className="w-12 h-12 bg-[#1A1A1A] text-[#FFFFFF] flex items-center justify-center font-playfair font-bold text-lg">
              TV
            </div>
            <div className="text-left">
              <p className="font-playfair font-bold text-lg text-[#1A1A1A]">
                Thomas Ventura
              </p>
              <p className="font-inter text-xs text-[#6C6863] uppercase tracking-[0.2em]">
                Founder, The REGENESIS Project™
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
