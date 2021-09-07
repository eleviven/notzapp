import React from "react";
import Masonry from "react-masonry-css";
import { Box, Text } from "@chakra-ui/layout";
import { NoteCard } from "../../components";
import { useSelector } from "react-redux";
import { notesSelector } from "../../store/slices/notes.slice";

const breakpointColumnsObj = {
  default: 3,
  700: 2,
  500: 1,
};

export default function NoteList() {
  const notes = useSelector(notesSelector.selectEntities);

  if (!notes) {
    return (
      <Box
        paddingY="10"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <Text fontSize="3xl">📝</Text>
        <Box marginTop="3">
          <Text fontWeight="semibold" fontSize="lg">
            Henüz not eklemediniz
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box padding="4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {/* {notes?.map((note) => (
          <NoteCard
            text={note.text}
            backgroundColor={note.color}
            color="white"
          />
        ))} */}
      </Masonry>
    </Box>
  );
}
