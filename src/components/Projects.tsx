import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce full-stack dengan fitur keranjang belanja, payment gateway, dan admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur drag-and-drop, kolaborasi tim, dan notifikasi real-time.',
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard cuaca interaktif dengan visualisasi data, forecast, dan integrasi dengan API weather.',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Dashboard analitik untuk media sosial dengan grafik interaktif dan laporan performa.',
      tech: ['React', 'Recharts', 'Firebase', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Blog Platform',
      description: 'Platform blog dengan CMS, markdown editor, dan fitur komentar.',
      tech: ['Next.js', 'MDX', 'PostgreSQL', 'Prisma'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Portfolio Generator',
      description: 'Tool untuk generate portfolio website dengan berbagai template dan customization.',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-gray-300 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 rounded-lg hover:from-cyan-500/30 hover:to-pink-500/30 transition-all text-cyan-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}