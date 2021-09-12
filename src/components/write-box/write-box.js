import { Box } from "@chakra-ui/layout";

export default function WriteBox({ children, ...props }) {
  return <Box {...props}>{children}</Box>;
}
