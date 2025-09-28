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
      className="flex flex-col overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-lg hover:bg-white/10 transition-all duration-300 ease-out h-full group"
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
        <div className="relative h-40 w-full overflow-hidden bg-secondary" style={{ margin: 0, padding: 0 }}>
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
              <CardTitle className="mt-1 text-base text-white group-hover:text-gray-200 transition-colors duration-200">{title}</CardTitle>
            </Link>
          ) : (
            <CardTitle className="mt-1 text-base text-white group-hover:text-gray-200 transition-colors duration-200">{title}</CardTitle>
          )}
          <time className="font-sans text-xs text-gray-300">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-gray-300 dark:prose-invert prose-headings:text-white prose-a:text-white">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] bg-white/10 text-white border border-white/30"
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
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px] bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors duration-200">
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
