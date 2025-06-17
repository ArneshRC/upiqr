import { DEFAULT_CONFIG } from "@constants";
import { Config } from "@contexts/ConfigContext";
import {mapValues} from "es-toolkit";

const getItem = <T>(key: string, defaultValue: T): T => {
  const storedItem = window.localStorage.getItem(key);
  if (storedItem != null) {
    switch (typeof defaultValue) {
      case "string":
        return storedItem as T;
      case "number":
        return parseInt(storedItem) as T;
      case "boolean":
        return Boolean(storedItem) as T;
    }
  }
  return defaultValue;
};

const readConfig = (): Config => {
  const config = Object.assign({}, DEFAULT_CONFIG);

  return mapValues(config, (value, key) => {
    return getItem(key, value);
  }) as Config;

};

export { getItem, readConfig };
