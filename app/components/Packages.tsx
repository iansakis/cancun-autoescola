import Image, { type StaticImageData } from "next/image";
import { WhatsappButton } from "@/app/components/WhatsappButton";
import { CarIcon, MotorcycleIcon } from "@/app/components/icons";
import motoImage from "@/public/images/frota/motos-fachada.jpeg";
import carroImage from "@/public/images/frota/carro-traseira.jpeg";

const LESSON_COUNTS = [2, 5, 10, 15];

type PackageCategory = {
  id: string;
  badge: string;
  title: string;
  note?: string;
  image: StaticImageData;
  imagePosition: string;
  icon: typeof MotorcycleIcon;
  ctaLocation: string;
};

const CATEGORIES: PackageCategory[] = [
  {
    id: "moto",
    badge: "Categoria A",
    title: "Moto",
    note: "Manual ou automática",
    image: motoImage,
    imagePosition: "center 62%",
    icon: MotorcycleIcon,
    ctaLocation: "pacotes-moto",
  },
  {
    id: "carro",
    badge: "Categoria B",
    title: "Carro",
    image: carroImage,
    imagePosition: "center",
    icon: CarIcon,
    ctaLocation: "pacotes-carro",
  },
];

export function Packages() {
  return (
    <section id="pacotes" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[var(--color-navy)] sm:text-3xl">
            Escolha seu pacote de aulas
          </h2>
          <p className="mt-2 text-[15px] text-[var(--color-navy)]/60">
            Escolha a quantidade de aulas ideal para você e consulte as
            condições pelo WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 md:gap-8">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={category.image}
                    alt={`Veículo de ${category.title.toLowerCase()} da Auto Escola Cancun`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: category.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-[var(--color-navy)] shadow-sm">
                    <Icon className="h-3.5 w-3.5" />
                    {category.badge}
                  </span>
                  <h3
                    className="absolute bottom-4 left-5 text-3xl font-black tracking-tight text-white sm:text-4xl"
                    style={{
                      textShadow:
                        "-1px -1px 0 rgba(0,0,0,0.55), 1px -1px 0 rgba(0,0,0,0.55), -1px 1px 0 rgba(0,0,0,0.55), 1px 1px 0 rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.45), 0 6px 18px rgba(0,0,0,0.3)",
                    }}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="p-5 sm:p-6">
                  {category.note && (
                    <span className="mb-4 inline-flex items-center rounded-full bg-[var(--color-navy)]/10 px-3.5 py-1.5 text-[13.5px] font-bold text-[var(--color-navy)]">
                      {category.note}
                    </span>
                  )}

                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-wide text-[var(--color-navy)]/40">
                    Pacotes de aulas
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {LESSON_COUNTS.map((count) => (
                      <div
                        key={count}
                        className="rounded-2xl border border-[var(--color-navy)]/10 bg-[var(--color-offwhite)] px-2 py-3 text-center transition-colors group-hover:border-[var(--color-navy)]/20"
                      >
                        <div className="text-xl font-extrabold text-[var(--color-navy)]">
                          {count}
                        </div>
                        <div className="text-[11px] font-medium uppercase tracking-wide text-[var(--color-navy)]/50">
                          aulas
                        </div>
                      </div>
                    ))}
                  </div>

                  <WhatsappButton
                    location={category.ctaLocation}
                    className="mt-5 w-full"
                  >
                    Consultar valores no WhatsApp
                  </WhatsappButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
