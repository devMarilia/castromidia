// components/Header.jsx
// Fixo no topo, fundo transparente (herda o canvas do body).
// Backdrop-blur leve para separar visualmente sem criar um novo "layer" de cor.

import { useState, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';

const NAV_LINKS = [
  { label: 'Sobre',       href: '#sobre'       },
  { label: 'Serviços',    href: '#servicos'    },
  { label: 'Cases',       href: '#cases'       },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato',     href: '#contato'     },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  // Adiciona borda sutil ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  // Trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        backdrop-blur-xl
        ${scrolled
          ? 'border-b border-white/10 bg-black/55 shadow-[0_12px_40px_rgba(0,0,0,0.35)]'
          : 'border-b border-transparent bg-black/20'}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between gap-4">

        <a href="#hero" className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
          <img src="/logo.png" alt="Castro Mídia" className="h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 px-2 py-3">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        <WhatsAppButton
          text="Fale conosco"
          className="hidden md:inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tracking-[0.08em] shadow-[0_14px_28px_rgba(201,168,76,0.22)]"
        />

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] p-3 text-gold shadow-[0_10px_24px_rgba(0,0,0,0.24)]"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
    </header>

    {mobileOpen && (
      <div className="md:hidden fixed inset-0 z-40 bg-black/97 backdrop-blur-xl overflow-y-auto">
        <nav className="flex flex-col gap-6 px-6 pt-28 pb-10">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link text-lg"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <WhatsAppButton
            text="Fale conosco"
            onClick={closeMenu}
            className="inline-flex justify-center items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold mt-4"
          />
        </nav>
      </div>
    )}
    </>
  );
}
