import { Box } from "@chakra-ui/layout";
import { WriteBox } from "../components";
import { NoteList } from "../containers";

export default function Home() {
  return (
    <Box>
      <WriteBox />
      <NoteList />
    </Box>
  );
}
