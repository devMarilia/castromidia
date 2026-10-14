// components/Cases.jsx
// Sem background próprio.

import { motion as Motion } from "framer-motion";
import CountUp from "./CountUp";

const RESULTADOS = [
  {
    desc: "Campanhas otimizadas para gerar leads qualificados com rapidez.",
    valorNum: 210,
    prefix: "+",
    suffix: "%",
    legenda: "aumento em leads gerados",
  },
  {
    desc: "Testes e otimização contínua reduzem o custo de cada lead.",
    valorNum: 6.2,
    prefix: "R$ ",
    decimals: 2,
    legenda: "menor custo por lead",
  },
  {
    desc: "Experiência consolidada em tráfego pago, vendas e estratégia.",
    valorNum: 14,
    prefix: "+",
    legenda: "anos de experiência",
  },
  {
    desc: "Atuação em diferentes nichos com acompanhamento próximo.",
    valorNum: 3,
    prefix: "+",
    legenda: "segmentos atendidos",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Cases() {
  return (
    <section id="cases" className="px-6 py-36 md:py-44 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <p className="font-body text-sm tracking-widest uppercase text-gold mb-3">
            Resultados reais
          </p>
          <div className="divider" />
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold">
            Resultados <span className="text-gradient">que impactam</span>
          </h2>
          <p className="font-body text-base md:text-lg text-gray-400 max-w-2xl mx-auto mt-6">
            Acompanhamento próximo e otimização contínua que transformam
            investimento em números concretos.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10">
          {RESULTADOS.map(({ desc, valorNum, prefix, suffix, decimals, legenda }, i) => (
            <Motion.div
              key={legenda}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={itemVariants}
              className="flex flex-col items-start text-left gap-10 px-6 lg:px-8 first:pl-0 border-b border-gold/10 pb-10 last:border-b-0 lg:border-b-0 lg:pb-0 lg:border-r lg:last:border-r-0"
            >
              <p className="font-body text-base text-gray-400 leading-relaxed max-w-[260px]">
                {desc}
              </p>
              <div>
                <CountUp
                  value={valorNum}
                  prefix={prefix}
                  suffix={suffix}
                  decimals={decimals}
                  className="font-display text-5xl md:text-6xl font-bold text-gradient whitespace-nowrap"
                />
                <p className="font-body text-sm text-gray-500 mt-3">
                  {legenda}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
