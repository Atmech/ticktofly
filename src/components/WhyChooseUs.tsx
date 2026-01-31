export default function WhyChooseUs() {
  const reasons = [
    {
      title: "End-to-End Service",
      description:
        "From the moment you land at your destination to the moment you board your return flight, we've got you covered.",
    },
    {
      title: "Flexibility",
      description:
        "Life can be unpredictable. We offer flexible options, last-minute changes, and emergency support.",
    },
    {
      title: "Global Network",
      description:
        "Our established relationships with top hotels, tour guides, and local experts allow exclusive deals and VIP access.",
    },
    {
      title: "Transparency",
      description:
        "No hidden fees. Everything is clearly outlined, so you know exactly what to expect from your travel experience.",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-[#0f49bd] font-semibold text-sm uppercase tracking-widest mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#111318] mb-6">
              You&apos;re Not Just Booking a Trip
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              With TickToFly Inc., you&apos;re crafting an adventure. Let us handle the
              details, while you focus on the excitement of exploring new places,
              creating lasting memories, and embracing the world with open arms.
            </p>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f49bd]/10 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#0f49bd]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-[#111318] mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1600&auto=format&fit=crop')`,
                }}
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden lg:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0f49bd] flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#111318]">10,000+</p>
                  <p className="text-sm text-gray-500">Happy Travelers</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Trusted by travelers worldwide to create unforgettable journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
