import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Bath & Brush',
    price: 'From $50',
    description: 'Perfect for short-haired breeds or in-between full grooms.',
    features: [
      'Premium Shampoo & Conditioner',
      'Blow Dry & Thorough Brush Out',
      'Nail Trimming',
      'Ear Cleaning',
      'Gland Expression (upon request)',
      'Bandana or Bow'
    ],
    popular: false,
  },
  {
    name: 'Full Groom',
    price: 'From $65',
    description: 'The complete spa experience for your furry friend.',
    features: [
      'Everything in Bath & Brush',
      'Breed-Specific Haircut or Custom Style',
      'Sanitary Trim',
      'Paw Pad Shave',
      'Teeth Brushing',
      'Premium Cologne Spritz'
    ],
    popular: true,
  },
  {
    name: 'Puppy Cut',
    price: 'From $35',
    description: 'Gentle introduction to grooming for puppies under 6 months.',
    features: [
      'Tearless Puppy Shampoo',
      'Gentle Blow Dry',
      'Face, Feet, and Sanitary Trim',
      'Nail Trimming',
      'Ear Cleaning',
      'Lots of Cuddles & Treats'
    ],
    popular: false,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-900 relative border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-500 font-bold tracking-wider uppercase text-sm mb-2">Transparent Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-6">GROOMING PACKAGES</h3>
          <p className="text-zinc-400 text-lg">
            Prices vary based on breed, size, coat condition, and temperament. Contact us for an exact quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-zinc-950 rounded-3xl p-8 border ${
                pkg.popular ? 'border-primary-500 shadow-2xl shadow-primary-500/10' : 'border-zinc-800'
              } flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-zinc-950 font-bold px-4 py-1 rounded-full text-sm">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                <p className="text-zinc-400 text-sm h-10">{pkg.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-display font-black text-white">{pkg.price}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-primary-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-center transition-colors ${
                  pkg.popular
                    ? 'bg-primary-500 text-zinc-950 hover:bg-primary-400'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                Book This Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
