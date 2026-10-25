import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { CnhBrasilProcess } from "@/app/components/CnhBrasilProcess";
import { Packages } from "@/app/components/Packages";
import { Services } from "@/app/components/Services";
import { StudentSuccess } from "@/app/components/StudentSuccess";
import { Reviews } from "@/app/components/Reviews";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { WhatsappFloatingButton } from "@/app/components/WhatsappFloatingButton";
import { PromoPopup } from "@/app/components/PromoPopup";
import { getWhatsappUrl } from "@/app/lib/site";

const HALLOWEEN_MESSAGE =
  "Olá! Vi a promoção de Halloween no site e gostaria de saber mais.";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CnhBrasilProcess />
        <Packages />
        <Services />
        <StudentSuccess />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloatingButton />
      <PromoPopup
        imageSrc="/images/logo/WhatsApp%20Image%202026-10-24%20at%2023.12.00.jpeg"
        imageAlt="Promoção de Halloween da Auto Escola Cancun"
        href={getWhatsappUrl(HALLOWEEN_MESSAGE)}
        storageKey="cancun-promo-halloween-fechado"
        // 01/11/2026 00:00 no horário de Brasília (UTC-3)
        endsAt="2026-11-01T00:00:00-03:00"
      />
    </>
  );
}
