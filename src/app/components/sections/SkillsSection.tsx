import { Code2, Shield, ChevronDown, ChevronUp, Wrench, FileCode, Network, Lock, Terminal, Server, Database } from 'lucide-react';
import { useSound, SOUNDS } from '../../hooks/useSound';
import { useState } from 'react';

// Componente de acordeón/desplegable
interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}

function Accordion({ title, icon, color, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const playClick = useSound(SOUNDS.click, 0.2);
  const playHover = useSound(SOUNDS.hover, 0.15);

  const handleToggle = () => {
    playClick();
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="w-full bg-white/50 backdrop-blur-md rounded-3xl border-2 border-[#80DEEA]/40 overflow-hidden"
      style={{
        boxShadow: '0 15px 40px rgba(128, 222, 234, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(255, 255, 255, 0.6)'
      }}
    >
      {/* Header clickeable */}
      <button
        onClick={handleToggle}
        onMouseEnter={playHover}
        className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-white/30 transition-all"
      >
        <div className="flex items-center gap-3">
          <div 
            className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white`}
            style={{
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
            }}
          >
            {icon}
          </div>
          <h3 className="text-base md:text-xl font-bold text-gray-800">{title}</h3>
        </div>
        
        <div className="text-[#80DEEA]">
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
      </button>

      {/* Contenido desplegable */}
      {isOpen && (
        <div className="p-4 md:p-6 pt-0 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

// Componente de skill con icono
interface SkillItemProps {
  name: string;
  icon?: React.ReactNode;
  color?: string;
  level?: string;
}

function SkillItem({ name, icon, color, level }: SkillItemProps) {
  const playHover = useSound(SOUNDS.hover, 0.15);

  return (
    <div 
      onMouseEnter={playHover}
      className="bg-white/60 backdrop-blur-sm rounded-xl p-3 md:p-4 border-2 border-white/80 flex items-center gap-3 hover:scale-105 transition-all"
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), inset 0 -2px 4px rgba(0, 0, 0, 0.05), inset 0 2px 4px rgba(255, 255, 255, 0.5)'
      }}
    >
      {icon && (
        <div 
          className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${color || 'from-gray-400 to-gray-600'} flex items-center justify-center text-white flex-shrink-0`}
          style={{
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15), inset 0 -1px 3px rgba(0, 0, 0, 0.2), inset 0 1px 3px rgba(255, 255, 255, 0.3)'
          }}
        >
          {icon}
        </div>
      )}
      <div className="flex-1">
        <p className="text-xs md:text-sm font-semibold text-gray-800">{name}</p>
        {level && <p className="text-[10px] md:text-xs text-gray-600">{level}</p>}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
      {/* Languages */}
      <Accordion
        title="Languages"
        icon={<FileCode className="w-5 h-5 md:w-6 md:h-6" />}
        color="from-blue-500 to-cyan-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <SkillItem name="JavaScript" icon={<Code2 className="w-4 h-4 md:w-5 md:h-5" />} color="from-yellow-400 to-yellow-600" level="Dominado" />
          <SkillItem name="HTML5/CSS3" icon={<Code2 className="w-4 h-4 md:w-5 md:h-5" />} color="from-orange-400 to-red-500" level="Dominado" />
          <SkillItem name="Python" icon={<Terminal className="w-4 h-4 md:w-5 md:h-5" />} color="from-blue-400 to-blue-600" level="Intermedio" />
          <SkillItem name="Java" icon={<Code2 className="w-4 h-4 md:w-5 md:h-5" />} color="from-red-500 to-orange-600" level="Oracle Certified" />
          <SkillItem name="SQL" icon={<Database className="w-4 h-4 md:w-5 md:h-5" />} color="from-indigo-400 to-indigo-600" level="PostgreSQL" />
          <SkillItem name="Bash/Shell" icon={<Terminal className="w-4 h-4 md:w-5 md:h-5" />} color="from-gray-700 to-gray-900" level="Avanzado" />
        </div>
      </Accordion>

      {/* Frameworks & Libraries */}
      <Accordion
        title="Frameworks & Libraries"
        icon={<Code2 className="w-5 h-5 md:w-6 md:h-6" />}
        color="from-purple-500 to-pink-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <SkillItem name="React & Vite" icon={<Code2 className="w-4 h-4 md:w-5 md:h-5" />} color="from-cyan-400 to-blue-500" level="En uso con CESVI" />
          <SkillItem name="Tailwind CSS" icon={<Code2 className="w-4 h-4 md:w-5 md:h-5" />} color="from-teal-400 to-cyan-500" level="En uso con CESVI" />
          <SkillItem name="Node.js" icon={<Server className="w-4 h-4 md:w-5 md:h-5" />} color="from-green-500 to-green-700" level="Backend" />
          <SkillItem name="Express.js" icon={<Server className="w-4 h-4 md:w-5 md:h-5" />} color="from-gray-600 to-gray-800" level="APIs REST" />
        </div>
      </Accordion>

      {/* Tools */}
      <Accordion
        title="Tools"
        icon={<Wrench className="w-5 h-5 md:w-6 md:h-6" />}
        color="from-orange-500 to-red-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <SkillItem name="Git & GitHub" icon={<Code2 className="w-4 h-4 md:w-5 md:h-5" />} color="from-gray-700 to-gray-900" level="Control de versiones" />
          <SkillItem name="Docker" icon={<Server className="w-4 h-4 md:w-5 md:h-5" />} color="from-blue-400 to-blue-600" level="Contenedores" />
          <SkillItem name="Linux (Parrot/Kali)" icon={<Terminal className="w-4 h-4 md:w-5 md:h-5" />} color="from-teal-500 to-green-600" level="Sistema operativo" />
          <SkillItem name="Figma" icon={<Code2 className="w-4 h-4 md:w-5 md:h-5" />} color="from-purple-400 to-pink-500" level="Diseño UI/UX" />
          <SkillItem name="Postman" icon={<Server className="w-4 h-4 md:w-5 md:h-5" />} color="from-orange-400 to-orange-600" level="API Testing" />
          <SkillItem name="SCRUM" icon={<Code2 className="w-4 h-4 md:w-5 md:h-5" />} color="from-blue-500 to-indigo-600" level="Metodología activa en CESVI" />
        </div>
      </Accordion>

      {/* Ciberseguridad */}
      <Accordion
        title="Ciberseguridad"
        icon={<Shield className="w-5 h-5 md:w-6 md:h-6" />}
        color="from-red-500 to-pink-600"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <SkillItem name="OWASP Top 10" icon={<Shield className="w-4 h-4 md:w-5 md:h-5" />} color="from-red-500 to-red-700" level="Conceptos y Mitigación" />
          <SkillItem name="Nmap" icon={<Network className="w-4 h-4 md:w-5 md:h-5" />} color="from-indigo-500 to-purple-600" level="Escaneo de Redes" />
          <SkillItem name="Burp Suite" icon={<Shield className="w-4 h-4 md:w-5 md:h-5" />} color="from-orange-500 to-red-600" level="Community Edition" />
          <SkillItem name="Criptografía" icon={<Lock className="w-4 h-4 md:w-5 md:h-5" />} color="from-yellow-500 to-orange-500" level="Hashing y SSL/TLS" />
          <SkillItem name="ISC2 CC" icon={<Shield className="w-4 h-4 md:w-5 md:h-5" />} color="from-blue-600 to-indigo-700" level="Certificado" />
          <SkillItem name="Fortinet NSE" icon={<Shield className="w-4 h-4 md:w-5 md:h-5" />} color="from-red-600 to-pink-700" level="NSE 1, 2 y 3" />
          <SkillItem name="Cisco Networking" icon={<Network className="w-4 h-4 md:w-5 md:h-5" />} color="from-blue-500 to-cyan-600" level="Academy" />
          <SkillItem name="TryHackMe" icon={<Terminal className="w-4 h-4 md:w-5 md:h-5" />} color="from-green-500 to-teal-600" level="Pre-Security Path" />
          <SkillItem name="OverTheWire" icon={<Terminal className="w-4 h-4 md:w-5 md:h-5" />} color="from-gray-600 to-gray-800" level="Bandit (Linux)" />
          <SkillItem name="Redes (OSI/TCP-IP)" icon={<Network className="w-4 h-4 md:w-5 md:h-5" />} color="from-purple-500 to-indigo-600" level="Fundamentos" />
          <SkillItem name="Port Scanner (Python)" icon={<Code2 className="w-4 h-4 md:w-5 md:h-5" />} color="from-cyan-500 to-blue-600" level="Proyecto GitHub" />
          <SkillItem name="Login Seguro (Node.js)" icon={<Lock className="w-4 h-4 md:w-5 md:h-5" />} color="from-green-600 to-teal-700" level="Proyecto GitHub" />
        </div>
      </Accordion>
    </div>
  );
}