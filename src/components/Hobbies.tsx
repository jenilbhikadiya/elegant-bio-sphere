
// Sample hobbies data - replace with your own
const hobbies = [
  {
    id: 1,
    title: "Photography",
    icon: "📸",
    description: "Passionate about capturing moments and exploring visual storytelling through my camera lens. I enjoy landscape and street photography in particular."
  },
  {
    id: 2,
    title: "Hiking",
    icon: "🏔️",
    description: "Love exploring nature trails and mountains. I try to go on a hiking trip at least once a month to disconnect and recharge."
  },
  {
    id: 3,
    title: "Reading",
    icon: "📚",
    description: "Avid reader with interests in science fiction, technology trends, and personal development. I aim to read at least one book per month."
  },
  {
    id: 4,
    title: "Cooking",
    icon: "🍳",
    description: "Enjoy experimenting with new recipes and cuisines. I find cooking to be both creative and relaxing after a day of coding."
  },
  {
    id: 5,
    title: "Playing Guitar",
    icon: "🎸",
    description: "Self-taught guitarist who enjoys playing acoustic covers and composing music during free time. Music provides a creative outlet away from technology."
  },
  {
    id: 6,
    title: "Traveling",
    icon: "✈️",
    description: "Passionate about exploring new cultures, cuisines, and landscapes. I try to visit at least two new countries every year."
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
