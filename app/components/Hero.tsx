import Image from "next/image";
import { WhatsappButton } from "@/app/components/WhatsappButton";
import heroImage from "@/public/images/frota/carro-entardecer.jpeg";
import logo from "@/public/images/logo/logo-cancun.png";

const STATS = [
  { value: "26 anos", label: "formando condutores" },
  { value: "Milhares", label: "de CNHs entregues" },
  { value: "+100", label: "avaliações no Google" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-[var(--color-offwhite)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-14 sm:px-6 sm:pt-14 sm:pb-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pt-20 lg:pb-24">
        <div className="order-2 lg:order-1">
          <Image
            src={logo}
            alt="Auto Escola Cancun"
            priority
            className="mb-5 h-auto w-[130px] sm:w-[150px] lg:w-[180px]"
          />

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-navy)] sm:text-4xl lg:text-[42px]">
            26 anos formando condutores em Taboão da Serra.
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--color-navy)]/70 sm:text-lg">
            Aulas de moto e carro para primeira habilitação, adição de
            categoria, reabilitação e cassação, com instrutores experientes e
            acompanhamento em cada etapa até a sua CNH.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsappButton location="hero" className="w-full sm:w-auto">
              Falar no WhatsApp
            </WhatsappButton>
            <a
              href="#pacotes"
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-navy)]/15 bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--color-navy)] transition-colors hover:border-[var(--color-navy)]/30 sm:w-auto"
            >
              Ver pacotes
            </a>
          </div>

          <dl className="mt-9 grid grid-cols-3 gap-3 border-t border-[var(--color-navy)]/10 pt-6 sm:max-w-md">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-lg font-extrabold text-[var(--color-navy)] sm:text-xl">
                  {stat.value}
                </dd>
                <dd className="mt-0.5 text-[12.5px] leading-snug text-[var(--color-navy)]/60 sm:text-[13px]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl shadow-[var(--color-navy)]/15 sm:max-w-md lg:max-w-none">
            <Image
              src={heroImage}
              alt="Veículo da Auto Escola Cancun usado nas aulas práticas"
              fill
              priority
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-navy-dark)]/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
