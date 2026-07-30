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

export type PageKey = 'home' | 'science' | 'mythology' | 'about' | 'quiz' | 'speaker-kit' | 'waitlist';

export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

export const ROUTE_METADATA: Record<PageKey, RouteMeta> = {
  home: {
    title: "Thomas Ventura — The Regenesis Project & Human Operating System (HOS™)",
    description: "Official portal for Thomas Ventura, featuring the 10 Lenses of Science, The Mirror Quiz, Signature Keynotes, Speaker Kit, and Book Trilogy.",
    canonical: "https://thomasventura.com/",
    ogTitle: "Thomas Ventura — The Regenesis Project & Human Operating System (HOS™)",
    ogDescription: "Recoding executive performance through nervous system coherence, biological capacity, and the Human Operating System.",
  },
  about: {
    title: "About Thomas Ventura — Neuro-Biological Systems Architect & Author",
    description: "From a war-zone refugee to multi-million dollar business operator, Thomas Ventura decodes the biological capacity and nervous system coherence capping executive leadership.",
    canonical: "https://thomasventura.com/about",
    ogTitle: "About Thomas Ventura — Neuro-Biological Systems Architect & Author",
    ogDescription: "Discover the journey, executive experience, and biological framework of Thomas Ventura.",
  },
  science: {
    title: "The 10 Lenses of Science — Human Operating System (HOS™) | Thomas Ventura",
    description: "Explore the 10 scientific disciplines (Neuroscience, Cybernetics, Polyvagal Theory, Epigenetics, Bio-Energetics, and more) powering The Regenesis Project.",
    canonical: "https://thomasventura.com/science",
    ogTitle: "The 10 Lenses of Science — Human Operating System (HOS™)",
    ogDescription: "A bio-digital framework integrating 10 scientific disciplines for executive performance and capacity.",
  },
  mythology: {
    title: "The Mythology & Origin Story — Thomas Ventura & The Regenesis Project",
    description: "The origin story of Thomas Ventura and the archetypal transformation from Survival Operating System to Quantum Neural Execution.",
    canonical: "https://thomasventura.com/mythology",
    ogTitle: "The Mythology & Origin Story — Thomas Ventura",
    ogDescription: "Decoding the origin story and archetypal journey from survival to high-performance neural execution.",
  },
  quiz: {
    title: "The Mirror Quiz — Neuro-Biological Executive Capacity Assessment",
    description: "Take The Mirror Quiz to analyze the subconscious hardware running beneath your habits and unlock your true executive operating capacity.",
    canonical: "https://thomasventura.com/mirror-quiz",
    ogTitle: "The Mirror Quiz — Neuro-Biological Executive Capacity Assessment",
    ogDescription: "Scan the subconscious hardware running beneath your executive decisions and habits.",
  },
  'speaker-kit': {
    title: "Speaker Kit & Keynotes — Thomas Ventura | Executive Summits & Keynotes",
    description: "Keynote speeches, speaker requirements, bio downloads, and booking details for Thomas Ventura at global leadership summits and executive retreats.",
    canonical: "https://thomasventura.com/speaker-kit",
    ogTitle: "Speaker Kit & Keynotes — Thomas Ventura",
    ogDescription: "Book Thomas Ventura for keynotes, executive retreats, and corporate summits.",
  },
  waitlist: {
    title: "Book Drop Waitlist & Cohorts — Thomas Ventura | Biological Architecture",
    description: "Join the private waitlist for Thomas Ventura's upcoming book trilogy on Biological Architecture, Cybernetic Leadership, and Epigenetic Freedom.",
    canonical: "https://thomasventura.com/waitlist",
    ogTitle: "Book Drop Waitlist & Cohorts — Thomas Ventura",
    ogDescription: "Reserve your spot for confidential book drops and executive cohorts.",
  },
};

export const getPageFromPath = (path: string): PageKey => {
  const cleanPath = path.toLowerCase().replace(/\/$/, '') || '/';
  if (cleanPath === '/about') return 'about';
  if (cleanPath === '/science') return 'science';
  if (cleanPath === '/mythology') return 'mythology';
  if (cleanPath === '/mirror-quiz' || cleanPath === '/quiz') return 'quiz';
  if (cleanPath === '/speaker-kit') return 'speaker-kit';
  if (cleanPath === '/waitlist') return 'waitlist';
  return 'home';
};

interface AppProps {
  initialPath?: string;
}

export default function App({ initialPath }: AppProps) {
  // Navigation state initialized from initialPath or window location
  const [currentPage, setCurrentPage] = useState<PageKey>(() => {
    if (initialPath) {
      return getPageFromPath(initialPath);
    }
    if (typeof window !== 'undefined') {
      return getPageFromPath(window.location.pathname);
    }
    return 'home';
  });

  // Modal states
  const [quizOpen, setQuizOpen] = useState(false);
  const [speakerKitOpen, setSpeakerKitOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  
  const [selectedBook, setSelectedBook] = useState<BookInfo | null>(null);
  const [selectedKeynote, setSelectedKeynote] = useState<KeynoteInfo | null>(null);
  const [legalType, setLegalType] = useState<'terms' | 'privacy' | null>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const syncRouteFromLocation = () => {
      const page = getPageFromPath(window.location.pathname);
      setCurrentPage(page);
    };

    // Update document head metadata dynamically when page changes in browser
    const meta = ROUTE_METADATA[currentPage] || ROUTE_METADATA.home;
    document.title = meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) canonicalEl.setAttribute('href', meta.canonical);

    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute('content', meta.ogTitle);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute('content', meta.ogDescription);

    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl) ogUrlEl.setAttribute('content', meta.canonical);

    window.addEventListener('popstate', syncRouteFromLocation);
    return () => window.removeEventListener('popstate', syncRouteFromLocation);
  }, [currentPage]);

  const handleNavigatePage = (page: PageKey, sectionId?: string) => {
    const pageToPathMap: Record<PageKey, string> = {
      home: '/',
      about: '/about',
      science: '/science',
      mythology: '/mythology',
      quiz: '/mirror-quiz',
      'speaker-kit': '/speaker-kit',
      waitlist: '/waitlist',
    };

    const targetPath = pageToPathMap[page] || '/';

    if (typeof window !== 'undefined') {
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, '', targetPath);
      }
    }

    setCurrentPage(page);

    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
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
