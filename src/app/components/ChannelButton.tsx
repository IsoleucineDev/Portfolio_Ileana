import { ReactNode } from 'react';
import { useSound, SOUNDS } from '../hooks/useSound';

interface ChannelButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  size?: 'small' | 'large';
  color?: string;
  rotation?: number;
}

export function ChannelButton({ icon, label, isActive, onClick, size = 'large', color = '#80DEEA', rotation = 0 }: ChannelButtonProps) {
  const playClick = useSound(SOUNDS.click, 0.2);
  const playHover = useSound(SOUNDS.hover, 0.15);
  
  const isSmall = size === 'small';
  // Mobile: w-20 h-20, Desktop: w-36 h-36
  const buttonSize = isSmall ? 'w-16 h-16 md:w-20 md:h-20' : 'w-20 h-20 md:w-36 md:h-36';
  const iconScale = isSmall ? 0.7 : 1;
  
  // Helper to convert hex to RGB for use in rgba
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 128, g: 222, b: 234 };
  };

  const rgb = hexToRgb(color);
  const rgbaString = `${rgb.r}, ${rgb.g}, ${rgb.b}`;

  // Darken color for gradient
  const darkenColor = (hex: string, amount: number = 0.2) => {
    const rgb = hexToRgb(hex);
    return `rgb(${Math.max(0, rgb.r - rgb.r * amount)}, ${Math.max(0, rgb.g - rgb.g * amount)}, ${Math.max(0, rgb.b - rgb.b * amount)})`;
  };

  const handleClick = () => {
    playClick();
    onClick();
  };

  const handleMouseEnter = () => {
    if (!isActive) {
      playHover();
    }
  };
  
  return (
    <div className="flex flex-col items-center gap-3">
      {/* White border container with rotation */}
      <div 
        className="relative"
        style={{
          transform: isActive ? 'rotate(0deg)' : `rotate(${rotation}deg)`,
          transition: 'all 0.3s ease'
        }}
      >
        {/* Rotating corner frames - only for active */}
        {isActive && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              animation: 'rotateCorners 4s linear infinite',
              zIndex: 10
            }}
          >
            {/* Top Left Corner */}
            <div 
              className="absolute"
              style={{
                top: '-10px',
                left: '-10px',
                width: '24px',
                height: '24px',
                borderTop: `3px solid #80DEEA`,
                borderLeft: `3px solid #80DEEA`,
                borderTopLeftRadius: '6px',
                boxShadow: `0 0 15px #80DEEA, 0 0 25px rgba(128, 222, 234, 0.6)`,
                filter: `drop-shadow(0 0 8px #80DEEA)`
              }}
            />
            
            {/* Top Right Corner */}
            <div 
              className="absolute"
              style={{
                top: '-10px',
                right: '-10px',
                width: '24px',
                height: '24px',
                borderTop: `3px solid #80DEEA`,
                borderRight: `3px solid #80DEEA`,
                borderTopRightRadius: '6px',
                boxShadow: `0 0 15px #80DEEA, 0 0 25px rgba(128, 222, 234, 0.6)`,
                filter: `drop-shadow(0 0 8px #80DEEA)`
              }}
            />
            
            {/* Bottom Left Corner */}
            <div 
              className="absolute"
              style={{
                bottom: '-10px',
                left: '-10px',
                width: '24px',
                height: '24px',
                borderBottom: `3px solid #80DEEA`,
                borderLeft: `3px solid #80DEEA`,
                borderBottomLeftRadius: '6px',
                boxShadow: `0 0 15px #80DEEA, 0 0 25px rgba(128, 222, 234, 0.6)`,
                filter: `drop-shadow(0 0 8px #80DEEA)`
              }}
            />
            
            {/* Bottom Right Corner */}
            <div 
              className="absolute"
              style={{
                bottom: '-10px',
                right: '-10px',
                width: '24px',
                height: '24px',
                borderBottom: `3px solid #80DEEA`,
                borderRight: `3px solid #80DEEA`,
                borderBottomRightRadius: '6px',
                boxShadow: `0 0 15px #80DEEA, 0 0 25px rgba(128, 222, 234, 0.6)`,
                filter: `drop-shadow(0 0 8px #80DEEA)`
              }}
            />
          </div>
        )}

        {/* Thick white border */}
        <div className="bg-white rounded-[28px] p-2 shadow-xl">
          <div
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            className={`
              ${buttonSize} rounded-3xl flex items-center justify-center cursor-pointer
              transition-all duration-300 relative
              ${
                !isActive && 'hover:scale-105'
              }
            `}
            style={{
              backdropFilter: 'blur(10px)',
              ...(isActive && {
                background: `linear-gradient(135deg, ${color} 0%, ${darkenColor(color)} 100%)`
              }),
              ...(!isActive && {
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)'
              }),
              border: isActive ? `3px solid rgba(${rgbaString}, 0.6)` : '3px solid rgba(255, 255, 255, 0.8)',
              boxShadow: isActive 
                ? `0 20px 40px rgba(${rgbaString}, 0.5), 0 10px 20px rgba(0, 0, 0, 0.15), inset 0 -4px 8px rgba(0, 0, 0, 0.2), inset 0 4px 8px rgba(255, 255, 255, 0.4)` 
                : '0 10px 30px rgba(0, 0, 0, 0.1), inset 0 -3px 6px rgba(0, 0, 0, 0.1), inset 0 3px 6px rgba(255, 255, 255, 0.6)',
            }}
          >
            {/* 3D Icon Effect */}
            <div 
              style={{
                color: isActive ? 'white' : color,
                filter: isActive 
                  ? 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' 
                  : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                transform: `translateY(${isActive ? '-2px' : '0'}) scale(${iconScale})`,
              }}
            >
              {icon}
            </div>

            {/* Glow Effect for Active */}
            {isActive && (
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)',
                }}
              />
            )}
          </div>
        </div>
      </div>

      <span
        className="text-sm font-semibold"
        style={{
          color: isActive ? color : '#6B7280',
          textShadow: isActive ? `0 2px 4px rgba(${rgbaString}, 0.3)` : 'none',
        }}
      >
        {label}
      </span>
    </div>
  );
}