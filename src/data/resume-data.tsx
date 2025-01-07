// import { YearProgressLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Azim Can Kuruca",
  initials: "ACK",
  location: "Denizli, Türkiye",
  locationLink: "https://www.google.com/maps/place/Denizli",
  about:
    "Full-Stack Ruby on Rails Developer",
  summary: (
    <>
      Hello! My name is Azim, and I am a Ruby on Rails Developer. I am currently working on consultancy and outsource projects. I truly enjoy developing open-source applications. I have been professionally developing full-stack web applications for 3 years using Ruby on Rails and Hotwire.
      I am highly skilled in deploying, managing, and scaling applications on Heroku, ensuring projects are launched smoothly and efficiently by leveraging Heroku's full potential.
      In addition, I have experience in developing Turbo Native applications for both iOS and Android. This allows me to seamlessly integrate web applications with mobile devices in a performant and responsive manner, delivering a fluid user experience across platforms.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/22501896?v=4",
  personalWebsiteUrl: "https://azimcankuruca.com",
  contact: {
    // email: "",
    // tel: "",
    email: "azimcankuruca@gmail.com",
    tel: "+905453772812",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/azimcan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/azimcankuruca/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/azimcankuruca",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Ondokuz Mayıs University",
      degree: "Bachelor of Science in Computer Engineering",
      start: "2016",
      end: "2024",
    },
    {
      school: "Karadeniz Technical University",
      degree: "Bachelor of Science in Computer Engineering",
      start: "2015",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Lab2023",
      link: "https://lab2023.com",
      badges: ["Hybrid"],
      title: "Ruby on Rails Developer",
      logo: "",
      start: "Oct 2022",
      end: "Jan 2025",
      description: null
    },
    {
      company: "Lab2023",
      link: "https://lab2023.com",
      badges: [],
      title: "Intern",
      logo: "",
      start: "Apr 2022",
      end: "Sep 2022",
      description: null
    },
    {
      company: "Eyexapp",
      link: "",
      badges: [],
      title: "Game Developer",
      logo: "",
      start: "Jan 2021",
      end: "Apr 2021",
      description: null
    },
  ],
  skills: [
    "Ruby",
    "Ruby on Rails",
    "Hotwire",
    "Heroku",
    "Kamal",
    "JavaScript",
    "TailwindCSS",
  ],
  projects: [
    {
      title: "Heroicons Rails",
      techStack: [
        "Ruby",
        "Rails Engine",
      ],
      description:
        "heroicons-rails is a Ruby gem that brings Heroicons — a set of high-quality SVG icons created by the makers of Tailwind CSS — directly into your Ruby on Rails applications. With this gem, you can easily integrate both outline and solid icons in your views without manually managing the SVG files.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/azimcan/heroicons-rails",
      },
    },
  ],
} as const;
