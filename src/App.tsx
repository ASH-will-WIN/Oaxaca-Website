/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  ShoppingBag,
  UtensilsCrossed,
  Heart,
  Star,
  ChevronDown,
  ArrowRight,
  Flame
} from 'lucide-react';
import { MENU_ITEMS } from './types';

const LOGO_URL = "/oaxLogo-removebg-preview.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'MENU', href: '#menu' },
    { name: 'PHOTOS', href: '#photos' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`flex items-center group transition-all duration-500 ${isScrolled ? 'bg-white/95 px-4 py-2 rounded-xl soft-industrial-shadow' : ''}`}>
          <img 
            src={LOGO_URL} 
            alt="Oaxaca Logo" 
            className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-16 md:h-20 accent-glow'}`}
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold tracking-[0.25em] text-gray-300 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-accent hover:bg-brand-accent-light text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center space-x-2 soft-industrial-shadow">
            <ShoppingBag size={16} />
            <span>ORDER ONLINE</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-brand-dark/98 backdrop-blur-2xl z-50 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32} /></button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold text-white hover:text-brand-accent tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-accent text-white px-12 py-5 rounded-2xl font-bold text-xl">
              ORDER ONLINE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark subtle-grain">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=1920" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/20 to-brand-dark" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-[0.9]">
            Authentic <span className="text-brand-accent">Mexican</span> <br />
            Crafted with Heart.
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fresh ingredients, bold spices, and a homey atmosphere. <br className="hidden md:block" />
            Experience the true flavors of Oaxaca in the heart of Troy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-light text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 soft-industrial-shadow">
              EXPLORE MENU
            </button>
            <button className="w-full sm:w-auto glass-panel text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              OUR STORY
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-accent/60"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => {
  const features = [
    { icon: <UtensilsCrossed size={24} />, title: "Premium Ingredients", desc: "Fresh skinless chicken breast and tender steak cuts." },
    { icon: <Heart size={24} />, title: "Healthy & Natural", desc: "Yellow rice and all-natural black beans. No shortcuts." },
    { icon: <Star size={24} />, title: "Authentic Standard", desc: "Traditional flavors that set the bar for quality." },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden soft-industrial-shadow border-4 border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?auto=format&fit=crop&q=80&w=1000" 
                alt="Fresh Ingredients" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-8 bg-brand-accent p-10 rounded-[2rem] soft-industrial-shadow text-white max-w-xs">
              <Flame className="mb-4" size={32} />
              <p className="text-3xl font-bold mb-2">Fresh Daily</p>
              <p className="text-sm opacity-80 font-medium">We believe in serving food that sets the standard for flavor.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">WELCOME TO OAXACA</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight">
              A Homey Vibe with <br />
              <span className="text-brand-accent">Authentic Soul.</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed">
              Oaxaca provides fresh, high quality, healthy Mexican cuisine in a quick environment. We believe in serving Mexican food that sets the standard for quality and flavor. You'll find authentic flavors with the higher quality ingredient choices our customers prefer.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col space-y-4 group">
                  <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">{f.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<'Tacos' | 'Main' | 'Sides'>('Tacos');
  const categories: ('Tacos' | 'Main' | 'Sides')[] = ['Tacos', 'Main', 'Sides'];

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-32 px-6 bg-brand-dark subtle-grain border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-tighter">OUR MENU</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-12 py-4 rounded-2xl font-bold text-sm tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-brand-accent text-white soft-industrial-shadow' 
                  : 'bg-brand-gray text-gray-500 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-panel p-10 rounded-[2.5rem] hover:border-brand-accent/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">{item.name}</h3>
                  <div className="text-brand-accent font-bold text-xl">
                    {typeof item.price === 'string' ? item.price : 
                     'two' in (item.price || {}) ? (item.price as any).two : 
                     (item.price as any).small}
                  </div>
                </div>
                {item.description && (
                  <p className="text-gray-500 leading-relaxed mb-8 text-sm font-medium">{item.description}</p>
                )}
                {typeof item.price === 'object' && (
                  <div className="flex flex-col space-y-2 text-xs font-bold text-brand-accent/60 uppercase tracking-widest">
                    {'two' in item.price ? (
                      <>
                        <div className="flex justify-between border-b border-white/5 pb-2"><span>(2) TACOS</span> <span>{item.price.two}</span></div>
                        <div className="flex justify-between pt-1"><span>(4) TACOS</span> <span>{item.price.four}</span></div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between border-b border-white/5 pb-2"><span>SMALL</span> <span>{item.price.small}</span></div>
                        <div className="flex justify-between pt-1"><span>LARGE</span> <span>{item.price.large}</span></div>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-32 p-16 bg-brand-accent rounded-[3rem] text-white soft-industrial-shadow flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-5xl font-bold mb-6 tracking-tight">Catering for your next event.</h3>
            <p className="text-white/80 text-xl font-medium">From office meetings to family parties, we bring the authentic taste of Oaxaca to you.</p>
          </div>
          <div className="relative z-10 flex flex-col items-center md:items-end gap-6">
            <button className="bg-white text-brand-accent px-12 py-5 rounded-2xl font-bold text-xl hover:bg-brand-dark hover:text-white transition-all flex items-center space-x-4 shadow-xl">
              <span>ORDER CATERING</span>
              <ArrowRight />
            </button>
            <p className="text-sm font-bold uppercase tracking-widest text-white/60">*1 WEEK ADVANCE REQUIRED*</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section id="photos" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <h2 className="text-5xl font-bold text-white mb-4">The Kitchen Feed</h2>
            <p className="text-brand-accent font-bold tracking-widest uppercase text-sm">@OAXACATROY</p>
          </div>
          <button className="text-gray-400 hover:text-white font-bold flex items-center space-x-2 transition-colors">
            <span>VIEW ALL PHOTOS</span>
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="aspect-square rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-brand-dark relative overflow-hidden subtle-grain">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-16 tracking-tighter">VISIT US.</h2>
          <div className="space-y-12">
            <div className="flex items-start space-x-10 group">
              <div className="w-20 h-20 glass-panel rounded-3xl flex items-center justify-center flex-shrink-0 text-brand-accent group-hover:border-brand-accent transition-all">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl mb-2">Location</h4>
                <p className="text-gray-500 text-xl">1985 E Wattles Rd, Troy, MI 48085</p>
              </div>
            </div>
            <div className="flex items-start space-x-10 group">
              <div className="w-20 h-20 glass-panel rounded-3xl flex items-center justify-center flex-shrink-0 text-brand-accent group-hover:border-brand-accent transition-all">
                <Phone size={32} />
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl mb-2">Phone</h4>
                <p className="text-gray-500 text-xl">(248) 528-0462</p>
              </div>
            </div>
            <div className="flex items-start space-x-10 group">
              <div className="w-20 h-20 glass-panel rounded-3xl flex items-center justify-center flex-shrink-0 text-brand-accent group-hover:border-brand-accent transition-all">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl mb-2">Hours</h4>
                <p className="text-gray-500 text-xl">MON - SAT: 10 AM - 8 PM</p>
                <p className="text-sm text-brand-accent font-bold mt-4 uppercase tracking-widest bg-brand-accent/10 px-4 py-2 rounded-lg inline-block">Breakfast: 10 AM - Noon</p>
              </div>
            </div>
          </div>

          <div className="mt-24 p-12 glass-panel rounded-[3rem] soft-industrial-shadow">
            <h4 className="text-3xl font-bold text-white mb-6">Love the heat?</h4>
            <p className="text-gray-400 mb-10 text-xl">Your feedback helps us keep the standard high. Leave a review and let us know about your meal.</p>
            <button className="bg-white text-brand-dark px-12 py-5 rounded-2xl font-bold text-xl hover:bg-brand-accent hover:text-white transition-all shadow-xl">
              LEAVE FEEDBACK HERE
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-16 rounded-[3rem] soft-industrial-shadow relative"
        >
          <h3 className="text-4xl font-bold text-white mb-12">Send a Message</h3>
          <form className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">NAME</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-brand-accent outline-none transition-all" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">EMAIL</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-brand-accent outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">MESSAGE</label>
              <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-brand-accent outline-none transition-all"></textarea>
            </div>
            <button className="w-full bg-brand-accent text-white py-6 rounded-2xl font-bold text-2xl hover:bg-brand-accent-light transition-all shadow-xl">
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="text-center md:text-left">
          <img src={LOGO_URL} alt="Footer Logo" className="h-20 mx-auto md:mx-0 mb-8 accent-glow" referrerPolicy="no-referrer" />
          <p className="text-gray-600 font-medium tracking-widest text-sm uppercase">© 2026 OAXACA AUTHENTIC MEXICAN FOOD. <br className="md:hidden" /> TROY, MI.</p>
        </div>
        <div className="flex space-x-10">
          <a href="#" className="w-16 h-16 glass-panel rounded-2xl flex items-center justify-center text-gray-500 hover:text-brand-accent hover:border-brand-accent transition-all"><Instagram size={24} /></a>
          <a href="#" className="w-16 h-16 glass-panel rounded-2xl flex items-center justify-center text-gray-500 hover:text-brand-orange hover:border-brand-accent transition-all"><Facebook size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
