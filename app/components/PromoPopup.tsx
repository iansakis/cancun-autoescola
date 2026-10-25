"use client";

import { useCallback, useEffect, useState } from "react";

type PromoPopupProps = {
  /** Caminho da imagem em /public (ex.: "/images/promocoes/halloween.png") */
  imageSrc: string;
  imageAlt: string;
  /** Link aberto ao clicar na imagem */
  href: string;
  /** Chave usada no localStorage para lembrar que o visitante fechou */
  storageKey: string;
  /** Tempo até abrir, em milissegundos */
  delayMs?: number;
  /** Por quanto tempo não exibir de novo após fechar, em horas */
  hideForHours?: number;
  /** Data/hora (ISO com fuso) a partir da qual a promoção deixa de aparecer */
  endsAt?: string;
};

function hasEnded(endsAt?: string) {
  return endsAt ? Date.now() >= new Date(endsAt).getTime() : false;
}

function wasDismissedRecently(storageKey: string, hideForHours: number) {
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return false;
    const dismissedAt = Number(saved);
    return Date.now() - dismissedAt < hideForHours * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

function saveDismissal(storageKey: string) {
  try {
    window.localStorage.setItem(storageKey, String(Date.now()));
  } catch {
    // localStorage indisponível (ex.: modo privado): apenas fecha
  }
}

export function PromoPopup({
  imageSrc,
  imageAlt,
  href,
  storageKey,
  delayMs = 2000,
  hideForHours = 24,
  endsAt,
}: PromoPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hasEnded(endsAt)) return;
    if (wasDismissedRecently(storageKey, hideForHours)) return;
    const timer = window.setTimeout(() => {
      if (!hasEnded(endsAt)) setOpen(true);
    }, delayMs);
    return () => window.clearTimeout(timer);
  }, [storageKey, delayMs, hideForHours, endsAt]);

  const close = useCallback(() => {
    saveDismissal(storageKey);
    setOpen(false);
  }, [storageKey]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
      onClick={close}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
    >
      <div
        className="relative inline-block"
        onClick={(event) => event.stopPropagation()}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp"
          data-cta-location="promo-popup"
          onClick={close}
          className="block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- imagem exibida sem recorte nem reprocessamento */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="block h-auto max-h-[calc(100dvh-2rem)] w-auto max-w-[calc(100vw-2rem)] rounded-lg object-contain shadow-2xl"
          />
        </a>
        <button
          type="button"
          onClick={close}
          aria-label="Fechar promoção"
          className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-bold leading-none text-black shadow-lg transition-transform hover:scale-110"
        >
          ×
        </button>
      </div>
    </div>
  );
}
