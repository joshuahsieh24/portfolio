"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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

  return (
    <main className="flex flex-col min-h-[100dvh]">

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Available for work</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {DATA.name.split(" ")[0]}
                </span>
                <span className="inline-block ml-2 animate-bounce">👋</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                {DATA.description}
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => smoothScrollTo('projects')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors hover:scale-105"
                >
                  View my work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => smoothScrollTo('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors hover:scale-105"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-3xl"></div>
              <Avatar className="size-80 lg:size-96 relative z-10 mx-auto">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                <AvatarFallback className="text-4xl text-foreground bg-gradient-to-br from-primary/20 to-primary/5">
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-xl"></div>
            </div>
          </BlurFade>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let me tell you a bit about my journey and what drives me
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-12">
              <Markdown 
                className="prose prose-lg max-w-none text-foreground dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                components={{
                  a: CustomLink
                }}
              >
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      
      {/* Work Experience Section */}
      <section id="work" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Work Experience
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My professional journey and the companies I've had the privilege to work with
              </p>
            </div>
          </BlurFade>
          <div className="space-y-8">
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.1}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Life in Pictures
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A glimpse into my world beyond coding - adventures, moments, and memories
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="group relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/pic1.jpg" 
                  alt="Life moment 1"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.1}>
              <div className="group relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/pic2.jpg" 
                  alt="Life moment 2"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.2}>
              <div className="group relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/pic7.png" 
                  alt="Life moment 3"
                  className="w-full h-full object-cover object-left aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.3}>
              <div className="group relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/pic4.jpg" 
                  alt="Life moment 4"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.4}>
              <div className="group relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/pic5.jpg" 
                  alt="Life moment 5"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
              <div className="group relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img 
                  src="/pic6.jpg" 
                  alt="Life moment 6"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Skills & Technologies
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex flex-wrap justify-center gap-3">
              {DATA.skills.map((skill, id) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="text-foreground px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground mb-6">
                My Projects
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A collection of projects I'm proud of, from simple websites to complex applications. 
                Each one tells a story of problem-solving and continuous learning.
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.1}
              >
                <div className="group">
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
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hackathons Section */}
      <section id="hackathons" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground mb-6">
                Hackathons
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                Building Under Pressure
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I love the adrenaline rush of hackathons! These intense coding sprints have taught me 
                to think fast, collaborate effectively, and ship products in record time.
              </p>
            </div>
          </BlurFade>
          <div className="space-y-8">
            {DATA.hackathons.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 16 + id * 0.1}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-8">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">
                Let's Connect
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just have a chat about technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </Link>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-3 px-8 py-4 border border-border rounded-xl font-medium hover:bg-accent transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Links Footer - appears at the very bottom */}
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
