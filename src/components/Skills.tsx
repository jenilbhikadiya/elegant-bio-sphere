import { useState } from 'react';

const skillCategories = [
  {
    id: 1,
    title: "Technical Skills",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "React", level: 85 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Node.js", level: 60 },
      { name: "HTML/CSS", level: 95 },
      { name: "SQL", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "SQLAlchemy", level: 70 },
      { name: "FastAPI", level: 60 },
    ]
  },
  {
    id: 2,
    title: "Professional Skills",
    skills: [
      { name: "Communication", level: 85 },
      { name: "Time Management", level: 75 },
      { name: "Project Management", level: 85 },
      { name: "Team Leadership", level: 80 },
      { name: "Problem Solving", level: 90 },
    ]
  },
  {
    id: 3,
    title: "Languages",
    skills: [
      { name: "English", level: 90 },
      { name: "Hindi", level: 95 },
      { name: "Gujarati", level: 100 },
    ]
  }
];

const SkillBar = ({ name, level, delay }) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="mb-3 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-800">{name}</span>
        <span className={`text-sm font-semibold ${hover ? 'text-blue-700' : 'text-gray-600'} transition-colors duration-300`}>
          {level}%
        </span>
      </div>
      <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            boxShadow: hover ? '0 0 8px rgba(59, 130, 246, 0.8)' : 'none'
          }}
        ></div>
        
        {/* Gradient overlay for more polish */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-30 rounded-full"
          style={{ 
            background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)'
          }}
        ></div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category, index }) => {
  const [expanded, setExpanded] = useState(true);
  
  // Define category icon based on title
  const getCategoryIcon = (title) => {
    switch(title) {
      case "Technical Skills": 
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "Professional Skills":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "Languages":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 animate-fade-in hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div 
        className="flex items-center justify-between mb-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          <div className="mr-3 text-blue-600">
            {getCategoryIcon(category.title)}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
        </div>
        <button className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {expanded && (
        <div className="grid grid-cols-1 gap-y-3 gap-x-4 mt-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={(index * 200) + (skillIndex * 100)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">A comprehensive overview of my technical expertise, professional abilities, and language proficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;