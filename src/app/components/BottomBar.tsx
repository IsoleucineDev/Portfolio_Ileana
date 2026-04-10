import { Home, Mail, HelpCircle } from 'lucide-react';
import { useSound, SOUNDS } from '../hooks/useSound';

interface BottomBarProps {
  onHomeClick: () => void;
  onContactClick: () => void;
}

export function BottomBar({ onHomeClick, onContactClick }: BottomBarProps) {
  const playClick = useSound(SOUNDS.click, 0.2);
  const playHover = useSound(SOUNDS.hover, 0.15);

  const handleHomeClick = () => {
    playClick();
    onHomeClick();
  };

  const handleContactClick = () => {
    playClick();
    onContactClick();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-28 z-50">
      {/* Background with curved top corners */}
      <div className="relative w-full h-full">
        {/* Main bar background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400"
          style={{
            clipPath: 'polygon(0 20%, 8% 0%, 92% 0%, 100% 20%, 100% 100%, 0% 100%)',
          }}
        >
        </div>

        {/* Top glowing border with curves */}
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none" 
          preserveAspectRatio="none"
          viewBox="0 0 1000 100"
        >
          <defs>
            <linearGradient id="borderGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#80DEEA" stopOpacity="1" />
              <stop offset="50%" stopColor="#80DEEA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#80DEEA" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Curved top border path */}
          <path
            d="M 0 20 Q 40 0, 80 0 L 920 0 Q 960 0, 1000 20"
            fill="none"
            stroke="url(#borderGlow)"
            strokeWidth="4"
            filter="url(#glow)"
          />
          
          {/* Inner highlight line - lighter cyan */}
          <path
            d="M 0 20 Q 40 0, 80 0 L 920 0 Q 960 0, 1000 20"
            fill="none"
            stroke="rgba(255, 255, 255, 0.5)"
            strokeWidth="1.5"
            transform="translate(0, -1)"
          />
        </svg>

        {/* Content container */}
        <div className="absolute inset-0 flex items-center justify-between px-12 pt-4">
          {/* Home Button - Left */}
          <button
            onClick={handleHomeClick}
            onMouseEnter={playHover}
            className="w-16 h-16 rounded-full bg-white/40 backdrop-blur-sm border-4 border-[#80DEEA] flex items-center justify-center hover:bg-white/60 transition-all hover:scale-105 relative z-10"
            style={{
              boxShadow: '0 6px 20px rgba(128, 222, 234, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.6)'
            }}
          >
            <Home className="w-7 h-7 text-gray-700" />
          </button>

          {/* Mail Button - Right */}
          <button
            onClick={handleContactClick}
            onMouseEnter={playHover}
            className="w-16 h-16 rounded-full bg-white/40 backdrop-blur-sm border-4 border-[#80DEEA] flex items-center justify-center hover:bg-white/60 transition-all hover:scale-105 relative z-10"
            style={{
              boxShadow: '0 6px 20px rgba(128, 222, 234, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.6)'
            }}
          >
            <Mail className="w-7 h-7 text-gray-700" />
          </button>
        </div>

        {/* Help Button - Bottom Right Corner */}
        <button 
          onMouseEnter={playHover}
          className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm border-2 border-[#80DEEA]/50 flex items-center justify-center hover:bg-white/80 transition-all hover:scale-105 z-10"
          style={{
            boxShadow: '0 4px 12px rgba(128, 222, 234, 0.2)'
          }}
        >
          <HelpCircle className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}