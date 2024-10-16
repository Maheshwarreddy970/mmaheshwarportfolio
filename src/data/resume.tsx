import { FiGithub } from "react-icons/fi";
import { RiLinkedinBoxLine, RiTwitterXLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

export const data = {
  name: "Maheshwar Reddy",
  url: "https://maheshwar20.vercel.app/",
  location: "Hyderabad , India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Hello! I'm Maheshwar Reddy, a Lead Software Engineer and Designer dedicated to crafting tools that empower developers and enhance user experiences. With a passion for building innovative solutions and a strong foundation in full-stack development, I strive to create impactful digital products that inspire creativity and efficiency.",
  avatarUrl: "/me.jpg",
  skills: [
    "Javascript",
    "Python",
    "TypeScript",
    "Java",
    "React",
    "Next.js ",
    "Redux",
    "Recoil",
    "tailwindcss",
    "Css",
    "Html",
    "framermotion",
    "Node",
    "SocketIO",
    "WebRTC",
    "tRPC",
    "express",
    "GraphQL",
    "SQL",
    "Prisma",
    "MongoDB",
    "Docker",
    "AWS",
    "CI/CD",
    "GitHub",
    "redis",
    "firebase",
  ],
  contact: {
    email: "maheshwarreddymutupuri@gmail.com",
    tel: "+91 9705768802",
    social: [
      {
        name:"Leetcode",
        them:"",
        username: "@maheshwar7075",
        url: "https://leetcode.com/u/maheshwarreddy7075/",
        icon:<SiLeetcode className=" size-7"/>
          },
      {
        name:"Linkedin",
        them:"",
        username: "/Maheshwarreddy",
        url: "https://www.linkedin.com/in/maheshwar-reddy-713927258/",
        icon:<RiLinkedinBoxLine className=" size-9"  />,
      },
      {
        name:"Twitter",
        them:"",
        username: "@Maheshwarr20",
        url: "https://x.com/Maheshwarr20",
        icon:<RiTwitterXLine className=" size-6 " /> ,
      },
      {
        name:"Github",
        them:"",
        username: "@Maheshwarreddy970",
        url: "https://github.com/Maheshwarreddy970",
        icon: <FiGithub className=" size-7"  />
        ,
      },]
  },
  work: [
    {
      company: "Layer UI",
      href: "",
      badges: [],
      location: "Remote",
      title: "Founder | Developer",
      logoUrl: "/layerui.png",
      start: " mar 2024",
      end: "Present",
      description:
        ` Established and led the development of a comprehensive animated UI components library, facilitating streamlined and efficient development processes.
                  Simplified coding workflows for developers by providing pre-built UI components,eliminating the need to start from scratch and accelerating project timelines.`,
    },
    {
      company: "FREELANCEDEVELOPER",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/freelance.jpg",
      start: "jan 2024",
      end: "mar 2024",
      description:
        " Developed end-to-end web and native applications using React,Next.js,Prisma,Firebase, React Native, Supabase, SQL,and TailwindCSS based on client requirements.Received excellent feedback from clients for delivering high-quality, efficient, anduser-friendly projects.",
    },
    {
      company: "WECODE",
      href: "",
      badges: [],
      location: "Hyderabad",
      title: "Web Development Intern",
      logoUrl: "/we_code logo.jpeg",
      start: "jan 2023",
      end: "apr 2023",
      description:
        "Enhanced UI for improved student interaction with the website. Optimized backend performance,increasing website speed and efficiency",
    },
  ],
  education: [
    {
      school: "OSMANIA UNIVERSITY",
      href: "https://www.osmania.ac.in/",
      degree: " Bsc in Computer Science | CGPA : 8.11",
      logoUrl: "/ou.png",
      start: "2021",
      end: "2024",
    },
  ],
  //     projects: [
  //       {
  //         title: "LayerUI",
  //         href: "https://www.layerui.com/",
  //         dates: "March 2024 - Present",
  //         active: true,
  //         description:
  //           "Designed and developed LayerUI, a comprehensive library of animated UI components that streamlined development workflows by offering pre-built elements, reducing the need for custom coding, and accelerating project timelines.",
  //         technologies: [
  //           "Next.js",
  //           "Typescript",
  //           "TailwindCSS",
  //           "Framer Motion",
  //           "React",
  //           "Firebase",
  //         ],
  //         links: [
  //           {
  //             type: "Website",
  //             href: "https://www.layerui.com/",
  //             icon: ,
  //           },
  //         ],
  //         image: "",
  //         video:
  //           "/herovideo.mp4",
  //       },
  //       {
  //         title: " CORINNA-AI",
  //         href: "https://corinna-ai-gray.vercel.app/",
  //         dates: "December 2023 - February 2024",
  //         active: true,
  //         description:
  //           "Created Corinna-AI, a customizable chatbot with advanced NLP for diverse queries, allowing businesses to personalize interactions with custom greetings, email collection, and tailored chat features.",
  //         technologies: [
  //           "Next.js",
  //           "Typescript",
  //           "PostgreSQL",
  //           "Prisma",
  //           "TailwindCSS",
  //           "Stripe",
  //           "Shadcn UI",
  //           "React",
  //           "Node.js",
  //         ],
  //         links: [
  //           {
  //             type: "Website",
  //             href: "https://corinna-ai-gray.vercel.app/",
  //             icon: ,
  //           },
  //           {
  //             type: "Source",
  //             href: "https://github.com/Maheshwarreddy970/corinna-ai",
  //             icon: ,
  //           },
  //         ],
  //         image: "",
  //         video: "/coranaai.mp4",
  //       },
  //       {
  //         title: "CHATDOC",
  //         href: "https://chatdoc-fawn.vercel.app/",
  //         dates: "November 2023 - December 2023",
  //         active: true,
  //         description:
  //           "Developed an AI-integrated document chat system for context-aware interactions. Enhanced productivity via intuitive design and efficient communication. Enables users to engage in natural language interactions with documents. Utilized advanced AI capabilities for seamless user-document engagement.",
  //         technologies: [
  //           "Trpc",
  //           "Next.js",
  //           "Typescript",
  //           "PostgreSQL",
  //           "Prisma",
  //           "TailwindCSS",
  //           "AWS",
  //           "Langchain",
  //           "OpenAi api",
  //           "MonoRepo",

  //         ],
  //         links: [
  //           {
  //             type: "Website",
  //             href: "https://chatdoc-fawn.vercel.app/",
  //             icon: ,
  //           },
  //           {
  //             type: "Source",
  //             href: "https://github.com/Maheshwarreddy970/chatdoc",
  //             icon: ,
  //           },
  //         ],
  //         image: "/chatdocproject.png",
  //         video: "",
  //       },
  //       {
  //         title: "Automatic Chat",
  //         href: "https://specto-wheat.vercel.app/",
  //         dates: "June 2023 - August 2023",
  //         active: true,
  //         description:
  //           "Specto revolutionizes agency management with its all-in-one platform, integrating goal setting, progress tracking, and web design. Its intuitive interface and dynamic charting streamline multitasking and enhance performance monitoring, enabling agencies to efficiently achieve their goals.",
  //         technologies: [
  //           "Next.js",
  //           "Typescript",
  //           "PostgreSQL",
  //           "Prisma",
  //           "TailwindCSS",
  //           "Shadcn UI",
  //           "Aws",
  //         ],
  //         links: [
  //           {
  //             type: "Website",
  //             href: "https://specto-wheat.vercel.app/",
  //             icon: ,
  //           },
  //           {
  //             type: "Source",
  //             href: "https://github.com/Maheshwarreddy970/specto",
  //             icon: ,
  //           },
  //         ],
  //         image: "/specto.png",
  //         video:
  //           "",
  //       },
  //     ],
  //     courses: [
  //       {
  //         title: "100xDevs",
  //         dates: "Jun 2023 - Dec 2023",
  //         from: "100xdevs.com",
  //         description:
  //           "Completed an intensive Fullstack Development course covering languages like JavaScript, TypeScript, and Java, along with frameworks such as React, Next.js, and Node.js. Proficient in databases (SQL, Prisma, MongoDB, Redis) and experienced in DevOps tools like Docker, AWS, and GitHub CI/CD, with strong version control using Git",
  //         image:
  //           "/100xdevs.jpg",
  //         mlh: "",
  //         links: [],
  //       }
  //     ],
  // },
}