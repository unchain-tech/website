const bufferToHex = (buffer: ArrayBuffer): string => {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

export const generateNonce = (): string => {
  return bufferToHex(crypto.getRandomValues(new Uint8Array(16)).buffer);
};
