export default function Services() {
  const services = [
    {
      title: "Luxury Travel Packages",
      description:
        "Indulge in the finest experiences—private jets, five-star resorts, personal guides, and gourmet dining.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
      tag: "Premium",
    },
    {
      title: "Adventure & Eco Tours",
      description:
        "Trek through the Andes or explore African wilderness. Off the beaten path where nature reigns supreme.",
      image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1600&auto=format&fit=crop",
      tag: "Adventure",
    },
    {
      title: "Cultural Immersion",
      description:
        "Experience the world like a local with guided tours, culinary experiences, and authentic cultural exchanges.",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1600&auto=format&fit=crop",
      tag: "Experience",
    },
    {
      title: "Honeymoons & Romantic Getaways",
      description:
        "Say 'I do' to unforgettable moments—private beach resorts to Italy's most romantic spots.",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop",
      tag: "Romance",
    },
    {
      title: "Corporate & Incentive Travel",
      description:
        "Reward your teams with custom itineraries and tailored experiences that inspire productivity and connection.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop",
      tag: "Business",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 lg:px-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#0f49bd] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Popular Services
          </span>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#111318] mb-4">
            Crafted Experiences
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From luxury escapes to adventure tours, we craft experiences that match your travel dreams.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 card-hover ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index === 0 ? "h-80" : "h-64"}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center image-scale"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold text-[#051024] uppercase tracking-wide shadow-sm">
                  {service.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-xl text-[#111318] mb-2 group-hover:text-[#0f49bd] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 text-[#0f49bd] font-semibold text-sm flex items-center gap-2 group/btn">
                  <span>Learn More</span>
                  <svg 
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
