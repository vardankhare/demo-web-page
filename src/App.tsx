import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { ProductShowcase } from './components/ProductShowcase'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen relative selection:bg-primary selection:text-primary-foreground">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 noise z-[100] opacity-[0.03] pointer-events-none" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <CTA />
      </main>
      
      <Footer />
    </div>
  )
}

export default App 