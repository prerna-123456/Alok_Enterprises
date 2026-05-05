import { Button } from "@/components/ui/button";

const products = [
  {
    title: "VFD Products",
    description: "Variable Frequency Drives for precise motor speed control and energy efficiency.",
    color: "bg-slate-100",
  },
  {
    title: "Motor Control Centers",
    description: "Comprehensive control solutions for industrial motor management and protection.",
    color: "bg-blue-900",
    textColor: "text-white",
  },
  {
    title: "Power Distribution Panels",
    description: "Advanced electrical distribution systems for safe and reliable power management.",
    color: "bg-slate-100",
  },
  {
    title: "Automated Panels",
    description: "Custom automation solutions tailored to your specific industrial requirements.",
    color: "bg-blue-900",
    textColor: "text-white",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">PRODUCTS</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our comprehensive range of industrial control solutions designed to meet diverse industry needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 transition-transform hover:shadow-lg ${
                product.color
              } ${product.textColor || "text-slate-900"}`}
            >
              <div className="h-40 bg-opacity-50 rounded mb-6 flex items-center justify-center">
                <div className="text-5xl">⚙️</div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
              <p className={`mb-6 leading-relaxed ${product.textColor ? "text-blue-50" : "text-slate-600"}`}>
                {product.description}
              </p>
              <Button
                variant={product.textColor ? "secondary" : "outline"}
                className={product.textColor ? "bg-white text-blue-900 hover:bg-blue-50" : ""}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
