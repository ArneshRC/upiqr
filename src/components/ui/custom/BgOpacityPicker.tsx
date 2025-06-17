import { useConfig } from "@contexts/ConfigContext";
import {
  Slider,
  SliderFill,
  SliderLabel,
  SliderThumb,
  SliderTrack,
  SliderValueLabel
} from "@ui/slider"

function BgOpacityPicker() {
  const config = useConfig()!;
  const [bgOpacity, setBgOpacity] = config.bgOpacity;
  return (
    <Slider
      minValue={0}
      maxValue={100}
      value={[bgOpacity()]}
      onChange={([opacity]) => setBgOpacity(opacity)}
      class="h-10 flex flex-col justify-center"
    >
      <div class="flex w-full justify-between text-xs absolute -top-5">
        <SliderLabel class="text-xs">Background Opacity (%)</SliderLabel>
        <SliderValueLabel class="text-xs font-bold" />
      </div>
      <SliderTrack class="h-2 grow-0">
        <SliderFill class="h-2" />
        <SliderThumb>

        </SliderThumb>
      </SliderTrack>
    </Slider>
  )
}

export default BgOpacityPicker;
