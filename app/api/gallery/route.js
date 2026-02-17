export const dynamic = "force-dynamic";

import fs from "fs";
import path from "path";

const IMAGE_RE = /\.(jpg|jpeg|png|webp|gif)$/i;

/**
 * Zwraca listę URL-i do obrazków z katalogu w /public
 * np. publicSubDir = "galeria/wiaty-wolnostojace"
 * => ["/galeria/wiaty-wolnostojace/1.png", ...]
 */
const getImagesFromPublic = (publicSubDir) => {
  const absDir = path.join(process.cwd(), "public", ...publicSubDir.split("/"));

  try {
    const files = fs.readdirSync(absDir);

    return files
      .filter((file) => IMAGE_RE.test(file))
      .map((file) => `/${publicSubDir}/${file}`.replace(/\\/g, "/"));
  } catch (err) {
    console.error("Błąd odczytu katalogu:", absDir, err);
    return [];
  }
};

export async function GET() {
  const gallery = [
    {
      title: "Wiaty przyścienne",
      images: getImagesFromPublic("galeria/wiaty-przyscienne"),
    },
    {
      title: "Wiaty wolnostojące",
      images: getImagesFromPublic("galeria/wiaty-wolnostojace"),
    },
    {
      title: "Zadaszenia z prostym spadkiem na belce",
      images: getImagesFromPublic("galeria/zadaszenia-prosty-spadek-belka"),
    },
    {
      title: "Zadaszenia przyścienne na łukach",
      images: getImagesFromPublic("galeria/zadaszenia-przyscienne-na-lukach"),
    },
    {
      title: "Zadaszenia przyścienne z prostym spadkiem",
      images: getImagesFromPublic("galeria/zadaszenia-przyscienne-prosty-spadek"),
    },
  ];

  return new Response(JSON.stringify(gallery), {
    headers: { "Content-Type": "application/json" },
  });
}
