import { useState } from "react";

/**
 * Copies arbitrary text to the clipboard and returns a short-lived state flag.
 */
export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1_500);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to copy:", err);
    }
  };

  return { isCopied, copy };
};
