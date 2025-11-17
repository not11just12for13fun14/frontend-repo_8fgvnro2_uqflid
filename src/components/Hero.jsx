import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Carbon overlay and neon lime glow accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(163,230,53,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(163,230,53,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-24 md:px-10 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1 text-xs tracking-wider text-lime-300"
        >
          HIGH-PERFORMANCE CRAFT
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
        >
          Custom Motorcycle Bodywork – <span className="text-lime-400">Fiberglass</span> & <span className="text-lime-400">Carbon Fiber</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-gray-300 md:text-lg"
        >
          Specialists in high-precision motorcycle modification and custom body manufacturing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-md bg-lime-600 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-lime-500/30 transition hover:bg-lime-500">
            Request Consultation
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#gallery" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
