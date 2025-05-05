import { seoContentList } from "@/app/lib/seoContent";
import { notFound } from "next/navigation";

type MiastoProps = {
  params: Promise<{ miasto: string }>;
};

export async function generateMetadata({ params }: MiastoProps) {
  const { miasto } = await params;
  const content = seoContentList.find((item) => item.url === miasto);

  return {
    title: content?.metaTitle || `Deska kompozytowa ${miasto} | Testowa strona`,
  };
}

export default async function MiastoPage({ params }: MiastoProps) {
  const { miasto } = await params;
  const content = seoContentList.find((item) => item.url === miasto);

  if (!content) return notFound();

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-12 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">{content.h1}</h1>
      <div
        className="text-base leading-7 text-gray-700 space-y-4"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </div>
  );
}