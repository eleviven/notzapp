import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { WriteBox, WriteBoxFooter, WriteBoxTextArea } from "../components";
import { setActiveNoteId } from "../store/slices/notes.slice";

const Compose = ({ history, location }) => {
  const dispatch = useDispatch();
  const noteId = location?.state?.noteId;

  const onClose = () => {
    history.goBack();
  };

  useEffect(() => {
    if (noteId) {
      dispatch(setActiveNoteId(noteId));
    }
    return () => {
      dispatch(setActiveNoteId(null));
    };
  }, [noteId, dispatch]);
  return (
    <Modal isOpen={true} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent overflow="hidden">
        <ModalHeader>New note</ModalHeader>
        <ModalCloseButton />
        <WriteBox>
          <WriteBoxTextArea />
          <WriteBoxFooter />
        </WriteBox>
      </ModalContent>
    </Modal>
  );
};

export default Compose;
