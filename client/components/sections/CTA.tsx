import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full gap-2 p-4">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-blue-400" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready For High-Performance Control Solutions?
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join leading companies worldwide that trust AE for their industrial control needs. Let's transform your operations today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            Get Started Today
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
