import { useConfig } from "@contexts/ConfigContext";
import NumberPicker from "./NumberPicker";

const WidthPicker = () => {
  const config = useConfig()!;
  const [fontWeight, setFontWeight] = config.fontWeight;
  return (
    <NumberPicker
      onChange={setFontWeight}
      value={fontWeight}
      step={100}
      label="Font Weight"
      name="font-weight"
    />
  );
};

export default WidthPicker;

