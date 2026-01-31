"use client";

interface FlightDeal {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  price: number;
  originalPrice: number;
  airline: string;
  stops: string;
}

const featuredDeals: FlightDeal[] = [
  {
    from: "New York",
    to: "Paris",
    departDate: "Mar 15",
    returnDate: "Mar 28",
    price: 489,
    originalPrice: 799,
    airline: "Air France",
    stops: "Non-stop",
  },
  {
    from: "Los Angeles",
    to: "Tokyo",
    departDate: "Apr 5",
    returnDate: "Apr 18",
    price: 645,
    originalPrice: 1120,
    airline: "ANA",
    stops: "1 stop",
  },
  {
    from: "Chicago",
    to: "London",
    departDate: "May 10",
    returnDate: "May 24",
    price: 425,
    originalPrice: 680,
    airline: "British Airways",
    stops: "Non-stop",
  },
  {
    from: "Miami",
    to: "Barcelona",
    departDate: "Jun 1",
    returnDate: "Jun 14",
    price: 395,
    originalPrice: 720,
    airline: "Iberia",
    stops: "1 stop",
  },
  {
    from: "Seattle",
    to: "Amsterdam",
    departDate: "Jul 8",
    returnDate: "Jul 22",
    price: 510,
    originalPrice: 890,
    airline: "KLM",
    stops: "Non-stop",
  },
  {
    from: "Boston",
    to: "Rome",
    departDate: "Aug 12",
    returnDate: "Aug 26",
    price: 455,
    originalPrice: 795,
    airline: "ITA Airways",
    stops: "1 stop",
  },
];

export default function FlightRoutes() {
  const getSavingsPercent = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-background-light to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold">
              ✈️ Exclusive Flight Deals
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Unbeatable Prices on
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Popular Routes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of incredible flight deals to
            dream destinations worldwide
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDeals.map((deal, index) => {
            const savings = getSavingsPercent(deal.originalPrice, deal.price);

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Header */}
                <div className="h-2 bg-gradient-to-r from-primary via-primary-light to-primary"></div>

                <div className="p-6">
                  {/* Route */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          {deal.from}
                        </h3>
                      </div>
                      <div className="flex flex-col items-center px-3">
                        <svg
                          className="w-8 h-8 text-primary transform group-hover:translate-x-2 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                        <span className="text-xs text-gray-500 mt-1">
                          {deal.stops}
                        </span>
                      </div>
                      <div className="flex-1 text-right">
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          {deal.to}
                        </h3>
                      </div>
                    </div>

                    {/* Airline */}
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      {deal.airline}
                    </p>
                  </div>

                  {/* Dates */}
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <div className="flex-1">
                      <p className="text-gray-500 text-xs mb-1">Departure</p>
                      <p className="font-semibold text-foreground">
                        {deal.departDate}
                      </p>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-xs mb-1">Return</p>
                      <p className="font-semibold text-foreground">
                        {deal.returnDate}
                      </p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-display font-bold text-primary">
                        ${deal.price}
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        ${deal.originalPrice}
                      </span>
                    </div>
                    <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {savings}%
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:from-primary-light group-hover:to-primary">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We'll help you create a custom
            itinerary
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary font-semibold px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Explore More Deals
          </button>
        </div>
      </div>
    </section>
  );
}
