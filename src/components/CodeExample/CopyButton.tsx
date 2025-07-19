import { Copy } from "lucide-react";
import { useCopyToClipboard } from "../../helpers/useCopyToClipboard";

type CopyButtonProps = { text: string };

export const CopyButton = ({ text }: CopyButtonProps) => {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <div className="relative">
      <button
        onClick={() => copy(text)}
        className="flex items-center gap-1 px-4 py-1 text-xs text-gray-500 hover:text-gray-700 rounded hover:bg-stone-300 transition-colors"
      >
        <Copy className="h-3.5 w-3.5" />
        Copy
      </button>
      {isCopied && (
        <span className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded left-1/2 -translate-x-1/2 z-50">
          Copied!
        </span>
      )}
    </div>
  );
};
