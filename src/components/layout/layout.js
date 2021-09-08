import React from "react";
import { useSelector } from "react-redux";
import { Box, Container } from "@chakra-ui/react";
import { Header } from "../";
import { activeColorSelector } from "../../store/slices/write-box.slice";

export default function Layout({ children }) {
  const color = useSelector(activeColorSelector);
  return (
    <Box backgroundColor={color.backgroundColor}>
      <Container maxW="container.md" paddingX={[0, 0, 15]}>
        <Box
          border="1px"
          borderColor="gray.200"
          backgroundColor="white"
          minH="100vh"
        >
          <Header />
          {children}
        </Box>
      </Container>
    </Box>
  );
}
