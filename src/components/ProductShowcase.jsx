import React, { useState } from 'react';
import { 
  Brain, 
  MessageSquare, 
  Theater, 
  Target, 
  Stethoscope, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Gamepad2,
  HeartHandshake,
  Building,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { productZikola } from '../data/companyData';

export default function ProductShowcase({ onOpenDemoModal }) {
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(0);
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);

  const iconModuleMap = {
    Brain,
    MessageSquare,
    Theater,
    Target,
    Stethoscope,
    Users,
  };

  const roleIconMap = {
    "HeartHandshake": HeartHandshake,
    "Gamepad2": Gamepad2,
    "Stethoscope": Stethoscope,
    "Building": Building,
  };

  const activeModule = productZikola.modules[selectedModuleIndex];
  const activeRole = productZikola.userRoles[selectedRoleIndex];
  const ActiveModuleIcon = iconModuleMap[activeModule.icon] || Brain;
  const ActiveRoleIcon = roleIconMap[activeRole.icon] || Users;

  return (
    <section id="produk-zikola" className="py-20 lg:py-28 bg-[#FAF9F6] dark:bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-xs font-semibold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
            <Gamepad2 className="w-3.5 h-3.5" />
            Modul & Instrumen Asesmen
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Enam Dimensi Evaluasi Tumbuh Kembang <br />
            <span className="font-serif-accent italic font-normal text-teal-700 dark:text-teal-400">
              Dalam Satu Ekosistem Terpadu
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Dirancang secara khusus untuk memetakan kekuatan mental, emosi, bahasa, dan motorik anak melalui pengalaman bermain yang menyenangkan.
          </p>
        </div>

        {/* Module Nav Pills */}
        <div className="mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {productZikola.modules.map((mod, idx) => {
              const IconComp = iconModuleMap[mod.icon] || Brain;
              const isSelected = selectedModuleIndex === idx;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModuleIndex(idx)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-200 flex flex-col items-start gap-2 border ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 border-teal-500/80 dark:border-teal-500 shadow-sm ring-1 ring-teal-500/30'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-teal-700 text-white dark:bg-teal-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-semibold leading-tight ${isSelected ? 'text-teal-900 dark:text-teal-200' : 'text-slate-700 dark:text-slate-300'}`}>
                    {mod.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Module Deep-Dive Workspace */}
          <div className="mt-6 bento-card rounded-3xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Theoretical Basis & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
                    <span>{activeModule.badge}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
                    {activeModule.tagline}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal">
                    {activeModule.shortDesc}
                  </p>
                </div>

                {/* Game / Task List */}
                {activeModule.games && (
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Game & Instrumen Pengukuran:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeModule.games.map((g, gIdx) => (
                        <span key={gIdx} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                          <span>{g}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Benefits */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Hasil Pengukuran yang Didapat:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModule.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenDemoModal}
                    className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-slate-900 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 shadow-sm transition-all flex items-center gap-2"
                  >
                    <span>Uji Coba Asesmen Modul Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Live Clinical Telemetry Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-teal-950 p-1 flex items-center justify-center">
                        <ActiveModuleIcon className="w-4 h-4 text-teal-700 dark:text-teal-300" />
                      </div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {activeModule.previewCard.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      Tervalidasi
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    {Object.entries(activeModule.previewCard).filter(([k]) => k !== 'title').map(([key, val], idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 capitalize block">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <p className="font-bold text-slate-800 dark:text-slate-100 mt-0.5">{val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>Data tersinkronisasi otomatis ke dashboard dokter spesialis anak.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section: Multi-Stakeholder Portal */}
        <div id="portal-klinis" className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3 border border-slate-200 dark:border-slate-700">
              <Users className="w-3.5 h-3.5" />
              Ekosistem Multi-Pengguna Terintegrasi
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sinergi Menyeluruh untuk Masa Depan Anak
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-normal">
              Zikola menjembatani kebutuhan keluarga, praktisi kesehatan anak, dan institusi pendidikan.
            </p>
          </div>

          {/* Role Pill Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-8">
            {productZikola.userRoles.map((role, rIdx) => {
              const isSelected = selectedRoleIndex === rIdx;
              return (
                <button
                  key={rIdx}
                  onClick={() => setSelectedRoleIndex(rIdx)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white dark:bg-teal-600 dark:text-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                  }`}
                >
                  {role.role}
                </button>
              );
            })}
          </div>

          {/* Active Role Presentation Card */}
          <div className="max-w-4xl mx-auto bento-card rounded-3xl p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200/80 dark:border-teal-800 flex items-center justify-center text-teal-700 dark:text-teal-300">
                  <ActiveRoleIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    {activeRole.badge}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {activeRole.title}
                  </h4>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mt-5 leading-relaxed font-normal">
              {activeRole.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {activeRole.points.map((p, pIdx) => (
                <div key={pIdx} className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5 text-xs font-medium text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
