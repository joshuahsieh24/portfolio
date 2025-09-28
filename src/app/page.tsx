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
    <main className="flex flex-col min-h-[100dvh] relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="space-y-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
                Welcome! I'm{" "}
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {DATA.name}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                {DATA.description}
              </p>
              <div className="pt-8">
                <button 
                  onClick={() => smoothScrollTo('about')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-900 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  Learn about me
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                About Me
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Let me tell you a bit about my journey and what drives me
              </p>
            </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 lg:p-16 shadow-2xl">
          <Markdown 
                className="prose prose-lg max-w-none text-white dark:prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-white prose-a:no-underline hover:prose-a:text-gray-200 prose-strong:text-white prose-li:text-gray-300"
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
      <section id="work" className="py-32 px-6 bg-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                Work Experience
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
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

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                Life in Pictures
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                A glimpse into my world beyond coding - adventures, moments, and memories
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <img 
                  src="/pic1.jpg" 
                  alt="Life moment 1"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.1}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <img 
                  src="/pic2.jpg" 
                  alt="Life moment 2"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.2}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <img 
                  src="/pic7.png" 
                  alt="Life moment 3"
                  className="w-full h-full object-cover object-left aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.3}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <img 
                  src="/pic4.jpg" 
                  alt="Life moment 4"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.4}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <img 
                  src="/pic5.jpg" 
                  alt="Life moment 5"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
              <div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
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
      <section id="skills" className="py-32 px-6 bg-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                Skills & Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
                  className="text-white border-white/30 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  {skill}
                </Badge>
            ))}
          </div>
          </BlurFade>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="text-center mb-20">
              <div className="inline-block rounded-full bg-white/10 border border-white/20 px-6 py-3 text-sm text-white mb-8 backdrop-blur-sm">
                  My Projects
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                Featured Work
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]">
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
      
      {/* Hackathons Section */}
      <section id="hackathons" className="py-32 px-6 bg-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="text-center mb-20">
              <div className="inline-block rounded-full bg-white/10 border border-white/20 px-6 py-3 text-sm text-white mb-8 backdrop-blur-sm">
                  Hackathons
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
                Building Under Pressure
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
      
      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-12">
              <div className="inline-block rounded-full bg-white/10 border border-white/20 px-6 py-3 text-sm text-white backdrop-blur-sm">
                Let's Connect
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just have a chat about technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
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
