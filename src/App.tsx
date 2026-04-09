import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Clock, 
  MapPin, 
  Phone, 
  Baby, 
  ShieldCheck, 
  HeartPulse, 
  Thermometer, 
  Users, 
  Menu, 
  X,
  ChevronRight,
  GraduationCap,
  Briefcase,
  History
} from 'lucide-react';

const SERVICES = [
  {
    title: "Consultation",
    description: "Personalized paediatric care focused on individual attention and careful clinical evaluation tailored to your child's unique needs. We provide evidence-based medical advice and clear explanations to empower families with confidence.",
    icon: Stethoscope
  },
  {
    title: "Growth & Development Monitoring",
    description: "Regular assessment of physical, emotional, and developmental milestones. Early identification and guidance to ensure healthy growth at every stage.",
    icon: Baby
  },
  {
    title: "Immune Health Guidance",
    description: "Personalized medical consultation focused on supporting your child’s immune health. Evidence-based guidance is offered to help strengthen immunity and prevent common illnesses.",
    icon: ShieldCheck
  },
  {
    title: "Fever & Infection Management",
    description: "Accurate diagnosis and effective treatment for fevers and common infections. Prompt care to ensure quick recovery and comfort for your child.",
    icon: Thermometer
  },
  {
    title: "Newborn Care & Infant Checkups",
    description: "Specialized care for newborns and infants during their crucial early months. Monitoring feeding, growth, immunity, and developmental progress.",
    icon: HeartPulse
  },
  {
    title: "Parental Guidance & Counseling",
    description: "Dedicated time for parents to discuss concerns, receive expert medical advice, and gain confidence in managing their child’s health and well-being.",
    icon: Users
  }
];

const EXPERIENCE = {
  current: {
    role: "Consultant Paediatrician",
    hospital: "We One Hospital, Kavunkal",
    hours: "Morning consultations available from 9:30 AM to 01:00 PM"
  },
  previous: [
    "KVM Hospital",
    "Poochakal Medical Center",
    "Rishiram Hospital"
  ]
};

const EDUCATION = [
  {
    degree: "MBBS",
    institution: "Government Medical College Thiruvananthapuram",
    batch: "2007 Batch"
  },
  {
    degree: "DNB Paediatrics",
    institution: "G. Kuppuswamy Naidu Memorial Hospital (GKNM), Coimbatore",
    batch: "2018 Batch"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 rounded-2xl md:rounded-full ${scrolled ? 'bg-primary shadow-2xl py-2' : 'bg-primary/95 backdrop-blur-md py-4 shadow-xl'}`}>
        <div className="flex items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="https://static.wixstatic.com/media/3006e6_50928eadd5024fe684c7c1bc252ff133~mv2.png/v1/crop/x_34,y_10,w_466,h_456/fill/w_95,h_92,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2026-01-02-removebg-preview.png" 
                alt="Paithal Clinic Logo" 
                className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold tracking-tight text-white leading-none">Paithal Clinic</span>
                <span className="text-[9px] md:text-[10px] font-semibold text-blue-200 uppercase tracking-widest mt-1">Dr. Neethu Mohan</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-6 lg:flex">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Doctor', id: 'doctor' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Services', id: 'services' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-semibold text-white/80 transition-colors hover:text-white relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-primary shadow-inner">
              <Clock size={16} className="text-primary/70" />
              <span className="text-xs md:text-sm font-bold whitespace-nowrap">Mon – Sat: 5:00 PM – 7:00 PM</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-primary rounded-b-2xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Doctor', id: 'doctor' },
                  { label: 'About Us', id: 'about' },
                  { label: 'Our Services', id: 'services' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="text-left text-lg font-semibold text-white/90 hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/10 p-4 text-white">
                  <Clock size={18} />
                  <span className="text-sm font-medium">Mon – Sat: 5:00 PM – 7:00 PM</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-[550px] flex-col md:block md:h-[650px] overflow-hidden pt-12 md:pt-0 bg-white">
        {/* Desktop Layout: Split View */}
        <div className="mx-auto flex h-full max-w-7xl flex-col md:flex-row md:items-center">
          
          {/* Text Content */}
          <div className="relative z-10 w-full px-4 pt-20 pb-10 md:w-[45%] md:px-8 md:pt-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <h1 className="font-serif text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-slate-900 mb-6 md:mb-8">
                Expert Care for <br />
                <span className="italic text-primary">Your Little Ones</span>
              </h1>
              <p className="text-xl leading-relaxed text-slate-600 max-w-lg font-medium mb-8 md:mb-12">
                At Paithal Clinic, we provide compassionate, expert paediatric care in a nurturing environment designed for your child's comfort.
              </p>
              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-blue-900/30 transition-all hover:bg-primary-hover hover:-translate-y-1 active:scale-95"
                >
                  Book Appointment <ChevronRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="rounded-full border-2 border-slate-200 bg-white px-10 py-5 text-lg font-bold text-slate-700 transition-all hover:border-primary hover:text-primary active:scale-95"
                >
                  Our Services
                </button>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="relative h-[450px] w-full md:h-full md:w-[60%] md:ml-[-5%]">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="h-full w-full overflow-hidden md:rounded-bl-[100px]"
            >
              <img 
                src="https://static.wixstatic.com/media/3006e6_863765ceda53413487c88c0cdb4e27bc~mv2.jpeg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3006e6_863765ceda53413487c88c0cdb4e27bc~mv2.jpeg" 
                alt="Trusted Paediatric Care"
                className="h-full w-full object-cover object-right"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:block hidden"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Who We Are</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-8">
              Dedicated Paediatric Care <br className="hidden md:block" />
              for the <span className="italic text-primary">Next Generation</span>
            </h3>
            <p className="text-xl leading-relaxed text-slate-600 font-medium max-w-3xl mx-auto">
              Paithal Clinic is a premier paediatric specialty clinic located in Cherthala, Alappuzha, 
              led by Dr. Neethu Mohan. Our mission is to provide specialized healthcare for infants 
              and children, ensuring every visit is defined by professionalism, empathy, and expertise.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { title: "5-Star Rated", desc: "Highly recommended paediatric care in the region.", icon: ShieldCheck, color: "bg-blue-50 text-blue-600" },
              { title: "Child Friendly", desc: "A warm environment designed to make children feel safe.", icon: Baby, color: "bg-amber-50 text-amber-600" },
              { title: "Ethical Care", desc: "Transparent and evidence-based medical treatments.", icon: HeartPulse, color: "bg-emerald-50 text-emerald-600" }
            ].map((item, i) => (
              <div key={i} className="group rounded-3xl bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200">
                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color} shadow-sm transition-transform group-hover:scale-110`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section id="doctor" className="bg-white pt-12 md:pt-16 pb-16 md:pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            
            {/* Image Column */}
            <div className="relative lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl ring-1 ring-slate-200">
                  <img 
                    src="https://static.wixstatic.com/media/3006e6_f477ffa97f9d4a40a26999888850957e~mv2.jpg/v1/crop/x_415,y_152,w_1395,h_1295/fill/w_1395,h_1295,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-03-03%20at%206_35_edited.jpg" 
                    alt="Dr. Neethu Mohan"
                    className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 rounded-3xl bg-primary p-8 text-white shadow-2xl md:-right-12">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-3xl font-bold">5+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years Experience</span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full bg-blue-50"></div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">The Specialist</span>
                <h2 className="font-serif text-5xl md:text-6xl font-semibold text-slate-900 leading-tight mb-4">
                  Dr. Neethu Mohan
                </h2>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-primary">MBBS, DNB (Paediatrics)</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Reg. No: 49862</span>
                </div>

                <p className="text-xl leading-relaxed text-slate-600 mb-12 font-medium italic">
                  "Dedicated to providing compassionate, evidence-based care that nurtures the health and happiness of every child."
                </p>

                <div className="space-y-12">
                  {/* Current Practice - Priority */}
                  <div className="rounded-[32px] bg-slate-50 p-8 border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all"></div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <Briefcase className="text-primary" size={20} />
                      <h4 className="text-base font-bold uppercase tracking-widest text-slate-900">Current Practice</h4>
                    </div>
                    <div className="space-y-6 relative z-10">
                      <div>
                        <p className="text-2xl font-bold text-slate-900 tracking-tight">{EXPERIENCE.current.role}</p>
                        <p className="text-lg font-medium text-slate-600 mt-1">{EXPERIENCE.current.hospital}</p>
                      </div>
                      <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/50">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
                          <Clock size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">OPD Hours</p>
                          <p className="text-base font-bold text-slate-700 mt-1 leading-relaxed">{EXPERIENCE.current.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-12 md:grid-cols-2">
                    {/* Previous Experience */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <History className="text-primary" size={20} />
                        <h4 className="text-base font-bold uppercase tracking-widest text-slate-900">Previous Experience</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {EXPERIENCE.previous.map((exp, i) => (
                          <span key={i} className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-white hover:shadow-md transition-all cursor-default">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Qualifications */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <GraduationCap className="text-primary" size={20} />
                        <h4 className="text-base font-bold uppercase tracking-widest text-slate-900">Qualifications</h4>
                      </div>
                      <ul className="space-y-5">
                        {EDUCATION.map((edu, i) => (
                          <li key={i} className="group">
                            <p className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">{edu.degree}</p>
                            <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{edu.institution} • {edu.batch}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:-translate-y-1 active:scale-95"
                  >
                    Consult Dr. Neethu
                  </button>
                  <div className="h-px flex-1 bg-slate-100"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 pt-12 md:pt-16 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Our Services</h2>
            <p className="font-serif text-4xl font-semibold text-slate-900">Comprehensive healthcare for your little ones.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-2xl hover:shadow-blue-900/5"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-lg leading-relaxed text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Get in Touch</h2>

              <div className="mt-16 space-y-12">
                <div className="flex items-start gap-8 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 flex-shrink-0">
                    <Phone size={32} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-slate-300 uppercase tracking-wider">Call Us</p>
                    <p className="mt-2 text-lg font-bold text-white tracking-tight">+91 85472 25042</p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 flex-shrink-0">
                    <MapPin size={32} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-slate-300 uppercase tracking-wider">Visit Us</p>
                    <p className="mt-2 text-lg font-bold text-white leading-relaxed">
                      East of Town LP School, Chakkarakulam<br />
                      Cherthala, Kerala – 688524
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-blue-400 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 flex-shrink-0">
                    <Clock size={32} />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-slate-300 uppercase tracking-wider">Clinic Hours</p>
                    <p className="mt-2 text-lg font-bold text-white">Mon – Sat: 5:00 PM – 7:00 PM</p>
                    <p className="mt-1 text-sm text-slate-500 italic">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[40px] bg-white/5 p-8 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-center">
  <h3 className="font-serif text-3xl font-semibold text-white mb-8">Book an Appointment</h3>
  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
    
    {/* Row 1: Name and Phone */}
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 space-y-2">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Name*</label>
        <input 
          type="text" 
          required
          className="w-full rounded-2xl bg-white/5 px-6 py-4 text-white outline-none ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-blue-500 text-base placeholder:text-slate-600"
          placeholder="Your Name"
        />
      </div>
      <div className="flex-1 space-y-2">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Phone*</label>
        <input 
          type="tel" 
          required
          className="w-full rounded-2xl bg-white/5 px-6 py-4 text-white outline-none ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-blue-500 text-base placeholder:text-slate-600"
          placeholder="Your Phone Number"
        />
      </div>
    </div>

    {/* Row 2: Message and Button */}
    <div className="flex flex-col md:flex-row gap-4 items-end">
      <div className="flex-[2] space-y-2 w-full">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Message</label>
        <textarea 
          rows={1}
          className="w-full rounded-2xl bg-white/5 px-6 py-4 text-white outline-none ring-1 ring-white/10 transition-all focus:ring-2 focus:ring-blue-500 text-base placeholder:text-slate-600 resize-none"
          placeholder="Any specific concerns?"
        ></textarea>
      </div>
      <button className="flex-1 w-full rounded-2xl bg-blue-600 py-4 font-bold text-white text-base shadow-2xl shadow-blue-900/50 transition-all hover:bg-blue-500 hover:-translate-y-1 active:scale-[0.98]">
        Send Request
      </button>
    </div>

  </form>
</div>

      {/* Footer */}
      <footer className="bg-slate-950 py-20 text-slate-500 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <img 
                src="https://static.wixstatic.com/media/3006e6_50928eadd5024fe684c7c1bc252ff133~mv2.png/v1/crop/x_34,y_10,w_466,h_456/fill/w_95,h_92,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2026-01-02-removebg-preview.png" 
                alt="Paithal Clinic Logo" 
                className="h-20 w-auto object-contain brightness-0 invert opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <span className="block text-xl font-bold tracking-tight text-white">Paithal Clinic</span>
                <span className="block text-xs uppercase tracking-widest text-slate-600">Paediatric Specialty Clinic</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-400">© {new Date().getFullYear()} Paithal Clinic. All rights reserved.</p>
              <p className="mt-1 text-sm text-slate-600 italic font-serif">Healthy children, happy families.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
  
}
