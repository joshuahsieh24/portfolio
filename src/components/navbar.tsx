import { DATA } from "@/data/resume";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left — name */}
          <Link
            href="#hero"
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
          >
            Joshua Hsieh
          </Link>

          {/* Right — section anchors + resume + avatar */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <Link href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#work" className="text-sm text-gray-400 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="#thinking" className="text-sm text-gray-400 hover:text-white transition-colors">
                Thinking
              </Link>
            </div>
            <div className="flex items-center gap-4">
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
                Contact
              </Link>
              <Avatar className="w-8 h-8 ring-2 ring-white/20">
                <AvatarImage src={DATA.avatarUrl} alt={DATA.name} className="object-cover" />
                <AvatarFallback className="text-xs bg-secondary text-white">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
