import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://cancunautoescola.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Auto Escola Cancun | Habilitação em Taboão da Serra",
  description:
    "Há 26 anos formando condutores em Taboão da Serra. Primeira habilitação A e B, adição, reabilitação, cassação e pacotes de aulas.",
  keywords: [
    "auto escola em Taboão da Serra",
    "primeira habilitação",
    "CNH categoria A",
    "CNH categoria B",
    "auto escola Cancun",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/images/logo/logo-cancun.png",
    shortcut: "/images/logo/logo-cancun.png",
  },
  openGraph: {
    title: "Auto Escola Cancun | Habilitação em Taboão da Serra",
    description:
      "Há 26 anos formando condutores em Taboão da Serra. Primeira habilitação A e B, adição, reabilitação, cassação e pacotes de aulas.",
    url: siteUrl,
    siteName: "Auto Escola Cancun",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/frota/carro-traseira.jpeg",
        width: 1280,
        height: 960,
        alt: "Veículo da Auto Escola Cancun",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "Auto Escola Cancun",
  image: `${siteUrl}/images/logo/logo-cancun.png`,
  url: siteUrl,
  telephone: "+5511996065988",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dr. José Maciel, 315",
    addressLocality: "Taboão da Serra",
    addressRegion: "SP",
    postalCode: "06763-270",
    addressCountry: "BR",
  },
  areaServed: "Taboão da Serra",
  sameAs: ["https://www.instagram.com/cancun_auto_escola/"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
       <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16919657566"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16919657566');
</script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
