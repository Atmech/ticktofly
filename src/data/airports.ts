export interface Airport {
    code: string;
    name: string;
    city: string;
    state: string;
}

export const US_AIRPORTS: Airport[] = [
    // Major International Hubs
    { code: "ATL", name: "Hartsfield-Jackson Atlanta International", city: "Atlanta", state: "GA" },
    { code: "LAX", name: "Los Angeles International", city: "Los Angeles", state: "CA" },
    { code: "ORD", name: "O'Hare International", city: "Chicago", state: "IL" },
    { code: "DFW", name: "Dallas/Fort Worth International", city: "Dallas", state: "TX" },
    { code: "DEN", name: "Denver International", city: "Denver", state: "CO" },
    { code: "JFK", name: "John F. Kennedy International", city: "New York", state: "NY" },
    { code: "SFO", name: "San Francisco International", city: "San Francisco", state: "CA" },
    { code: "SEA", name: "Seattle-Tacoma International", city: "Seattle", state: "WA" },
    { code: "LAS", name: "Harry Reid International", city: "Las Vegas", state: "NV" },
    { code: "MCO", name: "Orlando International", city: "Orlando", state: "FL" },
    { code: "EWR", name: "Newark Liberty International", city: "Newark", state: "NJ" },
    { code: "MIA", name: "Miami International", city: "Miami", state: "FL" },
    { code: "CLT", name: "Charlotte Douglas International", city: "Charlotte", state: "NC" },
    { code: "PHX", name: "Phoenix Sky Harbor International", city: "Phoenix", state: "AZ" },
    { code: "IAH", name: "George Bush Intercontinental", city: "Houston", state: "TX" },
    { code: "BOS", name: "Logan International", city: "Boston", state: "MA" },
    { code: "MSP", name: "Minneapolis-St. Paul International", city: "Minneapolis", state: "MN" },
    { code: "DTW", name: "Detroit Metropolitan Wayne County", city: "Detroit", state: "MI" },
    { code: "FLL", name: "Fort Lauderdale-Hollywood International", city: "Fort Lauderdale", state: "FL" },
    { code: "LGA", name: "LaGuardia", city: "New York", state: "NY" },

    // Other Major Airports
    { code: "PHL", name: "Philadelphia International", city: "Philadelphia", state: "PA" },
    { code: "BWI", name: "Baltimore/Washington International", city: "Baltimore", state: "MD" },
    { code: "DCA", name: "Ronald Reagan Washington National", city: "Washington", state: "DC" },
    { code: "IAD", name: "Washington Dulles International", city: "Washington", state: "DC" },
    { code: "SLC", name: "Salt Lake City International", city: "Salt Lake City", state: "UT" },
    { code: "MDW", name: "Chicago Midway International", city: "Chicago", state: "IL" },
    { code: "SAN", name: "San Diego International", city: "San Diego", state: "CA" },
    { code: "TPA", name: "Tampa International", city: "Tampa", state: "FL" },
    { code: "PDX", name: "Portland International", city: "Portland", state: "OR" },
    { code: "HNL", name: "Daniel K. Inouye International", city: "Honolulu", state: "HI" },
    { code: "BNA", name: "Nashville International", city: "Nashville", state: "TN" },
    { code: "AUS", name: "Austin-Bergstrom International", city: "Austin", state: "TX" },
    { code: "DAL", name: "Dallas Love Field", city: "Dallas", state: "TX" },
    { code: "HOU", name: "William P. Hobby", city: "Houston", state: "TX" },
    { code: "OAK", name: "Oakland International", city: "Oakland", state: "CA" },
    { code: "STL", name: "St. Louis Lambert International", city: "St. Louis", state: "MO" },
    { code: "RDU", name: "Raleigh-Durham International", city: "Raleigh/Durham", state: "NC" },
    { code: "MSY", name: "Louis Armstrong New Orleans International", city: "New Orleans", state: "LA" },
    { code: "SAT", name: "San Antonio International", city: "San Antonio", state: "TX" },
    { code: "SMF", name: "Sacramento International", city: "Sacramento", state: "CA" },
    { code: "MCI", name: "Kansas City International", city: "Kansas City", state: "MO" },
    { code: "RSW", name: "Southwest Florida International", city: "Fort Myers", state: "FL" },
    { code: "SNA", name: "John Wayne", city: "Orange County", state: "CA" },
    { code: "PIT", name: "Pittsburgh International", city: "Pittsburgh", state: "PA" },
    { code: "CVG", name: "Cincinnati/Northern Kentucky International", city: "Cincinnati", state: "OH" },
    { code: "CMH", name: "John Glenn Columbus International", city: "Columbus", state: "OH" },
    { code: "IND", name: "Indianapolis International", city: "Indianapolis", state: "IN" },
    { code: "CLE", name: "Cleveland Hopkins International", city: "Cleveland", state: "OH" },
    { code: "MKE", name: "Milwaukee Mitchell International", city: "Milwaukee", state: "WI" },
    { code: "SJC", name: "Norman Y. Mineta San Jose International", city: "San Jose", state: "CA" },

    // Connecticut (user's region)
    { code: "BDL", name: "Bradley International", city: "Hartford/Springfield", state: "CT" },
    { code: "HVN", name: "Tweed New Haven", city: "New Haven", state: "CT" },

    // Other Notable Airports
    { code: "ABQ", name: "Albuquerque International Sunport", city: "Albuquerque", state: "NM" },
    { code: "BUF", name: "Buffalo Niagara International", city: "Buffalo", state: "NY" },
    { code: "BUR", name: "Hollywood Burbank", city: "Burbank", state: "CA" },
    { code: "JAX", name: "Jacksonville International", city: "Jacksonville", state: "FL" },
    { code: "MEM", name: "Memphis International", city: "Memphis", state: "TN" },
    { code: "OMA", name: "Eppley Airfield", city: "Omaha", state: "NE" },
    { code: "ONT", name: "Ontario International", city: "Ontario", state: "CA" },
    { code: "PBI", name: "Palm Beach International", city: "West Palm Beach", state: "FL" },
    { code: "PVD", name: "Rhode Island T. F. Green International", city: "Providence", state: "RI" },
    { code: "RNO", name: "Reno-Tahoe International", city: "Reno", state: "NV" },
    { code: "ROC", name: "Greater Rochester International", city: "Rochester", state: "NY" },
    { code: "SJU", name: "Luis Muñoz Marín International", city: "San Juan", state: "PR" },
    { code: "TUS", name: "Tucson International", city: "Tucson", state: "AZ" },
];
