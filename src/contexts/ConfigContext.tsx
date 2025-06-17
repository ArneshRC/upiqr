import { createContext, useContext, Accessor, Setter, JSX } from "solid-js";
import { createPersistedSignal } from "@lib/utils";
import { readConfig } from "@services/storage";
import { mapValues } from "es-toolkit";

interface Config {
  upiId: string;
  amount: number;
  description: string;
  withLogo: boolean;
  logoUrl: string;
}

interface ConfigContextProps {
  children: JSX.Element;
}

type ConfigContextValue = {
  [Param in keyof Config]: [Accessor<Config[Param]>, Setter<Config[Param]>];
};

const ConfigContext = createContext<ConfigContextValue>();

const ConfigProvider = (props: ConfigContextProps) => {
  const config = readConfig();
  const providerValue = mapValues(config, (value, key) => {
    return createPersistedSignal(key, value);
  });
  return (
    <ConfigContext.Provider value={providerValue as ConfigContextValue}>
      {props.children}
    </ConfigContext.Provider>
  );
};

const useConfig = () => useContext(ConfigContext);

export { type Config, type ConfigContextValue, ConfigProvider, useConfig };
