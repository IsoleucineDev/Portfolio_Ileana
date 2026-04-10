import { Mail, Github, Linkedin, Twitter, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useSound, SOUNDS } from '../../hooks/useSound';

export function ContactSection() {
  const playHover = useSound(SOUNDS.hover, 0.15);
  const playClick = useSound(SOUNDS.click, 0.2);

  return (
    <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
      {/* Header Card */}
      <div className="w-full bg-white/50 backdrop-blur-md rounded-3xl p-8 border-2 border-[#80DEEA]/40 text-center"
        style={{
          boxShadow: '0 15px 40px rgba(128, 222, 234, 0.2), inset 0 -4px 8px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(255, 255, 255, 0.6)'
        }}
      >
        <p className="text-gray-600">¿Tienes un proyecto interesante o quieres colaborar? No dudes en contactarme.</p>
      </div>
      
      {/* Contact Methods */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onMouseEnter={playHover}
          className="bg-white/50 backdrop-blur-md rounded-2xl border-2 border-[#80DEEA]/30 p-6 text-center"
          style={{
            boxShadow: '0 10px 30px rgba(128, 222, 234, 0.15), inset 0 -3px 6px rgba(0, 0, 0, 0.1), inset 0 3px 6px rgba(255, 255, 255, 0.6)'
          }}
        >
          <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-white`}
            style={{
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
            }}
          >
            <Mail className="w-6 h-6" />
          </div>
          <p className="text-xs text-gray-500 mb-1">Email</p>
          <p className="text-sm font-semibold text-gray-800 break-all">b4ldor.c@gmail.com</p>
        </div>
        <div
          onMouseEnter={playHover}
          className="bg-white/50 backdrop-blur-md rounded-2xl border-2 border-[#80DEEA]/30 p-6 text-center"
          style={{
            boxShadow: '0 10px 30px rgba(128, 222, 234, 0.15), inset 0 -3px 6px rgba(0, 0, 0, 0.1), inset 0 3px 6px rgba(255, 255, 255, 0.6)'
          }}
        >
          <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center text-white`}
            style={{
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
            }}
          >
            <Phone className="w-6 h-6" />
          </div>
          <p className="text-xs text-gray-500 mb-1">Teléfono</p>
          <p className="text-sm font-semibold text-gray-800 break-all">+52 712 160 6897</p>
        </div>
        <div
          onMouseEnter={playHover}
          className="bg-white/50 backdrop-blur-md rounded-2xl border-2 border-[#80DEEA]/30 p-6 text-center"
          style={{
            boxShadow: '0 10px 30px rgba(128, 222, 234, 0.15), inset 0 -3px 6px rgba(0, 0, 0, 0.1), inset 0 3px 6px rgba(255, 255, 255, 0.6)'
          }}
        >
          <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#80DEEA] to-[#4DD0E1] flex items-center justify-center text-white`}
            style={{
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.4)'
            }}
          >
            <MapPin className="w-6 h-6" />
          </div>
          <p className="text-xs text-gray-500 mb-1">Ubicación</p>
          <p className="text-sm font-semibold text-gray-800 break-all">México, EDOMEX</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="w-full bg-white/50 backdrop-blur-md rounded-2xl border-2 border-[#80DEEA]/30 p-6"
        style={{
          boxShadow: '0 10px 30px rgba(128, 222, 234, 0.15), inset 0 -3px 6px rgba(0, 0, 0, 0.1), inset 0 3px 6px rgba(255, 255, 255, 0.6)'
        }}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Sígueme en redes</h3>
        <div className="flex gap-4 justify-center">
          <button
            onMouseEnter={playHover}
            onClick={playClick}
            className={`w-14 h-14 rounded-xl bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg`}
          >
            <Github className="w-6 h-6" />
          </button>
          <button
            onMouseEnter={playHover}
            onClick={playClick}
            className={`w-14 h-14 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg`}
          >
            <Linkedin className="w-6 h-6" />
          </button>
          <button
            onMouseEnter={playHover}
            onClick={playClick}
            className={`w-14 h-14 rounded-xl bg-[#80DEEA] hover:bg-[#4DD0E1] text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg`}
          >
            <Twitter className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full bg-white/50 backdrop-blur-md rounded-2xl border-2 border-[#80DEEA]/30 p-6"
        style={{
          boxShadow: '0 10px 30px rgba(128, 222, 234, 0.15), inset 0 -3px 6px rgba(0, 0, 0, 0.1), inset 0 3px 6px rgba(255, 255, 255, 0.6)'
        }}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">Envíame un mensaje</h3>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-[#80DEEA]/30 focus:border-[#80DEEA] focus:outline-none text-gray-800 transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Tu email"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-[#80DEEA]/30 focus:border-[#80DEEA] focus:outline-none text-gray-800 transition-all"
            />
          </div>
          <div>
            <textarea
              rows={4}
              placeholder="Tu mensaje"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-[#80DEEA]/30 focus:border-[#80DEEA] focus:outline-none text-gray-800 resize-none transition-all"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={playClick}
            onMouseEnter={playHover}
            className="w-full py-3 bg-gradient-to-br from-[#80DEEA] to-[#4DD0E1] text-white rounded-xl font-semibold hover:scale-105 transition-all"
            style={{
              boxShadow: '0 8px 20px rgba(128, 222, 234, 0.4)'
            }}
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}