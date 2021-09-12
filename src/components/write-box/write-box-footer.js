import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button, IconButton } from "@chakra-ui/button";
import { Box, HStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import Icon from "@chakra-ui/icon";
import { TrashIcon } from "@heroicons/react/outline";
import WriteColorPicker from "./write-box-color-picker";
import {
  activeNoteSelector,
  addNote,
  updateNote,
} from "../../store/slices/notes.slice";
import {
  writeBoxSelector,
  reset,
  activeColorSelector,
} from "../../store/slices/write-box.slice";

export default function WriteBoxFooter() {
  const history = useHistory();
  const toast = useToast();
  const { text, activeColorId } = useSelector(writeBoxSelector);
  const activeNote = useSelector(activeNoteSelector);
  const color = useSelector(activeColorSelector);
  const dispatch = useDispatch();

  const handleSaveNote = () => {
    if (text) {
      if (!activeNote) {
        dispatch(
          addNote({
            text,
            colorId: activeColorId,
          })
        );
      } else {
        dispatch(
          updateNote({
            id: activeNote.id,
            changes: { text, colorId: activeColorId },
          })
        );
      }
      dispatch(reset());
      history.push("/");
    } else {
      toast({
        title: "A blank note is not a note. 👌",
        status: "error",
        position: "top",
        duration: "2000",
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="gray.50"
      borderBottomWidth="1px"
      paddingX="4"
      paddingY="2"
    >
      <WriteColorPicker />
      <HStack alignItems="center">
        {text.length > 0 && (
          <Button color="gray.600" variant="ghost" children={text.length} />
        )}
        {activeNote && (
          <IconButton
            icon={<Icon as={TrashIcon} />}
            color="red.600"
            colorScheme="gray"
            onClick={handleSaveNote}
          />
        )}
        <Button colorScheme={color.colorScheme} onClick={handleSaveNote}>
          {!activeNote ? "Add Note" : "Update"}
        </Button>
      </HStack>
    </Box>
  );
}
