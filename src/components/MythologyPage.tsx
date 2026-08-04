import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import archetypesBgImage from '../assets/images/archetypes_bg_1784904573049.jpg';
import goldenFigureBg from '../assets/images/golden_figure_bg_1785192950234.jpg';
import { ScrollReveal } from './ScrollReveal';
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

export interface CastMember {
  id: string;
  name: string;
  role: string;
  image: string;
  iconUrl: string;
  description: string;
  wounded: string;
  integrated: string;
  science: string;
  costsYou: string;
  quote: string;
  woundedTrigger: string;
}

const CAST_MEMBERS: CastMember[] = [
  {
    id: 'commander',
    name: 'THE COMMANDER',
    role: 'The Force of Command',
    image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/lion_3_qe41hj.png',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784908207/lion_4_mncbur.png',
    description: 'The part of you that decides. Runs the day, holds the line under pressure, and can talk the rest of the system down mid-reaction.',
    wounded: 'Goes offline. When the load gets heavy enough, the Commander shuts down and the reactive parts take the wheel — which is why you can know exactly what to do and do the opposite anyway.',
    integrated: 'Stays online when it counts. The steady hand that keeps the whole cast working for you instead of against you.',
    science: 'Prefrontal executive function — regulation and top-down control',
    costsYou: 'The decisions you\'d never have made if you\'d been fully at the wheel.',
    quote: '"A plan is worth nothing if nobody\'s at the wheel when the pressure hits."',
    woundedTrigger: 'Losing control under heavy pressure'
  },
  {
    id: 'eagle',
    name: 'THE EAGLE',
    role: 'The Force of Vision',
    image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/eagle_3_cdoiua.png',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/eagle_3_cdoiua.png',
    description: 'Altitude. The part that sees the whole board, reads what\'s coming, and runs the future in your head before it arrives.',
    wounded: 'Circles. Runs disaster simulations so vivid your body reacts to them, or sees every angle and commits to none.',
    integrated: 'Clarity at height — and the discipline to land.',
    science: 'Perception, pattern recognition, and mental simulation',
    costsYou: 'Years of preparing for a thing you never started.',
    quote: '"You can\'t navigate the storm from inside the clouds."',
    woundedTrigger: 'Information overload and noise interference'
  },
  {
    id: 'tiger',
    name: 'THE TIGER',
    role: 'The Force of Mobilization',
    image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/tiger_3_ntkkpl.png',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/tiger_3_ntkkpl.png',
    description: 'Your accelerator. The surge that gets you moving when something matters.',
    wounded: 'Fires first, asks later. Heat, edge, and damage done to the people closest to you before you chose any of it.',
    integrated: 'Decisive force. Speed and follow-through, aimed where you point it.',
    science: 'Sympathetic Overdrive — threat mobilization',
    costsYou: 'Relationships burned by a reaction that was never a decision.',
    quote: '"The Tiger burns the village, or it fuels the engine. You decide where the fire goes."',
    woundedTrigger: 'Perceived threat or loss of control'
  },
  {
    id: 'wolf',
    name: 'THE WOLF',
    role: 'The Force of Belonging',
    image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/wolf_3_ucpviw.png',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/wolf_3_ucpviw.png',
    description: 'The part of you built for the pack. Trust, loyalty, the pull toward people.',
    wounded: 'Appeases. Says yes when it means no, keeps the peace at your own expense, manages everyone\'s comfort but your own.',
    integrated: 'Builds the pack. Trust that multiplies what one person can do alone.',
    science: 'Social Compliance Appeasement — bonding and co-regulation',
    costsYou: 'A life shaped around not being left out.',
    quote: '"The pack is worth belonging to. It was never worth disappearing into."',
    woundedTrigger: 'Fear of conflict or being left out'
  },
  {
    id: 'lion',
    name: 'THE LION',
    role: 'The Force of Presence',
    image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/lion_3_qe41hj.png',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784842375/lion_3_qe41hj.png',
    description: 'How much room you take up. Whether a room registers you before you speak.',
    wounded: 'Shrinks. Goes quiet in the rooms that matter, defers on instinct, then resents the silence.',
    integrated: 'Steady presence. Authority that doesn\'t need volume.',
    science: 'The biology of presence — steadiness under social pressure',
    costsYou: 'Being overlooked in rooms you belong in.',
    quote: '"The Lion doesn\'t roar to be heard. It\'s heard before it speaks."',
    woundedTrigger: 'Fear of exposure or being judged'
  },
  {
    id: 'phoenix',
    name: 'THE PHOENIX',
    role: 'The Force of Rebirth',
    image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784909202/phoenix_2_djhgsl.png',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784909202/phoenix_2_djhgsl.png',
    description: 'The reason none of this is fixed. Your system can rewire — that\'s not a metaphor, it\'s the mechanism.',
    wounded: 'Dormant. Loyal to a version of yourself that expired years ago.',
    integrated: 'Deliberate reinvention. Letting an old build end so a truer one can run.',
    science: 'Neuroplasticity — the system\'s capacity to change',
    costsYou: 'Running your life today on a system you built at nineteen.',
    quote: '"Every ending is a beginning disguised in smoke."',
    woundedTrigger: 'Identity stagnation or fear of change'
  },
  {
    id: 'egon',
    name: 'EGON',
    role: 'The Protector',
    image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ego_2_mkoyo2.png',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ego_2_mkoyo2.png',
    description: 'The voice that talks you out of things. EGON isn\'t your enemy and he isn\'t trying to hold you back — he\'s trying to keep you safe, and he was built when safety was the only thing that mattered.\n\nHis vow was made when you were small: keep you unnoticed so you\'re never targeted, keep you grinding so you\'re never caught short. He kept it. He\'s still keeping it.\n\nHe\'ll shut down the launch before he\'ll risk the exposure.',
    wounded: 'Runs the whole show. Every expansion reads as exposure, so nothing ships.',
    integrated: 'Stands down. Still watching, no longer deciding.',
    science: 'Default Mode Network — the self-protective narrator',
    costsYou: 'The pivot you didn\'t make. The thing you never shipped.',
    quote: '"EGON doesn\'t want you to be great. He wants you to be safe."',
    woundedTrigger: 'Perceived exposure or risk'
  },
  {
    id: 'ghost',
    name: 'THE GHOST',
    role: 'The Undated Files',
    image: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ghost_2_mftngr.png',
    iconUrl: 'https://res.cloudinary.com/ew2ztpgz/image/upload/v1784904795/ghost_2_mftngr.png',
    description: 'The part of your system still responding to something that already ended. Experience that was never filed as finished — so it keeps getting treated as current.\n\nYou don\'t remember it as a memory. You feel it as a reaction that doesn\'t fit the room.',
    wounded: 'Runs the present on old footage. Today gets read through something that happened decades ago.',
    integrated: 'Filed and dated. The past becomes history instead of a live threat.',
    science: 'Early experience stored without a timestamp',
    costsYou: 'Fighting today with yesterday\'s defenses.',
    quote: '"The threat ended years ago. Nobody told your body."',
    woundedTrigger: 'Unresolved past threat triggers'
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
  const [activeCastIndex, setActiveCastIndex] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Always scroll window to top when MythologyPage mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Horizontally scroll the carousel container when user selects a different member card
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const cardEl = document.getElementById(`cast-card-${activeCastIndex}`);
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
  }, [activeCastIndex]);

  const currentMember = CAST_MEMBERS[activeCastIndex];

  return (
    <div className="w-full bg-[#050505] text-[#FFFFFF] min-h-screen">
      
      {/* SECTION 1 — HERO */}
      <section className="relative pt-16 pb-20 px-4 sm:px-12 max-w-[1600px] mx-auto text-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784903667/myth_hero_jilt9p.png" 
            alt="The Mythology Background" 
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-black/50 to-[#050505]" />
        </div>

        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[500px] bg-gradient-to-r from-[#E2B13D]/10 via-[#7E4F11]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-6 px-2">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A150C] border border-[#C9A227]/50 font-mono text-[11px] font-bold text-[#E2B13D] uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>THE MYTHOLOGY</span>
          </div>

          <h1 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-6xl text-[#FFFFFF] tracking-tight uppercase leading-snug sm:leading-tight drop-shadow-md">
            The Theater of Identity
          </h1>

          <div className="space-y-3 font-inter text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-3xl mx-auto pt-2">
            <p>
              Your biology doesn't explain itself. It just acts, and then you spend years wondering why you snapped, why you shrank, why you couldn't start.
            </p>
            <p className="font-semibold text-[#E2B13D]">
              So we gave it a cast.
            </p>
            <p>
              The Commander, the Eagle, the Tiger, the Wolf, the Lion, the Phoenix, EGON, and the Ghost aren't personality types. They're your parts, the same parts everyone has. They're what your survival system looks like when you can finally see it working.
            </p>
            <p className="text-stone-300 font-light pt-1">
              This is the story layer of REGENESIS: the same architecture the science describes, told the way you actually live it.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onOpenMirrorQuiz}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7E4F11] via-[#C9962F] to-[#E2B13D] text-[#000000] font-inter font-black text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 cursor-pointer shadow-[0_4px_30px_rgba(226,177,61,0.4)] hover:shadow-[0_6px_40px_rgba(226,177,61,0.7)] hover:scale-105 transition-all duration-300"
            >
              <span>GET EARLY ACCESS TO THE MIRROR QUIZ</span>
              <ArrowRight className="w-4 h-4 text-[#000000]" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 2 — THE FRAME */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-4xl mx-auto text-center border-t border-[#C9A227]/20 relative">
        <ScrollReveal>
          <div className="bg-[#0A0805]/80 border border-[#C9A227]/30 rounded-2xl p-6 sm:p-10 backdrop-blur-md space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <h2 className="font-playfair font-bold text-2xl sm:text-4xl text-[#FFFFFF] tracking-tight">
              You have all of them.
            </h2>
            <p className="font-inter text-xs sm:text-sm text-stone-200 leading-relaxed">
              This isn't a test that sorts you into a type. Every human system runs every one of these forces — the difference is which ones are running you.
            </p>
            <p className="font-inter text-xs sm:text-sm text-stone-300 leading-relaxed">
              Each one has two states. <span className="text-[#EF4444] font-semibold">Wounded</span>, when it's protecting you from something that already happened. <span className="text-[#FCE289] font-semibold">Integrated</span>, when it's working for the life you're actually building.
            </p>
            <p className="font-inter text-xs sm:text-sm text-[#E2B13D] font-medium leading-relaxed pt-2 border-t border-[#C9A227]/20">
              Nothing here needs to be killed. The Tiger isn't the problem. An unsupervised Tiger is.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 3 — THE CAST */}
      <section className="py-12 sm:py-20 px-3 sm:px-8 lg:px-12 relative overflow-hidden border-t border-b border-[#C9A227]/20">
        
        {/* Background Image with Contrast Vignette */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={archetypesBgImage} 
            alt="The Cast Background" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505]" />
        </div>

        <div className="max-w-[1550px] mx-auto relative z-10">
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-2">
              <span className="uppercase tracking-[0.25em] text-[#C9A227] text-[10px] sm:text-xs font-mono font-bold block mb-2">
                THE CAST
              </span>
              <h2 className="font-playfair font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
                The Eight Forces
              </h2>
              <div className="w-20 h-0.5 bg-[#C9A227] mx-auto my-4" />
              <p className="font-inter text-xs sm:text-sm text-stone-300 max-w-[60ch] mx-auto leading-relaxed">
                Explore the eight internal forces that govern human performance under pressure. Select a card to view its dual states, science tag, and cost.
              </p>
            </div>
          </ScrollReveal>

          {/* INTERACTIVE CAROUSEL & CARD DISPLAY */}
          <div className="bg-gradient-to-b from-[#0C0A07] via-[#090705] to-[#050505] rounded-[20px] sm:rounded-[32px] p-4 sm:p-8 lg:p-12 border border-[#C9A227]/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12 relative overflow-hidden">
            
            {/* MOBILE QUICK-SELECT PILLS BAR */}
            <div className="lg:hidden flex items-center justify-start gap-2 overflow-x-auto pb-2 -mx-1 px-1 relative z-20 no-scrollbar">
              {CAST_MEMBERS.map((member, idx) => {
                const isActive = idx === activeCastIndex;
                return (
                  <button
                    key={member.id}
                    onClick={() => setActiveCastIndex(idx)}
                    className={`shrink-0 px-3 py-1.5 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#C9A227] text-[#000000] shadow-md ring-2 ring-[#FFE18A]'
                        : 'bg-[#1A150C] text-[#C9A227] border border-[#C9A227]/30 hover:border-[#C9A227]'
                    }`}
                  >
                    <span>{member.name}</span>
                  </button>
                );
              })}
            </div>

            {/* FAR LEFT: VERTICAL TIMELINE / STEP INDICATOR (DESKTOP) */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-2.5 pr-4 border-r border-[#C9A227]/20 relative z-10 shrink-0">
              {CAST_MEMBERS.map((member, idx) => {
                const isActive = idx === activeCastIndex;
                return (
                  <button
                    key={member.id}
                    onClick={() => setActiveCastIndex(idx)}
                    className={`relative rounded-full transition-all duration-300 cursor-pointer overflow-hidden p-0.5 ${
                      isActive
                        ? 'w-11 h-11 bg-gradient-to-br from-[#FFE18A] to-[#C9A227] shadow-lg ring-2 ring-[#C9A227] scale-105'
                        : 'w-8 h-8 bg-[#1A150C] opacity-70 hover:opacity-100 hover:scale-105 border border-[#C9A227]/40'
                    }`}
                    title={member.name}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className={`w-full h-full object-cover object-center transition-transform duration-300 ${
                          isActive ? 'scale-110 contrast-110' : 'scale-100 opacity-80'
                        }`} 
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* LEFT COLUMN: ACTIVE CHARACTER DETAILS PANEL */}
            <div className="lg:w-5/12 flex flex-col justify-between relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCastIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="space-y-4 sm:space-y-5"
                >
                  <div>
                    {/* MOBILE ARTWORK DISPLAY */}
                    <div className="lg:hidden relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-4 border-2 border-[#C9A227]/40 shadow-[0_10px_25px_rgba(0,0,0,0.5)] bg-black/90 group">
                      <img 
                        src={currentMember.image} 
                        alt={currentMember.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full border border-[#C9A227]/50 font-mono text-[10px] text-[#FFE18A] uppercase font-bold tracking-widest z-10">
                        {String(activeCastIndex + 1).padStart(2, '0')} / {String(CAST_MEMBERS.length).padStart(2, '0')}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <span className="font-mono text-[11px] font-bold text-[#FFE18A] uppercase tracking-wider block drop-shadow-md">
                          {currentMember.role}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-playfair font-bold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                      {currentMember.name}
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#C9A227] uppercase tracking-wider mt-1">
                      {currentMember.role}
                    </p>
                  </div>

                  <p className="font-inter text-xs sm:text-sm text-stone-200 leading-relaxed whitespace-pre-line">
                    {currentMember.description}
                  </p>

                  {/* Dual States Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#140C08] border border-[#EF4444]/30 space-y-1">
                      <span className="font-mono text-[10px] text-[#EF4444] uppercase font-bold tracking-wider block">
                        WOUNDED STATE
                      </span>
                      <p className="font-inter text-xs text-stone-300 leading-relaxed">
                        {currentMember.wounded}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0E150C] border border-[#C9A227]/40 space-y-1">
                      <span className="font-mono text-[10px] text-[#FCE289] uppercase font-bold tracking-wider block">
                        INTEGRATED STATE
                      </span>
                      <p className="font-inter text-xs text-stone-200 leading-relaxed">
                        {currentMember.integrated}
                      </p>
                    </div>
                  </div>

                  {/* Science & Cost Box */}
                  <div className="p-4 rounded-xl bg-[#090705] border border-[#C9A227]/25 space-y-2.5 font-inter text-xs">
                    <div>
                      <strong className="text-[#C9A227] block text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">The Science</strong>
                      <span className="text-stone-200 leading-normal">{currentMember.science}</span>
                    </div>
                    <div>
                      <strong className="text-[#C9A227] block text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5">What It Costs You</strong>
                      <span className="text-stone-200 leading-normal">{currentMember.costsYou}</span>
                    </div>
                  </div>

                  {/* Consistent Single Quote Line */}
                  <div className="p-4 rounded-xl bg-[#1A150C] border-l-2 border-[#C9A227] text-center italic font-playfair text-xs sm:text-sm text-[#FCE289]">
                    {currentMember.quote}
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Carousel Nav Controls */}
              <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-[#C9A227]/20 mt-6 sm:mt-8">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveCastIndex((prev) => (prev > 0 ? prev - 1 : CAST_MEMBERS.length - 1))}
                    className="w-10 h-10 rounded-full border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-black transition-colors cursor-pointer"
                    aria-label="Previous Character"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveCastIndex((prev) => (prev < CAST_MEMBERS.length - 1 ? prev + 1 : 0))}
                    className="w-10 h-10 rounded-full border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-black transition-colors cursor-pointer"
                    aria-label="Next Character"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="font-mono text-xs text-stone-400 font-semibold tracking-wider">
                  CHARACTER <span className="text-[#C9A227] font-bold">{String(activeCastIndex + 1).padStart(2, '0')}</span> OF <span className="text-white font-bold">{String(CAST_MEMBERS.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CAROUSEL CARDS TRACK (DESKTOP) */}
            <div className="hidden lg:flex lg:w-7/12 relative overflow-hidden py-2 items-center z-10">
              <div 
                ref={carouselTrackRef}
                className="w-full flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth px-1"
              >
                {CAST_MEMBERS.map((member, idx) => {
                  const isActive = idx === activeCastIndex;
                  return (
                    <motion.div
                      key={member.id}
                      id={`cast-card-${idx}`}
                      onClick={() => setActiveCastIndex(idx)}
                      whileHover={{ y: -4 }}
                      animate={{
                        scale: isActive ? 1.02 : 0.95,
                        opacity: isActive ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 w-[310px] min-h-[460px] snap-center rounded-[24px] p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden ${
                        isActive
                          ? 'bg-gradient-to-br from-[#1F190E] via-[#141009] to-[#0A0805] text-white border-2 border-[#C9A227] shadow-[0_20px_50px_rgba(201,162,39,0.3)]'
                          : 'bg-[#0D0B08] text-stone-300 border border-[#C9A227]/30 hover:border-[#C9A227]/60 shadow-lg'
                      }`}
                    >
                      {/* Artwork Background */}
                      {member.image && (
                        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[24px]">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className={`w-full h-full object-cover object-center transition-all duration-500 transform ${
                              isActive 
                                ? 'opacity-100 scale-105 contrast-110' 
                                : 'opacity-70 contrast-100'
                            }`}
                          />
                          <div className={`absolute inset-0 z-1 pointer-events-none ${
                            isActive 
                              ? 'bg-gradient-to-t from-black/95 via-black/40 to-black/30' 
                              : 'bg-gradient-to-t from-black/95 via-black/60 to-black/40'
                          }`} />
                        </div>
                      )}

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="uppercase tracking-[0.2em] text-[10px] font-mono font-extrabold text-[#C9A227]">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-mono text-[10px] uppercase font-bold text-stone-400">
                          THE CAST
                        </span>
                      </div>

                      <div className="relative z-10">
                        <h4 className="font-playfair font-extrabold text-xl uppercase tracking-wide mb-1 text-white">
                          {member.name}
                        </h4>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#C9A227]">
                          {member.role}
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

      {/* SECTION 4 — THE CAST AT A GLANCE (THE TABLE) */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto relative z-10 font-sans">
        <ScrollReveal>
          <div className="bg-[#0A0805]/95 border border-[#C9A227]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.9)] space-y-6">
            
            {/* Header Title */}
            <div className="text-center space-y-2 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight font-sans">
                THE CAST AT A GLANCE
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                A structured overview mapping the eight forces, what drives each, their wounded and integrated states, and what un-integrated driving costs you.
              </p>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto rounded-xl border border-[#C9A227]/25 bg-[#050403]">
              <table className="w-full text-left border-collapse min-w-[950px]">
                <thead>
                  <tr className="bg-[#120E09] border-b border-[#C9A227]/30">
                    <th className="p-4 text-[11px] font-mono font-black text-[#C9A227] uppercase tracking-wider w-[20%]">
                      CHARACTER
                    </th>
                    <th className="p-4 text-[11px] font-mono font-black text-[#C9A227] uppercase tracking-wider w-[20%]">
                      WHAT DRIVES IT
                    </th>
                    <th className="p-4 text-[11px] font-mono font-black text-[#C9A227] uppercase tracking-wider w-[20%]">
                      WOUNDED STATE
                    </th>
                    <th className="p-4 text-[11px] font-mono font-black text-[#C9A227] uppercase tracking-wider w-[20%]">
                      INTEGRATED STATE
                    </th>
                    <th className="p-4 text-[11px] font-mono font-black text-[#C9A227] uppercase tracking-wider w-[20%]">
                      WHAT IT COSTS YOU
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#22180E]">
                  {CAST_MEMBERS.map((item) => {
                    return (
                      <tr key={item.id} className="hover:bg-[#120E08]/80 transition-colors group">
                        {/* Character Column */}
                        <td className="p-4 align-top">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full border border-[#C9A227]/60 bg-[#140E08] flex items-center justify-center shrink-0 overflow-hidden p-0.5">
                              <img src={item.iconUrl} alt={item.name} className="w-full h-full object-contain filter brightness-110" referrerPolicy="no-referrer" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider font-sans leading-snug">
                                {item.name}
                              </h4>
                              <span className="text-[9px] font-mono font-bold text-[#C9A227] uppercase tracking-wider block mt-0.5">
                                {item.role}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* What Drives It */}
                        <td className="p-4 align-top text-xs text-stone-200 font-sans leading-relaxed">
                          {item.science}
                        </td>

                        {/* Wounded State */}
                        <td className="p-4 align-top text-xs text-[#EF4444] font-medium leading-relaxed">
                          <span className="font-bold block text-[10px] uppercase text-[#EF4444]/80 mb-0.5">Trigger: {item.woundedTrigger}</span>
                          {item.wounded}
                        </td>

                        {/* Integrated State */}
                        <td className="p-4 align-top text-xs text-[#FCE289] font-semibold leading-relaxed">
                          {item.integrated}
                        </td>

                        {/* What It Costs You */}
                        <td className="p-4 align-top text-xs text-stone-300 font-sans leading-relaxed">
                          {item.costsYou}
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

      {/* SECTION 5 — THE ONE */}
      <section className="py-16 sm:py-24 px-4 sm:px-12 relative overflow-hidden border-t border-b border-[#C9A227]/30">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784916891/section_2_background_jkhxkm.png" 
            alt="The ONE Background" 
            className="w-full h-full object-cover object-center opacity-80 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-black/80 to-[#050505]/95" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="bg-[#0D0B08]/95 backdrop-blur-md border-2 border-[#C9A227] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(201,162,39,0.25)] space-y-6">
            
            <div className="inline-block px-3 py-1 bg-[#C9A227] text-black font-mono text-[10px] font-bold uppercase tracking-wider rounded-full">
              OPTIMIZED STATE
            </div>

            <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-white uppercase tracking-wider">
              THE ONE
            </h2>

            <p className="font-mono text-xs sm:text-sm text-[#C9A227] font-semibold uppercase tracking-widest">
              Optimized Neuro-Biological Evolution
            </p>

            {/* THE ONE Image Artwork */}
            <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-[#C9A227]/60 shadow-[0_10px_35px_rgba(201,162,39,0.3)] my-4 bg-[#0a0805] flex items-center justify-center p-2">
              <img 
                src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784908934/the_one_3_bgyavy.png" 
                alt="THE ONE — Optimized Neuro-Biological Evolution" 
                className="w-full h-auto max-h-[500px] object-contain rounded-xl contrast-110"
              />
            </div>

            <p className="font-inter text-sm sm:text-base text-[#FCE289] font-medium italic">
              The goal was never to kill the beasts. It's to command them.
            </p>

            <div className="space-y-4 font-inter text-xs sm:text-sm text-stone-200 leading-relaxed text-left max-w-3xl mx-auto pt-2">
              <p>
                The ONE is what it looks like when the Ghost is finally filed as finished, EGON stands down, and the Commander, Eagle, Tiger, Wolf, and Lion answer to you instead of running you. Not a type. Not a personality. A state your system can operate from.
              </p>
              <p>
                What changes: the system reads challenge as challenge, not threat. What you get: access to your full native capacity — drive without the internal war. What it looks like: sustained output with far less internal friction.
              </p>
            </div>

            <div className="pt-6 border-t border-[#C9A227]/30">
              <p className="font-playfair font-bold text-base sm:text-xl text-[#FCE289] italic">
                &ldquo;Master the Beasts, Rule the Theater. Become the ONE.&rdquo;
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6 — CLOSE */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-4xl mx-auto text-center relative z-10 font-sans">
        <ScrollReveal>
          <div className="bg-gradient-to-b from-[#1F180C] via-[#141008] to-[#0A0804] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-14 text-center shadow-[0_15px_50px_rgba(201,162,39,0.3)] border border-[#C9A227]/40 space-y-6 flex flex-col items-center">
            
            <h2 className="text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight font-serif leading-tight">
              Which one is running you?
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-stone-200 font-sans max-w-2xl leading-relaxed">
              The Mirror Quiz reads your system and shows you what's actually driving.
            </p>

            <div className="pt-2 flex flex-col items-center gap-4">
              <button
                onClick={onOpenMirrorQuiz}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7E4F11] via-[#C9962F] to-[#E2B13D] text-[#000000] font-inter font-black text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 cursor-pointer shadow-[0_4px_30px_rgba(226,177,61,0.45)] hover:shadow-[0_6px_40px_rgba(226,177,61,0.7)] hover:scale-105 transition-all duration-300"
              >
                <span>GET EARLY ACCESS TO THE MIRROR QUIZ</span>
                <ArrowRight className="w-4 h-4 text-[#000000]" />
              </button>

              <button
                onClick={onOpenSpeakerKit}
                className="text-xs font-mono font-semibold text-[#C9A227] hover:text-[#FFE18A] uppercase tracking-wider underline underline-offset-4 cursor-pointer transition-colors pt-2"
              >
                Work With Thomas
              </button>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
