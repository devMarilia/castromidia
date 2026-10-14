// components/WhatsAppButton.jsx
// Botão de CTA (WhatsApp) reutilizado em várias seções.

import { WhatsAppIcon } from "./icons";

const PHONE = "5511952992652";

export default function WhatsAppButton({
  text = "Falar com um especialista",
  message,
  arrow = false,
  iconClassName = "h-5 w-5",
  className = "",
  onClick,
}) {
  const href = message
    ? `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${PHONE}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={`btn-gold group ${className}`}
    >
      <WhatsAppIcon className={iconClassName} />
      <span>{text}</span>
      {arrow && (
        <span
          aria-hidden="true"
          className="text-lg transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </a>
  );
}
