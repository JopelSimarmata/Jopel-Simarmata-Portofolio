import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 flex items-center justify-center gap-2 font-[Inter]">
            <span className="text-cyan-400"></span>
            Let's collaborate and create something amazing together
            <span className="text-cyan-400"></span>
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
            <h3 className="text-2xl text-white mb-6">Mari Berkolaborasi!</h3>
            <p className="text-gray-400 mb-8">
              Saya terbuka untuk peluang baru, proyek freelance, atau sekadar berdiskusi tentang teknologi dan pengembangan web. Jangan ragu untuk menghubungi saya!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-200">rumahjopel@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-lg">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telepon</p>
                  <p className="text-gray-200">082361562064</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-pink-500/10 border border-pink-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lokasi</p>
                  <p className="text-gray-200">Balige, North Sumatra</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 border-t border-white/10 pt-8">
          <p>&copy; 2024 Jopel Simarmata. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}