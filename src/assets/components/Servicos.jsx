// components/Servicos.jsx
// Sem background próprio.

import { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";


const SERVICES = [
  {
    cor: "text-gold",
    bg: "bg-gold/10",
    bgHover: "group-hover:bg-gold/20",
    spot: "201, 168, 76",
    titulo: "Google Ads",
    desc: "Campanhas de pesquisa, display e shopping otimizadas para o menor custo por conversão.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    cor: "text-rose",
    bg: "bg-rose/10",
    bgHover: "group-hover:bg-rose/20",
    spot: "196, 137, 154",
    titulo: "Meta Ads",
    desc: "Facebook e Instagram com segmentação avançada, criativos que convertem e testes A/B constantes.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    cor: "text-gold",
    bg: "bg-gold/10",
    bgHover: "group-hover:bg-gold/20",
    spot: "201, 168, 76",
    titulo: "Gestão Comercial",
    desc: "Gestão estratégica com foco em captação, qualificação e conversão, criando um funil de vendas previsível e escalável.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
  {
    cor: "text-rose",
    bg: "bg-rose/10",
    bgHover: "group-hover:bg-rose/20",
    spot: "196, 137, 154",
    titulo: "Relatórios & Análise",
    desc: "Dashboards claros com as métricas que importam: CPL, ROAS, CAC e taxa de conversão.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    ),
  },
  {
    cor: "text-gold",
    bg: "bg-gold/10",
    bgHover: "group-hover:bg-gold/20",
    spot: "201, 168, 76",
    titulo: "Estratégia de Conteúdo",
    desc: "Criativos e copies persuasivos alinhados ao seu posicionamento de marca.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
      />
    ),
  },
  {
    cor: "text-rose",
    bg: "bg-rose/10",
    bgHover: "group-hover:bg-gold/20",
    spot: "196, 137, 154",
    titulo: "Filmmaker",
    desc: "Produção de vídeos estratégicos que capturam atenção, geram conexão e fortalecem a autoridade da sua marca.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h9a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
      />
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ServiceCard({ cor, bg, bgHover, spot, titulo, desc, icon, i }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
      style={{ "--spot-color": spot }}
      className="card card-spotlight rounded-2xl p-6 group"
    >
      <Motion.div
        whileHover={{ rotate: -8, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`w-11 h-11 rounded-xl ${bg} ${bgHover} transition-colors flex items-center justify-center mb-5`}
      >
        <svg
          className={`w-5 h-5 ${cor}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      </Motion.div>
      <h3 className="font-display text-lg font-semibold text-gray-100 mb-2">
        {titulo}
      </h3>
      <p className="font-body text-sm text-gray-400 leading-relaxed">
        {desc}
      </p>
    </Motion.div>
  );
}

export default function Servicos() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const chessY = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const gridY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* ── Fundo em camadas (parallax) ── */}
      <Motion.div
        aria-hidden
        style={{ y: chessY }}
        className="pointer-events-none absolute inset-0 -z-30 scale-[1.2] bg-[url('/background.png')] bg-cover bg-center opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 -z-30 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

      <Motion.div
        aria-hidden
        style={{
          y: gridY,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.06]"
      />

      <Motion.div aria-hidden style={{ y: orb1Y }} className="pointer-events-none absolute -top-24 -left-20 -z-10">
        <Motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="h-[420px] w-[420px] rounded-full bg-gold/25 blur-[120px] mix-blend-screen"
        />
      </Motion.div>
      <Motion.div aria-hidden style={{ y: orb2Y }} className="pointer-events-none absolute -bottom-32 -right-16 -z-10">
        <Motion.div
          animate={{ x: [0, -35, 25, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="h-[380px] w-[380px] rounded-full bg-rose/20 blur-[120px] mix-blend-screen"
        />
      </Motion.div>

      {/* ── Conteúdo na frente ── */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header da seção */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">
            O que fazemos
          </p>
          <Motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 48, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="divider"
          />
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
        </Motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.titulo} {...service} i={i} />
          ))}
        </div>

        {/* CTA */}
        <Motion.div
          custom={SERVICES.length}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="flex justify-center mt-12"
        >
          <WhatsAppButton
            text="Diagnóstico gratuito"
            arrow
            className="inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-sm font-extrabold shadow-[0_18px_40px_rgba(201,168,76,0.26)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(201,168,76,0.34)] md:text-base"
          />
        </Motion.div>
      </div>
    </section>
  );
}
