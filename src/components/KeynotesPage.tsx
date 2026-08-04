import React from 'react';
import { ArrowRight, Calendar, FileText, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';

interface KeynotesPageProps {
  onOpenBooking: () => void;
  onOpenSpeakerKit: () => void;
}

export const KeynotesPage: React.FC<KeynotesPageProps> = ({
  onOpenBooking,
  onOpenSpeakerKit,
}) => {
  return (
    <div className="min-h-screen bg-[#090A0C] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* SECTION 1 — HERO */}
        <section className="text-center pt-8 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161922] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>FOR TEAMS, EVENTS &amp; ORGANIZATIONS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#F9FAFB] tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Your people don&apos;t need more motivation. They need their capacity back.
          </h1>

          <div className="max-w-3xl mx-auto space-y-4 text-gray-300 font-light text-base sm:text-lg leading-relaxed mb-10">
            <p>
              Strategy is logic. Behavior is biology. When a team stalls, misfires under pressure, or burns through its best people, the cause usually isn&apos;t a skills gap — it&apos;s a room full of nervous systems running survival programming in a high-demand environment.
            </p>
            <p className="text-[#F3E5AB] font-medium">
              Thomas Ventura brings the operator&apos;s version of that conversation to the stage.
            </p>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#9A7B2C] text-[#090A0C] font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_25px_rgba(212,175,55,0.35)] cursor-pointer flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK THOMAS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenSpeakerKit}
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#12141C] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#F3E5AB] font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:bg-[#1A1D28] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span>REQUEST SPEAKER KIT</span>
            </button>
          </div>
        </section>

        {/* SECTION 2 — THE KEYNOTES */}
        <section className="pt-8 border-t border-gray-800/80">
          <div className="text-center mb-12">
            <p className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase mb-2">
              SIGNATURE KEYNOTES
            </p>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              The Stage Presentations
            </h2>
          </div>

          <div className="space-y-8">
            {/* Keynote 1 */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0D0F15] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all shadow-xl text-left">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase block mb-3">
                KEYNOTE ONE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3E5AB] mb-4">
                The Biology of Business Behavior
              </h3>
              <div className="space-y-4 text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                <p>
                  Strategy is logic, but behavior is chemistry. If your people are fighting an internal war between the will to scale and the urge to pull back, that isn&apos;t a mindset flaw. It&apos;s a hardware limitation.
                </p>
                <p>
                  This keynote shows a room why biological architecture becomes the invisible ceiling on growth — and what it takes to overwrite the survival conditioning that keeps a business safe, but small.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-800/80 flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>Best for: leadership teams, annual meetings, founder audiences.</span>
              </div>
            </div>

            {/* Keynote 2 */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0D0F15] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all shadow-xl text-left">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase block mb-3">
                KEYNOTE TWO
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3E5AB] mb-2">
                REGENESIS: The Protocol for Expansion
              </h3>
              <p className="text-sm font-serif italic text-[#D4AF37] mb-4">
                Motivation runs out. Regulated biology doesn&apos;t.
              </p>
              <div className="space-y-4 text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                <p>
                  When an organization hits a growth ceiling, it&apos;s often the people&apos;s wiring — not the market — resisting the expansion. The body reads growth as threat and slows the whole system down to protect itself.
                </p>
                <p>
                  This keynote gives a room the architecture underneath sustainable performance: how to stop running leadership on adrenaline, and what it takes to build capacity that holds.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-800/80 flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <Zap className="w-4 h-4 text-[#D4AF37]" />
                <span>Best for: scaling companies, sales organizations, high-pressure operating environments.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — WHY THOMAS */}
        <section className="pt-8 border-t border-gray-800/80">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F3E5AB] mb-3">
              Why Thomas Ventura?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto">
              Not a motivational speaker. A battle-tested operator who built and ran two multi-million dollar companies simultaneously for over eighteen years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-[#0D0F15] border border-gray-800 hover:border-[#D4AF37]/50 transition-colors">
              <span className="text-2xl font-serif font-bold text-[#D4AF37] block mb-2">01</span>
              <h3 className="text-base font-bold text-white mb-2">HARDWARE, NOT SOFTWARE</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Most speakers talk about mindset. Thomas addresses biological capacity — and explains why strategy stops working when biology hits its limit.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0D0F15] border border-gray-800 hover:border-[#D4AF37]/50 transition-colors">
              <span className="text-2xl font-serif font-bold text-[#D4AF37] block mb-2">02</span>
              <h3 className="text-base font-bold text-white mb-2">THE CFO TEST</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] font-light leading-relaxed">
                Thomas doesn&apos;t speak in wellness fluff. He speaks the language of asset management: burnout framed as key-person risk, survival conditioning framed as operational inefficiency.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0D0F15] border border-gray-800 hover:border-[#D4AF37]/50 transition-colors">
              <span className="text-2xl font-serif font-bold text-[#D4AF37] block mb-2">03</span>
              <h3 className="text-base font-bold text-white mb-2">THE TIGER IN THE ROOM</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Thomas brings the presence of a veteran operator. He names the internal war high performers feel and never discuss — which earns trust from the most skeptical people in the room.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — WHAT A ROOM WALKS OUT WITH */}
        <section className="pt-8 border-t border-gray-800/80">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F3E5AB]">
              What the room takes away
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-5 rounded-xl bg-[#0D0F15] border border-gray-800/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                A working explanation for why their best people stall under pressure — one that doesn&apos;t blame anyone&apos;s character
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D0F15] border border-gray-800/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                The distinction between a mindset problem and a capacity problem, and how to tell them apart
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D0F15] border border-gray-800/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Language for the internal war that a skeptical audience will actually accept
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0D0F15] border border-gray-800/80 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                A practical first move they can run the same week
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — WHO THIS IS FOR */}
        <section className="pt-8 border-t border-gray-800/80">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F3E5AB]">
              Who books this
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 rounded-xl bg-[#0D0F15] border border-gray-800">
              <h3 className="text-base font-bold text-white mb-2">Leadership teams and executive offsites</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Organizations that want infrastructure-first growth rather than another motivational session.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0D0F15] border border-gray-800">
              <h3 className="text-base font-bold text-white mb-2">Accelerators, incubators, and founder programs</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Cohorts under real pressure who need to understand the biology of building before it costs them the venture.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0D0F15] border border-gray-800">
              <h3 className="text-base font-bold text-white mb-2">Sales and high-performance organizations</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Teams operating in sustained high-demand environments where burnout is a business risk, not just a wellness concern.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0D0F15] border border-gray-800">
              <h3 className="text-base font-bold text-white mb-2">Conferences and annual events</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                Audiences of builders who&apos;ve heard every mindset talk and are ready for the mechanism underneath.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — BOOKING */}
        <section className="pt-10 pb-12 border-t border-gray-800/80 text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#131620] to-[#0A0C11] border border-[#D4AF37]/40 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#F3E5AB] mb-4">
              Bring REGENESIS to your team
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#9A7B2C] text-[#090A0C] font-extrabold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A CALL</span>
              </button>

              <button
                onClick={onOpenSpeakerKit}
                className="w-full sm:w-auto px-8 py-4 rounded bg-[#181B26] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#F3E5AB] font-extrabold text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                <span>REQUEST SPEAKER KIT</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xl mx-auto mb-6 leading-relaxed">
              The speaker kit includes Thomas&apos;s bio, keynote descriptions, technical requirements, and photography. Tell us about your event and we&apos;ll send it over.
            </p>

            <p className="text-xs font-mono text-gray-500">
              For press and media enquiries:{' '}
              <a href="mailto:hello@thomasventura.com" className="text-[#D4AF37] hover:underline">
                hello@thomasventura.com
              </a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
