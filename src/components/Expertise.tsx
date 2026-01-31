export default function Expertise() {
  const expertiseItems = [
    {
      number: "01",
      title: "Custom Vacation Packages",
      description:
        "Every traveler is unique. Our expert travel consultants curate dream vacations—ensuring every detail is handpicked and tailored to your preferences. From Caribbean beaches to Parisian streets to Southeast Asian temples.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Complex Itinerary Management",
      description:
        "We specialize in sophisticated itineraries spanning multiple destinations, time zones, and logistics. World tours, multi-country road trips, or continental treks—we handle all the moving parts seamlessly.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Group Travel Coordination",
      description:
        "Family reunions, corporate retreats, or destination weddings—we manage group logistics with precision. Group discounts, custom itineraries, and specialized activities for every member.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Destination Expertise",
      description:
        "From Egyptian ruins to Maldives beaches—we know the best times to visit, hidden gems to explore, and exclusive local tours that only insiders know about.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "24/7 Support",
      description:
        "Travel doesn't always go according to plan. Our client support team is available around the clock—whether you need last-minute changes or face unexpected delays.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="expertise" className="py-24 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#0f49bd] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#111318] mb-4">
            What We Do Best
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Years of experience in the travel industry, equipped to handle even the most complex travel requests.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#0f49bd]/20 hover:shadow-xl hover:shadow-[#0f49bd]/5 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-[#0f49bd]/20 font-[family-name:var(--font-montserrat)] text-4xl font-black">
                  {item.number}
                </span>
                <div className="text-[#0f49bd] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-[#111318] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
