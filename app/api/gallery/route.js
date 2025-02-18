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
    path.join(process.cwd(), "public", "deska_kompozytowa"),
  );
  const rodzajeDesekImages = getImagesFromDirectory(
    path.join(process.cwd(), "public", "kolory_desek"),
  );
  const pozostaleImages = getImagesFromDirectory(
    path.join(process.cwd(), "public", "obrazki"),
  );

  const gallery = [
    {
      title: "Zadaszenia na łukach",
      images: zadaszeniaImages,
    },
    {
      title: "Deska kompozytowa",
      images: deskaImages,
    },
    {
      title: "Rodzaje desek",
      images: rodzajeDesekImages,
    },
    {
      title: "Pozostałe",
      images: pozostaleImages,
    },
  ];

  return new Response(JSON.stringify(gallery), {
    headers: { "Content-Type": "application/json" },
  });
}
