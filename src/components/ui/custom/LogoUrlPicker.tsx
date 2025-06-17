import { useConfig } from "@contexts/ConfigContext";
import { TextField, TextFieldInput, TextFieldLabel } from "@ui/text-field";

const LogoUrlPicker = () => {
  const config = useConfig()!;
  const [logoUrl, setLogoUrl] = config.logoUrl;
  return (
    <TextField
      defaultValue={logoUrl()}
      onChange={setLogoUrl}
      required={true}
      class="relative"
    >
      <TextFieldLabel for="font" class="text-xs absolute -top-5">
        Logo URL
      </TextFieldLabel>
      <TextFieldInput type="text" class="grow" name="font" placeholder="Image URL of the logo..." />
    </TextField>
  );
};

export default LogoUrlPicker;

