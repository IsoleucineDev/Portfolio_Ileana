import { motion } from 'motion/react';
import { Code2, Palette, Zap, Terminal } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Código limpio y mantenible siguiendo las mejores prácticas',
    },
    {
      icon: Palette,
      title: 'Diseño Único',
      description: 'Interfaces creativas con estética retro y moderna',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Aplicaciones rápidas y optimizadas',
    },
    {
      icon: Terminal,
      title: 'Full Stack',
      description: 'Frontend y Backend con las últimas tecnologías',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 sm:py-32 px-4 bg-gradient-to-br from-[#16213e] via-[#1a1a2e] to-[#0f0f1e] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f4a261 1px, transparent 1px),
            linear-gradient(to bottom, #f4a261 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
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
              Sobre Mí
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="border-4 border-[#f4a261] p-6 sm:p-8 bg-[#1a1a2e]/80 backdrop-blur-sm">
              <p className="font-['VT323'] text-xl sm:text-2xl text-[#e9c46a] leading-relaxed mb-4 sm:mb-6">
                ¡Hola! Soy un desarrollador apasionado por crear experiencias digitales únicas.
              </p>
              <p className="font-['VT323'] text-xl sm:text-2xl text-[#e9c46a]/80 leading-relaxed mb-4 sm:mb-6">
                Me especializo en desarrollo web full stack con un toque especial en diseño retro y vintage.
              </p>
              <p className="font-['VT323'] text-xl sm:text-2xl text-[#e9c46a]/80 leading-relaxed">
                Combino la estética de los años 80 y 90 con las tecnologías más modernas para crear algo verdaderamente especial.
              </p>
            </div>

            <motion.div
              whileHover={{ x: 10 }}
              className="border-l-4 border-[#f4a261] pl-4 sm:pl-6 py-3 sm:py-4 bg-[#f4a261]/10"
            >
              <p className="font-['VT323'] text-lg sm:text-xl text-[#f4a261]">
                "El código es poesía, y cada proyecto es una obra de arte digital"
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="border-8 border-[#e9c46a] bg-gradient-to-br from-[#f4a261] to-[#e76f51] aspect-square relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="font-['Press_Start_2P'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0f0f1e]">
                    {'</>'}
                  </div>
                  <div className="font-['VT323'] text-2xl sm:text-3xl text-[#0f0f1e]/80">
                    DEVELOPER
                  </div>
                </div>
              </div>
              {/* Scanline effect */}
              <motion.div
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-2 bg-white/10"
              />
            </div>
            {/* Corner decorations */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-[#f4a261]" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-[#f4a261]" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-[#f4a261]" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-[#f4a261]" />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="border-4 border-[#e9c46a] p-6 bg-[#1a1a2e]/90 backdrop-blur-sm group cursor-pointer"
            >
              <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#f4a261] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-['Press_Start_2P'] text-xs sm:text-sm text-[#e9c46a] mb-3 sm:mb-4 leading-relaxed">
                {feature.title}
              </h3>
              <p className="font-['VT323'] text-lg sm:text-xl text-[#e9c46a]/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
