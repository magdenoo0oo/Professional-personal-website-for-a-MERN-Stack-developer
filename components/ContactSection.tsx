"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      href: "#",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn", 
      icon: <Linkedin className="h-6 w-6" />,
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      name: "Gmail",
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:youssef.eldesoky@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "البريد الإلكتروني",
      value: "majdi.atef@gmail.com",
      link: "mailto:majdi.atef@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "رقم الهاتف",
      value: "+20 123 456 7890",
      link: "tel:+201234567890"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "الموقع",
      value: "مصر",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            تواصل معي
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            هل لديك مشروع أو فكرة؟ دعنا نتحدث حول كيف يمكنني مساعدتك في تحقيق أهدافك التقنية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="scroll-animate">
            <div className="gradient-border h-full">
              <div className="gradient-border-content h-full">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                  أرسل رسالة
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      موضوع الرسالة
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      الرسالة
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg transition-all duration-300 hover:glow-effect disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        إرسال الرسالة
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="scroll-animate">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                معلومات التواصل
              </h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-300 font-inter">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">تابعني على:</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`flex items-center justify-center w-12 h-12 bg-slate-800 rounded-lg border border-slate-700 text-gray-400 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="gradient-border">
                <div className="gradient-border-content text-center">
                  <h4 className="text-white font-semibold mb-2">
                    🚀 استجابة سريعة
                  </h4>
                  <p className="text-gray-300 text-sm">
                    أرد على جميع الرسائل خلال 24 ساعة
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">متاح للمشاريع الجديدة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-700 text-center scroll-animate">
        <p className="text-gray-400">
          &copy; 2024 مجدي عاطف زهران. جميع الحقوق محفوظة.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          صُمم وطُور بـ ❤️ باستخدام Next.js & TailwindCSS
        </p>
      </div>
    </section>
  );
};

export default ContactSection;