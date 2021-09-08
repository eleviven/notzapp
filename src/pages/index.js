import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/layout";
import { NoteList } from "../containers";
import { colorsSelector, setColors } from "../store/slices/write-box.slice";
import data from "../static/data";

export default function Home() {
  const colors = useSelector(colorsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!colors.length) {
      dispatch(setColors(data.colors));
    }
  }, [dispatch, colors.length]);
  return (
    <Box>
      <NoteList />
    </Box>
  );
}
