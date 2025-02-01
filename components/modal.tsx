import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import React from "react";


export default function BlurModal({name, description, label}:
    {
    name: string,
    description: string,
    label: string
    }) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
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
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                <p>
                  {description}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Zamknij
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sczegóły
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

