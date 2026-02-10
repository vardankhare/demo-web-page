import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-primary-foreground text-xl">K</div>
            <span className="font-display text-2xl font-bold tracking-tighter">KEY<span className="text-primary">SUPPS</span></span>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm mb-8">
            The future of biological optimization. Engineered in Silicon Valley, 
            sourced globally, delivered to your doorstep.
          </p>
          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-xl mb-8 uppercase tracking-widest text-primary text-sm">Navigation</h4>
          <ul className="flex flex-col gap-4 text-muted-foreground">
            {['Products', 'Research', 'About Us', 'Contact', 'FAQ'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-xl mb-8 uppercase tracking-widest text-primary text-sm">Legal</h4>
          <ul className="flex flex-col gap-4 text-muted-foreground">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Shipping Info'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 opacity-50 text-sm">
        <p>© 2026 Key Supplements Inc. All rights reserved.</p>
        <p className="flex gap-8">
          <span>Designed with Intelligence</span>
          <span>Silicon Valley, CA</span>
        </p>
      </div>
    </footer>
  );
};
