import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RegenesisBanner } from './components/RegenesisBanner';
import { BooksSection } from './components/BooksSection';
import { ScienceManifesto } from './components/ScienceManifesto';
import { WhyThomasSection } from './components/WhyThomasSection';
import { KeynotesSection } from './components/KeynotesSection';
import { AudienceSection } from './components/AudienceSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { SciencePage } from './components/SciencePage';
import { MythologyPage } from './components/MythologyPage';
import { AboutPage } from './components/AboutPage';
import { QuizPrepPage } from './components/QuizPrepPage';
import { SpeakerKitPage } from './components/SpeakerKitPage';
import { WaitlistPage } from './components/WaitlistPage';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { ScrollProgress } from './components/ScrollProgress';

// Modals
import { MirrorQuizModal } from './components/MirrorQuizModal';
import { BookDetailModal } from './components/BookDetailModal';
import { KeynoteDetailModal } from './components/KeynoteDetailModal';
import { SpeakerKitModal } from './components/SpeakerKitModal';
import { WaitlistModal } from './components/WaitlistModal';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModal';

import { BookInfo, KeynoteInfo } from './types';

export default function App() {
  // Navigation state
  const [currentPage, setCurrentPage] = useState<'home' | 'science' | 'mythology' | 'about' | 'quiz' | 'speaker-kit' | 'waitlist'>('home');

  // Modal states
  const [quizOpen, setQuizOpen] = useState(false);
  const [speakerKitOpen, setSpeakerKitOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  
  const [selectedBook, setSelectedBook] = useState<BookInfo | null>(null);
  const [selectedKeynote, setSelectedKeynote] = useState<KeynoteInfo | null>(null);
  const [legalType, setLegalType] = useState<'terms' | 'privacy' | null>(null);

  const handleNavigatePage = (page: 'home' | 'science' | 'mythology' | 'about' | 'quiz' | 'speaker-kit' | 'waitlist', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleOpenSpeakerKit = () => {
    handleNavigatePage('speaker-kit');
  };

  const handleOpenWaitlist = () => {
    handleNavigatePage('waitlist');
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] font-inter antialiased flex flex-col selection:bg-[#D4AF37] selection:text-[#1A1A1A] relative">
      
      {/* Subtle Gold Reading Progress Bar across the whole site */}
      <ScrollProgress />

      {/* Paper Grain Tactile Texture Overlay */}
      <div className="paper-noise-overlay" />

      {/* Top Navbar */}
      <Navbar 
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
        onOpenMirrorQuiz={() => setQuizOpen(true)}
        onOpenSpeakerKit={handleOpenSpeakerKit}
        onOpenWaitlist={handleOpenWaitlist}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Main Page Content with Subtle Page & Scroll Animations */}
      <main className="flex-1 relative z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentPage === 'about' ? (
              <AboutPage 
                onNavigatePage={handleNavigatePage}
                onOpenSpeakerKit={handleOpenSpeakerKit}
                onOpenContact={() => setContactOpen(true)}
                onOpenWaitlist={handleOpenWaitlist}
                onOpenMirrorQuiz={() => handleNavigatePage('quiz')}
                onSelectBook={(book) => setSelectedBook(book)}
              />
            ) : currentPage === 'mythology' ? (
              <MythologyPage 
                onOpenSpeakerKit={handleOpenSpeakerKit}
                onOpenContact={() => setContactOpen(true)}
                onOpenWaitlist={handleOpenWaitlist}
                onOpenMirrorQuiz={() => handleNavigatePage('quiz')}
              />
            ) : currentPage === 'science' ? (
              <SciencePage 
                onOpenSpeakerKit={handleOpenSpeakerKit}
                onOpenContact={() => setContactOpen(true)}
                onOpenWaitlist={handleOpenWaitlist}
                onOpenMirrorQuiz={() => handleNavigatePage('quiz')}
              />
            ) : currentPage === 'quiz' ? (
              <QuizPrepPage 
                onStartQuiz={() => setQuizOpen(true)}
                onNavigatePage={handleNavigatePage}
              />
            ) : currentPage === 'speaker-kit' ? (
              <SpeakerKitPage 
                onNavigateHome={() => handleNavigatePage('home')}
                onOpenContact={() => setContactOpen(true)}
              />
            ) : currentPage === 'waitlist' ? (
              <WaitlistPage 
                onNavigateHome={() => handleNavigatePage('home')}
                onOpenContact={() => setContactOpen(true)}
              />
            ) : (
              <>
                {/* Hero Section: Meet Thomas Ventura */}
                <HeroSection 
                  onOpenMirrorQuiz={() => handleNavigatePage('quiz')}
                  onOpenSpeakerKit={handleOpenSpeakerKit}
                  onOpenWaitlist={handleOpenWaitlist}
                />

                {/* The Regenesis Project Banner */}
                <ScrollReveal yOffset={16}>
                  <RegenesisBanner />
                </ScrollReveal>

                {/* Book Drops Section */}
                <ScrollReveal delay={0.1}>
                  <BooksSection 
                    onSelectBook={(book) => setSelectedBook(book)} 
                  />
                </ScrollReveal>

                {/* Biological Architecture & Science Manifesto Section */}
                <ScrollReveal delay={0.1}>
                  <ScienceManifesto />
                </ScrollReveal>

                {/* Why Thomas? (Inverted Dark Section) */}
                <ScrollReveal delay={0.1}>
                  <WhyThomasSection />
                </ScrollReveal>

                {/* Signature Keynotes Section */}
                <ScrollReveal delay={0.1}>
                  <KeynotesSection 
                    onSelectKeynote={(keynote) => setSelectedKeynote(keynote)} 
                    onOpenBooking={() => setContactOpen(true)}
                  />
                </ScrollReveal>

                {/* Target Audience Section */}
                <ScrollReveal delay={0.1}>
                  <AudienceSection />
                </ScrollReveal>

                {/* Call-To-Action Banner */}
                <ScrollReveal delay={0.1}>
                  <CallToActionBanner 
                    onOpenSpeakerKit={handleOpenSpeakerKit}
                    onOpenContact={() => setContactOpen(true)}
                    onOpenWaitlist={handleOpenWaitlist}
                  />
                </ScrollReveal>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={() => setContactOpen(true)}
        onOpenSpeakerKit={handleOpenSpeakerKit}
        onOpenWaitlist={handleOpenWaitlist}
        onOpenPrivacy={() => setLegalType('privacy')}
        onOpenTerms={() => setLegalType('terms')}
        onNavigatePage={handleNavigatePage}
      />

      {/* Interactive Modals */}
      <MirrorQuizModal 
        isOpen={quizOpen} 
        onClose={() => setQuizOpen(false)} 
        onOpenContact={() => setContactOpen(true)} 
      />

      <BookDetailModal 
        book={selectedBook} 
        onClose={() => setSelectedBook(null)} 
      />

      <KeynoteDetailModal 
        keynote={selectedKeynote} 
        onClose={() => setSelectedKeynote(null)} 
        onOpenContact={() => setContactOpen(true)} 
      />

      <SpeakerKitModal 
        isOpen={speakerKitOpen} 
        onClose={() => setSpeakerKitOpen(false)} 
      />

      <WaitlistModal 
        isOpen={waitlistOpen} 
        onClose={() => setWaitlistOpen(false)} 
      />

      <ContactModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />

      <LegalModal 
        type={legalType} 
        onClose={() => setLegalType(null)} 
      />

    </div>
  );
}
