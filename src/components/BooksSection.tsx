import React from 'react';
import { BOOKS } from '../data/contentData';
import { Book } from '../types';
import { ShoppingBag, ChevronRight, Sparkles } from 'lucide-react';

interface TrilogySectionProps {
  onSelectBook: (book: Book) => void;
}

export const TrilogySection: React.FC<TrilogySectionProps> = ({ onSelectBook }) => {
  return (
    <section id="books-section" className="py-20 sm:py-28 bg-[#F5F2EB] text-[#1A1A1A] relative overflow-hidden border-t border-b border-[#D4AF37]/25">
      {/* Background Subtle Warm Gold Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.14)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE8DC] border border-[#D4AF37]/50 text-[#8B6E14] text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>THE REGENESIS TRILOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#111111] tracking-tight mb-4">
            Three Volumes of <span className="bg-gradient-to-r from-[#A8791B] via-[#C9982D] to-[#8B6E14] bg-clip-text text-transparent">Biological Transformation</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#555047] font-light leading-relaxed">
            From subconscious awareness to active biological interruption and total hardware embodiment.
          </p>
        </div>

        {/* 3 Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BOOKS.map((book) => (
            <div
              key={book.id}
              className="flex flex-col items-center group"
            >
              {/* Drop Date Header */}
              <div className="mb-4 text-center">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E63946] uppercase bg-[#111111] text-white px-3.5 py-1.5 rounded-md border border-[#D4AF37]/40 inline-block shadow-md">
                  Drops on <span className="text-white font-extrabold">amazon</span> <span className="text-[#F7D36B]">{book.dropDate}</span>
                </span>
              </div>

              {/* 3D Book Cover Frame */}
              <div
                onClick={() => onSelectBook(book)}
                className="relative w-full max-w-[280px] aspect-[3/4] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-[1.02] shadow-[0_20px_45px_rgba(0,0,0,0.12)] border border-[#D4AF37]/40 group-hover:border-[#B8860B] group-hover:shadow-[0_25px_50px_rgba(184,134,11,0.25)] mb-6 bg-[#12141B]"
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover filter brightness-105"
                  referrerPolicy="no-referrer"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#F7D36B] font-mono mb-1">
                    {book.tagline}
                  </span>
                  <p className="text-xs text-stone-200 line-clamp-3 mb-3 leading-relaxed">
                    {book.description}
                  </p>
                  <span className="text-xs text-[#FFF2B0] font-bold flex items-center gap-1">
                    Explore Volume <ChevronRight className="w-3.5 h-3.5 text-[#F7D36B]" />
                  </span>
                </div>
              </div>

              {/* Book Info Button */}
              <button
                onClick={() => onSelectBook(book)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#C9982D] to-[#A8791B] hover:brightness-105 text-[#050505] font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_6px_20px_rgba(201,152,45,0.35)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.5)] cursor-pointer flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Click For More Info</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BooksSection = TrilogySection;
