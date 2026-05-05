const industries = [
  { icon: "🏭", name: "Manufacturing", description: "Industrial production and automation" },
  { icon: "⚡", name: "Energy", description: "Power generation and distribution" },
  { icon: "🏗️", name: "Infrastructure", description: "Building and construction systems" },
  { icon: "🚇", name: "Transportation", description: "Rail and transit systems" },
  { icon: "🏥", name: "Healthcare", description: "Medical facility systems" },
  { icon: "📦", name: "Logistics", description: "Warehouse and supply chain" },
];

export default function Industries() {
  return (
    <section className="relative py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full gap-2 p-4">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-blue-400" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">INDUSTRIES WE SERVE</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Trusted by leading companies across diverse industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
              <p className="text-slate-400 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
