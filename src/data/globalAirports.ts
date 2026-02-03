export interface GlobalAirport {
    code: string;
    name: string;
    city: string;
    country: string;
}

// Combined US and International airports for global search
export const GLOBAL_AIRPORTS: GlobalAirport[] = [
    // Major US Airports
    { code: "ATL", name: "Hartsfield-Jackson Atlanta International", city: "Atlanta", country: "USA" },
    { code: "LAX", name: "Los Angeles International", city: "Los Angeles", country: "USA" },
    { code: "ORD", name: "O'Hare International", city: "Chicago", country: "USA" },
    { code: "DFW", name: "Dallas/Fort Worth International", city: "Dallas", country: "USA" },
    { code: "DEN", name: "Denver International", city: "Denver", country: "USA" },
    { code: "JFK", name: "John F. Kennedy International", city: "New York", country: "USA" },
    { code: "SFO", name: "San Francisco International", city: "San Francisco", country: "USA" },
    { code: "SEA", name: "Seattle-Tacoma International", city: "Seattle", country: "USA" },
    { code: "LAS", name: "Harry Reid International", city: "Las Vegas", country: "USA" },
    { code: "MCO", name: "Orlando International", city: "Orlando", country: "USA" },
    { code: "EWR", name: "Newark Liberty International", city: "Newark", country: "USA" },
    { code: "MIA", name: "Miami International", city: "Miami", country: "USA" },
    { code: "CLT", name: "Charlotte Douglas International", city: "Charlotte", country: "USA" },
    { code: "PHX", name: "Phoenix Sky Harbor International", city: "Phoenix", country: "USA" },
    { code: "IAH", name: "George Bush Intercontinental", city: "Houston", country: "USA" },
    { code: "BOS", name: "Logan International", city: "Boston", country: "USA" },
    { code: "MSP", name: "Minneapolis-St. Paul International", city: "Minneapolis", country: "USA" },
    { code: "DTW", name: "Detroit Metropolitan Wayne County", city: "Detroit", country: "USA" },
    { code: "FLL", name: "Fort Lauderdale-Hollywood International", city: "Fort Lauderdale", country: "USA" },
    { code: "LGA", name: "LaGuardia", city: "New York", country: "USA" },
    { code: "PHL", name: "Philadelphia International", city: "Philadelphia", country: "USA" },
    { code: "BWI", name: "Baltimore/Washington International", city: "Baltimore", country: "USA" },
    { code: "DCA", name: "Ronald Reagan Washington National", city: "Washington", country: "USA" },
    { code: "IAD", name: "Washington Dulles International", city: "Washington", country: "USA" },
    { code: "SLC", name: "Salt Lake City International", city: "Salt Lake City", country: "USA" },
    { code: "SAN", name: "San Diego International", city: "San Diego", country: "USA" },
    { code: "TPA", name: "Tampa International", city: "Tampa", country: "USA" },
    { code: "PDX", name: "Portland International", city: "Portland", country: "USA" },
    { code: "HNL", name: "Daniel K. Inouye International", city: "Honolulu", country: "USA" },
    { code: "BNA", name: "Nashville International", city: "Nashville", country: "USA" },
    { code: "AUS", name: "Austin-Bergstrom International", city: "Austin", country: "USA" },
    { code: "BDL", name: "Bradley International", city: "Hartford", country: "USA" },

    // Major International Airports - Europe
    { code: "LHR", name: "Heathrow Airport", city: "London", country: "United Kingdom" },
    { code: "LGW", name: "Gatwick Airport", city: "London", country: "United Kingdom" },
    { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France" },
    { code: "ORY", name: "Orly Airport", city: "Paris", country: "France" },
    { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
    { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany" },
    { code: "AMS", name: "Amsterdam Schiphol", city: "Amsterdam", country: "Netherlands" },
    { code: "MAD", name: "Adolfo Suárez Madrid–Barajas", city: "Madrid", country: "Spain" },
    { code: "BCN", name: "Barcelona–El Prat", city: "Barcelona", country: "Spain" },
    { code: "FCO", name: "Leonardo da Vinci–Fiumicino", city: "Rome", country: "Italy" },
    { code: "MXP", name: "Milan Malpensa", city: "Milan", country: "Italy" },
    { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland" },
    { code: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria" },
    { code: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland" },
    { code: "LIS", name: "Lisbon Airport", city: "Lisbon", country: "Portugal" },
    { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark" },
    { code: "OSL", name: "Oslo Gardermoen Airport", city: "Oslo", country: "Norway" },
    { code: "ARN", name: "Stockholm Arlanda", city: "Stockholm", country: "Sweden" },
    { code: "HEL", name: "Helsinki-Vantaa Airport", city: "Helsinki", country: "Finland" },
    { code: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece" },
    { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },

    // Major International Airports - Asia Pacific
    { code: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan" },
    { code: "HND", name: "Haneda Airport", city: "Tokyo", country: "Japan" },
    { code: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea" },
    { code: "PEK", name: "Beijing Capital International", city: "Beijing", country: "China" },
    { code: "PVG", name: "Shanghai Pudong International", city: "Shanghai", country: "China" },
    { code: "HKG", name: "Hong Kong International", city: "Hong Kong", country: "Hong Kong" },
    { code: "SIN", name: "Singapore Changi", city: "Singapore", country: "Singapore" },
    { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand" },
    { code: "KUL", name: "Kuala Lumpur International", city: "Kuala Lumpur", country: "Malaysia" },
    { code: "DEL", name: "Indira Gandhi International", city: "New Delhi", country: "India" },
    { code: "BOM", name: "Chhatrapati Shivaji Maharaj", city: "Mumbai", country: "India" },
    { code: "SYD", name: "Sydney Kingsford Smith", city: "Sydney", country: "Australia" },
    { code: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia" },
    { code: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand" },

    // Major International Airports - Middle East
    { code: "DXB", name: "Dubai International", city: "Dubai", country: "UAE" },
    { code: "AUH", name: "Abu Dhabi International", city: "Abu Dhabi", country: "UAE" },
    { code: "DOH", name: "Hamad International", city: "Doha", country: "Qatar" },
    { code: "TLV", name: "Ben Gurion Airport", city: "Tel Aviv", country: "Israel" },
    { code: "JED", name: "King Abdulaziz International", city: "Jeddah", country: "Saudi Arabia" },

    // Major International Airports - Americas
    { code: "YYZ", name: "Toronto Pearson International", city: "Toronto", country: "Canada" },
    { code: "YVR", name: "Vancouver International", city: "Vancouver", country: "Canada" },
    { code: "YUL", name: "Montréal-Trudeau International", city: "Montreal", country: "Canada" },
    { code: "MEX", name: "Mexico City International", city: "Mexico City", country: "Mexico" },
    { code: "CUN", name: "Cancún International", city: "Cancun", country: "Mexico" },
    { code: "GRU", name: "São Paulo–Guarulhos", city: "São Paulo", country: "Brazil" },
    { code: "GIG", name: "Rio Galeão International", city: "Rio de Janeiro", country: "Brazil" },
    { code: "EZE", name: "Ministro Pistarini International", city: "Buenos Aires", country: "Argentina" },
    { code: "SCL", name: "Arturo Merino Benítez", city: "Santiago", country: "Chile" },
    { code: "BOG", name: "El Dorado International", city: "Bogota", country: "Colombia" },
    { code: "LIM", name: "Jorge Chávez International", city: "Lima", country: "Peru" },

    // Major International Airports - Africa
    { code: "JNB", name: "O.R. Tambo International", city: "Johannesburg", country: "South Africa" },
    { code: "CPT", name: "Cape Town International", city: "Cape Town", country: "South Africa" },
    { code: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt" },
    { code: "NBO", name: "Jomo Kenyatta International", city: "Nairobi", country: "Kenya" },
    { code: "CMN", name: "Mohammed V International", city: "Casablanca", country: "Morocco" },

    // Caribbean
    { code: "SJU", name: "Luis Muñoz Marín International", city: "San Juan", country: "Puerto Rico" },
    { code: "NAS", name: "Lynden Pindling International", city: "Nassau", country: "Bahamas" },
    { code: "MBJ", name: "Sangster International", city: "Montego Bay", country: "Jamaica" },
    { code: "PUJ", name: "Punta Cana International", city: "Punta Cana", country: "Dominican Republic" },
    { code: "AUA", name: "Queen Beatrix International", city: "Oranjestad", country: "Aruba" },
];
