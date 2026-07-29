import React, { useState } from 'react';
import { book1Img, book2Img, book3Img } from '../data/content';
import { CheckCircle, ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface WaitlistPageProps {
  onNavigateHome?: () => void;
  onOpenContact?: () => void;
}

export const WaitlistPage: React.FC<WaitlistPageProps> = ({
  onNavigateHome,
  onOpenContact
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen py-10 sm:py-16 px-4 sm:px-8 lg:px-12 font-sans relative overflow-hidden">
      
      <div className="max-w-[1300px] mx-auto space-y-16 relative z-10">
        
        {/* Back Navigation Button */}
        {onNavigateHome && (
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-stone-600 hover:text-[#c99a38] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Page</span>
          </button>
        )}

        {/* Hero Section: Text & Form + 3D Book Fan Stack */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#111111] tracking-tight font-sans leading-[1.1]">
                  The REGENESIS Trilogy —<br />
                  Secure Your Place in the Solen Circle
                </h1>
                <p className="text-sm sm:text-base text-stone-700 font-sans leading-relaxed mt-4">
                  The journey from <strong className="text-black font-extrabold">SOS (Survival Operating System)</strong> to <strong className="text-black font-extrabold">The ONE</strong> begins this June. Join the inner circle to access the code before the world does.
                </p>
              </div>

              {/* Form / Confirmation state */}
              <div className="pt-2">
                {submitted ? (
                  <div className="p-6 bg-[#f7f2e7] border-2 border-[#c89838] rounded-xl text-stone-900 space-y-3 animate-fadeIn">
                    <div className="flex items-center gap-3 text-[#c89838]">
                      <CheckCircle className="w-6 h-6 shrink-0" />
                      <h3 className="text-base font-bold uppercase tracking-wide">
                        Solen Circle Access Confirmed
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      Welcome to the Solen Circle, <strong className="text-black">{name}</strong>. Your priority access pass for the REGENESIS Trilogy release has been registered to <strong className="text-black">{email}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-[#f3efe6] border border-stone-300/80 rounded-lg text-sm text-black placeholder-stone-400 focus:outline-none focus:border-[#c89838] transition-all font-sans"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-[#f3efe6] border border-stone-300/80 rounded-lg text-sm text-black placeholder-stone-400 focus:outline-none focus:border-[#c89838] transition-all font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg bg-[#c99a38] hover:bg-[#b8892b] text-black font-extrabold text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2 hover:brightness-105"
                    >
                      <span>Join waitlist</span>
                    </button>

                    <p className="text-[11px] text-stone-500 font-sans pt-1">
                      You're signing up to receive emails from Thomas Ventura.
                    </p>
                  </form>
                )}
              </div>

            </div>

            {/* Right Graphics Column: 3D Stacked Book Covers */}
            <div className="lg:col-span-5 flex items-center justify-center pt-8 lg:pt-0">
              <div className="relative w-full max-w-[420px] aspect-[4/3] flex items-center justify-center py-6">
                
                {/* Back Top Book Card */}
                <div className="absolute right-8 sm:right-12 top-0 w-44 sm:w-52 h-64 sm:h-76 rotate-6 z-0 opacity-90 transition-transform duration-500 hover:rotate-8">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black border border-stone-800">
                    <img 
                      src={book3Img} 
                      alt="The REGENESIS Trilogy Volume 3" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Left Book Card */}
                <div className="absolute left-4 sm:left-6 top-6 w-44 sm:w-52 h-64 sm:h-76 -rotate-12 z-10 transition-transform duration-500 hover:-rotate-14">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black border border-stone-800">
                    <img 
                      src={book2Img} 
                      alt="The REGENESIS Blueprint" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Center Highlighted Featured Book Card */}
                <div className="relative z-20 left-10 sm:left-12 top-2 w-48 sm:w-56 h-70 sm:h-84 rotate-12 transition-transform duration-500 hover:scale-105">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.45)] bg-black border-4 border-white ring-1 ring-amber-400/50">
                    <img 
                      src={book1Img} 
                      alt="The REGENESIS Protocol" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Section 2: The Early Adopter Advantage (VIP Status) */}
        <ScrollReveal>
          <div className="space-y-8 text-center pt-6">
            <div className="max-w-3xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111111] uppercase tracking-tight font-sans">
                The Early Adopter Advantage (VIP Status)
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                The REGENESIS Project is more than a book launch; it is a global transformation movement. We are looking for the "Warriors"—the founders and cycle-breakers—who are ready to act as the foundation of this ecosystem.
              </p>
              <p className="text-xs sm:text-sm text-black font-extrabold font-sans uppercase tracking-wide pt-2">
                By joining the waitlist today, you are locked into VIP Status, granting you:
              </p>
            </div>

            {/* 2x2 Grid of Gold Card Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left max-w-5xl mx-auto pt-2">
              
              {/* Card 1: Priority Access */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#c99a38] text-[#120e06] space-y-2.5 shadow-md">
                <h3 className="text-base sm:text-lg font-black font-sans uppercase tracking-tight text-black">
                  Priority Access
                </h3>
                <p className="text-xs sm:text-sm font-medium font-sans leading-relaxed text-black/90">
                  Be the first to know when each volume of the trilogy drops (Book 1 in June, with subsequent releases every 60 days).
                </p>
              </div>

              {/* Card 2: The $25 Early-Bird Credit */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#c99a38] text-[#120e06] space-y-2.5 shadow-md">
                <h3 className="text-base sm:text-lg font-black font-sans uppercase tracking-tight text-black">
                  The $25 Early-Bird Credit
                </h3>
                <p className="text-xs sm:text-sm font-medium font-sans leading-relaxed text-black/90">
                  A direct discount on your purchase once the books are live on Amazon.
                </p>
              </div>

              {/* Card 3: The Unseen Archives */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#c99a38] text-[#120e06] space-y-2.5 shadow-md">
                <h3 className="text-base sm:text-lg font-black font-sans uppercase tracking-tight text-black">
                  The Unseen Archives
                </h3>
                <p className="text-xs sm:text-sm font-medium font-sans leading-relaxed text-black/90">
                  Immediate access to high-value bonus content and "Deep-Dive" technicals not found in the final manuscripts.
                </p>
              </div>

              {/* Card 4: First-In Rewards */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#c99a38] text-[#120e06] space-y-2.5 shadow-md">
                <h3 className="text-base sm:text-lg font-black font-sans uppercase tracking-tight text-black">
                  First-In Rewards
                </h3>
                <p className="text-xs sm:text-sm font-medium font-sans leading-relaxed text-black/90">
                  Exclusive discounts on the upcoming REGENESIS Online Course, Somatic Retreats, and the Fire Beast merchandise collection.
                </p>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Section 3: The Beta-25 Opportunity Banner */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#c99a38] text-[#120e06] text-center space-y-3 max-w-5xl mx-auto shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-black">
              The Beta-25 Opportunity
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-medium font-sans leading-relaxed max-w-3xl mx-auto text-black/90">
              We are selecting <strong className="font-extrabold text-black">25 Early Adopters</strong> from this waitlist to serve as our <strong className="font-extrabold text-black">Beta Readers</strong>. Those selected will receive the entire REGENESIS Trilogy for free and play a direct role in the development of the project's legacy.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};
