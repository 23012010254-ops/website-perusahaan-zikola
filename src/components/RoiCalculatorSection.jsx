import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  Sparkles, 
  Brain, 
  Stethoscope, 
  CheckCircle2, 
  FileText,
  ArrowRight
} from 'lucide-react';
import { stickerMantap } from '../assets/stickers';
import { companyInfo } from '../data/companyData';

export default function RoiCalculatorSection() {
  const [targetType, setTargetType] = useState('Keluarga (1-2 Anak)');
  const [childAge, setChildAge] = useState('5-7 Tahun (TK / SD Awal)');
  const [needConsultation, setNeedConsultation] = useState(true);

  let recommendedPackage = "Paket Tumbuh Kembang Plus";
  let estimatedPrice = "Rp 199.000 / bulan";
  let description = "Akses 15+ game asesmen psikometri, laporan radar tumbuh kembang lengkap, dan 2x sesi telekonsultasi dokter/psikolog per bulan.";

  if (targetType === 'Sekolah TK / PAUD' || targetType === 'Sekolah Dasar (SD)') {
    recommendedPackage = "Paket Kemitraan Sekolah & Yayasan";
    estimatedPrice = "Mulai Rp 950.000 / bulan";
    description = "Asesmen kesiapan belajar siswa satu angkatan, dashboard rekam kognitif guru, dan laporan profil minat bakat siap cetak.";
  } else if (!needConsultation) {
    recommendedPackage = "Paket Keluarga Cerdas";
    estimatedPrice = "Rp 79.000 / bulan";
    description = "Akses mandiri game asesmen kognitif, linguistik, motorik, dan buku panduan stimulasi harian untuk orang tua di rumah.";
  }

  const handleSendToWhatsapp = () => {
    const message = `Halo Zikola & CV Maju Bersama Generasi,%0A%0A` +
      `Saya ingin berkonsultasi mengenai Asesmen Tumbuh Kembang Zikola:%0A` +
      `• Profil: ${targetType}%0A` +
      `• Kelompok Usia: ${childAge}%0A` +
      `• Konsultasi Dokter/Psikolog: ${needConsultation ? 'Termasuk' : 'Mandiri'}%0A` +
      `• Rekomendasi Paket: ${recommendedPackage} (${estimatedPrice})%0A%0A` +
      `Mohon informasi lebih lanjut mengenai cara memulai asesmen. Terima kasih!`;
    
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="simulasi-roi" className="py-20 lg:py-28 bg-[#FAF9F6] dark:bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-xs font-semibold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
            <Calculator className="w-3.5 h-3.5" />
            Panduan Asesmen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Pilih Skema Asesmen yang Tepat <br />
            <span className="font-serif-accent italic font-normal text-teal-700 dark:text-teal-400">
              Sesuai Kebutuhan Buah Hati
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Gunakan panduan interaktif di bawah ini untuk menentukan paket asesmen dan pendampingan pakar yang paling optimal.
          </p>
        </div>

        {/* Interactive Advisory Card */}
        <div className="max-w-4xl mx-auto bento-card rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left: Input Choices (Col 1-7) */}
            <div className="md:col-span-7 p-6 sm:p-10 space-y-6">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  1. Kategori Pengguna:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['Keluarga (1-2 Anak)', 'Sekolah TK / PAUD', 'Sekolah Dasar (SD)', 'Klinik / Terapis'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setTargetType(type)}
                      className={`p-3 rounded-xl text-xs font-semibold text-left transition-all ${
                        targetType === type
                          ? 'bg-slate-900 text-white dark:bg-teal-600 dark:text-white shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  2. Rentang Usia Anak:
                </label>
                <select
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="3-4 Tahun (PAUD / Batita)" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">3-4 Tahun (PAUD / Batita — Skrining Sensori & Motorik)</option>
                  <option value="5-7 Tahun (TK / SD Awal)" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">5-7 Tahun (TK / SD Awal — Kesiapan Belajar & Kognitif CHC)</option>
                  <option value="8-12 Tahun (Usia SD)" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">8-12 Tahun (Usia SD — Pemetaan Minat Bakat & Logika Abstrak)</option>
                </select>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needConsultation}
                    onChange={(e) => setNeedConsultation(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded text-teal-600 focus:ring-teal-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 dark:text-white block">Sertakan Sesi Telekonsultasi Dokter / Psikolog</span>
                    <span className="text-slate-500 dark:text-slate-400 font-normal">Hasil grafik radar dibahas langsung bersama dokter spesialis anak atau psikolog berlisensi.</span>
                  </div>
                </label>
              </div>

            </div>

            {/* Right: Output Recommendation (Col 8-12) */}
            <div className="md:col-span-5 p-6 sm:p-10 bg-slate-900 dark:bg-slate-950 text-white flex flex-col justify-between space-y-6 border-l border-slate-800 relative overflow-hidden">
              
              <img src={stickerMantap} alt="Kula Rekomendasi" className="absolute -top-1 -right-1 w-16 h-16 object-contain opacity-90 animate-bounce" />

              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400">
                  Rekomendasi Paket
                </span>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">{recommendedPackage}</h4>
                  <p className="text-2xl font-extrabold text-teal-300 font-mono">{estimatedPrice}</p>
                </div>

                <p className="text-xs text-slate-300 dark:text-slate-300 leading-relaxed font-normal">
                  {description}
                </p>

                <div className="pt-2 space-y-2 text-xs text-slate-200 dark:text-slate-200 font-normal border-t border-slate-800">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Akses 15+ Game Asesmen Terstandar</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span>Laporan Radar Tumbuh Kembang PDF</span>
                  </p>
                  {needConsultation && (
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>Telekonsultasi Terverifikasi Dokter Sp.A</span>
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={handleSendToWhatsapp}
                className="w-full py-3.5 rounded-xl font-semibold text-xs text-slate-900 bg-white hover:bg-teal-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-teal-700" />
                <span>Konsultasi Paket via WhatsApp</span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
