import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Roxana Cruz',
    text: 'The best groom place ever!!! They took such good care of my little one. Highly recommend their services.',
    rating: 5,
    source: 'Google Reviews'
  },
  {
    name: 'Sarah M.',
    text: 'Dolce Doggy is amazing! My golden retriever always comes back smelling fantastic and looking so handsome. The staff is incredibly friendly.',
    rating: 5,
    source: 'Facebook'
  },
  {
    name: 'David L.',
    text: 'Very professional and clean environment. You can tell they really love animals here. Prices are reasonable for the quality of work.',
    rating: 5,
    source: 'Google Reviews'
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-zinc-900 border-y border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-500 font-bold tracking-wider uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6">WHAT PET PARENTS SAY</h3>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold text-white">4.5</span>
            <div className="flex text-primary-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" className={i === 4 ? 'opacity-50' : ''} />
              ))}
            </div>
            <span className="text-zinc-400 ml-2">Overall Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-zinc-800" size={48} />
              <div className="flex text-primary-500 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-300 mb-8 relative z-10 text-lg italic">"{testimonial.text}"</p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <span className="text-zinc-500 text-sm">{testimonial.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
