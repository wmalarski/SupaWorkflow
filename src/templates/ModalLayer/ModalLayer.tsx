import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { UrlObject } from "url";

export type ModalLayerProps = {
  resetUrl: UrlObject;
  isOpen?: boolean;
  children?: React.ReactNode;
};

const ModalLayer = ({
  resetUrl,
  isOpen,
  children,
}: ModalLayerProps): React.ReactElement | null => {
  const router = useRouter();

  return isOpen ? (
    <Modal
      onClose={() => router.push(resetUrl)}
      isOpen={isOpen ?? false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </Modal>
  ) : null;
};

export default ModalLayer;
