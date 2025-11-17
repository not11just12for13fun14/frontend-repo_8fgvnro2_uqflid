import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-[rgb(10,10,10)] py-20 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white md:text-4xl">
          About Us
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="leading-relaxed">
            We are experts in full and partial motorcycle modification, delivering precision-built custom bodies in fiberglass and carbon fiber. Our workshop blends engineering discipline with artisanal craftsmanship to produce pieces that are lightweight, durable, and race-ready.
          </motion.p>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.2}} className="leading-relaxed">
            Our vision is simple: premium quality, precision design, and racing-grade materials. Every contour, mount, and surface is engineered for performance and finished to a professional standard that stands out on the street and the track.
          </motion.p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            {label:'Years of Experience', value:'10+'},
            {label:'Projects Delivered', value:'350+'},
            {label:'Material Expertise', value:'FRP & Carbon'},
            {label:'Finish Quality', value:'Showroom+'},
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1 * i}} className="rounded-lg border border-white/10 bg-black/30 p-5">
              <div className="text-2xl font-extrabold text-white">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
