const features = [
  {
    icon: "🔧",
    title: "Custom-Built Solutions",
    description: "Tailored systems designed specifically for your unique industrial requirements",
  },
  {
    icon: "📊",
    title: "High Reliability",
    description: "99.9% uptime guarantee with redundant systems and fail-safes",
  },
  {
    icon: "🏆",
    title: "Industry Expertise",
    description: "Decades of experience across diverse industrial sectors",
  },
  {
    icon: "🔐",
    title: "Robust Support",
    description: "24/7 technical support and maintenance services worldwide",
  },
  {
    icon: "💡",
    title: "Quality Components",
    description: "Premium-grade materials and certified engineering standards",
  },
  {
    icon: "📈",
    title: "Proven Track Record",
    description: "Trusted by Fortune 500 companies globally",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            What sets AE apart in the industrial control solutions market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image section */}
        <div className="mt-16">
          <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="text-8xl mb-4">🏢</div>
              <p className="text-slate-600">Industrial facility image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
