'use client'

import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";

export default function GaleriaPage() {
  const gallerySections = [
    {
      title: "Zadaszenia na łukach",
      images: [
        "https://drewelt.pl/images/galerie/36/zadaszenia-na-lukach.webp", 
        "https://drewelt.pl/images/galerie/36/zadaszenia-na-lukach-2.webp",
        "https://drewelt.pl/images/galerie/36/zadaszenia-na-lukach-4.webp",
        "https://drewelt.pl/images/galerie/36/zadaszenia-na-lukach-5.webp",
        "https://drewelt.pl/images/galerie/36/zadaszenia-na-lukach-6.webp",
        "https://drewelt.pl/images/galerie/36/zadaszenia-na-lukach-7.webp",
        "https://drewelt.pl/images/galerie/36/zadaszenia-na-lukach-8.webp",
        "https://drewelt.pl/images/galerie/36/zadaszenia-na-lukach-9.webp",
        "https://drewelt.pl/images/galerie/36/zadaszenia-na-lukach-10.webp"
        ],
    },
    {
      title: "Zadaszenie z prostym spadkiem",
      images: [
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem.webp",
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-2.webp",
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-3.webp",
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-4.webp",
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-5.webp",
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-6.webp",
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-7.webp",
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-8.webp",
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-9.webp",
        "https://drewelt.pl/images/galerie/37/zadaszenie-z-prostym-spadkiem-10.webp",
        ],
    },
    {
      title: "Tarasy deska kompozytowa",
      images: [
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa.webp",
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa2.webp", 
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa3.webp", 
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa4.webp", 
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa5.webp", 
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa6.webp", 
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa7.webp", 
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa8.webp", 
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa9.webp", 
        "https://drewelt.pl/images/galerie/22/tarasy-deska-kompozytowa10.webp", 
      ],
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [currentTitle, setCurrentTitle] = useState<string>("");

  const openGallery = (images: string[], index: number, title: string) => {
    setSelectedImages(images);
    setCurrentImage(index);
    setCurrentTitle(title);
    onOpen();
  };

  const prevImage = () => setCurrentImage((prev) => (prev > 0 ? prev - 1 : selectedImages.length - 1));
  const nextImage = () => setCurrentImage((prev) => (prev < selectedImages.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') prevImage()
      if (event.key === 'ArrowRight') nextImage()
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentImage])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Galeria naszych realizacji</h1>
      <p className="text-center text-gray-600 mb-8">Zapraszamy do obejrzenia zdjęć wykonanych przez nas konstrukcji.</p>
      <Divider className="mb-8" />

      {gallerySections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {section.images.slice(0, 5).map((image, index) => (
              <div key={index} className="cursor-pointer">
                <img
                  src={image}
                  alt={section.title}
                  className="w-full h-40 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  onClick={() => openGallery(section.images, index, section.title)}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Button onPress={() => openGallery(section.images, 0, section.title)} color="success">Zobacz więcej</Button>
          </div>
        </section>
      ))}

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="text-center justify-center text-2xl font-semibold">{currentTitle}</ModalHeader>

              <ModalBody className="flex items-center justify-center relative">
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 md:left-10 bg-black/50 text-white p-3 rounded-full shadow-lg hover:bg-black/70 transition"
                >
                  ←
                </button>

                <img src={selectedImages[currentImage]} alt="Galeria" className="max-w-3xl w-full rounded-lg shadow-lg" />

                <button
                  onClick={nextImage}
                  className="absolute right-4 md:right-10 bg-black/50 text-white p-3 rounded-full shadow-lg hover:bg-black/70 transition"
                >
                  →
                </button>
              </ModalBody>

              <ModalFooter className="flex justify-center">
                <Button onPress={onClose} color="danger">Zamknij</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
