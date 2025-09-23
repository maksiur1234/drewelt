import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import Script from "next/script";
import clsx from "clsx";

import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import HomepageCanonical from "./glowna/HomeCanonical";
import Home from "./page";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pl">
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N7QN5LSP');
          `}
        </Script>
        
        <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-LH21F3ETF6`}
        strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LH21F3ETF6', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <HomepageCanonical />
        <link rel="apple-touch-icon" href="drewelt-apple-touch.png"></link>
        <Script id="local-schema" strategy="afterInteractive">
          {`
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Drewelt",
            "image": "https://www.drewelt.pl/zadaszenia_prosty_spadek_na_belce/Pozna%C5%841.jpg",
            "@id": "",
            "url": "https://www.drewelt.pl/",
            "telephone": "+48 887 400 824",
            "email": "drewelt@drewelt.com",
            "logo": "https://www.drewelt.pl/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Pliszki 18",
              "addressLocality": "Rakownia",
              "postalCode": "62-095",
              "addressCountry": "PL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.5568827,
              "longitude": 17.0383064
            }`
          }
        </Script>
      </head>
      <body
        className={clsx(
          "min-h-screen w-full bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7QN5LSP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen w-full">
            <Navbar />
            <main className="w-full max-w-none flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
