import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useSpring } from 'framer-motion';
import { ArrowUpRight, Plus, Github, Linkedin, Mail, Code2, Monitor, Database, Globe, Maximize, Sparkles, X } from 'lucide-react';
import Lenis from '@studio-freight/lenis'; // <-- Import Lenis

const BRAND_NAME = "@yen_.005";
const REAL_NAME = "John Lumiwes Palangeo";
const EMAIL = "johnpalangeo96@example.com"; // Fixed missing @ symbol

const PROJECTS = [
  {
    id: 1,
    title: "Barangay Bulo E-Gov System",
    category: "Information Management",
    tech: "PHP, MySQL, Bootstrap 5, JS",
    image: "upload/project/bgry_bulo.png",
    description: "Comprehensive information management platform designed to streamline resident records, automated document requests, emergency dispatch, and incident log tracking.",
    link: "https://github.com"
  },
  {
    id: 2,
    title: "Lakbay Kalinga Café",
    category: "E-Commerce / Food Delivery",
    tech: "PHP, MySQL, JavaScript, CSS",
    image: "upload/project/lakbay.png",
    description: "A premium web-based food delivery platform designed to streamline café operations, featuring role-based dashboards, integrated map routing, and an immersive customer experience.",
    link: "https://github.com"
  },
  {
    id: 3,
    title: "Saint William's Academy",
    category: "Web Development / CMS",
    tech: "PHP, MySQL, Tailwind CSS, JS",
    image: "upload/project/swabi.png",
    description: "Full-stack web application and custom Content Management System (CMS) designed to streamline academic information sharing, news publishing, and administrative content management.",
    link: "https://github.com"
  }
];

const SKILLS = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "Tailwind CSS"]
  },
  {
    category: "Backend & Data",
    items: ["PHP", "Python", "MySQL"]
  },
  {
    category: "Design",
    items: ["Canva", "UI & Layout Design", "Basic Design Tools"]
  },
  {
    category: "Tools & Skills",
    items: ["Troubleshooting", "Debugging", "Microsoft Office", "Google Workspace"]
  }
];

const EXPERIENCE = [
  {
    year: "2026",
    role: "President",
    organization: "Youth United for Peace Organization",
    description: "Leading organizational initiatives and community-driven projects focused on peace building and youth empowerment."
  },
  {
    year: "2026",
    role: "National Director for Projects",
    organization: "Alliance of Young Leaders (AYL)",
    description: "Founding member overseeing the strategic planning, coordination, and execution of national youth project initiatives."
  },
  {
    year: "2025 - 2026",
    role: "President",
    organization: "Supreme Student Council, Saint Tonis College, Inc.",
    description: "Led the student body, managed council operations, and advocated for student welfare, governance, and institutional policies."
  },
  {
    year: "2023 - Present",
    role: "Technical Director",
    organization: "The Tonisian Reflectors",
    description: "Managing technical operations, layout design, and digital implementations for the official school publication."
  }
];

const CERTIFICATIONS = [
  { year: "Course", role: "Foundations of Cybersecurity", organization: "Coursera" },
  { year: "Course", role: "Command Line in Linux", organization: "Coursera" },
  { year: "Course", role: "Connect and Protect: Network Security", organization: "Coursera" },
  { year: "Course", role: "Play It Safe: Manage Security Risk", organization: "Coursera" },
  { year: "Course", role: "Foundations of User Experience (UX) Design", organization: "Coursera" },
  { year: "Seminar", role: "Artificial Intelligence in Education", organization: "Training" },
  { year: "Seminar", role: "PANAGTIPUN 2.0 RYL Cordillera", organization: "Regional Youth Leadership" },
  { year: "Seminar", role: "Leadership and Student Governance", organization: "Training" }
];

const AFFILIATIONS = [
  { year: "2026", role: "Lead", organization: "AWS Learning Club – AWSIE" },
  { year: "2026", role: "Secretariat Member", organization: "AWS User Group (AWSUG) Philippines" },
  { year: "2023 - 2024", role: "Secretary", organization: "Supreme Student Council, Saint Tonis College, Inc." },
  { year: "2023 - 2024", role: "Secretary", organization: "Community Red Cross Youth Council — Bulanao Norte" }
];

const FAQS = [
  {
    question: "What kinds of projects do you work on?",
    answer: "I specialize in web applications, information systems, and interactive creative development. My focus spans from robust administrative dashboards to immersive, animation-heavy portfolio websites."
  },
  {
    question: "How do you approach a new project?",
    answer: "I start with architectural planning and user flow mapping. Once the strategy is solid, I move to high-fidelity design, followed by component-driven development and rigorous testing."
  },
  {
    question: "Are you open to collaborations?",
    answer: "Yes, I am always open to discussing meaningful collaborations, especially for projects focused on community impact, education, or innovative digital tools."
  }
];

// --- LOADING SCREEN COMPONENT ---
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 2;
      });
    }, 100);
    
    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[500] bg-[#050505] flex items-center justify-center text-[#F0EFEC] selection:bg-transparent"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="flex flex-col items-center justify-center font-mono text-[10px] sm:text-xs tracking-widest opacity-80">
        <div className="flex items-center gap-8 md:gap-16 mb-6">
          <div className="flex flex-col gap-1 items-start">
            <p>IDP.STUDIO / ®</p>
            <p className="tabular-nums">SYSTEMS / {progress.toString().padStart(3, '0')}%</p>
            <div className="flex items-center gap-3 mt-3">
              <motion.div animate={{ rotate: 90 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
                <Maximize size={14} />
              </motion.div>
              <span className="font-sans font-bold text-[14px] leading-none tracking-normal">CE</span>
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Sparkles size={14} />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
              <Globe size={32} strokeWidth={1} />
            </motion.div>
            <div className="border border-[#F0EFEC]/30 rounded-full px-2 py-[2px] text-[8px] tracking-widest">
              4JR-004686
            </div>
          </div>
        </div>
        <div className="flex gap-8 md:gap-16 text-[#F0EFEC]/40 text-[9px] mt-6 tracking-[0.3em]">
          <span>ALL RIGHTS RESERVED</span>
          <span>©{new Date().getFullYear()}</span>
        </div>
      </div>
    </motion.div>
  );
};

// --- PROJECT MODAL COMPONENT ---
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%", transition: { ease: [0.76, 0, 0.24, 1], duration: 0.8 } }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[300] bg-[#F0EFEC] text-[#050505] overflow-y-auto overflow-x-hidden"
    >
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[310] w-full max-w-[90vw] flex justify-between items-center">
        <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-black/5 hidden md:block">
          <span className="font-display text-lg tracking-widest text-[#FF4F00]">{project.title}</span>
        </div>
        <button 
          onClick={onClose} 
          className="ml-auto bg-black text-[#FF4F00] hover:bg-[#FF4F00] hover:text-black transition-colors rounded-full px-6 py-3 interactive flex items-center gap-3 font-bold tracking-widest text-xs"
        >
          CLOSE <X size={16} />
        </button>
      </div>

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-[7vw] leading-[0.85] uppercase mb-12"
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 border-y border-black/10 py-8 mb-12"
          >
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 mb-2">Category</p>
              <p className="font-medium">{project.category}</p>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 mb-2">Tech Stack</p>
              <p className="font-medium">{project.tech}</p>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 mb-2">Project Link</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-medium text-[#FF4F00] hover:text-black flex items-center gap-1 interactive transition-colors">
                View Source / Live <ArrowUpRight size={16}/>
              </a>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl leading-relaxed font-light max-w-4xl text-charcoal mb-16"
          >
            {project.description}
          </motion.p>
        </div>
        
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }}
           className="w-full bg-black/5 relative"
        >
          <div className="max-w-[100rem] mx-auto px-6">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-sm shadow-xl" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


// --- EXISTING COMPONENTS ---
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, type: "spring", stiffness: 70, damping: 20 }}
    className={className}
  >
    {children}
  </motion.div>
);

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[600] mix-blend-difference bg-white flex items-center justify-center overflow-hidden"
      animate={{ x: mousePos.x - 12, y: mousePos.y - 12, scale: isHovering ? 2.5 : 1 }}
      transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.1 }}
    />
  );
};

const Navbar = () => {
  const navItems = ['ABOUT', 'WORK', 'CAPABILITIES', 'EXPERIENCE', 'CONTACT'];
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }} 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-auto max-w-[90vw]"
    >
      <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/5 flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar">
        <span className="font-display text-lg tracking-widest whitespace-nowrap hidden md:block mr-4 text-[#FF4F00]">
          {BRAND_NAME}
        </span>
        <div className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="text-[11px] font-semibold tracking-[0.15em] text-black/70 hover:text-[#FF4F00] transition-colors relative group whitespace-nowrap interactive">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FF4F00] transition-all group-hover:w-full" />
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const GridLines = () => (
  <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 z-0 opacity-[0.07]">
    {[1, 2, 3, 4, 5].map((i) => <div key={i} className="h-full w-px bg-black" />)}
  </div>
);

const Hero = () => {
  const words = "DESIGNING AND BUILDING DIGITAL EXPERIENCES.".split(" ");
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#F0EFEC]">
      <GridLines />
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 mb-8 border border-black/10 px-4 py-2 rounded-full"
        >
          {BRAND_NAME}
        </motion.div>

        <h1 className="font-display text-[15vw] md:text-[11vw] lg:text-[9vw] leading-[0.85] uppercase max-w-[90%] mx-auto flex flex-wrap justify-center gap-x-4 md:gap-x-8">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="overflow-hidden inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 + i * 0.1, type: "spring", damping: 25, stiffness: 120 }}
            >
              <span className="inline-block">{word}</span>
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12 md:mt-20 max-w-xl text-center"
        >
          <p className="text-lg md:text-xl text-black/70 leading-relaxed font-light">
            From ideas to interfaces, I build purposeful digital experiences that bring technology, design, and problem-solving together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-xs font-medium tracking-widest uppercase text-black/50">
            <span>Web Development</span>
            <span className="hidden md:inline text-[#FF4F00]">•</span>
            <span>Software Engineering</span>
            <span className="hidden md:inline text-[#FF4F00]">•</span>
            <span>Cybersecurity</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest uppercase text-black/40">Scroll</span>
          <div className="w-[1px] h-12 bg-black/20 relative overflow-hidden">
            <motion.div 
              className="w-full h-1/2 bg-[#FF4F00] absolute top-0"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ScrollRevealText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 80%", "end 50%"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const words = "Technology becomes meaningful when thoughtful design, useful functionality, and clear purpose work together to solve real problems and create intuitive, seamless digital systems.".split(" ");

  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#F0EFEC] border-t border-black/5">
      <GridLines />
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/4">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 sticky top-32">About / Approach</h2>
        </div>
        <div className="md:w-3/4">
          <p ref={containerRef} className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.3] tracking-tight flex flex-wrap">
            {words.map((word, i) => (
              <Word key={i} progress={smoothProgress} range={[i / words.length, (i + 1) / words.length]}>
                {word}
              </Word>
            ))}
          </p>
          <FadeIn delay={0.2}>
            <div className="mt-16 flex flex-col md:flex-row gap-8 md:gap-16 border-t border-black/10 pt-12">
              <div className="flex-1">
                <h3 className="font-display text-2xl mb-3 text-[#FF4F00]">Curiosity & Learning</h3>
                <p className="text-black/60 text-sm leading-relaxed">Built around a continuous drive to explore new frameworks, emerging paradigms, and the technical mechanisms that power the modern web.</p>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl mb-3 text-[#FF4F00]">Purposeful Systems</h3>
                <p className="text-black/60 text-sm leading-relaxed">Focused on designing robust workflows and thoughtful interfaces that prioritize clarity, accessibility, and meaningful outcomes.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative mr-2 md:mr-4 mt-2">
      <span className="absolute opacity-10 text-black">{children}</span>
      <motion.span style={{ opacity }} className="text-black">{children}</motion.span>
    </span>
  );
};

const WorkShowcase = ({ onSelectProject }) => (
  <section id="work" className="py-24 bg-[#F0EFEC]">
    <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end border-b border-black/10 pb-8">
      <FadeIn><h2 className="font-display text-6xl md:text-8xl leading-none">Selected Work</h2></FadeIn>
      <FadeIn delay={0.1}><span className="text-sm font-medium tracking-widest uppercase text-black/50 hidden md:block">03 Projects</span></FadeIn>
    </div>
    <div className="flex flex-col gap-24 md:gap-40">
      {PROJECTS.map((project, index) => <WorkItem key={project.id} project={project} index={index} onClick={() => onSelectProject(project)} />)}
    </div>
  </section>
);

const WorkItem = ({ project, index, onClick }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(useSpring(scrollYProgress, { stiffness: 100, damping: 30 }), [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 w-full">
      <motion.div 
        onClick={onClick}
        initial={{ clipPath: "inset(100% 0 0 0)" }} whileInView={{ clipPath: "inset(0% 0 0 0)" }} viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden bg-black/5 group cursor-pointer interactive"
      >
        <motion.img style={{ y }} src={project.image} alt={project.title} className="absolute inset-0 w-full h-[120%] object-cover -top-[10%] transition-transform duration-700 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FF4F00] rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out z-20 shadow-2xl">
          <span className="text-[10px] font-semibold tracking-widest uppercase text-white text-center flex flex-col items-center gap-1">View <br/>Project<ArrowUpRight size={14} className="mt-1" /></span>
        </div>
      </motion.div>
      <FadeIn delay={0.2} className="mt-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="md:w-2/3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF4F00] mb-3 flex items-center gap-3"><span>{String(index + 1).padStart(2, '0')}</span><span className="w-8 h-px bg-[#FF4F00]/50" /><span>{project.category}</span></p>
          <h3 className="font-display text-4xl md:text-6xl uppercase tracking-wide cursor-pointer hover:text-[#FF4F00] transition-colors interactive" onClick={onClick}>{project.title}</h3>
        </div>
        <div className="md:w-1/3 flex flex-col gap-4">
          <p className="text-black/70 text-sm leading-relaxed">{project.description}</p>
          <p className="text-xs font-medium tracking-wider text-black/40 uppercase">Tech: {project.tech}</p>
        </div>
      </FadeIn>
    </div>
  );
};

const Capabilities = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 40 });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest < 0.5) setActiveIndex(1);
    else if (latest < 0.75) setActiveIndex(2);
    else setActiveIndex(3);
  });

  const categories = [
    { title: "STRATEGY", icon: <Monitor size={48} strokeWidth={1} />, desc: "Defining project architecture, technical requirements, and user flows to ensure scalable and purposeful digital solutions before a single line of code is written." },
    { title: "DEVELOPMENT", icon: <Code2 size={48} strokeWidth={1} />, desc: "Building responsive, accessible, and maintainable web applications utilizing modern frameworks to turn concepts into high-performing digital products." },
    { title: "DESIGN", icon: <Plus size={48} strokeWidth={1} className="rotate-45" />, desc: "Creating clear interfaces and immersive digital experiences through deliberate typography, grid-based layouts, and intuitive interaction design." },
    { title: "SYSTEMS", icon: <Database size={48} strokeWidth={1} />, desc: "Architecting structured digital workflows and robust backend services that improve how information is managed, retrieved, and securely utilized." }
  ];

  return (
    <section id="capabilities" ref={containerRef} className="h-[400vh] bg-[#050505] text-[#F0EFEC] relative">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
          <div className="absolute top-1/2 left-0 w-full h-px bg-[#F0EFEC]" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-[#F0EFEC]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full border border-[#F0EFEC]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border border-[#FF4F00]/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 flex flex-col font-display text-7xl md:text-[8vw] leading-[0.85] uppercase">
            {categories.map((cat, i) => (
              <motion.div key={cat.title} className="cursor-pointer interactive transition-colors duration-500" style={{ color: activeIndex === i ? '#FF4F00' : '#292929', WebkitTextStroke: activeIndex === i ? '0px transparent' : '1px #292929' }}>
                {cat.title}
              </motion.div>
            ))}
          </div>
          <div className="w-full md:w-1/2 md:pl-20">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -20 }} transition={{ duration: 0.4, ease: "easeOut" }} className="flex flex-col border border-[#F0EFEC]/20 p-8 md:p-12 bg-[#050505]/80 backdrop-blur-sm relative">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#FF4F00] -translate-x-px -translate-y-px" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#FF4F00] translate-x-px -translate-y-px" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#FF4F00] -translate-x-px translate-y-px" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#FF4F00] translate-x-px translate-y-px" />
                <div className="text-[#FF4F00] mb-6">{categories[activeIndex].icon}</div>
                <h3 className="font-display text-4xl mb-4 tracking-wide">{categories[activeIndex].title}</h3>
                <p className="text-[#929292] text-lg leading-relaxed font-light">{categories[activeIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => (
  <section className="py-24 bg-[#F0EFEC] border-b border-black/10">
    <div className="max-w-7xl mx-auto px-6">
      <FadeIn><h2 className="font-display text-5xl md:text-7xl mb-16 text-center uppercase">Technical Arsenal</h2></FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((skillGroup, i) => (
          <FadeIn key={i} delay={i * 0.1} className="border-t border-black/20 pt-6 group">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FF4F00] mb-6">{skillGroup.category}</h3>
            <ul className="flex flex-col gap-3">
              {skillGroup.items.map((skill, j) => (
                <li key={j} className="text-lg font-medium text-black/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] opacity-0 group-hover:opacity-100 transition-opacity" />{skill}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const TimelineSection = ({ id, title, subtitle, items, borderBottom = false }) => (
  <section id={id} className={`py-24 bg-[#F0EFEC] ${borderBottom ? 'border-b border-black/10' : ''}`}>
    <div className="max-w-4xl mx-auto px-6">
      <FadeIn className="mb-20">
        <h2 className="font-display text-5xl md:text-7xl uppercase">{title}</h2>
        {subtitle && <p className="text-black/50 mt-4 max-w-lg">{subtitle}</p>}
      </FadeIn>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-t border-black/10 group">
            <div className="md:w-1/4 flex flex-col pt-1"><span className="text-sm font-semibold tracking-widest text-[#FF4F00]">{item.year}</span></div>
            <div className="md:w-3/4 flex flex-col">
              <h3 className="text-2xl md:text-3xl font-display uppercase tracking-wide mb-1 group-hover:text-[#FF4F00] transition-colors">{item.role}</h3>
              <h4 className="text-lg font-medium text-black/70 mb-4">{item.organization}</h4>
              {item.description && <p className="text-black/60 leading-relaxed text-sm md:text-base max-w-2xl">{item.description}</p>}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-32 bg-[#F0EFEC] border-t border-black/10">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn><h2 className="font-display text-5xl md:text-7xl mb-16 uppercase">Questions & Answers</h2></FadeIn>
        <div className="flex flex-col border-t border-black/20">
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1} className="border-b border-black/20">
              <button className="w-full py-8 flex justify-between items-center text-left interactive group" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-[#FF4F00] transition-colors pr-8">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === i ? 45 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="flex-shrink-0 text-black/40 group-hover:text-[#FF4F00]"><Plus size={24} /></motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20 }} className="overflow-hidden">
                    <p className="pb-8 text-black/60 leading-relaxed text-lg max-w-3xl">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <section id="contact" className="relative min-h-screen bg-[#FF4F00] text-[#050505] flex flex-col justify-between overflow-hidden">
    <div className="absolute inset-0 pointer-events-none flex justify-between max-w-7xl mx-auto px-6 z-0 opacity-20">
      {[1, 2, 3, 4, 5].map((i) => <div key={i} className="h-full w-px bg-black" />)}
    </div>
    <div className="max-w-7xl mx-auto px-6 w-full pt-32 pb-12 relative z-10 flex-1 flex flex-col">
      <div className="max-w-4xl">
        <FadeIn><h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] uppercase mb-12">Have an idea worth building? Let's make something meaningful.</h2></FadeIn>
        <FadeIn delay={0.2}><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-4 text-xl md:text-3xl font-medium border-b-2 border-black pb-2 hover:text-black/60 hover:border-black/60 transition-colors interactive">GET IN TOUCH <ArrowUpRight size={32} /></a></FadeIn>
      </div>
      <div className="mt-auto pt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-black/20 pb-12 mb-8">
          <FadeIn delay={0.3}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-black/50 mb-4">Contact & Identity</p>
            <p className="text-2xl font-semibold uppercase font-display tracking-wider">{REAL_NAME}</p>
            <p className="text-black/80 mt-1">{EMAIL}</p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex gap-6">
            <a href="https://github.com/aljonmarkush" className="w-12 h-12 bg-black rounded-full text-[#FF4F00] flex items-center justify-center hover:bg-black/80 transition-all interactive"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/john-palangeo-46aaa1277/" className="w-12 h-12 bg-black rounded-full text-[#FF4F00] flex items-center justify-center hover:bg-black/80 transition-all interactive"><Linkedin size={20} /></a>
            <a href={`mailto:${EMAIL}`} className="w-12 h-12 bg-black rounded-full text-[#FF4F00] flex items-center justify-center hover:bg-black/80 transition-all interactive"><Mail size={20} /></a>
          </FadeIn>
        </div>
        <FadeIn delay={0.5} className="w-full overflow-hidden flex justify-center"><h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[9.5vw] leading-[0.75] uppercase whitespace-nowrap text-black">LET'S BUILD SOMETHING GREAT</h1></FadeIn>
        <div className="flex justify-between items-center mt-8 text-xs font-bold tracking-widest uppercase text-black/50">
          <span>© {new Date().getFullYear()}</span><span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical', 
      gestureDirection: 'vertical', 
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Stop Lenis while loading or when a modal is open to prevent background scrolling issues
    if (isLoading || selectedProject) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [isLoading, selectedProject]);

  return (
    <div className="antialiased relative bg-[#F0EFEC]">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <ScrollRevealText />
            <WorkShowcase onSelectProject={setSelectedProject} />
            <Capabilities />
            <TechStack />
            <TimelineSection id="experience" title="Experience & Leadership" subtitle="A timeline of organizational leadership, technical initiatives, and community engagements." items={EXPERIENCE} borderBottom={true} />
            <TimelineSection id="certifications" title="Certifications" items={CERTIFICATIONS} borderBottom={true} />
            <TimelineSection id="affiliations" title="Affiliations" items={AFFILIATIONS} />
            <FAQ />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}