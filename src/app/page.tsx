"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard, ProjectDepth } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import AnimatedBackground from "@/components/AnimatedBackground";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Navbar from "@/components/navbar";

const BLUR_FADE_DELAY = 0.04;

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

const PRINCIPLES = [
  {
    n: "01",
    title: "Design is a constraint, not decoration",
    body: "Good design reduces cognitive load and earns trust before a user reads a single word. I treat aesthetic decisions as product decisions.",
  },
  {
    n: "02",
    title: "Ship to learn, then polish to ship",
    body: "Velocity exposes what actually matters. I build fast in discovery and hold a high bar before anything goes in front of people.",
  },
  {
    n: "03",
    title: "Real depth shows in how you handle failure",
    body: "Edge cases, error states, and degraded experiences reveal whether something was engineered or just assembled. I think about what breaks.",
  },
  {
    n: "04",
    title: "Performance is product quality",
    body: "A missed animation frame, a blocking query, a page that loads slowly — users don't read error messages, but they feel every stall. I treat render budgets, load behavior, and data access patterns as product decisions. Speed and stability aren't optimizations; they're what make software feel trustworthy.",
  },
  {
    n: "05",
    title: "Products are for people, not portfolios",
    body: "The measure of a feature is whether someone uses it — not whether it was technically interesting to build. I stay user-anchored.",
  },
];

export default function Page() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [bluehour, ...allRest] = DATA.projects;
  const featuredProjects = allRest.slice(0, 2);
  const primaryWork = DATA.work.slice(0, 2);
  const additionalWork = DATA.work.slice(2);

  return (
    <main className="flex flex-col min-h-[100dvh] relative">
      <AnimatedBackground />

      {/* ── Hero ─────────────────────────────────────────────────── */}
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
              <div className="flex items-center justify-center gap-2.5 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400/80 animate-pulse shrink-0" />
                <span>
                  Currently building{" "}
                  <span className="text-gray-400">Bluehour</span>
                  {" "}— a second-monitor focus environment exploring calm UX, scene rendering, and ambient sound design.
                </span>
              </div>
              <div className="pt-2">
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

      {/* ── Featured Work ─────────────────────────────────────────── */}
      {/* No section header — Bluehour is self-evident */}
      <section id="projects" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">

          {/* Bluehour — Centerpiece */}
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="group relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/[0.1] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
                <div className="w-full h-64 md:h-80 overflow-hidden">
                  <img
                    src="/bluehour.png"
                    alt="Bluehour"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] group-hover:brightness-110 transition-all duration-700"
                  />
                </div>
                <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-5">
                    <div>
                      <span className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">Centerpiece Project</span>
                      <h3 className="text-3xl font-bold text-white mt-2 mb-3">Bluehour</h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        Fullscreen ambient focus app designed to live on a second monitor — six curated live scenes with canvas-rendered particle effects, optional looping audio, and a minimal timer overlay with session history.
                      </p>
                      <p className="mt-3 text-xs text-gray-600 italic">
                        Second-monitor workflow · Sub-second scene loading · Zero-friction start
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {bluehour.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-gray-400 border-white/[0.1] bg-white/[0.03] text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href="https://bluehourfocus.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors duration-200"
                      >
                        Visit Site
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                      <Link
                        href="https://github.com/joshuahsieh24/bluehour"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.15] text-gray-300 rounded-xl text-sm font-semibold hover:bg-white/[0.06] transition-colors duration-200"
                      >
                        Source
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {[
                      { label: "Why I Built It", body: "Existing focus tools are cluttered, notification-heavy, or ugly. I wanted something that respects your attention the way a well-designed physical object does — present, calm, and frictionless to use." },
                      { label: "Key Product Decisions", body: "No accounts required. No distracting dashboards. The app opens into a scene immediately — the mental model is closer to a lamp you turn on than a product you log into." },
                      { label: "Technical Architecture", body: "Canvas-rendered particle systems (rain, haze, dust) via requestAnimationFrame loops. Howler.js for seamless audio looping. A pre-session → active ↔ paused → complete state machine drives all timer logic." },
                      { label: "What I Optimized For", body: "Sub-second load, zero-friction first use, and a visual quality bar closer to a native app than a side project — because the aesthetic is inseparable from the product promise." },
                    ].map((item) => (
                      <div key={item.label}>
                        <h4 className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase mb-1.5">{item.label}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* Supporting projects — no glow wrapper, cards stand alone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {featuredProjects.map((project, id) => {
              const details = PROJECT_DETAILS[project.title];
              return (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 4 + id * 0.1}>
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
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Experience ────────────────────────────────────────────── */}
      <section id="work" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold tracking-tight text-white mb-10">Experience</h2>
          </BlurFade>

          {/* Primary roles — row-separated, no card boxes */}
          <div className="divide-y divide-white/[0.05]">
            {primaryWork.map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 8 + id * 0.08}>
                <div className="py-5">
                  <ResumeCard
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
              </BlurFade>
            ))}
          </div>

          {/* Additional — minimal, no container box */}
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="mt-2 divide-y divide-white/[0.04]">
              {additionalWork.map((work) => (
                <div key={work.company} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    {work.logoUrl && (
                      <img src={work.logoUrl} alt={work.company} className="w-4 h-4 rounded-full object-cover opacity-40" />
                    )}
                    <span className="text-sm text-gray-500">{work.company}</span>
                    <span className="text-gray-700 text-xs">·</span>
                    <span className="text-sm text-gray-600">{work.title}</span>
                  </div>
                  <span className="text-xs text-gray-700 shrink-0">{work.start} – {work.end ?? "Present"}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── How I Think ───────────────────────────────────────────── */}
      {/* Borderless typographic manifesto — no card boxes */}
      <section id="thinking" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-2xl font-bold tracking-tight text-white mb-10">How I Think</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {PRINCIPLES.slice(0, 4).map((p, id) => (
              <BlurFade key={p.n} delay={BLUR_FADE_DELAY * 12 + id * 0.06}>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase">{p.n}</span>
                  <h3 className="text-sm font-semibold text-white mt-2 mb-1.5 leading-snug">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
                </div>
              </BlurFade>
            ))}
            {/* 5th principle spans full width — capstone */}
            <BlurFade delay={BLUR_FADE_DELAY * 16} >
              <div className="md:col-span-2 pt-2 border-t border-white/[0.04]">
                <span className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase">{PRINCIPLES[4].n}</span>
                <h3 className="text-sm font-semibold text-white mt-2 mb-1.5 leading-snug">{PRINCIPLES[4].title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{PRINCIPLES[4].body}</p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Outside the screen — quiet ambient pause ──────────────── */}
      <section className="py-10 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["/pic6.jpg", "/pic3.jpg", "/pic2.jpg"].map((src) => (
                <div key={src} className="overflow-hidden rounded-xl aspect-[3/2]">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-90 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
            {/* One ambient line — no labeled blocks */}
            <p className="text-xs text-gray-600">
              Nils Frahm · Jon Hopkins · Bill Evans &nbsp;—&nbsp; badminton, cooking, hiking &nbsp;—&nbsp; 210 wpm
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ── Stack ─────────────────────────────────────────────────── */}
      {/* No h2 — eyebrow is enough, content is self-explanatory */}
      <section id="skills" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <span className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase block mb-8">Stack</span>
            <div className="space-y-4">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <span className="text-[10px] font-semibold tracking-widest text-gray-600 uppercase w-28 shrink-0">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-gray-400 border-white/[0.1] bg-white/[0.03] px-3 py-1 text-xs font-medium hover:bg-white/[0.07] hover:text-white transition-colors duration-200"
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

      {/* ── Contact ───────────────────────────────────────────────── */}
      <section id="contact" className="py-14 px-6 relative z-10 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white">Let's Talk</h2>
              <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                Looking for my next role — somewhere I can ship at the intersection of engineering, product, and design.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-1">
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 min-w-[160px]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Link>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/[0.15] text-gray-300 rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition-all duration-200 min-w-[160px]"
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

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
          <p className="text-xs text-gray-700 italic">
            Software should reduce friction between intent and action.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
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
                className="text-xs text-gray-600 hover:text-white transition-colors duration-200"
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
