import { motion } from 'framer-motion';

const steps = [
  { title: 'Consultation & concept', desc: 'Requirements, goals, and aesthetic direction.' },
  { title: 'Bodywork design', desc: 'Lines, fitment points, and aerodynamics planned.' },
  { title: 'Mold creation', desc: 'High-precision molds built for replication.' },
  { title: 'Fiberglass/carbon fiber production', desc: 'Layups cured for optimal strength-to-weight.' },
  { title: 'Finishing & installation', desc: 'Surface prep, paint/clear, and mount on bike.' },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-[rgb(5,5,5)] py-20 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white md:text-4xl">
          Work Process
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
          {steps.map((s, idx) => (
            <motion.div key={s.title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx * 0.05}} className="relative rounded-xl border border-white/10 bg-black/40 p-6">
              <div className="text-sm font-semibold tracking-wide text-lime-400">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
