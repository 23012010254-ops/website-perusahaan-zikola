import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Gamepad2, 
  Brain, 
  Stethoscope, 
  Heart, 
  CheckCircle2, 
  FileCheck2, 
  Lock, 
  Award 
} from 'lucide-react';
import { logoZikola, stickerMantap } from '../assets/stickers';
import { companyInfo } from '../data/companyData';

export default function AboutCompanySection() {
  const iconMap = {
    Gamepad2: Gamepad2,
    Brain: Brain,
    Stethoscope: Stethoscope,
    Heart: Heart,
  };

  return (
    <section id="tentang-kami" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-xs font-semibold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
            <Building2 className="w-3.5 h-3.5" />
            Profil Perusahaan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Dedikasi Ilmiah untuk Masa Depan <br />
            <span className="font-serif-accent italic font-normal text-teal-700 dark:text-teal-400">
              Generasi Emas Indonesia
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            CV Maju Bersama Generasi adalah pengembang teknologi edukasi dan asesmen psikologi anak yang menggabungkan sains psikometri dengan kehangatan pengasuhan.
          </p>
        </div>

        {/* Corporate Profile Card */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative (Col 1-7) */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 p-1.5 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-xs">
                  <img src={logoZikola} alt="Zikola Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    CV Maju Bersama Generasi
                  </h3>
                  <p className="text-xs text-teal-700 dark:text-teal-400 font-medium">
                    Pionir Game-Based Developmental Assessment • Terdaftar PSE Kominfo RI
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                Setiap anak memiliki ritme dan arsitektur kognitif yang unik. Sayangnya, keterbatasan akses ke evaluasi psikologis konvensional seringkali membuat bakat alami dan potensi emas anak terlambat disadari.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                Melalui <strong className="text-slate-900 dark:text-white font-semibold">Zikola</strong>, kami mendemokratisasi akses evaluasi tumbuh kembang berkualitas klinis ke genggaman setiap orang tua dan pendidik, menghapus hambatan geografis dan biaya tanpa mengorbankan ketelitian psikometrik.
              </p>
            </div>

            {/* Legal & Governance Badges */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-start gap-2.5">
                <FileCheck2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">Legalitas Usaha Terdaftar</span>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">NIB: {companyInfo.legality.nib}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white block">{companyInfo.legality.pseKominfo}</span>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">Enkripsi Data & Privasi Anak</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Vision & Mission (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Vision */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-sm flex-1 space-y-3 border border-slate-800 relative overflow-hidden">
              <img src={stickerMantap} alt="Kula Mantap" className="absolute -bottom-2 -right-2 w-20 h-20 object-contain opacity-80" />
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-xs font-semibold text-teal-300">
                <Eye className="w-3.5 h-3.5" />
                Visi Institusi
              </div>
              <h3 className="text-lg font-bold">Membuka Akses Evaluasi Tumbuh Kembang Berstandar Global untuk Setiap Anak</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pr-12">
                Menciptakan ekosistem digital yang memungkinkan deteksi dini potensi dan kebutuhan stimulasi anak secara akurat di seluruh pelosok tanah air.
              </p>
            </div>

            {/* Mission Commitments */}
            <div className="p-8 rounded-3xl bento-card flex-1 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/80 text-xs font-semibold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
                <Target className="w-3.5 h-3.5" />
                Pilar Pelayanan
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 font-normal">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Validitas psikometrik teruji berbasis Teori CHC & Social-Emotional Learning.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Integrasi langsung ke telekonsultasi dokter anak dan psikolog perkembangan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span>Kemitraan terpadu dengan sekolah, yayasan, dan klinik tumbuh kembang.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {companyInfo.values.map((val, idx) => {
            const IconComp = iconMap[val.icon] || Gamepad2;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bento-card flex flex-col justify-between space-y-3"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200/80 dark:border-teal-800 flex items-center justify-center text-teal-700 dark:text-teal-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-teal-700 dark:text-teal-400 block pt-2 border-t border-slate-100 dark:border-slate-800">
                  {val.badge}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
