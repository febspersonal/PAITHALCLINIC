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
  Briefcase
} from 'lucide-react';

const SERVICES = [
  {
    title: "Consultation",
    description: "Personalized and thoughtful approach to your child's healthcare with careful clinical evaluation.",
    icon: Stethoscope
  },
  {
    title: "Growth & Development",
    description: "Regular assessment of physical, emotional, and developmental milestones at every stage.",
    icon: Baby
  },
  {
    title: "Immune Health",
    description: "Evidence-based guidance to help strengthen immunity and prevent common illnesses.",
    icon: ShieldCheck
  },
  {
    title: "Fever & Infection",
    description: "Accurate diagnosis and effective treatment for fevers and common paediatric infections.",
    icon: Thermometer
  },
  {
    title: "Newborn Care",
    description: "Specialized care for infants during their crucial early months, monitoring feeding and growth.",
    icon: HeartPulse
  },
  {
    title: "Parental Guidance",
    description: "Dedicated time for parents to discuss concerns and receive expert medical advice.",
    icon: Users
  }
];

const EXPERIENCE = [
  "Consultant Paediatrician at We One Hospital, Kavunkal",
  "KVM Hospital",
  "Poochakal Medical Center",
  "Rishiram Hospital"
];

const EDUCATION = [
  {
    degree: "DNB Paediatrics",
    institution: "G. Kuppuswamy Naidu Memorial Hospital (GKNM), Coimbatore",
    batch: "2018 Batch"
  },
  {
    degree: "MBBS",
    institution: "Government Medical College Thiruvananthapuram",
    batch: "2007 Batch"
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
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg' : 'bg-primary'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://static.wixstatic.com/media/3006e6_50928eadd5024fe684c7c1bc252ff133~mv2.png/v1/crop/x_34,y_10,w_466,h_456/fill/w_95,h_92,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2026-01-02-removebg-preview.png" 
                alt="Paithal Clinic Logo" 
                className="h-12 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">Paithal Clinic</span>
                <span className="text-[10px] font-medium text-white/70 uppercase tracking-widest mt-1">Dr. Neethu Mohan</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden items-center gap-6 lg:flex ml-4">
              {['Home', 'Doctor', 'About Us', 'Our Services'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className={`text-sm font-medium transition-colors ${item === 'Home' ? 'bg-white/10 px-3 py-1 rounded-md text-white' : 'text-white/80 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <div className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-900 shadow-md">
              Monday – Saturday: 5:00 PM – 7:00 PM
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-primary md:hidden"
            >
              <div className="flex flex-col gap-4 p-4">
                {['Home', 'Doctor', 'About', 'Services', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-lg font-medium text-white/90 hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-48">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/3006e6_863765ceda53413487c88c0cdb4e27bc~mv2.jpeg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3006e6_863765ceda53413487c88c0cdb4e27bc~mv2.jpeg" 
            alt="Background"
            className="h-full w-full object-cover object-right md:object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:from-white/90 md:via-white/40"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                Paediatric Specialty Clinic
              </span>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-8xl italic font-serif">
                Trusted Paediatric Care
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-slate-700 max-w-lg">
                At Paithal Clinic, we provide expert paediatric care in a nurturing environment, 
                ensuring your child receives the best healthcare tailored to their needs.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition-all hover:bg-primary-hover hover:-translate-y-1"
                >
                  Book Appointment <ChevronRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="rounded-full border-2 border-slate-300 bg-white/50 backdrop-blur-sm px-10 py-4 font-bold text-slate-700 transition-all hover:border-primary hover:text-primary"
                >
                  Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Who We Are</h2>
            <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              Paithal Clinic is a dedicated Paediatric specialty clinic located in Cherthala, Alappuzha, led by Dr. Neethu Mohan. 
              Our mission is to provide specialized healthcare for infants and children, ensuring every visit encompasses 
              professionalism, empathy, and expertise tailored to young patients.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              { title: "5-Star Rated", desc: "Highly recommended paediatric care in the region.", icon: ShieldCheck },
              { title: "Child Friendly", desc: "A warm environment designed to make children feel safe.", icon: Baby },
              { title: "Ethical Care", desc: "Transparent and evidence-based medical treatments.", icon: HeartPulse }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-8 transition-all hover:shadow-lg">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section id="doctor" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://static.wixstatic.com/media/3006e6_f477ffa97f9d4a40a26999888850957e~mv2.jpg/v1/crop/x_415,y_152,w_1395,h_1295/fill/w_1395,h_1295,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-03-03%20at%206_35_edited.jpg" 
                  alt="Dr. Neethu Mohan"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 rounded-full bg-blue-600/10 blur-3xl md:block"></div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Meet the Doctor</h2>
              <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-primary">Dr. Neethu Mohan</h3>
                <p className="text-lg font-semibold text-slate-500">MBBS, DNB (PAEDIATRICS)</p>
                <p className="text-sm text-slate-400">Reg. No: 49862</p>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                An experienced and compassionate paediatrician dedicated to child healthcare. 
                Dr. Neethu Mohan believes in building strong relationships with parents while 
                providing evidence-based medical care tailored to each child's needs.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-lg bg-blue-100 p-2 text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Education</h4>
                    <ul className="mt-2 space-y-2 text-sm text-slate-600">
                      {EDUCATION.map((edu, i) => (
                        <li key={i}>
                          <span className="font-bold">{edu.degree}</span>: {edu.institution} ({edu.batch})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-lg bg-emerald-100 p-2 text-emerald-600">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Experience</h4>
                    <ul className="mt-2 space-y-2 text-sm text-slate-600">
                      {EXPERIENCE.map((exp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Our Services</h2>
            <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600">Comprehensive healthcare for your little ones.</p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-blue-100 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get in Touch</h2>
              <p className="mt-6 text-lg text-slate-400">
                We are here to help. Reach out to us for appointments or any enquiries.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Call Us</p>
                    <p className="mt-1 text-xl font-bold">+91 85472 25042</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-400">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Visit Us</p>
                    <p className="mt-1 text-lg font-bold">
                      East of Town LP School, Chakkarakulam<br />
                      Cherthala, Kerala – 688524
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-amber-400">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Clinic Hours</p>
                    <p className="mt-1 text-lg font-bold">Mon – Sat: 5:00 PM – 7:00 PM</p>
                    <p className="text-sm text-slate-500 italic">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold">Book an Appointment</h3>
              <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Parent Name</label>
                    <input 
                      type="text" 
                      className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Child's Name</label>
                    <input 
                      type="text" 
                      className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-blue-500"
                      placeholder="Child's Name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    className="w-full rounded-xl bg-white/10 px-4 py-3 text-white outline-none ring-1 ring-white/20 transition-all focus:ring-2 focus:ring-primary"
                    placeholder="Any specific concerns?"
                  ></textarea>
                </div>
                <button className="w-full rounded-xl bg-primary py-4 font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-primary-hover active:scale-[0.98]">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-center text-slate-500">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://static.wixstatic.com/media/3006e6_50928eadd5024fe684c7c1bc252ff133~mv2.png/v1/crop/x_34,y_10,w_466,h_456/fill/w_95,h_92,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2026-01-02-removebg-preview.png" 
                alt="Paithal Clinic Logo" 
                className="h-10 w-auto object-contain brightness-0 invert opacity-80"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-bold tracking-tight text-white">Paithal Clinic</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Paithal Clinic. All rights reserved.</p>
            <p className="text-xs">Healthy children, happy families.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
