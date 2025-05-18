
import { School } from 'lucide-react';

// Sample education data - replace with your own
const educationItems = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Uka Tarsadia University",
    location: "Gujarat, India",
    period: "2023 - 2026 (Ongoing)",
    description: "Focused on software development, building skills in web and mobile application development, programming, and emerging technologies like blockchain and AI. Participated in academic projects and contributed to tech-focused extracurricular activities."
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
