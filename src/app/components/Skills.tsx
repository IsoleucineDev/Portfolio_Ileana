import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Motion', level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'Docker', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 88 },
        { name: 'AWS', level: 75 },
      ],
    },
    {
      title: 'Diseño',
      skills: [
        { name: 'UI/UX', level: 90 },
        { name: 'Responsive', level: 95 },
        { name: 'Animation', level: 88 },
        { name: 'Accessibility', level: 85 },
        { name: 'Retro Style', level: 98 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 sm:py-32 px-4 bg-gradient-to-br from-[#16213e] via-[#1a1a2e] to-[#0f0f1e] relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#f4a261]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

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
              Habilidades
            </h2>
          </div>
          <p className="font-['VT323'] text-xl sm:text-2xl text-[#e9c46a]/80 max-w-2xl mx-auto">
            Tecnologías y herramientas que uso para crear experiencias digitales
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="border-4 border-[#e9c46a] bg-[#1a1a2e]/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8"
            >
              <div className="border-b-2 border-[#f4a261] pb-3 sm:pb-4 mb-4 sm:mb-6">
                <h3 className="font-['Press_Start_2P'] text-base sm:text-lg text-[#f4a261]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-['VT323'] text-lg sm:text-xl text-[#e9c46a]">
                        {skill.name}
                      </span>
                      <span className="font-['Press_Start_2P'] text-xs text-[#f4a261]">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-4 sm:h-5 border-2 border-[#e9c46a] bg-[#0f0f1e] relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.8,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-[#f4a261] to-[#e76f51] relative"
                      >
                        {/* Animated scanline effect */}
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {[
            { number: '50+', label: 'Proyectos' },
            { number: '5+', label: 'Años Exp.' },
            { number: '30+', label: 'Clientes' },
            { number: '100%', label: 'Retro' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="border-4 border-[#f4a261] bg-[#1a1a2e] p-4 sm:p-6 text-center"
            >
              <div className="font-['Press_Start_2P'] text-2xl sm:text-3xl md:text-4xl text-[#f4a261] mb-2 sm:mb-3">
                {stat.number}
              </div>
              <div className="font-['VT323'] text-lg sm:text-xl text-[#e9c46a]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
