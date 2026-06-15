import { DATA } from "@/data/resume";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left — name */}
          <Link
            href="/#hero"
            className="text-base sm:text-xl font-medium text-foreground hover:text-primary transition-colors shrink-0"
          >
            Joshua Hsieh
          </Link>

          {/* Right — section anchors + writing + socials + avatar */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="/#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
              <Link href="/#thinking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Thinking
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Journal
              </Link>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <ModeToggle />
              <Link
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icons.github className="w-[18px] h-[18px]" />
              </Link>
              <Link
                href="/#contact"
                className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Avatar className="w-7 h-7 sm:w-8 sm:h-8 ring-2 ring-foreground/15">
                <AvatarImage src={DATA.avatarUrl} alt={DATA.name} className="object-cover" />
                <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
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
