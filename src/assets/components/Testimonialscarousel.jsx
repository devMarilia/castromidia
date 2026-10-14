// components/TestimonialsCarousel.jsx
// Faixa de imagens de depoimentos (prints do WhatsApp), largura cheia da tela.
// Sem background próprio — herda o tema global como Cases.jsx.
import { useEffect, useRef, useState, useCallback } from "react";
import CTAWhatsapp from "./CTAWhatsapp";

/* ─── Adicione suas imagens aqui ────────────────────────────────────────────
   Substitua src pelo caminho real da imagem (import ou URL).
   O href de cada item é o link que abre ao clicar na imagem — use "#"
   para ancorar internamente ou uma URL externa.
   ─────────────────────────────────────────────────────────────────────────── */
const IMAGENS = [
  { src: "/relato1.jpeg", alt: "Depoimento 1", href: "#" },
  { src: "/relato2.jpeg", alt: "Depoimento 2", href: "#" },
  { src: "/relato3.jpeg", alt: "Depoimento 3", href: "#" },
  { src: "/relato4.jpeg", alt: "Depoimento 4", href: "#" },
  { src: "/relato5.jpeg", alt: "Depoimento 5", href: "#" },
];

/* ─── Card de imagem ─────────────────────────────────────────────────────── */
function ImageCard({ item, onImageLoad }) {
  return (
    <div className="snap-start shrink-0 w-[80%] sm:w-[48%] lg:w-[31%] xl:w-[23%]">
      <a
        href={item.href}
        aria-label={item.alt}
        className="block rounded-2xl overflow-hidden border border-gold/20
                   transition-all duration-300
                   hover:border-gold/60 hover:scale-[1.02]"
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-auto object-cover"
          draggable={false}
          onLoad={onImageLoad}
        />
      </a>
    </div>
  );
}

/* ─── Componente principal ─────────────────────────────────────────────────── */
export default function TestimonialsCarousel() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 1
    );
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByAmount = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id="depoimentos" className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header — idêntico ao Cases.jsx ──────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-widest uppercase text-gold mb-2">
            Depoimentos
          </p>
          <div className="divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            O que nossos clientes{" "}
            <span className="text-gradient">estão falando</span>
          </h2>
        </div>
      </div>

      {/* ── Faixa de ponta a ponta ─────────────────────────────────────────── */}
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="flex items-start gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:px-10 lg:px-16 pb-2"
        >
          {IMAGENS.map((item) => (
            <ImageCard key={item.src} item={item} onImageLoad={updateArrows} />
          ))}
        </div>

        {canScrollLeft && (
          <button
            onClick={() => scrollByAmount(-1)}
            aria-label="Anterior"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gold/30 bg-black/60 backdrop-blur text-gold items-center justify-center text-xl transition-all duration-200 hover:border-gold/70 hover:bg-black/80 active:scale-95"
          >
            ‹
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scrollByAmount(1)}
            aria-label="Próximo"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-gold/30 bg-black/60 backdrop-blur text-gold items-center justify-center text-xl transition-all duration-200 hover:border-gold/70 hover:bg-black/80 active:scale-95"
          >
            ›
          </button>
        )}
      </div>

      <CTAWhatsapp />
    </section>
  );
}
