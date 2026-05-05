import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AE</h3>
            <p className="text-slate-400 text-sm mb-6">
              Empowering industries with reliable control solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.25c0-2.89 1.94-4.75 4.74-4.75 1.36 0 2.54.1 2.84.15v3.29h-1.92c-1.5 0-1.74.71-1.74 1.74v2.28h3.35l-.35 3.53h-3v7.21" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  VFD Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Motor Control Centers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Power Distribution Panels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Automated Panels
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>info@ae.com</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Industrial Ave, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-500">
            © 2024 AE Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
