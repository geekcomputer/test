import { motion } from 'motion/react';
import { ArrowRight, Star, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop"
          alt="Happy dog getting groomed"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 mb-6 backdrop-blur-sm"
          >
            <div className="flex text-primary-500">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" className="opacity-50" />
            </div>
            <span className="text-xs font-medium text-zinc-300">4.47 Google Reviews in Laredo, TX</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1] tracking-tight mb-6 uppercase"
          >
            PREMIER DOG GROOMING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              IN LAREDO, TX
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl text-balance"
          >
            At Dolce Doggy, we treat your furry friends like family! Professional pet grooming services in Laredo, TX designed to keep your pets clean, healthy, and looking their absolute best.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-zinc-950 font-bold text-lg rounded-full hover:bg-primary-400 transition-all transform hover:scale-105"
            >
              Book Appointment <ArrowRight size={20} />
            </a>
            <a
              href="tel:9564410175"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white font-bold text-lg rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all"
            >
              <Phone size={20} /> (956) 441-0175
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
