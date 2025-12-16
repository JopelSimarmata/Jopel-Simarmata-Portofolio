import image_4406818d759b14b31dded226b6c39513d6b1a175 from 'figma:asset/4406818d759b14b31dded226b6c39513d6b1a175.png';
import { Code2, Award, Globe, Download, FolderOpen } from 'lucide-react';
import profileImage from 'figma:asset/a775598b6ab03de7d7c3de348b13bec2d93fb398.png';
import cvFile from '../assets/CV_Jopel Simarmata.pdf';
import transkripFile from '../assets/Transkrip Nilai_Jopel Simarmata.pdf';

export function About() {
  const stats = [
    {
      icon: <Code2 className="w-6 h-6" />,
      value: '3+',
      label: 'TOTAL PROJECTS',
      description: 'Innovative web solutions created'
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '3',
      label: 'CERTIFICATES',
      description: 'Professional skills validated'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: '3.78',
      label: 'CURRENT GPA',
      description: 'Academic excellence maintained'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-[Inter] font-bold">About Me</span>
          </h2>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span className="text-cyan-400"></span>
           Bringing ideas to life through thoughtful development.
            <span className="text-cyan-400"></span>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Side - Text */}
          <div>
            <div className="mb-6">
              <p className="text-cyan-400 text-lg mb-2 font-[Inter] font-bold">Hello, I'm</p>
              <h3 className="text-4xl md:text-5xl text-white mb-6 font-[Inter] font-bold">
                Jopel Simarmata
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 font-[Inter] text-[16px]">
              An Information Systems undergraduate with strong expertise in web development, specializing in Laravel and full-stack application development. Experienced in building end-to-end systems, including authentication, API integration, database design, and secure payment workflows using Midtrans with an escrow mechanism.
            </p>

            {/* Quote Box */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6 flex items-start gap-3">
              <p className="text-gray-300 italic">
              "Your mindset is the real programming language."
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={cvFile}
                download="CV_Jopel Simarmata.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/20 font-[Inter]"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all font-[Inter]"
              >
                <FolderOpen className="w-5 h-5" />
                View Projects
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30"></div>
              <img 
                src={image_4406818d759b14b31dded226b6c39513d6b1a175}
                alt="Eki Zulfar Rachman"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                  {stat.icon}
                </div>
                <div className="text-5xl text-white font-[Inter]">{stat.value}</div>
              </div>
              <h4 className="text-sm text-gray-400 mb-1 font-[Inter]">{stat.label}</h4>
              <p className="text-xs text-gray-500 font-[Inter] mb-4">{stat.description}</p>
              
              {stat.label === 'CURRENT GPA' && (
                <a 
                  href={transkripFile}
                  download="Transkrip Nilai_Jopel Simarmata.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all text-sm font-[Inter] mt-2"
                >
                  <Download className="w-4 h-4" />
                  Unduh Transkrip Nilai
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mt-12">
          <div className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400 font-[Inter]">Lokasi</span>
            <span className="text-white font-[Inter]">Balige, North Sumatra</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400 font-[Inter]">Status</span>
            <span className="text-green-400 font-[Inter]">Available for Projects</span>
          </div>
          <div className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400 font-[Inter]">Email</span>
            <span className="text-white font-[Inter]">rumahjopel@gmail.com</span>
          </div>
          <div className="flex justify-between pb-3">
            <span className="text-gray-400 font-[Inter]">University</span>
            <span className="text-white font-[Inter]">Del Institute of Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
}