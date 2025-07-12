"use client";

import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code, Zap, Play } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  const dynamicTexts = [
    "MERN Stack Developer",
    "Full Stack Engineer", 
    "React.js Specialist",
    "Node.js Expert"
  ];

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
        setIsTyping(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted]);

  const createFloatingElements = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="floating-element"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${8 + Math.random() * 4}s`
        }}
      />
    ));
  };

  const createCodeParticles = () => {
    const codeSymbols = ['{', '}', '<', '>', '/', '=', ';', '(', ')', '[', ']'];
    return Array.from({ length: 12 }, (_, i) => (
      <div
        key={i}
        className="code-particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${6 + Math.random() * 4}s`
        }}
      >
        {codeSymbols[Math.floor(Math.random() * codeSymbols.length)]}
      </div>
    ));
  };

  if (!mounted) {
    return (
      <section className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">جاري التحميل...</div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10" />
        <div className="absolute inset-0 animated-mesh opacity-20" />
      </div>
      
      {/* Floating Elements */}
      <div className="floating-elements opacity-30">
        {createFloatingElements().slice(0, 8)}
      </div>

      {/* Code Particles */}
      <div className="code-particles opacity-20">
        {createCodeParticles().slice(0, 6)}
      </div>

      {/* Enhanced Mouse Glow Effect */}
      <div 
        className="absolute w-[300px] h-[300px] opacity-10 pointer-events-none transition-all duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.15) 40%, transparent 70%)',
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          filter: 'blur(60px)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Enhanced Name */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="inline-block hover:scale-105 transition-transform duration-300 glow-text-strong">
              يوسف
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 inline-block hover:scale-105 transition-transform duration-300 mx-4">
              الدسوقي
            </span>
          </h1>
          
          {/* Dynamic Title with Typing Effect */}
          <div className="text-lg md:text-xl lg:text-2xl text-blue-400 mb-4 font-inter h-8 flex items-center justify-center">
            <span className={`transition-all duration-500 ${isTyping ? 'opacity-100' : 'opacity-50'}`}>
              {dynamicTexts[currentText]}
            </span>
            <span className="animate-pulse text-purple-400 ml-2">|</span>
          </div>
          
          {/* Enhanced Description */}
          <div className="space-y-3 mb-6">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              أحول الأفكار إلى تطبيقات ويب تفاعلية وحديثة باستخدام أحدث تقنيات 
              <span className="text-blue-400 font-semibold"> MERN Stack</span>
            </p>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
              متخصص في بناء حلول برمجية متكاملة تجمع بين الأداء العالي وتجربة المستخدم المتميزة
            </p>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {[
            { name: 'MongoDB', color: 'text-green-400', symbol: 'N' },
            { name: 'Express.js', color: 'text-gray-400', symbol: 'R' },
            { name: 'React.js', color: 'text-blue-400', symbol: 'E' },
            { name: 'Node.js', color: 'text-green-400', symbol: 'M' }
          ].map((tech, index) => (
            <div 
              key={tech.name}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm">
                <span className={`text-lg md:text-xl font-bold ${tech.color} group-hover:glow-text transition-all duration-300`}>
                  {tech.symbol}
                </span>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 min-w-[180px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Play className="h-4 w-4" />
              اطّلع على أعمالي
            </span>
          </button>
          
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-6 py-3 border-2 border-blue-500/50 rounded-lg text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 font-medium text-base hover:scale-105 backdrop-blur-sm min-w-[180px]"
          >
            <span className="flex items-center justify-center gap-2">
              <Zap className="h-4 w-4" />
              تواصل معي
            </span>
          </button>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center space-x-4 mb-12">
          {[
            { icon: Github, href: "#", color: "hover:text-gray-300", name: "GitHub" },
            { icon: Linkedin, href: "#", color: "hover:text-blue-400", name: "LinkedIn" },
            { icon: Mail, href: "mailto:youssef.eldesoky@gmail.com", color: "hover:text-red-400", name: "Email" }
          ].map((social, index) => (
            <a 
              key={social.name}
              href={social.href}
              className={`group relative p-2 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 transform`}
              title={social.name}
            >
              <div className="absolute inset-0 bg-slate-800/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
              <social.icon className="h-5 w-5 relative z-10" />
            </a>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-blue-400 text-xs font-medium">اكتشف المزيد</span>
            <div className="w-5 h-8 border-2 border-blue-400/50 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-blue-400 rounded-full mt-1 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-12 h-12 border border-blue-500/20 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 border border-purple-500/20 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-5 w-2 h-2 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;