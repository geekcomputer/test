import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1000&auto=format&fit=crop",
  "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147920598/images/25fbbf-54f8-2b75-d7e-ac51643c152_shih_tzu_puppy_cut_haircut_2_.jpg",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=1000&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary-500 font-bold tracking-wider uppercase text-sm mb-2">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white">FRESH & CLEAN PUPS</h3>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 font-medium flex items-center gap-2">
            Follow us on Instagram &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden relative group"
            >
              <img
                src={src}
                alt={`Professional dog grooming in Laredo TX - Happy client ${index + 1} at Dolce Doggy`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold">Happy Client</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
