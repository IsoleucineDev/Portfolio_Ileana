import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound, SOUNDS } from '../hooks/useSound';

interface BackgroundMusicProps {
  soundcloudUrl?: string;
}

export function BackgroundMusic({ soundcloudUrl = 'https://soundcloud.com/user-483599245/ile' }: BackgroundMusicProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<any>(null);
  const playClick = useSound(SOUNDS.click, 0.2);
  const playHover = useSound(SOUNDS.hover, 0.15);
  const hasInteracted = useRef(false);
  const autoPlayAttempted = useRef(false);
  
  // Convertir URL de SoundCloud a URL del widget
  const getWidgetUrl = (url: string) => {
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&buying=false&sharing=false&download=false&show_playcount=false&show_artwork=false&color=%2380DEEA`;
  };

  useEffect(() => {
    // Cargar el SoundCloud Widget API
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (iframeRef.current && (window as any).SC) {
        const widget = (window as any).SC.Widget(iframeRef.current);
        widgetRef.current = widget;

        // Configurar loop y volumen
        widget.bind((window as any).SC.Widget.Events.READY, () => {
          widget.setVolume(30); // 30% de volumen por defecto
          
          // Intentar autoplay después de un pequeño delay
          if (!autoPlayAttempted.current) {
            autoPlayAttempted.current = true;
            setTimeout(() => {
              try {
                widget.play();
                hasInteracted.current = true;
                setIsMuted(false);
              } catch (error) {
                // Si falla el autoplay, esperar click del usuario
                console.log('Autoplay bloqueado por el navegador. Haz clic en el botón para reproducir.');
              }
            }, 500);
          }
        });

        // Reiniciar cuando termine para hacer loop
        widget.bind((window as any).SC.Widget.Events.FINISH, () => {
          if (!isMuted) {
            widget.seekTo(0);
            widget.play();
          }
        });

        widget.bind((window as any).SC.Widget.Events.PLAY, () => {
          setIsPlaying(true);
        });

        widget.bind((window as any).SC.Widget.Events.PAUSE, () => {
          setIsPlaying(false);
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const toggleMute = () => {
    playClick();
    
    // Primera interacción: iniciar la música
    if (!hasInteracted.current && widgetRef.current) {
      hasInteracted.current = true;
      widgetRef.current.play();
      setIsMuted(false);
      return;
    }
    
    if (widgetRef.current) {
      if (isMuted) {
        widgetRef.current.setVolume(30);
        if (!isPlaying) {
          widgetRef.current.play();
        }
      } else {
        widgetRef.current.setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* SoundCloud Widget (oculto) */}
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={getWidgetUrl(soundcloudUrl)}
        style={{ display: 'none' }}
      />

      {/* Botón de control de música */}
      <div className="fixed top-20 right-6 z-50">
        <button
          onClick={toggleMute}
          onMouseEnter={() => {
            playHover();
            setShowTooltip(true);
          }}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm border-2 border-[#80DEEA]/50 flex items-center justify-center hover:bg-white/80 transition-all hover:scale-105"
          style={{
            boxShadow: '0 4px 12px rgba(128, 222, 234, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.6)'
          }}
          title={isMuted ? 'Activar música' : 'Silenciar música'}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-gray-600" />
          ) : (
            <Volume2 className="w-6 h-6 text-[#80DEEA]" />
          )}
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <div 
            className="absolute top-full right-0 mt-2 w-48 bg-gray-800 text-white text-xs rounded-lg p-3 shadow-lg animate-fadeIn"
            style={{
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="font-semibold mb-1">🎵 ile</p>
            <p className="text-gray-300">Música: ingenier0espacial</p>
          </div>
        )}
      </div>
    </>
  );
}