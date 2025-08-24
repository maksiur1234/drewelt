import { seoContentList } from "@/app/lib/seoContent";
import MiastoContent from "./MiastoContent";

const cityMapping: Record<string, string> = {
  poznan: "Poznań",
  leszno: "Leszno",
  wrzesnia: "Września",
  gniezno: "Gniezno",
  wroclaw: "Wrocław",
};

export async function generateMetadata({ params }: { params: any }) {
  const miasto = params.miasto;
  const decoded = decodeURIComponent(cityMapping[miasto] || miasto.replace(/-/g, " "));
  const content = seoContentList.find((item) => item.url === decoded);

  return {
    title: content?.metaTitle || `Deska tarasowa ${decoded}`,
    description: content?.description || ``,
    alternates: {
      canonical: `https://www.drewelt.pl/tarasy/${content?.url}`,
    },
  };
}

export default function MiastoPage({ params }: { params: any }) {
  return <MiastoContent params={params} />;
}
