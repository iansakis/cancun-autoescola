import { StarIcon } from "@/app/components/icons";

const REVIEWS = [
  {
    name: "Stela Grassmann",
    text: "Melhor auto escola! Tirei minha CNH AB com eles e passei de primeira nas duas provas! Instrutores Ian e Thiago muito atenciosos e pacientes.",
  },
  {
    name: "Letícia Bernardo",
    text: "Atendimento atencioso do início ao fim: a Débora explicou cada etapa do processo e tirou todas as minhas dúvidas. Nas aulas, o instrutor Ivan se destacou pela calma, didática e pelas dicas.",
  },
  {
    name: "Luiz Miguel Franco",
    text: "Uma ótima experiência em tirar a primeira habilitação com eles, um pessoal de excelente qualidade, atenciosos e muito profissionais, tirei minha habilitação em apenas 2 meses.",
  },
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-[var(--color-offwhite)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[var(--color-navy)] sm:text-3xl">
            Quem escolhe a Cancun, recomenda.
          </h2>
          <p className="mt-2 text-[15px] font-medium text-[var(--color-navy)]/60">
            +100 avaliações no Google
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-black/5 bg-white p-6"
            >
              <div className="flex gap-0.5 text-[var(--color-brand-yellow)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-[14.5px] leading-relaxed text-[var(--color-navy)]/75">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[14px] font-semibold text-[var(--color-navy)]">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
