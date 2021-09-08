import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ColorCheckBox, RadioGroup } from "../";
import {
  activeColorSelector,
  colorsSelector,
  setActiveColorId,
} from "../../store/slices/write-box.slice";

function WriteBoxColorPicker() {
  const colorEntities = useSelector(colorsSelector);
  const colors = Object.values(colorEntities);
  const color = useSelector(activeColorSelector);
  const dispatch = useDispatch();

  const onChange = (value) => {
    const { id } = colors?.find((c) => c.backgroundColor === value) || {};
    if (id) dispatch(setActiveColorId(id));
  };

  return (
    <RadioGroup
      values={Object.values(colors).map((i) => i.backgroundColor)}
      value={color.backgroundColor}
      renderItem={({ item }) => {
        return <ColorCheckBox color={item.value} isChecked={item.isChecked} />;
      }}
      onChange={onChange}
    />
  );
}

export default memo(WriteBoxColorPicker);
