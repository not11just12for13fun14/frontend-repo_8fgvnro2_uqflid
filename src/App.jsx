import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Process />
      <Gallery />
      <Testimonials />
      <Contact />
      <footer className="border-t border-white/10 bg-black/90 py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Velocity Custom — Premium Motorcycle Bodywork
      </footer>
    </div>
  );
}

export default App;
