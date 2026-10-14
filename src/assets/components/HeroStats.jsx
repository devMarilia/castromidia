const STATS = [
  {
    icon: UserGroupIcon,
    text: "+ de 1.500 clientes atendidos",
  },
  {
    icon: StarIcon,
    text: "+ de 14 anos de experiência",
  },
  {
    icon: ShieldCheckIcon,
    text: "Gestores certificados",
  },
];

export default function HeroStats() {
  return (
    <div className="grid w-full max-w-3xl gap-4 pt-2 sm:grid-cols-2 xl:grid-cols-3">
      {STATS.map((stat) => {
        const { icon: Icon, text } = stat;
        return (
          <div
            key={text}
            className="flex items-center gap-3 border-l border-white/10 pl-4 text-sm text-slate-200 sm:min-h-[56px] md:text-base"
          >
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Icon className="h-5 w-5" />
            </span>
            <span className="max-w-[16ch] font-medium leading-snug">{text}</span>
          </div>
        );
      })}
    </div>
  );
}

function UserGroupIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.5 11a3.5 3.5 0 1 0-2.488-5.963A5.48 5.48 0 0 1 14.5 7c0 1.48-.586 2.823-1.537 3.812A3.485 3.485 0 0 0 16.5 11zm-9 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm9.02 2c-1.255 0-2.443.286-3.503.796A6.47 6.47 0 0 1 15 18v1h6v-.75c0-2.899-2.46-5.25-5.48-5.25zM7.5 13C4.462 13 2 15.462 2 18.5V20h11v-1.5C13 15.462 10.538 13 7.5 13z" />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.75l2.848 5.77 6.367.926-4.607 4.49 1.088 6.34L12 17.28l-5.696 2.996 1.088-6.34-4.607-4.49 6.367-.926L12 2.75z" />
    </svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 3l7 3v5c0 4.6-2.6 8.85-7 10-4.4-1.15-7-5.4-7-10V6l7-3zm-2.25 9.25l1.5 1.5 3.75-3.75"
      />
    </svg>
  );
}
