import { Github, Linkedin, Instagram, ExternalLink, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Available to Work</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-60"></div>
              <div className="relative text-white font-[Press_Start_2P] font-[Protest_Riot] text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">Full-Stack</div>
            </div>
            <br />
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-60"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-[Protest_Riot] drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]">
                Developer
              </div>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-6 font-[Inter]">
            Information Systems Student
          </p>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-xl font-[Inter]">
            Specializing in Laravel and full-stack application development with expertise in building end-to-end systems.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
              Laravel
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
              PHP
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
              Java
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
              Flutter
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
              MySQL
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-blue-500/30 rounded-lg text-white hover:bg-slate-800 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
            >
              Projects
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-blue-500/30 rounded-lg text-white hover:bg-slate-800 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
            >
              Contact
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/JopelSimarmata"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/%F0%9D%90%89%F0%9D%90%A8%F0%9D%90%A9%F0%9D%90%9E%F0%9D%90%A5-%F0%9D%90%92%F0%9D%90%A2%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%AD%F0%9D%90%9A-743397262"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://www.instagram.com/jopel_simarmata?igsh=MXF5cDlqd2N4bW9zbw=="
              className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all"
            >
              <Instagram className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}