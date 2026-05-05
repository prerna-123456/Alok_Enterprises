export default function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div>
            <h3 className="text-3xl font-bold mb-4">OUR MISSION</h3>
            <p className="text-lg text-blue-50 leading-relaxed">
              To provide world-class industrial control solutions that empower businesses to operate efficiently, safely, and sustainably. We are dedicated to delivering innovative products and exceptional customer service.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-3xl font-bold mb-4">OUR VISION</h3>
            <p className="text-lg text-blue-50 leading-relaxed">
              To be the global leader in industrial automation and control systems, setting new standards for innovation, reliability, and customer success. We envision a future where every industry benefits from our advanced technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
