interface AdaptiveAdProps {
  width: string;
  height: string;
  className?: string;
}

export function AdaptiveAd({ width, height, className = "" }: AdaptiveAdProps) {
  return (
    <div 
      className={`bg-gray-300 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <p className="text-gray-600 text-sm">Ad {width}x{height}</p>
    </div>
  );
}

