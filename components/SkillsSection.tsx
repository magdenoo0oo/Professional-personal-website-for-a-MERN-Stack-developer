"use client";

import { useState } from 'react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "MongoDB",
      level: 90,
      category: "Database",
      color: "from-green-500 to-green-600",
      description: "قواعد بيانات NoSQL متقدمة"
    },
    {
      name: "Express.js",
      level: 85,
      category: "Backend",
      color: "from-gray-400 to-gray-600", 
      description: "إطار عمل Node.js سريع ومرن"
    },
    {
      name: "React.js",
      level: 95,
      category: "Frontend",
      color: "from-blue-500 to-blue-600",
      description: "مكتبة لبناء واجهات تفاعلية"
    },
    {
      name: "Node.js",
      level: 88,
      category: "Backend",
      color: "from-green-400 to-green-500",
      description: "بيئة تشغيل JavaScript للخادم"
    },
    {
      name: "Next.js",
      level: 82,
      category: "Framework",
      color: "from-purple-500 to-purple-600",
      description: "إطار React للإنتاج"
    },
    {
      name: "TypeScript",
      level: 80,
      category: "Language",
      color: "from-blue-600 to-blue-700",
      description: "JavaScript مع الأنواع الثابتة"
    },
    {
      name: "Tailwind CSS",
      level: 92,
      category: "Styling",
      color: "from-cyan-500 to-cyan-600",
      description: "إطار CSS للتصميم السريع"
    },
    {
      name: "Git & GitHub",
      level: 85,
      category: "Version Control",
      color: "from-orange-500 to-orange-600",
      description: "إدارة الإصدارات والتعاون"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            المهارات التقنية
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            مجموعة شاملة من التقنيات والأدوات التي أتقنها في تطوير تطبيقات الويب الحديثة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="relative group scroll-animate"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="gradient-border h-full hover:scale-105 transition-all duration-300">
                <div className="gradient-border-content h-full flex flex-col justify-between">
                  {/* Skill Header */}
                  <div className="text-center mb-4">
                    <h3 className="text-white font-bold text-xl mb-2 font-inter">
                      {skill.name}
                    </h3>
                    <span className="text-blue-400 text-sm px-3 py-1 rounded-full border border-blue-400/30">
                      {skill.category}
                    </span>
                  </div>

                  {/* Progress Circle */}
                  <div className="relative flex justify-center mb-4">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-gray-700"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                        className="transition-all duration-1000 ease-out"
                        style={{
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" className="text-blue-500" />
                          <stop offset="100%" className="text-purple-500" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm text-center">
                    {skill.description}
                  </p>

                  {/* Tooltip */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-10 border border-blue-500/30">
                      مستوى الخبرة: {skill.level}%
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 text-center scroll-animate">
          <div className="gradient-border inline-block">
            <div className="gradient-border-content">
              <h3 className="text-white font-bold text-xl mb-4">MERN Stack</h3>
              <div className="flex justify-center items-center space-x-4 text-2xl">
                <span className="text-green-400">N</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">R</span>
                <span className="text-gray-400">•</span>
                <span className="text-blue-400">E</span>
                <span className="text-gray-400">•</span>
                <span className="text-green-400">M</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                MongoDB • Express.js • React.js • Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;