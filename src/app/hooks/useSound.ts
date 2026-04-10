import { useCallback, useRef } from 'react';

export function useSound(url: string, volume: number = 0.3) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback(() => {
    try {
      // Crear un nuevo audio cada vez para permitir overlapping
      const audio = new Audio(url);
      audio.volume = volume;
      
      // Precargar el audio
      audio.load();
      
      // Reproducir solo después de interacción del usuario
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Silenciar errores comunes de autoplay
          if (error.name !== 'AbortError' && error.name !== 'NotAllowedError') {
            console.warn('Error playing sound:', error);
          }
        });
      }
    } catch (error) {
      console.warn('Error creating audio:', error);
    }
  }, [url, volume]);

  return play;
}

// Sonidos del sistema estilo Frutiger Aero
export const SOUNDS = {
  // Click suave tipo Wii/Vista
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  
  // Hover sutil
  hover: 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
  
  // Transición/Swoosh
  transition: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  
  // Confirmación/Success
  success: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
};