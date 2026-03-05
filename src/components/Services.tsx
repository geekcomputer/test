import { motion } from 'motion/react';
import { Scissors, Droplets, Wind, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: <Droplets size={32} />,
    title: 'Gentle Baths',
    description: 'Premium shampoos and conditioners tailored to your dog\'s coat type and skin sensitivity.',
  },
  {
    icon: <Scissors size={32} />,
    title: 'Stylish Haircuts',
    description: 'Breed-specific cuts or custom styles to keep your pup looking sharp and feeling comfortable.',
  },
  {
    icon: <Wind size={32} />,
    title: 'Blow Dry & Brush',
    description: 'Thorough drying and brushing to remove loose hair, prevent matting, and add shine.',
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Spa Treatments',
    description: 'Nail trimming, ear cleaning, and teeth brushing for complete hygiene and health.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-500 font-bold tracking-wider uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6">PREMIUM GROOMING SERVICES</h3>
          <p className="text-zinc-400 text-lg">
            We offer a full range of grooming services to ensure your pet is not only looking great but feeling their absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-primary-500/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
