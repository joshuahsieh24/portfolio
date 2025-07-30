import { cn } from "@/lib/utils";

interface ForestBackdropProps {
  brightness?: "low" | "mid" | "high";
}

export default function ForestBackdrop({ brightness = "mid" }: ForestBackdropProps) {
  const glowOpacity = {
    low: "opacity-20",
    mid: "opacity-30",
    high: "opacity-40"
  }[brightness];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle forest background */}
      <div className={cn("absolute inset-0 bg-gradient-to-br from-canopy via-moss/60 to-canopy/80", glowOpacity)} />
      
      {/* Few subtle floating orbs */}
      <div className="absolute inset-0">
        {/* Orb 1 - Top left */}
        <div className="absolute w-2 h-2 bg-aqua/40 rounded-full animate-float opacity-60"
             style={{ left: '15%', top: '20%', animationDelay: '0s' }} />
        
        {/* Orb 2 - Top right */}
        <div className="absolute w-1.5 h-1.5 bg-leaf/50 rounded-full animate-float opacity-50"
             style={{ right: '20%', top: '15%', animationDelay: '3s' }} />
        
        {/* Orb 3 - Bottom center */}
        <div className="absolute w-2 h-2 bg-aqua/30 rounded-full animate-float opacity-40"
             style={{ left: '50%', bottom: '20%', animationDelay: '6s' }} />
      </div>

      {/* Subtle light rays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-aqua/5 to-transparent animate-shimmer"
             style={{ animationDelay: '2s' }} />
      </div>

      {/* Minimal floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute bg-cloud/20 rounded-full animate-drift",
              i % 2 === 0 ? "w-0.5 h-0.5" : "w-1 h-1"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </div>
  );
} 