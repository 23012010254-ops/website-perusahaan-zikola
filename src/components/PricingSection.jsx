import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Tag,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { pricingPlans, companyInfo } from '../data/companyData';

export default function PricingSection({ onOpenDemoModal }) {
  const [isYearly, setIsYearly] = useState(true);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSelectPlan = (planName) => {
    const period = isYearly ? 'Tahunan (Hemat 20%)' : 'Bulanan';
    const message = `Halo Zikola & CV Maju Bersama Generasi, kami ingin berkonsultasi mengenai pendaftaran *${planName}* (${period}). Mohon informasi langkah pendaftarannya. Terima kasih.`;
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="paket-harga" className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-xs font-semibold text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800">
            <Tag className="w-3.5 h-3.5" />
            Investasi Terjangkau
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Paket Evaluasi Tumbuh Kembang & <br />
            <span className="font-serif-accent italic font-normal text-teal-700 dark:text-teal-400">
              Pendampingan Klinis
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Transparan, tanpa biaya tersembunyi, dirancang untuk kebutuhan keluarga mandiri hingga kemitraan sekolah dan klinik.
          </p>

          {/* Minimal Billing Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-xs font-medium ${!isYearly ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-500 dark:text-slate-400'}`}>
              Bulanan
            </span>
            
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700 p-0.5 relative transition-colors focus:outline-none"
              aria-label="Toggle Tagihan"
            >
              <div className={`w-5 h-5 rounded-full bg-white dark:bg-slate-900 shadow-xs transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-xs font-medium ${isYearly ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-500 dark:text-slate-400'}`}>
                Tahunan
              </span>
              <span className="px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-[10px] font-semibold border border-teal-200 dark:border-teal-800">
                Hemat 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 transition-all flex flex-col justify-between ${
                  plan.popular
                    ? 'bg-slate-900 dark:bg-slate-950 text-white shadow-lg border border-teal-500/40 lg:-translate-y-2'
                    : 'bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs'
                }`}
              >
                {/* Popular Highlight */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-teal-500 text-white text-[10px] font-semibold uppercase tracking-wider shadow-xs">
                    Rekomendasi Utama
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className={`text-[11px] font-semibold uppercase tracking-wider block ${plan.popular ? 'text-teal-400' : 'text-teal-700 dark:text-teal-400'}`}>
                      {plan.badge}
                    </span>
                    <h3 className={`text-xl font-bold mt-1 ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-2 leading-relaxed font-normal ${plan.popular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className={`py-4 border-y ${plan.popular ? 'border-slate-800' : 'border-slate-100 dark:border-slate-800'}`}>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-extrabold font-mono ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        {formatPrice(price)}
                      </span>
                      <span className={`text-xs ${plan.popular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>/bulan</span>
                    </div>
                    {isYearly && (
                      <p className={`text-[11px] font-medium mt-1 ${plan.popular ? 'text-teal-300' : 'text-teal-600 dark:text-teal-400'}`}>
                        Ditagih {formatPrice(price * 12)} / tahun
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider block ${plan.popular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                      Fasilitas Layanan:
                    </span>
                    <ul className="space-y-2">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-normal">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.popular 
                              ? 'bg-teal-500/20 text-teal-400' 
                              : 'bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </div>
                          <span className={plan.popular ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <div className={`pt-6 mt-6 border-t ${plan.popular ? 'border-slate-800' : 'border-slate-100 dark:border-slate-800'}`}>
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`w-full py-3 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-xs'
                        : 'bg-slate-900 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
