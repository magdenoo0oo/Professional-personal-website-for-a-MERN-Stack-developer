"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '#home', id: 'home' },
    { name: 'من أنا', href: '#about', id: 'about' },
    { name: 'المهارات', href: '#skills', id: 'skills' },
    { name: 'المشاريع', href: '#projects', id: 'projects' },
    { name: 'تواصل معي', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl shadow-blue-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white glow-text group-hover:text-blue-400 transition-colors duration-300">
                  يوسف الدسوقي
                </span>
                <span className="text-xs text-blue-400 font-inter opacity-80">
                  MERN Developer
                </span>
              </div>
            </div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800/50'
                  }`}
                >
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm"></div>
                  )}
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="relative group overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  ابدأ مشروعك
                </span>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="absolute inset-0 bg-slate-800/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isOpen ? (
                  <X className="h-6 w-6 relative z-10" />
                ) : (
                  <Menu className="h-6 w-6 relative z-10" />
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl">
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-right px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800/50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium transition-all duration-300"
                >
                  ابدأ مشروعك
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-40">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>
    </>
  );
};

export default Navbar;