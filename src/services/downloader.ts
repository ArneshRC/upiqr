const downloadBlob = async (blob: Blob, fileName: string = "cutout.png") => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  link.remove();
};

export { downloadBlob };
