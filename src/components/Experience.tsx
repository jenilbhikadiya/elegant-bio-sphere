
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample work experience data - replace with your own
const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Company",
    location: "City, Country",
    period: "January 2021 - Present",
    description: "Describe your responsibilities, achievements, and the technologies you worked with in this role. Include specific projects you contributed to and any measurable results or improvements you delivered.",
    current: true,
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Previous Company",
    location: "City, Country",
    period: "June 2018 - December 2020",
    description: "Outline your main responsibilities and achievements in this role. Highlight any significant projects, technologies used, and positive outcomes of your work.",
    current: false,
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "First Company",
    location: "City, Country",
    period: "August 2016 - May 2018",
    description: "Describe your entry-level responsibilities and how you grew in this role. Mention technologies you worked with and any notable contributions or learning experiences.",
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-gray-50">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="mt-10 relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
        
        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={cn(
              "flex flex-col md:flex-row gap-8 relative",
              index % 2 === 0 ? "md:text-right" : ""
            )}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2">
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 bg-white",
                  exp.current ? "border-primary" : "border-gray-300"
                )}></div>
              </div>
              
              {/* Content placement based on even/odd index */}
              <div className={cn(
                "md:w-1/2 card p-6",
                index % 2 === 0 ? "md:pr-16" : "md:ml-auto md:pl-16"
              )}>
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={18} className="text-primary" />
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                </div>
                
                <div className="text-muted-foreground mb-4">
                  <div className="font-medium">{exp.company} · {exp.location}</div>
                  <div className="text-sm">{exp.period}</div>
                </div>
                
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
