import { useState, useEffect, useRef } from "react";

import hljs from "highlight.js";
import "highlight.js/styles/github.css";

import exampleCodes from "../../helpers/codeExamples";
import { CodeBlock } from "./CodeBlock";
import { CopyButton } from "./CopyButton";
import { TabsNavigation } from "./TabsNavigation";
import { WindowControls } from "./WindowControls";

/**
 * Top-level presentational section that glues the smaller pieces together.
 */
const CodeExample = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof exampleCodes>("core");

  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [activeTab]);

  return (
    <section className="py-16 min-h-[100svh]" id="code-examples">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Heading */}
        <header className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Simple but Powerful API
          </h2>
          <p className="text-lg text-gray-600 max-w-[42rem]">
            Write clean, maintainable code with our intuitive API design.
          </p>
        </header>

        {/* macOS-style “window” */}
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          {/* Title bar */}
          <div className="flex items-center justify-between bg-stone-200 px-4 py-2 border-b border-gray-200">
            <WindowControls />
            <CopyButton text={exampleCodes[activeTab]} />
          </div>

          {/* Tabs */}
          <TabsNavigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={exampleCodes}
          />

          {/* Code */}
          <CodeBlock
            key={activeTab}
            ref={codeRef}
            className="typescript"
            code={exampleCodes[activeTab]}
          />
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
