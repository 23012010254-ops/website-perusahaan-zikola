import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Gamepad2, 
  Brain,
  Activity,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Zap,
  Play
} from 'lucide-react';
import { 
  logoZikola, 
  stickerHai, 
  stickerKeren, 
  stickerHebat, 
  stickerLoveIt,
  stickerYeey 
} from '../assets/stickers';
import { companyInfo } from '../data/companyData';

export default function HeroSection({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('kognitif');
  const [selectedAnswer, setSelectedAnswer] = useState('B');
  const [isAnswered, setIsAnswered] = useState(true);

  const handleAnswer = (ans) => {
    setSelectedAnswer(ans);
    setIsAnswered(true);
  };

  return (
    <section id="beranda" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-dot-pattern">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header Block */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Institutional Trust Badge with Playful Kula Mascot */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-teal-500/40 transition-colors">
            <img src={stickerHai} alt="Kula Menyapa" className="w-6 h-6 object-contain animate-bounce" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              Landasan Teori Psikologi Cattell-Horn-Carroll (CHC) & SEL
            </span>
          </div>

          {/* Masterpiece Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            Memetakan Potensi Emas Anak Lewat{' '}
            <span className="font-serif-accent italic font-normal text-teal-700 dark:text-teal-400">
              Game Psikometri Interaktif
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Platform digital dari <strong className="text-slate-900 dark:text-white font-semibold">CV Maju Bersama Generasi</strong> yang mentransformasikan asesmen kognitif, motorik, dan minat bakat anak menjadi pengalaman bermain yang menyenangkan tanpa rasa cemas, terhubung langsung dengan dokter anak dan psikolog.
          </p>

          {/* Action Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500 shadow-sm transition-all hover:translate-y-[-1px] flex items-center justify-center gap-2"
            >
              <span>Jadwalkan Demo Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#metodologi"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-xs transition-all flex items-center justify-center gap-2"
            >
              <Brain className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Pelajari Riset Ilmiah</span>
            </a>
          </div>

          {/* Micro Trust Proof */}
          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              Terdaftar PSE Kominfo RI
            </span>
            <span className="hidden sm:inline-block">•</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              Privasi & Keamanan Data Anak
            </span>
          </div>

        </div>

        {/* Live Interactive Product & Clinical Preview Stage */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bento-card rounded-3xl p-4 sm:p-8 relative overflow-hidden">
            
            {/* Studio Header Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-200/80 dark:border-slate-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200/80 dark:border-teal-800 p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                  <img src={stickerHai} alt="Maskot Kula" className="w-full h-full object-contain hover:rotate-6 transition-transform" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Zikola Clinical & Assessment Studio
                    </h3>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      Live Telemetry
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Sesi Asesmen: Ananda Kenzo (Usia 6 Tahun 4 Bulan) • Bermain Bersama Kula
                  </p>
                </div>
              </div>

              {/* Mode Selector */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-medium">
                {['kognitif', 'linguistik', 'motorik'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                      activeTab === tab 
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold' 
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Studio Workspace Grid */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Game & Stimulus Monitor (Col 1-7) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900 text-white relative overflow-hidden border border-slate-800 shadow-md">
                  
                  {/* Floating celebratory sticker on correct answer */}
                  {selectedAnswer === 'B' && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-950/90 border border-emerald-500/50 px-2.5 py-1 rounded-xl text-[11px] font-bold text-emerald-300 animate-pop">
                      <img src={stickerHebat} alt="Kula Hebat" className="w-5 h-5 object-contain" />
                      <span>Keren! Jawaban Tepat</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
                    <span className="flex items-center gap-1.5 font-mono text-teal-400">
                      <Zap className="w-3.5 h-3.5" />
                      GAME STIMULUS: ALIEN SHOOTER (Gf)
                    </span>
                    <span className="font-mono">Latensi: 840ms</span>
                  </div>

                  <div className="py-6 text-center space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-300 font-mono text-xs">
                      Tantangan Penalaran Logika & Aritmatika Cepat
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                      12 + 15 = ?
                    </div>
                    
                    {/* Interactive Clickable Answers */}
                    <div className="flex justify-center gap-3 pt-2">
                      <button 
                        onClick={() => handleAnswer('A')}
                        className={`px-4 py-2 rounded-xl border text-sm font-mono transition-all ${
                          selectedAnswer === 'A' 
                            ? 'bg-rose-900/60 border-rose-500 text-rose-200' 
                            : 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-300'
                        }`}
                      >
                        A. 25
                      </button>
                      
                      <button 
                        onClick={() => handleAnswer('B')}
                        className={`px-4 py-2 rounded-xl border text-sm font-mono font-bold transition-all ${
                          selectedAnswer === 'B' 
                            ? 'bg-teal-600/40 border-teal-400 text-teal-200 ring-2 ring-teal-500/50 shadow-sm' 
                            : 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-300'
                        }`}
                      >
                        B. 27 ✓
                      </button>

                      <button 
                        onClick={() => handleAnswer('C')}
                        className={`px-4 py-2 rounded-xl border text-sm font-mono transition-all ${
                          selectedAnswer === 'C' 
                            ? 'bg-rose-900/60 border-rose-500 text-rose-200' 
                            : 'bg-slate-800 hover:bg-slate-750 border-slate-700 text-slate-300'
                        }`}
                      >
                        C. 29
                      </button>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Mekanisme: Cattell-Horn-Carroll (CHC) Fluid Reasoning</span>
                    <span className="text-emerald-400 font-semibold">Akurasi Sesi: 96%</span>
                  </div>
                </div>

                {/* Sub metrics pill with Kula stickers */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col items-center">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 block">Working Memory</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Digit Span 7</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col items-center">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 block">Visual Matching</span>
                    <span className="text-sm font-bold text-teal-600 dark:text-teal-400 mt-0.5">Skor 92/100</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col items-center">
                    <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 block">Status Emosi</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">Tenang & Fokus</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Clinical Insight & Doctor Sync (Col 8-12) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      Analisis Dokter & Psikolog
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 font-mono">
                      WISC-V Metric
                    </span>
                  </div>

                  {/* Visual Radar Level Bar */}
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1">
                        <span>Fluid Reasoning (Gf)</span>
                        <span className="font-bold text-teal-600 dark:text-teal-400">Sangat Tinggi (94%)</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="w-[94%] h-full bg-teal-500 rounded-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1">
                        <span>Working Memory (Gwm)</span>
                        <span className="font-bold text-teal-600 dark:text-teal-400">Optimal (88%)</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="w-[88%] h-full bg-teal-500 rounded-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-medium text-slate-600 dark:text-slate-300 mb-1">
                        <span>Processing Speed (Gs)</span>
                        <span className="font-bold text-teal-600 dark:text-teal-400">Cepat & Stabil (91%)</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="w-[91%] h-full bg-teal-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Recommendation Snippet with Kula Love It Sticker */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 leading-relaxed font-normal flex items-start gap-3">
                    <img src={stickerLoveIt} alt="Kula Care" className="w-9 h-9 object-contain shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white mb-0.5 flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                        Catatan dr. Rani Sp.A:
                      </p>
                      "Kemampuan penalaran logis abstrak di atas rata-rata usia 6 tahun. Sangat siap untuk stimulasi sains dan eksplorasi robotika."
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Institutional Authority Matrix */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">45.000+</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Sesi Asesmen Anak Terdata</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">15+</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Game Psikometri Terstandar</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">120+</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Sekolah TK/PAUD & Mitra Klinik</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">98.4%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Akurasi Pemetaan Minat Bakat</span>
          </div>
        </div>

      </div>
    </section>
  );
}
