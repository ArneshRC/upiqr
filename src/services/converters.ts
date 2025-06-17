const svg2png = async (svgElem: SVGSVGElement, width: number, height: number): Promise<Blob> => {
  const dataHeader = "data:image/svg+xml;charset=utf-8";

  const loadImage = async (url: string): Promise<HTMLImageElement> => {
    const img = document.createElement("img");
    img.src = url;
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  };

  const serializeAsXML = (elem: Element) =>
    new XMLSerializer().serializeToString(elem);

  const encodeAsUTF8 = (serializedXML: string) =>
    `${dataHeader},${encodeURIComponent(serializedXML)}`;

  const svgData = encodeAsUTF8(serializeAsXML(svgElem));

  const img: HTMLImageElement = await loadImage(svgData);

  const canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0, width, height);

  return await new Promise((resolve) =>
    canvas.toBlob((blob) => {
      resolve(blob!);
    }, "image/png"),
  );
};

export { svg2png };
