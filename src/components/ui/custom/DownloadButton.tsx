import { Button } from "@ui/button";
import { TbDownload } from "solid-icons/tb";
import { downloadBlob } from "@services/downloader";
import { Accessor } from "solid-js";

interface DownloadButtonProps {
  disabled: () => boolean;
  imgSrc: Accessor<string>
}

function DownloadButton(props: DownloadButtonProps) {
  return (
    <Button
      onClick={async () => {
        const res = await fetch(props.imgSrc());
        await downloadBlob(await res.blob(), "payment_qr.png");
      }}
      class="flex items-center gap-1"
      disabled={props.disabled()}
    >
      <TbDownload size={16} /> Download
    </Button>
  );
}

export default DownloadButton;
