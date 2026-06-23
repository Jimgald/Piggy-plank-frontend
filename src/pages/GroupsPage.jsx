import { 
  HelpCircle, ArrowRight, Plus, Flame, 
  Users, Check, Clock, ChevronRight, Home, User 
} from "lucide-react"

const groups = [
  {
    id: "1",
    name: "Titanes del Boxeo",
    members: 5,
    membersLabel: "5 miembros",
    streak: 14,
    completedToday: true,
  },
  {
    id: "2",
    name: "Rocódromo Team",
    members: 12,
    membersLabel: "12 atletas",
    streak: 32,
    completedToday: false,
  },
  {
    id: "3",
    name: "Reto Plancha Mayo",
    members: 8,
    membersLabel: "8 miembros",
    streak: 6,
    completedToday: true,
  },
]

export default function GroupsPage() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center">
      <div className="relative flex h-screen w-full max-w-md flex-col bg-gray-50 shadow-xl">
        <GroupsHeader />
        <main className="flex-1 overflow-y-auto px-4 pb-6 pt-4 scrollbar-hide">
          <GroupActions />
          <GroupList />
        </main>
        <BottomNav />
      </div>
    </div>
  )
}

function GroupsHeader() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-100 bg-white px-4 py-4 shadow-sm">
      <h1 className="text-xl font-bold tracking-tight text-gray-900">Mis Grupos</h1>
      <button
        type="button"
        aria-label="Ayuda e información"
        className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
      >
        <HelpCircle className="h-5 w-5" />
      </button>
    </header>
  )
}

function GroupActions() {
  return (
    <section className="flex flex-col gap-3">
     
      <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100/50">
        <label htmlFor="invite-code" className="mb-2 block text-sm font-semibold text-gray-700">
          Unirse con código
        </label>
        <div className="flex items-center gap-2">
          <input
            id="invite-code"
            type="text"
            placeholder="Ej. PLANK24"
            className="h-11 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-bold uppercase tracking-wide text-gray-900 placeholder:text-gray-400 placeholder:normal-case placeholder:font-medium focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
          />
          <button
            type="button"
            className="flex h-11 items-center gap-1.5 rounded-xl bg-orange-500 px-4 text-sm font-bold text-white transition-all duration-200 hover:bg-orange-600 active:scale-95 focus:outline-none"
          >
            Unirse
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    
      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white text-sm font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
      >
        <Plus className="h-5 w-5 text-orange-500" />
        Crear nuevo grupo
      </button>
    </section>
  )
}

function GroupList() {
  return (
    <section className="mt-6">
      <h2 className="mb-3 px-1 text-sm font-bold uppercase tracking-wide text-gray-400">Grupos activos</h2>
      <div className="flex flex-col gap-3">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  )
}

function GroupCard({ group }) {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-4 rounded-2xl border border-gray-100/50 bg-white p-4 text-left shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 transition-colors group-hover:bg-orange-100">
        <Users className="h-6 w-6 text-orange-500" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-base font-bold text-gray-900">{group.name}</h3>

        <div className="mt-1 flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500">{group.membersLabel}</span>
          <span className="inline-flex items-center gap-1 text-sm font-bold text-orange-500">
            <Flame className="h-4 w-4 fill-orange-500" />
            {group.streak} días
          </span>
        </div>

        <div className="mt-2.5">
          {group.completedToday ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600 ring-1 ring-inset ring-emerald-600/20">
              <Check className="h-3.5 w-3.5" />
              Cuota de hoy cumplida
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-600 ring-1 ring-inset ring-amber-600/20">
              <Clock className="h-3.5 w-3.5" />
              Entrenamiento pendiente
            </span>
          )}
        </div>
      </div>

      <ChevronRight className="h-5 w-5 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1" />
    </button>
  )
}

function BottomNav() {
  const items = [
    { icon: Home, label: "Inicio", active: false },
    { icon: Users, label: "Grupos", active: true },
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