import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, CheckCircle2 } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full max-h-[400px] bg-primary/20 blur-[150px] rounded-full" />
      
      <div className="max-w-5xl mx-auto glass-dark rounded-[4rem] p-12 md:p-20 relative z-10 text-center border-primary/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            JOIN THE <br />
            <span className="text-primary text-glow italic">INNER CIRCLE.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Subscribe to our bio-hacking newsletter. Get exclusive research access, early drops, 
            and 15% off your first order. No spam, only science.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mb-12" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Enter your email" 
                className="bg-white/5 border-white/10 h-16 pl-12 rounded-full focus:ring-primary focus:border-primary text-lg"
              />
            </div>
            <Button className="h-16 px-10 rounded-full text-lg font-bold shadow-glow hover:scale-105 transition-transform">
              Join Now
            </Button>
          </form>

          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {['No spam', 'Exclusive content', 'Early access', 'Priority support'].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
