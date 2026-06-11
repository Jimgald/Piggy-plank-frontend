import { Flame, Dumbbell, Trophy, Mountain, Footprints, Bike, Home, Users, Plus, User } from "lucide-react"

const recentActivity = [
  { id: 1, title: "Boxeo", detail: "45 min", when: "Ayer", Icon: Dumbbell },
  { id: 2, title: "Escalada en bloque", detail: "1 h 10 min", when: "Hace 3 días", Icon: Mountain },
  { id: 3, title: "Carrera matutina", detail: "6,2 km", when: "Hace 4 días", Icon: Footprints },
  { id: 4, title: "Ciclismo", detail: "18 km", when: "Hace 5 días", Icon: Bike },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col bg-gray-50 shadow-xl">
        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto px-5 pb-6 pt-8 scrollbar-hide">
          {/* Header / Hero */}
          <header className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-3xl font-bold text-white shadow-lg shadow-orange-500/30 ring-4 ring-white">
              JG
            </div>
            <h1 className="mt-4 text-xl font-bold text-gray-900">Juan Gómez</h1>
            <p className="text-sm font-medium text-gray-500">@juan_plank</p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2">
              <Flame className="h-5 w-5 fill-orange-500 text-orange-500" aria-hidden="true" />
              <span className="text-sm font-bold text-orange-600">24 días activos</span>
            </div>
          </header>

          {/* Quick stats */}
          <section className="mt-8 grid grid-cols-2 gap-4" aria-label="Estadísticas rápidas">
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100/50">
              <div className="flex items-center gap-2 text-gray-400">
                <Dumbbell className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider">Este mes</span>
              </div>
              <p className="mt-2 text-2xl font-bold text-gray-900">18</p>
              <p className="text-xs font-medium text-gray-500">Entrenamientos</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100/50">
              <div className="flex items-center gap-2 text-gray-400">
                <Trophy className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider">Retos</span>
              </div>
              <p className="mt-2 text-2xl font-bold text-gray-900">4</p>
              <p className="text-xs font-medium text-gray-500">Grupos superados</p>
            </div>
          </section>

          {/* Recent history */}
          <section className="mt-8" aria-label="Historial reciente">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-400">Historial reciente</h2>
            <ul className="space-y-3">
              {recentActivity.map(({ id, title, detail, when, Icon }) => (
                <li key={id} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border border-gray-100/50 transition-all hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                    <Icon className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-gray-900">{title}</p>
                    <p className="text-xs font-medium text-gray-500">{when}</p>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-gray-700 bg-gray-50 px-2 py-1 rounded-md">{detail}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <BottomNav />
      </div>
    </div>
  )
}

function BottomNav() {
  const items = [
    { icon: Home, label: "Inicio", active: false },
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

      {/* Profile Button (Active) */}
      <button className="flex flex-1 flex-col items-center gap-1 py-1 text-xs font-semibold text-orange-500 transition-colors focus:outline-none">
        <Users className="hidden" />
        <User className="h-6 w-6 stroke-[2.5px]" />
        Perfil
      </button>
    </nav>
  );
}