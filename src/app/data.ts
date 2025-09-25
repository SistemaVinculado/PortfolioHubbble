import {
    Award,
    BlogPost,
    CalculatorScope,
    CalculatorService,
    Client,
    ContactInfo,
    EngagementModel,
    FaqItem,
    JobOpening,
    LabExperiment,
    LegalContent,
    NavLink,
    PortfolioItem,
    ProcessStep,
    Service,
    StatItem,
    TeamMember,
    Technology,
    Testimonial
} from './models';

export const NAV_LINKS: NavLink[] = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Team', href: '#team' },
    { label: 'Labs', href: '#labs' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
];

export const CLIENTS: Client[] = [
    { name: 'Tuple' },
    { name: 'Mirage' },
    { name: 'Statamic' },
    { name: 'SavvyCal' },
    { name: 'Transistor' },
    { name: 'Reform' },
];

export const STATS: StatItem[] = [
    {
      iconPath: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      value: 120,
      label: 'Projects Completed',
      suffix: '+'
    },
    {
      iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
      value: 8,
      label: 'Years in Business',
      suffix: '+'
    },
    {
      iconPath: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345h5.375c.525 0 .734.686.364 1.04l-4.343 3.152a.563.563 0 00-.182.635l2.125 5.111a.563.563 0 01-.84.606l-4.343-3.152a.563.563 0 00-.666 0l-4.343 3.152a.563.563 0 01-.84-.606l2.125-5.111a.563.563 0 00-.182-.635l-4.343-3.152a.563.563 0 01.364-1.04h5.375a.563.563 0 00.475-.345l2.125-5.111z',
      value: 98,
      label: 'Client Satisfaction',
      suffix: '%'
    },
    {
      iconPath: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582',
      value: 15,
      label: 'Countries Served',
      suffix: '+'
    }
];

export const SERVICES: Service[] = [
    {
      iconPath: 'M6.75 7.5l-3.75 3.75 3.75 3.75M17.25 7.5l-3.75 3.75 3.75 3.75',
      title: 'Web Applications',
      description: 'Scalable and performant web apps built with modern frameworks like Angular and React.'
    },
    {
      iconPath: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125',
      title: 'UI/UX Design',
      description: 'Intuitive and beautiful user interfaces that provide an exceptional user experience.'
    },
    {
      iconPath: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.'
    },
    {
      iconPath: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z',
      title: 'Cloud Solutions',
      description: 'Robust cloud infrastructure and deployment solutions on AWS, Azure, and Google Cloud.'
    }
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
      {
          iconPath: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
          title: 'Project-Based',
          description: 'Ideal for well-defined projects with a clear scope and deliverables. We provide a fixed price and timeline.',
          features: ['Fixed budget & timeline', 'Clear project scope', 'Milestone-based payments', 'Ideal for MVPs']
      },
      {
          iconPath: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-3.741 0a9.094 9.094 0 013.741-.479 3 3 0 01-4.682-2.72m-3.741 0a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72M3.12 3.12a9.094 9.094 0 013.741-.479 3 3 0 014.682 2.72m0 0a9.094 9.094 0 003.741.479 3 3 0 004.682 2.72M3.12 3.12a9.094 9.094 0 00-3.741.479 3 3 0 004.682 2.72m0 0a9.094 9.094 0 01-3.741.479 3 3 0 01-4.682 2.72',
          title: 'Dedicated Team',
          description: 'An extension of your own team. We provide a dedicated group of experts to work exclusively on your project.',
          features: ['Full control over the team', 'Flexible & adaptable scope', 'Monthly billing cycle', 'Long-term collaboration']
      },
      {
          iconPath: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z',
          title: 'Consulting Retainer',
          description: 'Access our expertise on an ongoing basis for strategic guidance, design reviews, and technical support.',
          features: ['On-demand expert advice', 'Strategic planning support', 'Regular performance audits', 'Priority access to our team']
      }
];

export const TECHNOLOGIES: Technology[] = [
    { name: 'Angular', svgLogo: 'M12 2L2 6.35V17.65L12 22L22 17.65V6.35L12 2ZM12 4.42L19.1 8.5V15.5L12 19.58L4.9 15.5V8.5L12 4.42ZM12 10.17L15.09 12L12 13.83L8.91 12L12 10.17Z' },
    { name: 'React', svgLogo: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.21 7.79C15.82 7.4 15.19 7.4 14.8 7.79L11 11.59L9.2 9.79C8.81 9.4 8.18 9.4 7.79 9.79C7.4 10.18 7.4 10.81 7.79 11.2L10.29 13.7C10.68 14.09 11.31 14.09 11.7 13.7L16.2 9.2C16.59 8.81 16.6 8.18 16.21 7.79Z' },
    { name: 'TypeScript', svgLogo: 'M2 2H22V22H2V2ZM13 14H16V17H13V14ZM13 7H16V12H13V7ZM8 7H11V9H8V7ZM8 10H11V12H8V10ZM8 13H11V15H8V13Z' },
    { name: 'Node.js', svgLogo: 'M9 3V14.58L5.71 11.29C5.32 10.9 4.69 10.9 4.3 11.29C3.91 11.68 3.91 12.31 4.3 12.7L11.29 19.7C11.68 20.09 12.31 20.09 12.7 19.7L19.7 12.7C20.09 12.31 20.09 11.68 19.7 11.29C19.31 10.9 18.68 10.9 18.29 11.29L15 14.58V3H9Z' },
    { name: 'Python', svgLogo: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z' },
    { name: 'AWS', svgLogo: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 16H13V11H11V16ZM11 9H13V7H11V9Z' },
    { name: 'Figma', svgLogo: 'M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z' },
    { name: 'GraphQL', svgLogo: 'M12 2L1 9L12 22L23 9L12 2ZM12 4.44L19.42 9L12 19.56L4.58 9L12 4.44Z M5 10H8V14H5V10ZM16 10H19V14H16V10ZM10.5 10H13.5V14H10.5V10Z' }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
      imageUrl: 'https://picsum.photos/800/600?random=1',
      category: 'FinTech',
      title: 'NextGen Banking Platform',
      tags: ['Angular', 'Node.js', 'AWS'],
      description: 'A complete digital banking solution designed to provide a seamless and secure user experience. It includes features like real-time transaction tracking, budget management tools, and AI-powered financial advice.',
      challenge: 'The primary challenge was to build a highly secure, scalable platform that could handle thousands of concurrent users while complying with strict financial regulations. The user interface needed to be intuitive for a non-technical audience.',
      solution: 'We architected the backend on AWS using microservices for scalability and resilience. The frontend was built with Angular, utilizing lazy loading and OnPush change detection for maximum performance. We implemented multi-factor authentication and end-to-end encryption to ensure top-tier security.',
      gallery: ['https://picsum.photos/1200/800?random=11', 'https://picsum.photos/1200/800?random=12']
    },
    {
      imageUrl: 'https://picsum.photos/800/600?random=2',
      category: 'E-commerce',
      title: 'Global Fashion Marketplace',
      tags: ['React', 'GraphQL', 'Shopify'],
      description: 'An e-commerce platform connecting independent fashion designers with a global audience. The marketplace features personalized recommendations, a virtual try-on feature, and integrated social sharing.',
      challenge: 'Creating a visually rich and high-performance experience across all devices was key. The recommendation engine needed to be sophisticated yet fast, and the platform had to support multiple currencies and languages.',
      solution: 'We used React with Next.js for server-side rendering to optimize for SEO and initial page load speed. A GraphQL API provided flexible data fetching for the frontend. The virtual try-on was implemented using a custom WebGL integration.',
      gallery: ['https://picsum.photos/1200/800?random=21', 'https://picsum.photos/1200/800?random=22']
    },
    {
      imageUrl: 'https://picsum.photos/800/600?random=3',
      category: 'Healthcare',
      title: 'Telemedicine Mobile App',
      tags: ['Swift', 'Kotlin', 'Firebase'],
      description: 'A HIPAA-compliant mobile application that connects patients with doctors for virtual consultations. Features include video calls, secure messaging, and prescription management.',
      challenge: 'Ensuring patient data privacy and security was the top priority. The application needed to provide reliable, high-quality video streaming even on low-bandwidth connections.',
      solution: 'We built native iOS and Android apps for optimal performance and device integration. All data was encrypted both in transit and at rest. We integrated with a specialized WebRTC provider to ensure stable and secure video communication.',
      gallery: ['https://picsum.photos/1200/800?random=31', 'https://picsum.photos/1200/800?random=32']
    },
    {
      imageUrl: 'https://picsum.photos/800/600?random=4',
      category: 'Data Science',
      title: 'AI Analytics Dashboard',
      tags: ['Angular', 'D3.js', 'Python'],
      description: 'A powerful B2B dashboard that visualizes complex business data and provides actionable insights using machine learning models. It features customizable reports and predictive analytics.',
      challenge: 'The main hurdle was processing and visualizing massive datasets in real-time without compromising on performance. The visualizations had to be both powerful and easy to interpret for business users.',
      solution: 'The backend was built with Python and FastAPI for high-performance data processing. On the frontend, we used Angular combined with the D3.js library to create highly interactive and custom data visualizations that can handle large volumes of data efficiently.',
      gallery: ['https://picsum.photos/1200/800?random=41', 'https://picsum.photos/1200/800?random=42']
    }
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
      step: '01',
      title: 'Discover & Plan',
      description: 'We start by understanding your vision, goals, and target audience to create a strategic plan.'
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Our team designs stunning, user-centric interfaces and creates interactive prototypes.'
    },
    {
      step: '03',
      title: 'Develop & Test',
      description: 'We write clean, efficient code and rigorously test to ensure a flawless final product.'
    },
    {
      step: '04',
      title: 'Deploy & Support',
      description: 'We handle the launch and provide ongoing support to ensure your application runs smoothly.'
    }
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
      imageUrl: 'https://i.pravatar.cc/300?u=a042581f4e29026703d',
      name: 'Eleanor Vance',
      title: 'Founder & CEO',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      imageUrl: 'https://i.pravatar.cc/300?u=a042581f4e29026704a',
      name: 'Marcus Thorne',
      title: 'Lead Frontend Architect',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      imageUrl: 'https://i.pravatar.cc/300?u=a042581f4e29026704b',
      name: 'Isabelle Rossi',
      title: 'Head of UI/UX Design',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      imageUrl: 'https://i.pravatar.cc/300?u=a042581f4e29026704c',
      name: 'Julian Croft',
      title: 'Principal Backend Engineer',
      socials: { twitter: '#', linkedin: '#' }
    }
];

export const JOB_OPENINGS: JobOpening[] = [
      { position: 'Senior Angular Developer', location: 'Remote', type: 'Full-time' },
      { position: 'Lead UI/UX Designer', location: 'Tech City Office', type: 'Full-time' },
      { position: 'Cloud Infrastructure Engineer', location: 'Remote', type: 'Contract' },
];

export const LAB_EXPERIMENTS: LabExperiment[] = [
    {
      iconPath: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 01-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 013.09-3.09L12 5.25l2.846.813a4.5 4.5 0 013.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 01-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.25 22.5l-.648-1.947a4.5 4.5 0 01-3.09-3.09l-1.947-.648 1.947-.648a4.5 4.5 0 013.09-3.09l.648-1.947.648 1.947a4.5 4.5 0 013.09 3.09l1.947.648-1.947.648a4.5 4.5 0 01-3.09 3.09z',
      title: 'Generative Art Engine',
      description: 'An experimental engine using WebGL and shaders to create unique, evolving generative art pieces in real-time.',
      tags: ['WebGL', 'Three.js', 'Creative Coding'],
      url: '#'
    },
    {
      iconPath: 'M3.75 13.5l-3.75 3.75 3.75 3.75m16.5-15l-3.75 3.75 3.75 3.75M9 20.25l6-16.5',
      title: 'AI Code Assistant',
      description: 'A custom-trained language model integrated into the IDE to provide smart code completions and bug detection.',
      tags: ['AI/ML', 'Python', 'VSCode Extension'],
      url: '#'
    },
    {
      iconPath: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.025 12.025 0 01-4.25 6.11m-1.59-8.67a12.025 12.025 0 01-4.25-6.11m5.84 2.56a6 6 0 01-7.38 5.84m12.12-3.28a12.025 12.025 0 01-6.11 4.25m8.67-1.59a12.025 12.025 0 01-6.11-4.25m-2.56-5.84a6 6 0 017.38-5.84m-12.12 3.28a12.025 12.025 0 016.11-4.25m-8.67 1.59a12.025 12.025 0 016.11 4.25',
      title: 'Decentralized Identity',
      description: 'Exploring blockchain technology for creating a secure and self-sovereign digital identity management system.',
      tags: ['Blockchain', 'Web3', 'Cryptography'],
      url: '#'
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
      imageUrl: 'https://picsum.photos/800/600?random=5',
      category: 'Development',
      title: 'The Rise of Serverless: A Developer\'s Guide',
      excerpt: 'Exploring the shift towards serverless architecture and how it can benefit modern applications.',
      url: '#',
      authorName: 'Marcus Thorne',
      authorAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704a',
      date: 'July 15, 2024',
      readTime: 8,
      content: [
        { type: 'p', text: 'Serverless computing has rapidly evolved from a niche concept to a mainstream architectural pattern. By abstracting away the underlying infrastructure, serverless allows developers to focus purely on writing code and delivering business value. In this article, we delve into the core principles of serverless, its benefits, and potential drawbacks.' },
        { type: 'h2', text: 'What is Serverless?' },
        { type: 'p', text: 'At its core, serverless computing is a cloud execution model where the cloud provider dynamically manages the allocation and provisioning of servers. You organize your application into functions and upload them to the provider. These functions are executed in stateless containers that are event-triggered, ephemeral, and fully managed by the cloud provider (like AWS Lambda, Azure Functions, or Google Cloud Functions).' },
        { type: 'h2', text: 'Key Benefits' },
        { type: 'p', text: 'The primary advantages include reduced operational costs, as you only pay for the compute time you consume, and enhanced scalability, as the platform automatically scales to handle the load. It also leads to faster development cycles because teams no longer need to worry about server management, patching, or operating systems.' }
      ]
    },
    {
      imageUrl: 'https://picsum.photos/800/600?random=6',
      category: 'UI/UX Design',
      title: 'Designing for Accessibility: Beyond Compliance',
      excerpt: 'Learn why creating inclusive digital experiences is not just a requirement, but a good business.',
      url: '#',
      authorName: 'Isabelle Rossi',
      authorAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704b',
      date: 'July 10, 2024',
      readTime: 6,
      content: [
        { type: 'p', text: 'Digital accessibility is the practice of designing and developing websites and applications so that people with disabilities can use them. However, true accessibility goes beyond mere compliance with guidelines like WCAG. It\'s about creating inclusive experiences that are better for everyone.' },
        { type: 'h2', text: 'Empathy-Driven Design' },
        { type: 'p', text: 'Start by understanding the diverse range of user needs. This includes visual, auditory, motor, and cognitive disabilities. Using tools like screen readers and color contrast checkers is a good start, but involving users with disabilities in your design process is invaluable. An accessible design often leads to a better user experience for all users, such as high-contrast text being easier to read in bright sunlight.' }
      ]
    },
    {
      imageUrl: 'https://picsum.photos/800/600?random=7',
      category: 'Technology',
      title: 'GraphQL vs. REST: Which is Right for You?',
      excerpt: 'A deep dive into the pros and cons of GraphQL and REST APIs for your next project.',
      url: '#',
      authorName: 'Julian Croft',
      authorAvatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704c',
      date: 'July 5, 2024',
      readTime: 10,
      content: [
        { type: 'p', text: 'Choosing the right API architecture is a critical decision in modern application development. For years, REST has been the de facto standard, but GraphQL has emerged as a powerful alternative. Let\'s compare them.' },
        { type: 'h2', text: 'The RESTful Approach' },
        { type: 'p', text: 'REST (Representational State Transfer) is an architectural style that uses a stateless, client-server communication protocol, almost always HTTP. It\'s built around resources and endpoints. A key challenge with REST is over-fetching or under-fetching of data, where clients either get more data than they need or have to make multiple requests to get all the data they need.' },
        { type: 'h2', text: 'The GraphQL Advantage' },
        { type: 'p', text: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It allows clients to request exactly the data they need and nothing more. This solves the over/under-fetching problem, making it particularly efficient for complex applications and mobile clients with limited bandwidth.' }
      ]
    }
];
  
export const TESTIMONIALS: Testimonial[] = [
    {
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      quote: 'StellarDev transformed our vision into a reality with unparalleled precision and creativity. Their team is professional, responsive, and truly masters of their craft. The best decision we ever made.',
      name: 'Sarah Johnson',
      title: 'CEO, Innovate Inc.',
      rating: 5
    },
    {
      avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
      quote: 'Working with StellarDev was a seamless experience. They delivered a complex application on time and on budget, exceeding all our expectations. Their technical expertise is second to none.',
      name: 'Michael Chen',
      title: 'CTO, QuantumLeap',
      rating: 5
    }
];

export const AWARDS: Award[] = [
    { title: 'Webby Award Winner', issuer: 'International Academy of Digital Arts and Sciences', year: '2023' },
    { title: 'Awwwards Site of the Day', issuer: 'Awwwards', year: '2023' },
    { title: 'FWA of the Day', issuer: 'Favourite Website Awards', year: '2022' },
    { title: 'CSS Design Awards', issuer: 'CSSDA', year: '2022' },
];

export const FAQS: FaqItem[] = [
    {
      question: 'What is your development process?',
      answer: 'Our process is collaborative and transparent. We follow an agile methodology with four key phases: Discover & Plan, Design & Prototype, Develop & Test, and Deploy & Support. This ensures we align with your vision at every stage and deliver a high-quality product.'
    },
    {
      question: 'How long does a project typically take?',
      answer: 'The project timeline depends on the scope and complexity. A typical project can range from 3 to 6 months. We provide a detailed project roadmap with clear milestones and deadlines after the initial discovery phase.'
    },
    {
      question: 'How do you handle project communication?',
      answer: 'We believe in constant communication. You will have a dedicated project manager and direct access to the team through Slack, regular video calls, and a shared project management tool like Jira or Trello for real-time progress tracking.'
    },
    {
      question: 'What is the cost of a typical project?',
      answer: 'Project costs vary based on requirements. We offer flexible engagement models, including fixed-price contracts and hourly rates. We provide a detailed, transparent proposal with a full cost breakdown after understanding your needs.'
    }
];

export const CONTACT_INFO: ContactInfo[] = [
    { 
      iconPath: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75', 
      title: 'Email Us', 
      value: 'hello@stellardev.agency',
      href: 'mailto:hello@stellardev.agency'
    },
    { 
      iconPath: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
      title: 'Call Us', 
      value: '+1 (555) 123-4567',
      href: 'tel:+1-555-123-4567'
    },
    {
      iconPath: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
      title: 'Visit Us',
      value: '123 Digital Ave, Tech City',
      href: '#'
    }
];

export const PRIVACY_POLICY: LegalContent = {
    title: 'Privacy Policy',
    lastUpdated: 'August 1, 2024',
    content: [
      { type: 'p', text: 'StellarDev Agency ("us", "we", or "our") operates the stellardev.agency website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.' },
      { type: 'h2', text: 'Information Collection and Use' },
      { type: 'p', text: 'We collect several different types of information for various purposes to provide and improve our Service to you. This includes data you provide us directly, such as when you fill out a contact form, and data we collect automatically, like your IP address and browsing behavior through cookies.' },
      { type: 'h2', text: 'Use of Data' },
      { type: 'p', text: 'StellarDev Agency uses the collected data for various purposes: to provide and maintain the Service, to notify you about changes to our Service, to allow you to participate in interactive features of our Service when you choose to do so, to provide customer care and support, to provide analysis or valuable information so that we can improve the Service, to monitor the usage of the Service, and to detect, prevent and address technical issues.' },
    ]
};

export const TERMS_OF_SERVICE: LegalContent = {
      title: 'Terms of Service',
      lastUpdated: 'August 1, 2024',
      content: [
          { type: 'h2', text: '1. Agreement to Terms' },
          { type: 'p', text: 'By using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.' },
          { type: 'h2', text: '2. Intellectual Property' },
          { type: 'p', text: 'The Service and its original content, features, and functionality are and will remain the exclusive property of StellarDev Agency and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.' },
          { type: 'h2', text: '3. Links To Other Web Sites' },
          { type: 'p', text: 'Our Service may contain links to third-party web sites or services that are not owned or controlled by StellarDev Agency. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.' },
      ]
};

export const CALCULATOR_SERVICES: CalculatorService[] = [
    { id: 'web_app', name: 'Web Application', basePrice: 5000 },
    { id: 'ui_ux', name: 'UI/UX Design', basePrice: 3000 },
    { id: 'mobile_app', name: 'Mobile App', basePrice: 8000 },
    { id: 'cloud', name: 'Cloud Solutions', basePrice: 4000 }
];

export const CALCULATOR_SCOPES: CalculatorScope[] = [
    { id: 'small', name: 'Small', description: 'Basic features, few pages', multiplier: 1 },
    { id: 'medium', name: 'Medium', description: 'Advanced features, multiple integrations', multiplier: 2.5 },
    { id: 'large', name: 'Large', description: 'Complex enterprise-level system', multiplier: 5 }
];

export const CALCULATOR_COMPLEXITIES: CalculatorScope[] = [
    { id: 'standard', name: 'Standard', description: 'Proven tech, standard integrations', multiplier: 1 },
    { id: 'advanced', name: 'Advanced', description: 'Custom features, API integrations', multiplier: 1.5 },
    { id: 'complex', name: 'Complex', description: 'AI/ML, real-time data, high security', multiplier: 2.5 }
];