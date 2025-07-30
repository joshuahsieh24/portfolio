import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] text-center px-6 relative">
      {/* Floating sleepy cat astronaut */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <svg
          className="w-64 h-64 animate-float opacity-60"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cat head */}
          <ellipse cx="128" cy="120" rx="60" ry="50" fill="#293449" opacity="0.3" />
          <ellipse cx="128" cy="120" rx="50" ry="40" fill="#7DD3FC" opacity="0.2" />
          
          {/* Ears */}
          <path d="M80 80 L100 60 L120 80 Z" fill="#293449" opacity="0.4" />
          <path d="M136 80 L156 60 L176 80 Z" fill="#293449" opacity="0.4" />
          
          {/* Eyes (sleepy) */}
          <ellipse cx="110" cy="110" rx="8" ry="4" fill="#F6BD60" opacity="0.8" />
          <ellipse cx="146" cy="110" rx="8" ry="4" fill="#F6BD60" opacity="0.8" />
          
          {/* Nose */}
          <circle cx="128" cy="125" r="3" fill="#F6BD60" opacity="0.6" />
          
          {/* Mouth (sleepy) */}
          <path d="M118 135 Q128 140 138 135" stroke="#F6BD60" strokeWidth="2" fill="none" opacity="0.6" />
          
          {/* Space helmet */}
          <circle cx="128" cy="120" r="65" stroke="#7DD3FC" strokeWidth="2" fill="none" opacity="0.3" />
          <circle cx="128" cy="120" r="55" stroke="#7DD3FC" strokeWidth="1" fill="none" opacity="0.2" />
          
          {/* Floating stars */}
          <circle cx="50" cy="50" r="1" fill="#7DD3FC" opacity="0.8" className="animate-twinkle" />
          <circle cx="200" cy="80" r="1" fill="#F6BD60" opacity="0.8" className="animate-twinkle" />
          <circle cx="180" cy="180" r="1" fill="#7DD3FC" opacity="0.8" className="animate-twinkle" />
          <circle cx="60" cy="200" r="1" fill="#F6BD60" opacity="0.8" className="animate-twinkle" />
        </svg>
      </div>
      
      <div className="space-y-6 z-10">
        <h1 className="text-6xl font-headline font-bold tracking-wide text-skyteal">
          404
        </h1>
        <h2 className="text-2xl font-headline font-bold tracking-wide text-skyteal">
          Page Not Found
        </h2>
        <p className="text-muted-foreground max-w-md">
          Looks like this page got lost in space! The sleepy cat astronaut is floating around somewhere, 
          but this page isn't where it should be.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" asChild>
            <Link href="/">
              Go Home
            </Link>
          </Button>
          <Button variant="outline" className="border-skyteal/20 text-skyteal hover:bg-skyteal/20" asChild>
            <Link href="/#contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 