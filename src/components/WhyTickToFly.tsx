export default function WhyTickToFly() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Hand-picked Deals",
      description:
        "Access to unpublished rates and premium inventory not available to the public.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Human Expertise",
      description:
        "Real concierge service. We learn your preferences to tailor every trip perfectly.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "24/7 VIP Support",
      description:
        "A dedicated team based in the US, ready to assist you before, during, and after.",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Left - Title */}
          <div className="max-w-xs">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[#111318] mb-3">
              Why TickToFly?
            </h2>
            <p className="text-gray-500 font-medium">
              Redefining travel with a human touch.
            </p>
          </div>

          {/* Right - Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-1">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-4 group items-start">
                <div className="w-14 h-14 rounded-full border border-blue-100 bg-white flex items-center justify-center text-[#0f49bd] shadow-sm group-hover:shadow-md transition-shadow">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[#111318] text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
