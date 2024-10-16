export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "/#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Movi3",
    desc: "A movie PWA developed using Next.js, Tailwind and OMDb API.",
    subdesc:
      "A simple movie search application that harnesses the capabilities of Next.js and the OMDb API. This project served as my inaugural venture into the PWA ecosystem, providing me with a comprehensive understanding of its integral components and the nuances of developing progressive web applications.",
    href: "https://movi3.vercel.app",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Next",
        path: "/assets/next.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Tailwindcsss",
        path: "/assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "Pollards",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, Pollards integrates complex forms and SMS notifications, by using Next.js, Appwrite and Twillio to enhance operational workflows.",
    href: "https://pollards.info",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#9f34b5",
      background:
        "linear-gradient(0deg, #9f34b550, #9f34b550), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(159, 52, 181, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Nextjs",
        path: "/assets/next.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "Twilio",
        path: "/assets/twilio.svg",
      },
      {
        id: 5,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "Sticky Notes",
    desc: "A simple sticky notes app develeped using React, Vite and Appwrite.",
    subdesc:
      "A comprehensive, production-ready notes application that combines a robust set of features with an intuitive user interface, making it both functional and enjoyable to use. Users can easily create and delete notes, with the ability to assign a specified colour to each note for quick visual identification. The app ensures a smooth and responsive experience, allowing users to manage their notes effortlessly, whether on desktop or mobile. With a focus on usability, it integrates modern design principles to create a delightful experience for all users.",
    href: "https://not3s.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.svg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Appwrite",
        path: "/assets/appwrite.png",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/vite.svg",
      },
    ],
  },
  {
    title: "Legxcy",
    desc: "A comprehensive full-stack eCommerce application that offers a seamless shopping experience.",
    subdesc:
      "Developed using the MERN stack, alongside Cloudinary for image management, Stripe for secure payment processing, Tailwind CSS for elegant and responsive design, and Vite for a fast development environment.",
    href: "https://legxcy.onrender.com",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Cloudinary",
        path: "/assets/cloudinary.svg",
      },
      {
        id: 2,
        name: "Mongo",
        path: "/assets/mongo.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/express.svg",
      },
      {
        id: 4,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 4,
        name: "Node",
        path: "/assets/node.svg",
      },
      {
        id: 5,
        name: "Stripe",
        path: "/assets/stripe.svg",
      },
      {
        id: 6,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 7,
        name: "Vite",
        path: "/assets/vite.svg",
      },
    ],
  },
  {
    title: "Unlock Your Potential",
    desc: "A simple SPA developed using React, Vite and Tailwind.",
    subdesc:
      "This website leverages the power of React for dynamic user interactions, Vite for fast development and build processes, and Tailwind CSS for a sleek, responsive design.",
    href: "https://uyp.life/",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#ED872D",
      border: "0.2px solid #ED872D",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/vite.svg",
      },
    ],
  },
  {
    title: "Weather",
    desc: "A user-friendly weather app developed using Vue.js.",
    subdesc:
      "Designed with mobile-friendliness in mind, this app allows users to easily search for and view weather conditions in their desired locations. Enhanced with Tailwind CSS, it features a responsive layout that ensures an engaging and visually appealing experience across all devices.",
    href: "https://kufi.uk/",
    texture: "/textures/project/project6.mp4",
    logo: "/assets/project-logo6.svg",
    logoStyle: {
      backgroundColor: "#FFF",
      border: "0.2px solid #FFF",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Tailwind",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 2,
        name: "Vue",
        path: "/assets/vue.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -7, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [7, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [8, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 6, 0]
      : [-19, 6, 0],
    targetPosition: isSmall
      ? [-6, -12, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
