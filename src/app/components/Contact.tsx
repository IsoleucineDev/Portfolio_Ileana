import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hola@tuportfolio.com',
      href: 'mailto:hola@tuportfolio.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+34 123 456 789',
      href: 'tel:+34123456789',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Madrid, España',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: '#e9c46a',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: '#f4a261',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: '#e76f51',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 sm:py-32 px-4 bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #f4a261 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-block border-4 border-[#e9c46a] px-4 sm:px-6 py-2 mb-6 sm:mb-8 bg-[#1a1a2e]">
            <h2 className="font-['Press_Start_2P'] text-xl sm:text-2xl md:text-3xl text-[#e9c46a]">
              Contacto
            </h2>
          </div>
          <p className="font-['VT323'] text-xl sm:text-2xl text-[#e9c46a]/80 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-4 border-[#e9c46a] bg-[#1a1a2e]/90 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="font-['Press_Start_2P'] text-base sm:text-lg text-[#f4a261] mb-6 sm:mb-8 leading-relaxed">
                Envíame un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block font-['VT323'] text-xl text-[#e9c46a] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-4 border-[#e9c46a] bg-[#0f0f1e] text-[#e9c46a] px-4 py-3 font-['VT323'] text-xl focus:outline-none focus:border-[#f4a261] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block font-['VT323'] text-xl text-[#e9c46a] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-4 border-[#e9c46a] bg-[#0f0f1e] text-[#e9c46a] px-4 py-3 font-['VT323'] text-xl focus:outline-none focus:border-[#f4a261] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block font-['VT323'] text-xl text-[#e9c46a] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-4 border-[#e9c46a] bg-[#0f0f1e] text-[#e9c46a] px-4 py-3 font-['VT323'] text-xl focus:outline-none focus:border-[#f4a261] transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full border-4 px-6 py-4 font-['VT323'] text-xl sm:text-2xl transition-all flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? 'border-[#e9c46a]/50 bg-[#e9c46a]/50 text-[#0f0f1e]/50 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'border-green-500 bg-green-500 text-[#0f0f1e]'
                      : 'border-[#f4a261] bg-[#f4a261] hover:bg-transparent text-[#0f0f1e] hover:text-[#f4a261]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-3 border-[#0f0f1e] border-t-transparent rounded-full"
                      />
                      Enviando...
                    </>
                  ) : submitStatus === 'success' ? (
                    '✓ Mensaje Enviado!'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="border-4 border-[#e9c46a] bg-[#1a1a2e]/90 backdrop-blur-sm p-4 sm:p-6"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#f4a261] group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-['VT323'] text-base sm:text-lg text-[#e9c46a]/70">
                          {info.label}
                        </div>
                        <div className="font-['VT323'] text-lg sm:text-xl text-[#e9c46a] group-hover:text-[#f4a261] transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#f4a261]" />
                      <div>
                        <div className="font-['VT323'] text-base sm:text-lg text-[#e9c46a]/70">
                          {info.label}
                        </div>
                        <div className="font-['VT323'] text-lg sm:text-xl text-[#e9c46a]">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="border-4 border-[#e9c46a] bg-[#1a1a2e]/90 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="font-['Press_Start_2P'] text-sm sm:text-base text-[#f4a261] mb-4 sm:mb-6 leading-relaxed">
                Sígueme en redes
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-4 border-[#e9c46a] bg-[#e9c46a] hover:bg-transparent p-3 sm:p-4 transition-all group"
                    style={{ borderColor: social.color }}
                  >
                    <social.icon
                      className="w-6 h-6 sm:w-8 sm:h-8 text-[#0f0f1e] group-hover:text-[#e9c46a] transition-colors"
                      style={{ color: 'inherit' }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#f4a261] pl-4 sm:pl-6 py-4 bg-[#f4a261]/10"
            >
              <p className="font-['VT323'] text-xl sm:text-2xl text-[#e9c46a] leading-relaxed">
                "Convirtiendo ideas en realidad digital, un píxel a la vez"
              </p>
              <p className="font-['Press_Start_2P'] text-xs text-[#f4a261] mt-3">
                - Dev Retro
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
