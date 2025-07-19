import { useEffect, useRef } from "react";
import hljs from "highlight.js";

type CodeBlockProps = {
  code: string;
  language?: string; // default “typescript”
  ref: React.RefObject<HTMLElement | null>;
  className?: string;
};

export const CodeBlock = ({
  code,
  language = "typescript",
}: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);

  // kick off highlight.js when the code string changes
  useEffect(() => {
    if (codeRef.current) hljs.highlightElement(codeRef.current);
  }, [code]);

  return (
    <pre className="text-sm font-mono text-gray-800 whitespace-pre bg-stone-100 py-4 px-2 overflow-x-auto">
      <code ref={codeRef} className={language}>
        {code}
      </code>
    </pre>
  );
};
