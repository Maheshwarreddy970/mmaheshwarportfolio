import { FaGlobeAmericas } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import {  RiTwitterXLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

export const data = {
  name: "Maheshwar Reddy",
  url: "https://mmaheshwarreddy.vercel.app/",
  resume: '/mmaheshwarreddy.pdf',
  description:
    "Hello! I'm Maheshwar Reddy, a Software Engineer and Designer dedicated to crafting tools that empower developers and enhance user experiences. With a passion for building innovative solutions and a strong foundation in full-stack development, I strive to create impactful digital products that inspire creativity and efficiency.",
  avatarUrl: "/me.jpg",
  skills: [
    "Javascript",
    "Python",
    "Java",
    "React",
    "TypeScript",
    "Next.js ",
    "Redux",
    "Recoil",
    "tailwindcss",
    "Css",
    "Html",
    "Node",
    "framermotion",
    "SocketIO",
    "GraphQL",
    "tRPC",
    "SQL",
    "WebRTC",
    "express",
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
        name: "Leetcode",
        them: "amber",
        username: "@maheshwar7075",
        url: "https://leetcode.com/u/maheshwarreddy7075/",
        icon: <TbBrandLeetcode className=" size-9 text-amber-500" strokeWidth={1.9} />
      },
      {
        name: "Linkedin",
        them: "sky",
        username: "/Maheshwarreddy",
        url: "https://www.linkedin.com/in/maheshwar-reddy-713927258/",
        icon: <LuLinkedin className=" size-9  text-sky-500" strokeWidth={1.4} />,
      },
      {
        name: "Twitter",
        them: "",
        username: "@Maheshwarr20",
        url: "https://x.com/Maheshwarr20",
        icon: <RiTwitterXLine className=" size-6 " />,
      },
      {
        name: "Github",
        them: "",
        username: "@Maheshwarreddy970",
        url: "https://github.com/Maheshwarreddy970",
        icon: <FiGithub className=" size-7" />
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
        [
          "Developed an open-source UI component library using React, incorporating pre-built components and Framer Motion animations to enhance smooth interactions and usability."
          , "Achieved over 6,000 unique visitors, empowering developers to build 10x faster and more efficiently by offering modern,trending components that streamline the development process."
        ],
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
      description:[" Developed end-to-end web and native applications using React, Next.js, Prisma, Firebase, React Native, Supabase, SQL,and TailwindCSS based on client needs.","Completed projects for 6+ clients, increasing website traffic by 60 to 100 percentage, with excellent feedback for quality,efficiency, and user-friendly design "] 
       },
    {
      company: "WECODE",
      href: "",
      badges: [],
      location: "Hyderabad",
      title: "Web Development Intern",
      logoUrl: "/wecode.png",
      start: "jan 2023",
      end: "apr 2023",
      description:["Built and enhanced the UI for both student and teacher sides of the course web application, making the interface more user-friendly and improving engagement.","Optimized backend performance to boost website speed and implemented end-to-end PDF storage for class notes using S3, increasing student interactions by 100+ "]
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
  projects: [
    {
      title: "LayerUI",
      href: "https://www.layerui.com/",
      active: true,
      description:
        "Designed and developed LayerUI, a comprehensive library of animated UI components that streamlined development workflows by offering pre-built elements, reducing the need for custom coding, and accelerating project timelines.",
      links: [
        {
          type: "Website",
          href: "https://www.layerui.com/",
          icon: <FaGlobeAmericas ></FaGlobeAmericas>,
        },
        {
          type: "Source",
          href: "https://github.com/Layer-UI/LayerUI",
          icon: <SiGithub ></SiGithub>,
        },
      ],
      image: "",
      video:"/herovideo.mp4",
    },
    {
      title: "CHATDOC",
      href: "https://chatdoc-fawn.vercel.app/",
      dates: "November 2023 - December 2023",
      active: true,
      description:
      "Developed an AI-integrated document chat system for context-aware interactions. Enhanced productivity via intuitive design and efficient communication. Enables users to engage in natural language interactions with documents. Utilized advanced AI capabilities for seamless user-document engagement.",
      links: [
        {
          type: "Website",
          href: "https://chatdoc-fawn.vercel.app/",
          icon: <FaGlobeAmericas ></FaGlobeAmericas>,
        },
        {
          type: "Source",
          href: "https://github.com/Maheshwarreddy970/chatdoc",
          icon: <SiGithub ></SiGithub>,
        },
      ],
      image: "",
      video: "/chatdoc.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://specto-wheat.vercel.app/",
      active: true,
      description:
      "Specto revolutionizes agency management with its all-in-one platform, integrating goal setting, progress tracking, and web design. Its intuitive interface and dynamic charting streamline multitasking and enhance performance monitoring, enabling agencies to efficiently achieve their goals.",
      links: [
        {
          type: "Website",
          href: "https://specto-wheat.vercel.app/",
          icon: <FaGlobeAmericas ></FaGlobeAmericas>,
        },
        {
          type: "Source",
          href: "https://github.com/Maheshwarreddy970/specto",
          icon: <SiGithub ></SiGithub>,
        },
      ],
      image: "",
      video: "/specto.mp4",
    },
    {
      title: " CORINNA-AI",
      href: "https://corinna-ai-gray.vercel.app/",
      active: true,
      description:
        "Created Corinna-AI, a customizable chatbot with advanced NLP for diverse queries, allowing businesses to personalize interactions with custom greetings, email collection, and tailored chat features.",
      links: [
        {
          type: "Website",
          href: "https://corinna-ai-gray.vercel.app/",
          icon: <FaGlobeAmericas ></FaGlobeAmericas>,
        },
        {
          type: "Source",
          href: "https://github.com/Maheshwarreddy970/corinna-ai",
          icon: <SiGithub ></SiGithub>,
        },
      ],
      image: "",
      video: "/coranaai.mp4",
    },
  ],
  courses: [
    {
      title: "100xDevs",
      start: "Jun 2023",
      end: "Dec 2023",
      fieldofstudy: 'Fullstack',
      from: "100xdevs.com",
      description:
        "Completed an intensive Fullstack Development course covering languages like JavaScript, TypeScript, and Java, along with frameworks such as React, Next.js, and Node.js. Proficient in databases (SQL, Prisma, MongoDB, Redis) and experienced in DevOps tools like Docker, AWS, and GitHub CI/CD, with strong version control using Git",
      image:
        "/100xdevs.jpg",
      mlh: "",
      links: "https://100xdevs.com/",
    }
  ],
}