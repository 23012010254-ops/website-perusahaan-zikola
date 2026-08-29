import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { logoZikola, stickerHai, stickerTerimakasih } from '../assets/stickers';
import { companyInfo } from '../data/companyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    phone: '',
    message: '',
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
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    setSubmitted(true);

    const waText = `Halo Zikola & CV Maju Bersama Generasi,%0A%0A` +
      `Saya ingin berkonsultasi mengenai platform asesmen anak Zikola:%0A` +
      `• Nama: ${formData.name}%0A` +
      `• Kategori/Peran: ${formData.role || 'Orang Tua / Pendidik'}%0A` +
      `• Instansi/Sekolah: ${formData.organization || '-'}%0A` +
      `• Nomor WhatsApp: ${formData.phone}%0A` +
      `• Pesan: ${formData.message || 'Mohon info mengenai cara memulai asesmen Zikola.'}`;

    setTimeout(() => {
      window.open(`https://wa.me/${companyInfo.whatsapp}?text=${waText}`, '_blank');
    }, 600);
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Kula Greeting */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-xs font-bold text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
            <img src={stickerHai} alt="Kula Hai" className="w-5 h-5 object-contain" />
            <span>Mari Berdiskusi Ramah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Konsultasikan Kebutuhan Anda <br />
            <span className="text-teal-600 dark:text-teal-400">
              Bersama Tim Zikola
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Tim CV Maju Bersama Generasi siap membantu keluarga, sekolah, dan klinik dengan ramah dan profesional.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-8 rounded-3xl bg-teal-600 text-white shadow-md space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-2xl bg-white p-1 flex items-center justify-center shadow-sm">
                  <img src={logoZikola} alt="Zikola Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CV Maju Bersama Generasi</h3>
                  <p className="text-xs text-teal-100 font-semibold">Pengembang Ekosistem Zikola</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-normal">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Alamat Kantor:</span>
                    <span className="text-teal-100">{companyInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-200 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">WhatsApp & Telepon:</span>
                    <span className="text-teal-100">{companyInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-rose-200 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Email:</span>
                    <span className="text-teal-100">{companyInfo.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-200 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Jam Layanan:</span>
                    <span className="text-teal-100">Senin - Jumat: 08:00 - 17:00 WIB</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-teal-500/60 text-xs text-teal-100 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>NIB: {companyInfo.legality.nib} • Terdaftar PSE Kominfo</span>
              </div>
            </div>

            {/* Quick WhatsApp Box with Kula */}
            <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img src={stickerHai} alt="Kula WA" className="w-11 h-11 object-contain shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                    Respon Cepat via WhatsApp
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5 font-normal">
                    Tanyakan langsung ke konsultan kami.
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Halo%20Zikola,%20saya%20mau%20konsultasi%20mengenai%20platform%20asesmen.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shrink-0 transition-transform hover:scale-105"
              >
                Chat Sekarang
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-950/80 p-2 mx-auto flex items-center justify-center">
                  <img src={stickerTerimakasih} alt="Kula Terimakasih" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Pesan Terkirim dengan Baik
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed font-normal">
                  Terima kasih banyak! Tim Zikola sedang membuka pesan Anda dan akan menghubungi nomor WhatsApp Anda.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', organization: '', role: '', phone: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Formulir Konsultasi
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-normal">
                    Isi data singkat di bawah ini, tim kami akan segera menghubungi Anda.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Sebagai Apa?
                    </label>
                    <input
                      type="text"
                      name="role"
                      placeholder="Contoh: Orang Tua / Guru / Dokter / Psikolog"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Nama Sekolah / Instansi (Opsional)
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Contoh: TK Ceria / Pribadi"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Contoh: 08123456789"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Pesan / Kebutuhan Tambahan
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tuliskan pertanyaan atau kebutuhan mengenai asesmen Zikola..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan & Hubungkan ke WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
