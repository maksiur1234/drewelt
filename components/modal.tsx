import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import React from "react";
import { useRouter } from "next/navigation";

type Backdrop = "opaque" | "blur";

export default function BlurModal({
  name,
  description,
  label,
  path,
}: {
  name: string;
  description: string;
  label: string;
  path: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState<Backdrop>("opaque");
  const router = useRouter();

  const backdrops: Backdrop[] = ["blur"];

  const handleOpen = (backdrop: Backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const handleDetailsClick = () => {
    const formattedName = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  
    const finalPath = path.replace("{name}", formattedName);
    router.push(finalPath);
  };
  

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button
            key={b}
            className="capitalize"
            color="success"
            variant="flat"
            onPress={() => handleOpen(b)}
          >
            {label}
          </Button>
        ))}
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose: () => void) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                <p>{description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Zamknij
                </Button>
                <Button color="success" onPress={handleDetailsClick}>
                  Szczegóły
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
