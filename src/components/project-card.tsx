import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
    target?: string;
    rel?: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className="flex flex-col overflow-hidden border border-skyteal/10 bg-surface/40 backdrop-blur-sm hover:shadow-[0_0_8px_theme('colors.skyteal')/20] hover:bg-surface/60 transition-all duration-300 ease-out h-full group"
      style={{ margin: 0, padding: 0 }}
    >
      {/* ❌ Remove Link wrapping the media */}
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
        />
      )}
      {image && (
        <div className="relative h-40 w-full overflow-hidden bg-surface/40" style={{ margin: 0, padding: 0 }}>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center"
            style={{ 
              objectPosition: 'center top',
              margin: 0,
              padding: 0
            }}
          />
        </div>
      )}

      {/* ✅ Move Link to ONLY wrap title if href exists */}
      <CardHeader className="px-2">
        <div className="space-y-1">
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("block", className)}
            >
              <CardTitle className="mt-1 text-base text-muted-foreground group-hover:text-skyteal transition-colors duration-200">{title}</CardTitle>
            </Link>
          ) : (
            <CardTitle className="mt-1 text-base text-muted-foreground group-hover:text-skyteal transition-colors duration-200">{title}</CardTitle>
          )}
          <time className="font-sans text-xs text-muted-foreground">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert prose-headings:text-skyteal prose-a:text-peachglow">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] bg-peachglow/20 text-peachglow border border-peachglow/30"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target={link.target || "_blank"}
                rel={link.rel || "noopener noreferrer"}
              >
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px] bg-skyteal/20 text-skyteal border border-skyteal/30 hover:bg-skyteal/30 transition-colors duration-200">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
