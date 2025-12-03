"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [greeting, setGreeting] = useState({ text: '', icon: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'contact', label: 'Contact' }
  ], []);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      let text = '';
      let icon = '';

      if (hour >= 5 && hour < 12) {
        text = 'Good Morning';
        icon = '☀️';
      } else if (hour >= 12 && hour < 17) {
        text = 'Good Afternoon';
        icon = '🌤️';
      } else {
        text = 'Good Evening';
        icon = '🌙';
      }

      setGreeting({ text, icon });
    };

    updateGreeting();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);

      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      
      const current = sectionElements.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        const currentIndex = sectionElements.indexOf(current);
        if (currentIndex !== -1) {
          setActiveSection(sections[currentIndex].id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Minimalist See-through Blur Navbar */}
      <nav className={`
        fixed z-50 
        transition-all duration-200
        ${isScrolled 
          ? 'w-full top-0 left-0 right-0 backdrop-blur-md' 
          : 'w-[95%] top-4 left-[2.5%] right-[2.5%] rounded-2xl backdrop-blur-sm'
        }
      `}>
        <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-3">
          {/* Logo + Brand Name + Greeting */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image 
                  src="https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/The%20Entity%20Icon.png" 
                  alt="Thee Entity Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                  priority
                />
              </div>
              <div className="text-white font-bold text-xl tracking-tight">
                Thee Entity
              </div>
            </div>
            
            {/* Separator and Greeting */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="h-6 w-px bg-white/20"></div>
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <span className="text-base">{greeting.icon}</span>
                <span className="font-medium">{greeting.text}</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`
                  px-6 py-2.5 rounded-xl font-medium transition-all duration-200 whitespace-nowrap
                  ${activeSection === section.id 
                    ? 'bg-blue-900 text-white font-bold' 
                    : 'text-white/70 hover:text-white hover:bg-blue-900/30'
                  }
                `}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col space-y-1 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 z-50
        transform transition-transform duration-200 ease-in-out
        backdrop-blur-md
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image 
                  src="https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/The%20Entity%20Icon.png" 
                  alt="Thee Entity Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="text-white font-bold text-lg">Thee Entity</div>
                <div className="flex items-center space-x-2 text-white/80 text-sm">
                  <span>{greeting.icon}</span>
                  <span className="font-medium">{greeting.text}</span>
                </div>
              </div>
            </div>
            <button 
              className="text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              ×
            </button>
          </div>

          {/* Mobile Navigation */}
          <ul className="flex-1 p-6 space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`
                    w-full text-left px-4 py-4 rounded-xl font-medium transition-all duration-200 text-lg
                    ${activeSection === section.id 
                      ? 'bg-blue-900 text-white font-bold' 
                      : 'text-white/70 hover:text-white hover:bg-blue-900/30'
                    }
                  `}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Footer */}
          <div className="p-6">
            <p className="text-white/50 text-sm text-center">
              Building the future, together
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}