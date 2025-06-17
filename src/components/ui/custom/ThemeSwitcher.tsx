import { useColorMode } from "@kobalte/core";
import { Button } from "@ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu";

import { TbBrush, TbCpu, TbMoon, TbSun } from "solid-icons/tb";
import { Match, Switch } from "solid-js";

const ThemeSwitcher = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" class="px-2">
          <Switch>
            <Match when={colorMode() == "light"}>
              <TbSun size={24} />
            </Match>
            <Match when={colorMode() == "dark"}>
              <TbMoon size={24} />
            </Match>
          </Switch>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel class="flex items-center gap-2">
          <TbBrush /> Theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setColorMode("light")}
          class="flex items-center gap-2"
        >
          <TbSun /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setColorMode("dark")}
          class="flex items-center gap-2"
        >
          <TbMoon /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setColorMode("system")}
          class="flex items-center gap-2"
        >
          <TbCpu /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
