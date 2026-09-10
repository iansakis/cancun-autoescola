import Image from "next/image";
import studentImage from "@/public/images/alunos/aluno-aprovado.jpeg";

export function StudentSuccess() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl shadow-[var(--color-navy)]/15 lg:mx-0">
          <Image
            src={studentImage}
            alt="Aluno comemorando a aprovação e a nova CNH"
            fill
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-[var(--color-whatsapp)] px-3 py-1 text-[12px] font-bold text-white">
            Aprovado!
          </span>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-extrabold tracking-tight text-[var(--color-navy)] sm:text-3xl">
            Mais um aluno com a CNH em mãos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-navy)]/70 sm:text-lg">
            É esse momento que move o nosso trabalho todos os dias. Dedicação
            nas aulas, orientação de perto e apoio até a aprovação para você
            viver essa mesma conquista.
          </p>
        </div>
      </div>
    </section>
  );
}
