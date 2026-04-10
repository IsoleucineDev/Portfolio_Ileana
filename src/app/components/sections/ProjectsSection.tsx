import { Code, ExternalLink, Github, Globe, FolderGit, Youtube, FileText } from 'lucide-react';
import { useSound, SOUNDS } from '../../hooks/useSound';

export function ProjectsSection() {
  const playHover = useSound(SOUNDS.hover, 0.15);
  const playClick = useSound(SOUNDS.click, 0.2);

  const projects = [
    {
      title: "HoshiChat",
      description: "Real-time Chat con Laravel Echo + Vue 3 + WebSockets. Chat en tiempo real con broadcasting automático, arquitectura limpia y alta performance (<100ms).",
      tech: ["Vue 3", "Laravel Echo", "WebSockets", "Vite"],
      github: "https://github.com/IsoleucineDev",
      demo: "https://isoleucinedev.github.io/HoshiChat/",
      video: "https://www.youtube.com/watch?v=JxSNsFV6N2E&feature=youtu.be",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "CESVI México",
      description: "Plataforma integral para análisis de siniestros viales con React.js y Laravel (PHP). Implementación de metodologías ágiles (Scrum) para gestión eficiente de datos de reconstrucción de accidentes.",
      tech: ["React.js", "Laravel", "PHP", "Scrum"],
      github: null,
      demo: null,
      video: null,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Ingenier0Espacial Portfolio",
      description: "Portafolio musical con integración de SoundCloud. Desarrollado con Next.js 15, React 19, Turbopack y Tailwind CSS. Diseño responsivo y moderno con animaciones fluidas.",
      tech: ["TypeScript", "Next.js 15", "React 19", "Tailwind CSS"],
      github: null,
      demo: "https://ingenier0espacial.netlify.app/",
      video: null,
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full bg-white/50 backdrop-blur-md rounded-3xl p-4 md:p-8 border-2 border-[#80DEEA]/40"
          style={{
            boxShadow: '0 15px 40px rgba(128, 222, 234, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(255, 255, 255, 0.6)'
          }}
        >
          <div
            onMouseEnter={playHover}
            className="flex items-center gap-4 md:gap-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-white/80"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
            }}
          >
            {/* Cartucho 3DS - Esquina cortada */}
            <div 
              className="flex-shrink-0 w-20 h-28 md:w-28 md:h-40 relative"
              style={{
                background: `linear-gradient(to bottom right, ${project.color.includes('purple') ? '#a78bfa, #7c3aed' : project.color.includes('blue') ? '#60a5fa, #2563eb' : '#f472b6, #ec4899'})`,
                borderRadius: '12px',
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), inset 0 -3px 6px rgba(0, 0, 0, 0.3), inset 0 3px 6px rgba(255, 255, 255, 0.4)'
              }}
            >
              {/* Sticker/Label del cartucho */}
              <div className="absolute inset-2 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 70%, 88% 95%, 0 95%)',
                  boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                }}
              >
                <Code className="w-8 h-8 md:w-12 md:h-12 text-white mb-2" 
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))'
                  }}
                />
                <div className="w-3/4 h-1 bg-white/40 rounded mb-1"></div>
                <div className="w-2/3 h-1 bg-white/30 rounded"></div>
              </div>

              {/* Contactos del cartucho (parte inferior) */}
              <div className="absolute bottom-0 left-0 right-0 h-8 md:h-10 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center gap-0.5 pb-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 md:w-1.5 h-4 md:h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-sm"
                    style={{
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.5)'
                    }}
                  ></div>
                ))}
              </div>

              {/* Muesca lateral */}
              <div className="absolute top-1/4 -left-1 w-2 h-8 md:h-12 bg-black/30 rounded-l-lg"></div>
            </div>

            {/* Contenido */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-800 text-sm md:text-lg mb-1 md:mb-2">{project.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 md:px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full font-medium"
                    style={{
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-white rounded-xl font-medium text-xs md:text-sm hover:bg-gray-700 transition-all"
                    style={{
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <Github className="w-3 h-3 md:w-4 md:h-4" />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#80DEEA] text-white rounded-xl font-medium text-xs md:text-sm hover:bg-[#4DD0E1] transition-all"
                    style={{
                      boxShadow: '0 4px 12px rgba(128, 222, 234, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <Globe className="w-3 h-3 md:w-4 md:h-4" />
                    Demo
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FF0000] text-white rounded-xl font-medium text-xs md:text-sm hover:bg-[#CC0000] transition-all"
                    style={{
                      boxShadow: '0 4px 12px rgba(255, 0, 0, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <Youtube className="w-3 h-3 md:w-4 md:h-4" />
                    Video
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}