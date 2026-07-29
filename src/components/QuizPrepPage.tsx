import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, FileText, Activity, Brain, Zap, CheckCircle2 } from 'lucide-react';
import goldenFigureImg from '../assets/images/gold_mirror_anatomy_1785193115649.jpg';
import ultraLuxuryGoldBg from '../assets/images/ultra_luxury_gold_wave_bg_1785194012691.jpg';

interface QuizPrepPageProps {
  onStartQuiz: () => void;
  onNavigatePage: (page: 'home' | 'science' | 'mythology' | 'about', sectionId?: string) => void;
}

export const QuizPrepPage: React.FC<QuizPrepPageProps> = ({
  onStartQuiz,
  onNavigatePage,
}) => {
  return (
    <div className="bg-[#050505] text-white min-h-screen py-8 sm:py-16 relative overflow-hidden font-sans">
      {/* Inline Animation Keyframes for Ultra-Luxury Background Waves & Floating Particles */}
      <style>{`
        @keyframes bgSubtlePulse {
          0%, 100% { transform: scale(1) translateY(0px); opacity: 0.8; }
          50% { transform: scale(1.04) translateY(-10px); opacity: 0.9; }
        }
        @keyframes waveFloatLeft {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: translateY(-16px) rotate(1.5deg) scale(1.02); opacity: 0.55; }
        }
        @keyframes waveFloatRight {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: translateY(18px) rotate(-1.5deg) scale(1.03); opacity: 0.55; }
        }
        @keyframes waveFloatBottom {
          0%, 100% { transform: translateX(0px) translateY(0px); opacity: 0.3; }
          50% { transform: translateX(12px) translateY(-8px); opacity: 0.45; }
        }
        @keyframes particleDrift1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-24px) translateX(8px) scale(1.3); opacity: 0.9; }
        }
        @keyframes particleDrift2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(20px) translateX(-10px) scale(1.25); opacity: 0.85; }
        }
        @keyframes bokehPulse {
          0%, 100% { transform: scale(1); opacity: 0.04; }
          50% { transform: scale(1.25); opacity: 0.09; }
        }
      `}</style>
      
      {/* ==================== LAYER 1: ULTRA-LUXURY EDITORIAL BACKGROUND IMAGE (ANIMATED) ==================== */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none mix-blend-screen"
        style={{ 
          backgroundImage: `url(${ultraLuxuryGoldBg})`,
          animation: 'bgSubtlePulse 20s ease-in-out infinite' 
        }}
      ></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_95%)] pointer-events-none"></div>

      {/* Layer 2: Architectural concentric circles & linework */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] pointer-events-none opacity-15">
        <svg viewBox="0 0 1000 1000" fill="none" className="w-full h-full stroke-[#E7B646]">
          <circle cx="500" cy="500" r="480" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="500" cy="500" r="380" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="280" strokeWidth="0.75" strokeDasharray="12 12" />
          <circle cx="500" cy="500" r="180" strokeWidth="0.5" />
          <line x1="20" y1="500" x2="980" y2="500" strokeWidth="0.25" opacity="0.5" />
          <line x1="500" y1="20" x2="500" y2="980" strokeWidth="0.25" opacity="0.5" />
        </svg>
      </div>

      {/* ==================== LAYER 3: EDGE-HUGGING FLOWING GOLD RIBBONS & WAVES (ANIMATED) ==================== */}
      {/* Left Edge Sweeping Gold Wave Filaments */}
      <div 
        className="absolute top-0 left-0 w-80 sm:w-96 h-full pointer-events-none origin-top-left"
        style={{ animation: 'waveFloatLeft 14s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 400 1200" fill="none" className="w-full h-full">
          <path d="M-50,0 C120,200 80,450 -20,600 C-100,750 180,950 50,1200" stroke="url(#goldGradLeft1)" strokeWidth="1.5" />
          <path d="M-30,50 C180,300 30,500 -10,700 C-50,850 220,1050 20,1200" stroke="url(#goldGradLeft2)" strokeWidth="0.75" />
          <path d="M-80,100 C100,350 150,600 -40,850 C-100,1000 120,1100 0,1200" stroke="#FFF2B0" strokeWidth="0.5" opacity="0.7" />
          <defs>
            <linearGradient id="goldGradLeft1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7D36B" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#E7B646" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A8791B" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="goldGradLeft2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE38B" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#C9982D" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Edge Sweeping Gold Wave Filaments */}
      <div 
        className="absolute top-0 right-0 w-80 sm:w-96 h-full pointer-events-none origin-top-right"
        style={{ animation: 'waveFloatRight 16s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 400 1200" fill="none" className="w-full h-full">
          <path d="M450,0 C280,250 320,500 420,700 C500,850 220,1000 380,1200" stroke="url(#goldGradRight1)" strokeWidth="1.5" />
          <path d="M430,80 C220,320 350,620 400,820 C460,980 180,1100 350,1200" stroke="url(#goldGradRight2)" strokeWidth="0.75" />
          <path d="M480,150 C300,400 250,650 420,900 C480,1050 260,1150 400,1200" stroke="#FFF2B0" strokeWidth="0.5" opacity="0.7" />
          <defs>
            <linearGradient id="goldGradRight1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F7D36B" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#E7B646" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A8791B" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="goldGradRight2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B0" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#C9982D" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Wave Accent Framing */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ animation: 'waveFloatBottom 12s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 1440 200" fill="none" className="w-full h-full">
          <path d="M0,150 C360,50 720,180 1080,60 C1260,0 1380,80 1440,120" stroke="url(#bottomGoldWave)" strokeWidth="1.2" />
          <path d="M0,180 C400,90 800,190 1200,90 C1320,40 1400,100 1440,140" stroke="#FFF2B0" strokeWidth="0.6" opacity="0.6" />
          <defs>
            <linearGradient id="bottomGoldWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#050505" />
              <stop offset="25%" stopColor="#E7B646" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F7D36B" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#C9982D" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ==================== LAYER 4: FLOATING PARTICLES, SPARK NODES & BOKEH DUST (ANIMATED) ==================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing hotspots & bloom nodes along outer frame */}
        <div 
          className="absolute top-24 left-10 w-2 h-2 rounded-full bg-[#FFF2B0] shadow-[0_0_12px_#F7D36B]"
          style={{ animation: 'particleDrift1 6s ease-in-out infinite' }}
        ></div>
        <div 
          className="absolute top-1/3 left-16 w-1.5 h-1.5 rounded-full bg-[#FFE38B] shadow-[0_0_8px_#E7B646]"
          style={{ animation: 'particleDrift2 8s ease-in-out infinite 1s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-8 w-1.5 h-1.5 rounded-full bg-[#F7D36B] shadow-[0_0_10px_#F7D36B]"
          style={{ animation: 'particleDrift1 7s ease-in-out infinite 2.5s' }}
        ></div>
        <div 
          className="absolute top-2/3 left-20 w-2 h-2 rounded-full bg-[#FFF2B0] shadow-[0_0_15px_#F7D36B]" 
          style={{ animation: 'particleDrift2 9s ease-in-out infinite 0.5s' }}
        ></div>

        <div 
          className="absolute top-36 right-12 w-2 h-2 rounded-full bg-[#FFF2B0] shadow-[0_0_12px_#F7D36B]"
          style={{ animation: 'particleDrift2 7s ease-in-out infinite 1.8s' }}
        ></div>
        <div 
          className="absolute top-1/4 right-20 w-1.5 h-1.5 rounded-full bg-[#FFE38B] shadow-[0_0_8px_#E7B646]"
          style={{ animation: 'particleDrift1 8.5s ease-in-out infinite 0.3s' }}
        ></div>
        <div 
          className="absolute top-1/2 right-10 w-1 h-1 rounded-full bg-[#F7D36B]"
          style={{ animation: 'particleDrift2 6.5s ease-in-out infinite 3s' }}
        ></div>
        <div 
          className="absolute top-3/4 right-16 w-2 h-2 rounded-full bg-[#FFF2B0] shadow-[0_0_15px_#F7D36B]"
          style={{ animation: 'particleDrift1 9.5s ease-in-out infinite 1.2s' }}
        ></div>

        {/* Additional Micro Sparks along top & bottom edges */}
        <div 
          className="absolute top-8 left-1/3 w-1 h-1 rounded-full bg-[#FFF2B0] shadow-[0_0_6px_#FFF2B0]"
          style={{ animation: 'particleDrift1 5.5s ease-in-out infinite 2s' }}
        ></div>
        <div 
          className="absolute top-14 right-1/3 w-1.5 h-1.5 rounded-full bg-[#E7B646] shadow-[0_0_10px_#E7B646]"
          style={{ animation: 'particleDrift2 7.5s ease-in-out infinite 4s' }}
        ></div>
        <div 
          className="absolute bottom-16 left-1/4 w-2 h-2 rounded-full bg-[#F7D36B] shadow-[0_0_12px_#F7D36B]"
          style={{ animation: 'particleDrift1 8s ease-in-out infinite 3.2s' }}
        ></div>
        <div 
          className="absolute bottom-24 right-1/4 w-1.5 h-1.5 rounded-full bg-[#FFF2B0] shadow-[0_0_8px_#FFF2B0]"
          style={{ animation: 'particleDrift2 6.8s ease-in-out infinite 1.5s' }}
        ></div>

        {/* Soft Golden Bokeh Floaters */}
        <div 
          className="absolute top-12 left-1/4 w-32 h-32 bg-[radial-gradient(circle,#F7D36B_0%,transparent_70%)] blur-2xl pointer-events-none"
          style={{ animation: 'bokehPulse 10s ease-in-out infinite' }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-[radial-gradient(circle,#E7B646_0%,transparent_70%)] blur-3xl pointer-events-none"
          style={{ animation: 'bokehPulse 12s ease-in-out infinite 2s' }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-[radial-gradient(circle,#FFF2B0_0%,transparent_70%)] blur-2xl pointer-events-none"
          style={{ animation: 'bokehPulse 11s ease-in-out infinite 4s' }}
        ></div>
      </div>

      {/* ==================== CONTENT LAYER (PAGE CONTENT UNTOUCHED) ==================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Layout: Text + Golden Spinal Geometry Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Navigation Breadcrumb */}
            <div>
              <button
                onClick={() => onNavigatePage('home')}
                className="text-xs font-inter uppercase tracking-[0.2em] text-[#A1ABC0] hover:text-[#F7D36B] transition-colors inline-flex items-center gap-2 cursor-pointer group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
                <span>BACK TO OVERVIEW</span>
              </button>
            </div>

            {/* Badge Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#E7B646]/40 text-[#F7D36B] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#FFF2B0]" />
                <span>EXECUTIVE BIOLOGICAL DIAGNOSTIC</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight leading-none">
                <span className="block text-white">The Mirror</span>
                <span className="block bg-gradient-to-r from-[#FFF2B0] via-[#F7D36B] to-[#A8791B] bg-clip-text text-transparent">
                  Assessment
                </span>
              </h1>
            </div>

            {/* Diamond Divider Accent */}
            <div className="flex items-center gap-3 my-4 max-w-xs">
              <div className="h-[1px] bg-gradient-to-r from-[#E7B646]/60 to-transparent flex-1"></div>
              <div className="w-2 h-2 rotate-45 border border-[#F7D36B] bg-[#050505]"></div>
              <div className="h-[1px] bg-gradient-to-l from-[#E7B646]/60 to-transparent flex-1"></div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#A1A1A1] font-light leading-relaxed max-w-lg">
              Decode your subconscious operating system. This 3-minute executive audit identifies the hidden biological ceiling throttling your decision capacity, team velocity, and leadership endurance.
            </p>
          </div>

          {/* Right Column (Golden Spinal Sacred Geometry Artwork) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden border border-[#E7B646]/30 shadow-[0_0_50px_rgba(231,182,70,0.15)] bg-[#0B0B0B]">
              <img 
                src={goldenFigureImg} 
                alt="Biological Neural Architecture" 
                className="w-full h-full object-cover object-center scale-105"
              />
              {/* Radial gradient overlay for seamless dark border blending */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_98%)] pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* Protocol Access Overlay Card */}
        <div className="relative z-20 max-w-4xl mx-auto rounded-2xl border border-[#E7B646]/40 bg-[#0B0B0B]/95 backdrop-blur-xl p-8 sm:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.95)] mb-20 overflow-hidden">
          {/* Ambient Glow in Card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#F7D36B]/10 blur-3xl pointer-events-none rounded-full"></div>

          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#F7D36B] mb-3 block">
            IMMEDIATE PROTOCOL ACCESS
          </span>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4 tracking-tight">
            Are You Ready to Audit Your System?
          </h2>

          <p className="text-xs sm:text-sm text-[#A1A1A1] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            10 rapid-diagnostic questions evaluating adrenal friction, control responses, and neural trust limits under high stress.
          </p>

          {/* Primary CTA Button */}
          <div className="mb-8">
            <button
              onClick={onStartQuiz}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full bg-gradient-to-r from-[#FFF2B0] via-[#E7B646] to-[#A8791B] hover:brightness-110 text-[#050505] font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all shadow-[0_0_35px_rgba(231,182,70,0.45)] hover:shadow-[0_0_50px_rgba(247,211,107,0.7)] cursor-pointer transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>BEGIN THE MIRROR ASSESSMENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-[#E7B646]/20 text-xs text-[#A1A1A1] font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F7D36B]" />
              <span>3 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#F7D36B]" />
              <span>10 Diagnostic Questions</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F7D36B]" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>

        {/* Diagnostic Pillars Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              What The Mirror Assessment Uncovers
            </h2>
            <p className="text-sm text-[#A1A1A1]">
              Targeting three key biological operating vectors in high-stakes operators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#0B0B0B] border border-[#E7B646]/30 rounded-xl p-6 sm:p-8 hover:border-[#F7D36B] transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#E7B646]/40 flex items-center justify-center text-[#F7D36B] mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-serif">
                1. Adrenal Friction Loading
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                Determines whether decision fatigue and sudden operational deceleration are caused by acute cortisolic exhaustion or genuine strategic bottlenecks.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#0B0B0B] border border-[#E7B646]/30 rounded-xl p-6 sm:p-8 hover:border-[#F7D36B] transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#E7B646]/40 flex items-center justify-center text-[#F7D36B] mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-serif">
                2. Neural Delegation Trust
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                Audits the subconscious trigger where "Control = Safety," highlighting key-person risk before it limits organizational velocity.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#0B0B0B] border border-[#E7B646]/30 rounded-xl p-6 sm:p-8 hover:border-[#F7D36B] transition-all group">
              <div className="w-12 h-12 rounded-lg bg-[#111111] border border-[#E7B646]/40 flex items-center justify-center text-[#F7D36B] mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-serif">
                3. Capacity Classification
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                Classifies your present operational state into S.O.S. (Survival Mode), Transition Zone, or Q.N.E. (Optimized Neural Evolution).
              </p>
            </div>
          </div>
        </div>

        {/* Preparation Guidelines */}
        <div className="bg-[#0B0B0B] border border-[#E7B646]/30 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-6 bg-[#F7D36B] rounded-full inline-block"></span>
            <span>Assessment Prep & Guidelines</span>
          </h2>

          <ul className="space-y-4 text-sm text-[#CCCCCC]">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#F7D36B] shrink-0 mt-0.5" />
              <span><strong>Instinctive Responses:</strong> Answer based on your immediate reaction under stress, not your ideal mindset.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#F7D36B] shrink-0 mt-0.5" />
              <span><strong>Unfiltered Honesty:</strong> The diagnostic is most effective when evaluating your actual biological defaults.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#F7D36B] shrink-0 mt-0.5" />
              <span><strong>Instant Action Plan:</strong> Upon completion, you will receive a personalized classification and high-impact biological recommendations.</span>
            </li>
          </ul>
        </div>

        {/* Bottom Launch Banner CTA */}
        <div className="text-center py-10 px-6 bg-gradient-to-r from-[#111111] via-[#161616] to-[#111111] border border-[#E7B646]/40 rounded-2xl shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
            Ready to Take The Mirror Assessment?
          </h3>
          <p className="text-sm text-[#A1A1A1] max-w-lg mx-auto mb-6">
            Begin the 10-question biological audit now and unlock your capacity baseline.
          </p>
          <button
            onClick={onStartQuiz}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F7D36B] via-[#E7B646] to-[#C9982D] hover:brightness-110 text-[#050505] font-extrabold text-xs uppercase tracking-[0.2em] transition-all shadow-[0_8px_25px_rgba(231,182,70,0.4)] hover:shadow-[0_12px_35px_rgba(247,211,107,0.6)] cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Mirror Quiz Now</span>
          </button>
        </div>

      </div>
    </div>
  );
};


