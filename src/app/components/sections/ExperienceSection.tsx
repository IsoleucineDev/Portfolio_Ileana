import { Code, ExternalLink, Trophy, Award, Presentation, BookOpen } from 'lucide-react';
import { useSound, SOUNDS } from '../../hooks/useSound';

export function ExperienceSection() {
  const playHover = useSound(SOUNDS.hover, 0.15);

  const concursosAcademicos = [
    {
      title: "1er Lugar - BioHack | Edición 2025",
      description: "Destacada participación en el área de Biomecánica con el Sensor 'Estudiantes' (Tec de Monterrey, Campus Ciudad de México, 12 de abril de 2025).",
      icon: Trophy,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Tercer Lugar - ExpoIngenierías ITESM Campus Toluca",
      description: "Reconocimiento por el proyecto 'PD03 - Aplicación de grafos de procedencia para el análisis de programación paralela' (Campus Toluca, 12 de diciembre de 2025).",
      icon: Trophy,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Medalla de Platino (2023)",
      description: "Proyecto de levitación acústica mediante ondas estacionarias (U de G).",
      icon: Award,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "1er Lugar Estatal (2023)",
      description: "12° Concurso de Aparatos y Experimentos de Física (UAEMEX).",
      icon: Award,
      color: "from-green-400 to-green-600"
    },
    {
      title: "1er Lugar en Matemáticas (2022)",
      description: "XXXIV Concurso Intra-CCH (UNAM).",
      icon: Award,
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  const talleresYDivulgacion = [
    {
      title: "Competencia Nacional del Espacio México 2025",
      description: "Ponencia titulada '¿Por qué las cosas flotan en el espacio?' bajo el marco de 'Vivir en el espacio' (Toluca, octubre de 2025).",
      icon: Presentation,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      title: "Tallerista de 'Noche de Estrellas' 2024",
      description: "Impartición del taller 'Simulación del despegue de un cohete' (Sede Toluca, 9 de noviembre de 2024).",
      icon: Presentation,
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Socia Activa de la AAVAT desde 2024",
      description: "Asociación Astronómica del Valle de Toluca, A.C.",
      icon: Award,
      color: "from-teal-400 to-teal-600"
    },
    {
      title: "Organizadora y Tallerista STEM",
      description: "Diseño del programa 'Radicando la dificultad con creatividad', enfocado en enseñar matemáticas y física mediante papiroflexia a nivel secundaria (2023-2024).",
      icon: Presentation,
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Divulgación Científica",
      description: "Colaboración activa en eventos de ciencia y astronomía con la AAVAT.",
      icon: Presentation,
      color: "from-purple-400 to-purple-600"
    }
  ];

  const revista = [
    {
      title: "Colaboradora en la Revista 'El Viajero Estelar'",
      description: "Redacción y apoyo en el apartado 'Los niños en la astronomía', enfocado en la divulgación científica para el público infantil.",
      icon: BookOpen,
      color: "from-rose-400 to-rose-600"
    }
  ];

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      {/* Concursos Académicos */}
      <div className="w-full bg-white/50 backdrop-blur-md rounded-3xl p-6 border-2 border-[#80DEEA]/40"
        style={{
          boxShadow: '0 15px 40px rgba(128, 222, 234, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(255, 255, 255, 0.6)'
        }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-300">CONCURSOS ACADÉMICOS</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {concursosAcademicos.map((item, index) => (
            <div
              key={index}
              onMouseEnter={playHover}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/80 overflow-hidden"
              style={{
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
              }}
            >
              {/* Header with gradient */}
              <div className={`h-16 bg-gradient-to-br ${item.color} flex items-center justify-center relative`}
                style={{
                  boxShadow: 'inset 0 -2px 6px rgba(0, 0, 0, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.3)'
                }}
              >
                <item.icon className="w-8 h-8 text-white" 
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h4 className="font-bold text-gray-800 text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Talleres y Divulgación */}
      <div className="w-full bg-white/50 backdrop-blur-md rounded-3xl p-6 border-2 border-[#80DEEA]/40"
        style={{
          boxShadow: '0 15px 40px rgba(128, 222, 234, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(255, 255, 255, 0.6)'
        }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-300">TALLERES Y DIVULGACIÓN</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {talleresYDivulgacion.map((item, index) => (
            <div
              key={index}
              onMouseEnter={playHover}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/80 overflow-hidden"
              style={{
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
              }}
            >
              {/* Header with gradient */}
              <div className={`h-16 bg-gradient-to-br ${item.color} flex items-center justify-center relative`}
                style={{
                  boxShadow: 'inset 0 -2px 6px rgba(0, 0, 0, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.3)'
                }}
              >
                <item.icon className="w-8 h-8 text-white" 
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h4 className="font-bold text-gray-800 text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revista */}
      <div className="w-full bg-white/50 backdrop-blur-md rounded-3xl p-6 border-2 border-[#80DEEA]/40"
        style={{
          boxShadow: '0 15px 40px rgba(128, 222, 234, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(255, 255, 255, 0.6)'
        }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-300">PUBLICACIONES Y REDACCIÓN</h3>
        
        <div className="grid grid-cols-1 gap-4">
          {revista.map((item, index) => (
            <div
              key={index}
              onMouseEnter={playHover}
              className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/80 overflow-hidden"
              style={{
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
              }}
            >
              {/* Header with gradient */}
              <div className={`h-16 bg-gradient-to-br ${item.color} flex items-center justify-center relative`}
                style={{
                  boxShadow: 'inset 0 -2px 6px rgba(0, 0, 0, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.3)'
                }}
              >
                <item.icon className="w-8 h-8 text-white" 
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <h4 className="font-bold text-gray-800 text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}