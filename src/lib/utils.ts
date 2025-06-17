import { makePersisted } from "@solid-primitives/storage";
import { type ClassValue, clsx } from "clsx";
import { Accessor, createSignal, Setter } from "solid-js";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const createPersistedSignal = <T,>(
  key: string,
  defaultValue: T,
): [Accessor<T>, Setter<T>] => {
  const [get, set] = makePersisted(createSignal<T>(defaultValue), {
    name: key,
  });
  return [get, set];
};

export {cn, createPersistedSignal}
