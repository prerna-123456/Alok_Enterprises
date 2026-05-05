import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Background industrial pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full gap-2 p-4">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-blue-400 rounded-sm" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            EMPOWERING INDUSTRIES WITH RELIABLE CONTROL SOLUTIONS
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Advanced industrial control systems designed for maximum reliability and performance. Transform your operations with cutting-edge automation technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
