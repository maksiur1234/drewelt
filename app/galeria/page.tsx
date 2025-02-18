"use client";
import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/modal";

interface GallerySection {
  title: string;
  images: string[];
}

export default function GaleriaPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gallerySections, setGallerySections] = useState<GallerySection[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");

  const openGallery = (images: string[], index: number, title: string) => {
    setSelectedImages(images);
    setCurrentImage(index);
    setCurrentTitle(title);
    onOpen();
  };

  useEffect(() => {
    // Fetch data from API
    const fetchGalleryData = async () => {
      try {
        const response = await fetch("/api/gallery");
        const data = await response.json();
        setGallerySections(data);
      } catch (error) {
        console.error("Błąd podczas ładowania galerii", error);
      }
    };

    fetchGalleryData();
  }, []);

  const prevImage = () =>
    setCurrentImage((prev) =>
      prev > 0 ? prev - 1 : selectedImages.length - 1,
    );
  const nextImage = () =>
    setCurrentImage((prev) =>
      prev < selectedImages.length - 1 ? prev + 1 : 0,
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Galeria naszych realizacji
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Zapraszamy do obejrzenia zdjęć wykonanych przez nas konstrukcji.
      </p>
      <Divider className="mb-8" />

      {gallerySections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {section.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {section.images.slice(0, 5).map((image, index) => (
              <div key={index} className="cursor-pointer">
                <Image
                  alt={section.title}
                  className="w-full h-40 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  src={image}
                  onClick={() =>
                    openGallery(section.images, index, section.title)
                  }
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Button
              color="success"
              onPress={() => openGallery(section.images, 0, section.title)}
            >
              Zobacz więcej
            </Button>
          </div>
        </section>
      ))}

      <Modal isOpen={isOpen} size="full" onClose={onClose}>
        <ModalContent>
          <ModalHeader className="text-center justify-center text-2xl font-semibold">
            {currentTitle}
          </ModalHeader>

          <ModalBody className="flex items-center justify-center relative">
            <Button
              className="absolute left-4 md:left-10 bg-black/50 text-white p-3 rounded-full shadow-lg hover:bg-black/70 transition"
              onClick={prevImage}
            >
              ←
            </Button>

            <Image
              alt="Galeria"
              className="max-w-3xl w-full rounded-lg shadow-lg"
              src={selectedImages[currentImage]}
            />

            <Button
              className="absolute right-4 md:right-10 bg-black/50 text-white p-3 rounded-full shadow-lg hover:bg-black/70 transition"
              onClick={nextImage}
            >
              →
            </Button>
          </ModalBody>

          <ModalFooter className="flex justify-center">
            <Button color="danger" onPress={onClose}>
              Zamknij
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
