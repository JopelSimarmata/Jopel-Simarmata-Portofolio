import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const academicExperience = [
    {
      title: 'Student Teaching Assistant - Visual Programming',
      institution: 'Del Institute of Technology',
      period: 'Aug 2024 - Dec 2024',
      description: 'Mentored students in visual programming concepts, provided hands-on guidance, demonstrated visual development tools, and organized class sessions.'
    },
    {
      title: 'Student Teaching Assistant - Procedural Programming',
      institution: 'Del Institute of Technology',
      period: 'Jan 2025 - Present',
      description: 'Assisted students in C language fundamentals including control flow, memory management, debugging, and facilitated practical sessions.'
    },
    {
      title: 'Assistant of Matriculation',
      institution: 'Del Institute of Technology',
      period: 'Aug 2024',
      description: 'Helped new students adapt to academic environment, provided guidance on academic procedures and system usage, served as liaison with teaching staff.'
    }
  ];

  const organizationalExperience = [
    {
      title: 'Member - Del Cyber Security Club',
      organization: 'Del Institute of Technology',
      period: 'Aug 2023 - Present',
      description: 'Participated in training sessions on network security, data encryption, security protocols, and ethical hacking techniques.'
    },
    {
      title: 'Member - HMSI (Information Systems Student Association)',
      organization: 'Del Institute of Technology',
      period: 'Aug 2019 - Present',
      description: 'Participated in academic and social activities, assisted in organizing seminars and workshops on current technologies.'
    },
    {
      title: 'Member - KPU BEM Multimedia & Documentation Division',
      organization: 'Del Institute of Technology',
      period: 'Sep 2025 - Present',
      description: 'Created visual content, documented election events, produced publication materials, managed social media for BEM Election activities.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
              My Experience
            </span>
          </h2>
          <p className="text-gray-400 flex items-center justify-center gap-2 font-[Inter]">
            <span className="text-cyan-400"></span>
            Academic achievements and organizational involvement
            <span className="text-cyan-400"></span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Academic Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl text-white">Academic Experience</h3>
            </div>
            
            <div className="space-y-6">
              {academicExperience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-xl text-white mb-1">{exp.title}</h4>
                  <p className="text-cyan-400 mb-2">{exp.institution}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-300 font-[Inter] text-[14px]">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Organizational Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl text-white">Organizational Experience</h3>
            </div>
            
            <div className="space-y-6">
              {organizationalExperience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-xl text-white mb-1">{exp.title}</h4>
                  <p className="text-pink-400 mb-2">{exp.organization}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-300 font-[Inter] text-[14px]">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}