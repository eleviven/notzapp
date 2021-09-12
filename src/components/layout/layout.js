import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../";

export default function Layout({ children }) {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      backgroundColor="white"
      minH="100vh"
    >
      <Header />
      {children}
    </Box>
  );
}
