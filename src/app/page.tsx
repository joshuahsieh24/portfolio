import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import ForestBackdrop from "@/components/ForestBackdrop";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

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
  return (
    <>
      <ForestBackdrop brightness="mid" />
      
      <main className="flex flex-col min-h-[100dvh] space-y-10 relative z-10">
        <section id="hero" className="bg-canopy/50 backdrop-blur-md rounded-3xl border border-leaf/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-leaf/10 before:pointer-events-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_15px_rgba(125,255,179,0.15)] transition-all duration-300">
          <div className="mx-auto w-full max-w-2xl space-y-8 p-6">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-headline font-bold tracking-wide sm:text-5xl xl:text-6xl/none text-sun drop-shadow-sm"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl text-cloud"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border-2 border-leaf/20 shadow-[0_0_8px_theme('colors.leaf')/15] hover:shadow-[0_0_12px_theme('colors.leaf')/25] transition-all duration-300">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback className="bg-moss text-leaf">{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        
        <section id="about" className="bg-canopy/50 backdrop-blur-md rounded-3xl border border-leaf/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-leaf/10 before:pointer-events-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_15px_rgba(125,255,179,0.15)] transition-all duration-300">
          <div className="p-6">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-headline font-bold tracking-wide text-sun drop-shadow-sm">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown 
                className="prose max-w-full text-pretty font-sans text-sm text-cloud dark:prose-invert prose-headings:font-headline prose-headings:text-sun prose-a:text-aqua"
                components={{
                  a: CustomLink
                }}
              >
                {DATA.summary}
              </Markdown>
            </BlurFade>
          </div>
        </section>
        
        <section id="work" className="bg-canopy/50 backdrop-blur-md rounded-3xl border border-leaf/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-leaf/10 before:pointer-events-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_15px_rgba(125,255,179,0.15)] transition-all duration-300">
          <div className="flex min-h-0 flex-col gap-y-3 p-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-headline font-bold tracking-wide text-sun drop-shadow-sm">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
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
              </BlurFade>
            ))}
          </div>
        </section>
        
        <section id="education" className="bg-canopy/50 backdrop-blur-md rounded-3xl border border-leaf/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-leaf/10 before:pointer-events-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_15px_rgba(125,255,179,0.15)] transition-all duration-300">
          <div className="flex min-h-0 flex-col gap-y-3 p-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-headline font-bold tracking-wide text-sun drop-shadow-sm">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </BlurFade>
            ))}
          </div>
        </section>
        
        <section id="skills" className="bg-canopy/50 backdrop-blur-md rounded-3xl border border-leaf/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-leaf/10 before:pointer-events-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_15px_rgba(125,255,179,0.15)] transition-all duration-300">
          <div className="flex min-h-0 flex-col gap-y-3 p-6">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-headline font-bold tracking-wide text-sun drop-shadow-sm">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill} className="bg-leaf/90 hover:bg-leaf text-canopy font-semibold ring-2 ring-leaf/40 focus-visible:ring-sun transition-all duration-200 active:scale-95">{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        
        <section id="projects" className="bg-canopy/50 backdrop-blur-md rounded-3xl border border-leaf/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-leaf/10 before:pointer-events-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_15px_rgba(125,255,179,0.15)] transition-all duration-300">
          <div className="space-y-12 w-full py-12 px-6">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-sun text-canopy px-3 py-1 text-sm font-script">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-headline font-bold tracking-wide sm:text-5xl text-sun drop-shadow-sm">
                    Check out my latest work
                  </h2>
                  <p className="text-cloud md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I've worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
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
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        
        <section id="hackathons" className="bg-canopy/50 backdrop-blur-md rounded-3xl border border-leaf/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-leaf/10 before:pointer-events-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_15px_rgba(125,255,179,0.15)] transition-all duration-300">
          <div className="space-y-12 w-full py-12 px-6">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-sun text-canopy px-3 py-1 text-sm font-script">
                    Hackathons
                  </div>
                  <h2 className="text-3xl font-headline font-bold tracking-wide sm:text-5xl text-sun drop-shadow-sm">
                    I like building things
                  </h2>
                  <p className="text-cloud md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I've participated in a few hackathons so far. I believe hackathons are a great way to challenge myself, learn from others, and build something meaningful in a short amount of time. I look forward to participating in more hackathons in the future!
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l border-leaf/20">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        
        <section id="contact" className="bg-canopy/50 backdrop-blur-md rounded-3xl border border-leaf/20 shadow-[0_8px_24px_rgba(0,0,0,0.25)] overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-leaf/10 before:pointer-events-none hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_15px_rgba(125,255,179,0.15)] transition-all duration-300">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-sun text-canopy px-3 py-1 text-sm font-script">
                  Contact
                </div>
                <h2 className="text-3xl font-headline font-bold tracking-wide sm:text-5xl text-sun drop-shadow-sm">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-cloud md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's connect :) Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-aqua hover:text-leaf hover:underline transition-colors duration-200"
                  >
                    with a direct question on Linkedin
                  </Link>{" "}
                  and I'll respond whenever I can!
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </>
  );
}
