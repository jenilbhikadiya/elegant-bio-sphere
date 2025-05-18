
// Sample hobbies data - replace with your own
const hobbies = [
  {
    id: 1,
    title: "Hiking",
    icon: "🥾",
    description: "I love exploring nature trails and mountains. Hiking helps me refresh my mind and find inspiration in the outdoors."
  },
  {
    id: 2,
    title: "UI/UX Designing",
    icon: "🎨",
    description: "I enjoy creating clean, user-friendly designs and exploring creative ways to improve digital experiences through UI/UX."
  },
  {
    id: 3,
    title: "Coding",
    icon: "💻",
    description: "Building apps and solving problems through code is both my passion and profession. I enjoy learning new technologies and frameworks."
  },
  {
    id: 4,
    title: "Gaming",
    icon: "🎮",
    description: "Gaming is my go-to for fun and relaxation. I enjoy both casual and strategy-based games that challenge my thinking."
  },
  {
    id: 5,
    title: "Traveling",
    icon: "🌍",
    description: "Exploring new places, cultures, and cuisines excites me. Traveling helps me gain new perspectives and ideas."
  },
  {
    id: 6,
    title: "Blog Writing",
    icon: "📝",
    description: "I like writing tech blogs and sharing my learning journey. It helps me reflect and contribute to the developer community."
  }
];


const Hobbies = () => {
  return (
    <section id="hobbies" className="section-container">
      <h2 className="section-title">Hobbies & Interests</h2>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbies.map(hobby => (
          <div key={hobby.id} className="card p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{hobby.icon}</div>
            <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
            <p className="text-muted-foreground">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
