
import { School } from 'lucide-react';

// Sample education data - replace with your own
const educationItems = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    period: "2014 - 2016",
    description: "Include details about your course of study, notable achievements, research projects, or thesis work. You can also mention any relevant extracurricular activities or leadership roles."
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    period: "2010 - 2014",
    description: "Describe your undergraduate studies, key courses, projects, and any honors or distinctions you received. You might also mention relevant activities, clubs, or volunteer work during this time."
  },
  {
    id: 3,
    degree: "Relevant Certifications",
    institution: "Various Institutions",
    location: "",
    period: "Ongoing",
    description: "List relevant professional certifications, online courses, or continuing education that demonstrates your commitment to ongoing learning in your field."
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationItems.map((edu) => (
          <div key={edu.id} className="card p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <School size={20} className="text-primary" />
              <h3 className="text-xl font-bold">{edu.degree}</h3>
            </div>
            
            <div className="text-muted-foreground mb-4">
              <div className="font-medium">{edu.institution} {edu.location && `· ${edu.location}`}</div>
              <div className="text-sm">{edu.period}</div>
            </div>
            
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
