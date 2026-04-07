"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard, ProjectDepth } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import AnimatedBackground from "@/components/AnimatedBackground";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Navbar from "@/components/navbar";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return <Link href={href} {...props}>{props.children}</Link>;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const PROJECT_DETAILS: Record<string, { impact: string; depth: ProjectDepth }> = {
  FinanceAI: {
    impact: "Surfaces the highest-confidence anomalies first — cutting analyst triage time by reducing noise before a human ever opens a dashboard.",
    depth: {
      label: "Architecture & tradeoffs",
      sections: [
        {
          title: "Architecture",
          body: "Python ML pipeline (Isolation Forest + custom per-transaction scoring) feeds a TypeScript dashboard. Supabase handles real-time event streaming; fraud scores are computed per batch with configurable sensitivity thresholds.",
        },
        {
          title: "Key tradeoff",
          body: "Chose unsupervised anomaly detection over supervised classification — no labeled fraud dataset was available, and the model needed to generalize across transaction types without periodic retraining.",
        },
      ],
    },
  },
  "R.E.R.S": {
    impact: "Eliminates manual handoff steps between dispatch and first responders — incident awareness from call intake to scene arrival in one continuous view.",
    depth: {
      label: "Architecture & tradeoffs",
      sections: [
        {
          title: "Architecture",
          body: "Next.js with role-based views (dispatcher vs. paramedic). FastAPI backend + PostgreSQL for incident state. Mapbox GL for real-time GPS overlays. WebSocket connections maintain live incident feeds without polling.",
        },
        {
          title: "Key tradeoff",
          body: "Used Mapbox over Google Maps for composable, fast-rendering incident overlays — the visual control was necessary for layering GPS pins, incident zones, and responder paths without performance degradation.",
        },
      ],
    },
  },
};

const SKILL_GROUPS = [
  { label: "Product Layer",  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"] },
  { label: "Backend & Data", skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Supabase", "Prisma"] },
  { label: "Infrastructure", skills: ["Docker", "AWS", "Firebase", "Git", "REST APIs"] },
  { label: "Languages",      skills: ["Java", "C++"] },
];

export default function Page() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [bluehour, ...allRest] = DATA.projects;
  // Show only the two strongest additional projects
  const featuredProjects = allRest.slice(0, 2);
  // Two primary roles; rest go to the compact list
  const primaryWork = DATA.work.slice(0, 2);
  const additionalWork = DATA.work.slice(2);

  return (
    <main className="flex flex-col min-h-[100dvh] relative">
      <AnimatedBackground />

      {/* ── Hero ─────────────────────────────────────────── */}
      {/* Compact — does not consume full viewport */}
      <section id="hero" className="pt-36 pb-20 px-6 flex items-center justify-center relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {DATA.name}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                I build software with{" "}
                <span className="text-white font-medium">engineering depth</span>,{" "}
                <span className="text-white font-medium">product instinct</span>, and{" "}
                <span className="text-white font-medium">design taste</span>.
              </p>
              {/* Currently building — single subdued line */}
              <div className="flex items-center justify-center gap-2.5 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400/80 animate-pulse shrink-0" />
                <span>
                  Currently building{" "}
                  <span className="text-gray-400">Bluehour</span>
                  {" "}— a second-monitor focus environment exploring calm UX, scene rendering, and ambient sound design.
                </span>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => smoothScrollTo("projects")}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  See my work
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Featured Work ─────────────────────────────────── */}
      <section id="projects" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="mb-10">
              <span className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">Featured Work</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                Things I've Built
              </h2>
            </div>
          </BlurFade>

          {/* ── Bluehour Centerpiece ── */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="group relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5 hover:ring-white/10 transition-all duration-300">
                <div className="w-full h-64 md:h-80 overflow-hidden">
                  <img
                    src="/bluehour.png"
                    alt="Bluehour"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-700"
                  />
                </div>
                <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left */}
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Centerpiece Project</span>
                      <h3 className="text-3xl font-bold text-white mt-2 mb-3">Bluehour</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Fullscreen ambient focus app designed to live on a second monitor — six curated live scenes with canvas-rendered particle effects, optional looping audio, and a minimal timer overlay with session history.
                      </p>
                      <p className="mt-3 text-sm text-gray-500 italic">
                        Second-monitor workflow · Sub-second scene loading · Zero-friction start · Immersion without interruption
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {bluehour.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-white border-white/20 bg-white/5 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href="https://bluehourfocus.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl text-sm font-semibold hover:bg-gray-100 transition-all duration-200"
                      >
                        Visit Site
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                      <Link
                        href="https://github.com/joshuahsieh24/bluehour"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white rounded-xl text-sm font-semibold hover:bg-white/10 transition-all duration-200"
                      >
                        Source
                      </Link>
                    </div>
                  </div>
                  {/* Right — case study */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Why I Built It</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Existing focus tools are cluttered, notification-heavy, or ugly. I wanted something that respects your attention the way a well-designed physical object does — present, calm, and frictionless to use.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Key Product Decisions</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        No accounts required. No distracting dashboards. The app opens into a scene immediately — the mental model is closer to a lamp you turn on than a product you log into.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Technical Architecture</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Canvas-rendered particle systems (rain, haze, dust) via requestAnimationFrame loops. Howler.js for seamless audio looping. A pre-session → active ↔ paused → complete state machine drives all timer logic.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">What I Optimized For</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Sub-second load, zero-friction first use, and a visual quality bar closer to a native app than a side project — because the aesthetic is inseparable from the product promise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* ── 2 supporting projects ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, id) => {
              const details = PROJECT_DETAILS[project.title];
              return (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 5 + id * 0.1}>
                  <div className="group relative h-full hover:scale-[1.015] transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
                    <ProjectCard
                      href={project.href}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                      impact={details?.impact}
                      depth={details?.depth}
                    />
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Experience ────────────────────────────────────── */}
      <section id="work" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="mb-10">
              <span className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">Experience</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                Where I've Shipped
              </h2>
            </div>
          </BlurFade>

          {/* Two primary roles */}
          <div className="space-y-4">
            {primaryWork.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 9 + id * 0.08}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                  <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 hover:shadow-white/5 transition-all duration-300 hover:scale-[1.01]">
                    <ResumeCard
                      key={work.company}
                      logoUrl={work.logoUrl}
                      altText={work.company}
                      title={work.company}
                      subtitle={work.title}
                      href={work.href}
                      badges={work.badges}
                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={work.description}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Additional — compact list */}
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="mt-6">
              <p className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase mb-4 ml-1">
                Additional
              </p>
              <div className="divide-y divide-white/[0.04] border border-white/[0.07] rounded-xl overflow-hidden">
                {additionalWork.map((work) => (
                  <div key={work.company} className="flex items-center justify-between px-5 py-3.5 hover:bg-white/[0.03] transition-colors duration-200">
                    <div className="flex items-center gap-3">
                      {work.logoUrl && (
                        <img src={work.logoUrl} alt={work.company} className="w-5 h-5 rounded-full object-cover opacity-50" />
                      )}
                      <span className="text-sm text-gray-400">{work.company}</span>
                      <span className="text-gray-700">·</span>
                      <span className="text-sm text-gray-600">{work.title}</span>
                    </div>
                    <span className="text-xs text-gray-700 shrink-0 ml-4">
                      {work.start} – {work.end ?? "Present"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── How I Think ───────────────────────────────────── */}
      <section id="thinking" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="mb-10">
              <span className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">Thinking</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                How I Make Decisions
              </h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                label: "01",
                title: "Design is a constraint, not decoration",
                body: "Good design reduces cognitive load and earns trust before a user reads a single word. I treat aesthetic decisions as product decisions.",
              },
              {
                label: "02",
                title: "Ship to learn, then polish to ship",
                body: "Velocity exposes what actually matters. I build fast in discovery and hold a high bar before anything goes in front of people.",
              },
              {
                label: "03",
                title: "Real depth shows in how you handle failure",
                body: "Edge cases, error states, and degraded experiences reveal whether something was engineered or just assembled. I think about what breaks.",
              },
              {
                label: "04",
                title: "Products are for people, not portfolios",
                body: "The measure of a feature is whether someone uses it — not whether it was technically interesting to build. I stay user-anchored.",
              },
            ].map((principle, id) => (
              <BlurFade key={principle.label} delay={BLUR_FADE_DELAY * 13 + id * 0.06}>
                <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 h-full hover:bg-white/[0.05] transition-colors duration-300">
                  <span className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase">{principle.label}</span>
                  <h3 className="text-base font-semibold text-white mt-2.5 mb-2 leading-snug">{principle.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{principle.body}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outside the screen — ambient pause, no heading ── */}
      <section className="py-12 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { src: "/pic6.jpg", alt: "Mossy forest trail" },
                { src: "/pic3.jpg", alt: "Snow cabin through doorframe" },
                { src: "/pic2.jpg", alt: "Forest walk, sun through pines" },
              ].map((photo) => (
                <div key={photo.src} className="overflow-hidden rounded-xl aspect-[3/2] bg-white/[0.02]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-90 transition-all duration-700 ease-in-out"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
              <div>
                <span className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase block mb-1">Listening to</span>
                <p className="text-sm text-gray-400">Nils Frahm · Jon Hopkins · Bill Evans</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase block mb-1">Outside work</span>
                <p className="text-sm text-gray-400">badminton · cooking · hiking</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase block mb-1">Typing speed</span>
                <p className="text-sm text-gray-400">210 wpm · 100% accuracy</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Stack ─────────────────────────────────────────── */}
      <section id="skills" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="mb-10">
              <span className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">Stack</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                Tools I Trust
              </h2>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-5">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <span className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase w-32 shrink-0">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-gray-300 border-white/[0.12] bg-white/[0.04] px-3 py-1.5 text-xs font-medium hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="space-y-7">
              <div>
                <span className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase">Contact</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                  Let's Talk
                </h2>
              </div>
              <p className="text-base text-gray-400 max-w-lg mx-auto leading-relaxed">
                Looking for my next role — somewhere I can ship at the intersection of engineering, product, and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-white/20 min-w-[180px]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Link>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 min-w-[180px]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="py-8 px-6 bg-background border-t border-border/20">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
          <p className="text-xs text-gray-700 italic">
            Software should reduce friction between intent and action.
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { label: "Email", href: `mailto:${DATA.contact.email}` },
              { label: "Resume", href: "/JoshuaHsiehResume.pdf", external: true },
              { label: "LinkedIn", href: DATA.contact.social.LinkedIn.url, external: true },
              { label: "GitHub", href: DATA.contact.social.GitHub.url, external: true },
              { label: "Blog", href: "https://dev.to/josh_hsiehh", external: true },
              { label: "YouTube", href: "https://www.youtube.com/@Joshua-wg5lt", external: true },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      <Navbar />
    </main>
  );
}
