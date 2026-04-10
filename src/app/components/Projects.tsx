import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Retro Gaming Hub',
      description: 'Plataforma de juegos retro con estética arcade de los 80s',
      image: 'https://images.unsplash.com/photo-1632765743329-3b257fe779a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYXJjYWRlJTIwZ2FtZXxlbnwxfHx8fDE3NzIyMTc0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Canvas API'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Vintage Computer Store',
      description: 'E-commerce de computadoras vintage con diseño retro',
      image: 'https://images.unsplash.com/photo-1571845615528-6d8d60c459ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNvbXB1dGVyJTIwdmludGFnZXxlbnwxfHx8fDE3NzIyMTc0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Tailwind', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Neon Tech Blog',
      description: 'Blog de tecnología con estética neon de los 80s',
      image: 'https://images.unsplash.com/photo-1630825523112-ff511a36e2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw4MHMlMjBuZW9uJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MjIxNzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Astro', 'MDX', 'Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Retro Music Player',
      description: 'Reproductor de música con interfaz de cassette vintage',
      image: 'https://images.unsplash.com/photo-1761168109397-20aef00a7bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHRlY2hub2xvZ3klMjBkZXNpZ258ZW58MXx8fHwxNzcyMjE3NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue', 'Web Audio API', 'CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 sm:py-32 px-4 bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Retro grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              #f4a261 0px,
              #f4a261 2px,
              transparent 2px,
              transparent 40px
            ),
            repeating-linear-gradient(
              90deg,
              #f4a261 0px,
              #f4a261 2px,
              transparent 2px,
              transparent 40px
            )
          `,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-block border-4 border-[#e9c46a] px-4 sm:px-6 py-2 mb-6 sm:mb-8 bg-[#1a1a2e]">
            <h2 className="font-['Press_Start_2P'] text-xl sm:text-2xl md:text-3xl text-[#e9c46a]">
              Mis Proyectos
            </h2>
          </div>
          <p className="font-['VT323'] text-xl sm:text-2xl text-[#e9c46a]/80 max-w-2xl mx-auto">
            Una colección de proyectos que combinan nostalgia retro con tecnología moderna
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="border-4 border-[#e9c46a] bg-[#1a1a2e] overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-[#f4a261] to-[#e76f51]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1e] to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#0f0f1e]/90 flex items-center justify-center gap-4 sm:gap-6"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-4 border-[#e9c46a] bg-[#e9c46a] hover:bg-transparent text-[#0f0f1e] hover:text-[#e9c46a] p-3 sm:p-4 transition-all"
                    >
                      <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-4 border-[#f4a261] bg-[#f4a261] hover:bg-transparent text-[#0f0f1e] hover:text-[#f4a261] p-3 sm:p-4 transition-all"
                    >
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <h3 className="font-['Press_Start_2P'] text-sm sm:text-base text-[#f4a261] leading-relaxed">
                    {project.title}
                  </h3>
                  
                  <p className="font-['VT323'] text-lg sm:text-xl text-[#e9c46a]/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-[#e9c46a] px-3 py-1 font-['VT323'] text-base sm:text-lg text-[#e9c46a] bg-[#e9c46a]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-4 border-[#f4a261] hover:bg-[#f4a261] text-[#f4a261] hover:text-[#0f0f1e] px-6 sm:px-8 py-3 sm:py-4 font-['VT323'] text-xl sm:text-2xl transition-all"
          >
            Ver Más Proyectos en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
