import { Heart, Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = '918770820314';
  const whatsappMessage = encodeURIComponent('Hello Royal Utsav Events! I would like to inquire about your services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Royal Utsav Events</h3>
            <p className="text-gray-300 mb-4">
              Creating unforgettable moments and memories for your special occasions.
              Your celebration is our passion.
            </p>
            <div className="flex gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-500 hover:bg-green-600 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/royal.utsav.events?igsh=MXg1b3c2am4ybW9j"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:eventroyalutsav@gmail.com"
                className="p-3 bg-amber-500 hover:bg-amber-600 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-amber-400 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-amber-400 transition-colors">Testimonials</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-amber-400 transition-colors">Events</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-amber-400 transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <a href="tel:8770820314" className="text-gray-300 hover:text-amber-400 transition-colors">
                  8770820314
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 mt-1" />
                <a href="mailto:eventroyalutsav@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors break-all">
                  eventroyalutsav@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Royal Utsav Events © {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
