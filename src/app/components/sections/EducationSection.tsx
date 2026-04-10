import { GraduationCap, Award } from 'lucide-react';
import { useSound, SOUNDS } from '../../hooks/useSound';

export function EducationSection() {
  const playHover = useSound(SOUNDS.hover, 0.15);

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      {/* Educación */}
      <div className="w-full bg-white/50 backdrop-blur-md rounded-3xl p-4 md:p-8 border-2 border-[#80DEEA]/40"
        style={{
          boxShadow: '0 15px 40px rgba(128, 222, 234, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(255, 255, 255, 0.6)'
        }}
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 pb-3 border-b-2 border-gray-300">EDUCACIÓN</h3>
        
        {/* Card con icono a la izquierda */}
        <div 
          onMouseEnter={playHover}
          className="flex items-center gap-4 md:gap-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-white/80"
          style={{
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
          }}
        >
          {/* Icono de Graduación */}
          <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl md:rounded-3xl flex items-center justify-center"
            style={{
              boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.2), inset 0 3px 6px rgba(255, 255, 255, 0.3)'
            }}
          >
            <GraduationCap className="w-8 h-8 md:w-12 md:h-12 text-white" 
              style={{
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
              }}
            />
          </div>

          {/* Contenido */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-800 text-sm md:text-lg mb-1 md:mb-2">Ingeniería en Tecnologías Computacionales</h4>
            <p className="text-gray-700 text-xs md:text-sm mb-0.5 md:mb-1">
              <span className="font-semibold">Tecnológico de Monterrey (ITESM)</span>
            </p>
            <p className="text-gray-600 text-xs md:text-sm mb-0.5 md:mb-1">2024 - Actualidad</p>
            <p className="text-gray-600 text-xs md:text-sm">
              <span className="font-semibold">Estatus:</span> En curso
            </p>
          </div>

          {/* Logo TEC - Solo desktop */}
          <div className="hidden md:flex flex-shrink-0 w-24 h-24 bg-[#0033A0] rounded-3xl items-center justify-center border-2 border-gray-200"
            style={{
              boxShadow: '0 8px 20px rgba(0, 51, 160, 0.3), inset 0 -3px 6px rgba(0, 0, 0, 0.2), inset 0 3px 6px rgba(255, 255, 255, 0.1)'
            }}
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWosB3sfVgv-ZV1eFCjBLSGmynPNUda181w&s" 
              alt="Tec de Monterrey" 
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Certificaciones Oracle */}
      <div className="w-full bg-white/50 backdrop-blur-md rounded-3xl p-4 md:p-8 border-2 border-[#80DEEA]/40"
        style={{
          boxShadow: '0 15px 40px rgba(128, 222, 234, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(255, 255, 255, 0.6)'
        }}
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6 pb-3 border-b-2 border-gray-300">FORMACIÓN</h3>
        
        <div className="space-y-4">
          {/* Java Programming */}
          <div 
            onMouseEnter={playHover}
            className="flex items-center gap-4 md:gap-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-white/80"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
            }}
          >
            {/* Logo Oracle - Solo desktop */}
            <div className="hidden md:flex flex-shrink-0 w-24 h-24 bg-white rounded-3xl items-center justify-center border-2 border-gray-200"
              style={{
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1), inset 0 -3px 6px rgba(0, 0, 0, 0.08), inset 0 3px 6px rgba(255, 255, 255, 0.8)'
              }}
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVj70XUZsJ95dYq-V0Yddu65q0wFEdiDTKwg&s" 
                alt="Oracle" 
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Icono Award - Mobile */}
            <div className="flex-shrink-0 w-16 h-16 md:hidden bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center"
              style={{
                boxShadow: '0 8px 20px rgba(239, 68, 68, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.2), inset 0 3px 6px rgba(255, 255, 255, 0.3)'
              }}
            >
              <Award className="w-8 h-8 text-white" 
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>

            {/* Contenido */}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-800 text-sm md:text-base mb-0.5 md:mb-1">Java Programming — English</h4>
              <p className="text-gray-600 text-xs md:text-sm">7 de diciembre de 2025</p>
            </div>

            {/* Icono Award - Desktop */}
            <div className="hidden md:flex flex-shrink-0 w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-3xl items-center justify-center"
              style={{
                boxShadow: '0 8px 20px rgba(239, 68, 68, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.2), inset 0 3px 6px rgba(255, 255, 255, 0.3)'
              }}
            >
              <Award className="w-12 h-12 text-white" 
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>
          </div>

          {/* Java Foundations */}
          <div 
            onMouseEnter={playHover}
            className="flex items-center gap-4 md:gap-6 bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-white/80"
            style={{
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
            }}
          >
            {/* Icono Award */}
            <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl md:rounded-3xl flex items-center justify-center"
              style={{
                boxShadow: '0 8px 20px rgba(245, 158, 11, 0.4), inset 0 -3px 6px rgba(0, 0, 0, 0.2), inset 0 3px 6px rgba(255, 255, 255, 0.3)'
              }}
            >
              <Award className="w-8 h-8 md:w-12 md:h-12 text-white" 
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>

            {/* Contenido */}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-800 text-sm md:text-base mb-0.5 md:mb-1">Java Foundations — English</h4>
              <p className="text-gray-600 text-xs md:text-sm">21 de septiembre de 2025</p>
            </div>

            {/* Logo Oracle - Solo desktop */}
            <div className="hidden md:flex flex-shrink-0 w-24 h-24 bg-white rounded-3xl items-center justify-center border-2 border-gray-200"
              style={{
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1), inset 0 -3px 6px rgba(0, 0, 0, 0.08), inset 0 3px 6px rgba(255, 255, 255, 0.8)'
              }}
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVj70XUZsJ95dYq-V0Yddu65q0wFEdiDTKwg&s" 
                alt="Oracle" 
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}