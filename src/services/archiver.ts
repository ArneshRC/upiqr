import { downloadZip } from "client-zip";

const zipPngBlobs = (pngBlobs: Blob[]): Promise<Blob> => {
  const zipBlob = downloadZip(
    pngBlobs.map((blob, idx) => {
      return { name: `${String(idx + 1).padStart(3, "0")}.png`, input: blob };
    }),
  ).blob();
  return zipBlob;
};

export { zipPngBlobs };
