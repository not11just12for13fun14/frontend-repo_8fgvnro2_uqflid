import { motion } from 'framer-motion';
import { Wrench, Layers, Shield, Paintbrush, PanelsTopLeft } from 'lucide-react';

const services = [
  {
    title: 'Full Motorcycle Modification',
    icon: Wrench,
    desc: 'Complete transformation from concept to delivery: geometry, ergonomics, mounts, and premium finishing.',
    benefits: ['End-to-end build', 'Performance-driven', 'Show-level finish']
  },
  {
    title: 'Custom Fiberglass Bodywork',
    icon: Layers,
    desc: 'Lightweight, durable FRP panels molded precisely to your motorcycle’s lines and mounting points.',
    benefits: ['Cost-effective', 'Repair-friendly', 'Tailored fit']
  },
  {
    title: 'Custom Carbon Fiber Bodywork',
    icon: Shield,
    desc: 'Ultra-light carbon parts with racing-grade layups for superior stiffness-to-weight ratios.',
    benefits: ['Racing-grade', 'High strength', 'Minimal weight']
  },
  {
    title: 'Custom Fairing Production',
    icon: PanelsTopLeft,
    desc: 'Precision-made fairings and panels compatible with OEM or custom mounting solutions.',
    benefits: ['OEM-compatible', 'Precise fit', 'Clean aerodynamics']
  },
  {
    title: 'Restoration & Custom Painting',
    icon: Paintbrush,
    desc: 'From surface prep to paint and clear coat, delivering consistent, professional finishes.',
    benefits: ['Color-matched', 'UV-stable', 'Showroom gloss']
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[rgb(8,8,8)] py-20 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white md:text-4xl">
          Services
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay: idx * 0.05}}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <s.icon className="h-7 w-7 text-lime-400" />
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-300">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="block h-1 w-1 rounded-full bg-lime-400" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
