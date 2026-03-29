"use client"

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent as ReactTouchEvent,
} from "react"
import { Button } from "@heroui/button"
import { Image } from "@heroui/image"
import { Divider } from "@heroui/divider"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal"
import Link from "next/link"
import { useRouter } from "next/navigation"

import styles from "./styles.module.scss"
import { GaleriaObrazki, type GallerySection } from "./GaleriaData"

type Offset = {
  x: number
  y: number
}

type GestureMode = "none" | "pinch" | "pan"

const MIN_ZOOM = 1
const MAX_ZOOM = 4

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

const getTouchDistance = (touch1: any, touch2: any) => {
  const dx = touch1.clientX - touch2.clientX
  const dy = touch1.clientY - touch2.clientY
  return Math.hypot(dx, dy)
}

export default function Galeria() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const gallerySections: GallerySection[] = GaleriaObrazki

  const [isMobile, setIsMobile] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({})
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [currentImage, setCurrentImage] = useState(0)
  const [currentTitle, setCurrentTitle] = useState("")

  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 })

  const zoomRef = useRef(1)
  const offsetRef = useRef<Offset>({ x: 0, y: 0 })
  const imageWrapRef = useRef<HTMLDivElement | null>(null)

  const gestureRef = useRef<{
    mode: GestureMode
    startDistance: number
    startZoom: number
    startX: number
    startY: number
    startOffsetX: number
    startOffsetY: number
  }>({
    mode: "none",
    startDistance: 0,
    startZoom: 1,
    startX: 0,
    startY: 0,
    startOffsetX: 0,
    startOffsetY: 0,
  })

  useEffect(() => {
    zoomRef.current = zoom
  }, [zoom])

  useEffect(() => {
    offsetRef.current = offset
  }, [offset])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches)
    }

    updateIsMobile()
    mediaQuery.addEventListener("change", updateIsMobile)

    return () => mediaQuery.removeEventListener("change", updateIsMobile)
  }, [])

  const resetZoom = useCallback(() => {
    setZoom(1)
    setOffset({ x: 0, y: 0 })
    gestureRef.current.mode = "none"
  }, [])

  const openGallery = (images: string[], index: number, title: string) => {
    setSelectedImages(images)
    setCurrentImage(index)
    setCurrentTitle(title)
    resetZoom()
    onOpen()
  }

  const toggleSection = (sectionIndex: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }))
  }

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => {
      const len = selectedImages.length
      if (len === 0) return 0
      return prev > 0 ? prev - 1 : len - 1
    })
  }, [selectedImages.length])

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => {
      const len = selectedImages.length
      if (len === 0) return 0
      return prev < len - 1 ? prev + 1 : 0
    })
  }, [selectedImages.length])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") e.preventDefault()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", onKeyDown, { passive: false })
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen, prevImage, nextImage, onClose])

  useEffect(() => {
    if (isOpen) resetZoom()
  }, [currentImage, isOpen, resetZoom])

  const handleClick = () => {
    router.push("/kontakt")
  }

  const clearModal = () => {
    setSelectedImages([])
    setCurrentImage(0)
    setCurrentTitle("")
    resetZoom()
    onClose()
  }

  const handleTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      e.preventDefault()
      gestureRef.current.mode = "pinch"
      gestureRef.current.startDistance = getTouchDistance(e.touches[0], e.touches[1])
      gestureRef.current.startZoom = zoomRef.current
      return
    }

    if (e.touches.length === 1 && zoomRef.current > 1) {
      gestureRef.current.mode = "pan"
      gestureRef.current.startX = e.touches[0].clientX
      gestureRef.current.startY = e.touches[0].clientY
      gestureRef.current.startOffsetX = offsetRef.current.x
      gestureRef.current.startOffsetY = offsetRef.current.y
    }
  }

  const handleTouchMove = (e: ReactTouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && gestureRef.current.mode === "pinch") {
      e.preventDefault()

      const distance = getTouchDistance(e.touches[0], e.touches[1])
      const scaleFactor = distance / gestureRef.current.startDistance
      const nextZoom = clamp(
        gestureRef.current.startZoom * scaleFactor,
        MIN_ZOOM,
        MAX_ZOOM
      )

      setZoom(nextZoom)

      if (nextZoom <= 1.02) {
        setOffset({ x: 0, y: 0 })
      }

      return
    }

    if (
      e.touches.length === 1 &&
      gestureRef.current.mode === "pan" &&
      zoomRef.current > 1 &&
      imageWrapRef.current
    ) {
      e.preventDefault()

      const dx = e.touches[0].clientX - gestureRef.current.startX
      const dy = e.touches[0].clientY - gestureRef.current.startY

      const wrapWidth = imageWrapRef.current.clientWidth
      const wrapHeight = imageWrapRef.current.clientHeight

      const maxX = ((zoomRef.current - 1) * wrapWidth) / 2
      const maxY = ((zoomRef.current - 1) * wrapHeight) / 2

      setOffset({
        x: clamp(gestureRef.current.startOffsetX + dx, -maxX, maxX),
        y: clamp(gestureRef.current.startOffsetY + dy, -maxY, maxY),
      })
    }
  }

  const handleTouchEnd = () => {
    gestureRef.current.mode = "none"

    if (zoomRef.current <= 1.02) {
      resetZoom()
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Galeria naszych realizacji</h1>
      <p className={styles.pageSubtitle}>
        Zapraszamy do obejrzenia zdjęć wykonanych przez nas konstrukcji
      </p>

      <p className={styles.description}>
        Każde zdjęcie na naszej stronie ma swój unikalny numer. Jeśli spodobała Ci
        się dana realizacja, podaj ten numer w{" "}
        <Link href="/kontakt" className={styles.link}>
          formularzu kontaktowym
        </Link>
        , a odniesiemy się do wybranej przez Ciebie realizacji
      </p>

      <div>
        <h2 className={styles.realizacje}>Podobają Ci się nasze realizacje?</h2>
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.outlineButton} ${styles.slideUpButton}`}
            onClick={handleClick}
          >
            Otrzymaj bezpłatną wycenę
          </button>
        </div>
      </div>

      <Divider className={styles.divider} />

      {gallerySections.map((section, sectionIndex) => {
        const isExpanded = !!expandedSections[sectionIndex]
        const collapsedCount = isMobile ? 3 : 5
        const hasMoreImages = section.images.length > collapsedCount
        const visibleImages = isExpanded
          ? section.images
          : section.images.slice(0, collapsedCount)

        return (
          <section key={sectionIndex} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>

            <div
              className={`${styles.grid} ${isExpanded ? styles.gridExpanded : ""}`}
            >
              {visibleImages.map((image, index) => (
                <div
                  key={index}
                  className={styles.thumbTile}
                  onClick={() => openGallery(section.images, index, section.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      openGallery(section.images, index, section.title)
                    }
                  }}
                >
                  <Image alt={section.title} src={image} className={styles.thumb} />
                </div>
              ))}
            </div>

            {hasMoreImages && (
              <div className={styles.centerActions}>
                <Button color="success" onPress={() => toggleSection(sectionIndex)}>
                  {isExpanded ? "Zwiń" : "Zobacz więcej"}
                </Button>
              </div>
            )}
          </section>
        )
      })}

      <Modal isOpen={isOpen} size="full" onClose={clearModal}>
        <ModalContent>
          <ModalHeader className={styles.modalHeader}>{currentTitle}</ModalHeader>

          <ModalBody className={styles.modalBody}>
            <div className={`${styles.navWrap} ${styles.navLeft}`}>
              <Button
                className={styles.navButton}
                onPress={prevImage}
                aria-label="Poprzednie zdjęcie"
              >
                ←
              </Button>
            </div>

            <div
              ref={imageWrapRef}
              className={styles.imageWrap}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={styles.zoomStage}
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                }}
              >
                <img
                  alt="Galeria"
                  src={selectedImages[currentImage] ?? ""}
                  className={styles.modalImage}
                  draggable={false}
                />
              </div>
            </div>

            <div className={`${styles.navWrap} ${styles.navRight}`}>
              <Button
                className={styles.navButton}
                onPress={nextImage}
                aria-label="Następne zdjęcie"
              >
                →
              </Button>
            </div>

            <div className={styles.mobileNav}>
              <Button
                className={styles.navButton}
                onPress={prevImage}
                aria-label="Poprzednie zdjęcie"
              >
                ←
              </Button>
              <Button
                className={styles.navButton}
                onPress={nextImage}
                aria-label="Następne zdjęcie"
              >
                →
              </Button>
            </div>
          </ModalBody>

          <ModalFooter className={styles.modalFooter}>
            <Button color="danger" onPress={clearModal}>
              Zamknij
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}