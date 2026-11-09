// Site content. Projects are listed newest first; the first six appear as
// featured cards on the home page and every project gets its own /work/<slug> page.
// New project? Add an entry here, a 1600×1000 WebP at
// public/textures/project/project<N>.webp, then run `npm run resolve-favicons`
// and paste its favicon/accent output into the entry.

export interface Project {
  slug: string;
  title: string;
  desc: string;
  subdesc: string;
  href: string;
  favicon: string;
  accent: string;
  texture: string;
  tags: string[];
}

export interface Review {
  name: string;
  position: string;
  img: string;
  review: string;
}

export interface Experience {
  name: string;
  role: string;
  period: string;
  summary: string;
}

export const site = {
  url: "https://oyousaf.dev",
  name: "Omar",
  handle: "oyousaf",
  role: "Frontend Web Developer",
  email: "hello@oyousaf.dev",
  github: "https://github.com/oyousaf",
  linkedin: "https://linkedin.com/in/oyousaf",
  description:
    "Omar (oyousaf) is a frontend web developer and web development graduate building fast, accessible websites and web apps with React, Next.js, Astro, TypeScript and Tailwind CSS.",
};

export const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Testimonials", href: "/#words" },
  { name: "Contact", href: "/#contact" },
];

export const FEATURED_COUNT = 6;

export const projects: Project[] = [
  {
    slug: "the-beauty-spot",
    title: "The Beauty Spot",
    desc: "A website design for a beauty salon: a top-to-toe treatment menu, a showcase booking system and a matching salon diary.",
    subdesc: "Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Motion.",
    href: "https://tbs.legxcysol.dev",
    favicon: "https://tbs.legxcysol.dev/icon.svg",
    accent: "#E3C49A",
    texture: "/textures/project/project29.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "Motion", "TypeScript"],
  },
  {
    slug: "daniel-and-son",
    title: "Daniel & Son",
    desc: "A website design for a family-run landscaping company: a hero laid out like paving, before-and-after sliders on every project, a gallery filtered by material and a live cost estimator.",
    subdesc: "Built with Astro 7, React 19, TypeScript, Tailwind CSS 4, and Motion.",
    href: "https://dandsons.legxcysol.dev",
    favicon: "https://dandsons.legxcysol.dev/favicon-32x32.png",
    accent: "#B8E0B9",
    texture: "/textures/project/project28.webp",
    tags: ["Astro", "React", "Tailwind CSS", "Motion", "TypeScript"],
  },
  {
    slug: "elcam",
    title: "Elcam",
    desc: "A website design for a building and maintenance company: an interactive blueprint of a house and office block where each room opens a service, a project timeline and a 52-week maintenance chart.",
    subdesc: "Built with Astro 7, TypeScript, and Tailwind CSS 4.",
    href: "https://elcam.legxcysol.dev",
    favicon: "https://elcam.legxcysol.dev/favicon.svg",
    accent: "#E6FF2B",
    texture: "/textures/project/project27.webp",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "maslin-jones",
    title: "Maslin Jones",
    desc: "A website for a property and grounds maintenance business: a page for each of its six services, mown-lawn stripes that drift on scroll, and a quote form built to work without JavaScript.",
    subdesc: "Built with Astro 7, TypeScript, and Tailwind CSS 4.",
    href: "https://maslinjones.legxcysol.dev",
    favicon: "https://maslinjones.legxcysol.dev/favicon.svg",
    accent: "#DCEB7A",
    texture: "/textures/project/project25.webp",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "excel-computer-solutions",
    title: "Excel Computer Solutions",
    desc: "A website for a computer repair shop with a repair-bench design: a live open-now job ticket, a parts-tray services grid, review receipts, a spam-protected job-sheet contact form and a subtle falling-code backdrop.",
    subdesc: "Built with Astro 7, TypeScript, Tailwind CSS 4, and Motion.",
    href: "https://excelcomp.legxcysol.dev",
    favicon: "https://excelcomp.legxcysol.dev/favicon.svg",
    accent: "#53E800",
    texture: "/textures/project/project24.webp",
    tags: ["Astro", "Tailwind CSS", "Motion", "TypeScript"],
  },
  {
    slug: "dmia",
    title: "DMIA",
    desc: "A website for a transport and infrastructure advisory firm, with a transit-map project explorer, a split-flap departure board of case studies and scroll-drawn track lines.",
    subdesc: "Built with Astro 7, React 19, TypeScript, Tailwind CSS 4, and Motion.",
    href: "https://dmia.legxcysol.dev",
    favicon: "https://dmia.legxcysol.dev/favicon.svg",
    accent: "#F0505F",
    texture: "/textures/project/project22.webp",
    tags: ["Astro", "React", "Tailwind CSS", "Motion", "TypeScript"],
  },
  {
    slug: "ecams",
    title: "ECAMS",
    desc: "A website for an eco-friendly cleaning and maintenance company, with service and pricing pages and a quote and booking form.",
    subdesc: "Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Motion.",
    href: "https://ecams.legxcysol.dev",
    favicon: "https://ecams.legxcysol.dev/icon.svg",
    accent: "#c8f169",
    texture: "/textures/project/project20.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "Motion", "TypeScript"],
  },
  {
    slug: "huni",
    title: "huni",
    desc: "A website for a hair and body care brand built around raw honey from Mayan beekeepers, with 3D product renders and a Pollinator Index powered by live open data.",
    subdesc: "Built with Astro 7, TypeScript, Tailwind CSS 4, Motion, and Leaflet.",
    href: "https://huni.legxcysol.dev",
    favicon: "https://huni.legxcysol.dev/favicon.svg",
    accent: "#e0a526",
    texture: "/textures/project/project19.webp",
    tags: ["Astro", "Tailwind CSS", "Motion", "TypeScript"],
  },
  {
    slug: "kanestone",
    title: "Kanestone",
    desc: "A cinematic website for a British luxury automotive company supplying Rolls-Royce, Bentley, Aston Martin and Range Rover vehicles to businesses, with a scroll-driven film hero and an interactive collection.",
    subdesc: "Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Motion, and Lenis.",
    href: "https://kanestone.legxcysol.dev",
    favicon: "https://kanestone.legxcysol.dev/icon.png",
    accent: "#d9cbad",
    texture: "/textures/project/project18.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "Motion", "TypeScript"],
  },
  {
    slug: "ellipsis-earth",
    title: "Ellipsis Earth",
    desc: "An environmental data platform mapping pollution with machine learning, turning roadside surveys into insight for councils, classrooms and changemakers.",
    subdesc: "Built with Astro 7, React 19, Tailwind CSS 4, Motion, and TypeScript.",
    href: "https://ellipsis.legxcysol.dev",
    favicon: "https://ellipsis.legxcysol.dev/favicon.svg",
    accent: "#e2b714",
    texture: "/textures/project/project17.webp",
    tags: ["Astro", "React", "Tailwind CSS", "Motion", "TypeScript"],
  },
  {
    slug: "hecky-travel",
    title: "Hecky Travel",
    desc: "A modern travel agency website for discovering destinations, exploring holiday packages, and planning memorable getaways.",
    subdesc: "Built with Astro 7, React 19, TypeScript, and Tailwind CSS 4.",
    href: "https://heckytravel.uk",
    favicon: "https://heckytravel.uk/favicon.ico",
    accent: "#37b1a7",
    texture: "/textures/project/project15.webp",
    tags: ["Astro", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "awisee",
    title: "AWISEE",
    desc: "An international link building and SEO agency site for brands competing in unforgiving niches.",
    subdesc: "Built with Astro 7, React 19, Tailwind CSS 4, and TypeScript.",
    href: "https://awisee.legxcysol.dev",
    favicon: "https://awisee.legxcysol.dev/favicon.ico",
    accent: "#3a4025",
    texture: "/textures/project/project14.webp",
    tags: ["Astro", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "beds4u",
    title: "Beds4U",
    desc: "A fully fledged e-commerce storefront for a British bed manufacturer.",
    subdesc: "Built with Next.js 15, Tailwind CSS, Motion, Car Specs API, and Unsplash.",
    href: "https://saeed.hxmza.uk",
    favicon: "https://saeed.hxmza.uk/icon?6a9f627ae4bfd8ac",
    accent: "#3c3938",
    texture: "/textures/project/project13.webp",
    tags: ["React", "Next.js", "Tailwind CSS", "Motion", "RapidAPI", "Unsplash"],
  },
  {
    slug: "hxmza",
    title: "Hxmza",
    desc: "A modern car rental platform to compare and hire supercars, EVs, and everyday cars across the UK.",
    subdesc: "Built with Next.js 16, React 19, Tailwind CSS 4, and Motion.",
    href: "https://hxmza.uk",
    favicon: "https://hxmza.uk/favicon.ico?favicon.2yscoldfd3-rv.ico",
    accent: "#4a2073",
    texture: "/textures/project/project16.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "Motion"],
  },
  {
    slug: "legxcy",
    title: "Legxcy",
    desc: "A sleek full-stack eCommerce site offering a seamless online shopping experience.",
    subdesc: "Powered by React 19, Vite, Tailwind CSS, Motion, Express, MongoDB, Supabase, Cloudinary, and Stripe.",
    href: "https://legxcy.uk",
    favicon: "https://legxcy.uk/apple-touch-icon.png",
    accent: "#124440",
    texture: "/textures/project/project4.webp",
    tags: ["React", "Vite", "Tailwind CSS", "Motion", "Express", "MongoDB", "Supabase", "Cloudinary", "Stripe"],
  },
  {
    slug: "astra-ai",
    title: "Astra AI",
    desc: "An AI-assisted job tracker built to streamline and manage job applications efficiently.",
    subdesc: "Developed using Next.js 16, React 19, TypeScript, Tailwind CSS, Motion, and Radix UI.",
    href: "https://astra-ai.legxcysol.dev",
    favicon: "https://astra-ai.legxcysol.dev/favicon.ico",
    accent: "#9b8c6f",
    texture: "/textures/project/project12.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "shadcn/ui"],
  },
  {
    slug: "ace-motor-sales",
    title: "Ace Motor Sales",
    desc: "A dynamic website showcasing cars for sale, tailored for a local dealership.",
    subdesc: "Engineered through the integration of Next.js, React 19, Tailwind CSS, and Motion.",
    href: "https://acemotorsales.uk",
    favicon: "https://acemotorsales.uk/favicon.ico",
    accent: "#1c0809",
    texture: "/textures/project/project9.webp",
    tags: ["Next.js", "React", "Tailwind CSS", "Motion"],
  },
  {
    slug: "sticky-notes",
    title: "Sticky Notes",
    desc: "A user-friendly note-taking app with colour-coded organisation features.",
    subdesc: "Implemented with the use of React 19 and Vite.",
    href: "https://notes.legxcysol.dev",
    favicon: "https://notes.legxcysol.dev/favicon.svg",
    accent: "#8B5CF6",
    texture: "/textures/project/project3.webp",
    tags: ["React", "Vite"],
  },
  {
    slug: "unlock-your-potential",
    title: "Unlock Your Potential",
    desc: "A motivational website promoting personal growth and reflection.",
    subdesc: "Developed with React 18, Tailwind CSS, and Vite.",
    href: "https://uyp.legxcysol.dev",
    favicon: "https://uyp.legxcysol.dev/favicon.ico",
    accent: "#f6b575",
    texture: "/textures/project/project5.webp",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    slug: "weather",
    title: "Weather",
    desc: "A mobile-first weather app with sleek design and city search features.",
    subdesc: "Built using Vue 3, Nuxt 4, and the OpenWeather API.",
    href: "https://kufi.uk/",
    favicon: "https://kufi.uk/favicon.svg",
    accent: "#9bd7c3",
    texture: "/textures/project/project6.webp",
    tags: ["Vue", "Nuxt"],
  },
];

export const reviews: Review[] = [
  {
    name: "Elcam",
    position: "Director",
    img: "https://elcam.legxcysol.dev/favicon.svg",
    review: "Omar understood our business from the outset, transforming our services into a refined, intuitive website. His attention to detail has given us a digital presence we are proud of.",
  },
  {
    name: "DMIA",
    position: "Founder",
    img: "https://dmia.legxcysol.dev/favicon.svg",
    review: "Advisory is a hard thing to show on a screen. Omar turned our rail, road and bus work into a network map and a departures board, and suddenly people get what we do in seconds.",
  },
  {
    name: "ECAMS",
    position: "Owner",
    img: "https://ecams.legxcysol.dev/icon.svg",
    review: "Clear pricing, a quote form that actually gets filled in, and a look that matches our eco values. Customers regularly mention how easy it was to book.",
  },
  {
    name: "huni",
    position: "Founder",
    img: "https://huni.legxcysol.dev/favicon.svg",
    review: "Omar got the story behind our honey straight away. The product renders feel premium and the Pollinator Index gives people a reason to come back beyond the shop.",
  },
  {
    name: "Kanestone",
    position: "Managing Director",
    img: "https://kanestone.legxcysol.dev/icon.png",
    review: "Our cars deserve a proper stage and that is what we got. The film hero sets the tone instantly, and the collection is effortless to browse on a phone.",
  },
  {
    name: "Ellipsis Earth",
    position: "Project Lead",
    img: "https://ellipsis.legxcysol.dev/favicon.svg",
    review: "We had a lot of complex pollution data and needed councils and teachers to understand it. Omar made it visual and approachable without dumbing down the science.",
  },
  {
    name: "Hecky Travel",
    position: "Owner",
    img: "https://heckytravel.uk/favicon.ico",
    review: "Holidays, flights and Hajj & Umrah packages all in one place, and it's quick to update. Omar was patient with every change we asked for along the way.",
  },
  {
    name: "AWISEE",
    position: "Founder",
    img: "https://awisee.legxcysol.dev/favicon.ico",
    review: "We sell to SEO people, so the site had to be fast and sharp. It loads in a blink, reads with confidence, and finally looks like the agency we are.",
  },
  {
    name: "Hamza Ahmed",
    position: "CEO of Unlock Your Potential",
    img: "/assets/project-logo5.webp",
    review: "Working with Omar was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
];

export const experiences: Experience[] = [
  {
    name: "Legxcy Solutions",
    role: "Founder & developer",
    period: "2024 – Present",
    summary: "My own web studio. I design and build websites and web apps end to end, from first sketch to launch and beyond, mostly with Astro, Next.js, React, TypeScript, Tailwind CSS and Motion, plus Supabase, PostgreSQL and Node when a project needs a backend.",
  },
  {
    name: "Client projects",
    role: "Freelance frontend developer",
    period: "2021 – 2024",
    summary: "Websites and web apps for small businesses and individuals, from online shops and booking flows to dashboards, built and shipped end to end with React, TypeScript and Tailwind CSS.",
  },
];

export const education = { name: "Web Development degree", year: "2016" };
