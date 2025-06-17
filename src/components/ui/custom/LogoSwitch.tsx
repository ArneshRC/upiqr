import { useConfig } from "@contexts/ConfigContext";
import { Switch, SwitchControl, SwitchLabel, SwitchThumb } from "@ui/switch";
function LogoSwitch() {
  const config = useConfig()!;
  const [withLogo, setWithLogo] = config.withLogo;
  return (
    <Switch class="flex items-center space-x-2" checked={withLogo()}>
      <SwitchControl
        onClick={() => {
          setWithLogo((withLogo) => !withLogo);
        }}
      >
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Logo</SwitchLabel>
    </Switch>
  );
}

export default LogoSwitch;
