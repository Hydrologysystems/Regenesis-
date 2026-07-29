import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Linkedin, 
  Youtube, 
  Facebook, 
  Instagram, 
  PhoneCall, 
  Download, 
  ShieldCheck, 
  Atom, 
  Compass, 
  KeyRound,
  Play,
  X 
} from 'lucide-react';
import { BOOKS_DATA } from '../data/siteData';
import { BookInfo } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface AboutPageProps {
  onNavigatePage: (page: 'home' | 'science' | 'mythology' | 'about', sectionId?: string) => void;
  onOpenMirrorQuiz: () => void;
  onOpenSpeakerKit: () => void;
  onOpenContact: () => void;
  onOpenWaitlist: () => void;
  onSelectBook: (book: BookInfo) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigatePage,
  onOpenMirrorQuiz,
  onOpenSpeakerKit,
  onOpenContact,
  onSelectBook,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="bg-[#0C0B0A] text-[#F3EFE0] min-h-screen py-10 sm:py-16 px-3 sm:px-8 lg:px-16 border-b border-[#C9A227]/20 relative overflow-hidden font-inter">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#7E4F11]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto relative z-10">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: PORTRAIT & TRILOGY ================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <ScrollReveal yOffset={20}>
              {/* Executive Portrait Box */}
              <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-xl overflow-hidden border border-[#C9A227]/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] bg-[#121110] group mx-auto">
                <img 
                  src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784828493/regenerated_image_1784798224610-B1a6fML__1_wqi17x.png" 
                  alt="Thomas Ventura - The Architect of Capacity"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Dark Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-transparent to-black/10 pointer-events-none" />
                <div className="absolute inset-0 border border-[#C9A227]/20 rounded-xl pointer-events-none" />
              </div>

              {/* Trilogy Heading Label */}
              <div className="mt-8 text-center space-y-1">
                <h3 className="font-playfair font-bold text-base sm:text-lg tracking-[0.2em] sm:tracking-[0.25em] text-[#F3EFE0] uppercase">
                  THE REGENESIS PROJECT
                </h3>
                <p className="font-mono text-[9px] sm:text-[10px] text-[#C9A227] tracking-[0.18em] sm:tracking-[0.2em] font-semibold uppercase">
                  THE 3-VOLUME PUBLISHED TRILOGY
                </p>
              </div>

              {/* 3 Book Covers Display Row */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-[480px] mt-5 mx-auto">
                {BOOKS_DATA.map((book) => (
                  <div 
                    key={book.id}
                    onClick={() => onSelectBook(book)}
                    className="group/book relative cursor-pointer aspect-[1/1.45] rounded-md overflow-hidden border border-[#C9A227]/30 hover:border-[#C9A227] shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[#1A1815]"
                  >
                    <img 
                      src={book.coverImage} 
                      alt={book.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover/book:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover/book:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>

              {/* Footer Tagline & Explore Trilogy Button */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-[480px] pt-4 border-t border-[#C9A227]/20 mx-auto">
                <span className="font-playfair italic text-xs text-[#C9A227]/90 tracking-wide text-center sm:text-left">
                  &ldquo;Decoding the Human Operating System™&rdquo;
                </span>

                <button
                  onClick={() => onNavigatePage('home', 'books-section')}
                  className="px-4 py-2 bg-[#1A1815] hover:bg-[#C9A227] text-[#C9A227] hover:text-[#0C0B0A] border border-[#C9A227]/50 font-mono text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>EXPLORE TRILOGY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* ================= RIGHT COLUMN: BIO & INTERACTIVE FRAMEWORK ================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <ScrollReveal delay={0.15} yOffset={24}>
              {/* Category / Role Tags */}
              <div className="font-mono text-[10px] sm:text-[11px] font-bold text-[#C9A227] tracking-[0.2em] sm:tracking-[0.25em] uppercase flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span>AUTHOR</span>
                <span className="text-white/30">|</span>
                <span>SPEAKER</span>
                <span className="text-white/30">|</span>
                <span>NEURO-BIOLOGICAL SYSTEMS ARCHITECT</span>
              </div>

              {/* Main Headline & Subtitle */}
              <div className="space-y-1.5 sm:space-y-2 mt-4">
                <h1 className="font-playfair font-black text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight leading-none">
                  MEET THOMAS VENTURA
                </h1>
                <p className="font-playfair italic text-lg sm:text-2xl text-[#C9A227]">
                  The Architect of Capacity
                </p>
              </div>

              {/* 4 Stats Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-6">
                <div className="bg-[#151412] border border-[#C9A227]/25 rounded-xl p-3 sm:p-3.5 text-left">
                  <span className="font-playfair font-bold text-lg sm:text-2xl text-[#FFFFFF] block">18+ Yrs</span>
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#C9A227] tracking-wider uppercase font-semibold block mt-0.5">CPG &amp; INDUSTRY</span>
                </div>

                <div className="bg-[#151412] border border-[#C9A227]/25 rounded-xl p-3 sm:p-3.5 text-left">
                  <span className="font-playfair font-bold text-lg sm:text-2xl text-[#FFFFFF] block">8-Figure</span>
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#C9A227] tracking-wider uppercase font-semibold block mt-0.5">MULTI-CO FOUNDER</span>
                </div>

                <div className="bg-[#151412] border border-[#C9A227]/25 rounded-xl p-3 sm:p-3.5 text-left">
                  <span className="font-playfair font-bold text-lg sm:text-2xl text-[#FFFFFF] block">10 Lenses</span>
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#C9A227] tracking-wider uppercase font-semibold block mt-0.5">HARD SCIENCE</span>
                </div>

                <div className="bg-[#151412] border border-[#C9A227]/25 rounded-xl p-3 sm:p-3.5 text-left">
                  <span className="font-playfair font-bold text-lg sm:text-2xl text-[#FFFFFF] block">O.N.E.</span>
                  <span className="font-mono text-[8px] sm:text-[9px] text-[#C9A227] tracking-wider uppercase font-semibold block mt-0.5">NEURO EVOLUTION</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Biography Paragraphs */}
            <div className="space-y-4 sm:space-y-5 text-xs sm:text-base text-[#D4CEBF] leading-relaxed font-inter pt-1">
              <p>
                Thomas Ventura is not a theorist. He is a veteran operator who has spent nearly two decades in the trenches of the CPG and Manufacturing industries.
              </p>

              {/* Video Placeholder Card */}
              <div 
                onClick={() => setIsVideoOpen(true)}
                className="group relative my-4 sm:my-6 bg-gradient-to-r from-[#181510] via-[#221c13] to-[#181510] border border-[#C9A227]/30 hover:border-[#C9A227] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#000000]">
                  <img 
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000" 
                    alt="Thomas Ventura Keynote Briefing" 
                    className="w-full h-full object-cover filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-[#0C0B0A]/40 to-transparent" />

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 bg-[#0C0B0A]/80 backdrop-blur-md border border-[#C9A227]/50 text-[#C9A227] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md shadow">
                    06:20 • EXECUTIVE BRIEFING
                  </div>

                  {/* Center Glowing Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#C9962F] to-[#E2B13D] text-[#000000] shadow-[0_0_25px_rgba(226,177,61,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform mb-2">
                      <Play className="w-6 h-6 fill-current ml-1 text-[#000000]" />
                    </div>
                    <span className="text-xs sm:text-sm font-playfair font-bold uppercase tracking-wider text-[#FFFFFF] drop-shadow-md">
                      Watch: The Story &amp; Origin of Thomas Ventura
                    </span>
                    <span className="text-[11px] font-mono text-[#C9A227] tracking-wide mt-0.5 drop-shadow-sm">
                      From 8-Figure Founder Burnout to Neuro-Biological Architect
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#12100d] border-t border-[#C9A227]/20 flex items-center justify-between text-xs text-[#D4CEBF]">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] text-[#C9A227]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FEATURED KEYNOTE &amp; ORIGIN BRIEFING</span>
                  </span>
                  <span className="text-[#FFFFFF] font-bold underline group-hover:text-[#C9A227] transition-colors">
                    Play Video &rarr;
                  </span>
                </div>
              </div>

              <p>
                After successfully exiting his first startup, Thomas went on to build and lead two multi-million dollar companies simultaneously. Managing the friction of national logistics, complex supply chains, and a cumulative 8-figure revenue stream taught him a hard lesson:
              </p>

              {/* Highlight Blockquote */}
              <div className="bg-[#181613] border-l-4 border-[#C9A227] border-y border-r border-[#C9A227]/30 rounded-r-xl p-4 sm:p-6 my-4 sm:my-6 shadow-inner">
                <p className="font-playfair font-bold text-sm sm:text-lg text-[#FFFFFF] leading-snug">
                  &ldquo;The hardest part of building a business isn't the Strategy. It is the subconscious war against your own biological capacity.&rdquo;
                </p>
              </div>

              <p>
                He realized that what looked like &ldquo;procrastination,&rdquo; &ldquo;self-sabotage,&rdquo; or &ldquo;rigid control&rdquo; was actually his body hitting its <strong className="text-[#FFFFFF]">Biological Capacity</strong>—a safety mechanism protecting against pressure it could no longer metabolize.
              </p>

              <p>
                Refusing to accept this ceiling, Thomas spent the next decade codifying the REGENESIS Project—immersing himself in 10 lenses of hard science to reboot his own neural hardware and move from a survival mandate to Optimized Neural Evolution (O.N.E.).
              </p>

              <p>
                Today, Thomas helps high-performing leaders decode the <strong className="text-[#FFFFFF]">Survival Operating System (SOS)</strong> that is silently capping their growth. He re-engineers the identity structures built for protection so founders can finally shift from reactive survival into unrestricted expansion.
              </p>
            </div>

            {/* Interactive Modules Container */}
            <div className="pt-6 border-t border-[#C9A227]/20 space-y-4">
              <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] font-bold text-[#C9A227] uppercase tracking-[0.18em] sm:tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                <span>EXPLORE THE FRAMEWORK INTERACTIVE MODULES:</span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => onNavigatePage('science')}
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#181613] hover:bg-[#C9A227] text-[#FFFFFF] hover:text-[#0C0B0A] border border-[#C9A227]/40 rounded-lg text-xs font-inter font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm flex-1 xs:flex-none justify-center"
                >
                  <Atom className="w-4 h-4 text-[#C9A227]" />
                  <span>The 10 Lenses of Science</span>
                </button>

                <button
                  onClick={() => onNavigatePage('mythology')}
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#181613] hover:bg-[#C9A227] text-[#FFFFFF] hover:text-[#0C0B0A] border border-[#C9A227]/40 rounded-lg text-xs font-inter font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm flex-1 xs:flex-none justify-center"
                >
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  <span>The Archetypes Mythology</span>
                </button>

                <button
                  onClick={onOpenSpeakerKit}
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#181613] hover:bg-[#C9A227] text-[#FFFFFF] hover:text-[#0C0B0A] border border-[#C9A227]/40 rounded-lg text-xs font-inter font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm flex-1 xs:flex-none justify-center"
                >
                  <KeyRound className="w-4 h-4 text-[#C9A227]" />
                  <span>Signature Keynotes</span>
                </button>

                <button
                  onClick={onOpenMirrorQuiz}
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#181613] hover:bg-[#C9A227] text-[#FFFFFF] hover:text-[#0C0B0A] border border-[#C9A227]/40 rounded-lg text-xs font-inter font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm flex-1 xs:flex-none justify-center"
                >
                  <Sparkles className="w-4 h-4 text-[#C9A227]" />
                  <span>Take Mirror Quiz</span>
                </button>
              </div>
            </div>

            {/* Bottom Socials & Keynote Call CTAs Row */}
            <div className="pt-6 border-t border-[#C9A227]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-lg bg-[#181613] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0C0B0A] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-lg bg-[#181613] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0C0B0A] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-lg bg-[#181613] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0C0B0A] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-lg bg-[#181613] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0C0B0A] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 bg-[#C9A227] hover:bg-[#B5901F] text-[#0C0B0A] font-inter text-xs font-bold uppercase tracking-[0.15em] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer flex-1 sm:flex-none"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Keynote / Call</span>
                </button>

                <button
                  onClick={onOpenSpeakerKit}
                  className="px-5 py-3 bg-[#181613] hover:bg-white/10 text-[#F3EFE0] border border-[#C9A227]/40 font-inter text-xs font-bold uppercase tracking-[0.15em] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer flex-1 sm:flex-none"
                >
                  <Download className="w-4 h-4 text-[#C9A227]" />
                  <span>Speaker Kit</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          onClick={() => setIsVideoOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 pt-20 bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#12100d] border border-[#C9A227]/60 rounded-2xl p-4 sm:p-6 shadow-[0_0_50px_rgba(201,162,39,0.3)] text-[#FFFFFF] overflow-y-auto"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#C9A227] hover:text-[#FFFFFF] bg-[#000000]/80 border border-[#C9A227]/40 rounded-full transition-colors cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-mono font-bold text-[#C9A227] uppercase tracking-widest block mb-1">
                06:20 EXECUTIVE DOCUMENTARY
              </span>
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-[#FFFFFF]">
                The Story &amp; Biological Architecture of Thomas Ventura
              </h3>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#C9A227]/30 mb-4 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000"
                alt="Thomas Ventura Keynote Reel"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A227] text-black flex items-center justify-center mb-3 shadow-[0_0_30px_rgba(201,162,39,0.7)]">
                  <Play className="w-8 h-8 fill-current ml-1 text-black" />
                </div>
                <p className="text-xs font-mono text-[#C9A227] uppercase tracking-widest font-bold">
                  Documentary Briefing Playing...
                </p>
                <p className="text-xs text-[#D4CEBF] max-w-md mt-2 font-inter">
                  "Managing two multi-million dollar companies simultaneously taught me that strategy is useless if your biology is in survival mode."
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="px-5 py-2.5 rounded-lg bg-[#181613] border border-[#C9A227]/40 hover:border-[#C9A227] text-xs font-mono font-bold text-[#C9A227] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
