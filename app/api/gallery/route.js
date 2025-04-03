export const dynamic = "force-dynamic";

import fs from "fs";
import path from "path";

const getImagesFromDirectory = (directoryPath) => {
  try {
    const files = fs.readdirSync(directoryPath);
    return files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map((file) => `/${directoryPath.split(path.sep).pop()}/${file}`);
  } catch (err) {
    console.error("Błąd odczytu katalogu", err);
    return [];
  }
};

export async function GET() {
  const zadaszeniaImages = getImagesFromDirectory(
    path.join(process.cwd(), "public", "zadaszenia_na_lukach"),
  );
  const deskaImages = getImagesFromDirectory(
    path.join(process.cwd(), "public", "zadaszenia_prosty_spadek"),
  );
  const rodzajeDesekImages = getImagesFromDirectory(
    path.join(process.cwd(), "public", "kolory_desek"),
  );
  const zadaszeniaProstySpadekImages = getImagesFromDirectory(
    path.join(process.cwd(), "public", "obrazki"),
  );

  const gallery = [
    {
      title: "Zadaszenia wolnostojące na łukach",
      images: zadaszeniaImages,
    },
    {
      title: "Zadaszenia przyścienne na łukach",
      images: zadaszeniaImages,
    },
    {
      title: "Zadaszenia przyścienne z prostym spadkiem",
      images: zadaszeniaProstySpadekImages,
    },
    {
      title: "Zadaszenia z prostym spadkiem na belce",
      images: zadaszeniaProstySpadekImages,
    },
  ];

  return new Response(JSON.stringify(gallery), {
    headers: { "Content-Type": "application/json" },
  });
}
