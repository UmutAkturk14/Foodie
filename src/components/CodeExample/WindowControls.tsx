const Dot = ({ className }: { className: string }) => (
  <div className={`w-3 h-3 rounded-full ${className}`} />
);

export const WindowControls = () => (
  <div className="flex space-x-2">
    <Dot className="bg-red-400" />
    <Dot className="bg-yellow-400" />
    <Dot className="bg-green-400" />
  </div>
);
