import WhatsAppButton from "./WhatsAppButton";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="z-10 flex flex-col items-start gap-6">
      <p className="text-sm md:text-base uppercase tracking-[0.34em] text-gold font-medium">
        Agência de marketing
      </p>

      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-black leading-[1.02] text-white md:text-6xl xl:text-[4.8rem]">
          Descubra como atrair mais clientes com{" "}
          <span className="text-gradient">tráfego pago</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-xl xl:text-2xl">
          Estratégias de Google Ads e Meta Ads focadas em atrair clientes mais
          qualificados e gerar crescimento para sua empresa.
        </p>
      </div>

      <WhatsAppButton
        text="Falar com um especialista"
        message="Olá! Quero saber mais sobre os serviços."
        arrow
        className="inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-sm font-extrabold shadow-[0_18px_40px_rgba(201,168,76,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(201,168,76,0.34)] md:text-base"
      />

      <HeroStats />
    </div>
  );
}
