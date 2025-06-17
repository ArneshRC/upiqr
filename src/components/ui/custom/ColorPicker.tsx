import { TextField, TextFieldInput, TextFieldLabel } from "@ui/text-field";
import { Accessor } from "solid-js";

interface ColorPickerProps {
  value: Accessor<string>;
  label: string;
  name: string;
  onChange: (color: string) => void;
}

const ColorPicker = ({
  value,
  label,
  name,
  onChange,
}: ColorPickerProps) => {
  return (
    <TextField
      value={value()}
      onChange={onChange}
      class="relative"
    >
      <TextFieldLabel for={name} class="text-xs absolute -top-5">
        {label}
      </TextFieldLabel>
      <div class="flex gap-4 relative">
        <div
          class="absolute w-6 h-6 top-2 right-2 aspect-square rounded-lg"
          style={{ "background-color": value() }}
        >
          &nbsp;
        </div>
        <TextFieldInput type="text" class="grow" name={name} />
      </div>
    </TextField>
  );
};

export default ColorPicker;
