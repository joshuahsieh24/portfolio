import { Icons } from "@/components/icons";
import { FileIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Joshua Hsieh",
  initials: "JH",
  url: "https://joshhsieh.netlify.app",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer at San Jose State University! I am super curious to learn. Some of my current goals are to keep up with the latest tech and participate in hackathons. Active on Linkedin.",
  summary:
    "When I'm not programming at my computer, you can catch me playing sports, cooking, watching a show, or trying new things. I am highly interested in making a positive impact on the world and I am always looking for new opportunities to learn and grow.\n\n[Check out my blog!](https://dev.to/josh_hsiehh/welcome-to-my-blog-34cc)",
  avatarUrl: "/heyy.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
    "C++",
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
        url: "#",
        icon: Icons.email,
        target: "_blank",
        rel: "noopener noreferrer",
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Delta Dental In.",
      href: "",
      badges: [],
      title: "Salesforce Developer Intern",
      logoUrl: "/deltadental.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "Built case hierarchy view, building AI email assistant, and more to come!",
    },
    {
      company: "SJSU College of Engineering",
      href: "",
      badges: [],
      title: "Software Intern",
      logoUrl: "/SJSU.png",
      start: "December 2024",
      end: "May 2025",
      description:
        "Working on reverse rate my professor, a website that allows users to find professors based on their ratings and reviews.",
    },
    {
      company: "Theta Tau",
      href: "",
      badges: [],
      title: "Rush Chair",
      logoUrl: "/thetatau.png",
      start: "December 2024",
      end: "February 2025",
      description:
        "Responsible for planning and executing the rush process for the fraternity. This includes coordinating events, managing applications, and facilitating the transition of new members into the organization!",
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
        "Being a member of the church has become a big part of my life and I enjoy the opportunities I have to serve the community.",
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
        "Prepared and served tea and snacks to customers. Cleaned and sanitized work areas. Maintained a clean and organized work environment. Followed health and safety guidelines. Provided excellent customer service.",
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
        "Led basketball and S.T.E.A.M activities for youth, demonstrating techniques and fostering skill development. Built strong relationships with parents through regular communication and progress updates. Created a positive and inclusive environment that encouraged teamwork and personal growth. Managed group dynamics and ensured safety protocols were followed during all activities.",
    },
    
  ],
  education: [
    {
      school: "San Jose State University",
      href: "https://www.sjsu.edu/engineering/",
      degree: "Software Engineering",
      logoUrl: "/SJSU.png",
      start: "2023",
      end: "2027",
    },
    
  ],
  projects: [
    {
      title: "Mindfit",
      href: "https://joshhsieh.netlify.app",
      target: "_blank",
      rel: "noopener noreferrer",
      dates: "May 2025",
      active: true,
      description:
        "Built a cross-platform mobile wellness app with React Native and Supabase featuring one-tap logging, daily check-ins, and dark-mode UI. Designed intuitive FAB + bottom-sheet UX that reduced workout logging time by 75% through user preset caching. Integrated GPT-4o via FastAPI + Celery to auto-generate faith-based 'Boosts' in under 5 seconds, delivered daily at 6 AM with zero downtime on a free-tier stack.",
      technologies: [
        "React Native",
        "Supabase",
        "FastAPI",
        "Celery",
        "AWS S3",
      ],
      links: [],
      image: "/Mindfit.png",
      video: undefined,
    },
    {
      title: "Financeai",
      href: "https://www.youtube.com/watch?v=VErtACNBZ7w",
      target: "_blank",
      rel: "noopener noreferrer",
      dates: "April 2025",
      active: true,
      description:
        "Developed a sophisticated financial analysis web application that leverages machine learning to detect fraudulent transactions in real-time. Built with production-level architecture and modern UI/UX design principles.",
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
        "A platform designed to make dispatchers, first responders, and patients lives more efficient during emergency situations.",
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
        "Led team of 6 to build a mental health app called Snug, a simple web app that provides emotional support to users on college campuses through kiosks.",
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
      title: "BuddyUp",
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer",
      dates: "April 2025",
      active: true,
      description:
        "In the works!",
      technologies: [
        "Next.js",
        "React Vite",
        "JavaScript",
        "PostgreSQL",
        "AWS RDS",
      ],
      image: "/buddyup.png",
      video: undefined,
      links: [],
    },
    {
      title: "SpartanYap",
      href: "https://spartanyap.onrender.com/feed",
      target: "_blank",
      rel: "noopener noreferrer",
      dates: "January 2024 - May 2024",
      active: true,
      description:
        "A Yelp-inspired web application for SJSU students to anonymously express their opinions about any campus related topics and more.\n\nDatabase currently closed due to cost.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
      links: [],
      image: "/spartanyap.png",
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
        "Built website for an autonomous food delivery robot that uses a combination of computer vision and reinforcement learning to navigate a warehouse environment.",
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
        "Led team of 6 to build a mental health app called Snug, a simple web app that provides emotional support to users on college campuses.",
      image: "/spartup.png",
      links: [],
    },
    {
      title: "SJ Hacks",
      dates: "April 26th - 27th, 2025",
      location: "San Jose, CA",
      description:
        "Built a web app called RERS (Rapid Emergency Response System), a platform designed to make dispatchers, first responders, and patients lives more efficient during emergency situations.",
        image: "/sjhack.jpg",
        links:[],
    },
  ],
} as const;
