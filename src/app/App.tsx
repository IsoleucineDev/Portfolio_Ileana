import { useState } from "react";
import { User, Code, Zap, Trophy, GraduationCap, ArrowLeft } from "lucide-react";
import { TopBar } from "./components/TopBar";
import { BottomBar } from "./components/BottomBar";
import { Carousel } from "./components/Carousel";
import { ChannelButton } from "./components/ChannelButton";
import { BackgroundMusic } from "./components/BackgroundMusic";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function App() {
  const [currentChannel, setCurrentChannel] = useState(0);
  const [currentSection, setCurrentSection] = useState<number | null>(null);

  const channels = [
    { icon: <User size={48} />, label: "Sobre Mí", color: "#FF6F61", rotation: -7 },
    { icon: <Code size={48} />, label: "Proyectos", color: "#6BB9F0", rotation: 5 },
    { icon: <Zap size={48} />, label: "Habilidades", color: "#FFE156", rotation: -4 },
    { icon: <Trophy size={48} />, label: "Trayectoria", color: "#A78BFA", rotation: 3 },
    { icon: <GraduationCap size={48} />, label: "Educación", color: "#B4E7D9", rotation: 6 },
  ];

  const sections = [
    <AboutSection key="about" />,
    <ProjectsSection key="projects" />,
    <SkillsSection key="skills" />,
    <ExperienceSection key="experience" />,
    <EducationSection key="education" />,
    <ContactSection key="contact" />
  ];

  const handlePrev = () => {
    setCurrentChannel((prev) => (prev === 0 ? channels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentChannel((prev) => (prev === channels.length - 1 ? 0 : prev + 1));
  };

  const handleChannelClick = (index: number) => {
    setCurrentChannel(index);
    setCurrentSection(index);
  };

  const handleHomeClick = () => {
    setCurrentSection(null);
    setCurrentChannel(0);
  };

  const handleBackClick = () => {
    // Detectar si es mobile (ancho < 768px)
    const isMobile = window.innerWidth < 768;
    
    if (isMobile && currentSection !== null) {
      // En mobile, avanzar a la siguiente sección
      const nextSection = (currentSection + 1) % channels.length;
      setCurrentChannel(nextSection);
      setCurrentSection(nextSection);
    } else {
      // En desktop, volver al carrusel
      setCurrentSection(null);
    }
  };

  const handleContactClick = () => {
    setCurrentSection(5);
  };

  // Obtener el título de la sección actual
  const getCurrentSectionTitle = () => {
    if (currentSection === null) return "";
    if (currentSection === 5) return "Contacto";
    return channels[currentSection]?.label || "";
  };

  return (
    <div className="size-full bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden relative">
      {/* Música de fondo */}
      <BackgroundMusic />

      {/* Wii-style Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-8 md:grid-cols-12 gap-4 p-4 h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-inner"
              style={{
                aspectRatio: '1',
              }}
            />
          ))}
        </div>
      </div>

      {/* Top Bar */}
      <TopBar />

      {/* Main Content Area */}
      <div className="h-full pt-14 pb-32 flex flex-col items-center justify-center px-8 relative z-10">
        {/* Show carousel only when no section is selected */}
        {currentSection === null ? (
          <div className="transition-all duration-500">
            <Carousel
              currentIndex={currentChannel}
              onPrev={handlePrev}
              onNext={handleNext}
            >
              {channels.map((channel, index) => (
                <ChannelButton
                  key={index}
                  icon={channel.icon}
                  label={channel.label}
                  isActive={currentChannel === index}
                  onClick={() => handleChannelClick(index)}
                  color={channel.color}
                  rotation={channel.rotation}
                />
              ))}
            </Carousel>
          </div>
        ) : (
          /* Full screen content view with back button */
          <div className="w-full h-full flex flex-col animate-fadeIn">
            {/* Header with back button and title */}
            <div className="flex items-center gap-4 mb-6 px-4">
              <button
                onClick={handleBackClick}
                className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border-2 border-[#80DEEA] flex items-center justify-center hover:bg-white/90 transition-all hover:scale-105"
                style={{
                  boxShadow: '0 6px 20px rgba(128, 222, 234, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.6)'
                }}
              >
                <ArrowLeft className="w-6 h-6 text-[#80DEEA]" />
              </button>
              <h1 className="text-3xl font-bold text-gray-800">
                {getCurrentSectionTitle()}
              </h1>
            </div>

            {/* Content Section */}
            <div className="flex-1 overflow-y-auto px-4 pb-8">
              {sections[currentSection]}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <BottomBar onHomeClick={handleHomeClick} onContactClick={handleContactClick} />
    </div>
  );
}