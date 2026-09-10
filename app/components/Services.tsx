import { CheckIcon } from "@/app/components/icons";

const SERVICES = [
  {
    title: "Primeira Habilitação A e B",
    description:
      "Do zero até a sua primeira CNH, moto, carro ou as duas categorias.",
  },
  {
    title: "Adição de Categoria",
    description: "Já tem CNH? Adicione a categoria que ainda falta.",
  },
  {
    title: "Reabilitação",
    description: "Processo de reabilitação com todo o suporte necessário.",
  },
  {
    title: "Cassação",
    description: "Orientação completa para o processo de cassação.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-[var(--color-offwhite)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[var(--color-navy)] sm:text-3xl">
            Serviços
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-black/5 bg-white p-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-whatsapp)]/10 text-[var(--color-whatsapp-dark)]">
                <CheckIcon className="h-4 w-4" />
              </span>
              <h3 className="mt-3 text-[15.5px] font-bold text-[var(--color-navy)]">
                {service.title}
              </h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--color-navy)]/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
