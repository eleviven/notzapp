import { Textarea } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNoteSelector } from "../../store/slices/notes.slice";
import {
  reset,
  setText,
  writeBoxSelector,
} from "../../store/slices/write-box.slice";

export default function WriteBoxTextArea() {
  const { text } = useSelector(writeBoxSelector);
  const activeNote = useSelector(activeNoteSelector);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setText(value));
  };

  useEffect(() => {
    if (activeNote) {
      dispatch(setText(activeNote.text));
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, activeNote]);

  return (
    <Textarea
      placeholder="Enter your note here"
      borderRadius={0}
      borderWidth={0}
      resize="vertical"
      rows="8"
      value={text}
      autoFocus={true}
      onChange={handleChange}
    />
  );
}
