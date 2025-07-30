import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
    target?: string;
    rel?: string;
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4 group">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-canopy/40 rounded-full border-2 border-leaf/20 shadow-[0_0_8px_theme('colors.leaf')/20] group-hover:shadow-[0_0_12px_theme('colors.leaf')/30] transition-shadow duration-300">
        <Avatar className="border-2 border-leaf/20 size-12 m-auto bg-transparent">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback className="bg-transparent text-leaf">{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-cloud">{dates}</time>
        )}
        <h2 className="font-semibold leading-none text-cloud group-hover:text-leaf transition-colors duration-200">{title}</h2>
        {location && (
          <p className="text-sm text-cloud">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-cloud prose-headings:text-sun prose-a:text-aqua">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link 
              href={link.href} 
              key={idx}
              target={link.target || "_blank"}
              rel={link.rel || "noopener noreferrer"}
            >
              <Badge key={idx} title={link.title} className="flex gap-2 bg-leaf/20 text-leaf border border-leaf/30 hover:bg-leaf/30 transition-colors duration-200">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
