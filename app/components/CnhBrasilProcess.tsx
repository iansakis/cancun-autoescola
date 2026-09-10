import Image from "next/image";
import { WhatsappButton } from "@/app/components/WhatsappButton";
import { CheckIcon } from "@/app/components/icons";
import cnhBrasilImage from "@/public/images/logo/WhatsApp-Image-2025-12-10-at-10.17.50.jpeg";

export function CnhBrasilProcess() {
  return (
    <section id="cnh-brasil" className="bg-[var(--color-offwhite)] py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-whatsapp)]/10 px-3.5 py-1.5 text-[12.5px] font-bold uppercase tracking-wide text-[var(--color-whatsapp-dark)]">
            <CheckIcon className="h-3.5 w-3.5" />
            Já disponível na Cancun
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-[var(--color-navy)] sm:text-3xl lg:text-[34px]">
            O novo processo da CNH do Brasil já está na Cancun
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[var(--color-navy)]/70 sm:text-lg lg:max-w-md">
            A Cancun auto escola já está realizando o novo processo da CNH do
            Brasil. Se você iniciou sua habilitação pelo novo modelo, pode
            fazer suas aulas práticas com a gente. Escolha o pacote de aulas
            que melhor atende à sua necessidade e conte com todo o suporte da
            Cancun durante o processo.
          </p>

          <div className="mt-7 flex justify-center lg:justify-start">
            <WhatsappButton location="cnh-brasil" className="w-full sm:w-auto">
              Quero fazer minhas aulas
            </WhatsappButton>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-black/5 bg-white p-10 shadow-xl shadow-[var(--color-navy)]/10 sm:p-12 lg:max-w-md">
          <div className="relative aspect-square w-full">
            <Image
              src={cnhBrasilImage}
              alt="Logo oficial da CNH do Brasil"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
