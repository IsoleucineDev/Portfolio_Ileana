import { User, MapPin, Calendar, Briefcase, UserCircle } from 'lucide-react';
import profileImage from 'figma:asset/2da068161fb7d96e281289e892fad7e1edf8263e.png';
import { useSound, SOUNDS } from '../../hooks/useSound';

export function AboutSection() {
  const playHover = useSound(SOUNDS.hover, 0.15);

  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
      {/* Photo */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white flex-shrink-0"
        style={{
          boxShadow: '0 10px 30px rgba(128, 222, 234, 0.4), inset 0 -4px 8px rgba(0, 0, 0, 0.2), inset 0 4px 8px rgba(255, 255, 255, 0.3)'
        }}
      >
        <img 
          src={profileImage} 
          alt="IsoleucineDev" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">IsoleucineDev</h2>
        <p className="text-xl text-[#80DEEA] font-semibold mt-1">Ileana Tapia Castillo</p>
      </div>

      {/* Info Cards Row 1 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ubicación */}
        <div 
          onMouseEnter={playHover}
          className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/80 p-4 flex items-center gap-3"
          style={{
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
          }}
        >
          <div className="w-12 h-12 rounded-full bg-[#80DEEA]/20 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-[#80DEEA]" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Ubicación</p>
            <p className="text-sm font-bold text-gray-800">México, EDOMEX</p>
          </div>
        </div>

        {/* Institución */}
        <div 
          onMouseEnter={playHover}
          className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/80 p-4 flex items-center gap-3"
          style={{
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
          }}
        >
          <div className="w-12 h-12 rounded-full bg-[#80DEEA]/20 flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-6 h-6 text-[#80DEEA]" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Institución</p>
            <p className="text-sm font-bold text-gray-800">Tec de Monterrey</p>
          </div>
        </div>
      </div>

      {/* Info Cards Row 2 */}
      <div className="w-full">
        {/* Estudiante Activo */}
        <div 
          onMouseEnter={playHover}
          className="bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white/80 p-4 flex items-center gap-3"
          style={{
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
          }}
        >
          <div className="w-12 h-12 rounded-full bg-[#80DEEA]/20 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-6 h-6 text-[#80DEEA]" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Estatus Académico</p>
            <p className="text-sm font-bold text-gray-800">Estudiante Activo</p>
          </div>
        </div>
      </div>

      {/* Professional Profile */}
      <div className="w-full bg-white/50 backdrop-blur-md rounded-3xl p-8 border-2 border-[#80DEEA]/40"
        style={{
          boxShadow: '0 15px 40px rgba(128, 222, 234, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(255, 255, 255, 0.6)'
        }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Perfil Profesional</h3>
        <p className="text-gray-700 leading-relaxed text-base text-center">
          Estudiante de Ingeniería en Tecnologias Computacionalesen el Tec de Monterrey y socia de la Asociación Astronómica del Valle de Toluca (AAVAT). 
          Cuento con certificaciones de Oracle en Java y manejo de entornos Linux. Me apasiona compartir lo que aprendo, 
          por lo que participo constantemente dando conferencias y colaborando en la redacción de secciones infantiles sobre astronomía.
        </p>
      </div>
    </div>
  );
}
