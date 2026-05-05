import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">ABOUT US</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded with a mission to revolutionize industrial control systems, AE has been at the forefront of control automation for over two decades. We partner with leading industries globally to deliver innovative, reliable, and scalable solutions.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our commitment to excellence and customer satisfaction drives us to continuously innovate and improve our products and services.
            </p>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">
              Learn More
            </Button>
          </div>

          {/* Image */}
          <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg h-96 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-slate-300">📸</div>
                <p className="text-slate-500 mt-4">Industrial workspace image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
