import React from "react";
import clsx from "clsx";

interface HeroBottomTextProps {
  title?: string;
  description?: string;
}

interface HeroBottomTextProps {
  className?: string;
}

const textContent: HeroBottomTextProps = {
  title: "Designed for Modern Development",
  description:
    "Everything you need to build robust applications with clean, maintainable code.",
};

const HeroBottomText: React.FC<Pick<HeroBottomTextProps, "className">> = ({
  className,
}) => {
  const { title, description } = textContent;
  return (
    <div className={clsx("flex flex-col items-center gap-4", className)}>
      <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2">
        {title}
      </h2>
      <p className=" md:text-lg text-gray-600 text-center max-w-2xl">
        {description}
      </p>
    </div>
  );
};

export default HeroBottomText;
