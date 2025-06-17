import { createEffect, Setter } from "solid-js";
import { useConfig } from "@contexts/ConfigContext";
import QrCodeWithLogo from "qrcode-with-logos";

interface PreviewQRProps {
  setImgSrc: Setter<string>;
}

function PreviewQR(props: PreviewQRProps) {
  const config = useConfig()!;
  const [upiId] = config.upiId;
  const [amount] = config.amount;
  const [description] = config.description;
  const [withLogo] = config.withLogo;
  const [logoUrl] = config.logoUrl;
  let imageRef: HTMLImageElement | undefined;

  createEffect(async () => {
    if (!/[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}/.test(upiId())) {
      imageRef!.src = "";
      return;
    }
    const params = new URLSearchParams();
    params.append("pa", upiId());
    params.append("am", String(amount()));
    if (!/^\s+$/.test(description())) params.append("tn", String(description()));
    const img = await new QrCodeWithLogo({
      content: `upi://pay?${params}`,
      width: 1024,
      image: imageRef,
      logo: withLogo()
        ? {
            src: logoUrl(),
          }
        : undefined,
    }).getImage();
    props.setImgSrc(img.src);
  });

  return <img ref={imageRef} class="w-full" />;
}

export default PreviewQR;
