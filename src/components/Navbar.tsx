import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-dark rounded-full px-8 py-3 relative overflow-hidden">
        {/* Noise overlay */}
        <div className="absolute inset-0 noise opacity-10" />
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">K</div>
          <span className="font-display text-xl font-bold tracking-tighter">KEY<span className="text-primary">SUPPS</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Products', 'Research', 'About', 'Contact'].map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button className="hidden md:flex rounded-full px-6 font-bold shadow-glow hover:scale-105 active:scale-95 transition-all relative group overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-6 right-6 mt-4 glass-dark rounded-3xl p-8 flex flex-col gap-6"
        >
          {['Products', 'Research', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-bold hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full rounded-full py-6 font-bold">
            Get Started
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};
