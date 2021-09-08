import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import { WriteBox } from "../components";

const Compose = ({ history }) => {
  const onClose = () => {
    history.goBack();
  };
  return (
    <Modal isOpen={true} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent overflow="hidden">
        <ModalHeader>New note</ModalHeader>
        <ModalCloseButton />
        <WriteBox />
      </ModalContent>
    </Modal>
  );
};

export default Compose;
