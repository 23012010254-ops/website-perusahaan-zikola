import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  Sparkles,
  ArrowUp,
  Brain
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer({ onOpenDemoModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/10 p-1 border border-teal-500/30">
                <img src="/logo.png" alt="Zikola Logo Mascot" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">Zikola</span>
                <span className="text-xs text-teal-400 block font-bold">Child Assessment Ecosystem by CV Maju Bersama Generasi</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md font-normal">
              {companyInfo.description}
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>NIB: {companyInfo.legality.nib} • Terdaftar Resmi PSE Kominfo</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                SK Kemenkumham: {companyInfo.legality.kemenkumham}
              </p>
            </div>
          </div>

          {/* Nav Links: Modul Zikola */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Modul Asesmen
            </h4>
            <ul className="space-y-2.5 text-xs font-normal">
              <li><a href="#produk-zikola" className="hover:text-teal-300 transition-colors">Asesmen Kognitif & Logika (CHC)</a></li>
              <li><a href="#produk-zikola" className="hover:text-teal-300 transition-colors">Asesmen Bahasa & Linguistik</a></li>
              <li><a href="#produk-zikola" className="hover:text-teal-300 transition-colors">Pemetaan Minat Bakat & Karakter</a></li>
              <li><a href="#produk-zikola" className="hover:text-teal-300 transition-colors">Asesmen Motorik & Tips Stimulasi</a></li>
              <li><a href="#produk-zikola" className="hover:text-teal-300 transition-colors">Telekonsultasi Dokter & Psikolog</a></li>
              <li><a href="#produk-zikola" className="hover:text-teal-300 transition-colors">Panduan Parenting Ayah & Bunda</a></li>
            </ul>
          </div>

          {/* Quick Links: Perusahaan */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Perusahaan
            </h4>
            <ul className="space-y-2.5 text-xs font-normal">
              <li><a href="#tentang-kami" className="hover:text-teal-300 transition-colors">Tentang Kami (MBG)</a></li>
              <li><a href="#simulasi-roi" className="hover:text-teal-300 transition-colors">Pilihan Asesmen</a></li>
              <li><a href="#paket-harga" className="hover:text-teal-300 transition-colors">Paket & Biaya</a></li>
              <li><a href="#testimoni" className="hover:text-teal-300 transition-colors">Testimoni Ahli & Ortu</a></li>
              <li><a href="#faq" className="hover:text-teal-300 transition-colors">Tanya Jawab (FAQ)</a></li>
              <li><a href="#kontak" className="hover:text-teal-300 transition-colors">Kontak Resmi</a></li>
            </ul>
          </div>

          {/* CTA & Actions */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Mulai Asesmen
            </h4>
            <p className="text-xs text-slate-400 font-normal">
              Coba asesmen tumbuh kembang interaktif bersama Kula sekarang.
            </p>
            <button
              onClick={onOpenDemoModal}
              className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all text-center hover:scale-105"
            >
              Coba Asesmen Gratis
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} CV Maju Bersama Generasi. Seluruh Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 transition-all flex items-center gap-1.5 text-xs font-medium border border-slate-800"
              title="Kembali ke Atas"
            >
              <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
              <span>Ke Atas</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
