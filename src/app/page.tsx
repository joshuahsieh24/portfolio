"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
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
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const SKILL_GROUPS = [
  {
    label: "Product Layer",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Supabase", "Prisma"],
  },
  {
    label: "Infrastructure",
    skills: ["Docker", "AWS", "Firebase", "Git", "REST APIs"],
  },
  {
    label: "Languages",
    skills: ["Java", "C++"],
  },
];

export default function Page() {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Bluehour is always index 0 — treat it as the featured centerpiece
  const [bluehour, ...restProjects] = DATA.projects;

  return (
    <main className="flex flex-col min-h-[100dvh] relative">
      <AnimatedBackground />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="space-y-8">
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
              <div className="pt-8">
                <button
                  onClick={() => smoothScrollTo('projects')}
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
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="text-center mb-16">
              <div className="inline-block rounded-full bg-white/10 border border-white/20 px-5 py-2 text-sm text-white mb-6 backdrop-blur-sm">
                Featured Work
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
                Things I've Built
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Each project reflects a real problem, a deliberate product decision, and an opinion about how software should feel.
              </p>
            </div>
          </BlurFade>

          {/* Bluehour — Full-width Centerpiece */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="group relative mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-white/10 transition-all duration-300">
                {/* Top: image strip */}
                <div className="w-full h-64 md:h-80 overflow-hidden">
                  <img
                    src="/bluehour.png"
                    alt="Bluehour"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                {/* Bottom: case study content */}
                <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left: identity + overview */}
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Centerpiece Project</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3">Bluehour</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Fullscreen ambient focus app designed to live on a second monitor — six curated live scenes with canvas-rendered particle effects, optional looping audio, and a minimal timer overlay with session history.
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
                  {/* Right: case study */}
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
                        No accounts required. No distracting dashboards. The app opens into a scene immediately — the mental model is closer to a lamp you turn on than a product you "log into."
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Technical Architecture</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Canvas-rendered particle systems for each scene (rain, haze, dust) via requestAnimationFrame loops. Howler.js for seamless audio looping. A pre-session → active ↔ paused → complete state machine drives all timer logic.
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

          {/* Remaining projects — 2-col grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {restProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 5 + id * 0.1}
              >
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02] h-full">
                    <ProjectCard
                      href={project.href}
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      dates={project.dates}
                      tags={project.technologies}
                      image={project.image}
                      video={project.video}
                      links={project.links}
                    />
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" className="py-20 px-6 bg-white/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="text-center mb-14">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
                About Me
              </h2>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 lg:p-14 shadow-2xl">
              <Markdown
                className="prose prose-lg max-w-none text-white dark:prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-white prose-a:no-underline hover:prose-a:text-gray-200 prose-strong:text-white prose-li:text-gray-300"
                components={{ a: CustomLink }}
              >
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Work Experience ───────────────────────────────── */}
      <section id="work" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="text-center mb-14">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
                Experience
              </h2>
              <p className="text-lg text-gray-400 max-w-xl mx-auto">
                Where I've shipped real work alongside real teams
              </p>
            </div>
          </BlurFade>
          <div className="space-y-6">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 11 + id * 0.08}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]">
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
        </div>
      </section>

      {/* ── How I Think ───────────────────────────────────── */}
      <section id="thinking" className="py-20 px-6 bg-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="text-center mb-14">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
                How I Think
              </h2>
              <p className="text-lg text-gray-400 max-w-xl mx-auto">
                The principles that shape what I build and how I make decisions
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <BlurFade key={principle.label} delay={BLUR_FADE_DELAY * 15 + id * 0.08}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02] h-full">
                    <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">{principle.label}</span>
                    <h3 className="text-lg font-semibold text-white mt-3 mb-3 leading-snug">{principle.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{principle.body}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="text-center mb-14">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
                Stack
              </h2>
              <p className="text-lg text-gray-400 max-w-xl mx-auto">
                Tools I reach for without thinking — and know deeply enough to know their limits
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="space-y-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase w-36 shrink-0">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-white border-white/20 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-200"
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

      {/* ── Hackathons ────────────────────────────────────── */}
      <section id="hackathons" className="py-20 px-6 bg-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="text-center mb-14">
              <div className="inline-block rounded-full bg-white/10 border border-white/20 px-5 py-2 text-sm text-white mb-6 backdrop-blur-sm">
                Hackathons
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
                Built Under Pressure
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Constraints sharpen judgment. These are the things I shipped in 24–48 hours with teams I'd just met.
              </p>
            </div>
          </BlurFade>
          <div className="space-y-6">
            {DATA.hackathons.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 20 + id * 0.1}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]">
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 21}>
            <div className="space-y-10">
              <div className="inline-block rounded-full bg-white/10 border border-white/20 px-5 py-2 text-sm text-white backdrop-blur-sm">
                Let's Connect
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Open to internships, full-time roles, and projects worth building.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20 min-w-[200px]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </Link>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 backdrop-blur-sm min-w-[200px]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="py-12 px-6 bg-background border-t border-border/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="text-lg font-medium hover:opacity-70 transition-opacity"
            >
              Email
            </Link>
            <Link
              href="/JoshuaHsiehResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:opacity-70 transition-opacity"
            >
              Resume
            </Link>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </Link>
            <Link
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:opacity-70 transition-opacity"
            >
              GitHub
            </Link>
            <Link
              href="https://dev.to/josh_hsiehh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:opacity-70 transition-opacity"
            >
              Blog
            </Link>
            <Link
              href="https://www.youtube.com/@Joshua-wg5lt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:opacity-70 transition-opacity"
            >
              YouTube
            </Link>
          </div>
        </div>
      </footer>

      <Navbar />
    </main>
  );
}
