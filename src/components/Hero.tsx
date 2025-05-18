
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5">
          {/* Decorative background elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </div>
      
      <div className="container z-10 px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Jenil Bhikadiya</span>
          </h1>
          <p className="animate-fade-in [animation-delay:200ms] text-xl md:text-2xl text-muted-foreground">
            Computer Engineer · Surat, Gujarat, India
          </p>
          <p className="animate-fade-in [animation-delay:400ms] text-lg text-muted-foreground max-w-lg">
          Aspiring Software Engineer with a strong foundation in Computer Engineering, currently pursuing a B.Tech at Uka Tarsadia University (2023–2026). Experienced in backend development through a remote internship at Soomuch Smart Solution Pvt Ltd, where I worked with FastAPI, PostgreSQL, and SQLAlchemy. Proficient in Python and passionate about building scalable, user-friendly applications. Actively enhancing skills in Flutter, blockchain, and AI technologies, with a commitment to continuous learning and contributing to innovative tech solutions.          </p>
          <div className="animate-fade-in [animation-delay:600ms] pt-4">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Learn More
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="animate-fade-in [animation-delay:800ms] relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            {/* Replace with your actual profile image */}
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=600&h=600&q=80" 
              alt="Your Name" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          <span>Scroll Down</span>
          <ArrowDown className="mt-2 animate-bounce" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
