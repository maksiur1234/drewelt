import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Strona Główna | Drewelt Piotr Wiśniewski",
    description: "Nowoczesne zadaszenia tarasowe, wiaty samochodowe i altany ogrodowe.",
    alternates: {
      canonical: "https://www.drewelt.pl/o-nas",
    },
  };
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lvh text-center justify-center">
        {children}
      </div>
    </section>
  );
}
