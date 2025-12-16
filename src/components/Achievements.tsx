import { Award, Trophy } from 'lucide-react';

export function Achievements() {
  const competitions = [
    {
      title: 'Juara 1 - Web Development Competition',
      organizer: 'TechFest Indonesia',
      year: '2024',
      description: 'Memenangkan kompetisi web development dengan membuat aplikasi e-learning interaktif.'
    },
    {
      title: 'Juara 2 - Hackathon Nasional',
      organizer: 'Indonesia Tech Summit',
      year: '2023',
      description: 'Mengembangkan solusi smart city untuk meningkatkan efisiensi transportasi publik.'
    },
    {
      title: 'Finalis - UI/UX Design Competition',
      organizer: 'Digital Innovation Challenge',
      year: '2023',
      description: 'Menciptakan desain interface untuk aplikasi mobile banking yang user-friendly.'
    }
  ];

  const trainings = [
    {
      title: 'Full-Stack Web Development Bootcamp',
      provider: 'Dicoding Indonesia',
      year: '2023',
      credential: 'Certificate ID: ABC123XYZ'
    },
    {
      title: 'React Advanced Patterns',
      provider: 'Frontend Masters',
      year: '2023',
      credential: 'Certificate ID: REACT456'
    },
    {
      title: 'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      year: '2023',
      credential: 'Certificate ID: AWS789'
    },
    {
      title: 'Modern JavaScript & TypeScript',
      provider: 'Udemy',
      year: '2022',
      credential: 'Certificate ID: JS101'
    },
    {
      title: 'UI/UX Design Fundamentals',
      provider: 'Google UX Design',
      year: '2022',
      credential: 'Certificate ID: UX202'
    }
  ];

  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Competitions */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-8 h-8 text-amber-400" />
              <h3 className="text-2xl text-white">Competitions</h3>
            </div>
            
            <div className="space-y-6">
              {competitions.map((comp, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl text-white mb-1">{comp.title}</h4>
                      <p className="text-amber-400 mb-1">{comp.organizer}</p>
                      <p className="text-sm text-gray-400 mb-2">{comp.year}</p>
                      <p className="text-gray-300">{comp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training & Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl text-white">Training & Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {trainings.map((training, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg text-white mb-1">{training.title}</h4>
                      <p className="text-emerald-400 text-sm mb-1">{training.provider}</p>
                      <p className="text-xs text-gray-400 mb-1">{training.year}</p>
                      <p className="text-xs text-gray-500 italic">{training.credential}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}