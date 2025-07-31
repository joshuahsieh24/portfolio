export default function CafeBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle coffee ring in corner */}
      <div className="absolute bottom-8 left-8 opacity-5">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="50" stroke="#D1BFA7" strokeWidth="2" fill="none" opacity="0.3" />
          <circle cx="60" cy="60" r="40" stroke="#D1BFA7" strokeWidth="1" fill="none" opacity="0.2" />
          <circle cx="60" cy="60" r="30" stroke="#D1BFA7" strokeWidth="1" fill="none" opacity="0.1" />
        </svg>
      </div>
      
      {/* Floating note paper */}
      <div className="absolute top-20 right-16 opacity-10 animate-float">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="8" y="4" width="24" height="32" rx="2" fill="#F5F7FA" stroke="#C7DAE5" strokeWidth="1" />
          <line x1="12" y1="12" x2="28" y2="12" stroke="#C7DAE5" strokeWidth="1" />
          <line x1="12" y1="16" x2="24" y2="16" stroke="#C7DAE5" strokeWidth="1" />
          <line x1="12" y1="20" x2="26" y2="20" stroke="#C7DAE5" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 opacity-2">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(199,218,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(199,218,229,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
    </div>
  );
} 