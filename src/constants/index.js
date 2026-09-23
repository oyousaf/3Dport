export const getFaviconUrl = (href, size = 64) => {
  try {
    const { hostname } = new URL(href);
    return `https://www.google.com/s2/favicons?sz=${size}&domain=${hostname}`;
  } catch {
    return null;
  }
};

export const navLinks = [
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
    name: "Reviews",
    href: "#clients",
  },
  {
    id: 5,
    name: "XP",
    href: "#work",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Fez Khan",
    position: "Owner of AMS",
    img: "assets/project-logo9.webp",
    review:
      "Outstanding service from start to finish! Very professional and informative through every step of the way, providing knowledgeable input into creating the best marketing website for my business. Highly recommend to anyone looking to have a stress-free experience in creating their website. Very pleased with my website. Many thanks!",
  },
  {
    id: 2,
    name: "Hamza Ahmed",
    position: "CEO of Unlock Your Potential",
    img: "assets/project-logo5.webp",
    review:
      "Working with Omar was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 3,
    name: "Mark Rogers",
    position: "Founder of Legxcy",
    img: "assets/review2.webp",
    review:
      "Omar’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 4,
    name: "John Dohsas",
    position: "Project Manager at Pollards",
    img: "assets/review3.webp",
    review:
      "I can’t say enough good things about Omar. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
];

export const myProjects = [
  {
    title: "Hecky Travel",
    desc: "A modern travel agency website for discovering destinations, exploring holiday packages, and planning memorable getaways.",
    subdesc: "Built with Astro 7, React 19, TypeScript, and Tailwind CSS 4.",
    href: "https://heckytravel.uk",
    favicon: "https://heckytravel.uk/favicon-32.png",
    accent: "#37b1a8",
    texture: "/textures/project/project15.webp",
    tags: [
      { id: 1, name: "Astro", path: "/assets/astro.svg" },
      { id: 2, name: "React.js", path: "/assets/react.svg" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/tailwindcss.svg" },
    ],
  },
  {
    title: "AWISEE",
    desc: "An international link building and SEO agency site for brands competing in unforgiving niches.",
    subdesc: "Built with Astro 7, React 19, Tailwind CSS 4, and TypeScript.",
    href: "https://awisee.vercel.app",
    favicon: "https://awisee.vercel.app/favicon.ico",
    accent: "#3a4025",
    texture: "/textures/project/project14.webp",
    tags: [
      { id: 1, name: "Astro", path: "/assets/astro.svg" },
      { id: 2, name: "React.js", path: "/assets/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.svg" },
      { id: 4, name: "TypeScript", path: "/assets/typescript.svg" },
    ],
  },
  {
    title: "Beds4U",
    desc: "A stylish and responsive platform for renting cars with a modern UI.",
    subdesc:
      "Built with Next.js 15, Tailwind CSS, Motion, Car Specs API, and Unsplash.",
    href: "https://hxmza.uk",
    favicon: "https://hxmza.uk/icon?6a9f627ae4bfd8ac",
    accent: "#3c3938",
    texture: "/textures/project/project13.webp",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Next", path: "/assets/next.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 4, name: "Motion", path: "/assets/framer.svg" },
      { id: 5, name: "RapidAPI", path: "/assets/rapidapi.png" },
      { id: 6, name: "Unsplash", path: "/assets/unsplash.png" },
    ],
  },
  {
    title: "Hxmza",
    desc: "A modern car rental platform to compare and hire supercars, EVs, and everyday cars across the UK.",
    subdesc: "Built with Next.js 16, React 19, Tailwind CSS 4, and Motion.",
    href: "https://hxmza.vercel.app",
    favicon: "https://hxmza.vercel.app/favicon.ico?favicon.2yscoldfd3-rv.ico",
    accent: "#4a2073",
    texture: "/textures/project/project16.webp",
    tags: [
      { id: 1, name: "Next", path: "/assets/next.svg" },
      { id: 2, name: "React.js", path: "/assets/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.svg" },
      { id: 4, name: "Motion", path: "/assets/framer.svg" },
    ],
  },
  {
    title: "Legxcy",
    desc: "A sleek full-stack eCommerce site offering a seamless online shopping experience.",
    subdesc:
      "Powered by React 19, Vite, Tailwind CSS, Motion, Express, MongoDB, Supabase, Cloudinary, and Stripe.",
    href: "https://legxcy.uk",
    favicon: "https://legxcy.uk/apple-touch-icon.png",
    accent: "#124440",
    texture: "/textures/project/project4.webp",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Vite", path: "/assets/vite.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.svg" },
      { id: 4, name: "Motion", path: "/assets/framer.svg" },
      { id: 5, name: "Express", path: "/assets/express.svg" },
      { id: 6, name: "MongoDB", path: "/assets/mongodb.svg" },
      { id: 7, name: "Supabase", path: "/assets/supabase.svg" },
      { id: 8, name: "Cloudinary", path: "/assets/cloudinary.svg" },
      { id: 9, name: "Stripe", path: "/assets/stripe.svg" },
    ],
  },
  {
    title: "Astra AI",
    desc: "An AI-assisted job tracker built to streamline and manage job applications efficiently.",
    subdesc:
      "Developed using Next.js 16, React 19, TypeScript, Tailwind CSS, Motion, and Radix UI.",
    href: "https://astra-ai-six.vercel.app/",
    favicon: "https://astra-ai-six.vercel.app/favicon.ico",
    accent: "#9b8c6f",
    texture: "/textures/project/project12.webp",
    tags: [
      { id: 1, name: "Next", path: "/assets/next.svg" },
      { id: 2, name: "React.js", path: "/assets/react.svg" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/tailwindcss.svg" },
      { id: 5, name: "Motion", path: "/assets/framer.svg" },
      { id: 6, name: "Shadcn", path: "/assets/shadcn.png" },
    ],
  },
  {
    title: "Ace Motor Sales",
    desc: "A dynamic website showcasing cars for sale, tailored for a local dealership.",
    subdesc:
      "Engineered through the integration of Next.js, React 19, Tailwind CSS, and Motion.",
    href: "https://acemotorsales.uk",
    favicon: "https://acemotorsales.uk/favicon.ico",
    accent: "#1c0809",
    texture: "/textures/project/project9.webp",
    tags: [
      { id: 1, name: "Next", path: "/assets/next.svg" },
      { id: 2, name: "React.js", path: "/assets/react.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.svg" },
      { id: 4, name: "Motion", path: "/assets/framer.svg" },
    ],
  },
  {
    title: "Sticky Notes",
    desc: "A user-friendly note-taking app with colour-coded organisation features.",
    subdesc: "Implemented with the use of React 19 and Vite.",
    href: "https://not3s.vercel.app/",
    favicon: "https://not3s.vercel.app/favicon.svg",
    accent: "#8B5CF6",
    texture: "/textures/project/project3.webp",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Vite", path: "/assets/vite.svg" },
    ],
  },
  {
    title: "Unlock Your Potential",
    desc: "A motivational website promoting personal growth and reflection.",
    subdesc: "Developed with React 18, Tailwind CSS, and Vite.",
    href: "https://uypp.vercel.app",
    favicon: "https://uypp.vercel.app/favicon.ico",
    accent: "#f6b575",
    texture: "/textures/project/project5.webp",
    tags: [
      { id: 1, name: "React", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.svg" },
      { id: 3, name: "Vite", path: "/assets/vite.svg" },
    ],
  },
  {
    title: "Weather",
    desc: "A mobile-first weather app with sleek design and city search features.",
    subdesc: "Built using Vue 3, Nuxt 4, and the OpenWeather API.",
    href: "https://kufi.uk/",
    favicon: "https://kufi.uk/favicon.svg",
    accent: "#9bd7c3",
    texture: "/textures/project/project6.webp",
    tags: [
      { id: 1, name: "Vue", path: "/assets/vue.svg" },
      { id: 2, name: "Nuxt", path: "/assets/nuxt.svg" },
    ],
  },
];

// Base (desktop-scale) scattered layout for the Hero background logos — one
// even heptagon around the desk (React included), so every logo — the GLTF
// React mark and the flat texture logos alike — shares a single coordinated
// arrangement and none can ever land on the same spot. Smaller breakpoints
// scale the spread down so nothing clips off-screen.
const heroLogoLayout = [
  { type: "gltf", key: "react", base: [0, 6.5, 0] },
  {
    type: "texture",
    key: "next",
    texture: "/textures/hero/next.webp",
    base: [7, 5.6, -5],
  },
  {
    type: "texture",
    key: "vue",
    texture: "/textures/hero/vue.webp",
    base: [8.8, -2, -6],
  },
  {
    type: "texture",
    key: "typescript",
    texture: "/textures/hero/typescript.webp",
    base: [3.9, -8.1, -6],
  },
  {
    type: "texture",
    key: "nuxt",
    texture: "/textures/hero/nuxt.webp",
    base: [-3.9, -8.1, -5],
  },
  {
    type: "texture",
    key: "astro",
    texture: "/textures/hero/astro.webp",
    base: [-8.8, -2, -7],
  },
  {
    type: "texture",
    key: "tailwind",
    texture: "/textures/hero/tailwind.webp",
    base: [-7, 5.6, -5],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  const spread = isSmall ? 0.35 : isMobile ? 0.55 : isTablet ? 0.75 : 1;
  const logoScale = isSmall ? 0.8 : isMobile ? 1 : 1.2;

  const heroLogos = heroLogoLayout.map(({ base, ...rest }) => ({
    ...rest,
    position: [base[0] * spread, base[1] * spread, base[2]],
    scale: logoScale,
  }));

  const reactPosition = heroLogos.find((l) => l.key === "react").position;
  // Extra upward nudge on narrow viewports only, clear of the desk/navbar.
  const reactYBoost = isSmall ? 0.6 : isMobile ? 0.4 : 0;

  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    reactLogoPosition: [
      reactPosition[0],
      reactPosition[1] + reactYBoost,
      reactPosition[2],
    ],
    reactLogoScale: isSmall ? 0.22 : isMobile ? 0.28 : isTablet ? 0.34 : 0.4,
    techLogos: heroLogos.filter((l) => l.type === "texture"),
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Legxcy Solutions",
    pos: "Web Developer",
    duration: "2024 - Present",
    title:
      "I'm currently working as a freelance developer, specialising in modern frontend development with tools like React, Next.js, Tailwind CSS, and Motion to craft responsive, scalable, and visually engaging SPAs. Lately, I've been expanding into full-stack development, integrating powerful backends using PostgreSQL, Supabase, Appwrite, Prisma, Express, and Node.js — all deployed seamlessly with Vercel. This evolution allows me to build complete, performant apps with a consistent developer experience end-to-end.",
    icon: "/assets/legxcysol.webp",
    animation: "salute",
  },
  {
    id: 2,
    name: "Zen Internet",
    pos: "Technical Support Advisor",
    duration: "2024",
    title:
      "Maintained a customer-focused approach, effectively communicating technical info and resolving issues with empathy. Managed tasks independently, meeting deadlines, embracing new technologies, and improving efficiency. Consistently upheld high service standards in fast-paced environments.",
    icon: "/assets/zen.svg",
    animation: "victory",
  },
  {
    id: 3,
    name: "Professional Development",
    pos: "SPA Ninja",
    duration: "2022 - Present",
    title:
      "I've always had a passion for coding and knew I wanted to be a developer—whether frontend, backend, or even mobile. After working on passion projects, I'm now diving back into development through Codecademy's Full Stack Engineer course, expanding my skills in what I love.",
    icon: "/assets/codecademy.svg",
    animation: "salute",
  },
  {
    id: 4,
    name: "Utility Warehouse",
    pos: "Technical Support Advisor",
    duration: "2023",
    title:
      "Provided exceptional customer service via phone, email, and chat by resolving issues, troubleshooting technical problems, and escalating complex cases. Collaborated with teams to enhance services, maintained detailed records, and stayed updated on industry trends, earning positive feedback.",
    icon: "/assets/uw.svg",
    animation: "clapping",
  },
];
