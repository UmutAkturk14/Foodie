import React from "react";

const subTextTags: string[] = [
  "Open Source",
  "MIT Licensed",
  "TypeScript",
  "No Dependencies",
  "Lightweight",
];

const HeroSubtext: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
      {subTextTags.map((tag, index) => (
        <React.Fragment key={tag}>
          <span className="px-2 py-1 text-gray-700 tracking-wider">{tag}</span>
          {index < subTextTags.length - 1 && (
            <span className="font-semibold">·</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeroSubtext;
