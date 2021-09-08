import { chakra, ButtonGroup, Icon, IconButton } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/layout";
import dayjs from "dayjs";

const NoteCardBox = chakra(chakra.div, {
  baseStyle: {
    position: "relative",
    borderWidth: 1,
    borderColor: "blackAlpha.200",
    rounded: "md",
    padding: 2,
  },
});

const NoteCardActionsBox = chakra(ButtonGroup, {
  baseStyle: {
    position: "absolute",
    bottom: "1.5",
    right: "1.5",
    opacity: "0",
    transition: "all",
    transitionDuration: "0.2s",
    _groupHover: { opacity: 1 },
  },
});

export default function NoteCard({
  text,
  date,
  color,
  backgroundColor,
  actions,
  children,
  ...props
}) {
  return (
    <NoteCardBox role="group" backgroundColor={backgroundColor} {...props}>
      <Box color={color}>
        <Text fontSize="md" fontWeight="medium">
          {text || children}
        </Text>
        <Text as="small" fontWeight="medium">
          {dayjs(date).format("DD MMM YYYY")}
        </Text>
      </Box>
      {actions && (
        <NoteCardActionsBox size="sm">
          {actions.map((item, index) => (
            <IconButton
              key={index}
              colorScheme={item.colorSchema}
              onClick={item.onClick}
            >
              <Icon as={item.icon} />
            </IconButton>
          ))}
        </NoteCardActionsBox>
      )}
    </NoteCardBox>
  );
}

NoteCard.defaultProps = {
  color: "gray.700",
  backgroundColor: "gray.50",
};
