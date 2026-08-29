import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle,
  PhoneCall,
  ArrowUpRight
} from 'lucide-react';
import { stickerHmmm } from '../assets/stickers';
import { faqList, companyInfo } from '../data/companyData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Kula Thinking Sticker */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-xs font-semibold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
            <img src={stickerHmmm} alt="Kula Tanya" className="w-5 h-5 object-contain" />
            <span>Pusat Bantuan & FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Pertanyaan Umum Mengenai <br />
            <span className="font-serif-accent italic font-normal text-teal-700 dark:text-teal-400">
              Asesmen & Ekosistem Zikola
            </span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Informasi lengkap mengenai metodologi, privasi data, dan integrasi klinis.
          </p>
        </div>

        {/* Minimalist Accordion List */}
        <div className="space-y-3">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#FAF9F6] dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-600 transition-transform ${isOpen ? 'rotate-180 text-teal-600 dark:text-teal-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-700 pt-4 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Discreet Help Box with Kula */}
        <div className="mt-12 p-6 rounded-2xl bento-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative overflow-hidden">
          <div className="flex items-center gap-4">
            <img src={stickerHmmm} alt="Kula Bantuan" className="w-12 h-12 object-contain hidden sm:block shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Membutuhkan penjelasan mendalam untuk sekolah atau klinik Anda?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Tim riset dan konsultan kami siap berdiskusi secara daring maupun tatap muka.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=Halo%20Zikola,%20saya%20ingin%20berkonsultasi%20mengenai%20platform%20asesmen.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 shadow-xs transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>Hubungi Tim Konsultan</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
