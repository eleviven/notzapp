import { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ColorCheckBox, RadioGroup } from "../";
import { activeNoteSelector } from "../../store/slices/notes.slice";
import {
  activeColorSelector,
  colorsSelector,
  setActiveColorId,
} from "../../store/slices/write-box.slice";

function WriteBoxColorPicker() {
  const dispatch = useDispatch();
  const activeNote = useSelector(activeNoteSelector);
  const colorEntities = useSelector(colorsSelector);
  const colors = Object.values(colorEntities);
  const color = useSelector(activeColorSelector);

  const onChange = (value) => {
    const { id } = colors?.find((c) => c.value === value) || {};
    if (id) dispatch(setActiveColorId(id));
  };

  useEffect(() => {
    if (activeNote) {
      dispatch(setActiveColorId(activeNote.colorId));
    }
  }, [activeNote, dispatch]);

  return (
    <RadioGroup
      values={Object.values(colors).map((i) => i.value)}
      value={color.value}
      renderItem={({ item }) => {
        return <ColorCheckBox color={item.value} isChecked={item.isChecked} />;
      }}
      onChange={onChange}
    />
  );
}

export default memo(WriteBoxColorPicker);
