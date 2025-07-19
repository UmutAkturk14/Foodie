const HeroText = () => {
  return (
    <div className="quokka-font">
      <h1 className="text-3xl md:text-7xl font-semibold relative inline-block">
        Type-safe, efficient, and{" "}
        <span className="relative inline-block">
          <span className="absolute -bottom-1 left-0 w-full h-3 bg-yellow-300/50  -z-10"></span>
          <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent font-bold">
            developer-friendly
          </span>
        </span>
      </h1>
    </div>
  );
};

export default HeroText;
