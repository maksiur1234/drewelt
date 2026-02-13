"use client";

import { useCallback, useEffect, useState } from "react";
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

import styles from "./styles.module.scss";

interface GallerySection {
  title: string;
  images: string[];
}

export default function Galeria() {
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

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => {
      const len = selectedImages.length;
      if (len === 0) return 0;
      return prev > 0 ? prev - 1 : len - 1;
    });
  }, [selectedImages.length]);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => {
      const len = selectedImages.length;
      if (len === 0) return 0;
      return prev < len - 1 ? prev + 1 : 0;
    });
  }, [selectedImages.length]);

  // klawiatura: strzałki + ESC (działa też na mobile z klawiaturą)
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") e.preventDefault();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, prevImage, nextImage, onClose]);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Galeria naszych realizacji</h1>
      <p className={styles.pageSubtitle}>
        Zapraszamy do obejrzenia zdjęć wykonanych przez nas konstrukcji.
      </p>

      <Divider className={styles.divider} />

      {gallerySections.map((section, sectionIndex) => (
        <section key={sectionIndex} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>

          {/* Na mobile to stanie się sliderem dzięki CSS */}
          <div className={styles.grid}>
            {section.images.slice(0, 5).map((image, index) => (
              <div
                key={index}
                className={styles.thumbTile}
                onClick={() => openGallery(section.images, index, section.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openGallery(section.images, index, section.title);
                  }
                }}
              >
                <Image alt={section.title} src={image} className={styles.thumb} />
              </div>
            ))}
          </div>

          <div className={styles.centerActions}>
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
          <ModalHeader className={styles.modalHeader}>{currentTitle}</ModalHeader>

          <ModalBody className={styles.modalBody}>
            {/* DESKTOP/TABLET: overlay po bokach */}
            <div className={`${styles.navWrap} ${styles.navLeft}`}>
              <Button className={styles.navButton} onPress={prevImage}>
                ←
              </Button>
            </div>

            {/* wrapper obrazu - centrowanie na mobile */}
            <div className={styles.imageWrap}>
              <Image
                alt="Galeria"
                src={selectedImages[currentImage] ?? ""}
                className={styles.modalImage}
              />
            </div>

            <div className={`${styles.navWrap} ${styles.navRight}`}>
              <Button className={styles.navButton} onPress={nextImage}>
                →
              </Button>
            </div>

            {/* MOBILE: strzałki pod obrazkiem */}
            <div className={styles.mobileNav}>
              <Button className={styles.navButton} onPress={prevImage}>
                ←
              </Button>
              <Button className={styles.navButton} onPress={nextImage}>
                →
              </Button>
            </div>
          </ModalBody>

          <ModalFooter className={styles.modalFooter}>
            <Button color="danger" onPress={onClose}>
              Zamknij
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
