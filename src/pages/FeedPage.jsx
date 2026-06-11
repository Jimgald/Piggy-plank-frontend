import { useState } from "react";
import { Bell, Flame, MessageCircle, Home, Users, Plus, User } from "lucide-react";

const WORKOUTS = [
  {
    id: 1,
    name: "Marcos Vélez",
    initials: "MV",
    avatarColor: "bg-orange-500",
    time: "hace 2 horas",
    text: "Sesión de boxeo intensa 🥊 12 rounds completos, las manos casi no responden pero valió cada gota de sudor.",
    imageLabel: "Boxeo · 45 min",
    imageGradient: "from-orange-400 to-red-500",
    fires: 24,
    comments: 5,
  },
  {
    id: 2,
    name: "Lucía Ramírez",
    initials: "LR",
    avatarColor: "bg-emerald-500",
    time: "hace 4 horas",
    text: "¡Ruta de escalada completada! 🧗‍♀️ Vía 6b conquistada después de 3 intentos. La constancia gana.",
    imageLabel: "Escalada · Vía 6b",
    imageGradient: "from-emerald-400 to-teal-600",
    fires: 41,
    comments: 12,
  },
  {
    id: 3,
    name: "Diego Torres",
    initials: "DT",
    avatarColor: "bg-sky-500",
    time: "hace 6 horas",
    text: "Carrera matutina de 10K antes del trabajo. Empezar el día moviéndose lo cambia todo 🏃‍♂️",
    imageLabel: "Running · 10 km",
    imageGradient: "from-sky-400 to-indigo-500",
    fires: 18,
    comments: 3,
  },
];

export default function FeedPage() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center">
      <div className="relative flex h-screen w-full max-w-md flex-col bg-gray-50 shadow-xl">
        <Header />
        <Feed />
        <BottomNav />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-4 py-3.5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500 text-base font-bold text-white shadow-sm">
          P
        </span>
        <h1 className="text-lg font-bold tracking-tight text-gray-800">Piggy Plank</h1>
      </div>
      <button
        aria-label="Notificaciones"
        className="relative rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
      >
        <Bell className="h-5 w-5" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white" />
      </button>
    </header>
  );
}

function Feed() {
  return (
    <main className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide">
      <div className="flex flex-col gap-4">
        <MotivationalPiggy />
        {WORKOUTS.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
        <p className="py-4 text-center text-xs text-gray-400 font-medium">Has llegado al final 🐷</p>
      </div>
    </main>
  );
}

function WorkoutCard({ workout }) {
  const [liked, setLiked] = useState(false);
  const fireCount = workout.fires + (liked ? 1 : 0);

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100/50">
      {/* Card header */}
      <div className="flex items-center gap-3 px-4 pt-4">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm ${workout.avatarColor}`}
        >
          {workout.initials}
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-900">{workout.name}</span>
          <span className="text-xs font-medium text-gray-400">{workout.time}</span>
        </div>
      </div>

      {/* Content */}
      <p className="px-4 py-3 text-sm leading-relaxed text-gray-700">{workout.text}</p>

      {/* Image placeholder */}
      <div className={`mx-4 mb-3 flex h-44 items-end rounded-xl shadow-inner bg-gradient-to-br ${workout.imageGradient}`}>
        <span className="m-3 rounded-lg bg-black/30 px-2.5 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
          {workout.imageLabel}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 border-t border-gray-50 px-2 py-2">
        <button
          onClick={() => setLiked((v) => !v)}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition-all duration-200 active:scale-95 focus:outline-none ${
            liked ? "bg-orange-50 text-orange-500" : "text-gray-500 hover:bg-gray-50"
          }`}
        >
          <Flame className={`h-5 w-5 transition-transform ${liked ? "fill-orange-500 scale-110" : ""}`} />
          <span>{fireCount}</span>
        </button>
        <button className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-50 active:scale-95 focus:outline-none">
          <MessageCircle className="h-5 w-5" />
          <span>{workout.comments}</span>
        </button>
      </div>
    </article>
  );
}

function BottomNav() {
  const items = [
    { icon: Home, label: "Inicio", active: true },
    { icon: Users, label: "Grupos", active: false },
  ];

  return (
    <nav className="sticky bottom-0 z-10 flex items-center justify-around border-t border-gray-100 bg-white px-2 py-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
      {items.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          className={`flex flex-1 flex-col items-center gap-1 py-1 text-xs font-semibold transition-colors focus:outline-none ${
            active ? "text-orange-500" : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <Icon className={`h-6 w-6 ${active ? "stroke-[2.5px]" : "stroke-2"}`} />
          {label}
        </button>
      ))}

      {/* Center add button */}
      <button
        aria-label="Añadir entrenamiento"
        className="flex flex-1 flex-col items-center justify-center focus:outline-none group"
      >
        <span className="-mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/40 ring-4 ring-white transition-all duration-200 active:scale-90 group-hover:bg-orange-600 group-hover:shadow-orange-500/50">
          <Plus className="h-7 w-7 stroke-[2.5px]" />
        </span>
      </button>

      <button className="flex flex-1 flex-col items-center gap-1 py-1 text-xs font-semibold text-gray-400 transition-colors hover:text-gray-600 focus:outline-none">
        <Users className="hidden" />
        <User className="h-6 w-6 stroke-2" />
        Perfil
      </button>
    </nav>
  );
}
function MotivationalPiggy() {
  const quotes = [
    "Menos mirar la pantalla y más apretar el core, que te me ablandas.",
    "Un día más sin entrenar y pasas de atleta a panceta. ¡Muévete!",
    "Ese saco de boxeo no se va a golpear solo. ¡A darle!",
    "La gravedad hoy está fuerte, pero tú en el rocódromo más. ¿O no?",
    "Sudor hoy, orgullo mañana. Venga, dame un entreno.",
  ];
  
  // Elige una frase al azar cada vez que carga el componente
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="mb-6 flex items-start gap-3 px-2">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-2xl shadow-sm border border-orange-200">
        🐷
      </div>
      <div className="relative rounded-2xl rounded-tl-none bg-white p-3 shadow-sm border border-gray-100">
        <p className="text-sm font-medium text-gray-700 italic">"{randomQuote}"</p>
        {/* Triangulito del bocadillo */}
        <div className="absolute -left-2 top-0 h-4 w-4 bg-white border-l border-b border-gray-100" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
      </div>
    </div>
  );
}