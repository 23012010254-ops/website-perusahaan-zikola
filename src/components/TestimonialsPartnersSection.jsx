import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  School,
  Quote,
  MessageSquareQuote
} from 'lucide-react';
import { testimonials, partnerSchools } from '../data/companyData';

export default function TestimonialsPartnersSection() {
  return (
    <section id="testimoni" className="py-20 lg:py-28 bg-[#FAF9F6] dark:bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-xs font-semibold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Validasi Klinis & Praktisi
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Dipercaya Oleh Dokter Anak, <br />
            <span className="font-serif-accent italic font-normal text-teal-700 dark:text-teal-400">
              Psikolog, & Pendidik Indonesia
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Bagaimana Zikola membantu tenaga medis dan orang tua memahami keunikan anak secara objektif.
          </p>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bento-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
                    {t.highlight}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  "{t.content}"
                </p>
              </div>

              {/* Author Bio */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-600"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {t.role} • {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Institutional Strip */}
        <div className="mt-20 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
            Mitra Sekolah, Yayasan & Fasilitas Tumbuh Kembang
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {partnerSchools.map((school, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-100 shadow-xs hover:border-teal-500/50 transition-colors"
              >
                <School className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="truncate">{school}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
