import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rafi – Track Rider',
    quote: 'The carbon fairings are insanely light and the fitment is perfect. Bike feels sharper and looks like a factory race machine.'
  },
  {
    name: 'Alya – Custom Builder',
    quote: 'Professional from concept to delivery. The fiberglass kit saved weight and the paint finish is show-ready.'
  },
  {
    name: 'Dimas – Enthusiast',
    quote: 'Transparent process, timely updates, and craftsmanship that exceeded expectations. Highly recommended.'
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[rgb(7,7,7)] py-20 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white md:text-4xl">
          Testimonials
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div key={t.name} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx * 0.05}} className="rounded-xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm text-gray-300">“{t.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-white">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
