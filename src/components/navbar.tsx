import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Name */}
          <Link 
            href="#hero"
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
          >
            Joshua Hsieh
          </Link>
          
          {/* Right side - Navigation links and dark mode toggle */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/JoshuaHsiehResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Resume
            </Link>
            <Link 
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Let's Connect
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
