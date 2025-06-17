import { useConfig } from "@contexts/ConfigContext";
import { TextField, TextFieldInput, TextFieldLabel } from "@ui/text-field";

const DescriptionPicker = () => {
  const config = useConfig()!;
  const [description, setDescription] = config.description;
  return (
    <TextField
      defaultValue={description()}
      onChange={setDescription}
      class="relative"
    >
      <TextFieldLabel for="font" class="text-xs absolute -top-5">
        Description
      </TextFieldLabel>
      <TextFieldInput type="text" class="grow" name="font" maxlength={80} placeholder="A short description of the transaction..." />
    </TextField>
  );
};

export default DescriptionPicker;

