export default function Values() {
  const values = [
    {
      title: "Personalization",
      description:
        "We take the time to understand your travel style, budget, and preferences. Every itinerary reflects who you are as a traveler.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Expertise",
      description:
        "With years of experience in the travel industry, our team is equipped to handle even the most complex travel requests.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "From the moment you book to the final leg of your journey, we strive to exceed your expectations in every way possible.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Seamless Travel",
      description:
        "We handle the details so you don't have to. No complicated schedules, no last-minute stress—just a flawless travel experience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-20 bg-[#051024] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#4d8aff] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Our Values
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Drives Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our commitment to exceptional service is built on these core principles.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#4d8aff]/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#0f49bd]/20 flex items-center justify-center mx-auto mb-6 text-[#4d8aff] group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
