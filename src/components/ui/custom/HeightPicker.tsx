import { useConfig } from "@contexts/ConfigContext";
import NumberPicker from "./NumberPicker";

const HeightPicker = () => {
  const config = useConfig()!;
  const [height, setHeight] = config.height;
  return (
    <NumberPicker
      onChange={setHeight}
      value={height}
      label="Height (px)"
      name="width"
    />
  );
};

export default HeightPicker;
