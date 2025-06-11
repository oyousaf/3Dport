const CanvasLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-mint animate-pulse" />
      <p className="text-sm font-semibold text-gray200">Loading 3D...</p>
    </div>
  </div>
);

export default CanvasLoader;
