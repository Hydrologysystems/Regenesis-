import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, RefreshCw, ArrowRight } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/siteData';

interface MirrorQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const MirrorQuizModal: React.FC<MirrorQuizModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const handleOptionSelect = (points: number) => {
    const updatedAnswers = [...answers, points];
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setCompleted(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getDiagnosis = () => {
    if (totalScore <= 6) {
      return {
        title: 'SURVIVAL OPERATING SYSTEM (S.O.S.) — HIGH ADRENAL FRICTION',
        badgeColor: 'bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]',
        summary: 'Your nervous system is operating in acute threat-mitigation mode. Procrastination, micromanagement, and sudden fatigue are not mindset failures—they are your body protecting you from exceeding biological capacity.',
        recommendations: [
          'Immediate adrenal deceleration and cortisolic recalibration.',
          'Identify key-person risk before delegate friction causes operational failure.',
          'Read Book 1: "The Survival Source Code" upon Amazon drop.'
        ]
      };
    } else if (totalScore <= 11) {
      return {
        title: 'TRANSITION ZONE — AT BIOLOGICAL CEILING',
        badgeColor: 'bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]',
        summary: 'You are intellectually aligned with growth, but your nervous system treats rapid expansion as a safety risk. You experience cycles of high productivity followed by unexplained exhaustion or friction.',
        recommendations: [
          'Systematically interrupt the "Control = Safety" neural response.',
          'Re-engineer delegation trust structures to unlock organizational velocity.',
          'Schedule a Keynote or Leadership Assessment with Thomas Ventura.'
        ]
      };
    } else {
      return {
        title: 'OPTIMIZED NEURAL EVOLUTION (Q.N.E.) — COHERENT EXPANSION',
        badgeColor: 'bg-[#1A1A1A] text-[#D4AF37] border border-[#D4AF37]',
        summary: 'Your biological capacity is operating in alignment with your strategic vision. You are ready to scale 8-figure architecture without personal depletion or key-person bottlenecks.',
        recommendations: [
          'Install REGENESIS 365 Blueprint across executive leadership.',
          'Audit supply chain and team capacity for 10x unrestricted expansion.'
        ]
      };
    }
  };

  const currentQ = QUIZ_QUESTIONS[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#1A1A1A] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] text-[#1A1A1A] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#1A1A1A] hover:text-[#D4AF37] border border-[#1A1A1A]/20 hover:border-[#D4AF37] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8 pb-6 border-b border-[#1A1A1A]/15">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] font-inter font-semibold text-xs uppercase tracking-[0.25em] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Biological Capacity Diagnostic</span>
          </div>
          
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-[#1A1A1A]">
            THE MIRROR QUIZ
          </h2>
          
          <p className="font-inter text-xs text-[#6C6863] mt-2">
            Decode whether your business is capped by strategy or nervous system capacity.
          </p>
        </div>

        {/* Steps */}
        {!completed ? (
          <div>
            {/* Progress Bar */}
            <div className="w-full bg-[#FFFDF0] border border-[#D4AF37]/30 h-2 mb-6">
              <div 
                className="bg-[#D4AF37] h-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-inter uppercase tracking-[0.2em] text-[#6C6863] mb-4">
              <span>QUESTION {currentStep + 1} OF {QUIZ_QUESTIONS.length}</span>
              <span className="text-[#D4AF37] font-semibold">{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% COMPLETE</span>
            </div>

            {/* Question Text */}
            <h3 className="font-playfair font-normal text-xl sm:text-2xl text-[#1A1A1A] mb-8 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-4">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(opt.points)}
                  className="w-full text-left p-5 bg-[#FFFDF7] hover:bg-[#FFFDF0] border border-[#1A1A1A]/20 hover:border-[#D4AF37] text-xs sm:text-sm text-[#1A1A1A] transition-all duration-300 cursor-pointer flex items-start gap-4 group"
                >
                  <span className="w-6 h-6 border border-[#1A1A1A] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white text-[#1A1A1A] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed font-inter font-medium group-hover:text-[#1A1A1A]">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Diagnostic Results */
          <div className="space-y-6 animate-fadeIn">
            {(() => {
              const diag = getDiagnosis();
              return (
                <div>
                  <div className={`inline-block px-4 py-2 text-[11px] font-inter font-bold uppercase tracking-[0.2em] mb-4 ${diag.badgeColor}`}>
                    Score: {totalScore} / 16 — {diag.title}
                  </div>

                  <h3 className="font-playfair font-bold text-2xl text-[#1A1A1A] mb-4">
                    Diagnostic Analysis
                  </h3>

                  <p className="font-inter text-sm text-[#1A1A1A] leading-relaxed bg-[#FFFDF0] p-6 border border-[#D4AF37]/40 mb-8">
                    {diag.summary}
                  </p>

                  <h4 className="font-inter font-bold text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
                    Recommended Re-Engineering Steps:
                  </h4>

                  <ul className="space-y-3 mb-8">
                    {diag.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-[#1A1A1A] font-inter">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-[#1A1A1A]/15">
                    <button
                      onClick={() => { onClose(); onOpenContact(); }}
                      className="btn-gold-slide h-12 px-8 text-xs uppercase tracking-[0.2em] font-inter font-medium w-full sm:flex-1 cursor-pointer"
                    >
                      <span>Book Executive Consult</span>
                    </button>
                    
                    <button
                      onClick={resetQuiz}
                      className="btn-editorial-outline h-12 px-6 text-xs uppercase tracking-[0.2em] font-inter font-medium w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

      </div>
    </div>
  );
};
