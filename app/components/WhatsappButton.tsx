"use client";
import { getWhatsappUrl } from "@/app/lib/site";
import { WhatsappIcon } from "@/app/components/icons";

type Props = {
  /** Identifica em qual seção do site o clique aconteceu (usado para rastrear conversões por local). */
  location: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showIcon?: boolean;
};

const VARIANT_CLASSES: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-[var(--color-whatsapp)] text-white hover:bg-[var(--color-whatsapp-dark)] shadow-sm shadow-black/10",
  secondary:
    "bg-white text-[var(--color-navy)] border border-[var(--color-navy)]/15 hover:border-[var(--color-navy)]/30 hover:bg-[var(--color-navy)]/[0.03]",
  ghost:
    "bg-white/10 text-white border border-white/25 hover:bg-white/15",
};

export function WhatsappButton({
  location,
  children,
  variant = "primary",
  className = "",
  showIcon = true,
}: Props) {
  return (
    <a
      href={getWhatsappUrl()}
      onClick={() => {
if (typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === "function") {
   (window as Window & { gtag: (...args: unknown[]) => void }).gtag(
      send_to: "AW-16919657566/OZRhCNjQgJYdEN749YM",
      value: 1.0,
      currency: "BRL",
    });
  }
}}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      data-cta-location={location}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {showIcon && <WhatsappIcon className="h-5 w-5 shrink-0" />}
      {children}
    </a>
  );
}
