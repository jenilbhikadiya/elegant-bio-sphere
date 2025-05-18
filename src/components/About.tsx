
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '@/config/personalInfo';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title animate-fade-in">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg animate-fade-in [animation-delay:200ms]">
            I am a tech lover who enjoys building apps and learning about new technologies. I started my journey in software development because I was curious about how things work behind the scenes. Over time, I learned to make mobile apps, explore blockchain, and even try out artificial intelligence. I enjoy turning ideas into real, working solutions that help people.
          </p>
          <p className="text-lg animate-fade-in [animation-delay:400ms]">
            When I work on a project, I focus on solving problems and always try to learn something new. I like working in teams, sharing ideas, and listening to feedback to get better. I believe in writing clean and easy-to-read code, and I always try to make my apps user-friendly and useful.
          </p>
          <p className="text-lg animate-fade-in [animation-delay:600ms]">
            My goal is to work on interesting projects that make a positive difference. I want to keep growing as a developer and join teams where I can learn, share, and create something meaningful. Outside of coding, I like reading about new tech trends and trying out new tools in my free time.
          </p>
        </div>
        
        <div className="card p-6 space-y-4 animate-fade-in [animation-delay:800ms] hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          <h3 className="text-xl font-medium">Personal Details</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
              <User size={18} className="text-primary" />
              <span>{personalInfo.name}</span>
            </div>
            <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
              <Mail size={18} className="text-primary" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">{personalInfo.email}</a>
            </div>
            <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
              <Phone size={18} className="text-primary" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">{personalInfo.phone}</a>
            </div>
            <div className="flex items-center gap-3 hover:translate-x-2 transition-all duration-300">
              <MapPin size={18} className="text-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
          
          <div className="pt-4">
            <h3 className="text-xl font-medium mb-3">Connect</h3>
            <div className="flex gap-4">
              {personalInfo.socialMedia.map((social, index) => (
                <HoverCard key={social.name}>
                  <HoverCardTrigger asChild>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-full ${social.bgColor} flex items-center justify-center text-white transform transition-transform duration-300 hover:scale-110 hover:rotate-6`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div dangerouslySetInnerHTML={{ __html: social.icon }}/>
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="p-2 text-sm font-medium">
                    {social.name}
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
