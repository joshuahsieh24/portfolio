"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { useState } from "react";

const DELAY = 0.04;

type Tab = "work" | "about";

// Loose type so conditional rendering doesn't narrow to `never` on literal fields
type Project = {
  title: string;
  href: string;
  target: string;
  rel: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: ReadonlyArray<{ type: string; href: string; icon: undefined }>;
  image: string;
  video: string | undefined;
};

// 4 main projects in the grid — ToGoBot listed separately as a smaller entry
const ALL_PROJECTS = DATA.projects as readonly Project[];
const MAIN_PROJECTS = ALL_PROJECTS.slice(0, 4);
const SIDE_PROJECTS = ALL_PROJECTS.slice(4);

export default function Page() {
  const [tab, setTab] = useState<Tab>("work");

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-24">

        {/* ── Identity ────────────────────────────────────────────── */}
        <BlurFade delay={DELAY}>
          <div className="mb-10">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-1.5">
              Joshua Hsieh
            </h1>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Software engineer — I build things end-to-end and care about
              how they work, what they&apos;re for, and what they feel like to use.
            </p>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mt-2 text-sm text-muted-foreground/55">
              <span>SJSU · Delta Dental · Bay Area</span>
              <span className="mx-0.5">·</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                Open to roles
              </span>
            </div>
          </div>
        </BlurFade>

        {/* ── Tabs ────────────────────────────────────────────────── */}
        <BlurFade delay={DELAY * 2}>
          <div className="flex items-center gap-6 border-b border-border mb-10">
            {(["work", "about"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 text-sm capitalize transition-colors border-b-2 -mb-px ${
                  tab === t
                    ? "text-foreground border-foreground font-medium"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </BlurFade>

        {/* ── Work tab ────────────────────────────────────────────── */}
        {tab === "work" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {MAIN_PROJECTS.map((project, i) => (
                <BlurFade key={project.title} delay={DELAY * 3 + i * 0.07}>
                  <WorkCard project={project} />
                </BlurFade>
              ))}
            </div>

            {/* Smaller / earlier projects */}
            {SIDE_PROJECTS.length > 0 && (
              <BlurFade delay={DELAY * 8}>
                <div className="mt-16 pt-10 border-t border-border">
                  <h2 className="text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase mb-6">
                    Also
                  </h2>
                  <div className="space-y-4">
                    {SIDE_PROJECTS.map((project) => (
                      <div key={project.title} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors underline underline-offset-2 decoration-border"
                          >
                            {project.title}
                          </Link>
                          <span className="text-sm text-muted-foreground line-clamp-1">
                            {project.description.split(".")[0]}.
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground/50 shrink-0">{project.dates}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            )}
          </>
        )}

        {/* ── About tab ───────────────────────────────────────────── */}
        {tab === "about" && <AboutSection />}

      </div>
    </main>
  );
}

// ── Work card ─────────────────────────────────────────────────────────────

function WorkCard({ project }: { project: Project }) {
  const inner = (
    <div className="group cursor-pointer">
      {/* Media */}
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-stone-100">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-stone-100">
            <span className="text-sm text-stone-400">{project.title}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-3">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-foreground">{project.title}</span>
          <span className="text-xs text-muted-foreground/50 shrink-0">{project.dates}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] text-muted-foreground/70 bg-secondary px-1.5 py-0.5 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (project.href) {
    return (
      <Link href={project.href} target="_blank" rel="noopener noreferrer">
        {inner}
      </Link>
    );
  }
  return inner;
}

// ── About section ──────────────────────────────────────────────────────────

function AboutSection() {
  const primaryWork = DATA.work.slice(0, 2);
  const additionalWork = DATA.work.slice(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-12 md:gap-16">

      {/* Left — content */}
      <div className="space-y-14">

        {/* Bio */}
        <BlurFade delay={DELAY * 3}>
          <div className="space-y-3">
            <p className="text-base text-foreground leading-relaxed">
              I&apos;m a software engineering student at SJSU. I build full-stack web and mobile
              apps — and care a lot about getting the details right in code, in product decisions,
              and in how things actually feel to use.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Currently interning at Delta Dental building internal Salesforce tooling.
              Previously built a course discovery platform for SJSU&apos;s College of Engineering.
              Open to full-time roles starting 2027.
            </p>
          </div>
        </BlurFade>

        {/* Experience */}
        <BlurFade delay={DELAY * 4}>
          <div>
            <h2 className="text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase mb-5">
              Experience
            </h2>
            <div className="divide-y divide-border">
              {primaryWork.map((work) => (
                <div key={work.company} className="py-4 first:pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <div className="flex flex-wrap items-baseline gap-x-2 min-w-0">
                      <span className="text-sm font-medium text-foreground">{work.company}</span>
                      <span className="text-muted-foreground/30">·</span>
                      <span className="text-sm text-muted-foreground">{work.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground/50 shrink-0">
                      {work.start} – {work.end ?? "Present"}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              ))}

              {/* Additional — compact */}
              {additionalWork.map((work) => (
                <div
                  key={work.company}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-3 gap-0.5 sm:gap-4"
                >
                  <div className="flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-sm text-muted-foreground">{work.company}</span>
                    <span className="text-muted-foreground/30">·</span>
                    <span className="text-sm text-muted-foreground/70">{work.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground/40 shrink-0">
                    {work.start} – {work.end ?? "Present"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Outside */}
        <BlurFade delay={DELAY * 5}>
          <div>
            <h2 className="text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase mb-5">
              Outside
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              I fold origami, solve Rubik&apos;s cubes, play basketball and badminton, and type
              faster than I probably need to (210 wpm). The common thread is probably
              precision — finding the pattern, building the rhythm, making something feel
              easy that isn&apos;t.
            </p>
          </div>
        </BlurFade>

        {/* Say hi */}
        <BlurFade delay={DELAY * 6}>
          <div>
            <h2 className="text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase mb-5">
              Say hi
            </h2>
            <div className="flex flex-wrap gap-5">
              {[
                { label: "Email", href: `mailto:${DATA.contact.email}` },
                { label: "LinkedIn", href: DATA.contact.social.LinkedIn.url, external: true },
                { label: "GitHub", href: DATA.contact.social.GitHub.url, external: true },
                { label: "Blog", href: "https://dev.to/josh_hsiehh", external: true },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-foreground hover:text-muted-foreground transition-colors underline underline-offset-2 decoration-border"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>

      </div>

      {/* Right — photo, sticky on desktop */}
      <div className="hidden md:block">
        <BlurFade delay={DELAY * 3}>
          <div className="sticky top-28">
            <img
              src={DATA.avatarUrl}
              alt={DATA.name}
              className="w-full aspect-[3/4] object-cover rounded-xl grayscale-[20%]"
            />
            <p className="text-xs text-muted-foreground/50 mt-3 text-center">
              San Jose, CA
            </p>
          </div>
        </BlurFade>
      </div>

    </div>
  );
}
