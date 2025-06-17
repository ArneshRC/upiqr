import {
  NumberField,
  NumberFieldDecrementTrigger,
  NumberFieldGroup,
  NumberFieldIncrementTrigger,
  NumberFieldInput,
  NumberFieldLabel,
} from "@ui/number-field";

import { cn } from "@lib/utils";
import { Accessor } from "solid-js";

interface NumberPickerProps {
  value: Accessor<number>;
  label: string;
  name: string;
  step?: number;
  onChange: (number: number) => void;
}

const NumberPicker = ({
  value,
  label,
  name,
  step = 1,
  onChange,
}: NumberPickerProps) => {
  return (
    <NumberField
      format={false}
      step={step}
      minValue={1}
      required={true}
      rawValue={value()}
      onRawValueChange={onChange}
      class={cn("relative")}
    >
      <NumberFieldLabel for={name} class="text-xs absolute -top-5">
        {label} <span class="text-red-500">*</span>
      </NumberFieldLabel>
      <NumberFieldGroup>
        <NumberFieldInput name={name} />
        <NumberFieldIncrementTrigger />
        <NumberFieldDecrementTrigger />
      </NumberFieldGroup>
    </NumberField>
  );
};

export default NumberPicker;
