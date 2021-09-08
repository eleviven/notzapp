import { Button } from "@chakra-ui/button";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import WriteColorPicker from "./write-box-color-picker";
import { addNote } from "../../store/slices/notes.slice";
import { writeBoxSelector, reset } from "../../store/slices/write-box.slice";
import data from "../../static/data";

const { colorSchemeMap } = data;

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
  const { text, color } = useSelector(writeBoxSelector);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAddNote = () => {
    if (text) {
      dispatch(
        addNote({
          text,
          color,
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
        <Button
          colorScheme={colorSchemeMap[color]?.background}
          onClick={handleAddNote}
        >
          Add Note
        </Button>
      </Box>
    </Box>
  );
}
