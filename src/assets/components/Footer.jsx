// components/Footer.jsx
// Sem background — apenas borda superior sutil.

import WhatsAppButton from "./WhatsAppButton";
import { WhatsAppIcon, InstagramIcon, EmailIcon } from "./icons";

const NAV_LINKS = [
  { label: 'Sobre',       href: '#sobre'       },
  { label: 'Serviços',    href: '#servicos'    },
  { label: 'Cases',       href: '#cases'       },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato',     href: '#contato'     },
];

const CONTATOS = [
  { label: '11 96042-5773', href: 'https://wa.me/5511952992652', Icon: WhatsAppIcon },
  { label: '@castro.midia', href: 'https://www.instagram.com/castro.midia/', Icon: InstagramIcon },
  { label: 'contato@castromidia.com', href: 'mailto:contato@castromidia.com', Icon: EmailIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 px-6 pt-20 pb-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          {/* Marca */}
          <div className="space-y-5">
            <a href="#hero" className="inline-block">
              <img src="/logo.png" alt="Castro Mídia" className="w-24" />
            </a>
            <p className="font-body text-sm text-gray-400 leading-relaxed max-w-xs">
              Estratégias de tráfego pago e gestão comercial para empresas
              que querem crescer com previsibilidade.
            </p>
            <WhatsAppButton
              text="Falar com a gente"
              iconClassName="w-4 h-4"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold"
            />
          </div>

          {/* Navegação */}
          <div>
            <p className="font-display text-sm font-semibold text-gray-200 uppercase tracking-wide mb-5">
              Navegação
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="font-body text-sm text-gray-400 hover:text-gold transition-colors w-fit"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <p className="font-display text-sm font-semibold text-gray-200 uppercase tracking-wide mb-5">
              Contato
            </p>
            <div className="flex flex-col gap-3">
              {CONTATOS.map((contato) => {
                const { label, href, Icon } = contato;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-2.5 w-fit"
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="h-px bg-gold/10 my-10" />

        {/* Rodapé inferior */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Castro Mídia. Todos os direitos
            reservados.
          </p>
          <a
            href="https://annalixdigital.com.br/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-gold"
          >
            Desenvolvido por{" "}
            <span className="font-medium text-gold">Annalix Digital</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
