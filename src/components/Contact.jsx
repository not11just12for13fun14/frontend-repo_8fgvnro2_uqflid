import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[rgb(6,6,6)] py-20 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl font-bold text-white md:text-4xl">
          Contact
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-xl border border-white/10 bg-black/40 p-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-gray-400">Name</label>
                <input className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-lime-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-gray-400">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-lime-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-gray-400">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-lime-500" placeholder="Tell us about your project" />
              </div>
            </div>
            <button className="mt-4 w-full rounded-md bg-lime-600 px-4 py-2 text-sm font-semibold text-black transition hover:bg-lime-500">Send</button>
          </motion.form>

          <div className="space-y-6">
            <motion.a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}} className="flex items-center justify-center gap-2 rounded-xl border border-lime-500/30 bg-lime-500/10 p-4 text-lime-400 hover:bg-lime-500/20">
              <Phone className="h-5 w-5" /> WhatsApp Us
            </motion.a>
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.15}} className="rounded-xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-5 w-5 text-lime-400" />
                <div>
                  <div className="font-semibold text-white">Workshop Address</div>
                  <div className="text-gray-400">Jl. Velocity 88 No.12, Industrial Park, Jakarta</div>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-5 w-5 text-lime-400" />
                <div>
                  <div className="font-semibold text-white">Operating Hours</div>
                  <div className="text-gray-400">Mon–Sat: 09:00 – 18:00 (GMT+7)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
