import React, { useState } from 'react';
import { Play, Sparkles, X, ArrowRight, ShieldCheck, Award, ChevronRight } from 'lucide-react';

const HERO_BG_URL = 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784739994/sreached_yc6gwp.png';

interface HeroSectionProps {
  onOpenMirrorQuiz: () => void;
  onOpenSpeakerKit: () => void;
  onOpenWaitlist: () => void;
}

interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  description: string;
  thumbnailUrl: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'v1',
    title: 'Biological Architecture',
    subtitle: 'Inner Circle Community',
    category: 'KEYNOTE HIGHLIGHT',
    duration: '04:15',
    description: 'Discover why organizational growth plateaus are almost never a strategy deficit, but a nervous system enforcing a safety ceiling.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'v2',
    title: 'Business Accelerator',
    subtitle: 'Recoding The H.O.S.™',
    category: 'EXECUTIVE ADVISORY',
    duration: '03:40',
    description: 'A deep dive into adrenal recalibration, cortisolic fatigue, and high-velocity delegation trust mapping for founders.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'v3',
    title: 'Regenesis Protocol',
    subtitle: 'Executive Advisory',
    category: 'FRAMEWORK BREAKDOWN',
    duration: '05:10',
    description: 'Thomas Ventura codifies 10 biological sciences to transition enterprise leaders from S.O.S. to Q.N.E. capacity.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'v4',
    title: 'Unleash Executive Power',
    subtitle: 'Stage Experience 2026',
    category: 'LIVE KEYNOTE',
    duration: '02:50',
    description: 'Watch Thomas address 1,200 C-Suite leaders and founders on biological coherence and high-stakes executive decision-making.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenMirrorQuiz,
  onOpenSpeakerKit,
  onOpenWaitlist,
}) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<VideoItem | null>(null);

  return (
    <section className="relative min-h-[90vh] bg-[#000000] text-[#FFFFFF] pt-16 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden border-b border-[#7E4F11]/30">
      
      {/* Stadium / Keynote Audience Background Image (Default) */}
      <img 
        src={HERO_BG_URL} 
        alt="Thomas Ventura Keynote Stage" 
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out pointer-events-none ${
          hoveredVideo ? 'opacity-20 scale-105' : 'opacity-65 scale-100'
        }`}
      />

      {/* Hovered Video Background Layer Cross-Fade */}
      {VIDEOS.map((vid) => (
        <img 
          key={`bg-${vid.id}`}
          src={vid.thumbnailUrl} 
          alt={vid.title}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out pointer-events-none ${
            hoveredVideo?.id === vid.id ? 'opacity-75 scale-105' : 'opacity-0 scale-100'
          }`}
        />
      ))}

      {/* Dark Vignette Overlay for High Typography Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/85 via-[#000000]/60 to-[#000000]/95 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[#7E4F11]/25 via-[#C9962F]/15 to-transparent blur-[140px] pointer-events-none" />

      {/* Center Hero Banner Section */}
      <div className="max-w-5xl mx-auto text-center relative z-10 my-auto py-8 sm:py-12 lg:py-20">
        
        {/* Main Bold Headline */}
        <h1 className="font-playfair font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FFFFFF] leading-[1.1] tracking-tight mb-4 sm:mb-6 drop-shadow-lg">
          Unlock The Power Within <br className="hidden sm:inline" />
          And <span className="bg-gradient-to-r from-[#E2B13D] via-[#C9962F] to-[#E2B13D] bg-clip-text text-transparent">Achieve Peak Scale</span>
        </h1>

        {/* Short Subheading */}
        <p className="font-inter text-xs xs:text-sm sm:text-lg lg:text-xl text-[#E2B13D]/90 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 font-medium drop-shadow">
          Proven Neuro-Biological Techniques For Personal &amp; Executive Leadership Growth
        </p>

        {/* Call-to-action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto w-full">
          <button
            onClick={onOpenMirrorQuiz}
            className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-lg bg-gradient-to-r from-[#7E4F11] via-[#C9962F] to-[#E2B13D] text-[#000000] font-inter font-bold text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_25px_rgba(226,177,61,0.4)] hover:shadow-[0_6px_35px_rgba(226,177,61,0.6)] hover:scale-[1.03] transition-all duration-300"
          >
            <span>GET STARTED</span>
            <ChevronRight className="w-4 h-4 text-[#000000]" />
          </button>

          <button
            onClick={onOpenSpeakerKit}
            className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-lg bg-[#000000]/70 hover:bg-[#111111] border border-[#E2B13D]/50 hover:border-[#E2B13D] text-[#E2B13D] font-inter font-semibold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md transition-all duration-300"
          >
            <Award className="w-4 h-4 text-[#E2B13D]" />
            <span>Speaker Kit</span>
          </button>
        </div>

      </div>

      {/* Bottom Floating 4-Card Grid Row */}
      <div className="max-w-[1550px] mx-auto w-full relative z-10 mt-6 lg:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {VIDEOS.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              onMouseEnter={() => setHoveredVideo(vid)}
              onMouseLeave={() => setHoveredVideo(null)}
              className="group relative h-48 sm:h-52 lg:h-56 rounded-2xl overflow-hidden bg-[#111111] border border-[#7E4F11]/50 hover:border-[#E2B13D] transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(226,177,61,0.35)] hover:-translate-y-1 flex flex-col justify-end p-5"
            >
              {/* Card Photo Background */}
              <img 
                src={vid.thumbnailUrl} 
                alt={vid.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Blue/Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-[#000000]/20 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Top Duration Tag */}
              <div className="absolute top-3 right-3 z-10">
                <span className="font-mono text-[10px] font-bold text-[#E2B13D] bg-[#000000]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E2B13D]/30">
                  {vid.duration}
                </span>
              </div>

              {/* Bottom Title & Floating Circular Play Button */}
              <div className="relative z-10 flex items-end justify-between gap-3">
                
                <div className="max-w-[80%]">
                  <p className="font-inter text-[10px] font-bold uppercase tracking-[0.18em] text-[#E2B13D]/90 mb-0.5">
                    {vid.subtitle}
                  </p>
                  <h3 className="font-playfair font-bold text-base sm:text-lg text-[#FFFFFF] leading-snug group-hover:text-[#E2B13D] transition-colors">
                    {vid.title}
                  </h3>
                </div>

                {/* Floating Cyan/Gold Play Icon */}
                <div className="w-10 h-10 rounded-full bg-[#000000]/90 border border-[#E2B13D] flex items-center justify-center shrink-0 text-[#E2B13D] group-hover:bg-gradient-to-r group-hover:from-[#C9962F] group-hover:to-[#E2B13D] group-hover:text-[#000000] group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(226,177,61,0.4)]">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>      {/* Interactive Video Player Modal */}
      {activeVideo && (
        <div 
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 pt-24 sm:pt-28 pb-4 bg-[#000000]/90 backdrop-blur-md animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[calc(100vh-120px)] flex flex-col bg-[#111111] border border-[#E2B13D]/60 rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_0_50px_rgba(226,177,61,0.3)] text-[#FFFFFF] overflow-y-auto"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 text-[#E2B13D] hover:text-[#FFFFFF] bg-[#000000]/80 border border-[#7E4F11] hover:border-[#E2B13D] rounded-full transition-colors cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Video Player Display */}
            <div className="relative aspect-video max-h-[36vh] w-full rounded-xl overflow-hidden bg-[#000000] border border-[#7E4F11]/50 mb-3 sm:mb-4 flex items-center justify-center group shrink-0">
              <img 
                src={activeVideo.thumbnailUrl} 
                alt={activeVideo.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/40" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#7E4F11] via-[#C9962F] to-[#E2B13D] text-[#000000] flex items-center justify-center mb-2 shadow-[0_0_25px_rgba(226,177,61,0.5)]">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-current text-[#000000] ml-1" />
                </div>
                <span className="font-mono font-bold text-[9px] sm:text-[11px] uppercase tracking-[0.2em] text-[#E2B13D] bg-[#000000]/80 px-3 py-1 rounded-full border border-[#E2B13D]/40">
                  PREVIEW PLAYBACK ACTIVE · {activeVideo.duration}
                </span>
              </div>
            </div>

            {/* Video Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 flex-wrap">
                  <span className="font-inter text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-[#FFFFFF] bg-gradient-to-r from-[#7E4F11] to-[#C9962F] px-2 py-0.5 rounded">
                    {activeVideo.category}
                  </span>
                  <span className="font-inter text-xs text-[#E2B13D]">
                    Duration: {activeVideo.duration}
                  </span>
                </div>

                <h3 className="font-playfair font-bold text-lg sm:text-xl md:text-2xl text-[#FFFFFF] mb-1.5 sm:mb-2">
                  {activeVideo.title} — {activeVideo.subtitle}
                </h3>

                <p className="font-inter text-xs sm:text-sm text-[#E2B13D]/90 leading-relaxed mb-3 sm:mb-4">
                  {activeVideo.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#7E4F11]/40">
                <div className="flex items-center gap-2 text-xs font-inter text-[#E2B13D]">
                  <ShieldCheck className="w-4 h-4 text-[#C9962F] shrink-0" />
                  <span>Exclusive Content from The REGENESIS Project™ Vault</span>
                </div>

                <button
                  onClick={() => { setActiveVideo(null); onOpenSpeakerKit(); }}
                  className="w-full sm:w-auto h-10 px-5 rounded bg-gradient-to-r from-[#7E4F11] via-[#C9962F] to-[#E2B13D] text-[#000000] font-inter font-bold text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-105 transition-all shrink-0"
                >
                  <span>Request Full Keynote Recording</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
