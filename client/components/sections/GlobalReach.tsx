export default function GlobalReach() {
  const regions = [
    { color: "bg-blue-600", name: "North America", count: "45+" },
    { color: "bg-blue-500", name: "Europe", count: "32+" },
    { color: "bg-blue-700", name: "Asia Pacific", count: "28+" },
    { color: "bg-blue-600", name: "Middle East", count: "15+" },
    { color: "bg-blue-500", name: "South America", count: "12+" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">OUR GLOBAL REACH</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            With operations in over 130 countries, we serve clients worldwide with local expertise and global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map visualization */}
          <div className="bg-slate-100 rounded-lg p-8 min-h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🌍</div>
              <p className="text-slate-600">Global distribution map</p>
            </div>
          </div>

          {/* Statistics */}
          <div className="space-y-6">
            {regions.map((region, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-900">{region.name}</span>
                  <span className="text-blue-600 font-bold">{region.count}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${region.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${Math.floor(Math.random() * 40 + 60)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
