import { useConfig } from "@contexts/ConfigContext";
import NumberPicker from "./NumberPicker";

const FontSizePicker = () => {
  const config = useConfig()!;
  const [fontSize, setFontSize] = config.fontSize;
  return (
    <NumberPicker
      onChange={setFontSize}
      value={fontSize}
      label="Font Size (px)"
      name="font-size"
    />
  );
};

export default FontSizePicker;
