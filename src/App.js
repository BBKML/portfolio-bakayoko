import React, { useState, useEffect } from 'react';
import { Code, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ChevronDown, Menu, X, Award, Briefcase, GraduationCap, Layers, Download, ArrowUp, Terminal, Rocket, Zap, Eye, ZoomIn, Sparkles } from 'lucide-react';
import uvciLogo from './assets/Logo-UVCI.png';
import UTALogo from './assets/UTA.jpg';
import ISCATLogo from './assets/ISCAT.jpg';
import Logo from './assets/Profil  photo.jpg';
import vehicule from "./assets/vehicule et moto.png";
import Ecom from "./assets/PROJETS ECOM.png";
import AGRO from "./assets/SITE WEB AGRO.png";
import STOCK from "./assets/gestion_stock.png";
import SUIVI from "./assets/suivi.png";
import ASSOCIATION from "./assets/ASSOCIATION.png";
import ETAT from "./assets/ETAT_CIVIL.png";
import FLUTTER from "./assets/FLUTTER.png";
import REACT from "./assets/REACT JS.jpg";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 500);
      
      const sections = ['accueil', 'compétences', 'projets', 'expériences', 'certifications', 'contact'];
      const offset = 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - offset && scrollPosition < offsetTop + offsetHeight - offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const skills = {
    "Backend": [
      { name: "Python (Django)", level: 90, color: "from-emerald-400 to-green-500" },
      { name: "PHP (Laravel)", level: 85, color: "from-purple-400 to-pink-500" },
      { name: "Java", level: 75, color: "from-orange-400 to-red-500" },
      { name: "API REST", level: 88, color: "from-cyan-400 to-blue-500" }
    ],
    "Frontend": [
      { name: "React", level: 82, color: "from-blue-400 to-cyan-500" },
      { name: "JavaScript", level: 85, color: "from-yellow-400 to-amber-500" },
      { name: "HTML5/CSS3", level: 90, color: "from-pink-400 to-rose-500" },
      { name: "Bootstrap", level: 88, color: "from-indigo-400 to-purple-500" }
    ],
    "Mobile & Desktop": [
      { name: "Flutter", level: 80, color: "from-sky-400 to-blue-500" },
      { name: "WinDev", level: 70, color: "from-teal-400 to-cyan-500" },
      { name: "Odoo", level: 75, color: "from-violet-400 to-purple-500" }
    ],
    "Bases de données": [
      { name: "PostgreSQL", level: 85, color: "from-blue-400 to-indigo-500" },
      { name: "MySQL", level: 88, color: "from-orange-400 to-red-500" },
      { name: "MongoDB", level: 78, color: "from-green-400 to-emerald-500" }
    ]
  };

  const projects = [
    {
      title: "Gestion Véhicules & Motos",
      tech: ["Django", "Python", "SQL"],
      description: "Système complet de gestion de parc automobile avec tableau de bord en temps réel et génération de rapports automatisés.",
      features: ["Dashboard Analytics", "Rapports PDF"],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      accentColor: "from-blue-400 to-cyan-400",
      icon: "🚗",
      image: vehicule
    },
    {
      title: "Plateforme E-Commerce: (Educatif)",
      tech: ["Django", "SQLITE", "Bootstrap"],
      description: "Solution e-commerce moderne avec système de paiement sécurisé, gestion de stocks et tableau de bord vendeur.",
      features: ["Paiement en ligne", "Gestion stocks", "Multi-vendeurs", "Analytics"],
      color: "from-purple-500 via-fuchsia-500 to-pink-500",
      accentColor: "from-purple-400 to-pink-400",
      icon: "🛒",
      image: Ecom
    },
    {
      title: "Site Web Agro",
      tech: ["Laravel", "MySQL", "JavaScript"],
      description: "Marketplace agricole connectant producteurs et acheteurs avec système de géolocalisation des fermes.",
      features: ["Marketplace", "Géolocalisation"],
      color: "from-green-500 via-emerald-500 to-teal-500",
      accentColor: "from-green-400 to-emerald-400",
      icon: "🌾",
      image: AGRO
    },
    {
      title: "Système de Suivi:(Stage)",
      tech: ["Django", "PostgreSQL", "API REST"],
      description: "Application de monitoring en temps réel avec tableaux de bord personnalisables",
      features: ["Real-time monitoring", "API REST", "Analytics"],
      color: "from-orange-500 via-red-500 to-rose-500",
      accentColor: "from-orange-400 to-red-400",
      icon: "📊",
      image: SUIVI
    },
    {
      title: "Gestion Association",
      tech: ["Laravel", "MySQL", "JavaScript"],
      description: "Plateforme collaborative pour associations avec gestion des membres, événements et cotisations.",
      features: ["Gestion membres", "Calendrier", "Cotisations", "Documents"],
      color: "from-indigo-500 via-purple-500 to-fuchsia-500",
      accentColor: "from-indigo-400 to-purple-400",
      icon: "👥",
      image: ASSOCIATION
    },
    {
      title: "Système État Civil: (Educatif)",
      tech: ["PHP", "MySQL", "Bootstrap"],
      description: "Application de gestion d'état civil avec recherche avancée et impression d'actes officiels.",
      features: ["Enregistrement", "Recherche avancée", "Impression", "Archives"],
      color: "from-amber-500 via-orange-500 to-red-500",
      accentColor: "from-amber-400 to-orange-400",
      icon: "📄",
      image: ETAT
    },
    {
      title: "Gestion de Stock",
      tech: ["Django", "PostgreSQL", "API REST"],
      description: "Système complet de gestion de stock avec suivi des entrées/sorties et alertes automatiques",
      features: ["Suivi inventaire", "Alertes stock", "Rapports détaillés"],
      color: "from-rose-500 via-pink-500 to-fuchsia-500",
      accentColor: "from-rose-400 to-pink-400",
      icon: "📦",
      image: STOCK
    },
    {
      title: "Vivier Market: (Personnel projet)",
      tech: ["Flutter", "PostgreSQL", "Node.js + Express.js"],
      description: "Vivier Market est systeme qui gère les utilisateurs, produits et commandes",
      features: ["Gestion des comptes", "Alertes stock", "Rapports détaillés"],
      color: "from-sky-500 via-blue-500 to-indigo-500",
      accentColor: "from-sky-400 to-blue-400",
      icon: "📦",
      image: FLUTTER
    },
    {
      title: "BAIBEBALO: (Personnel projet",
      tech: ["React", "PostgreSQL", "js"],
      description: "BAIBEBALO est systeme commandes de nourriture en ligne basé sur Korhogo",
      features: ["Gestion des comptes", "Alertes stock", "Rapports détaillés"],
      color: "from-cyan-500 via-teal-500 to-emerald-500",
      accentColor: "from-cyan-400 to-teal-400",
      icon: "📦",
      image: REACT
    }
  ];

  const certifications = [
    {
      title: "Développement Web Mobile",
      issuer: "Certification Professionnelle",
      year: "2024",
      icon: "🎓"
    }
  ];

  const experiences = [
    {
      role: "Assistant Professeur",
      company: "Institut International de Technologie Supérieure (2ITS)",
      period: "2024",
      tasks: [
        "Enseignement: Langage C, algorithmique et bureautique",
        "Support technique en laboratoire informatique",
        "Installation et configuration de logiciels éducatifs"
      ],
      color: "from-emerald-500 to-teal-500",
      icon: "👨‍🏫"
    },
    {
      role: "Stagiaire Développeur",
      company: "Université Nangui Abrogoua",
      period: "2023",
      tasks: [
        "Développement d'un système de gestion d'archives",
        "Maintenance préventive et corrective des équipements",
        "Formation et support technique des utilisateurs"
      ],
      color: "from-blue-500 to-indigo-500",
      icon: "💻"
    }
  ];

  const education = [
    { 
      degree: "Master 1 Big Data Analyst", 
      school: "UVCI", 
      year: "2025 — en cours",
      color: "from-blue-500 to-cyan-500",
      logo: uvciLogo
    },
    { 
      degree: "Licence DAS - Développement d'Applications & Services", 
      school: "UVCI", 
      year: "2022—2025",
      color: "from-purple-500 to-pink-500",
      logo: uvciLogo
    },
    { 
      degree: "Licence Informatique, Génie Logiciel (IGL)", 
      school: "UTA", 
      year: "2023-2024",
      color: "from-green-500 to-emerald-500",
      logo: UTALogo
    },
    { 
      degree: "BTS Informatique Développeur d'Application", 
      school: "ISCAT", 
      year: "2021—2023",
      color: "from-orange-500 to-red-500",
      logo: ISCATLogo
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-x-hidden">
      {/* Image Lightbox Modal - AMÉLIORATION MAJEURE */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-all z-[10000] group border border-white/20"
          >
            <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
          </button>
          <div 
            className="max-w-7xl max-h-[90vh] relative rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            <img 
              src={selectedImage} 
              alt="Project preview" 
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>
        </div>
      )}

      {/* Animated Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]" />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x / 15}px`,
            top: `${mousePosition.y / 15}px`,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-600/15 to-teal-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollToSection('accueil')}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-75" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl">
                  <Terminal className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <div className="font-black text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  AB Dev
                </div>
                <div className="text-xs text-gray-400 font-semibold">Full-Stack Developer</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              {['Accueil', 'Compétences', 'Projets', 'Expériences', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 font-semibold text-sm ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50 scale-105' 
                      : 'hover:bg-white/5 hover:scale-105'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 hover:bg-white/10 rounded-xl transition-all"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-2xl border-t border-purple-500/20" style={{ animation: 'slideDown 0.3s ease-out' }}>
            <div className="px-6 py-4 space-y-2">
              {['Accueil', 'Compétences', 'Projets', 'Expériences', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`w-full flex items-center gap-3 px-5 py-3 rounded-xl transition-all font-semibold ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110"
          style={{ animation: 'fadeIn 0.5s ease-out' }}
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 relative">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-8" style={{ animation: 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-[3rem] blur-2xl opacity-60 animate-pulse" />
              <div className="relative w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-[3rem] shadow-2xl shadow-purple-500/50 transform hover:rotate-6 transition-all duration-500 overflow-hidden p-1">
                <img 
                  src={Logo} 
                  alt="Aboubacar Bakayoko" 
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-8 h-8 rounded-full border-4 border-slate-950 flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-300 rounded-full animate-ping" />
              </div>
            </div>
            
            <div className="space-y-6 mb-8" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
              <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Aboubacar Bakayoko
                </span>
              </h1>
              
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="px-5 py-2.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 font-bold backdrop-blur-sm">
                  Full-Stack Developer
                </span>
                <span className="px-5 py-2.5 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-full text-blue-300 font-bold backdrop-blur-sm">
                  Web & Mobile
                </span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
              Je transforme vos idées en applications <span className="text-purple-400 font-bold">performantes</span> et <span className="text-pink-400 font-bold">innovantes</span>. 
              Spécialiste Django, Laravel, Flutter & React.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
              <a 
                href="mailto:aboubacar2bakayoko@gmail.com" 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/80 flex items-center gap-3"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Discutons de votre projet
                <Rocket className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="./CV_BAKAYOKO_ABOUBACAR.pdf"
                download
                className="group px-8 py-4 bg-slate-800 hover:bg-slate-700 border-2 border-purple-500/30 hover:border-purple-500 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Télécharger CV
              </a>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mb-12" style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}>
              <div className="flex items-center gap-3 text-gray-300 bg-slate-800/50 px-5 py-3 rounded-full backdrop-blur-sm border border-purple-500/20">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="font-semibold">0585670940</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 bg-slate-800/50 px-5 py-3 rounded-full backdrop-blur-sm border border-purple-500/20">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="font-semibold">Abidjan, Cocody</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center" style={{ animation: 'fadeInUp 0.8s ease-out 1s both' }}>
              <a 
                href="https://github.com/BBKML" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-800/50 hover:bg-slate-800 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 border border-purple-500/20 hover:border-purple-500/50"
              >
                <Github className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bakayoko-aboubacar-068146323/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-slate-800/50 hover:bg-slate-800 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 border border-purple-500/20 hover:border-purple-500/50"
              >
                <Linkedin className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('compétences')}>
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full backdrop-blur-sm">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold tracking-wider">EXPERTISE TECHNIQUE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stack Technologique
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Maîtrise complète des technologies modernes pour créer des solutions robustes et scalables
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={category} 
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-white">{category}</h3>
                </div>
                <div className="space-y-6">
                  {items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="group/skill">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-300 group-hover/skill:text-white transition-colors font-bold">{skill.name}</span>
                        <span className={`font-black text-lg bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: 'slideProgress 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - MEGA AMÉLIORATION */}
      <section id="projets" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
              <Code className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-bold tracking-wider">PORTFOLIO</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Projets Réalisés
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Une sélection de mes réalisations les plus impactantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm transform hover:scale-[1.03] shadow-xl hover:shadow-2xl hover:shadow-purple-500/30"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* AMÉLIORATION IMAGE - Plus grande et plus visible */}
                <div className="relative h-72 overflow-hidden bg-slate-800/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 cursor-pointer"
                    onClick={() => setSelectedImage(project.image)}
                  />
                  
                  {/* Bouton Zoom - Plus visible */}
                  <button
                    onClick={() => setSelectedImage(project.image)}
                    className="absolute top-4 right-4 z-20 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 backdrop-blur-sm p-4 rounded-2xl transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100 shadow-2xl border border-white/20"
                  >
                    <Eye className="w-6 h-6" />
                  </button>
                  
                  {/* Icône du projet */}
                  <div className="absolute top-4 left-4 z-20 text-6xl filter drop-shadow-2xl transform group-hover:scale-125 transition-transform duration-500">
                    {project.icon}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all leading-tight">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors flex-shrink-0 ml-2 cursor-pointer" onClick={() => setSelectedImage(project.image)} />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1.5 bg-gradient-to-r ${project.accentColor} bg-opacity-20 border border-purple-500/30 rounded-full text-xs font-bold backdrop-blur-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.accentColor}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bouton Voir le projet */}
                  <button 
                    onClick={() => setSelectedImage(project.image)}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${project.color} rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-purple-500/50 transition-all group-hover:scale-105`}
                  >
                    <Eye className="w-5 h-5" />
                    <span>Voir le projet</span>
                  </button>
                </div>

                <div className={`h-1.5 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="expériences" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-full backdrop-blur-sm">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold tracking-wider">PARCOURS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Expériences & Formation
              </span>
            </h2>
          </div>

          <div className="space-y-8 mb-20">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-[1.01] backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both` }}
              >
                <div className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br ${exp.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative flex flex-col md:flex-row gap-6">
                  <div className="text-6xl">{exp.icon}</div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-2">{exp.role}</h3>
                        <p className="text-lg text-gray-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className={`px-4 py-2 bg-gradient-to-r ${exp.color} bg-opacity-20 border border-emerald-500/30 rounded-full text-sm font-bold text-emerald-400 self-start`}>
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`} />
                          <span className="leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-black">Formation Académique</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-xl"
                  style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white/5 p-1.5 border border-slate-700">
                      <img 
                        src={edu.logo} 
                        alt={edu.school}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-base text-white leading-tight">{edu.degree}</h4>
                        <span className={`px-2.5 py-1 bg-gradient-to-r ${edu.color} bg-opacity-20 border border-purple-500/30 rounded-full text-xs font-bold whitespace-nowrap ml-2`}>
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 font-semibold">{edu.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold tracking-wider">CERTIFICATIONS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Certifications & Reconnaissances
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl p-8 border border-slate-700 hover:border-amber-500/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-amber-500/20"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative text-center">
                  <div className="text-6xl mb-6">{cert.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 mb-4 font-semibold">{cert.issuer}</p>
                  <span className="inline-block bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full text-sm text-amber-400 font-bold">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-full backdrop-blur-sm">
              <Mail className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-bold tracking-wider">CONTACT</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Travaillons Ensemble
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Une idée de projet ? Discutons-en autour d'un café virtuel ☕
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:aboubacar2bakayoko@gmail.com" 
              className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-slate-700 hover:border-pink-500/50 transition-all transform hover:scale-105 text-center backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="w-8 h-8" />
              </div>
              <p className="text-sm text-gray-500 mb-2 font-semibold">Email</p>
              <p className="text-sm font-bold text-white break-all">aboubacar2bakayoko@gmail.com</p>
            </a>

            <a 
              href="tel:0585670940" 
              className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all transform hover:scale-105 text-center backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="w-8 h-8" />
              </div>
              <p className="text-sm text-gray-500 mb-2 font-semibold">Téléphone</p>
              <p className="text-sm font-bold text-white">0585670940</p>
              <p className="text-xs text-gray-500 mt-1">0787097996</p>
            </a>

            <div className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all transform hover:scale-105 text-center backdrop-blur-sm shadow-lg hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <p className="text-sm text-gray-500 mb-2 font-semibold">Localisation</p>
              <p className="text-sm font-bold text-white">Abidjan, Cocody</p>
              <p className="text-xs text-gray-500 mt-1">Laurier 15</p>
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
            <div className="relative text-center">
              <Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce" />
              <p className="text-3xl font-black mb-4">Prêt à démarrer un projet ?</p>
              <p className="text-lg mb-8 opacity-90">Transformons votre vision en réalité digitale</p>
              <a 
                href="mailto:aboubacar2bakayoko@gmail.com" 
                className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Envoyez-moi un message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 py-12 px-4 border-t border-purple-500/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <div className="font-black text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AB Dev</div>
                <div className="text-sm text-gray-400 font-semibold">Full-Stack Developer</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/BBKML" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800/50 hover:bg-slate-800 p-3 rounded-full transition-all hover:scale-110 border border-slate-700 hover:border-purple-500/50"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bakayoko-aboubacar-068146323/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800/50 hover:bg-slate-800 p-3 rounded-full transition-all hover:scale-110 border border-slate-700 hover:border-blue-500/50"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-400">
            <p className="font-semibold">© 2024 Aboubacar Bakayoko - Développeur Full-Stack | Conçu avec passion 💜</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideProgress {
          from { width: 0; }
        }
      `}</style>
    </div>
  );
}