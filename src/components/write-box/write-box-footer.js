import { Button } from "@chakra-ui/button";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import WriteColorPicker from "./write-box-color-picker";
import { addNote } from "../../store/slices/notes.slice";
import {
  writeBoxSelector,
  reset,
  activeColorSelector,
} from "../../store/slices/write-box.slice";

const WriteBoxCounter = ({ text }) => {
  return text.length ? (
    <Text
      as="span"
      color="gray.600"
      marginRight={5}
      fontWeight="semibold"
      fontSize="sm"
    >
      {text.length}
    </Text>
  ) : null;
};

export default function WriteBoxFooter() {
  const toast = useToast();
  const { text, activeColorId } = useSelector(writeBoxSelector);
  const color = useSelector(activeColorSelector);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (text) {
      dispatch(
        addNote({
          text,
          colorId: activeColorId,
        })
      );
      dispatch(reset());
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
      <Box alignItems="center">
        <WriteBoxCounter text={text} />
        <Button colorScheme={color.colorScheme} onClick={handleAddNote}>
          Add Note
        </Button>
      </Box>
    </Box>
  );
}
