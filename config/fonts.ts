import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });


import { Roboto, Montserrat } from "next/font/google";

// Font do treści (czytelny, neutralny)
export const fontSans = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // normal, medium, bold
  variable: "--font-sans",
});

// Font do nagłówków lub wyróżnień (bardziej charakterystyczny)
export const fontMono = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // normal → black
  variable: "--font-heading",
});
