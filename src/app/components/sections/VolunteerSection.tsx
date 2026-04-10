import { Heart, Sparkles, BookOpen, Users } from 'lucide-react';

export function VolunteerSection() {
  const activities = [
    {
      title: "Organizadora y Tallerista STEM",
      description: "Diseño del programa 'Radicando la dificultad con creatividad', enseñando matemáticas y física mediante papiroflexia a nivel secundaria (2023-2024).",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "Divulgación Científica AAVAT",
      description: "Colaboración activa en eventos de ciencia y astronomía con la Asociación Astronómica del Valle de Toluca, A.C.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-400"
    },
    {
      title: "Revista 'El Viajero Estelar'",
      description: "Colaboradora en la Revista - Redacción y apoyo en el apartado 'Los niños en el espacio: La astronomía', enfocado en la divulgación científica para el público infantil.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-purple-400 to-violet-400"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Voluntariado y Divulgación</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-md rounded-2xl border-2 border-white/80 shadow-xl overflow-hidden hover:scale-105 transition-transform"
          >
            {/* Icon Header */}
            <div className={`h-32 bg-gradient-to-br ${activity.color} flex items-center justify-center`}>
              <div className="text-white">
                {activity.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">{activity.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="w-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-8 text-white text-center shadow-xl">
        <Heart className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Pasión por Compartir Conocimiento</h3>
        <p className="text-cyan-50 leading-relaxed">
          Me apasiona compartir lo que aprendo, participando constantemente en conferencias, 
          talleres y actividades de divulgación científica para inspirar a las nuevas generaciones.
        </p>
      </div>
    </div>
  );
}
