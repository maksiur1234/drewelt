export const dynamic = "force-dynamic";

import path from "path";
import fs from "fs";

export async function GET() {
  try {
    const imagesFolder = path.join(process.cwd(), "public/obrazki");
    const imageFiles = fs.readdirSync(imagesFolder);

    const imagePaths = imageFiles
      .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/))
      .map((file) => `/obrazki/${file}`);

    return new Response(JSON.stringify(imagePaths), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Błąd API:", error);
    return new Response(
      JSON.stringify({ error: "Nie udało się pobrać obrazów." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}