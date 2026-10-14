import WhatsAppButton from "./WhatsAppButton";

const PROFILE_DATA = [
  { label: "Especialidade", value: "Google Ads e Meta Ads" },
  { label: "Atendimento", value: "Empresas que querem escalar com clareza" },
  { label: "Experiência", value: "14 anos em marketing, vendas e estratégia" },
  { label: "Modelo", value: "Gestão próxima, análise contínua e otimização" },
  { label: "Foco", value: "Lead qualificado, ROAS e crescimento sustentável" },
  { label: "Disponibilidade", value: "Atendimento consultivo e acompanhamento real" },
];

export default function Sobre() {
  return (
    <section id="sobre" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:gap-10 lg:gap-14 xl:gap-16 md:grid-cols-[minmax(280px,430px)_minmax(0,1fr)]">
        <div className="mx-auto w-full max-w-[430px] md:mx-0">
          <div className="overflow-hidden border border-white/5 bg-[#0f1118] shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
            <img
              src="/fundadorgustavo.png"
              alt="Especialista da Castro Mídia"
              className="h-[520px] w-full object-cover object-top md:h-[620px]"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-gold">
              Discover
            </p>

            <div>
              <h2 className="text-4xl font-black text-white md:text-5xl xl:text-[3.6rem]">
                About Me
              </h2>
              <div className="mt-4 h-[3px] w-16 bg-gold" />
            </div>

            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Meu nome é Castro Mídia e eu trabalho com estratégias de tráfego
              pago para empresas que desejam crescer com previsibilidade. Unimos
              posicionamento, mídia e inteligência de dados para construir
              campanhas mais fortes e operações mais lucrativas.
            </p>

            <p className="max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
              Nada aqui é genérico. Cada projeto nasce com objetivo claro,
              acompanhamento próximo e otimização contínua para transformar
              investimento em clientes qualificados, escala e resultado real.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-5 border border-gold/25 bg-transparent p-6 md:grid-cols-2 md:p-8">
            {PROFILE_DATA.map(({ label, value }) => (
              <div key={label} className="space-y-1">
                <p className="text-sm font-bold text-white">{label}:</p>
                <p className="text-sm leading-7 text-slate-300 md:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <WhatsAppButton
            text="Falar com um especialista"
            message="Olá! Quero saber mais sobre os serviços."
            arrow
            className="inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-sm font-extrabold shadow-[0_18px_40px_rgba(201,168,76,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(201,168,76,0.34)] md:text-base"
          />
        </div>
      </div>
    </section>
  );
}
