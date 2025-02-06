import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
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
      <head />
      <body
        className={clsx(
          "min-h-screen w-full bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col min-h-screen w-full">
            <Navbar />
            <main className="w-full max-w-none px-6 flex-grow">
              {children}
            </main>
              <footer className="w-full flex items-center justify-center py-4 bg-[#262420]">
                <Link
                  isExternal
                  href="https://heroui.com?utm_source=next-app-template"
                  title="heroui.com homepage"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm font-medium text-[#e9a749]">
                    Wszystkie prawa zastrzeżone
                  </span>
                  <span className="text-sm font-bold text-[#e9a749]">
                    Maksymilian Robak
                  </span>
                </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
