import { Box } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function ColorCheckBox({ color, isChecked, ...props }) {
  return (
    <Box
      position="relative"
      borderWidth="medium"
      borderColor="white"
      borderRadius="full"
      cursor="pointer"
      transitionDuration=".2s"
      ring="1px"
      ringColor="gray.200"
      _hover={{ shadow: "md" }}
      {...props}
    >
      <Box width="6" height="6" backgroundColor={color} borderRadius="full" />
      {Boolean(isChecked) && (
        <MotionBox
          position="absolute"
          top="50%"
          left="50%"
          width="2.5"
          height="2.5"
          bgGradient="linear(to-b, white, gray.200)"
          borderRadius="full"
          initial={{
            scale: 0.3,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{ scale: 1 }}
        />
      )}
    </Box>
  );
}
