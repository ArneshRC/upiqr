import { TbQrcode } from "solid-icons/tb";

import ThemeSwitcher from "@ui/custom/ThemeSwitcher";
import DownloadButton from "@ui/custom/DownloadButton";
import ResetConfigButton from "@ui/custom/ResetConfigButton";
import UPIIDPicker from "@ui/custom/UPIIDPicker";
import AmountPicker from "@ui/custom/AmountPicker";
import DescriptionPicker from "@ui/custom/DescriptionPicker";
import PreviewQR from "@ui/custom/PreviewQR";
import LogoSwitch from "@ui/custom/LogoSwitch";
import LogoUrlPicker from "@ui/custom/LogoUrlPicker";
import { useConfig } from "@contexts/ConfigContext";
import { createSignal } from "solid-js";

const Controls = () => {
  return (
    <>
      <div class="col-span-2">
        <UPIIDPicker />
      </div>
      <div>
        <AmountPicker />
      </div>
      <div class="col-span-3">
        <DescriptionPicker />
      </div>
      <div>
        <LogoSwitch />
      </div>
      <div class="col-span-2">
        <LogoUrlPicker />
      </div>
    </>
  );
};

export default function Home() {
  const config = useConfig()!;
  const [upiId] = config.upiId;
  const [ qrImgSrc, setQrImgSrc ] = createSignal<string>("");
  return (
    <main class="p-4 min-h-screen">
      <div class="flex justify-between gap-4 mb-8">
        <h1 class="text-3xl flex items-center gap-4">
          <TbQrcode /> UPIQR
        </h1>
        <ThemeSwitcher />
      </div>
      <div class="space-y-8">
        <div class="grid grid-cols-3 m-auto max-w-96 gap-x-4 gap-y-8 auto-rows-[2.5rem]">
          <Controls />
        </div>
        <div class="flex justify-center gap-4">
          <DownloadButton
            disabled={() => !/[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/.test(upiId())}
            imgSrc={qrImgSrc}
          />
          <ResetConfigButton />
        </div>
        <div class="m-auto max-w-80 w-full">
          <PreviewQR setImgSrc={setQrImgSrc}/>
        </div>
      </div>
    </main>
  );
}
