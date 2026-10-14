// components/Contato.jsx
// Sem background próprio.

import WhatsAppButton from './WhatsAppButton';

export default function Contato() {
  return (
    <section id="contato" className="px-6 pt-10 pb-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] md:gap-16 lg:gap-20">
        {/* Texto + contatos */}
        <div className="space-y-9">
          <div className="space-y-5">
            <p className="font-body text-xs tracking-widest uppercase text-gold">
              Entre em contato
            </p>
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-gold to-rose" />
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
              Pronto para sua próxima{" "}
              <span className="text-gradient">jogada estratégica?</span>
            </h2>
            <p className="font-body text-base leading-relaxed text-gray-400 max-w-xl">
              Se você não sabe quais métricas sua agência usa para otimizar
              suas campanhas, talvez seja hora de uma conversa. Fale com a
              Castro Mídia — sem compromisso.
            </p>
          </div>

          <WhatsAppButton
            text="Falar agora no WhatsApp"
            arrow
            className="inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-sm font-extrabold shadow-[0_18px_40px_rgba(201,168,76,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(201,168,76,0.34)] md:text-base"
          />
        </div>

        {/* Foto */}
        <div className="relative mx-auto w-full max-w-[420px] md:mx-0">
          <div className="absolute -inset-8 -z-10 rounded-[36px] bg-gold/15 blur-3xl" />
          <div className="overflow-hidden rounded-[28px] border border-gold/20 bg-[#0f1118] shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
            <img
              src="/imagemSobre.jpg"
              alt="Especialista Castro Mídia"
              className="h-[420px] w-full object-cover object-top md:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
