import {
  Edit3,
  Film,
  Coffee,
  Binary,
  Zap,
  Layers,
  Cpu,
  TrendingUp,
  ShieldCheck,
  ShoppingBag,
  Globe
} from 'lucide-react';

export const PORTFOLIO_DATA = {
  profile: {
    name: "Brian Hodge",
    initials: "BH",
    role: "Senior Full-Stack Engineer",
    experience: "15+ yrs",
    headline: "Building products from concept to scale.",
    description: "Senior Full-Stack Engineer with 15+ years of experience deconstructing complex requirements into performant, maintainable digital ecosystems.",
    email: "brian.hodgebh@gmail.com",
    github: "https://github.com/sadzebra",
    linkedin: "https://www.linkedin.com/in/brian-hodge-bh/",
    seo: {
      title: "Brian Hodge | Senior Full-Stack Engineer & Product Architect",
      description: "Senior Full-Stack Engineer with 15+ years experience building high-performance digital ecosystems, headless e-commerce, and scalable technical architectures."
    }
  },

  techStacks: [
    {
      category: "Frontend",
      skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Vite']
    },
    {
      category: "Backend",
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'DynamoDB', 'SQL', 'REST APIs']
    },
    {
      category: "DevOps & Tools",
      skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'BitBucket']
    }
  ],

  careerTimeline: [
    {
      company: "Wishbone Games",
      location: "Cardiff",
      role: "Software Developer",
      period: "Dec 2024 — Jun 2025",
      color: "border-[#95ADB6]",
      details: ["Engineered high-performance gaming experiences within a custom game engine.", "Focused on front-end delivery and high-fidelity animations.", "Optimized logic and asset handling for mobile performance."]
    },
    {
      company: "Cardiff University",
      location: "Remote",
      role: "Software Developer (IDS Validation)",
      period: "Jun 2025 — Aug 2025",
      color: "border-[#EF959C]",
      details: ["Developed a specialized JS library for BIM data validation.", "Engineered data models from complex XML schemas.", "Built a custom error-handling system for data integrity."]
    },
    {
      company: "3Radical",
      location: "Bristol",
      role: "Full Stack Developer",
      period: "Nov 2017 — Dec 2024",
      color: "border-[#8DA1B9]",
      details: ["Developed complex web applications for global brands.", "Built robust, scalable back-end systems using cloud infrastructure.", "Designed user-friendly interfaces for campaign execution."]
    },
    {
      company: "Freelance",
      location: "Cardiff",
      role: "Full Stack Developer",
      period: "Jul 2017 — Nov 2017",
      color: "border-[#CBB3BF]",
      details: ["Implemented web applications and websites using modern CMS and front-end tools."]
    },
    {
      company: "Reachal",
      location: "Cardiff",
      role: "Full Stack Developer",
      period: "Oct 2015 — Sept 2017",
      color: "border-[#DBC7BE]",
      details: ["Owned development and maintenance of client-facing web apps.", "Built performant interfaces and managed database systems."]
    },
    {
      company: "Volante",
      location: "Bridgend",
      role: "Web Developer",
      period: "2011 — 2015",
      color: "border-slate-200",
      details: ["Developed company websites and custom admin panels with a focus on UX."]
    }
  ],

  weekendProjects: [
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      description: "The Bento Portfolio was engineered as a high-performance personal ecosystem designed to bridge the gap between static CVs and live technical demonstration. \n\nPurpose & Strategy\nCreated with the intent of showcasing architectural modularity, the project moves away from standard templates to implement a custom-built 'shell and content' architecture. The primary goal was to provide a frictionless browsing experience that highlights 15+ years of full-stack expertise through visual storytelling.\n\nExecution & Tooling\nBuilt using React and Tailwind CSS, the application leverages a centralized configuration layer to decouple data from UI. This enables rapid content scaling while maintaining a strict design system. Key technical highlights include a hybrid carousel for tech-stack visualization and a scroll-locked, unified modal management system.\n\nConstruction & Integration\nThe site functions as a hub, dynamically pulling in diverse project types—from WebSocket-driven labs to professional case studies. By implementing a dynamic media gallery that supports Loom embeds alongside static assets, the portfolio provides a comprehensive view of my development process, resulting in a cohesive digital identity.",
      shortDescription: "A Case Study in technical identity and modular web architecture.",
      icon: Edit3,
      color: "bg-[#95ADB6]",
      tags: ["React", "Tailwind CSS", "Node", "NextJS", "Lucide", "Framer Motion"],
      live: "#",
      repo: "https://github.com/sadzebra/portfolio-web",
      gallery: [
        { type: 'image', url: 'portfolio-main.png' },
        { type: 'image', url: 'portfolio-lets-talk.png' },
        { type: 'image', url: 'portfolio-work-history.png' },
        // { type: 'icon', icon: Edit3 },
        // { type: 'video', url: 'https://www.loom.com/embed/d32f7a012e104e9c8e2786720f787b8f' }
      ]
    },
    {
      id: "whiteboard",
      title: "Collaborative Whiteboard",
      description: "Real-time shared drawing space using optimistic UI updates and sub-50ms WebSocket broadcast architecture.",
      icon: Edit3,
      color: "bg-[#95ADB6]",
      tags: ["Socket.io", "Canvas API", "React", "Node.js"],
      live: "#",
      repo: "https://github.com/sadzebra/collaborative-whiteboard",
      gallery: [
        { type: 'image', url: 'portfolio-main.png' },
        // { type: 'image', url: 'portfolio-lets-talk.png' },
        // { type: 'image', url: 'portfolio-work-history.png' },
        // { type: 'icon', icon: Edit3 },
        // { type: 'video', url: 'https://www.loom.com/embed/d32f7a012e104e9c8e2786720f787b8f' }
      ]
    },
    {
      id: "movie-finder",
      title: "Movie Finder",
      description: "High-performance discovery engine with real-time search and cinema data visualization using TMDB API.",
      icon: Film,
      color: "bg-[#CBB3BF]",
      tags: ["React", "TMDB API", "Vite", "Tailwind CSS"],
      live: "#",
      repo: "https://github.com/sadzebra/movies-finder"
    },
    {
      id: "roaster",
      title: "Code Roaster",
      description: "AI-powered feedback engine using Google's Gemini API and custom persona engineering.",
      icon: Coffee,
      color: "bg-[#EF959C]",
      tags: ["Gemini API", "Prompt Engineering", "Express", "Docker"],
      live: "#",
      repo: "https://github.com/sadzebra/roasted-code"
    },
    {
      id: "lab-4",
      title: "Coming soon",
      description: "Coming soon.",
      icon: Binary,
      color: "bg-[#8DA1B9]",
      tags: [""],
      live: "#",
      repo: "#"
    },
  ],


  caseStudies: [
    {
      id: "alongCameLoulou",
      title: "Along Came Loulou",
      type: "E-commerce & SEO Strategy",
      description: "Engineered a centralized digital hub for a bespoke vintage clothing seller to establish brand independence and scale organic reach.\n\nThe Mission\nThe business was heavily reliant on third-party marketplaces (Vinted), resulting in high commission losses and limited brand control. The goal was to build a 'home base' for the business.\n\nThe Construction\nUtilizing a tailored WordPress and WooCommerce architecture, I implemented an optimized user experience using Blocksy and Elementor. The backend was fortified with MailPoet for automated CRM and WP Forms for custom client inquiries. \n\nGrowth Engine\nBeyond the build, I executed a technical SEO roadmap aimed at expanding the brand's reach. This included schema markup for clothing products and high-performance image optimization to ensure the high-resolution vintage catalogs remained performant on mobile devices.",
      shortDescription: "Driving conversion through headless architecture and custom migration.",
      icon: ShoppingBag,
      color: "bg-[#EF959C]",
      tags: ["WooCommerce", "WordPress", "SEO", "Client Hub"],
      live: "https://alongcameloulou.com/",
      repo: "#",
      gallery: [{
        type: 'icon',
        icon: ShoppingBag
      },
      {
        type: 'image',
        url: 'loulou-preview.png'
      }]
    },
    {
      id: "thermoTech",
      title: "Thermo Tech",
      type: "Headless E-commerce",
      description: "Architected a full headless migration for a scaling HVAC industry leader. \n\nThe Challenge\nThe existing legacy system suffered from significant performance bottlenecks and a rigid frontend that limited conversion growth. \n\nThe Solution\nSpearheaded a migration to a modern tech stack, decoupling the storefront from the backend logic. This allowed for sub-second page loads and a completely custom user journey tailored to technical HVAC buyers.\n\nKey Impact\n• Reduced Largest Contentful Paint (LCP) by over 60%.\n• Developed a custom Shopify-integrated component library.\n• Implemented an automated build pipeline for rapid feature deployment.",
      icon: Zap,
      color: "bg-[#8DA1B9]",
      tags: ["Optimization", "React", "Shopify", "Performance"],
      live: "#",
      repo: "#",
      gallery: [{
        type: 'icon',
        icon: Zap
      },
      {
        type: 'image',
        url: '#'
      }]
    },
    {
      id: "freelanceSite",
      title: "Freelance Hub",
      type: "Personal Brand Ecosystem",
      description: "A specialized platform designed to showcase full-stack capabilities and facilitate client onboarding for independent consultancy. Focuses on minimal bloat and high-conversion UX.",
      icon: Globe,
      color: "bg-[#CBB3BF]",
      tags: ["React", "Personal Brand", "Consultancy"],
      live: "#",
      repo: "#",
      gallery: [{
        type: 'icon',
        icon: Globe
      },
      {
        type: 'image',
        url: '#'
      }]
    },
  ],


  valueTiles: [
    {
      title: "Interactive Frontends",
      description: "Engineering high-fidelity interfaces with optimized state management and motion.",
      icon: Zap,
      accent: "text-[#EF959C]",
      bg: "bg-[#EF959C]/10"
    },
    {
      title: "Schema Validation",
      description: "Architecting robust libraries for complex data validation and integrity.",
      icon: Layers,
      accent: "text-[#8DA1B9]",
      bg: "bg-[#8DA1B9]/10"
    },
    {
      title: "Scalable Codebases",
      description: "Turning complex functional requirements into maintainable, scalable architectures.",
      icon: Cpu,
      accent: "text-[#95ADB6]",
      bg: "bg-[#95ADB6]/10"
    }
  ],

  callToActions: [
    {
      title: "Looking for a Senior hand to lead your next build?",
      subtitle: "Hire a Specialist Engineer",
      buttonText: "Check My Availability",
      bgColor: "bg-[#EF959C]"
    },
    {
      title: "Ready to transform your technical architecture?",
      subtitle: "Secure Expert Consultancy",
      buttonText: "Secure My Time",
      bgColor: "bg-slate-900"
    }
  ],
  strategicValue: [
    {
      title: "Marketplace Independence",
      description: "Reducing reliance on third-party platforms (Vinted/eBay) by engineering custom, high-converting home-base storefronts.",
      icon: ShieldCheck,
      color: "text-[#EF959C]",
      bg: "bg-[#EF959C]/5"
    },
    {
      title: "Technical SEO & Scale",
      description: "Implementing advanced schema markups and optimized asset pipelines to drive organic discovery and scale sales volume.",
      icon: TrendingUp,
      color: "text-[#8DA1B9]",
      bg: "bg-[#8DA1B9]/5"
    },
    {
      title: "Architecture Modernization",
      description: "Legacy system migrations into headless, decoupled environments to eliminate performance bottlenecks and technical debt.",
      icon: Cpu,
      color: "text-[#95ADB6]",
      bg: "bg-[#95ADB6]/5"
    }
  ],

  journalPosts: [
    {
      id: "bento-architecture",
      title: "Bento Architecture: Engineering a Senior Portfolio",
      date: "Mar 05",
      readTime: "8 min",
      category: "Engineering",
      excerpt: "A deep dive into how this website was built using a modular 'Shell and Content' pattern to unify 15+ years of full-stack expertise.",
      content: `Treating a portfolio as a product rather than a document changes the engineering approach. This site wasn't built from a template; it was architected as a modular React ecosystem designed to scale with a decade and a half of technical history.

# The Technical Stack
The foundation is built on **Next.js** for its robust routing and server-side capabilities, styled with **Tailwind CSS** for rapid, utility-first UI development. For icons, I leveraged **Lucide React**, ensuring a consistent visual language across all interactive elements.

### The 'Shell and Content' Pattern
One of the primary challenges was balancing diverse content types—Labs, Client Case Studies, and a Journal—without creating page bloat. 
I implemented a centralized data schema that decouples the content from the UI logic. This allows the \`App.jsx\` to function as a "Shell." When a user interacts with a Bento tile, a **Unified Modal System** dynamically injects the relevant component based on the state.

### Strategic Hosting & CI/CD
Hosting is optimized for global performance using a **Vercel** deployment pipeline. This ensures:
1. **Edge Deployment:** Sub-second delivery of assets.
2. **CI/CD Integration:** Automatic builds triggered by GitHub commits.
3. **Programmatic SEO:** Metadata is injected at the layout level.

### Future Scalability
By using this modular grid, adding a new "Experimental Lab" is as simple as adding an object to an array. The UI adapts automatically, maintaining the bento rhythm while keeping the core bundle size lean.`
    },
    { id: "headless", title: "The Case for Headless E-commerce in 2024", date: "Feb 12", readTime: "6 min", category: "Architecture", excerpt: "Decoupling is no longer a luxury, but a necessity for enterprise scaling." },
    { id: "seo", title: "Technical SEO for High-Res Catalogs", date: "Jan 28", readTime: "4 min", category: "Growth", excerpt: "Optimizing media-heavy vintage storefronts for organic discovery." }
  ]

  // const clientProjects = [
  //   {
  //     id: "thermoTech",
  //     title: "Thermo Tech (Launching March)",
  //     description: "Shopify sales website for a startup",
  //     icon: Edit3,
  //     color: "bg-brand-teal",
  //     tags: ["Shopify"],
  //     live: "#",
  //     repo: "#"
  //   },
  //   {
  //     id: "alongcameloulou",
  //     title: "Along Came Lou Lou(Coming soon)",
  //     description: "A high-performance discovery engine for cinema. Features advanced filtering, trailer integration, and personal watchlists.",
  //     icon: Film,
  //     color: "bg-brand-mauve",
  //     tags: ["TMDB API", "Tailwind", "React Query"],
  //     live: "#",
  //     repo: "#"
  //   }
  // ];
};
