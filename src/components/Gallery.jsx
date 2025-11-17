import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1479660656269-197ebb83b540?q=80&w=1600&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[rgb(8,8,8)] py-20 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white md:text-4xl">
          Project Gallery
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {images.map((src, idx) => (
            <motion.div key={src} initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5, delay: idx * 0.05}} className="group relative overflow-hidden rounded-xl border border-lime-500/20">
              <img src={src} alt="Custom motorcycle body" className="h-40 w-full object-cover sm:h-48 md:h-56 lg:h-64 transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
