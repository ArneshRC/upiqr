import { useConfig, ConfigContextValue } from "@contexts/ConfigContext";
import { Button } from "@ui/button";
import { DEFAULT_CONFIG } from "@constants";
import { TbRefresh } from "solid-icons/tb";

const ResetConfigButton = () => {
  const config = useConfig()!;
  return (
    <Button
      variant="destructive"
      onClick={async () => {
        (Object.keys(config) as (keyof ConfigContextValue)[]).forEach((key) => {
          (config[key][1] as (defaultValue: string | number) => void)(
            DEFAULT_CONFIG[key],
          );
        });
      }}
      class="flex items-center gap-1"
    >
      <TbRefresh size={16} /> Reset
    </Button>
  );
};

export default ResetConfigButton;
