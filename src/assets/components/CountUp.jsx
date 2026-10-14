// components/CountUp.jsx
// Número que conta de 0 até o valor final quando entra na tela.

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

function formatNumber(value, decimals) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
}) {
  const spanRef = useRef(null);
  const isInView = useInView(spanRef, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;
    const node = spanRef.current;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent = `${prefix}${formatNumber(latest, decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [isInView, value, prefix, suffix, decimals, duration]);

  return (
    <span ref={spanRef} className={className}>
      {prefix}
      {formatNumber(0, decimals)}
      {suffix}
    </span>
  );
}
