import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ColorCheckBox, RadioGroup } from "../";
import { colorSelector, setColor } from "../../store/slices/write-box.slice";
import data from "../../static/data";

const { colors } = data;

function WriteBoxColorPicker() {
  const color = useSelector(colorSelector);
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(setColor(value));
  };

  return (
    <RadioGroup
      values={colors}
      value={color}
      renderItem={({ item }) => {
        return <ColorCheckBox color={item.value} isChecked={item.isChecked} />;
      }}
      onChange={onChange}
    />
  );
}

export default memo(WriteBoxColorPicker);
