import { useConfig } from "@contexts/ConfigContext";
import ColorPicker from "./ColorPicker";

const BgColorPicker = () => {
  const config = useConfig()!;
  const [bgColor, setBgColor] = config.bgColor;
  return (
    <ColorPicker
      onChange={setBgColor}
      value={bgColor}
      label="Background Color (hex)"
      name="text-color"
    />
  );
};

export default BgColorPicker;


