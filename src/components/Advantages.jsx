import { motion } from 'framer-motion';

const advantages = [
  'Premium racing-grade materials',
  'High precision and fully custom designs',
  'Professional finishing quality',
  'Years of experience',
  'Transparent production process',
];

export default function Advantages() {
  return (
    <section id="advantages" className="relative bg-[rgb(6,6,6)] py-20 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white md:text-4xl">
          Key Advantages
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, idx) => (
            <motion.div key={item} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx * 0.05}} className="rounded-xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-lime-400" />
                <p className="text-sm text-gray-300">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
