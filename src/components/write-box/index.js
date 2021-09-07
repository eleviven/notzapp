import { Box } from "@chakra-ui/layout";
import WriteBoxFooter from "./write-box-footer";
import WriteTextArea from "./write-box-text-area";

export default function WriteBox() {
  return (
    <Box>
      <WriteTextArea />
      <WriteBoxFooter />
    </Box>
  );
}
