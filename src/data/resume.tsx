import { Icons } from "@/components/icons";
import { FileIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Joshua Hsieh",
  initials: "JH",
  url: "https://joshhsieh.netlify.app",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineering student at SJSU building full-stack web and mobile apps. Competing in hackathons, exploring new ideas, and always shipping something new.",
  summary:
    "When I'm not coding, you can find me playing sports, cooking, watching shows, or exploring new places. I care deeply about building things that make a real difference — whether that's a mental health app for college students or an emergency dispatch system that helps save lives.\n\n[Check out my blog!](https://dev.to/josh_hsiehh/welcome-to-my-blog-34cc)",
  avatarUrl: "/heyy.jpeg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "React Native",
    "PostgreSQL",
    "Supabase",
    "Prisma",
    "Docker",
    "AWS",
    "Firebase",
    "Java",
    "C++",
    "Git",
    "REST APIs",
    "Tailwind CSS",
  ],
  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
      target: undefined,
      rel: undefined
    },
    {
      href: "/JoshuaHsiehResume.pdf",
      icon: FileIcon,
      label: "Resume",
      target: "_blank",
      rel: "noopener noreferrer"
    },
  ] as const,
  contact: {
    email: "hsiehjoshua424@gmail.com",
    tel: "+1 669 251-7685",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/joshuahsieh24",
        icon: Icons.github,
        target: "_blank",
        rel: "noopener noreferrer",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joshua--hsieh/",
        icon: Icons.linkedin,
        target: "_blank",
        rel: "noopener noreferrer",
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/josh_hsiehh/",
        icon: Icons.instagram,
        target: "_blank",
        rel: "noopener noreferrer",
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@Joshua-wg5lt",
        icon: Icons.youtube,
        target: "_blank",
        rel: "noopener noreferrer",
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hsiehjoshua424@gmail.com",
        icon: Icons.email,
        target: "_blank",
        rel: "noopener noreferrer",
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Delta Dental Inc.",
      href: "https://www.deltadental.com/",
      badges: [],
      title: "Salesforce Developer Intern",
      logoUrl: "/deltadental.png",
      start: "June 2025",
      end: "April 2025",
      description:
        "Built a Salesforce case hierarchy view component to streamline complex case management for support teams. Developed an AI-powered email assistant using Apex and Lightning Web Components (LWC) to accelerate response workflows for dental insurance operations.",
    },
    {
      company: "SJSU College of Engineering",
      href: "https://www.sjsu.edu/engineering/",
      badges: [],
      title: "Software Intern",
      logoUrl: "/SJSU.png",
      start: "December 2024",
      end: "May 2025",
      description:
        "Developed 'Reverse Rate My Professor,' a full-stack web app enabling SJSU students to discover professors based on community ratings and course reviews. Built with Next.js, TypeScript, PostgreSQL, and Prisma ORM — serving as a data-driven tool for smarter course selection.",
    },
    {
      company: "Theta Tau",
      href: "https://thetatau.org/",
      badges: [],
      title: "Rush Chair",
      logoUrl: "/thetatau.png",
      start: "December 2024",
      end: "February 2025",
      description:
        "Spearheaded recruitment for SJSU's Theta Tau engineering fraternity, coordinating events and managing 20+ applicants through the selection pipeline. Designed the onboarding experience for new members and led cross-functional communication between chapter leadership and incoming pledges.",
    },
    {
      company: "Silicon Valley Church",
      href: "",
      badges: [],
      title: "Volunteer",
      logoUrl: "/images.jpeg",
      start: "August 2023",
      end: "Present",
      description:
        "Serve weekly as a core volunteer, supporting events, community outreach, and operations for a congregation of 300+ members. Helped coordinate logistics for large-scale community initiatives and built lasting relationships through consistent service.",
    },
    {
      company: "MeetFresh USA",
      href: "https://meetfresh.us/",
      badges: [],
      title: "Barista",
      logoUrl: "/meetfresh.jpg",
      start: "May 2024",
      end: "May 2025",
      description:
        "Delivered high-volume customer service in a fast-paced environment while maintaining quality and consistency. Trained new team members, managed inventory, and upheld health and safety standards.",
    },
    {
      company: "Legarza Sports",
      href: "https://legarzasports.org/",
      badges: [],
      title: "Basketball/S.T.E.A.M Coach",
      logoUrl: "/legarza.png",
      start: "June 2023",
      end: "August 2024",
      description:
        "Coached youth basketball and S.T.E.A.M. programs for groups of 15–20 students, designing curriculum that blended athletic skill-building with science and technology concepts. Fostered an inclusive team environment and communicated progress updates to parents regularly.",
    },

  ],
  education: [
    {
      school: "San Jose State University",
      href: "https://www.sjsu.edu/engineering/",
      degree: "B.S. Software Engineering",
      logoUrl: "/SJSU.png",
      start: "2023",
      end: "2027",
    },

  ],
  projects: [
    {
      title: "Bluehour",
      href: "https://bluehourfocus.vercel.app/",
      target: "_blank",
      rel: "noopener noreferrer",
      dates: "April 2026",
      active: true,
      description:
        "Fullscreen ambient focus app designed to live on a second monitor. Features six curated live scenes with canvas-rendered particle effects (rain, haze, dust), optional looping ambient audio, a minimal timer overlay with 25/50-minute presets, work mode selection, and session history tracking. Built with a pre-session → active ↔ paused → complete state machine.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Howler.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://bluehourfocus.vercel.app/",
          icon: undefined,
        },
        {
          type: "Source",
          href: "https://github.com/joshuahsieh24/bluehour",
          icon: undefined,
        },
      ],
      image: "/bluehour.png",
      video: undefined,
    },
    {
      title: "FinanceAI",
      href: "https://www.youtube.com/watch?v=VErtACNBZ7w",
      target: "_blank",
      rel: "noopener noreferrer",
      dates: "April 2025",
      active: true,
      description:
        "Financial analysis web app with a machine learning pipeline for real-time fraud detection on transaction data. Features interactive risk dashboards, anomaly scoring, and alert systems — built with a Python/TypeScript stack and production-level architecture.",
      technologies: [
        "TypeScript",
        "Python",
        "Supabase",
      ],
      links: [],
      image: "/finance.png",
      video: undefined,
    },
    {
      title: "R.E.R.S",
      href: "https://devpost.com/software/emergency-response-system-ers-lksjbq",
      target: "_blank",
      rel: "noopener noreferrer",
      dates: "April 2025",
      active: true,
      description:
        "Full-stack emergency response coordination platform built at SJ Hacks. Enables real-time GPS-based dispatch for first responders, role-based dashboards for dispatchers and paramedics, and live incident tracking via Mapbox — designed to reduce response times in critical situations.",
      technologies: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Mapbox",
      ],
      links: [],
      image: "/RERS.png",
      video: undefined,
    },
    {
      title: "Snug",
      href: "https://snuggiebot.netlify.app/",
      target: "_blank",
      rel: "noopener noreferrer",
      dates: "March 2025 - Present",
      active: true,
      description:
        "Led a team of 6 to build a kiosk-based mental health app for college campuses. Features an AI-powered emotional support chatbot, anonymous session handling, and real-time conversation state. Presented at SpartUp Hackathon as a solution to the campus mental health crisis.",
      technologies: [
        "Next.js",
        "React Vite",
        "JavaScript",
        "PostgreSQL",
        "AWS RDS",
      ],
      links: [],
      image: "/snuggie.png",
      video: undefined,
    },
    {
      title: "ToGoBot",
      href: "https://togobot.vercel.app/",
      target: "_blank",
      rel: "noopener noreferrer",
      dates: "February 2024 - May 2024",
      active: true,
      description:
        "Marketing and demo website for an autonomous food delivery robot that uses computer vision and reinforcement learning to navigate warehouse environments. Features a live video walkthrough of the robot in action.",
      technologies: [
        "ReactJS",
        "HTML",
        "CSS",
        "Firebase",
      ],
      links: [],
      image: "",
      video: "https://pub-40245f3c1e9144afbd2738d5e2d019a9.r2.dev/videoplayback.mp4",
    },
  ],
  hackathons: [
    {
      title: "SpartUp Hackathon",
      dates: "April 19th, 2025",
      location: "San Jose, CA",
      description:
        "Led a team of 6 to build Snug — a kiosk-based mental health support app for college campuses. Designed the full product from concept to demo in under 24 hours.",
      image: "/spartup.png",
      links: [],
    },
    {
      title: "SJ Hacks",
      dates: "April 26th - 27th, 2025",
      location: "San Jose, CA",
      description:
        "Built R.E.R.S (Rapid Emergency Response System) — a real-time dispatch platform for first responders featuring GPS tracking, role-based dashboards, and live incident management.",
      image: "/sjhack.jpg",
      links:[],
    },
  ],
} as const;
