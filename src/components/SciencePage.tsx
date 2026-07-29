import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Activity, 
  Zap, 
  Dna, 
  Database, 
  Users, 
  UserCheck, 
  Radio, 
  Sparkles,
  ArrowRight,
  Play,
  X,
  Atom,
  Compass,
  Maximize2
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { magnifierDnaZoomImg } from '../data/content';
import magnifierDnaHumanImg from '../assets/images/magnifier_dna_human_1785264440424.jpg';

interface SciencePageProps {
  onOpenSpeakerKit: () => void;
  onOpenContact: () => void;
  onOpenWaitlist: () => void;
  onOpenMirrorQuiz: () => void;
}

interface LensItem {
  num: string;
  id: string;
  name: string;
  subtitle: string;
  radialLabel: string;
  // Angle in degrees around orbital diagram (0deg = top center)
  radialAngle: number;
}

const TEN_LENSES_DATA: LensItem[] = [
  {
    num: '01',
    id: 'neuroscience',
    name: 'Neuroscience',
    subtitle: 'Neuroplasticity, regulating the brain and behavioral adaptation.',
    radialLabel: 'NEUROSCIENCE',
    radialAngle: 252
  },
  {
    num: '02',
    id: 'cybernetics',
    name: 'Cybernetics',
    subtitle: 'Feedback, control & systems engineering the blueprint of human behavior.',
    radialLabel: 'CYBERNETICS',
    radialAngle: 72
  },
  {
    num: '03',
    id: 'polyvagal',
    name: 'Polyvagal Theory',
    subtitle: 'Vagal Brake Precision. Converting the Shift from Survival to Visionary states.',
    radialLabel: 'POLYVAGAL THEORY',
    radialAngle: 324
  },
  {
    num: '04',
    id: 'bioenergetics',
    name: 'Bio-Energetics',
    subtitle: 'Mitochondrial efficiency. Maximizing ATP for high-output broadcasting.',
    radialLabel: 'BIO-ENERGETICS',
    radialAngle: 180
  },
  {
    num: '05',
    id: 'biology',
    name: 'Biology',
    subtitle: 'The foundation of life. Structuring the organism floor to elevate signal noise.',
    radialLabel: 'BIOLOGY',
    radialAngle: 216
  },
  {
    num: '06',
    id: 'epigenetics',
    name: 'Epigenetics',
    subtitle: 'Gene Expression Control. Directing environmental inputs to unlock potential.',
    radialLabel: 'EPIGENETICS',
    radialAngle: 144
  },
  {
    num: '07',
    id: 'memoryscience',
    name: 'Memory Science',
    subtitle: 'Memory Architecture. Engineering survival keys to new system resources.',
    radialLabel: 'MEMORY SCIENCE',
    radialAngle: 36
  },
  {
    num: '08',
    id: 'sociology',
    name: 'Sociology',
    subtitle: 'Network Resonance. Engineering cultural influence & social environments.',
    radialLabel: 'SOCIOLOGY',
    radialAngle: 108
  },
  {
    num: '09',
    id: 'psychology',
    name: 'Psychology',
    subtitle: 'Executive Identity. Empowering the internal CEO to rewrite the source code.',
    radialLabel: 'PSYCHOLOGY',
    radialAngle: 0
  },
  {
    num: '10',
    id: 'biophysics',
    name: 'Biophysics',
    subtitle: 'Signal Velocity. Optimizing White Matter for ultrafast cognitive processing.',
    radialLabel: 'BIOPHYSICS',
    radialAngle: 288
  }
];

// Helper to render lens gold icon
const renderLensIcon = (id: string, className = "w-6 h-6 text-[#E2B13D]") => {
  switch (id) {
    case 'neuroscience':
      return <Brain className={className} />;
    case 'cybernetics':
      return <Cpu className={className} />;
    case 'polyvagal':
      return <Activity className={className} />;
    case 'bioenergetics':
      return <Zap className={className} />;
    case 'biology':
      return <Dna className={className} />;
    case 'epigenetics':
      return <Sparkles className={className} />;
    case 'memoryscience':
      return <Database className={className} />;
    case 'sociology':
      return <Users className={className} />;
    case 'psychology':
      return <UserCheck className={className} />;
    case 'biophysics':
      return <Radio className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

const GoldEmblemLogo: React.FC<{ id: string; className?: string }> = ({ id, className = "w-10 h-10" }) => {
  return (
    <div className={`relative rounded-full bg-gradient-to-b from-[#FFE58F] via-[#C9962F] to-[#59390B] p-[1.5px] shadow-[0_0_15px_rgba(201,150,47,0.3)] shrink-0 ${className}`}>
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#241A0D] via-[#120D06] to-[#080502] border border-[#F2D075]/40 flex items-center justify-center p-1.5">
        {renderLensIcon(id, "w-5 h-5 text-[#FFD700]")}
      </div>
    </div>
  );
};

const coreNodeImageImg = magnifierDnaZoomImg;

const lensPositions: Record<string, { x: number; y: number }> = {
  psychology: { x: 50, y: 15 },
  memoryscience: { x: 73, y: 24 },
  cybernetics: { x: 86, y: 48 },
  sociology: { x: 84, y: 72 },
  epigenetics: { x: 68, y: 86 },
  bioenergetics: { x: 50, y: 88 },
  biology: { x: 32, y: 83 },
  neuroscience: { x: 18, y: 70 },
  biophysics: { x: 14, y: 48 },
  polyvagal: { x: 26, y: 24 },
};

const SCIENCE_LENSES = [
  { 
    id: 'neuroscience', 
    name: 'Neuroscience', 
    shortTitle: 'NEUROSCIENCE', 
    iconSymbol: '01', 
    category: 'NEURO', 
    targetSystem: 'Prefrontal Cortical Networks & Limbic Gating', 
    executiveImpact: 'Eliminates threat-response decision delays and enhances high-stakes cognitive clarity.',
    description: 'Neuroscience optimizes prefrontal cortical gating and limbic threat regulation. By training nervous system tone and neuroplasticity, decision-makers maintain calm mental clarity during acute volatility and decouple stress signals from executive judgment.'
  },
  { 
    id: 'cybernetics', 
    name: 'Cybernetics', 
    shortTitle: 'CYBERNETICS', 
    iconSymbol: '02', 
    category: 'CONTROL', 
    targetSystem: 'Autonomic Feedback Loops & Homeostatic Controls', 
    executiveImpact: 'Engineers self-correcting executive systems that automatically reset stress baseline.',
    description: 'Cybernetics establishes self-regulating feedback loops across physiological and cognitive states. It provides homeostatic automated reset mechanisms that return nervous system baselines to optimal performance within minutes after intense pressure spikes.'
  },
  { 
    id: 'polyvagal', 
    name: 'Polyvagal Theory', 
    shortTitle: 'POLYVAGAL TH...', 
    iconSymbol: '03', 
    category: 'AUTONOMIC', 
    targetSystem: 'Vagus Nerve Tone & Autonomic Regulation', 
    executiveImpact: 'Unlocks rapid recovery from high-cortisol negotiations and prevents nervous lock.',
    description: 'Polyvagal Theory addresses autonomic nervous system regulation via vagus nerve stimulation. It allows leaders to rapidly shift out of sympathetic fight-or-flight locks into social engagement and strategic composure during critical negotiations.'
  },
  { 
    id: 'bioenergetics', 
    name: 'Bio-Energetics', 
    shortTitle: 'BIO-ENERGETICS', 
    iconSymbol: '04', 
    category: 'ENERGY', 
    targetSystem: 'Mitochondrial ATP & Cellular Energy', 
    executiveImpact: 'Eliminates 3 PM cognitive fatigue and sustains 14-hour operational focus.',
    description: 'Bio-Energetics focuses on mitochondrial ATP efficiency and cellular energy synthesis. By removing metabolic friction and optimizing cellular fuel pathways, executives sustain 14+ hours of unbroken cognitive stamina without stimulants.'
  },
  { 
    id: 'biology', 
    name: 'Biology', 
    shortTitle: 'BIOLOGY', 
    iconSymbol: '05', 
    category: 'CELLULAR', 
    targetSystem: 'Endocrine & Metabolic Baseline Architecture', 
    executiveImpact: 'Optimizes hormonal ratios for unwavering physical resilience and executive stamina.',
    description: 'Biology structures the underlying endocrine and metabolic architecture. Balancing baseline cortisol, testosterone, thyroid, and neurotransmitters ensures physical resilience and prevents systemic exhaustion during long scaling cycles.'
  },
  { 
    id: 'epigenetics', 
    name: 'Epigenetics', 
    shortTitle: 'EPIGENETICS', 
    iconSymbol: '06', 
    category: 'GENETICS', 
    targetSystem: 'Gene Expression & Environmental Receptors', 
    executiveImpact: 'Rewires cellular response to chronic high-pressure corporate environments.',
    description: 'Epigenetics utilizes environmental and behavioral inputs to direct beneficial gene expression. It rewires cellular adaptation to thrive within high-pressure, fast-paced corporate environments without accelerated biological aging.'
  },
  { 
    id: 'memoryscience', 
    name: 'Memory Science', 
    shortTitle: 'MEMORY SCIEN...', 
    iconSymbol: '07', 
    category: 'MEMORY', 
    targetSystem: 'Implicit Memory Reconsolidation & Subconscious Wiring', 
    executiveImpact: 'Dissolves hidden threat memories that cause unprovoked risk-aversion.',
    description: 'Memory Science utilizes implicit memory reconsolidation to dissolve lingering threat memories and trauma-based risk aversion. Removing legacy subconscious triggers unlocks bold strategic execution.'
  },
  { 
    id: 'sociology', 
    name: 'Sociology', 
    shortTitle: 'SOCIOLOGY', 
    iconSymbol: '08', 
    category: 'NETWORK', 
    targetSystem: 'Group Coherence & Cultural Field Dynamics', 
    executiveImpact: 'Amplifies leadership presence and align executive team focus instantaneously.',
    description: 'Sociology engineers team coherence and group field dynamics. By optimizing interpersonal resonance and cultural field frequencies, leaders multiply team focus, trust, and execution velocity across the organization.'
  },
  { 
    id: 'psychology', 
    name: 'Psychology', 
    shortTitle: 'PSYCHOLOGY', 
    iconSymbol: '09', 
    category: 'EXECUTIVE', 
    targetSystem: 'Executive Identity & Archetypal Operating System', 
    executiveImpact: 'Aligns subconscious drive with scale objectives without internal friction.',
    description: 'Psychology in the Human Operating System (HOS) acts as the core executive identity layer. It audits subconscious belief architectures, shadow motivations, and internal friction loops. By aligning subconscious drive with high-stakes strategic objectives, executives operate without internal self-sabotage, hesitation, or burnout.'
  },
  { 
    id: 'biophysics', 
    name: 'Biophysics', 
    shortTitle: 'BIOPHYSICS', 
    iconSymbol: '10', 
    category: 'SIGNAL', 
    targetSystem: 'Myelin Sheath Velocity & Neural Signal Conduction', 
    executiveImpact: 'Maximizes information processing speed during chaotic market pivots.',
    description: 'Biophysics enhances neural signal conduction and myelin sheath density. Optimizing electrical transmission rates across white matter tracts maximizes information processing speed and pattern recognition in complex markets.'
  },
];

interface SynergyCombination {
  id: string;
  name: string;
  subtitle: string;
  categoryLabel: string;
  resonanceScore: number;
  breakthrough: string;
  metrics: {
    focusAmplification: string;
    stressNeutralization: string;
    decisionVelocity: string;
  };
}

const PRESET_SYNERGIES: SynergyCombination[] = [
  {
    id: 'synergy-1',
    name: 'NEURO-CYBERNETIC RESONANCE',
    subtitle: 'Prefrontal Cortex + Cybernetic Feedback Control',
    categoryLabel: 'EXECUTIVE FLOW SYNERGY',
    resonanceScore: 98,
    breakthrough: 'Decouples threat-state adrenaline from executive decision pathways, enabling calm precision under maximum market turbulence.',
    metrics: {
      focusAmplification: '4.2x',
      stressNeutralization: '-82%',
      decisionVelocity: '+310%'
    }
  },
  {
    id: 'synergy-2',
    name: 'BIO-POLYVAGAL ANCHOR',
    subtitle: 'Mitochondrial ATP + Vagal Brake Precision',
    categoryLabel: 'PHYSIOLOGICAL CAPACITY SYNERGY',
    resonanceScore: 95,
    breakthrough: 'Eliminates afternoon cognitive fatigue and stabilizes heart-rate variability during aggressive negotiations.',
    metrics: {
      focusAmplification: '3.8x',
      stressNeutralization: '-91%',
      decisionVelocity: '+240%'
    }
  },
  {
    id: 'synergy-3',
    name: 'EPIGENETIC ARCHETYPE SHIFT',
    subtitle: 'Gene Expression + Memory Reconsolidation',
    categoryLabel: 'NEURAL HARDWARE OVERHAUL',
    resonanceScore: 99,
    breakthrough: 'Rewires subconscious safety thresholds, permanently shifting leadership identity from reactive survival to sovereign expansion.',
    metrics: {
      focusAmplification: '5.0x',
      stressNeutralization: '-88%',
      decisionVelocity: '+420%'
    }
  }
];

interface LiveBioDigitalDiagramProps {
  onSelectLens?: (lensId: string) => void;
  onOpenBooking?: (inquiryType?: string) => void;
  onOpenImageModal?: (imageUrl: string, title?: string) => void;
}

export const LiveBioDigitalDiagram: React.FC<LiveBioDigitalDiagramProps> = ({
  onSelectLens,
  onOpenBooking,
  onOpenImageModal
}) => {
  const [activeCombination, setActiveCombination] = useState<SynergyCombination>(PRESET_SYNERGIES[0]);

  return (
    <div className="w-full bg-[#080604]/90 border border-[#3d2e1b] rounded-2xl sm:rounded-3xl p-4 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
      
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,177,61,0.08),transparent_70%)] pointer-events-none"></div>
      
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-800 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#e2b13d] animate-ping"></span>
            <span className="text-xs font-mono font-bold text-[#e2b13d] uppercase tracking-wider">
              INTERACTIVE ARCHITECTURE
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-sans">
            Live Bio-Digital Map of The ONE
          </h2>
        </div>

        {/* Synergy Combinator Preset Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          {PRESET_SYNERGIES.map((syn) => (
            <button
              key={syn.id}
              onClick={() => setActiveCombination(syn)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeCombination.id === syn.id
                  ? 'bg-gradient-to-r from-[#e2b13d] to-[#fce289] text-black shadow-[0_0_15px_rgba(226,177,61,0.4)] font-black scale-105'
                  : 'bg-[#14100b] text-stone-300 border border-[#2e2314] hover:text-white hover:border-[#caa049]'
              }`}
            >
              {syn.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Diagram Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center relative z-10">
        
        {/* Visual Map (Orbital System with 10 Lenses around HOS System Core) */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
          
          {/* Central Human Operating System (THE ONE) Core Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <div className="relative group cursor-pointer">
              
              {/* Outer Glowing Optics Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#e2b13d] via-[#fce289] to-[#b8882b] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity animate-pulse"></div>
              <div className="absolute -inset-1 rounded-full border-2 border-[#fce289]/80 animate-ping opacity-40"></div>
              
              {/* Main Core Container with Focused Magnifying Glass DNA Zoom Image */}
              <div className="relative w-52 h-52 sm:w-72 sm:h-72 rounded-full border-2 border-[#fce289] shadow-[0_0_60px_rgba(226,177,61,0.7)] bg-[#050403] overflow-hidden flex flex-col justify-end items-center">
                
                {/* Background Image of Magnifying Glass Zooming in on Human DNA Figure */}
                <img
                  src={magnifierDnaHumanImg}
                  alt="Magnifying Glass Zooming on Glowing Golden Human DNA Figure"
                  className="absolute inset-0 w-full h-full object-cover object-center filter contrast-125 brightness-110 group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Gradient Vignette to keep bottom label clean */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10 pointer-events-none"></div>

                {/* System Core Typography Badge */}
                <div className="relative z-10 pb-3 px-2 text-center flex flex-col items-center">
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#fce289] uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    OPTICAL DNA ZOOM
                  </span>
                  <h3 className="text-xs sm:text-base font-black text-white uppercase tracking-tight font-sans leading-none mt-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">
                    THE ONE (HOS)
                  </h3>
                </div>

              </div>
            </div>
          </div>

          {/* Orbital Nodes (10 Disciplines surrounding the Core) */}
          <div className="w-full h-full min-h-[380px] sm:min-h-[460px] relative">
            {/* SVG Connecting Synapses */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {/* Animated energy lines linking nodes to system core */}
            </svg>
          </div>
        </div>

        {/* Synergy Inspection Panel */}
        <div className="lg:col-span-5 bg-[#120e09]/90 border border-[#3d2e1b] rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-[#2d2214] pb-3">
            <span className="text-xs font-mono font-bold text-[#fce289] uppercase tracking-wider">
              {activeCombination.categoryLabel}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-[#e2b13d] text-black">
              RESONANCE SCORE: {activeCombination.resonanceScore}%
            </span>
          </div>

          <div>
            <h3 className="text-lg font-black text-white uppercase tracking-tight">
              {activeCombination.name}
            </h3>
            <p className="text-xs text-stone-300 font-medium mt-1">
              {activeCombination.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans border-l-2 border-[#e2b13d] pl-3 py-1">
            {activeCombination.breakthrough}
          </p>

          {/* Key Impact Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#2d2214]">
            <div className="p-2 rounded-xl bg-[#1c160e] border border-[#332514] text-center">
              <span className="text-[10px] font-mono text-stone-400 block">FOCUS</span>
              <span className="text-xs sm:text-sm font-black text-[#fce289]">{activeCombination.metrics.focusAmplification}</span>
            </div>
            <div className="p-2 rounded-xl bg-[#1c160e] border border-[#332514] text-center">
              <span className="text-[10px] font-mono text-stone-400 block">STRESS RED.</span>
              <span className="text-xs sm:text-sm font-black text-[#fce289]">{activeCombination.metrics.stressNeutralization}</span>
            </div>
            <div className="p-2 rounded-xl bg-[#1c160e] border border-[#332514] text-center">
              <span className="text-[10px] font-mono text-stone-400 block">VELOCITY</span>
              <span className="text-xs sm:text-sm font-black text-[#fce289]">{activeCombination.metrics.decisionVelocity}</span>
            </div>
          </div>

          {/* Action CTA Button */}
          <button
            onClick={() => onOpenBooking?.(activeCombination.name)}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#e2b13d] to-[#fce289] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(226,177,61,0.3)]"
          >
            <span>RESERVE HOS BIO-DIGITAL DIAGNOSTIC</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export const SciencePage: React.FC<SciencePageProps> = ({
  onOpenContact,
  onOpenMirrorQuiz
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [hoveredLensId, setHoveredLensId] = useState<string | null>(null);
  const [selectedLensIds, setSelectedLensIds] = useState<string[]>(['polyvagal', 'neuroscience', 'bioenergetics']);
  const [selectedModalLens, setSelectedModalLens] = useState<typeof SCIENCE_LENSES[0] | null>(null);

  const activeFocusLensId = hoveredLensId || (selectedLensIds.length > 0 ? selectedLensIds[selectedLensIds.length - 1] : 'bioenergetics');
  const activeLens = SCIENCE_LENSES.find((l) => l.id === activeFocusLensId) || SCIENCE_LENSES[3];

  const toggleLensSelection = (lensId: string) => {
    setSelectedLensIds([lensId]);
  };

  const getCategoryBadge = (category?: string) => {
    return category || 'LENS';
  };

  const onSelectLens = (_lens: typeof SCIENCE_LENSES[0]) => {
    // Lens selection handler
  };

  return (
    <div className="w-full bg-[#040302] text-[#FFFFFF] min-h-screen font-inter">
      
      {/* FULL-SCREEN CINEMATIC HERO SECTION (100VH) */}
      <section 
        id="hero" 
        className="relative w-full min-h-screen lg:h-screen lg:min-h-[100vh] overflow-hidden bg-[#040302] flex items-center justify-center py-12 sm:py-16 lg:py-0"
      >
        {/* Mobile / Tablet Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden block lg:hidden">
          <img 
            src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784839323/mobile_2_i6pzfg.png"
            alt="The Bio-Digital Architecture Hero Mobile Background"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>

        {/* Desktop Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
          <img 
            src="https://res.cloudinary.com/ew2ztpgz/image/upload/v1784832480/science_heor_bg_pspgc0.png"
            alt="The Bio-Digital Architecture Hero Background"
            className="w-full h-full object-contain object-center opacity-100"
          />
        </div>

        {/* 2-COLUMN HERO INTERFACE OVERLAY */}
        <div className="relative z-20 w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full pt-24 sm:pt-28 lg:pt-24 pb-12">
          
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY */}
          <div className="lg:col-span-6 max-w-full lg:max-w-[650px] space-y-5 sm:space-y-7 text-left my-auto p-2 sm:p-0">
            
            {/* Editorial Headline */}
            <h1 
              className="font-playfair font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[85px] leading-[1.15] sm:leading-[1.1] lg:leading-[1.02] text-left text-white tracking-tight max-w-full drop-shadow-md"
            >
              THE BIO-DIGITAL<br />
              ARCHITECTURE<br />
              <span className="bg-gradient-to-r from-[#F2D075] via-[#C9962F] to-[#8C6218] bg-clip-text text-transparent font-medium drop-shadow-[0_4px_15px_rgba(201,150,47,0.3)]">
                OF THE ONE
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p 
              className="font-inter text-[#D4CEBF] font-light text-left text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-[26px] max-w-full lg:w-[567.2px]"
            >
              Optimizing the Human Operating System (HOS) through 10 Integrated Science Lenses.
            </p>

          </div>

          {/* RIGHT COLUMN */}
          <div className="hidden lg:block lg:col-span-6 h-full pointer-events-none py-8" />

        </div>

      </section>

      {/* WATCH INTRODUCTION CINEMATIC VIDEO MODAL */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#0D0A06] border border-[#C9962F]/50 rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(201,150,47,0.4)]">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-[#C9962F]/30 flex items-center justify-between bg-[#140F08]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#FFD700] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] font-extrabold text-[#FFD700]">
                  CINEMATIC OVERVIEW • THE HUMAN OPERATING SYSTEM
                </span>
              </div>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="w-9 h-9 rounded-full bg-[#20180F] border border-[#C9962F]/40 flex items-center justify-center text-[#D4CEBF] hover:text-white hover:border-[#FFD700] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cinematic Video Player Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0" 
                title="The Bio-Digital Architecture Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      )}

      {/* THE 10 INTEGRATED LENSES SECTION (THE BIO-DIGITAL HOS MATRIX) */}
      <section id="lenses-grid" className="py-12 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="bg-[#070503]/95 border border-[#2e2314] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_25px_90px_rgba(0,0,0,0.95)] backdrop-blur-xl space-y-6">
            
            {/* MATRIX TOP HEADER BAR */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#231a0e]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fce289] animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#e2b13d] uppercase tracking-widest">
                    LIVE INTERACTIVE ARCHITECTURE • 10 SCIENCE DISCIPLINES
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight font-sans">
                  THE BIO-DIGITAL HOS MATRIX
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 font-sans mt-1 max-w-3xl">
                  Explore the 10 integrated science disciplines powering THE ONE (HOS). Click any orbital node to inspect its telemetry, target system, and executive performance impact.
                </p>
              </div>

              {/* Top Right Controls */}
              <div className="flex items-center gap-2.5 self-start lg:self-auto shrink-0">
                <button 
                  onClick={() => {}} 
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#c99a38] text-black font-extrabold text-xs uppercase tracking-wide shadow-md cursor-pointer hover:bg-[#b8882b] transition-colors"
                >
                  <Atom className="w-4 h-4" />
                  <span>Orbital Map</span>
                </button>
              </div>
            </div>

            {/* INSTRUCTIONS STATUS BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 sm:px-4 rounded-xl bg-[#0f0b06] border border-[#2a1e10] text-xs">
              <div className="flex items-center gap-2.5 text-[#fce289]">
                <Compass className="w-4 h-4 shrink-0 text-[#fce289]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-300">
                  <strong className="text-[#fce289] font-black">INSTRUCTIONS:</strong> Click on any orbital node (e.g. PSYCHOLOGY, NEUROSCIENCE) to open its full science description pop-up.
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] text-stone-300 font-semibold">10 Science Nodes Online</span>
              </div>
            </div>

            {/* INTERACTIVE ORBITAL MATRIX CANVAS CONTAINER */}
            <div className="relative min-h-[560px] sm:min-h-[640px] w-full rounded-2xl bg-gradient-to-b from-[#060402] via-[#0a0704] to-[#040302] border border-[#2a1e10] overflow-hidden flex items-center justify-center p-4 sm:p-6 my-2">
              
              {/* Radial Orbit Ring SVG Background */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                  <linearGradient id="laserGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fce289" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#e2b13d" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c99a38" stopOpacity="0.65" />
                  </linearGradient>
                  <linearGradient id="activeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="50%" stopColor="#fce289" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#e2b13d" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Central Concentric Orbital Circles */}
                <circle cx="50%" cy="50%" r="22%" fill="none" stroke="#3d2e1b" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="50%" cy="50%" r="36%" fill="none" stroke="#3d2e1b" strokeWidth="1.5" strokeDasharray="6 6" />

                {/* Draw clear, glowing lines from center (50%, 50%) to each lens node */}
                {SCIENCE_LENSES.map((lens) => {
                  const pos = lensPositions[lens.id];
                  if (!pos) return null;
                  const isSelected = selectedLensIds.includes(lens.id);
                  const isHovered = hoveredLensId === lens.id;
                  const isHighlighted = isSelected || isHovered;

                  return (
                    <g key={`line-${lens.id}`}>
                      {/* Outer Glow Line */}
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${pos.x}%`}
                        y2={`${pos.y}%`}
                        stroke={isHighlighted ? "#fce289" : "#e2b13d"}
                        strokeWidth={isHighlighted ? "4" : "2.5"}
                        opacity={isHighlighted ? "0.8" : "0.4"}
                        className="transition-all duration-300"
                      />
                      {/* Inner Sharp Laser Beam Line */}
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${pos.x}%`}
                        y2={`${pos.y}%`}
                        stroke={isHighlighted ? "url(#activeGlow)" : "url(#laserGlow)"}
                        strokeWidth={isHighlighted ? "2.5" : "1.5"}
                        strokeDasharray={isHighlighted ? "none" : "5 3"}
                        opacity={isHighlighted ? "1" : "0.85"}
                        className="transition-all duration-300"
                      />
                      {isHighlighted && (
                        <circle
                          cx={`${pos.x}%`}
                          cy={`${pos.y}%`}
                          r="12"
                          fill="none"
                          stroke="#fce289"
                          strokeWidth="2"
                          className="animate-ping opacity-75"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central Core DNA Zoom Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
                <div className="relative group cursor-pointer">
                  
                  {/* Outer Gold Glow Rings */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#e2b13d] via-[#fce289] to-[#b8882b] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity animate-pulse"></div>
                  <div className="absolute -inset-1 rounded-full border border-[#fce289]/80 animate-ping opacity-30"></div>
                  
                  {/* Circle DNA Lens Image Container */}
                  <div className="relative w-52 h-52 sm:w-72 sm:h-72 rounded-full border-2 border-[#fce289] shadow-[0_0_60px_rgba(226,177,61,0.7)] bg-[#050403] overflow-hidden flex flex-col justify-end items-center">
                    
                    <img
                      src={magnifierDnaHumanImg}
                      alt="Magnifying Glass Zooming on Glowing Golden Human DNA Figure"
                      className="absolute inset-0 w-full h-full object-cover object-center filter contrast-125 brightness-110 group-hover:scale-108 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

                    <div className="relative z-10 pb-3 sm:pb-4 px-2 text-center flex flex-col items-center">
                      <span className="text-[10px] sm:text-xs font-mono font-bold text-[#fce289] uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        OPTICAL DNA ZOOM
                      </span>
                      <h3 className="text-xs sm:text-base font-black text-white uppercase tracking-tight font-sans leading-none mt-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">
                        THE ONE (HOS)
                      </h3>
                    </div>

                  </div>
                </div>
              </div>

              {/* 10 Orbital Science Node Cards positioned around Core */}
              {SCIENCE_LENSES.map((lens) => {
                const pos = lensPositions[lens.id];
                if (!pos) return null;
                const isSelected = selectedLensIds.includes(lens.id);
                const isHovered = hoveredLensId === lens.id;

                return (
                  <div
                    key={lens.id}
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                    }}
                    onMouseEnter={() => setHoveredLensId(lens.id)}
                    onMouseLeave={() => setHoveredLensId(null)}
                    onClick={() => {
                      toggleLensSelection(lens.id);
                      setSelectedModalLens(lens);
                      if (onSelectLens) onSelectLens(lens);
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 cursor-pointer ${
                      isSelected ? 'scale-105 z-30' : isHovered ? 'scale-105 z-25' : 'hover:scale-102'
                    }`}
                  >
                    <div className={`flex flex-col items-center px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl transition-all min-w-[100px] sm:min-w-[118px] text-center ${
                      isSelected 
                        ? 'bg-[#181108] border-2 border-[#fce289] shadow-[0_0_25px_rgba(252,226,137,0.5)]' 
                        : isHovered
                        ? 'bg-[#140e07] border border-[#e2b13d] shadow-[0_0_15px_rgba(226,177,61,0.3)]'
                        : 'bg-[#0f0b06]/95 border border-[#332514] backdrop-blur-md hover:border-[#b8882b]'
                    }`}>
                      {/* Medallion Icon Badge */}
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors border ${
                        isSelected ? 'bg-gradient-to-br from-[#fce289] to-[#c99a38] border-white text-black shadow-md' : 'bg-[#1d150b] border-[#3d2e1b] text-[#fce289]'
                      }`}>
                        {renderLensIcon(lens.id, `w-4 h-4 sm:w-4.5 sm:h-4.5 ${isSelected ? 'text-black' : 'text-[#fce289]'}`)}
                      </div>
                      
                      {/* Node Title */}
                      <span className="text-[11px] sm:text-xs font-black text-stone-100 mt-2 text-center leading-tight tracking-tight uppercase font-sans">
                        {lens.shortTitle}
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* ACTIVE TELEMETRY FOCUS FOOTER PANEL */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0b0804] border border-[#2a1e10] space-y-4 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c99a38] via-[#fce289] to-[#b8882b] text-black flex items-center justify-center font-bold shadow-[0_0_15px_rgba(226,177,61,0.4)] shrink-0">
                    <Zap className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#e2b13d] uppercase tracking-widest block">
                      ACTIVE TELEMETRY FOCUS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-sans">
                      {activeLens.name}
                    </h3>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedModalLens(activeLens)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#e2b13d] to-[#fce289] hover:opacity-95 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(226,177,61,0.3)] cursor-pointer self-start sm:self-auto"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>INSPECT SCIENCE DESCRIPTION</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="p-4 rounded-xl bg-[#050302] border border-[#231a0e] space-y-1">
                  <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block">
                    TARGET SYSTEM
                  </span>
                  <p className="text-sm font-bold text-white font-sans leading-snug">
                    {activeLens.targetSystem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#050302] border border-[#231a0e] space-y-1">
                  <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block">
                    EXECUTIVE OUTCOME
                  </span>
                  <p className="text-sm font-bold text-white font-sans leading-snug">
                    {activeLens.executiveImpact}
                  </p>
                </div>
              </div>
            </div>



          </div>
        </ScrollReveal>

        {/* SCIENCE LENS DETAIL POPUP MODAL */}
        {selectedModalLens && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedModalLens(null)}
          >
            <div 
              className="relative w-full max-w-2xl bg-[#0a0704] border-2 border-[#e2b13d] rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(226,177,61,0.4)] text-white space-y-6 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Accent Glow */}
              <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#fce289]/15 blur-3xl pointer-events-none" />

              {/* Header Bar */}
              <div className="flex items-start justify-between gap-4 border-b border-[#2e2314] pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#fce289] to-[#c99a38] text-black flex items-center justify-center font-bold shadow-[0_0_20px_rgba(226,177,61,0.5)] shrink-0">
                    {renderLensIcon(selectedModalLens.id, "w-6 h-6 sm:w-7 sm:h-7 text-black")}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#2a1e10] text-[#fce289] font-mono text-[10px] font-bold uppercase tracking-wider">
                        DISCIPLINE {selectedModalLens.iconSymbol} • {selectedModalLens.category}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-sans mt-0.5">
                      {selectedModalLens.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedModalLens(null)}
                  className="p-2 rounded-xl bg-[#1a130b] border border-[#3d2e1b] text-stone-300 hover:text-white hover:border-[#fce289] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Target System & Executive Impact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#050302] border border-[#2e2314]">
                  <span className="text-[10px] font-mono font-bold text-[#e2b13d] uppercase tracking-widest block">
                    TARGET SYSTEM
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-stone-200 mt-1 font-sans">
                    {selectedModalLens.targetSystem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#050302] border border-[#2e2314]">
                  <span className="text-[10px] font-mono font-bold text-[#e2b13d] uppercase tracking-widest block">
                    EXECUTIVE OUTCOME
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-stone-200 mt-1 font-sans">
                    {selectedModalLens.executiveImpact}
                  </p>
                </div>
              </div>

              {/* Detailed Scientific Overview */}
              <div className="p-5 rounded-xl bg-gradient-to-b from-[#120d07] to-[#080502] border border-[#3d2e1b] space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#fce289] uppercase tracking-widest block">
                  SCIENTIFIC OVERVIEW & HOS INTEGRATION
                </span>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                  {selectedModalLens.description}
                </p>
              </div>

              {/* Footer Action */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedModalLens(null)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#e2b13d] to-[#fce289] hover:opacity-95 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(226,177,61,0.3)] cursor-pointer"
                >
                  Close Telemetry
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* THE ENGINEERING BRIEF SECTION (Luxury Editorial Asymmetric Bento Grid) */}
      <section className="bg-[#F8F4EC] text-[#1A1200] py-24 px-6 sm:px-12 border-t border-b border-[rgba(40,40,40,0.08)] relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="uppercase tracking-[0.2em] text-[#C9A227] text-[11px] font-mono font-bold block mb-3">
                BIO-DIGITAL INFRASTRUCTURE
              </span>
              <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1200] tracking-tight">
                The Engineering Brief
              </h2>
              
              {/* Muted Gold Divider */}
              <div className="w-[80px] h-[2px] bg-[#C9A227] mx-auto my-6" />

              <p className="font-inter text-xs sm:text-sm text-[#2B2B2B] max-w-[50ch] mx-auto leading-relaxed">
                We don't teach the science. We deploy 10 integrated biological lenses to construct a sovereign Human Operating System.
              </p>
            </div>
          </ScrollReveal>

          {/* UNIFORM STRUCTURED GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* CARD 1: THE PROCESSOR */}
            <div className="bg-[#F8F4EC] rounded-[24px] p-[28px] sm:p-[32px] border border-[rgba(40,40,40,0.08)] shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:border-[#282828]/20 transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="uppercase tracking-[0.2em] text-[#C9A227] text-[10px] font-mono font-bold">
                    PROCESSOR
                  </span>
                  <span className="font-mono text-[10px] text-[#2B2B2B]/40 font-semibold">01</span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="font-playfair font-bold text-2xl text-[#1A1200]">
                      The Processor
                    </h3>
                    <span className="block font-mono text-xs font-bold text-[#C9A227] uppercase tracking-wider">
                      (Neuroscience &amp; Biophysics)
                    </span>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#2A2826] border border-[#383532] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Brain className="w-7 h-7 text-[#C9A227] stroke-[1.25]" />
                  </div>
                </div>

                <p className="font-inter text-xs sm:text-sm text-[#2B2B2B] leading-relaxed mb-6">
                  We don't just study the brain; we upgrade the <strong className="text-[#1A1200]">White Matter</strong> and <strong className="text-[#1A1A1A]">Connectome</strong> to ensure your "Clock Speed" matches your ambition.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(40,40,40,0.08)] font-inter text-xs">
                <span className="text-[#2B2B2B]/70 text-[11px] font-mono uppercase tracking-wider block">Target Architecture</span>
                <span className="text-[#1A1200] font-medium text-[12px]">High-Voltage Signal Processing</span>
              </div>
            </div>

            {/* CARD 2: THE POWER PLANT */}
            <div className="bg-[#F8F4EC] rounded-[24px] p-[28px] sm:p-[32px] border border-[rgba(40,40,40,0.08)] shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:border-[#282828]/20 transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="uppercase tracking-[0.2em] text-[#C9A227] text-[10px] font-mono font-bold">
                    POWER PLANT
                  </span>
                  <span className="font-mono text-[10px] text-[#2B2B2B]/40 font-semibold">02</span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="font-playfair font-bold text-2xl text-[#1A1200]">
                      The Power Plant
                    </h3>
                    <span className="block font-mono text-xs font-bold text-[#C9A227] uppercase tracking-wider">
                      (Biology &amp; Bio-Energetics)
                    </span>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#2A2826] border border-[#383532] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Zap className="w-7 h-7 text-[#C9A227] stroke-[1.25]" />
                  </div>
                </div>

                <p className="font-inter text-xs sm:text-sm text-[#2B2B2B] leading-relaxed mb-6">
                  We stabilize the <strong className="text-[#1A1200]">Gut-Brain Axis</strong> and <strong className="text-[#1A1200]">Mitochondrial ATP</strong> to ensure your "Battery Life" never drops during high-stakes execution.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(40,40,40,0.08)] font-inter text-xs">
                <span className="text-[#2B2B2B]/70 text-[11px] font-mono uppercase tracking-wider block">Bio-Energetic Yield</span>
                <span className="text-[#1A1200] font-medium text-[12px]">Uninterrupted Executive Capacity</span>
              </div>
            </div>

            {/* CARD 3: THE OPERATING SYSTEM */}
            <div className="bg-[#F8F4EC] rounded-[24px] p-[28px] sm:p-[32px] border border-[rgba(40,40,40,0.08)] shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:border-[#282828]/20 transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="uppercase tracking-[0.2em] text-[#C9A227] text-[10px] font-mono font-bold">
                    OPERATING SYSTEM
                  </span>
                  <span className="font-mono text-[10px] text-[#2B2B2B]/40 font-semibold">03</span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="font-playfair font-bold text-2xl text-[#1A1200]">
                      The Operating System
                    </h3>
                    <span className="block font-mono text-xs font-bold text-[#C9A227] uppercase tracking-wider">
                      (Cybernetics &amp; Polyvagal)
                    </span>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#2A2826] border border-[#383532] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Cpu className="w-7 h-7 text-[#C9A227] stroke-[1.25]" />
                  </div>
                </div>

                <p className="font-inter text-xs sm:text-sm text-[#2B2B2B] leading-relaxed mb-6">
                  We install a "Master Vagal Brake," allowing you to switch from <strong className="text-[#1A1200]">Survival Mode</strong> to <strong className="text-[#1A1200]">Visionary Flow</strong> in milliseconds.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(40,40,40,0.08)] font-inter text-xs">
                <span className="text-[#2B2B2B]/70 text-[11px] font-mono uppercase tracking-wider block">Autonomic Control</span>
                <span className="text-[#1A1200] font-medium text-[12px]">Instant State-Shifting Under Pressure</span>
              </div>
            </div>

            {/* CARD 4: THE CLOUD STORAGE */}
            <div className="bg-[#F8F4EC] rounded-[24px] p-[28px] sm:p-[32px] border border-[rgba(40,40,40,0.08)] shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:border-[#282828]/20 transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="uppercase tracking-[0.2em] text-[#C9A227] text-[10px] font-mono font-bold">
                    CLOUD STORAGE
                  </span>
                  <span className="font-mono text-[10px] text-[#2B2B2B]/40 font-semibold">04</span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="font-playfair font-bold text-2xl text-[#1A1200]">
                      The Cloud Storage
                    </h3>
                    <span className="block font-mono text-xs font-bold text-[#C9A227] uppercase tracking-wider">
                      (Memory &amp; Epigenetics)
                    </span>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#2A2826] border border-[#383532] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Database className="w-7 h-7 text-[#C9A227] stroke-[1.25]" />
                  </div>
                </div>

                <p className="font-inter text-xs sm:text-sm text-[#2B2B2B] leading-relaxed mb-6">
                  We "Clean the Hard Drive" by de-polarizing old trauma files and unlocking your <strong className="text-[#1A1200]">Epigenetic Code</strong>.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(40,40,40,0.08)] font-inter text-xs">
                <span className="text-[#2B2B2B]/70 text-[11px] font-mono uppercase tracking-wider block">Memory De-Polarization</span>
                <span className="text-[#1A1200] font-medium text-[12px]">Clear Internal Overhead</span>
              </div>
            </div>

            {/* CARD 5: THE INTERFACE */}
            <div className="bg-[#F8F4EC] rounded-[24px] p-[28px] sm:p-[32px] border border-[rgba(40,40,40,0.08)] shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:border-[#282828]/20 transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="uppercase tracking-[0.2em] text-[#C9A227] text-[10px] font-mono font-bold">
                    THE INTERFACE
                  </span>
                  <span className="font-mono text-[10px] text-[#2B2B2B]/40 font-semibold">05</span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="font-playfair font-bold text-2xl text-[#1A1200]">
                      The Interface
                    </h3>
                    <span className="block font-mono text-xs font-bold text-[#C9A227] uppercase tracking-wider">
                      (Sociology &amp; Psychology)
                    </span>
                  </div>
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-[#2A2826] border border-[#383532] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <Users className="w-7 h-7 text-[#C9A227] stroke-[1.25]" />
                  </div>
                </div>

                <p className="font-inter text-xs sm:text-sm text-[#2B2B2B] leading-relaxed mb-6">
                  We rewrite the <strong className="text-[#1A1200]">Internal Narrative</strong> and <strong className="text-[#1A1200]">Cultural Firmware</strong> so your "Internal CEO" operates from the perspective of <strong className="text-[#1A1200]">The ONE</strong>.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(40,40,40,0.08)] font-inter text-xs">
                <span className="text-[#2B2B2B]/70 text-[11px] font-mono uppercase tracking-wider block">Identity Alignment</span>
                <span className="text-[#1A1200] font-medium text-[12px]">Narrative &amp; Cultural Sovereignty</span>
              </div>
            </div>

            {/* CARD 6: SYSTEM SYNTHESIS */}
            <div className="bg-[#2A2826] text-[#F8F4EC] rounded-[24px] p-[28px] sm:p-[32px] border border-[#383532] shadow-[0_10px_35px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col justify-between group relative">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="uppercase tracking-[0.2em] text-[#C9A227] text-[10px] font-mono font-bold">
                    SYSTEM SYNTHESIS
                  </span>
                  <span className="font-mono text-[10px] text-[#C9A227]/70 font-semibold">06</span>
                </div>

                <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white mb-4 leading-snug">
                  We don't teach the science. We use the science to build the system.
                </h3>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={onOpenContact}
                  className="w-full px-5 py-3 bg-[#C9A227] hover:bg-[#b5901f] text-black font-inter text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Book Keynote Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenMirrorQuiz}
                  className="w-full px-5 py-3 bg-transparent border border-[#C9A227]/50 text-[#C9A227] hover:bg-[#C9A227]/10 font-inter text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center"
                >
                  <span>Take Mirror Quiz</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

