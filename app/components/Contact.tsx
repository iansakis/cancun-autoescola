import Image from "next/image";
import { WhatsappButton } from "@/app/components/WhatsappButton";
import { InstagramButton } from "@/app/components/InstagramButton";
import { MapPinIcon } from "@/app/components/icons";
import { ADDRESS_LINES, INSTAGRAM_HANDLE, WHATSAPP_DISPLAY } from "@/app/lib/site";
import bgImage from "@/public/images/frota/frota-rua.jpeg";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "Av. Dr. José Maciel, 315, Jardim Maria Rosa, Taboão da Serra - SP, 06763-270",
  );

export function Contact() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-dark)] py-16 text-white sm:py-20">
      <Image
        src={bgImage}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-dark)] via-[var(--color-navy-dark)]/95 to-[var(--color-navy-dark)]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Auto Escola Cancun
        </h2>

        <address className="mt-4 space-y-0.5 text-[15px] not-italic text-white/70">
          {ADDRESS_LINES.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </address>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="maps"
          className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
        >
          <MapPinIcon className="h-4 w-4" />
          Ver no Google Maps
        </a>

        {/*
          Mapa incorporado (opcional, para adicionar depois se o custo de
          performance for aceitável):

          <iframe
            src="https://www.google.com/maps?q=Av.+Dr.+Jos%C3%A9+Maciel,+315,+Tabo%C3%A3o+da+Serra+-+SP&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Auto Escola Cancun"
          />
        */}

        <div className="mt-8 space-y-1 text-[15px] text-white/70">
          <p>
            WhatsApp:{" "}
            <span className="font-semibold text-white">
              {WHATSAPP_DISPLAY}
            </span>
          </p>
          <p>
            Instagram:{" "}
            <span className="font-semibold text-white">
              {INSTAGRAM_HANDLE}
            </span>
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsappButton location="contato" className="w-full sm:w-auto">
            Falar no WhatsApp
          </WhatsappButton>
          <InstagramButton location="contato" className="w-full sm:w-auto">
            Instagram
          </InstagramButton>
        </div>
      </div>
    </section>
  );
}
