import { Box, Text } from "@chakra-ui/layout";
import React from "react";

export default function NoteCard({
  text,
  color,
  backgroundColor,
  children,
  ...props
}) {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray.200"
      color={color}
      backgroundColor={backgroundColor}
      rounded="md"
      padding="2"
      {...props}
    >
      <Text fontSize="sm">{text || children}</Text>
    </Box>
  );
}

NoteCard.defaultProps = {
  color: "gray.700",
  backgroundColor: "gray.50",
};
