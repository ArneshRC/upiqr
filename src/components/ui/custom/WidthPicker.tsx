import { useConfig } from "@contexts/ConfigContext";
import NumberPicker from "./NumberPicker";

const WidthPicker = () => {
  const config = useConfig()!;
  const [width, setWidth] = config.width;
  return (
    <NumberPicker
      onChange={setWidth}
      value={width}
      label="Width (px)"
      name="width"
    />
  );
};

export default WidthPicker;
