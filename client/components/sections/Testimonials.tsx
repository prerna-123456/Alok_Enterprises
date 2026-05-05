const testimonials = [
  {
    quote:
      "AE's control solutions transformed our manufacturing process. The reliability and efficiency gains were remarkable. Highly recommended!",
    author: "Sarah Mitchell",
    title: "Operations Director",
    company: "Global Manufacturing Inc.",
  },
  {
    quote:
      "Outstanding customer support and innovative products. AE has been instrumental in our operational success for the past decade.",
    author: "Robert Chen",
    title: "Technical Manager",
    company: "PowerTech Solutions",
  },
  {
    quote:
      "The automation systems delivered by AE exceeded our expectations. Their technical expertise and responsiveness are unmatched.",
    author: "Maria Garcia",
    title: "Plant Manager",
    company: "Industrial Systems Corp.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Testimonials</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Hear what our clients have to say about their experience with AE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-8 border border-slate-200">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-600">{testimonial.title}</p>
                <p className="text-sm text-slate-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
