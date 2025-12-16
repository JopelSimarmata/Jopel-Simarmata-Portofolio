import { Calendar, Award, Code, Briefcase, BookOpen, Wrench, FileText } from 'lucide-react';

interface HoverDetailPopupProps {
  item: any;
  type: 'project' | 'certificate' | 'techstack';
  isPopup?: boolean;
}

export function HoverDetailPopup({ item, type, isPopup = false }: HoverDetailPopupProps) {
  const getDetailContent = () => {
    if (type === 'project') {
      return {
        icon: <Code className="w-5 h-5 text-cyan-400" />,
        description: item.description,
        sections: [
          {
            icon: <Wrench className="w-4 h-4 text-cyan-400" />,
            label: 'Technologies',
            value: item.technologies || 'Laravel, PHP, MySQL, HTML, CSS, JavaScript'
          },
          {
            icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
            label: 'Project Type',
            value: item.projectType || 'Web Application Development'
          },
          {
            icon: <Calendar className="w-4 h-4 text-cyan-400" />,
            label: 'Duration',
            value: item.duration || '3-4 months'
          },
          {
            icon: <BookOpen className="w-4 h-4 text-cyan-400" />,
            label: 'Key Features',
            value: item.features || 'Authentication, CRUD operations, Database integration, Responsive design'
          }
        ]
      };
    } else if (type === 'certificate') {
      return {
        icon: <Award className="w-5 h-5 text-cyan-400" />,
        description: item.description,
        sections: [
          {
            icon: <Award className="w-4 h-4 text-cyan-400" />,
            label: 'Issuing Organization',
            value: item.organization || 'Official Certification Body'
          },
          {
            icon: <Calendar className="w-4 h-4 text-cyan-400" />,
            label: 'Date Obtained',
            value: item.date || '2024 - 2025'
          },
          {
            icon: <BookOpen className="w-4 h-4 text-cyan-400" />,
            label: 'Skills Gained',
            value: item.skills || 'Cloud Computing, Network Infrastructure, System Administration'
          },
          {
            icon: <Code className="w-4 h-4 text-cyan-400" />,
            label: 'Certification Level',
            value: item.level || 'National Level / Fundamentals'
          }
        ]
      };
    } else {
      return {
        icon: <Wrench className="w-5 h-5 text-cyan-400" />,
        description: item.description,
        sections: [
          {
            icon: <Code className="w-4 h-4 text-cyan-400" />,
            label: 'Technologies',
            value: item.description
          },
          {
            icon: <Briefcase className="w-4 h-4 text-cyan-400" />,
            label: 'Experience Level',
            value: item.experience || 'Intermediate to Advanced'
          },
          {
            icon: <BookOpen className="w-4 h-4 text-cyan-400" />,
            label: 'Projects Applied',
            value: item.projectsApplied || 'Multiple academic and personal projects'
          },
          {
            icon: <Award className="w-4 h-4 text-cyan-400" />,
            label: 'Proficiency',
            value: item.proficiency || 'Production-ready applications'
          }
        ]
      };
    }
  };

  const details = getDetailContent();

  if (isPopup) {
    return (
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-500/20">
          {details.icon}
          <h4 className="text-lg text-white font-[Inter]">
            Quick Details
          </h4>
        </div>

        {/* Description Section */}
        <div className="mb-4 pb-4 border-b border-cyan-500/10">
          <div className="flex items-start gap-2 mb-2">
            <FileText className="w-4 h-4 text-cyan-400 mt-0.5" />
            <span className="text-xs text-cyan-400 uppercase tracking-wider font-[Inter]">
              Description
            </span>
          </div>
          <p className="text-sm text-gray-300 font-[Inter] leading-relaxed pl-6">
            {details.description}
          </p>
        </div>

        {/* Details List */}
        <div className="space-y-3">
          {details.sections.map((section, index) => (
            <div key={index} className="group/item">
              <div className="flex items-start gap-2 mb-1">
                {section.icon}
                <span className="text-xs text-cyan-400 uppercase tracking-wider font-[Inter]">
                  {section.label}
                </span>
              </div>
              <p className="text-sm text-gray-300 font-[Inter] leading-relaxed pl-6">
                {section.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col z-10 overflow-y-auto">{/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cyan-500/20">
        {details.icon}
        <h4 className="text-lg text-white font-[Inter]">
          Quick Details
        </h4>
      </div>

      {/* Description Section */}
      <div className="mb-4 pb-4 border-b border-cyan-500/10">
        <div className="flex items-start gap-2 mb-2">
          <FileText className="w-4 h-4 text-cyan-400 mt-0.5" />
          <span className="text-xs text-cyan-400 uppercase tracking-wider font-[Inter]">
            Description
          </span>
        </div>
        <p className="text-sm text-gray-300 font-[Inter] leading-relaxed pl-6">
          {details.description}
        </p>
      </div>

      {/* Details List */}
      <div className="space-y-3">
        {details.sections.map((section, index) => (
          <div key={index} className="group/item">
            <div className="flex items-start gap-2 mb-1">
              {section.icon}
              <span className="text-xs text-cyan-400 uppercase tracking-wider font-[Inter]">
                {section.label}
              </span>
            </div>
            <p className="text-sm text-gray-300 font-[Inter] leading-relaxed pl-6">
              {section.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}