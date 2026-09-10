import Image from "next/image";
import { WhatsappButton } from "@/app/components/WhatsappButton";
import logo from "@/public/images/logo/logo-cancun.png";

const NAV_LINKS = [
  { href: "#pacotes", label: "Pacotes" },
  { href: "#servicos", label: "Serviços" },
  { href: "#avaliacoes", label: "Avaliações" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6">
        <a href="#topo" className="flex shrink-0 items-center gap-2">
          <Image
            src={logo}
            alt="Auto Escola Cancun"
            className="h-10 w-auto sm:h-12"
            priority
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[var(--color-navy)]/80 transition-colors hover:text-[var(--color-navy)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsappButton
          location="header"
          className="px-4 py-2.5 text-[13px] sm:px-6 sm:py-3.5 sm:text-[15px]"
        >
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </WhatsappButton>
      </div>
    </header>
  );
}
