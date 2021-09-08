import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/layout";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import Masonry from "react-masonry-css";
import { NoteCard } from "../../components";
import { notesSelector, removeNote } from "../../store/slices/notes.slice";
import { colorsSelector } from "../../store/slices/write-box.slice";

const breakpointColumnsObj = {
  default: 2,
  500: 1,
};

export default function NoteList() {
  const notes = useSelector(notesSelector.selectAll);
  const colors = useSelector(colorsSelector);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeNote(id));
    }
  };

  if (!notes.length) {
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
            You're not add note yet
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
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            text={note.text}
            date={note.createdAt}
            backgroundColor={colors[note.colorId]?.backgroundColor}
            color={colors[note.colorId]?.textColor}
            marginBottom="4"
            actions={[
              // {
              //   title: "Edit",
              //   icon: PencilAltIcon,
              //   colorSchema: "gray",
              //   onClick: () => {},
              // },
              {
                title: "Delete",
                icon: TrashIcon,
                colorSchema: "red",
                onClick: () => handleRemove(note.id),
              },
            ]}
          />
        ))}
      </Masonry>
    </Box>
  );
}
