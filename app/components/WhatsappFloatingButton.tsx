import { getWhatsappUrl } from "@/app/lib/site";
import { WhatsappIcon } from "@/app/components/icons";

export function WhatsappFloatingButton() {
  return (
    <a
      href={getWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      data-cta-location="float"
      aria-label="Falar no WhatsApp com a Auto Escola Cancun"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 hover:bg-[var(--color-whatsapp-dark)]"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
