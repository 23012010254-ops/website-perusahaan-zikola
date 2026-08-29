import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function FloatingWhatsapp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Friendly Chat Bubble with Kula Mascot */}
      {showTooltip && (
        <div className="mb-3 max-w-xs p-4 rounded-2xl bg-white dark:bg-slate-900 border border-teal-200 dark:border-teal-800 shadow-xl relative text-xs animate-pop">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Tutup Pesan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <img src="/logo.png" alt="Kula Mascot" className="w-6 h-6 object-contain" />
            <span className="font-bold text-teal-600 dark:text-teal-400">Tim MBG & Kula</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed pr-2 font-normal">
            Halo! Mau berkonsultasi mengenai paket atau jadwal demo <strong>Zikola</strong>? Chat tim kami sekarang.
          </p>
        </div>
      )}

      {/* Floating Button with Mascot Avatar */}
      <a
        href={`https://wa.me/${companyInfo.whatsapp}?text=Halo%20Zikola,%20saya%20tertarik%20mencoba%20aplikasi%20Zikola.`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-600 p-1 text-white shadow-xl shadow-teal-600/30 hover:scale-105 active:scale-95 transition-all"
        aria-label="Chat WhatsApp Tim Zikola"
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center p-1.5 overflow-hidden">
          <img src="/logo.png" alt="Kula" className="w-full h-full object-contain" />
        </div>
        
        {/* WhatsApp Badge Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5">
          <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500 text-[9px] sm:text-[10px] font-bold text-white items-center justify-center shadow-sm">
            WA
          </span>
        </span>
      </a>

    </div>
  );
}
