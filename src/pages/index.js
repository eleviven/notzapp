import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/layout";
import { WriteBox } from "../components";
import { NoteList } from "../containers";
import { colorSelector, setColor } from "../store/slices/write-box.slice";
import data from "../static/data";

export default function Home() {
  const color = useSelector(colorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!color) {
      dispatch(setColor(data.colors[0]));
    }
  }, [dispatch, color]);
  return (
    <Box>
      <WriteBox />
      <NoteList />
    </Box>
  );
}
