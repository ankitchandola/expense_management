export const saveBlobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const base64ToBlob = (
  base64Data: string,
  contentType = "application/zip"
): Blob => {
  if (typeof base64Data !== "string") {
    throw new Error("Invalid input: base64Data must be a string");
  }

  const regex = /^data:(.+?);base64,/;
  const matches = base64Data.match(regex);

  if (!matches) {
    throw new Error("Invalid base64 format");
  }

  const byteCharacters = atob(base64Data.split(",")[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    byteArrays.push(new Uint8Array(byteNumbers));
  }

  return new Blob(byteArrays, { type: contentType });
};

export const fetchFileBlob = async (url: string): Promise<Blob> => {
  const response = await fetch(url);
  return response.blob();
};
