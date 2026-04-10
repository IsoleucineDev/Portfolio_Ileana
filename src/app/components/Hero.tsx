import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#f4a261] rounded-full opacity-10"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block border-4 border-[#f4a261] px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 bg-[#1a1a2e]/50 backdrop-blur-sm"
          >
            <p className="font-['VT323'] text-xl sm:text-2xl text-[#e9c46a]">
              Hola, soy
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-['Press_Start_2P'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f4a261] leading-tight px-4"
          >
            Tu Nombre
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-['VT323'] text-2xl sm:text-3xl md:text-4xl text-[#e9c46a] px-4"
          >
            Desarrollador Full Stack
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto px-4"
          >
            <p className="font-['VT323'] text-xl sm:text-2xl text-[#e9c46a]/80 leading-relaxed">
              Creando experiencias digitales únicas con código vintage y estética retro
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="border-4 border-[#e9c46a] bg-[#e9c46a] hover:bg-transparent text-[#0f0f1e] hover:text-[#e9c46a] px-6 sm:px-8 py-3 sm:py-4 font-['VT323'] text-xl sm:text-2xl transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              GitHub
            </motion.a>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="border-4 border-[#f4a261] hover:bg-[#f4a261] text-[#f4a261] hover:text-[#0f0f1e] px-6 sm:px-8 py-3 sm:py-4 font-['VT323'] text-xl sm:text-2xl transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              Contacto
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-6 sm:gap-8 pt-6 sm:pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Mail, href: '#contact' },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={href}
                href={href.startsWith('#') ? href : href}
                onClick={(e) => {
                  if (href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(href);
                  }
                }}
                target={href.startsWith('#') ? undefined : '_blank'}
                rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-[#e9c46a] hover:text-[#f4a261] transition-colors"
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection('#about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.4 },
            y: { duration: 1.5, repeat: Infinity },
          }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 text-[#f4a261]"
        >
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>
      </div>
    </section>
  );
}
