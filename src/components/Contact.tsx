
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-title">Contact</h2>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out if you want to connect with me. I'm always open to discussing new opportunities, projects, or just having a chat.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:your-email@example.com" className="text-foreground hover:text-primary transition-colors">
                  your-email@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">
                  City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="How can I help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors w-full"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
