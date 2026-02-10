import { motion } from 'framer-motion';
import { Zap, Shield, Brain, Activity, Droplets, Target } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative glass-dark rounded-[1.5rem] aspect-square p-5 overflow-hidden border border-white/5 transition-all duration-500 flex flex-col items-center justify-center text-center max-w-[280px] mx-auto"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
      </div>
      <h3 className="text-lg font-display font-bold leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>

    {/* Subtle flare accent */}
    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
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

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="research">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">Research Phase v2.0</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8">
            ENGINEERED <br />
            <span className="text-primary italic">SUPREMACY.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Pushing the boundaries of human potential through clinical breakthroughs and AI molecular modeling.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-10" />
    </section>
  );
};
