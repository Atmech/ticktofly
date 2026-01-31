export default function Destinations() {
  const destinations = [
    {
      city: "London",
      country: "UK",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop",
      price: "$2,450",
      class: "Business",
      type: "International",
    },
    {
      city: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
      price: "$8,820",
      class: "First Class",
      type: "International",
    },
    {
      city: "Rio de Janeiro",
      country: "Brazil",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop",
      price: "$3,160",
      class: "Business",
      type: "International",
    },
    {
      city: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
      price: "$2,890",
      class: "Business",
      type: "International",
    },
    {
      city: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
      price: "$4,200",
      class: "First Class",
      type: "International",
    },
    {
      city: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
      price: "$3,500",
      class: "Business",
      type: "International",
    },
  ];

  return (
    <section id="destinations" className="py-24 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-[#0f49bd] font-semibold text-sm uppercase tracking-widest mb-4 block">
              Curated Escapes
            </span>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-bold text-[#111318] mb-2">
              Trending Destinations
            </h2>
            <p className="text-gray-500">
              High-end routes for discerning travelers.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-[#0f49bd] font-bold hover:gap-3 transition-all text-sm group"
          >
            View all destinations
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center image-scale"
                    style={{ backgroundImage: `url('${dest.image}')` }}
                  />
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold text-[#051024] uppercase shadow-sm border border-gray-100 tracking-wide">
                    {dest.class} from {dest.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold text-[#0f49bd] uppercase tracking-widest mb-1">
                        {dest.type}
                      </p>
                      <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-[#111318]">
                        {dest.city}, {dest.country}
                      </h3>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-[#0f49bd] text-white flex items-center justify-center shadow-lg shadow-[#0f49bd]/30 flight-icon">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <a
          href="#"
          className="flex md:hidden justify-center items-center gap-2 text-[#0f49bd] font-bold mt-8"
        >
          View all destinations
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
