import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info & Timetable */}
          <div>
            <h2 className="text-primary-500 font-bold tracking-wider uppercase text-sm mb-2">Visit Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-8">BOOK AN APPOINTMENT</h3>
            <p className="text-zinc-400 mb-10 text-lg">
              Ready to pamper your pup? Give us a call or visit our salon in Laredo. We recommend booking in advance to secure your preferred time.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-primary-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                  <p className="text-zinc-400">104 E Calton Rd ste 115<br />Laredo, TX 78041</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-primary-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                  <a href="tel:9564410175" className="text-zinc-400 hover:text-primary-500 transition-colors">(956) 441-0175</a>
                </div>
              </div>
            </div>

            {/* Timetable */}
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-primary-500" size={24} />
                <h4 className="text-white font-bold text-xl">Business Hours</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between text-zinc-300 border-b border-zinc-800 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between text-zinc-300 border-b border-zinc-800 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium text-white">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-zinc-500 pt-1">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 rounded-3xl p-8 lg:p-10 border border-zinc-800"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Send us a message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="(956) 000-0000"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="petName" className="block text-sm font-medium text-zinc-400 mb-2">Pet's Name</label>
                  <input
                    type="text"
                    id="petName"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="Max"
                  />
                </div>
                <div>
                  <label htmlFor="breed" className="block text-sm font-medium text-zinc-400 mb-2">Breed / Size</label>
                  <input
                    type="text"
                    id="breed"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="Golden Retriever"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-2">Interested Service</label>
                <select
                  id="service"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="bath">Bath & Brush</option>
                  <option value="full">Full Groom</option>
                  <option value="puppy">Puppy Cut</option>
                  <option value="other">Other / Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Additional Notes</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Any special requirements or questions?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 text-zinc-950 font-bold text-lg py-4 rounded-xl hover:bg-primary-400 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={20} /> Request Appointment
              </button>
              <p className="text-zinc-500 text-xs text-center mt-4">
                This is a request. We will call you to confirm the exact date and time.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
