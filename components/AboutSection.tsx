"use client";

import { Code, Database, Server, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React.js, Next.js, TypeScript"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development", 
      description: "Node.js, Express.js, RESTful APIs"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description: "MongoDB, Mongoose, SQL"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Mobile-first, Cross-browser"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            من أنا؟
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="scroll-animate">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              مطور MERN Stack متخصص
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              أنا يوسف الدسوقي، مطور ويب متخصص في تقنيات MERN Stack مع شغف كبير لبناء 
              تطبيقات ويب حديثة وتفاعلية. أتمتع بخبرة واسعة في تطوير الواجهات الأمامية 
              والخلفية، وأسعى دائماً لتطبيق أفضل الممارسات والتقنيات الحديثة.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              أؤمن بأن التقنية يجب أن تخدم الإنسان، لذلك أركز على بناء حلول برمجية 
              تجمع بين الأداء العالي وتجربة المستخدم المتميزة. أحب التحديات التقنية 
              وأسعى دائماً لتعلم التقنيات الجديدة ومواكبة التطورات في عالم البرمجة.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 glow-text">2+</div>
                <div className="text-gray-400">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 glow-text">15+</div>
                <div className="text-gray-400">مشروع مكتمل</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 scroll-animate">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="gradient-border group hover:scale-105 transition-all duration-300"
              >
                <div className="gradient-border-content text-center">
                  <div className="text-blue-400 mb-4 flex justify-center group-hover:text-purple-400 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2 font-inter">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;