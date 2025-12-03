"use client";
import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  quote: string;
  image: string;
  portfolio: string;
  portfolioTarget?: string;
}

interface Service {
  title: string;
  description: string;
  details: string;
}

const team: TeamMember[] = [
  {
    name: "Collins Kipkirui Lagat",
    role: "Co-founder",
    description: "Collins is the driving force and leader of Thee Entity. A visionary idealist with a strong background in backend development and DevOps, he brings both technical expertise and strategic leadership to the team. As a co-founder, he is passionate about creating practical, scalable solutions that bridge the gap between technology and real business needs, empowering enterprises to become globally competitive.",
    quote: "I believe that innovation should be accessible to everyone, not just large enterprises. Our mission at Thee Entity is to level the playing field.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Collins.jpeg",
    portfolio: "#"
  },
  {
    name: "Fatime Hashim Machira",
    role: "Co-Founder",
    description: "As a frontend developer and UI/UX designer, Fatime is the creative force behind Thee Entity's user interfaces, ensuring they are not only beautiful but also intuitive and user-friendly. With her added passion for cybersecurity, she helps architect systems that are both engaging and secure. Her vision is to create digital experiences that don't just work, but delight and protect the users who depend on them.",
    quote: "I believe in building technology that is both beautiful and secure. We are not just solving problems — we are designing trustworthy digital experiences.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Fatime.jpg",
    portfolio: "#"
  },
  {
    name: "Brian Kareithi",
    role: "Co-Founder",
    description: "Brian combines his expertise in cybersecurity and backend engineering with a strategic mindset, ensuring that Thee Entity's solutions are not only secure but also market-ready. His deep understanding of digital threats helps build systems that are both safe and resilient. As a communicator, he bridges the gap between our technology and the businesses we serve, helping organizations understand how AI and automation can transform their operations.",
    quote: "In a digital-first world, trust is everything. My goal is to make Thee Entity a brand that businesses can rely on for both security and growth.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/kareithi.jpg",
    portfolio: "https://kareithi.vercel.app",
    portfolioTarget: "_blank"
  },
  {
    name: "Zeituna Hussein Kura",
    role: "Marketing & Social Media Manager",
    description: "Zeituna leads the charge in telling Thee Entity's story to the world. As the manager of marketing and all social media platforms, she crafts compelling narratives that connect with our audience and showcase the transformative power of our solutions. Her strategic approach ensures that our message reaches the right people, building a strong community around our brand.",
    quote: "Great technology deserves a great story. My mission is to share how Thee Entity is changing the game, one business at a time.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/Zeituna.jpg",
    portfolio: "#"
  }
];

const services: Service[] = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    details: "We build scalable, robust applications using modern technologies and best practices to drive your business forward."
  },
  {
    title: "AI Agents Development",
    description: "Intelligent automation for enhanced productivity",
    details: "Create smart AI assistants that automate repetitive tasks, provide insights, and enhance customer experiences."
  },
  {
    title: "Infrastructure Security",
    description: "Protecting your digital assets 24/7",
    details: "Comprehensive security solutions including threat monitoring, vulnerability assessment, and infrastructure hardening."
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile solutions",
    details: "Engaging mobile experiences for iOS and Android that connect you with your customers anywhere, anytime."
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock system monitoring and maintenance",
    details: "Proactive monitoring, rapid response to outages, and continuous optimization to keep your systems running smoothly."
  }
];

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetService = () => {
    setSelectedService(null);
    setTimeout(scrollToContact, 300);
  };

  return (
    <section id="about" className="min-h-screen w-full py-20 px-4 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Intelligent Solutions, <span className="text-blue-300">Human-Centered</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We combine technical excellence with strategic insight to deliver AI solutions that drive real business transformation.
          </p>
        </div>

        {/* Mission & Vision Tabs - Refined */}
        <div className="backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 mb-12 bg-gradient-to-b from-white/5 to-transparent">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/30' 
                    : 'text-gray-300 hover:text-white hover:bg-blue-900/30 border border-blue-500/20'
                }`}
              >
                {tab === 'mission' && 'Our Mission'}
                {tab === 'vision' && 'Our Vision'}
                {tab === 'values' && 'Our Values'}
              </button>
            ))}
          </div>

          <div className="min-h-[100px] flex items-center justify-center">
            {activeTab === 'mission' && (
              <p className="text-white text-lg text-center leading-relaxed max-w-2xl">
                To deliver <span className="text-blue-300 font-semibold">intelligent, scalable technology solutions</span> that empower businesses to achieve operational excellence and sustainable growth.
              </p>
            )}
            
            {activeTab === 'vision' && (
              <p className="text-white text-lg text-center leading-relaxed max-w-2xl">
                To become the <span className="text-blue-300 font-semibold">preferred partner</span> for organizations seeking to transform through AI, known for our technical depth and strategic impact.
              </p>
            )}
            
            {activeTab === 'values' && (
              <div className="text-center">
                <p className="text-white text-lg mb-4 leading-relaxed">
                  <span className="text-blue-300">Excellence</span> • <span className="text-blue-400">Integrity</span> • <span className="text-blue-300">Innovation</span> • <span className="text-blue-400">Impact</span>
                </p>
                <p className="text-gray-400 text-sm max-w-xl mx-auto">
                  We maintain the highest standards, build trusted relationships, push technological boundaries, and measure success by client outcomes.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Services Section - Elegant */}
        <div className="backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 mb-12 bg-gradient-to-b from-white/5 to-transparent">
          <h3 className="text-3xl font-bold text-white mb-2 text-center">Strategic Capabilities</h3>
          <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto">
            Comprehensive solutions designed for the modern enterprise
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:bg-blue-900/10 cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h4>
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                  Explore Service
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section - Sophisticated */}
        <div className="backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 bg-gradient-to-b from-white/5 to-transparent">
          <h3 className="text-3xl font-bold text-white mb-2 text-center">Leadership Team</h3>
          <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto">
            Seasoned professionals with deep expertise in technology and strategy
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative mb-4 mx-auto w-20 h-20 rounded-xl overflow-hidden border border-blue-500/30 group-hover:border-blue-500 transition-all duration-300">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-white font-medium text-sm mb-1">{member.name.split(' ')[0]}</h4>
                <p className="text-blue-400 text-xs font-medium">{member.role.split('|')[0].trim()}</p>
                <div className="mt-2 text-blue-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  View Profile
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="border border-blue-500/30 rounded-2xl p-6 backdrop-blur-lg bg-gray-900/90 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <Image 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-xl object-cover border border-blue-500/50"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-blue-400 font-medium">{selectedMember.role}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedMember(null)}
                className="text-gray-400 hover:text-white text-xl transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider text-gray-400">Background</h4>
                <p className="text-gray-300 leading-relaxed">{selectedMember.description}</p>
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider text-gray-400">Philosophy</h4>
                <p className="text-gray-300 italic">&ldquo;{selectedMember.quote}&rdquo;</p>
              </div>
              
              <div className="flex gap-3 pt-6">
                <a 
                  href={selectedMember.portfolio.startsWith('http') ? selectedMember.portfolio : `https://${selectedMember.portfolio}`}
                  target={selectedMember.portfolioTarget || '_self'}
                  className="bg-blue-900 text-white px-4 py-2.5 rounded-xl font-medium hover:bg-blue-800 transition-all duration-300 flex-1 text-center"
                >
                  View Portfolio
                </a>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="bg-gray-800 text-gray-300 px-4 py-2.5 rounded-xl font-medium hover:bg-gray-700 hover:text-white transition-all duration-300 flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="border border-blue-500/30 rounded-2xl p-6 backdrop-blur-lg bg-gray-900/90 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{selectedService.title}</h3>
                <p className="text-gray-400">{selectedService.description}</p>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white text-xl transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider text-gray-400">Service Overview</h4>
                <p className="text-gray-300 leading-relaxed">{selectedService.details}</p>
              </div>
              
              <div className="flex gap-3 pt-6">
                <button 
                  onClick={handleGetService}
                  className="bg-blue-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-800 transition-all duration-300 flex-1"
                >
                  Implement Solution
                </button>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="bg-gray-800 text-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-700 hover:text-white transition-all duration-300 flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;