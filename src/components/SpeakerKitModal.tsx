import React, { useState } from 'react';
import { X, Download, CheckCircle, Award } from 'lucide-react';

interface SpeakerKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerKitModal: React.FC<SpeakerKitModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setDownloaded(true);
      setTimeout(() => {
        setDownloaded(false);
        setEmail('');
        setName('');
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#1A1A1A] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] text-[#1A1A1A]">
        
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 text-[#1A1A1A] hover:text-[#D4AF37] border border-[#1A1A1A]/20 hover:border-[#D4AF37] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] font-inter font-semibold text-xs uppercase tracking-[0.25em] mb-2">
            <Award className="w-4 h-4" />
            <span>Official Event Assets</span>
          </div>
          <h2 className="font-playfair font-normal text-3xl text-[#1A1A1A]">
            EXECUTIVE SPEAKER KIT
          </h2>
          <p className="font-inter text-xs text-[#6C6863] mt-2">
            Includes high-res headshots, official bio, AV requirements, and keynote specs.
          </p>
        </div>

        {downloaded ? (
          <div className="p-4 bg-[#FFFDF0] border border-[#D4AF37]/50 text-[#1A1A1A] rounded text-xs flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <div>
              <p className="font-bold">Speaker Kit Access Granted!</p>
              <p className="text-[11px] text-[#6C6863]">The PDF kit and media assets package are downloading now.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-6 font-inter text-xs">
            <div>
              <label className="block text-[#1A1A1A] font-semibold mb-2 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-editorial w-full"
              />
            </div>

            <div>
              <label className="block text-[#1A1A1A] font-semibold mb-2 uppercase tracking-wider">Organization / Event Email</label>
              <input
                type="email"
                required
                placeholder="sarah@enterprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-editorial w-full"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="btn-gold-slide h-14 w-full text-xs uppercase tracking-[0.2em] font-inter font-medium flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Download PDF Speaker Kit</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
