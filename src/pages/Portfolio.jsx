import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Mail,
  Phone, Linkedin, ExternalLink, Award, Briefcase, GraduationCap, Code, ChevronDown, Github, Youtube, Brain, Sparkles, Zap, Database, Network
} from 'lucide-react';

  const projects = [
    {
      title: 'AI-Document-Summarizer',
      description: 'A modern AI-powered web app that summarizes PDF, DOCX, and TXT documents in seconds. Generate high-quality summaries with customizable length, live preview, detailed statistics, and export results as DOCX through a clean, responsive interface.',
      tags: ['React', 'Tailwind CSS', 'FastAPI', 'PyTorch', 'Hugging Face Transformers'],
      github: 'https://github.com/sowmyasri-d9/AI-Document-Summarizer.git',
      demo: 'https://youtu.be/Q20RSiPCmik'
    },
    {
      title: 'Customer Churn Predictor',
      description: 'Customer churn prediction focused on improving customer retention using machine learning techniques. The system analyzes customer behavior and engagement data to identify churn risk, leveraging models such as Decision Tree, Logistic Regression, Random Forest, and SVM. SMOTE is used to handle class imbalance, with a responsive React JS frontend and a FastAPI backend for efficient model serving and data processing.',
      tags: ['ML', 'FastAPI', 'React', 'Decision Tree', 'Logistic Regression', 'SVM', 'SMOTE'],
      github: 'https://github.com/Mbicha/CustomerChurnPredictor.git',
      demo: 'https://youtu.be/Q20RSiPCmik'
    },
    {
      title: 'Detecting Cyber Bullying on Twitter using Support Vector Machine',
      description: 'On the platform provided by social media, a significant number of young people are subjected to bullying. Cyberbullying is becoming a more widespread problem with the proliferation of social networking platforms. To discover word similarities in the tweets that were written by bullies, utilize Machine Learning, and develop a ML model that can do automatic identification of the bullying acts on different social media websites or platforms. Yet, many other methods for detecting bullying on social media have been deployed, however, the majority of these methods are text-based. The goal of this work is to show how software may be developed that can detect bullying in tweets, postings, and other online communications. It has been suggested to use a model that uses machine learning to identify bullying on Twitter. SVM is used in the classification process, whereas NLP is utilized for the processing of the data. Additionally, in order to decide whether or not a tweet constitutes bullying, the Twitter API is used to gather the tweets, which are then loaded into a model.',
      tags: ['SVM', 'Python', 'NLP', 'TF-IDF'],
      github: 'https://github.com/sowmyasri-d9/DETECTING-CYBERBULLYING-TWEETS-USING-MACHINE-LEARNING.git',
      demo: 'https://youtube.com'
    },
    {
      title: 'Wedding Management System',
      description: 'A comprehensive platform designed to simplify wedding planning by consolidating all essential services in one place. Users can select their cultural preferences, choose an event date, and book venues, catering services, DJs, decorators, and photographers. The system also supports mock credit card payments and allows users to print receipts for their bookings. It aims to streamline the entire wedding planning process, making it efficient and hassle-free for both couples and wedding planners.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/sowmyasri-d9/wedding-management-.git',
      demo: 'https://youtube.com'
    },
    {
      title: 'DevLink - Developer Portfolio & Links Platform',
      description: 'A developer resource hub where developers can; Share and categorize useful resources (articles, videos, tools), Bookmark resources, Comment and rate resources, and Search by tags, titles, and categories. DevLink aims to foster a collaborative community for developers to discover and share valuable content, enhancing their learning and productivity.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/sowmyasri-d9/Devlopers_resources.git',
      demo: 'https://youtube.com'
    },
  ];

const experiences = [
  {
    title: 'Generative AI Engineer',
    company: 'Travelers',
    location: 'Hartford, CT, USA',
    period: 'May 2025 - Present',
    achievements: [
      'Architected and deployed LLM-based applications for underwriting and claims workflows.',
      'Built RAG pipelines using LangChain and Pinecone, improving retrieval accuracy by ~30%.',
      'Designed prompt orchestration and agentic workflows, reducing manual processing time by ~40%.',
      'Fine-tuned transformer models (BERT, T5) achieving up to 94% F1-score on 10K+ monthly documents.',
      'Deployed scalable AI microservices using FastAPI and Docker across Azure and AWS with 99.9% uptime.'
    ]
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Crowe Global',
    location: 'Hartford, Connecticut, USA',
    period: 'Sep 2024 - Apr 2025',
    achievements: [
      'Developed end-to-end ML pipelines using Python and Spark, reducing data preprocessing latency by 25%.',
      'Built and optimized classification and forecasting models using PyTorch for audit automation use cases.',
      'Implemented MLOps workflows with MLflow, shortening model deployment cycles by 2 weeks.'
    ]
  },
  {
    title: 'Backend Developer (Data & ML Systems)',
    company: 'Barclays (Accenture)',
    location: 'Hyderabad, India',
    period: 'Mar 2022 - Dec 2023',
    achievements: [
      'Built & maintained backend APIs using Python & Flask/FastAPI to support fraud detection & risk analytics workflows.',
      'Developed automated ETL pipelines using SQL, PL/SQL, & Python to process large-scale banking & transactional data.',
      'Integrated machine learning models into backend services, contributing to identification of $150k+ in potential fraud.'
    ]
  }
];

// Animated Neural Network Background Component
const NeuralNetworkBg = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const generateNodes = () => {
      const nodeCount = 20;
      return Array.from({ length: nodeCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2,
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() * Math.PI * 2
      }));
    };
    setNodes(generateNodes());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => (
          <g key={node.id}>
            {nodes.slice(i + 1).map((otherNode) => {
              const distance = Math.sqrt(
                Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
              );
              if (distance < 20) {
                return (
                  <line
                    key={`${node.id}-${otherNode.id}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${otherNode.x}%`}
                    y2={`${otherNode.y}%`}
                    stroke="url(#nodeGradient)"
                    strokeWidth="0.5"
                    opacity={1 - distance / 20}
                  />
                );
              }
              return null;
            })}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="url(#nodeGradient)"
              className="animate-pulse"
              style={{ animationDuration: `${2 + Math.random() * 2}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

// Navigation Component
const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
    { id: 'about1', label: 'About 1' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 text-xl cursor-pointer font-bold text-white hover:text-blue-400 transition-colors group"
          >
            <Brain className="group-hover:rotate-12 transition-transform" size={28} />
            <span className="hidden sm:inline">SSP</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-gray-900/95 backdrop-blur-md rounded-b-xl animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 transition-all ${activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Particle Effect Component
const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

// Hero Section Component with Enhanced Banner
const HeroSection = ({ isVisible, scrollToSection }) => {
  const [text, setText] = useState('');
  const fullText = 'Building the future with AI';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <NeuralNetworkBg />
      <ParticleEffect />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
              <Sparkles className="text-blue-400" size={18} />
              <span className="text-blue-300 text-sm font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              SOWMYA SRI PANDI
            </h1>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Generative AI Engineer
              </h2>
              <div className="h-8 flex items-center">
                <p className="text-xl text-gray-300 font-mono">
                  {text}
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Specializing in LLM applications, RAG pipelines, and agentic workflows.
              Transforming complex AI challenges into elegant, production-ready solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:sowmyasrip4@gmail.com"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105"
              >
                <Mail size={20} />
                <span className="font-semibold">Contact Me</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sowmya-sri-pandi-220b872b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105"
              >
                <Linkedin size={20} />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="w-px h-12 bg-gray-600" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1</div>
                <div className="text-sm text-gray-400">IEEE Publication</div>
              </div>
            </div>
          </div>

          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -inset-4 rounded-full border-2 border-blue-400/30 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border-2 border-purple-400/20 animate-spin-slow-reverse" />

              {/* Central icon container */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-4 border-blue-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full animate-pulse" />
                <Brain className="text-blue-400 relative z-10" size={120} strokeWidth={1.5} />

                {/* Floating tech icons */}
                <div className="absolute top-8 right-8 p-3 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30 animate-float">
                  <Zap className="text-blue-400" size={24} />
                </div>
                <div className="absolute bottom-8 left-8 p-3 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-400/30 animate-float" style={{ animationDelay: '1s' }}>
                  <Database className="text-purple-400" size={24} />
                </div>
                <div className="absolute top-1/2 left-0 p-3 bg-pink-500/20 backdrop-blur-sm rounded-lg border border-pink-400/30 animate-float" style={{ animationDelay: '2s' }}>
                  <Network className="text-pink-400" size={24} />
                </div>
                <div className="absolute top-1/2 right-0 p-3 bg-cyan-500/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 animate-float" style={{ animationDelay: '1.5s' }}>
                  <Code className="text-cyan-400" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white hover:text-blue-400 transition-colors"
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = ({ isVisible }) => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Summary</span>
        </h2>
        <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 shadow-2xl border border-gray-700 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />
          <p className="text-lg text-gray-300 leading-relaxed">
            Generative AI Engineer with 3+ years of experience specializing in end-to-end development of LLM applications, including RAG pipelines, agentic workflows, and fine-tuning transformer-based architectures. Published IEEE author with a strong research foundation in classical machine learning and NLP, combined with backend engineering experience from Accenture. Proficient in optimizing model performance through vector search and compression, deploying scalable AI microservices using Docker across Azure and AWS, and implementing MLOps best practices to deliver production-grade, reliable, high-impact AI systems.
          </p>
        </div>
      </div>
    </section>
  );
};

// Experience Card Component
const ExperienceCard = ({ job, index, isVisible }) => {
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <div
      className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 sm:p-8 shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-l-xl" />
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg border border-blue-400/30">
          <Briefcase className="text-blue-400" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white">{job.title}</h3>
          <p className="text-blue-400 font-semibold">{job.company}</p>
          <p className="text-gray-400 text-sm">{job.location} | {job.period}</p>
        </div>
      </div>

      <button
        onClick={() => setShowAchievements(!showAchievements)}
        className="flex items-center cursor-pointer gap-2 ml-16 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/50 hover:border-blue-400 rounded-lg text-blue-400 font-semibold transition-all duration-300 group"
      >
        <span>More Info</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${showAchievements ? 'rotate-180' : ''}`}
        />
      </button>

      {showAchievements && (
        <ul className="space-y-2 ml-16 mt-4">
          {job.achievements.map((achievement, i) => (
            <li key={i} className="text-gray-300 flex items-start animate-in fade-in duration-300">
              <span className="text-blue-400 mr-2">▸</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Experience Section Component
const ExperienceSection = ({ isVisible }) => {
  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((job, idx) => (
            <ExperienceCard key={idx} job={job} index={idx} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Dialog Component
const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 max-w-2xl w-full mx-4 border border-gray-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold text-white mb-4 pr-8">{title}</h3>
        <div className="text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, isVisible }) => {
  const [showDescriptionDialog, setShowDescriptionDialog] = useState(false);
  const [showNoDemoDialog, setShowNoDemoDialog] = useState(false);

  const handleDemoClick = (e) => {
    e.preventDefault();
    // Check if demo URL is just youtube.com or doesn't have a video ID
    const isValidDemo = project.demo &&
      project.demo !== 'https://youtube.com' &&
      !project.demo.match(/^https?:\/\/(www\.)?youtube\.com\/?$/);

    if (isValidDemo) {
      window.open(project.demo, '_blank', 'noopener,noreferrer');
    } else {
      setShowNoDemoDialog(true);
    }
  };

  // Truncate description to approximately 2 lines (around 120 characters)
  const truncatedDescription = project.description.length > 120
    ? project.description.substring(0, 120) + '...'
    : project.description;

  const needsShowMore = project.description.length > 120;

  return (
    <>
      <div
        className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>

        <div className="mb-4">
          <p className="text-gray-300 leading-relaxed">{truncatedDescription}</p>
          {needsShowMore && (
            <button
              onClick={() => setShowDescriptionDialog(true)}
              className="text-blue-400 cursor-pointer hover:text-blue-300 text-sm font-medium mt-2 transition-colors"
            >
              Show More
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm rounded-full font-medium backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          )}

        </div>
      </div>

      {/* Description Dialog */}
      <Dialog
        isOpen={showDescriptionDialog}
        onClose={() => setShowDescriptionDialog(false)}
        title={project.title}
      >
        <p>{project.description}</p>
      </Dialog>

      {/* No Demo Dialog */}
      <Dialog
        isOpen={showNoDemoDialog}
        onClose={() => setShowNoDemoDialog(false)}
        title="Demo Not Available"
      >
        <p>No demo video is currently available for this project.</p>
      </Dialog>
    </>
  );
};

// Projects Section Component
const ProjectsSection = ({ isVisible }) => {


  return (
    <section id="projects" className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Skill Card Component
const SkillCard = ({ skill, index, isVisible }) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center gap-3 mb-3">
        <div className="text-purple-400 group-hover:scale-110 transition-transform">{skill.icon}</div>
        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{skill.title}</h3>
      </div>
      <p className="text-gray-300">{skill.skills}</p>
    </div>
  );
};

// Skills Section Component
const SkillsSection = ({ isVisible }) => {
  const skills = [
    {
      icon: <Brain size={24} />,
      title: 'Generative AI',
      skills: 'RAG, LangChain, LangGraph (Agents), Prompt Engineering, LoRA/QLoRA, RAGAS'
    },
    {
      icon: <Code size={24} />,
      title: 'ML & NLP',
      skills: 'PyTorch, TensorFlow, Hugging Face Transformers (BERT, GPT, T5), Scikit-learn, XGBoost'
    },
    {
      icon: <Database size={24} />,
      title: 'Data & Vector Infrastructure',
      skills: 'Pinecone, FAISS, Milvus, PostgreSQL, MongoDB, ETL Pipelines'
    },
    {
      icon: <Network size={24} />,
      title: 'MLOps & Deployment',
      skills: 'Docker, Kubernetes, MLflow, CI/CD'
    },
    {
      icon: <Zap size={24} />,
      title: 'Cloud Platforms',
      skills: 'Azure AI, AWS (SageMaker, Lambda), GCP'
    },
    {
      icon: <Code size={24} />,
      title: 'Backend Engineering',
      skills: 'Python, FastAPI, Flask, Django, REST APIs, Microservices Architecture'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} index={idx} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section Component
const EducationSection = ({ isVisible }) => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Education & <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Certifications</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={28} />
              Education
            </h3>
            <div className="space-y-6">

              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-l-xl" />
                <h4 className="text-lg font-bold text-white">Master's in Computer Science</h4>
                <p className="text-blue-400 font-semibold">Sacred Heart University</p>
                <p className="text-gray-400">CT, USA | Jan 2024 - Mar 2025</p>
              </div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-l-xl" />
                <h4 className="text-lg font-bold text-white">B. Tech in Computer Science</h4>
                <p className="text-blue-400 font-semibold">PVP Siddhartha Institute of Technology</p>
                <p className="text-gray-400">Aug 2019 - May 2023</p>
              </div>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-purple-400" size={28} />
              Certifications
            </h3>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl border border-gray-700">
              <ul className="space-y-3">
                {[
                  'Generative AI Engineer - IBM',
                  'Machine Learning Engineer – AWS',
                  'Azure AI Engineer - Microsoft',
                  'Back-End developer professional – Meta',
                  'Python Programming - Coursera',
                  'Data Structures and Algorithms Using Python – NPTEL (Silver badge)',
                ].map((cert, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Publications Section Component
const PublicationsSection = ({ isVisible }) => {
  return (
    <section id="publications" className="gap-6 py-20 bg-gray-950">      
      <div className="max-w-6xl mx-auto px-4 gap-6 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Publications</span>
        </h2>
        <div className={`relative bg-gradient-to-br mb-5 from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />
          <h3 className="text-xl font-bold text-white mb-3">
            Detecting Cyber Bullying on Twitter using Support Vector Machine
          </h3>
          <p className="text-gray-300 mb-4">
            IEEE Conference Publication - Applied TF-IDF, text preprocessing, and SVM for Twitter-based NLP classification.
          </p>
          <a
            href="https://ieeexplore.ieee.org/document/10073658"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:scale-105"
          >
            <ExternalLink size={20} />
            Access Paper
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = ({ isVisible }) => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Touch</span>
        </h2>
        <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 shadow-2xl border border-gray-700 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg border border-blue-400/30 group-hover:scale-110 transition-transform">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:sowmyasrip4@gmail.com" className="text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                  sowmyasrip4@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg border border-purple-400/30 group-hover:scale-110 transition-transform">
                <Phone className="text-purple-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:475-273-2991" className="text-lg font-semibold text-white hover:text-purple-400 transition-colors">
                  475-273-2991
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-gradient-to-br from-pink-500/20 to-blue-600/20 rounded-lg border border-pink-400/30 group-hover:scale-110 transition-transform">
                <Linkedin className="text-pink-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/sowmya-sri-pandi-220b872b5/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-pink-400 transition-colors">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Sowmya Sri Pandi. All rights reserved.</p>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Brain className="text-blue-400" size={18} />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection isVisible={isVisible.home} scrollToSection={scrollToSection} />
      <AboutSection isVisible={isVisible.about} />
      <ExperienceSection isVisible={isVisible.experience} />
      <ProjectsSection isVisible={isVisible.projects} />
      <SkillsSection isVisible={isVisible.skills} />
      <EducationSection isVisible={isVisible.education} />
      <PublicationsSection isVisible={isVisible.publications} />
      <ContactSection isVisible={isVisible.contact} />
      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow 15s linear infinite reverse;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
