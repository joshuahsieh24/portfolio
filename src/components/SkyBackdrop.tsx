import { cn } from "@/lib/utils";

export default function SkyBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Star field background */}
      <div className="absolute inset-0 bg-gradient-to-br from-skyteal/30 to-peachglow/20" />
      
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-1 bg-white rounded-full animate-twinkle",
              "opacity-60"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating elements - simplified */}
      <div className="absolute inset-0">
        {/* Teapot-shaped planet */}
        <svg
          className="absolute w-16 h-16 animate-float opacity-40"
          style={{
            left: '10%',
            top: '20%',
            animationDelay: '0s',
          }}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="32" cy="40" rx="20" ry="12" fill="#7DD3FC" opacity="0.3" />
          <ellipse cx="32" cy="36" rx="16" ry="10" fill="#F6BD60" opacity="0.2" />
          <circle cx="28" cy="32" r="2" fill="#7DD3FC" opacity="0.6" />
          <circle cx="36" cy="32" r="2" fill="#7DD3FC" opacity="0.6" />
          <path d="M24 28 Q32 24 40 28" stroke="#F6BD60" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>

        {/* Window-lit satellite cabin */}
        <svg
          className="absolute w-12 h-12 animate-float opacity-30"
          style={{
            right: '15%',
            top: '30%',
            animationDelay: '2s',
          }}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="12" width="32" height="24" rx="4" fill="#293449" opacity="0.4" />
          <rect x="12" y="16" width="8" height="8" fill="#7DD3FC" opacity="0.6" />
          <rect x="28" y="16" width="8" height="8" fill="#7DD3FC" opacity="0.6" />
          <rect x="12" y="28" width="8" height="4" fill="#F6BD60" opacity="0.4" />
          <rect x="28" y="28" width="8" height="4" fill="#F6BD60" opacity="0.4" />
          <circle cx="24" cy="8" r="2" fill="#7DD3FC" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
} 