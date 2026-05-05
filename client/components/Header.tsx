import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl font-bold text-white">AE</div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-300 hover:text-white transition">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition">
              About Us
            </a>
            <a href="#products" className="text-sm font-medium text-slate-300 hover:text-white transition">
              Our Products
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-slate-900 border-white hover:bg-white hover:text-slate-900">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
