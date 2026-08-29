import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyInfo } from '../data/companyData';

export default function DemoRequestModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    role: 'Orang Tua (Keluarga Mandiri)',
    institution: '',
    phone: '',
    preferredDate: '',
    focusArea: 'Asesmen Kognitif CHC & Minat Bakat',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Mohon lengkapi nama dan nomor WhatsApp.');
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    setSubmitted(true);

    const waText = `Halo Tim CV Maju Bersama Generasi,%0A%0A` +
      `Saya ingin menjadwalkan *Demo Platform Asesmen Zikola*:%0A` +
      `• Nama: ${formData.name}%0A` +
      `• Profil: ${formData.role}%0A` +
      `• Instansi/Sekolah: ${formData.institution || '-'}%0A` +
      `• Nomor WhatsApp: ${formData.phone}%0A` +
      `• Rencana Jadwal: ${formData.preferredDate || 'Segera'}%0A` +
      `• Fokus Kebutuhan: ${formData.focusArea}%0A%0A` +
      `Mohon info ketersediaan jadwal tim konsultan. Terima kasih!`;

    setTimeout(() => {
      window.open(`https://wa.me/${companyInfo.whatsapp}?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Tutup Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Permohonan Terkirim
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed font-normal">
              Tim konsultan CV Maju Bersama Generasi sedang memproses data Anda dan akan segera menghubungi nomor WhatsApp Anda.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 text-white shadow-xs transition-transform"
            >
              Tutup Jendela
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 p-1 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="Zikola Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Jadwalkan Demo Platform Zikola
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                  Konsultasikan kebutuhan asesmen anak bersama tim ahli kami.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Kategori / Peran *
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                  >
                    <option value="Orang Tua (Keluarga Mandiri)" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Orang Tua (Keluarga Mandiri)</option>
                    <option value="Kepala Sekolah / Guru TK/PAUD" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Kepala Sekolah / Guru TK/PAUD</option>
                    <option value="Guru / Pimpinan SD" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Guru / Pimpinan SD</option>
                    <option value="Dokter Spesialis Anak (Sp.A)" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Dokter Spesialis Anak (Sp.A)</option>
                    <option value="Psikolog Perkembangan / Terapis" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Psikolog Perkembangan / Terapis</option>
                    <option value="Pimpinan Yayasan Pendidikan" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Pimpinan Yayasan Pendidikan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Instansi / Sekolah (Opsional)
                  </label>
                  <input
                    type="text"
                    name="institution"
                    placeholder="Contoh: TK Ceria / Pribadi"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="08123456789"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Fokus Asesmen yang Diinginkan
                </label>
                <select
                  name="focusArea"
                  value={formData.focusArea}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="Asesmen Kognitif CHC & Minat Bakat" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Asesmen Kognitif CHC & Minat Bakat</option>
                  <option value="Kesiapan Masuk Sekolah (TK ke SD)" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Kesiapan Masuk Sekolah (TK ke SD)</option>
                  <option value="Integrasi Dashboard Dokter & Telekonsultasi" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Integrasi Dashboard Dokter & Telekonsultasi</option>
                  <option value="Asesmen Kolektif Satu Sekolah / Yayasan" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Asesmen Kolektif Satu Sekolah / Yayasan</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-slate-900 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Permohonan & Sambungkan ke WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
