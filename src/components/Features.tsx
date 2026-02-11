import { motion } from 'framer-motion';
import { Zap, Shield, Brain, Activity, Droplets, Target } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ 
      y: -8,
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative glass-dark rounded-[2.5rem] aspect-square p-8 overflow-hidden border border-white/5 transition-all duration-500 flex flex-col items-center justify-center text-center max-w-[320px] mx-auto hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(255,215,0,0.05)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
      </div>
      <h3 className="text-xl font-display font-bold leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
        {description}
      </p>
    </div>

    {/* Subtle flare accent */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
);

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Cognitive Optimization",
      description: "Advanced neural pathways enhancement for elite focus and mental clarity.",
      delay: 0.1
    },
    {
      icon: Zap,
      title: "Metabolic Acceleration",
      description: "Sustained performance through optimized cellular energy conversion rates.",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "Immune Fortification",
      description: "Superior biological defense through advanced molecular shielding technology.",
      delay: 0.3
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous biometric data loops for instant performance optimization.",
      delay: 0.4
    },
    {
      icon: Droplets,
      title: "Cellular Hydration",
      description: "Deep osmotic balance achieved for peak mitochondrial functional efficiency.",
      delay: 0.5
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Accurate nutrient delivery to specific high-performance biological systems.",
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden xl:py-48" id="research">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-10"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Research Phase v2.0</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl xl:text-9xl font-display font-bold leading-[0.85] mb-12 tracking-tighter">
            ENGINEERED <br />
            <span className="text-primary italic">SUPREMACY.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light opacity-70">
            Pushing the boundaries of human potential through clinical breakthroughs and AI molecular modeling.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} delay={0} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-10" />
    </section>
  );
};
