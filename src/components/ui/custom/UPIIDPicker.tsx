import { useConfig } from "@contexts/ConfigContext";
import { TextField, TextFieldInput, TextFieldLabel } from "@ui/text-field";

const UPIIDPicker = () => {
  const config = useConfig()!;
  const [upiId, setUpiId] = config.upiId;
  return (
    <TextField
      defaultValue={upiId()}
      onChange={setUpiId}
      required={true}
      validationState={/[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/.test(upiId()) ? "valid" : "invalid"}
      class="relative"
    >
      <TextFieldLabel for="font" class="text-xs absolute -top-5 data-[invalid]:text-error-foreground">
        UPI ID <span class="text-red-500">*</span>
      </TextFieldLabel>
      <TextFieldInput type="text" class="grow data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground" name="font" placeholder="Payee's UPI ID..." />
    </TextField>
  );
};

export default UPIIDPicker;
