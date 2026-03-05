import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-zinc-950 font-display font-black text-sm">DD</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Dolce <span className="text-primary-500">Doggy</span>
              </span>
            </a>
            <p className="text-zinc-400 max-w-sm mb-6">
              Professional pet grooming services in Laredo, TX. We treat your furry friends like family, ensuring they leave clean, healthy, and happy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-primary-500 hover:text-zinc-950 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:bg-primary-500 hover:text-zinc-950 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-zinc-400 hover:text-primary-500 transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-zinc-400 hover:text-primary-500 transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="text-zinc-400 hover:text-primary-500 transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-zinc-400 hover:text-primary-500 transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>104 E Calton Rd ste 115</li>
              <li>Laredo, TX 78041</li>
              <li className="pt-2">
                <a href="tel:9564410175" className="text-primary-500 hover:text-primary-400 font-medium">(956) 441-0175</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Dolce Doggy Pet Grooming. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
