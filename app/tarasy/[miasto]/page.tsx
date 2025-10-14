import { seoContentList } from "@/app/lib/seoContent";
import MiastoContent from "./MiastoContent";

const cityMapping: Record<string, string> = {
  poznan: "Poznań",
  leszno: "Leszno",
  wrzesnia: "Września",
  gniezno: "Gniezno",
  wroclaw: "Wrocław",
  warszawa: "Warszawa",
  konin: "Konin",
};

export async function generateMetadata({ params }: { params: any }) {
  const miasto = params.miasto;
  const decoded = decodeURIComponent(cityMapping[miasto] || miasto.replace(/-/g, " "));
  const content = seoContentList.find((item) => item.url === miasto);

  return {
    title: content?.metaTitle || `Deska tarasowa ${decoded}`,
    description: content?.description || ``,
    alternates: {
      canonical: content?.url
        ? `https://www.drewelt.pl/tarasy/${content.url}`
        : `https://www.drewelt.pl/tarasy/${miasto}`,
    },
  };
}

export default function MiastoPage({ params }: { params: any }) {
  return <MiastoContent params={params} />;
}
