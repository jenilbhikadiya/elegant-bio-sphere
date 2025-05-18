
// This is a configuration file that contains all your personal information
// Replace these values with your own information

// Type definitions
export type SocialMediaType = {
  name: string;
  url: string;
  icon: string;
  bgColor: string;
};

export type PersonalInfoType = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  socialMedia: SocialMediaType[];
};

// Personal information
export const personalInfo: PersonalInfoType = {
  name: "Jenil Bhikadiya",
  title: "Computer Engineer",
  email: "22amtics005@gmail.com",
  phone: "+91 8238425832",
  location: "Surat, Gujarat, India",
  socialMedia: [
    {
      name: "Facebook",
      url: "https://facebook.com/yourprofile",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>',
      bgColor: "bg-[#1877F2]"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourprofile",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>',
      bgColor: "bg-[#1DA1F2]"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>',
      bgColor: "bg-[#0A66C2]"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourprofile",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
      bgColor: "bg-[#E4405F]"
    },
  ]
};

// Create a socialLinks object for easy access to social media URLs
export const socialLinks = {
  facebook: personalInfo.socialMedia.find(item => item.name === "Facebook")?.url || "#",
  twitter: personalInfo.socialMedia.find(item => item.name === "Twitter")?.url || "#",
  linkedin: personalInfo.socialMedia.find(item => item.name === "LinkedIn")?.url || "#",
  instagram: personalInfo.socialMedia.find(item => item.name === "Instagram")?.url || "#",
};

// EmailJS configuration - Replace with your own credentials
export const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  templateId: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  publicKey: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
};

// NOTE: You need to sign up for EmailJS and replace these values with your own credentials
// 1. Go to https://www.emailjs.com/ and sign up for a free account
// 2. Create a new email service (Gmail, Outlook, etc.)
// 3. Create a new email template
// 4. Replace the values above with your own credentials
