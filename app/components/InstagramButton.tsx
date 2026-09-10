import { INSTAGRAM_URL } from "@/app/lib/site";
import { InstagramIcon } from "@/app/components/icons";

type Props = {
  /** Identifica em qual seção do site o clique aconteceu. */
  location: string;
  children: React.ReactNode;
  className?: string;
};

export function InstagramButton({ location, children, className = "" }: Props) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="instagram"
      data-cta-location={location}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm shadow-black/10 transition-transform hover:scale-[1.02] ${className}`}
    >
      <InstagramIcon className="h-5 w-5 shrink-0" />
      {children}
    </a>
  );
}
