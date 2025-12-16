import { useState } from 'react';
import { ExternalLink, Code2, Award, Layers, Github, X } from 'lucide-react';
import { HoverDetailPopup } from './HoverDetailPopup';
import huaweiImg from '../assets/huawei.png';
import microsoftImg from '../assets/microsoft.jpeg';
import domainsId from '../assets/domainid.jpeg';
import cyberimg from '../assets/cyber.jpeg';
import ladangquImg from '../assets/ladangqu.png';
import crudmahasiswaImg from '../assets/mahasiswacrud.png';
import pokemonImg from '../assets/pokemon.png';


export function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('projects');
  const [openPopupIndex, setOpenPopupIndex] = useState<number | null>(null);
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Agricultural Marketplace & Forum',
      description: 'Web-based marketplace using Laravel enabling farmers to sell products with online transaction via Midtrans escrow system, forum feature, and authentication.',
      image: ladangquImg,
      demoLink: 'http://103.235.75.33/',
      githubLink: 'https://github.com/JopelSimarmata/Website_Pertanian'
    },
    {
      title: 'CRUD Campus Web Application',
      description: 'Web application for CRUD operations on campus data (students, lecturers, courses) using HTML, CSS, JavaScript, and MySQL database.',
      image: crudmahasiswaImg,
      githubLink: 'https://github.com/JopelSimarmata/CRUD-Campus.git'
    },
    {
      title: 'Academic Simulator',
      description: 'Java-based desktop application simulating academic system with student data and grade management using MySQL database.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      githubLink: 'https://github.com/JopelSimarmata/Academic-Simulator.git'
    },
    {
      title: 'Student Dormitory Management System',
      description: 'Web-based application to manage dormitory resident data, facilities, and activity schedules using PHP and MySQL.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop',
      githubLink: 'https://github.com/JopelSimarmata/Dormitory-Management-System.git'
    }
  ];

  const certificates = [
    {
      title: 'Huawei ICT Competition National Level',
      description: 'Selected as campus representative for Huawei ICT Competition national level in Cloud category, 2025.',
      image: huaweiImg,
      detailsLink: '#'
    },
    {
      title: 'Azure AI Fundamentals - Microsoft',
      description: 'Microsoft certification covering Azure AI, Machine Learning Fundamentals, AI Ethics, and Data Science Basics.',
      image: microsoftImg,
      detailsLink: '#'
    },
    {
      title: 'Workshop: Digital Platform with .id Domain',
      description: 'Training on web development, domain management (.id), and system deployment by Media Cloud Indonesia.',
      image: domainsId,
      detailsLink: '#'
    },
    {
      title: 'Cyber Security Club Membership Certificate',
      description: 'Active member of Cyber Security Club, participating in workshops and competitions on ethical hacking and network security.',
      image: cyberimg,
      detailsLink: '#'
    }
  ];

  const techStack = [
    {
      title: 'Backend Development',
      description: 'Laravel, PHP, Java, Python, C#, C, API Development, Authentication, Database Design',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop',
      detailsLink: '#'
    },
    {
      title: 'Frontend & Mobile',
      description: 'HTML, CSS, JavaScript, Flutter, Android Studio, Cross-platform Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      detailsLink: '#'
    },
    {
      title: 'Database & Tools',
      description: 'MySQL, SQL Server, MongoDB, OpenCV, Jupyter Notebook, Data Structures & Algorithms',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
      detailsLink: '#'
    }
  ];

  const tabs = [
    { id: 'projects', label: 'Projects', icon: <Code2 className="w-5 h-5" /> },
    { id: 'certificates', label: 'Certificates', icon: <Award className="w-5 h-5" /> },
    { id: 'techstack', label: 'Tech Stack', icon: <Layers className="w-5 h-5" /> }
  ];

  const getContent = () => {
    if (activeTab === 'projects') return projects;
    if (activeTab === 'certificates') return certificates;
    return techStack;
  };

  const content = getContent();

  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-[Inter] font-bold">
              Portfolio Showcase
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto font-[Inter]">
            Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.icon}
              <span className="font-[Inter]">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all flex flex-col relative"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setOpenImageIndex(index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />
                
                {/* Click Detail Popup */}
                {openPopupIndex === index && (
                  <>
                    {/* Backdrop overlay */}
                    <div 
                      className="fixed inset-0 bg-black/50 z-40"
                      onClick={() => setOpenPopupIndex(null)}
                    />
                    {/* Popup */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                      <div 
                        className="bg-slate-900 border border-cyan-500/30 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <HoverDetailPopup 
                          item={item} 
                          type={activeTab === 'projects' ? 'project' : activeTab === 'certificates' ? 'certificate' : 'techstack'} 
                          isPopup={true}
                        />
                        <button
                          onClick={() => setOpenPopupIndex(null)}
                          className="mt-4 w-full px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-all text-cyan-400 font-[Inter]"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 
                  onClick={() => setOpenPopupIndex(index)}
                  className="text-xl text-white mb-2 font-[Inter] cursor-pointer hover:text-cyan-400 transition-colors"
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-[Inter] flex-grow">
                  {item.description}
                </p>

                {activeTab === 'projects' && (
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {item.title === 'Agricultural Marketplace & Forum' ? (
                      <>
                        <a
                          href={item.demoLink}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-all text-cyan-400 text-sm font-[Inter]"
                        >
                          Live Demo
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href={item.githubLink}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-gray-300 text-sm font-[Inter]"
                        >
                          GitHub
                          <Github className="w-4 h-4" />
                        </a>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <a
                          href={item.githubLink}
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-gray-300 text-sm font-[Inter]"
                        >
                          Open GitHub
                          <Github className="w-4 h-4" />
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Image Lightbox Modal */}
      {openImageIndex !== null && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setOpenImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenImageIndex(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Large Image */}
            <div className="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={content[openImageIndex].image.replace('w=600&h=400', 'w=1200&h=800')}
                alt={content[openImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {/* Image Title */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-cyan-500/30">
              <p className="text-white font-[Inter] text-center">
                {content[openImageIndex].title}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}