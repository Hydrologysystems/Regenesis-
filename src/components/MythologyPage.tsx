import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import archetypesBgImage from '../assets/images/archetypes_bg_1784904573049.jpg';
import { ScrollReveal } from './ScrollReveal';
import { LiveBioDigitalDiagram } from './SciencePage';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  Lock, 
  Flame, 
  Eye, 
  Compass, 
  Users2, 
  Zap, 
  Crown,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Dna,
  Shield,
  Cpu,
  Ghost
} from 'lucide-react';

const ARCHETYPE_SPECTRUM_DATA = [
  {
    id: 'ghost',
    name: 'THE GHOST',
    subtitle: 'SOURCE CODE OF TRAUMA',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ghost_2_mftngr.png',
    driver: 'Limbic Pattern Matching & Temporal Lag.',
    unintegrated: 'Unconscious threat signals from early career failure',
    integrated: 'Deep instinct for risk assessment without emotional baggage',
    impact: 'Reactive leadership. Fighting phantom problems from the past instead of executing present growth.'
  },
  {
    id: 'egon',
    name: 'EGON',
    subtitle: 'THE SENTINEL / THE FORTRESS',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ego_2_mkoyo2.png',
    driver: 'Default Mode Network (DMN) Rigidity.',
    unintegrated: 'Loss of operational control or unpredictable public failure',
    integrated: 'Unshakable structural discipline and governance',
    impact: 'Stagnation. Inability to pivot rapidly because internal security protocols refuse calculated risk.'
  },
  {
    id: 'tiger',
    name: 'THE WOUNDED TIGER',
    subtitle: 'FORCE OF REACTIVE AGGRESSION',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/tiger_3_ntkkpl.png',
    driver: 'Amygdala Hyper-Arousal & Sympathetic Overdrive.',
    unintegrated: 'Perceived loss of authority or disrespect',
    integrated: 'Relentless execution drive and unstoppable momentum',
    impact: 'Cultural erosion, high executive turnover, and management-by-fear.'
  },
  {
    id: 'lion',
    name: 'THE LION',
    subtitle: 'FORCE OF COMMAND & PRESENCE',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/lion_3_qe41hj.png',
    driver: 'Ventral Vagal Tone & Social Hierarchy Processing.',
    unintegrated: 'Fear of exposed vulnerability or public judgment',
    integrated: 'Magnetic leadership presence that commands instant alignment',
    impact: 'Power vacuum. If the founder\'s presence is muted, the enterprise loses its gravitational center.'
  },
  {
    id: 'eagle',
    name: 'THE EAGLE',
    subtitle: 'FORCE OF STRATEGIC VISION',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/eagle_3_cdoiua.png',
    driver: 'Prefrontal Executive Function & Attentional Control.',
    unintegrated: 'Information overload and noise interference',
    integrated: 'Laser-sharp strategic foresight and macro synthesis',
    impact: 'Strategic paralysis, endless iteration without execution, and concept drift.'
  },
  {
    id: 'wolf',
    name: 'THE WOLF',
    subtitle: 'FORCE OF COHESION & TRUST',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/wolf_3_ucpviw.png',
    driver: 'Social Engagement System & Oxytocin Pathways.',
    unintegrated: 'Betrayal fear and trust deficits',
    integrated: 'High-coherence team synergy and unstoppable pack trust',
    impact: 'The Founder\'s Trap: Inability to delegate or build a self-sustaining executive team.'
  },
  {
    id: 'phoenix',
    name: 'THE PHOENIX',
    subtitle: 'FORCE OF IDENTITY REBIRTH',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784909202/phoenix_2_djhgsl.png',
    driver: 'Neuroplasticity & Systemic Recoding.',
    unintegrated: 'Plateauing revenue or identity obsolescence',
    integrated: 'Rapid identity adaptation and frictionless evolution',
    impact: 'Growth ceiling. Leading a $100M organization with a startup survival mindset.'
  },
  {
    id: 'the-one',
    name: 'THE ONE',
    subtitle: 'OPTIMIZED NEURO-BIOLOGICAL INTEGRATION',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784908934/the_one_3_bgyavy.png',
    driver: 'Autonomic Coherence, Parasympathetic Priming & Peak Flow.',
    unintegrated: 'None. Complete autonomic sovereignty.',
    integrated: 'Unconditional peak state, total executive mastery, and transcendent impact',
    impact: 'Unlocks sovereign leadership, infinite execution stamina, and zero biological burn-rate.'
  }
];

interface MythologyPageProps {
  onOpenMirrorQuiz: () => void;
  onOpenSpeakerKit: () => void;
  onOpenContact: () => void;
  onOpenWaitlist: () => void;
}

export const MythologyPage: React.FC<MythologyPageProps> = ({
  onOpenMirrorQuiz,
  onOpenSpeakerKit,
  onOpenContact,
  onOpenWaitlist,
}) => {
  const [activeArchetypeIndex, setActiveArchetypeIndex] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Always scroll window to top when MythologyPage mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Horizontally scroll the carousel container when user selects a different archetype card
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const cardEl = document.getElementById(`archetype-card-${activeArchetypeIndex}`);
    if (cardEl && carouselTrackRef.current) {
      const container = carouselTrackRef.current;
      const cardLeft = cardEl.offsetLeft;
      const cardWidth = cardEl.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
      
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  }, [activeArchetypeIndex]);

  const archetypes = [
    {
      id: '01',
      category: 'PRIMARY ARCHETYPE',
      title: 'THE LION',
      subtitle: '(The Force of Presence)',
      icon: Crown,
      image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/lion_3_qe41hj.png',
      description: 'The Archetype of Authority. When "wounded," the Lion shrinks its presence to avoid conflict. When integrated, its presence is a steady frequency of absolute command that stabilizes the organization.',
      science: 'Ventral Vagal Stability & Hierarchy Processing.',
      businessCost: 'Power Vacuum if presence is muted.',
    },
    {
      id: '02',
      category: 'MOBILIZATION FORCE',
      title: 'WOUNDED TIGER',
      subtitle: '(The Force of Action)',
      icon: Flame,
      image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/tiger_3_ntkkpl.png',
      description: 'The energy of mobilization. Un-integrated, it manifests as blind rage, micro-management, and burnout. It stays on high alert, treating everything like a threat.',
      science: 'Amygdala Hyper-Arousal & Sympathetic Stress.',
      businessCost: 'Cultural erosion and management by fear.',
    },
    {
      id: '03',
      category: 'STRATEGIC PERCEPTION',
      title: 'THE EAGLE',
      subtitle: '(The Force of Vision)',
      icon: Compass,
      image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/eagle_3_cdoiua.png',
      description: 'Your strategic perceptor. In survival mode, the Eagle loses itself in signal noise—overthinking or dissociation. Integrated, it provides high-resolution strategic focus.',
      science: 'Prefrontal Executive Function & Attentional Control.',
      businessCost: 'Analysis paralysis & lost macro ROI.',
    },
    {
      id: '04',
      category: 'SOCIAL CONNECTIONS',
      title: 'THE WOLF',
      subtitle: '(Force of Connection)',
      icon: Users2,
      image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/wolf_3_ucpviw.png',
      description: 'Your social baseline. The "Lone Wolf" stays hyper-independent to avoid liability. The "Integrated Wolf" builds the Solen Circle—a high-fidelity network of trust.',
      science: 'Social Engagement System & Polyvagal Co-Regulation.',
      businessCost: "The Founder's Trap (Inability to delegate).",
    },
  ];

  const currentArch = archetypes[activeArchetypeIndex];

  return (
    <div className="w-full bg-[#050505] text-[#FFFFFF] min-h-screen">
      
      {/* HERO / HEADER SECTION */}
      <section className="relative pt-12 pb-16 px-4 sm:px-12 max-w-[1600px] mx-auto text-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784903667/myth_hero_jilt9p.png" 
            alt="Mythology Hero Background" 
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-black/50 to-[#050505]" />
        </div>

        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[500px] bg-gradient-to-r from-[#E2B13D]/10 via-[#7E4F11]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-3 sm:space-y-4 px-2">
          <h1 className="font-playfair font-bold text-2xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight uppercase leading-snug sm:leading-tight drop-shadow-md">
            The Theater of Identity: Architects vs. The Static
          </h1>
          
          <p className="font-mono text-[11px] sm:text-sm text-[#E2B13D] font-semibold tracking-wider sm:tracking-widest uppercase">
            Decoding the Neural Archetypes guarding your path to the ONE.
          </p>

          <p className="font-inter text-xs sm:text-sm text-white/90 leading-relaxed max-w-3xl mx-auto pt-1 sm:pt-2">
            High-stakes leadership isn't just about strategy—it's about biology. Inside every founder is a collection of Neural Archetypes formed by past pressure and survival. To reach <strong className="text-white">The ONE</strong>, you must move beyond the "Static" of your baseline programming and step into your role as the <strong className="text-[#E2B13D]">Lead Architect</strong> of your own system.
          </p>
        </div>
      </section>

      {/* SECTION 1: THE CASTING CALL (THE PRIMARY ARCHETYPES) */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-[1600px] mx-auto border-t border-[#E2B13D]/20 relative overflow-hidden">
        
        {/* Background image with electric lightning tendrils */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={archetypesBgImage} 
            alt="Primary Archetypes Background" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/40 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90 pointer-events-none" />
        </div>
        
        {/* SECTION HEADER MATCHING REFERENCE IMAGE */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 relative px-2">
            <span className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#C9A227] text-[10px] sm:text-[11px] font-mono font-bold block mb-2">
              THE CASTING CALL
            </span>
            <div className="flex items-center justify-center gap-2 sm:gap-6 max-w-3xl mx-auto">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A227]/60 to-[#C9A227]" />
              <h2 className="font-playfair font-bold text-xl sm:text-3xl lg:text-5xl text-white tracking-[0.1em] sm:tracking-[0.15em] uppercase px-1 text-center">
                THE PRIMARY ARCHETYPES
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C9A227]/60 to-[#C9A227]" />
            </div>
            <div className="w-6 h-6 mx-auto mt-2 text-[#C9A227] flex items-center justify-center">
              <span className="text-sm select-none">❖</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 5-PART HORIZONTAL LAYOUT (GHOST ART | GHOST CARD | DIVIDER | EGON CARD | EGON ART) */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 xl:gap-8">
          
          {/* FAR LEFT: THE GHOST BRAIN NEURAL ARTWORK */}
          <div className="hidden xl:flex flex-col items-center justify-center w-[235px] 2xl:w-[280px] shrink-0 relative">
            <div className="relative w-full aspect-[4/5] flex items-center justify-center p-2">
              <div className="absolute inset-0 bg-[#E2B13D]/10 rounded-full blur-2xl pointer-events-none" />
              <img 
                src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ghost_2_mftngr.png" 
                alt="The Ghost" 
                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(226,177,61,0.3)] transform scale-[1.17] hover:scale-[1.22] transition-transform duration-500"
              />
            </div>
          </div>

          {/* CENTER LEFT: THE GHOST CARD */}
          <div className="relative flex-1 bg-[#080705]/95 border border-[#C9A227]/30 rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:border-[#C9A227]/60 transition-all duration-300">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A227] rounded-tl-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A227] rounded-tr-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A227] rounded-bl-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A227] rounded-br-2xl pointer-events-none" />

            <div>
              {/* Mobile Artwork Display */}
              <div className="xl:hidden w-full h-44 sm:h-52 mb-4 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#E2B13D]/10 rounded-full blur-xl pointer-events-none" />
                <img 
                  src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ghost_2_mftngr.png" 
                  alt="The Ghost" 
                  className="max-h-full max-w-full object-contain drop-shadow-[0_0_20px_rgba(226,177,61,0.4)] transform scale-110"
                />
              </div>

              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white uppercase tracking-wider mb-1">
                THE GHOST
              </h3>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#C9A227] uppercase tracking-[0.2em] font-semibold block mb-3 sm:mb-4">
                THE SOURCE CODE OF TRAUMA
              </span>

              <p className="font-inter text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
                The Ghost represents undated survival files and un-integrated experiences trapped in your hippocampus. It is the invisible specter that triggers a systemic hijack without warning, forcing you to react to today's boardrooms with yesterday's defensive posture.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#C9A227]/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1A150C] border border-[#C9A227]/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Dna className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#C9A227] uppercase tracking-widest font-bold block">
                    THE SCIENCE
                  </span>
                  <p className="font-inter text-xs text-white/90 leading-normal">
                    Limbic Pattern Matching &amp; Temporal Lag
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1A150C] border border-[#C9A227]/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#C9A227] uppercase tracking-widest font-bold block">
                    THE BUSINESS COST
                  </span>
                  <p className="font-inter text-xs text-white/90 leading-normal">
                    Reactive leadership. Fighting ghost-problems from the past instead of scaling in the present.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER DIVIDER WITH CREST */}
          <div className="hidden lg:flex flex-col items-center justify-center px-1 shrink-0">
            <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-[#C9A227]/50 to-transparent relative flex items-center justify-center">
              <div className="absolute w-12 h-12 rounded-full bg-[#0D0B08] border border-[#C9A227] flex items-center justify-center shadow-[0_0_20px_rgba(201,162,39,0.4)]">
                <Shield className="w-6 h-6 text-[#C9A227]" />
              </div>
            </div>
          </div>

          {/* CENTER RIGHT: EGON CARD */}
          <div className="relative flex-1 bg-[#080705]/95 border border-[#C9A227]/30 rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:border-[#C9A227]/60 transition-all duration-300">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A227] rounded-tl-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A227] rounded-tr-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A227] rounded-bl-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A227] rounded-br-2xl pointer-events-none" />

            <div>
              {/* Mobile Artwork Display */}
              <div className="xl:hidden w-full h-44 sm:h-52 mb-4 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[#E2B13D]/10 rounded-full blur-xl pointer-events-none" />
                <img 
                  src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ego_2_mkoyo2.png" 
                  alt="EGON Sentinel" 
                  className="max-h-full max-w-full object-contain drop-shadow-[0_0_20px_rgba(226,177,61,0.4)] transform scale-110"
                />
              </div>

              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white uppercase tracking-wider mb-1">
                EGON
              </h3>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#C9A227] uppercase tracking-[0.2em] font-semibold block mb-3 sm:mb-4">
                THE SENTINEL / THE FORTRESS
              </span>

              <p className="font-inter text-xs sm:text-sm text-white/85 leading-relaxed mb-6">
                The Chief Security Officer of your identity. EGON prioritizes &quot;Safety&quot; over &quot;Sovereignty.&quot; He builds rigid process-silos and emotional walls to ensure you stay within a predictable &quot;Safe Zone.&quot; He is the commander of the armor, but a prisoner of his own fortress.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#C9A227]/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1A150C] border border-[#C9A227]/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Dna className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#C9A227] uppercase tracking-widest font-bold block">
                    THE SCIENCE
                  </span>
                  <p className="font-inter text-xs text-white/90 leading-normal">
                    Default Mode Network (DMN) Rigidity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1A150C] border border-[#C9A227]/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#C9A227] uppercase tracking-widest font-bold block">
                    THE BUSINESS COST
                  </span>
                  <p className="font-inter text-xs text-white/90 leading-normal">
                    Stagnation. The inability to pivot because the internal &quot;Security Protocol&quot; refuses to embrace risk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAR RIGHT: EGON ARMORED SENTINEL ARTWORK */}
          <div className="hidden xl:flex flex-col items-center justify-center w-[235px] 2xl:w-[280px] shrink-0 relative">
            <div className="relative w-full aspect-[4/5] flex items-center justify-center p-2">
              <div className="absolute inset-0 bg-[#E2B13D]/15 rounded-full blur-2xl pointer-events-none" />
              <img 
                src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ego_2_mkoyo2.png" 
                alt="EGON Sentinel" 
                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(226,177,61,0.3)] transform scale-[1.19] hover:scale-[1.24] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ANIMAL ARCHETYPES (Interactive Slider Animated Card Carousel) */}
      <section className="text-[#1A1200] py-14 sm:py-20 px-3 sm:px-8 lg:px-12 relative overflow-hidden border-t border-b border-[rgba(40,40,40,0.08)]">
        
        {/* Background Image with Contrast Vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784906468/section_3_background_kgm6h3.png" 
            alt="Section 3 Background" 
            className="w-full h-full object-cover object-center opacity-100"
          />
          <div className="absolute inset-0 bg-black/35 sm:bg-black/20 pointer-events-none" />
        </div>

        {/* Subtle Ambient Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#282828_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-[0.025] pointer-events-none" />

        <div className="max-w-[1500px] mx-auto relative z-10">
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 px-2">
              <span className="uppercase tracking-[0.25em] text-[#FFE18A] text-[10px] sm:text-xs font-mono font-bold block mb-2 [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]">
                ARCHETYPAL ARCHITECTURE
              </span>
              <h2 className="font-playfair font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase [text-shadow:_0_3px_12px_rgba(0,0,0,0.95),_0_0_25px_rgba(0,0,0,0.9)]">
                The Animal Archetypes
              </h2>
              
              {/* Muted Gold Divider */}
              <div className="w-[80px] h-[2px] bg-[#E2B13D] mx-auto my-4 sm:my-5 shadow-[0_2px_8px_rgba(0,0,0,0.9)]" />

              <p className="font-inter font-medium text-xs sm:text-sm text-white/95 max-w-[55ch] mx-auto leading-relaxed [text-shadow:_0_2px_10px_rgba(0,0,0,0.95),_0_0_15px_rgba(0,0,0,0.9)]">
                Every founder harbors neural forces shaped by high-pressure survival. Master these beasts to transform reactive biology into sovereign executive command.
              </p>
            </div>
          </ScrollReveal>

          {/* INTERACTIVE CAROUSEL & DESCRIPTION LAYOUT MATCHING WIREFRAME */}
          <div className="bg-gradient-to-b from-[#FAF5EB] via-[#F3EDE2] to-[#EBE3D3] rounded-[20px] sm:rounded-[32px] p-4 sm:p-8 lg:p-12 border-t border-l border-white/80 border-b border-r border-[#1A1200]/15 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),_inset_0_2px_6px_rgba(255,255,255,0.4),_0_25px_60px_-15px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12 relative overflow-hidden">
            
            {/* Top Light Highlight Sheen Overlay */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/25 via-white/5 to-transparent pointer-events-none z-0" />

            {/* MOBILE QUICK-SELECT PILLS BAR */}
            <div className="lg:hidden flex items-center justify-start gap-2 overflow-x-auto pb-2 -mx-1 px-1 relative z-20 no-scrollbar">
              {archetypes.map((arch, idx) => {
                const isActive = idx === activeArchetypeIndex;
                return (
                  <button
                    key={arch.id}
                    onClick={() => setActiveArchetypeIndex(idx)}
                    className={`shrink-0 px-3 py-1.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#1A1200] text-[#FFE18A] shadow-md ring-2 ring-[#C9A227]'
                        : 'bg-[#E5DEC3] text-[#1A1200]/70 hover:bg-[#1A1200]/20'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 border border-current">
                      <img src={arch.image} alt={arch.title} className="w-full h-full object-cover" />
                    </div>
                    <span>{arch.title.replace('THE ', '')}</span>
                  </button>
                );
              })}
            </div>

            {/* FAR LEFT: VERTICAL TIMELINE / STEP INDICATOR (DESKTOP) */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-3 pr-4 border-r border-[rgba(40,40,40,0.12)] relative z-10">
              {archetypes.map((arch, idx) => {
                const isActive = idx === activeArchetypeIndex;
                return (
                  <button
                    key={arch.id}
                    onClick={() => setActiveArchetypeIndex(idx)}
                    className={`relative rounded-full transition-all duration-300 cursor-pointer overflow-hidden p-0.5 ${
                      isActive
                        ? 'w-12 h-12 bg-gradient-to-br from-[#FFE18A] to-[#C9A227] shadow-lg ring-2 ring-[#C9A227] scale-105'
                        : 'w-9 h-9 bg-[#E5DEC3] opacity-75 hover:opacity-100 hover:scale-105 hover:bg-[#1A1200]/20'
                    }`}
                    title={arch.title}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                      <img 
                        src={arch.image} 
                        alt={arch.title} 
                        className={`w-full h-full object-cover object-center transition-transform duration-300 ${
                          isActive ? 'scale-110 contrast-110' : 'scale-100 opacity-90'
                        }`} 
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* LEFT COLUMN: DESCRIPTION DISPLAY PANEL */}
            <div className="lg:w-5/12 flex flex-col justify-between relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeArchetypeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-4 sm:space-y-5"
                >
                  <div>
                    {/* MOBILE ARTWORK DISPLAY - Seamlessly integrated with text details */}
                    <div className="lg:hidden relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-4 border-2 border-[#C9A227]/40 shadow-[0_10px_25px_rgba(0,0,0,0.15)] bg-black/90 group">
                      <img 
                        src={currentArch.image} 
                        alt={currentArch.title} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full border border-[#C9A227]/50 font-mono text-[10px] text-[#FFE18A] uppercase font-bold tracking-widest z-10">
                        {currentArch.id} / 06
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <span className="font-mono text-[10px] font-bold text-[#FFE18A] uppercase tracking-wider block drop-shadow-md">
                          {currentArch.subtitle}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-playfair font-bold text-2xl sm:text-4xl lg:text-5xl text-[#1A1200] uppercase tracking-tight">
                      {currentArch.title}
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#8A5A0C] uppercase tracking-wider mt-1">
                      {currentArch.subtitle}
                    </p>
                  </div>

                  <p className="font-inter text-xs sm:text-sm text-[#2B2B2B] leading-relaxed">
                    {currentArch.description}
                  </p>

                  <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FAF6EE] to-[#EFE7D8] border-t border-l border-white/90 border-b border-r border-[rgba(40,40,40,0.15)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),_0_6px_18px_rgba(0,0,0,0.06)] space-y-2.5 sm:space-y-3 font-inter text-xs">
                    <div>
                      <strong className="text-[#1A1200] block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-0.5">The Science</strong>
                      <span className="text-[#2B2B2B]/90 text-[11px] sm:text-xs leading-normal">{currentArch.science}</span>
                    </div>
                    <div>
                      <strong className="text-[#1A1200] block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-0.5">The Business Cost</strong>
                      <span className="text-[#2B2B2B]/90 text-[11px] sm:text-xs leading-normal">{currentArch.businessCost}</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      onClick={onOpenMirrorQuiz}
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#1A1200] hover:bg-black text-[#F8F4EC] font-inter text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-3 group cursor-pointer"
                    >
                      <span>Analyze {currentArch.title}</span>
                      <img 
                        src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784908207/lion_4_mncbur.png" 
                        alt="Lion Icon" 
                        className="w-4 h-4 object-contain group-hover:scale-110 transition-transform" 
                      />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-[rgba(40,40,40,0.1)] mt-6 sm:mt-8">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveArchetypeIndex((prev) => (prev > 0 ? prev - 1 : archetypes.length - 1))}
                    className="w-10 h-10 rounded-full border border-[rgba(40,40,40,0.2)] flex items-center justify-center text-[#1A1200] hover:bg-[#1A1200] hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous Archetype"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveArchetypeIndex((prev) => (prev < archetypes.length - 1 ? prev + 1 : 0))}
                    className="w-10 h-10 rounded-full border border-[rgba(40,40,40,0.2)] flex items-center justify-center text-[#1A1200] hover:bg-[#1A1200] hover:text-white transition-colors cursor-pointer"
                    aria-label="Next Archetype"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="font-mono text-xs text-[#2B2B2B]/70 font-semibold tracking-wider">
                  ARCHETYPE <span className="text-[#1A1200] font-bold">{currentArch.id}</span> OF <span className="text-[#1A1200] font-bold">{String(archetypes.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE ANIMATED CARD CAROUSEL (DESKTOP) */}
            <div className="hidden lg:flex lg:w-7/12 relative overflow-hidden py-2 items-center z-10">
              <div 
                ref={carouselTrackRef}
                className="w-full flex gap-3 sm:gap-6 overflow-x-auto pb-4 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth px-1"
              >
                {archetypes.map((arch, idx) => {
                  const isActive = idx === activeArchetypeIndex;
                  return (
                    <motion.div
                      key={arch.id}
                      id={`archetype-card-${idx}`}
                      onClick={() => setActiveArchetypeIndex(idx)}
                      whileHover={{ y: -4 }}
                      animate={{
                        scale: isActive ? 1.02 : 0.96,
                        opacity: isActive ? 1 : 0.85,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 w-[80vw] max-w-[290px] sm:w-[340px] min-h-[380px] sm:min-h-[480px] snap-center rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? 'bg-gradient-to-br from-[#383531] via-[#2A2826] to-[#1C1A18] text-white border-t-2 border-l-2 border-[#FFE18A] border-b-2 border-r-2 border-[#735714] shadow-[inset_0_1px_2px_rgba(255,245,210,0.4),_inset_0_-2px_6px_rgba(0,0,0,0.6),_0_22px_50px_rgba(0,0,0,0.45)]'
                          : 'bg-gradient-to-br from-[#FFFDF9] via-[#F8F4EC] to-[#EAE2D2] text-[#1A1200] border-t border-l border-white/90 border-b border-r border-[rgba(40,40,40,0.18)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),_0_10px_25px_rgba(0,0,0,0.08)] hover:border-[#C9A227]/60'
                      }`}
                    >
                      {/* Full-card Canvas Artwork - High Vibrancy & Popping Clarity */}
                      {arch.image && (
                        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[24px] sm:rounded-[28px]">
                          <img 
                            src={arch.image} 
                            alt={arch.title} 
                            className={`w-full h-full object-cover object-center transition-all duration-500 transform ${
                              isActive 
                                ? 'opacity-100 scale-105 contrast-110 brightness-105 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]' 
                                : 'opacity-90 contrast-105 hover:opacity-100'
                            }`}
                          />
                          {/* Selective gradient overlays solely for bottom text legibility */}
                          <div className={`absolute inset-0 z-1 pointer-events-none ${
                            isActive 
                              ? 'bg-gradient-to-t from-black/90 via-black/30 to-black/30' 
                              : 'bg-gradient-to-t from-[#EAE2D2]/95 via-[#EAE2D2]/30 to-white/50'
                          }`} />
                        </div>
                      )}

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`uppercase tracking-[0.2em] text-[10px] font-mono font-extrabold ${isActive ? 'text-[#FFE18A] [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]' : 'text-[#8A5A0C] [text-shadow:_0_1px_2px_rgba(255,255,255,0.9)]'}`}>
                            {arch.id}
                          </span>
                          <span className={`font-mono text-[10px] uppercase font-extrabold ${isActive ? 'text-white/90 [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)]' : 'text-[#1A1200]/80 [text-shadow:_0_1px_2px_rgba(255,255,255,0.9)]'}`}>
                            ARCHETYPE
                          </span>
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h4 className={`font-playfair font-extrabold text-xl sm:text-2xl uppercase tracking-wide mb-1 ${
                          isActive 
                            ? 'text-white [text-shadow:_0_2px_10px_rgba(0,0,0,0.95)]' 
                            : 'text-[#1A1200] [text-shadow:_0_1px_4px_rgba(255,255,255,0.9),_0_2px_8px_rgba(255,255,255,0.6)]'
                        }`}>
                          {arch.title}
                        </h4>
                        <p className={`font-mono text-[11px] font-extrabold uppercase tracking-wider ${
                          isActive 
                            ? 'text-[#FFE18A] [text-shadow:_0_1px_6px_rgba(0,0,0,0.9)]' 
                            : 'text-[#8A5A0C] [text-shadow:_0_1px_3px_rgba(255,255,255,0.9)]'
                        }`}>
                          {arch.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* THE NEURAL ARCHETYPE SPECTRUM SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto relative z-10 font-sans">
        <ScrollReveal>
          <div className="bg-[#0a0704]/90 border border-[#3d2e1b] rounded-2xl sm:rounded-3xl p-4 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] space-y-8">
            
            {/* Header Title */}
            <div className="text-center space-y-3 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight font-sans">
                THE NEURAL ARCHETYPE SPECTRUM
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                A comprehensive executive matrix mapping limbic triggers, operational costs, and integrated powers across all 8 archetypes.
              </p>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-xl border border-[#2e2314] bg-[#060403]">
              <table className="w-full text-left border-collapse min-w-[950px]">
                <thead>
                  <tr className="bg-[#120e09] border-b border-[#2e2314]">
                    <th className="p-4 text-[11px] font-mono font-black text-[#e2b13d] uppercase tracking-wider w-[22%]">
                      ARCHETYPE
                    </th>
                    <th className="p-4 text-[11px] font-mono font-black text-[#e2b13d] uppercase tracking-wider w-[20%]">
                      NEUROLOGICAL DRIVER
                    </th>
                    <th className="p-4 text-[11px] font-mono font-black text-[#e2b13d] uppercase tracking-wider w-[20%]">
                      UN-INTEGRATED TRAIT
                    </th>
                    <th className="p-4 text-[11px] font-mono font-black text-[#e2b13d] uppercase tracking-wider w-[19%]">
                      INTEGRATED POWER
                    </th>
                    <th className="p-4 text-[11px] font-mono font-black text-[#e2b13d] uppercase tracking-wider w-[19%]">
                      BUSINESS IMPACT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e170e]">
                  {ARCHETYPE_SPECTRUM_DATA.map((item) => {
                    return (
                      <tr key={item.id} className="hover:bg-[#120e08]/80 transition-colors group">
                        {/* Archetype Column */}
                        <td className="p-4 align-top">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-full border border-[#e2b13d]/60 bg-[#140e08] flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(226,177,61,0.25)] group-hover:scale-105 transition-transform overflow-hidden p-1">
                              <img src={item.iconUrl} alt={item.name} className="w-full h-full object-contain filter brightness-110" referrerPolicy="no-referrer" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider font-sans leading-snug">
                                {item.name}
                              </h4>
                              <span className="text-[9px] font-mono font-bold text-[#e2b13d] uppercase tracking-wider block mt-0.5">
                                {item.subtitle}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Neurological Driver */}
                        <td className="p-4 align-top text-xs text-stone-200 font-sans leading-relaxed">
                          {item.driver}
                        </td>

                        {/* Un-integrated Trait */}
                        <td className="p-4 align-top text-xs text-[#ef4444] font-medium leading-relaxed">
                          {item.unintegrated}
                        </td>

                        {/* Integrated Power */}
                        <td className="p-4 align-top text-xs text-[#fce289] font-bold leading-relaxed">
                          {item.integrated}
                        </td>

                        {/* Business Impact */}
                        <td className="p-4 align-top text-xs text-stone-300 font-sans leading-relaxed">
                          {item.impact}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 3: THE TRANSFORMATION */}
      <section className="py-16 sm:py-24 px-4 sm:px-12 relative overflow-hidden border-t border-b border-[#E2B13D]/30">
        
        {/* Background Image with Dramatic Contrast & Vignette Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784916891/section_2_background_jkhxkm.png" 
            alt="Transformation Background" 
            className="w-full h-full object-cover object-center opacity-85 contrast-125 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-black/50 to-[#050505]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#E2B13D]/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-10 sm:mb-16 px-2">
            <span className="uppercase tracking-[0.3em] text-[#E2B13D] text-[10px] sm:text-xs font-mono font-bold block mb-2 [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]">
              REGENESIS CODE
            </span>
            <h2 className="font-playfair font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase [text-shadow:_0_4px_20px_rgba(0,0,0,0.95)]">
              THE TRANSFORMATION
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#E2B13D] to-transparent mx-auto mt-3 sm:mt-4 shadow-[0_0_12px_rgba(226,177,61,0.8)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            {/* THE PHOENIX */}
            <div className="bg-[#0D0B08]/90 backdrop-blur-md border border-[#E2B13D]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:border-[#E2B13D] transition-all duration-500">
              {/* Seamless Artwork Display */}
              <div className="w-full h-44 sm:h-56 mb-4 sm:mb-6 flex items-center justify-center relative mt-2 sm:mt-0">
                <div className="absolute inset-0 bg-[#E2B13D]/15 rounded-full blur-2xl pointer-events-none" />
                <img 
                  src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784909202/phoenix_2_djhgsl.png" 
                  alt="The Phoenix" 
                  className="max-h-full max-w-full object-contain scale-[122%] sm:scale-[131%] drop-shadow-[0_0_25px_rgba(226,177,61,0.45)] relative z-10" 
                />
              </div>

              <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white uppercase tracking-wider mb-1">
                THE PHOENIX
              </h3>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#E2B13D] uppercase tracking-widest mb-3 sm:mb-4">
                (The Force of Rebirth)
              </span>

              <p className="font-inter text-xs text-white/85 leading-relaxed mb-6">
                The mechanism of evolution. The Phoenix is the biological capacity for total identity rebirth. It allows the &quot;Old Operating System&quot; to burn away so a more complex, capable version of the leader can rise from the ashes.
              </p>

              <div className="w-full text-left space-y-2 pt-4 border-t border-[#E2B13D]/20 font-inter text-xs">
                <div>
                  <strong className="text-[#E2B13D]">The Science:</strong> <span className="text-white/90">Neuroplasticity &amp; Systemic Recoding (Myelination).</span>
                </div>
                <div>
                  <strong className="text-[#E2B13D]">The Business Cost:</strong> <span className="text-white/90">Plateauing. Trying to lead a $100M company with the mindset of a $1M startup founder.</span>
                </div>
              </div>
            </div>

            {/* THE ONE */}
            <div className="bg-[#0D0B08]/90 backdrop-blur-md border-2 border-[#E2B13D] rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(226,177,61,0.25)] hover:shadow-[0_20px_60px_rgba(226,177,61,0.4)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#E2B13D] text-black font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-bl-xl z-20">
                ULTIMATE STATE
              </div>

              {/* Seamless Artwork Display */}
              <div className="w-full h-44 sm:h-56 mb-4 sm:mb-6 flex items-center justify-center relative mt-2 sm:mt-0">
                <div className="absolute inset-0 bg-[#E2B13D]/15 rounded-full blur-2xl pointer-events-none" />
                <img 
                  src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784908934/the_one_3_bgyavy.png" 
                  alt="The One" 
                  className="max-h-full max-w-full object-contain drop-shadow-[0_0_25px_rgba(226,177,61,0.45)] relative z-10" 
                />
              </div>

              <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white uppercase tracking-wider mb-1">
                THE ONE
              </h3>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#E2B13D] uppercase tracking-widest mb-3 sm:mb-4">
                (Optimized Neuro-Biological Evolution)
              </span>

              <p className="font-inter text-xs text-white/85 leading-relaxed mb-6">
                The goal of REGENESIS isn't to kill the Fire Beasts—it's to <strong className="text-[#E2B13D]">integrate</strong> them. When the Ghost is &quot;Date-Stamped&quot; and the Beasts serve the Architect, you move from Limbic Friction to <strong className="text-white">Flow</strong>.
              </p>

              <div className="w-full text-center pt-4 border-t border-[#E2B13D]/30 font-inter text-xs">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#E2B13D] font-bold uppercase tracking-wider block mb-1">
                  The Mantra
                </span>
                <p className="font-playfair text-xs sm:text-sm text-white italic">
                  Master the Beasts, Rule the Theater. Become the ONE.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* CALLOUT / ASSESSMENT BANNER (GOLD METALLIC PATHWAY) */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto relative z-10 font-sans">
        <ScrollReveal>
          <div className="bg-gradient-to-b from-[#dfa938] via-[#f7d679] to-[#ba8925] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-[0_15px_50px_rgba(226,177,61,0.3)] border border-[#fce289]/50 relative overflow-hidden flex flex-col items-center justify-center space-y-4 sm:space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-black/10 backdrop-blur-md border border-black/10 text-[10px] sm:text-xs font-mono font-bold text-black uppercase tracking-widest shadow-sm">
              THE REGENESIS PATHWAY
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight font-sans leading-tight max-w-4xl drop-shadow-sm">
              YOUR MYTHOLOGY IS YOUR DESTINY
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-black/85 font-sans font-medium max-w-2xl sm:max-w-3xl leading-relaxed">
              Rewrite the source code governing your inner theater. Discover which Neural Archetype currently controls your high-stakes executive decisions and upgrade to sovereign leadership.
            </p>

            {/* Black Pill Button */}
            <button
              onClick={onOpenMirrorQuiz}
              className="mt-2 px-8 py-3.5 sm:py-4 rounded-full bg-black text-[#fce289] hover:bg-stone-900 font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>SCHEDULE NEURAL AUDIT</span>
              <ArrowRight className="w-4 h-4 text-[#fce289] group-hover:translate-x-1 transition-transform" />
            </button>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
