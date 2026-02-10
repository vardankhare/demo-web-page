import { motion } from 'framer-motion';
import { Zap, Shield, Brain, Activity, Droplets, Target } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`group relative glass-dark rounded-3xl aspect-square p-6 overflow-hidden border border-white/5 hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 flex flex-col items-center justify-center text-center ${className}`}
  >
    <div className="absolute inset-0 noise opacity-5 group-hover:opacity-10 transition-opacity" />
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300">
        <Icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold leading-tight px-2">{title}</h3>
    </div>
  </motion.div>
);

export const Features = () => {
  return (
    <section className="py-24 px-6 relative" id="research">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            ENGINEERED <br />
            <span className="text-primary">SUPREMACY.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Clinical breakthroughs. Biological upgrades. AI molecular modeling.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Brain}
            title="Cognitive Focus"
            delay={0.1}
          />
          <FeatureCard 
            icon={Zap}
            title="Metabolic Peak"
            delay={0.2}
          />
          <FeatureCard 
            icon={Shield}
            title="Immune Shield"
            delay={0.3}
          />
          <FeatureCard 
            icon={Activity}
            title="Bio Monitoring"
            delay={0.4}
          />
          <FeatureCard 
            icon={Droplets}
            title="Cell Hydration"
            delay={0.5}
          />
          <FeatureCard 
            icon={Target}
            title="Precision Targeting"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};
