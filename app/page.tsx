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
    </>
  );
}
