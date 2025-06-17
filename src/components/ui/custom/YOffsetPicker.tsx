import { useConfig } from "@contexts/ConfigContext";
import NumberPicker from "./NumberPicker";

const YOffsetPicker = () => {
  const config = useConfig()!;
  const [yOffset, setYOffset] = config.yOffset;
  return (
    <NumberPicker
      onChange={setYOffset}
      value={yOffset}
      label="Vertical Offset (px)"
      name="y-offset"
    />
  );
};

export default YOffsetPicker;

