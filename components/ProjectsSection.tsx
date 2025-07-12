"use client";

import { useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "متجر إلكتروني متكامل",
      description: "تطبيق تجارة إلكترونية متكامل مع نظام إدارة المنتجات، عربة التسوق، والدفع الآمن. يتضمن لوحة تحكم للإدارة ونظام متقدم لإدارة المخزون.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe", "JWT"],
      category: "Full Stack",
      features: [
        "نظام مصادقة متقدم",
        "إدارة المنتجات والفئات", 
        "عربة تسوق تفاعلية",
        "نظام دفع آمن",
        "لوحة تحكم للإدارة"
      ],
      github: "#",
      live: "#",
      status: "مكتمل"
    },
    {
      id: 2,
      title: "منصة إدارة المشاريع",
      description: "أداة متطورة لإدارة المشاريع والفرق مع ميزات التعاون الجماعي، تتبع المهام، والتقارير التفصيلية. واجهة سهلة الاستخدام ومتجاوبة بالكامل.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind"],
      category: "Web App",
      features: [
        "إدارة المشاريع والمهام",
        "تعاون فريق فوري",
        "تقارير وإحصائيات",
        "إشعارات مباشرة",
        "واجهة متجاوبة"
      ],
      github: "#",
      live: "#", 
      status: "قيد التطوير"
    },
    {
      id: 3,
      title: "تطبيق إدارة المحتوى",
      description: "نظام إدارة محتوى قوي ومرن مع محرر متقدم، إدارة المستخدمين، والنشر المجدول. يدعم أنواع محتوى متعددة ونظام أذونات متقدم.",
      image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Express.js", "AWS"],
      category: "CMS",
      features: [
        "محرر محتوى متقدم",
        "إدارة المستخدمين والأذونات",
        "نشر مجدول",
        "معاينة المحتوى",
        "نظام التعليقات"
      ],
      github: "#",
      live: "#",
      status: "مكتمل"
    },
    {
      id: 4,
      title: "موقع شركة تقنية",
      description: "موقع شركة حديث ومتجاوب مع تصميم أنيق وأداء محسّن. يتضمن صفحات تعريفية، معرض أعمال، ونموذج تواصل تفاعلي.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "Landing Page",
      features: [
        "تصميم متجاوب بالكامل",
        "أنيميشن وتفاعلات سلسة",
        "محسّن لمحركات البحث",
        "أداء عالي",
        "نموذج تواصل متقدم"
      ],
      github: "#", 
      live: "#",
      status: "مكتمل"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            معرض الأعمال
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            مجموعة مختارة من المشاريع التي تعكس خبرتي في تطوير تطبيقات الويب الحديثة
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16 scroll-animate">
          <div className="gradient-border">
            <div className="gradient-border-content">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      projects[activeProject].status === 'مكتمل' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {projects[activeProject].status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="h-5 w-5 text-blue-400" />
                    <span className="text-blue-400 text-sm font-medium">
                      {projects[activeProject].category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {projects[activeProject].title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {projects[activeProject].description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">المميزات الرئيسية:</h4>
                    <ul className="space-y-2">
                      {projects[activeProject].features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full ml-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">التقنيات المستخدمة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeProject].technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-slate-700 text-blue-400 rounded-lg text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={projects[activeProject].github}
                      className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                    <a 
                      href={projects[activeProject].live}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 hover:glow-effect"
                    >
                      <ExternalLink className="h-5 w-5" />
                      معاينة مباشرة
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 scroll-animate">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`cursor-pointer transition-all duration-300 ${
                activeProject === index 
                  ? 'gradient-border scale-105' 
                  : 'border-2 border-slate-700 hover:border-blue-500/50'
              } rounded-lg overflow-hidden`}
            >
              <div className={`${activeProject === index ? 'gradient-border-content' : 'bg-slate-800 p-4'}`}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="text-white font-semibold text-sm mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-xs line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-animate">
          <div className="gradient-border inline-block">
            <div className="gradient-border-content">
              <h3 className="text-white font-bold text-xl mb-4">
                هل لديك مشروع في الذهن؟
              </h3>
              <p className="text-gray-300 mb-6">
                دعنا نحول فكرتك إلى تطبيق ويب متميز
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 hover:glow-effect"
              >
                <Globe className="h-5 w-5" />
                ابدأ مشروعك الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;