import { useHistory, useLocation } from "react-router";
import { Box } from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { PencilAltIcon } from "@heroicons/react/outline";

export default function Header() {
  const history = useHistory();
  const location = useLocation();
  return (
    <Box
      position="sticky"
      zIndex="9"
      top="0"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="gray.200"
      backgroundColor="gray.50"
      paddingY="2"
      paddingX="4"
    >
      <Box fontWeight="bold" fontSize="md" textTransform="uppercase">
      🔥 NotzApp
      </Box>
      <ButtonGroup size="md">
        <Button
          colorScheme="twitter"
          onClick={() => history.push("/compose", { background: location })}
        >
          <Icon as={PencilAltIcon} marginRight="1.5" />
          New Note
        </Button>
      </ButtonGroup>
    </Box>
  );
}
