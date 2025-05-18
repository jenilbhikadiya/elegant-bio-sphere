import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
import { personalInfo, emailjsConfig } from '@/config/personalInfo';

// ✅ Initialize EmailJS ONCE globally (outside component)
emailjs.init(emailjsConfig.publicKey);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      );
      
      toast({
        title: "Message sent!",
        description: "Your message has been sent successfully.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-title animate-fade-in">Contact</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out if you want to connect with me. I'm always open to discussing new opportunities, projects, or just having a chat.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href={`tel:${personalInfo.phone}`} className="text-foreground hover:text-primary transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6 hover:shadow-xl transition-shadow duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="How can I help you?"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors w-full transform hover:scale-105 transition-transform duration-300"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
              <Send size={16} className={isLoading ? 'animate-pulse' : ''} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
