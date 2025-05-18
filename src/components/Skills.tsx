
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

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-gray-50">
      <h2 className="section-title">Skills</h2>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map(category => (
          <div key={category.id} className="card p-6">
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
