import { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSound, SOUNDS } from '../hooks/useSound';

interface CarouselProps {
  children: ReactNode[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export function Carousel({ children, currentIndex, onPrev, onNext }: CarouselProps) {
  const playClick = useSound(SOUNDS.click, 0.2);
  const playHover = useSound(SOUNDS.hover, 0.15);
  
  const totalItems = children.length;
  
  // Calculate indices for all 5 items (with wrapping)
  const index_minus2 = (currentIndex - 2 + totalItems) % totalItems;
  const index_minus1 = (currentIndex - 1 + totalItems) % totalItems;
  const index_plus1 = (currentIndex + 1) % totalItems;
  const index_plus2 = (currentIndex + 2) % totalItems;

  const handlePrev = () => {
    playClick();
    onPrev();
  };

  const handleNext = () => {
    playClick();
    onNext();
  };

  return (
    <div className="relative flex items-center justify-center gap-4 md:gap-8 w-full">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        onMouseEnter={playHover}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/60 backdrop-blur-sm border-2 border-white/80 flex items-center justify-center hover:bg-white/80 transition-all shadow-lg"
        style={{
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.6)'
        }}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      </button>

      {/* Carousel Content - 5 items layout for desktop, 3 for mobile */}
      <div className="flex items-center justify-center gap-3 md:gap-6 min-w-0 relative" style={{ minHeight: '180px' }}>
        {/* Item -2 (solo desktop, muy pequeño) */}
        <div 
          className="scale-75 opacity-30 hover:opacity-50 transition-all hidden xl:block" 
          onClick={handlePrev} 
          style={{ cursor: 'pointer' }}
        >
          {children[index_minus2]}
        </div>

        {/* Item -1 (oculto en mobile, pequeño en desktop) */}
        <div 
          className="scale-90 opacity-60 hover:opacity-80 transition-all hidden md:block" 
          onClick={handlePrev} 
          style={{ cursor: 'pointer' }}
        >
          {children[index_minus1]}
        </div>

        {/* Center Large Item (siempre visible) */}
        <div className="scale-110 md:scale-125 z-10">
          {children[currentIndex]}
        </div>

        {/* Item +1 (oculto en mobile, pequeño en desktop) */}
        <div 
          className="scale-90 opacity-60 hover:opacity-80 transition-all hidden md:block" 
          onClick={handleNext} 
          style={{ cursor: 'pointer' }}
        >
          {children[index_plus1]}
        </div>

        {/* Item +2 (solo desktop, muy pequeño) */}
        <div 
          className="scale-75 opacity-30 hover:opacity-50 transition-all hidden xl:block" 
          onClick={handleNext} 
          style={{ cursor: 'pointer' }}
        >
          {children[index_plus2]}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        onMouseEnter={playHover}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/60 backdrop-blur-sm border-2 border-white/80 flex items-center justify-center hover:bg-white/80 transition-all shadow-lg"
        style={{
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.6)'
        }}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {children.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-[#80DEEA]'
                : 'w-2 bg-gray-400'
            }`}
            style={{
              boxShadow: index === currentIndex 
                ? '0 0 12px rgba(128, 222, 234, 0.6)' 
                : 'none'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}