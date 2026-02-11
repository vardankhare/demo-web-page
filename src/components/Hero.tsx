import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background elements removed for pure black high-contrast look */}
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">New Formula v2.0 Released</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            UNLOCK YOUR <br />
            <span className="text-primary text-glow">ULTIMATE</span> <br />
            POTENTIAL.
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            Engineered by world-class nutritionists and AI-driven research. 
            The elite choice for high-performers, builders, and elite athletes.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Button size="lg" className="rounded-full px-8 py-7 text-lg font-bold shadow-glow hover:scale-105 transition-transform group">
              Shop Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg font-bold border-white/10 hover:bg-white/5 group">
              <Play className="mr-2 fill-current" />
              Watch Story
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold">200+</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Athletes</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold">4.9/5</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Rating</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold">100%</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Organic</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <motion.img 
            src="https://v3b.fal.media/files/b/0a8e0f7a/ldEhHOd1zRDtI6M5lJp3W.png" 
            alt="Key Supplement Bottle" 
            className="w-full max-w-md z-10"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          {/* Floating elements */}
          <motion.div 
            className="absolute top-20 right-0 glass p-4 rounded-2xl z-20"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="text-primary font-bold">98% Purity</span>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-20 left-0 glass p-4 rounded-2xl z-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="text-white font-bold">Bio-Available</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom - Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
