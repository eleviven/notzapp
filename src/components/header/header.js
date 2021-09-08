import { Box } from "@chakra-ui/layout";

export default function Header() {
  return (
    <Box
      position="sticky"
      zIndex="9"
      top="0"
      display="flex"
      borderBottom="1px"
      borderColor="gray.200"
      backgroundColor="gray.50"
      paddingY="3"
      paddingX="4"
    >
      <Box fontWeight="bold" fontSize="sm" textTransform="uppercase">
        N🔥tzApp
      </Box>
    </Box>
  );
}
