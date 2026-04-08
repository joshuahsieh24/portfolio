import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-foreground hover:text-muted-foreground transition-colors"
        >
          JH
        </Link>
        <Link
          href="/JoshuaHsiehResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Resume ↗
        </Link>
      </div>
    </nav>
  );
}
