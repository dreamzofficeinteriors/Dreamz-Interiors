import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import SmoothScroll from "@/components/SmoothScroll";
import TalkToUs from "@/components/TalkToUs";
import Loader from "@/components/Loader";
import { PageTransitionProvider } from "@/components/PageTransition";
import { constructMetadata, generateOrganizationSchema } from "@/lib/seo";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#F5F3EF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = generateOrganizationSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;d.classList.add('js');try{d.dataset.intro=sessionStorage.getItem('dz-intro')?'done':'play'}catch(e){d.dataset.intro='done'}if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)d.dataset.intro='done'})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="font-sans bg-paper text-charcoal antialiased selection:bg-orange selection:text-white flex flex-col min-h-screen">
        <SkipLink />
        <SmoothScroll />
        <PageTransitionProvider>
          <Loader />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <TalkToUs />
          <Footer />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
