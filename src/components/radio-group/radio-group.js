import { memo } from "react";
import { Box, HStack } from "@chakra-ui/layout";

function RadioGroup({ values, value, renderItem, onChange }) {
  const Component = renderItem;

  return (
    <HStack>
      {values.map((item, index) => {
        const isChecked = item?.value === value || item === value;
        if (typeof item === "string") {
          item = { value: item };
        }
        return (
          <Box key={index} onClick={() => onChange(item.value)}>
            <Component item={{ ...item, isChecked }} index={index} />
          </Box>
        );
      })}
    </HStack>
  );
}

export default memo(RadioGroup);
