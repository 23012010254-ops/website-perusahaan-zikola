import React from 'react';
import { 
  Brain, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  Layers, 
  Cpu, 
  ArrowRight 
} from 'lucide-react';

export default function WhyChooseUsSection({ onOpenDemoModal }) {
  const chcConstructs = [
    {
      code: "Gf",
      name: "Fluid Reasoning",
      definition: "Penalaran logis & pemecahan masalah baru",
      games: "Alien Shooter, Desert Road Logic",
      wiscParallel: "WISC-V Matrix Reasoning & Arithmetic",
    },
    {
      code: "Gwm",
      name: "Working Memory",
      definition: "Manipulasi informasi visual & urutan dalam memori aktif",
      games: "Pattern Recognition, Sequence Memory",
      wiscParallel: "WISC-V Digit Span & Letter-Number",
    },
    {
      code: "Gs",
      name: "Processing Speed",
      definition: "Kecepatan pemrosesan informasi & reaksi visual",
      games: "Shape Sorting, Reflex Test",
      wiscParallel: "WISC-V Symbol Search & Coding",
    },
    {
      code: "Gc",
      name: "Crystallized Knowledge",
      definition: "Penguasaan kosa kata & struktur pemahaman bahasa",
      games: "Story Builder, Word Puzzle, Spell Bee",
      wiscParallel: "WISC-V Vocabulary & Comprehension",
    },
  ];

  return (
    <section id="metodologi" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-xs font-semibold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
            <Layers className="w-3.5 h-3.5" />
            Kerangka Ilmiah Psikometrik
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Validasi Berdasarkan Teori Psikologi <br />
            <span className="font-serif-accent italic font-normal text-teal-700 dark:text-teal-400">
              Cattell-Horn-Carroll (CHC)
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Zikola tidak sekadar game edukasi biasa. Setiap aktivitas dirancang untuk mengukur konstruk kognitif manusia yang diakui secara global dalam instrumen terstandar seperti WISC-V dan Woodcock-Johnson V.
          </p>
        </div>

        {/* 4 CHC Constructs Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {chcConstructs.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF9F6] dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col justify-between space-y-4 hover:border-teal-500/50 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    Konstruk {item.code}
                  </span>
                  <Brain className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.definition}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/70 dark:border-slate-700 space-y-1 text-[11px]">
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Game Zikola:</span> {item.games}
                </p>
                <p className="text-teal-700 dark:text-teal-400 font-medium">
                  <span className="font-semibold">Paralel Tes:</span> {item.wiscParallel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparative Analysis: Conventional vs Zikola GBA */}
        <div className="mt-16 bento-card rounded-3xl p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Mengapa Game-Based Assessment Menghasilkan Data Lebih Akurat?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-normal">
              Perbandingan objektif antara proses evaluasi psikologis konvensional dengan ekosistem digital Zikola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Conventional Column */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 space-y-4">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-bold text-sm">
                <XCircle className="w-4 h-4 text-rose-500" />
                <span>Asesmen Konvensional (Kertas / Tanya-Jawab Formal)</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></span>
                  <span>Anak mengalami <em>test anxiety</em> (kecemasan ujian), membuat performa kognitif drop hingga 30%.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></span>
                  <span>Tidak mampu menangkap metrik mikro seperti latensi reaksi waktu nyata (reaction time variance).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0"></span>
                  <span>Biaya tinggi dan memerlukan waktu tunggu administrasi berhari-hari hingga berminggu-minggu.</span>
                </li>
              </ul>
            </div>

            {/* Zikola Column */}
            <div className="p-6 rounded-2xl bg-teal-50/50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800 space-y-4">
              <div className="flex items-center gap-2 text-teal-900 dark:text-teal-200 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Zikola Game-Based Assessment (CHC Grounded)</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-200 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></span>
                  <span>Anak bermain dalam kondisi psikologis alami (*flow state*), menghasilkan respons autentik tanpa rasa tertekan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></span>
                  <span>Merekam ribuan titik data perilaku kognitif (latensi, pola kesalahan, konsistensi atensi) secara otomatis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></span>
                  <span>Laporan grafik radar instan dan langsung terhubung dengan rekam medis dokter anak/psikolog berlisensi.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
