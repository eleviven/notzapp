import { Textarea } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setText, writeBoxSelector } from "../../store/slices/write-box.slice";

export default function WriteBoxTextArea() {
  const { text } = useSelector(writeBoxSelector);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setText(value));
  };

  return (
    <Textarea
      placeholder="Enter your note here"
      borderRadius={0}
      borderWidth={0}
      resize="vertical"
      rows="3"
      value={text}
      onChange={handleChange}
    />
  );
}
