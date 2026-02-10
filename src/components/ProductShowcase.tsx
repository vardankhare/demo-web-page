import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Focus Core v2",
    tagline: "Neuro-Optimized Nootropic",
    price: "$64.00",
    image: "https://v3b.fal.media/files/b/0a8deb25/P52zRciObI0LO4IAlxEQg.png",
    rating: 4.9,
    color: "from-primary/20 to-transparent"
  },
  {
    id: 2,
    name: "Pure Protein Elite",
    tagline: "Bio-Available Whey Isolate",
    price: "$89.00",
    image: "https://v3b.fal.media/files/b/0a8deb25/46BAGo2ZR2xZDBvcgc2Wx.png",
    rating: 5.0,
    color: "from-amber-500/20 to-transparent"
  },
  {
    id: 3,
    name: "Cellular Repair",
    tagline: "Night Recovery Complex",
    price: "$52.00",
    image: "https://v3b.fal.media/files/b/0a8deb25/hvWUJLFvmuWvXBjKqQJWG.png",
    rating: 4.8,
    color: "from-primary/20 to-transparent"
  }
];

export const ProductShowcase = () => {
  return (
    <section className="py-24 px-6" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">CURATED FOR <span className="text-primary">ELITES.</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Small batches. Maximum potency. Designed for those who demand more from their biology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col glass-dark rounded-[3rem] p-4 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white/5 mb-8 flex items-center justify-center p-8">
                <motion.img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full max-w-[200px] h-auto object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex items-center gap-1 glass px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 text-primary fill-primary" />
                  <span className="text-[10px] font-bold">{product.rating}</span>
                </div>
              </div>

              <div className="px-6 pb-6 relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.tagline}</p>
                  </div>
                  <span className="text-xl font-display font-bold text-primary">{product.price}</span>
                </div>
                
                <div className="mt-8 flex gap-3">
                  <Button className="flex-1 rounded-full font-bold h-14 text-lg">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="w-14 h-14 rounded-full border-white/10 hover:bg-primary hover:text-primary-foreground group-hover:border-primary/50">
                    <ShoppingBag className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
