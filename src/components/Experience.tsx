
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

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
    role: "Back End Developer Intern",
    company: "Soomuch Smart Solution Pvt Ltd",
    location: "India · Remote",
    period: "January 2024 - May 2024",
    description: `Worked as a Back End Developer Intern where I gained hands-on experience with backend technologies. 
    My responsibilities included building APIs using FastAPI, integrating social media platforms, and managing databases with PostgreSQL. 
    I also worked with SQLAlchemy to handle ORM and improve data management. The internship enhanced my skills in Python and backend system design.`,
    current: false
  }
];

const Experience = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  const handleIntersection = (inView: boolean, id: number) => {
    if (inView && !animatedItems.includes(id)) {
      setAnimatedItems(prev => [...prev, id]);
    }
  };

  return (
    <section id="experience" className="section-container bg-gray-50">
      <h2 className="section-title animate-fade-in">Work Experience</h2>
      
      <div className="mt-10 relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
        
        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            useEffect(() => {
              if (inView) {
                handleIntersection(inView, exp.id);
              }
            }, [inView]);

            const isAnimated = animatedItems.includes(exp.id);
            const animationClass = isAnimated ? 
              (index % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in') : 
              'opacity-0';

            return (
              <div 
                ref={ref}
                key={exp.id} 
                className={cn(
                  "flex flex-col md:flex-row gap-8 relative",
                  index % 2 === 0 ? "md:text-right" : "",
                  animationClass
                )}
                style={{ 
                  animationDelay: `${index * 300}ms`,
                  transitionDuration: '0.6s' 
                }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2">
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 bg-white transition-all duration-500",
                    exp.current ? "border-primary" : "border-gray-300",
                    isAnimated ? "scale-100" : "scale-0"
                  )}></div>
                </div>
                
                {/* Content placement based on even/odd index */}
                <div className={cn(
                  "md:w-1/2 card p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
