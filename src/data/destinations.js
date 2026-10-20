export const DESTINATIONS = [
  {
    id: "kenya",
    name: "Kenya",
    country: "Kenya",
    region: "Safari, Coast & City",
    tags: ["Safari", "Wildlife", "Coastal", "City", "Culture"],
    coordinates: "1.29°S, 36.82°E",
    tagline: "Coastlines, capital city and classic savannah, all in one country",
    accent: "teal",
    heroImage: "KENYA HERO CLIENT BALLOONS",
    cardImage: "KENYA WILD DOGS",
    description:
      "Kenya pairs the classic safari circuit, including the Maasai Mara, Amboseli, Samburu and beyond, with a working coastline of dhow harbours and beaches protected by reefs, plus a capital city where wildlife and skyline share a fence line.",
    bestTime: "June – October (dry season) for most parks; the coast is a destination throughout the year",
    highlights: [
      "The Maasai Mara's Great Migration and big cat sightings",
      "Amboseli's elephant herds beneath Mount Kilimanjaro",
      "Mombasa's Old Town and coastline lined with dhows",
      "Nairobi, the only capital with a national park at its edge",
    ],
    quote: "Kenya was never just one trip. It's a coastline, a capital and half a dozen distinct safari ecosystems, each worth its own itinerary.",
    categories: [
      {
        title: "Wildlife & Safari",
        icon: "PawPrint",
        items: [
          { name: "Maasai Mara", image: "MAASAI MARA CLIENT PHOTO", blurb: "Kenya's best-known safari reserve and home to the Great Migration. Explore its full guide on the Maasai Mara page.", linksTo: "maasai-mara", linksToLabel: "Maasai Mara" },
          { name: "Amboseli National Park", image: "AMBOSELI ELEPHANTS", blurb: "Famous for its large elephant herds and spectacular views of Mount Kilimanjaro.", linksTo: "amboseli", linksToLabel: "Amboseli" },
          { name: "Samburu Game Reserve", image: "SAMBURU ZEBRA", blurb: "Discover rugged northern landscapes and unique wildlife, including species rarely found elsewhere in Kenya.", linksTo: "samburu", linksToLabel: "Samburu" },
          { name: "Lake Nakuru National Park", image: "LAKE NAKURU RHINO", blurb: "Explore a scenic Rift Valley park known for rhinos, flamingos, diverse birdlife and beautiful lake views.", linksTo: "lake-nakuru", linksToLabel: "Lake Nakuru" },
          { name: "Lake Naivasha", image: "LAKE NAIVASHA BIRD", blurb: "Enjoy a peaceful freshwater lake surrounded by wildlife and birdlife, with opportunities for boat rides and nature experiences.", linksTo: "lake-naivasha", linksToLabel: "Lake Naivasha" },
          { name: "Tsavo National Park", image: "TSAVO NATIONAL PARK CLIENT PHOTO", blurb: "Discover one of Kenya's largest wilderness areas, famous for elephants and dramatic landscapes." },
          { name: "Taita Hills", image: "TAITA HILLS CLIENT PHOTO", blurb: "Explore scenic hills, rich wildlife and intimate safari experiences in a private conservancy." },
          { name: "Nairobi National Park", image: "NAIROBI NATIONAL PARK GATE", blurb: "A unique safari park bordering Nairobi's skyline, home to lion, rhino and giraffe.", linksTo: "nairobi", linksToLabel: "Nairobi" },
        ],
      },
      {
        title: "Mountains & Adventure",
        icon: "Compass",
        items: [
          { name: "Mount Kenya", image: "MOUNT KENYA ANTELOPE IMAGE 266834", blurb: "Trek through high-altitude forests and alpine landscapes on routes around Africa's second-highest mountain.", activities: ["Guided trekking", "Mountain scenery"] },
          { name: "Hell's Gate National Park", image: "HELL'S GATE NATIONAL PARK EXCURSION", blurb: "Explore dramatic cliffs, gorges and geothermal landscapes on foot or by bicycle.", activities: ["Hiking", "Cycling", "Wildlife viewing"] },
          { name: "Shaba Reserve Adventure", image: "SHABA ADVENTURE CLIENT PHOTO", blurb: "Explore Shaba's rocky river landscapes and northern Kenya wilderness.", activities: ["Scenic exploration", "Wildlife viewing"] },
        ],
      },
      {
        title: "Coast & Islands",
        icon: "Waves",
        items: [
          { name: "Mombasa", image: "MOMBASA CLIENT BEACH PHOTO", blurb: "Kenya's historic harbour city, with beaches lined by dhows. Explore its full guide on the Mombasa page.", linksTo: "mombasa", linksToLabel: "Mombasa" },
          { name: "Diani Beach", image: "DIANI BEACH — SHORELINE IMAGE", blurb: "Ten kilometres of white sand on Kenya's south coast. Explore its full guide on the Diani page.", linksTo: "diani", linksToLabel: "Diani" },
          { name: "Kilifi", image: "MOMBASA — COASTLINE IMAGE", blurb: "A quiet beach town near Malindi, known for its marine national park and reef diving." },
          { name: "Wasini Island", hideImage: true, blurb: "An island off Shimoni on Kenya's south coast, known for dolphin tours and marine park excursions." },
          { name: "Chale Island", hideImage: true, blurb: "A small island off Diani, ringed by coral reef and beach." },
          { name: "Shimoni", hideImage: true, blurb: "A coastal village near Wasini Island and a departure point for dolphin watching and reef excursions." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Fort Jesus & Mombasa Old Town", image: null, blurb: "Visit the 16th-century Portuguese fort and explore the surrounding coral stone lanes and carved Swahili doors." },
          { name: "Maasai Cultural Visits", image: null, blurb: "Meet local hosts and learn about Maasai beadwork, traditions and community life through respectful, hosted visits." },
          { name: "Nairobi City Tour", image: "NAIROBI CITY TOUR", blurb: "Discover Nairobi with stops at the National Museum, Jamia Mosque, City Market and the Kenyatta International Convention Centre." },
        ],
      },
    ],
    gallery: ["CHEETAHS ON THE CHASE", "MOMBASA TUDOR CREEK AT DUSK", "GIRAFFE CENTRE", "KENYA CLIENT WOMAN BY TREE", "KENYA WILD DOGS", "KENYA CLIENT CHEETAHS", "KENYA CANOE WETLAND VISIT", "KENYA ANTELOPE PAIR", "KENYA KUDU FROM BEHIND", "KENYA GAZELLE"],
  },
  {
    id: "amboseli", name: "Amboseli National Park", country: "Kenya", region: "Safari",
    hidden: true, tags: ["Wildlife", "Safari", "Birdlife"], coordinates: "2.65°S, 37.26°E",
    tagline: "Elephants beneath the wide skies of Mount Kilimanjaro", accent: "gold",
    heroImage: "AMBOSELI KILIMANJARO", cardImage: "AMBOSELI ELEPHANTS",
    description: "Amboseli is known for its large elephant herds and open views toward Mount Kilimanjaro. Its swamps, plains and acacia woodland support a rich variety of wildlife.",
    bestTime: "June – October and January – February",
    highlights: ["Elephant herds", "Views of Mount Kilimanjaro", "Swamps and open plains"],
    quote: "In Amboseli, elephants move across the plain beneath one of Africa’s most recognisable mountain silhouettes.",
    categories: [{ title: "Wildlife & Scenery", icon: "PawPrint", items: [
      { name: "Elephants of Amboseli", image: "AMBOSELI ELEPHANTS", blurb: "See Amboseli’s elephant herds moving beneath Kilimanjaro." },
      { name: "Amboseli Birdlife", image: "AMBOSELI GRASSLAND BIRD CLIENT", gallery: ["AMBOSELI WETLAND BIRD CLIENT", "AMBOSELI GRASSLAND BIRD CLIENT"], blurb: "Look for birds across Amboseli’s wetlands and open plains, from waterbirds among the reeds to ground birds in the grasslands." },
    ] }],
    gallery: ["AMBOSELI ELEPHANTS", "AMBOSELI WETLAND BIRD CLIENT", "AMBOSELI GRASSLAND BIRD CLIENT"],
  },
  {
    id: "samburu", name: "Samburu Game Reserve", country: "Kenya", region: "Safari",
    hidden: true, tags: ["Wildlife", "Safari", "Wilderness", "Culture"], coordinates: "0.62°N, 37.53°E",
    tagline: "Wildlife and rugged landscapes in Kenya’s northern frontier", accent: "gold",
    heroImage: "SAMBURU LANDSCAPE", cardImage: "SAMBURU ZEBRA",
    description: "Samburu’s dry northern landscape is home to distinctive wildlife and the Ewaso Ng’iro River, which draws animals through the reserve.",
    bestTime: "June – October",
    highlights: ["Grevy’s zebra", "Wildlife of the dry country", "Rugged northern scenery"],
    quote: "Samburu’s wildlife and dry country scenery give Kenya’s northern safari circuit its own character.",
    categories: [{ title: "Wildlife", icon: "PawPrint", items: [
      { name: "Northern Kenya Wildlife", image: "SAMBURU ANTELOPE", blurb: "Look for wildlife adapted to the reserve’s dry northern habitats." },
    ] }],
    gallery: ["SAMBURU ANTELOPE", "SAMBURU BIRD AND CHICK"],
  },
  {
    id: "lake-nakuru", name: "Lake Nakuru National Park", country: "Kenya", region: "Safari",
    hidden: true, tags: ["Wildlife", "Safari"], coordinates: "0.37°S, 36.09°E",
    tagline: "Rift Valley lake scenery and a sanctuary for rhinos", accent: "teal",
    heroImage: "LAKE NAKURU SCENIC LAKE", cardImage: "LAKE NAKURU RHINO",
    description: "Lake Nakuru National Park combines Rift Valley lake scenery with woodland and grassland habitats that support rhinos, antelope and abundant birdlife.",
    bestTime: "Throughout the year; June – February is generally drier",
    highlights: ["Rhino sanctuary", "Lake and escarpment views", "Birdlife and antelope"],
    quote: "At Lake Nakuru, wildlife sightings and changing lake views share the same compact park.",
    categories: [{ title: "Wildlife & Scenery", icon: "PawPrint", items: [
      { name: "Rhino Sanctuary", image: "RHINO SANCTUARY CLIENT PHOTO", blurb: "Look for black and white rhinos among the park’s woodlands and open grasslands." },
    ] }, { title: "Birdlife", icon: "Waves", items: [
      { name: "Lake Nakuru Birdlife", image: "LAKE NAKURU FLAMINGOS", blurb: "See flamingos and other waterbirds along the lake’s shores and wetlands." },
    ] }],
    gallery: ["LAKE NAKURU ANTELOPE", "LAKE NAKURU RHINO", "LAKE NAKURU CLIENT GIRAFFE ZEBRA"],
  },
  {
    id: "lake-naivasha", name: "Lake Naivasha", country: "Kenya", region: "Rift Valley",
    hidden: true, tags: ["Wildlife", "Birdlife"], coordinates: "0.76°S, 36.42°E",
    tagline: "Freshwater shores alive with birdlife and wildlife",
    accent: "teal", heroImage: "SHOREBIRDS ON SAND", cardImage: "LAKE NAIVASHA BIRD",
    description: "Lake Naivasha is a freshwater lake in Kenya’s Rift Valley, known for its birdlife, papyrus-lined shores and boat trips among hippos.",
    bestTime: "June – October and January – February",
    highlights: ["Birdlife along the lake shore", "Boat trips on the freshwater lake", "Hippos and other wildlife"],
    quote: "A boat on Lake Naivasha brings you close to the birds and wildlife that gather along its quiet shores.",
    categories: [{ title: "Lake & Birdlife", icon: "Waves", items: [
      { name: "Lake & Birdlife", image: "FLAMINGO BY WATER", blurb: "Look for flamingos and other waterbirds along Lake Naivasha’s freshwater shores." },
    ] }],
    gallery: ["LAKE NAIVASHA BIRD", "WADING BIRD AMONG REEDS", "GREY HERON IN SHALLOWS"],
  },
  {
    id: "mombasa",
    name: "Mombasa",
    country: "Kenya",
    region: "Coastal",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["Coastal", "City", "Culture"],
    coordinates: "4.05°S, 39.66°E",
    tagline: "Where the Indian Ocean meets centuries of Swahili history",
    accent: "teal",
    heroImage: "MOMBASA — HERO IMAGE",
    cardImage: "MOMBASA CLIENT BEACH PHOTO",
    description:
      "Kenya's old harbour city layers Swahili, Portuguese and Omani history along a coastline of warm water protected by reefs. Spend your mornings in the coral stone lanes of Old Town and your afternoons on sand the colour of bone china. Mombasa rewards a slow itinerary.",
    bestTime: "June – March",
    highlights: [
      "Old Town's carved doors and coral stone alleys",
      "Fort Jesus, a 16th-century Portuguese garrison",
      "Beaches protected by reefs from Nyali to Diani",
      "Dhow sails at sunset off Tudor Creek",
    ],
    quote: "Mombasa doesn't perform for visitors. It simply continues, and lets you in.",
    categories: [
      {
        title: "Beaches",
        icon: "Waves",
        items: [
          { name: "Nyali Beach", blurb: "A wide sandy beach protected by reefs, a short drive from the city centre. Its calm water is good for families." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Old Town", blurb: "Narrow coral stone streets lined with intricately carved Swahili and Omani doors." },
        ],
      },
      {
        title: "Dining",
        icon: "UtensilsCrossed",
        items: [
          { name: "Swahili Seafood Kitchens", blurb: "Curries with coconut and tamarind, grilled kingfish and biryani rooted in centuries of trade." },
        ],
      },
      {
        title: "Activities",
        icon: "Compass",
        items: [
          { name: "Dhow Sunset Cruise", image: "GUESTS BOARDING BOAT", blurb: "Traditional sail out past the harbour, drinks and grilled snacks included." },
          { name: "Mombasa Marine Park", blurb: "Snorkelling over shallow coral gardens from a boat with a glass bottom." },
        ],
      },
    ],
    gallery: ["OLD TOWN DOORWAY", "FORT JESUS RAMPARTS", "DHOW AT SUNSET", "NYALI BEACH AERIAL", "SWAHILI SEAFOOD PLATE", "TUDOR CREEK", "DHOW HARBOUR AT DUSK"],
  },
  {
    id: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    region: "City",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["City", "Wildlife", "Culture"],
    coordinates: "1.29°S, 36.82°E",
    tagline: "The only capital in the world with a national park at its edge",
    accent: "gold",
    heroImage: "NAIROBI — SKYLINE HERO IMAGE",
    cardImage: "NAIROBI — SKYLINE IMAGE",
    description:
      "Nairobi moves between two identities without friction. It's a fast, design-led East African capital where giraffes graze against a backdrop of glass towers, and a natural first or last stop on an East African itinerary.",
    bestTime: "Throughout the year; driest Jun–Oct",
    highlights: [
      "Nairobi National Park, wildlife within city limits",
      "The Nairobi Gallery and Maasai Market for design and craft",
      "A growing restaurant scene led by talented chefs",
      "Giraffe Centre and the David Sheldrick elephant nursery",
    ],
    quote: "Nairobi is proof that a capital city and a savannah can share a fence line.",
    categories: [
      {
        title: "Wildlife",
        icon: "PawPrint",
        items: [
          { name: "Sheldrick Wildlife Trust", blurb: "Orphaned elephant calves, raised by hand and readied for release into the wild." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Maasai Market", blurb: "A rotating open-air market for beadwork, textiles and carvings, sold directly by makers." },
        ],
      },
      {
        title: "Dining",
        icon: "UtensilsCrossed",
        items: [
          { name: "Chef-Led Tasting Rooms", blurb: "A new generation of Nairobi kitchens reworking Kenyan staples with technique and provenance." },
          { name: "Nyama Choma Gardens", blurb: "Grilling over open fires, best eaten outdoors and shared late into the evening." },
        ],
      },
    ],
    gallery: ["NAIROBI SKYLINE AT DUSK", "GIRAFFE CENTRE", "MAASAI MARKET COMMUNITY", "NATIONAL PARK LIONESS", "ROOFTOP DINING", "BLACK RHINO SIGHTING"],
  },
  {
    id: "diani",
    name: "Diani Beach",
    country: "Kenya",
    region: "Coastal",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["Coastal", "Adventure"],
    coordinates: "4.28°S, 39.59°E",
    tagline: "Ten kilometres of white sand backed by ancient coastal forest",
    accent: "teal",
    heroImage: "DIANI BEACH — HERO IMAGE",
    cardImage: "DIANI BEACH — SHORELINE IMAGE",
    description:
      "South of Mombasa, Diani offers a long palm lined beach and some of the clearest water on the East African coast, backed by remnant forest that still holds colobus monkeys.",
    bestTime: "December – March",
    highlights: [
      "Ten uninterrupted kilometres of white sand",
      "Kite surfing conditions among East Africa's best",
      "Colobus Conservation forest walks",
      "Kaya Kinondo, a sacred Mijikenda forest",
    ],
    quote: "The sand here is fine enough to forget you're wearing shoes at all.",
    categories: [
      {
        title: "Nature",
        icon: "TreePine",
        items: [
          { name: "Kaya Kinondo Sacred Forest", blurb: "A living Mijikenda sacred site, still used for ceremony, opened to visitors with a guide." },
        ],
      },
    ],
    gallery: ["DIANI SHORELINE", "KITE SURFER AT SUNSET", "COLOBUS MONKEY", "MAKUTI BEACH LOUNGERS"],
  },
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    country: "Kenya",
    region: "Safari",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["Wildlife", "Safari"],
    coordinates: "1.50°S, 35.14°E",
    tagline: "The grass sea where the Great Migration crosses the Mara River",
    accent: "gold",
    heroImage: "MAASAI MARA CLIENT PORTRAIT",
    cardImage: "MAASAI MARA CLIENT PORTRAIT",
    description:
      "An extension of Tanzania's Serengeti across the border, the Mara is a plain of short grass stretching to the horizon, dense with resident wildlife throughout the year and the stage for the wildebeest migration's most dramatic river crossings.",
    bestTime: "July – October, for the migration",
    highlights: [
      "Wildebeest and zebra river crossings, Jul–Oct",
      "Dense, resident lion and cheetah populations",
      "Sunrise balloon flights over the plains",
      "Maasai cultural visits with local communities",
    ],
    quote: "There is a particular quiet to the Mara at first light, just before the plain wakes up.",
    categories: [
      {
        title: "Wildlife",
        icon: "PawPrint",
        items: [
          { name: "Great Migration Crossings", image: "WILDEBEEST RIVER CROSSING", blurb: "Watch a million wildebeest and zebra cross the Mara River, home to crocodiles, from July to October." },
          { name: "Big Cat Territories", image: "BIG CAT TERRITORIES", blurb: "Some of Africa's best studied lion prides and a healthy resident cheetah population." },
          { name: "The Big Five", image: "MAASAI MARA BIG FIVE BUFFALO", blurb: "Look for Lion, Leopard, African Elephant, Black Rhino, Cape Buffalo on game drives across the Maasai Mara" },
        ],
      },
      {
        title: "Activities",
        icon: "Compass",
        items: [
          { name: "Hot Air Balloon Safari", image: "MAASAI MARA BALLOON SUNSET 273236", blurb: "A sunrise flight over the plains, followed by a champagne bush breakfast on landing." },
          { name: "Guided Game Drives", image: "LOGISTICS SAFARI VEHICLE WILDLIFE", blurb: "Dawn and dusk drives with trackers who read the plain like a shared language." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Maasai Village Visit", blurb: "A hosted visit to a local manyatta, with beadwork, song and insight into a pastoral way of life." },
        ],
      },
    ],
    gallery: ["MAASAI MARA LEOPARD IN TREE 287901", "HOT AIR BALLOONS AT DAWN", "LION PRIDE ON PLAIN", "MAASAI VILLAGE VISIT", "ELEPHANT ON THE PLAINS", "CHEETAHS ON THE CHASE", "LIONS RESTING BY THE TRACK", "BALLOON LAUNCH AT DAWN", "MAASAI MARA CLIENT ZEBRA HERD", "MAASAI MARA BALLOON SUNSET 273236", "MAASAI MARA SUNSET TREE 287881", "MAASAI MARA CULTURAL GATHERING"],
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    region: "Islands",
    // Now reachable via its country's cross-link (see VISIBLE_DESTINATIONS,
    // which excludes anything hidden: true) rather than as a top-level card.
    hidden: true,
    tags: ["Islands", "Coastal", "Culture"],
    coordinates: "6.16°S, 39.20°E",
    tagline: "Spice island shores off the Tanzanian coast",
    accent: "teal",
    heroImage: "ZANZIBAR — HERO IMAGE",
    cardImage: "ZANZIBAR — TURQUOISE WATER IMAGE",
    description:
      "Zanzibar pairs Stone Town's dense old quarter, recognised by UNESCO, with a ring of turquoise coastline. Clove and cardamom farms sit inland; further out, sandbanks appear and vanish with the tide.",
    bestTime: "June – October",
    highlights: [
      "Stone Town's alleyways, markets and rooftop cafés",
      "Spice farm tours through clove and cardamom groves",
      "Sandbank swimming trips at low tide",
      "Jozani Forest, home to the red colobus monkey",
    ],
    quote: "You can smell Zanzibar before you see it: clove, salt and frangipani.",
    categories: [
      {
        title: "Beaches",
        icon: "Waves",
        items: [
          { name: "Nungwi & Kendwa", blurb: "The island's northern tip has white sand, turquoise shallows and reliably calm water." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Stone Town", blurb: "A dense UNESCO old quarter of coral stone buildings, carved doors and spice markets." },
          { name: "Spice Farm Tours", blurb: "Guided walks through clove, cardamom and vanilla plantations, with tastings." },
        ],
      },
      {
        title: "Nature",
        icon: "TreePine",
        items: [
          { name: "Jozani Forest", blurb: "The last significant native forest on the island, home to the endemic red colobus." },
        ],
      },
    ],
    gallery: ["STONE TOWN ALLEY", "NUNGWI SHORELINE", "SPICE FARM CLOVES", "SANDBANK AT LOW TIDE", "RED COLOBUS MONKEY"],
  },
  {
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    region: "City",
    // Cape Town is reachable directly (own route, own experiences/dining) but
    // is no longer a top-level destination — it now lives under "South Africa".
    // See VISIBLE_DESTINATIONS below, which excludes anything hidden: true.
    hidden: true,
    tags: ["City", "Coastal", "Culture", "Adventure"],
    coordinates: "33.92°S, 18.42°E",
    tagline: "A city held between a mountain with a level summit and two oceans",
    accent: "gold",
    heroImage: "CAPE TOWN — HERO IMAGE",
    cardImage: "CAPE TOWN — TABLE MOUNTAIN IMAGE",
    description:
      "Table Mountain anchors a city that shifts from vineyard valleys to Atlantic surf breaks within an hour's drive. Cape Town's food and wine culture is among the continent's most internationally decorated.",
    bestTime: "November – March",
    highlights: [
      "Table Mountain cable car and hiking trails",
      "Cape Winelands day trips to Stellenbosch and Franschhoek",
      "Boulders Beach's resident African penguin colony",
      "Bo-Kaap's coloured houses and Cape Malay cuisine",
    ],
    quote: "Few cities put a mountain, two oceans and a wine valley within the same afternoon.",
    categories: [
      {
        title: "Nature",
        icon: "TreePine",
        items: [
        ],
      },
      {
        title: "Dining",
        icon: "UtensilsCrossed",
        items: [
          { name: "Winelands Tasting Rooms", blurb: "Estate lunches paired with acclaimed wines from Stellenbosch and Franschhoek." },
          { name: "Bo-Kaap Cape Malay Kitchens", blurb: "Bredies simmered slowly and bright spice pastes rooted in Cape Malay history." },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Bo-Kaap", blurb: "A hillside quarter of brightly painted houses and centuries of Cape Malay heritage." },
          { name: "Robben Island", blurb: "A ferry crossing to the former prison island, guided by former political prisoners." },
        ],
      },
    ],
    gallery: ["TABLE MOUNTAIN AERIAL", "BOULDERS BEACH PENGUINS", "BO-KAAP HOUSES", "WINELANDS VINEYARD", "ATLANTIC COASTLINE"],
  },
  {
    id: "south-africa",
    name: "South Africa",
    country: "South Africa",
    region: "Safari & City",
    tags: ["Safari", "Wildlife", "City", "Coastal", "Culture"],
    coordinates: "26.20°S, 28.05°E",
    tagline: "From Kruger's bushveld to Cape Town's mountain and ocean skyline",
    accent: "gold",
    heroImage: "CAPE TOWN — HERO IMAGE",
    cardImage: "CAPE TOWN — TABLE MOUNTAIN IMAGE",
    description:
      "South Africa pairs one of the continent's most storied safari parks with a city framed by an iconic mountain with a level summit and two oceans. Kruger National Park anchors the wildlife side of an itinerary here; Cape Town anchors the food, wine and coastline side.",
    bestTime: "May – September (dry season) for Kruger's best game viewing; November – March for Cape Town",
    highlights: [
      "Kruger National Park's reliable Big Five sightings",
      "Table Mountain cable car and hiking trails",
      "Cape Winelands day trips to Stellenbosch and Franschhoek",
      "Boulders Beach's resident African penguin colony",
      "Bo-Kaap's coloured houses and Cape Malay cuisine",
    ],
    quote: "Few countries put a Big Five reserve and a city framed by mountains and ocean on the same itinerary without a long flight in between.",
    categories: [
      {
        title: "Locations",
        icon: "Compass",
        items: [
          { name: "Kruger National Park", region: "Mpumalanga & Limpopo", blurb: "Experience one of Africa's premier safari destinations, home to the Big Five and an incredible diversity of wildlife.", activities: ["Game drives", "Walking safaris"] },
          { name: "Cape Town", blurb: "Discover a vibrant coastal city combining Table Mountain, beautiful beaches, outstanding dining and unforgettable scenery.", linksTo: "cape-town", linksToLabel: "Cape Town" },
        ],
      },
    ],
    gallery: ["TABLE MOUNTAIN AERIAL", "TABLE MOUNTAIN WINELANDS IMAGE"],
  },
  {
    id: "tanzania",
    name: "Tanzania",
    country: "Tanzania",
    region: "Safari & Islands",
    tags: ["Safari", "Wildlife", "Islands", "Culture"],
    coordinates: "3.37°S, 36.68°E",
    tagline: "Serengeti plains, crater highlands and spice island coastline in one country",
    accent: "teal",
    heroImage: "TANZANIA — HERO IMAGE",
    cardImage: "TANZANIA — SERENGETI IMAGE",
    description:
      "Tanzania spans the classic northern safari circuit of the Serengeti and Ngorongoro Crater, the peak of Mount Kilimanjaro, and the spice-scented lanes of Zanzibar across the channel. Few countries hold this much variety together without feeling stretched thin.",
    bestTime: "June – October (dry season); late January – March for the calving season",
    highlights: [
      "The Great Migration crossing the Serengeti's plains",
      "Ngorongoro Crater's dense and distinctive ecosystem",
      "Mount Kilimanjaro, Africa's highest peak",
      "Stone Town and the spice-scented shores of Zanzibar",
    ],
    quote: "Tanzania doesn't ask you to choose between mountain, plain and coastline. It gives you all three.",
    categories: [
      {
        title: "Wildlife & Safari",
        icon: "PawPrint",
        items: [
          { name: "Serengeti National Park", region: "Northern Circuit", image: "SERENGETI CLIENT BALLOON", blurb: "Experience endless savannahs, abundant wildlife and the spectacular Great Migration.", activities: ["Game drives", "Hot air balloon safaris"] },
          { name: "Ngorongoro Conservation Area", region: "Northern Circuit", image: "NGORONGORO CRATER RIM", blurb: "Descend into the spectacular Ngorongoro Crater, where an extraordinary concentration of wildlife thrives within an ancient volcanic landscape.", activities: ["Crater floor game drives", "Cultural visits"] },
          { name: "Lake Manyara National Park", region: "Northern Circuit", image: "LAKE MANYARA NATIONAL PARK", blurb: "Explore a Rift Valley landscape of lakeshore, woodland and open grassland, rich in wildlife and birdlife.", activities: ["Game drives", "Birdwatching"] },
          { name: "Tarangire National Park", region: "Northern Circuit", image: "TARANGIRE BAOBABS", blurb: "Explore a beautiful safari landscape famous for its elephants, ancient baobabs and seasonal wildlife gatherings.", activities: ["Game drives", "Walking safaris"] },
        ],
      },
      {
        title: "Mountains & Adventure",
        icon: "Compass",
        items: [
          { name: "Mount Kilimanjaro", region: "Northern Tanzania", image: "KILIMANJARO SUMMIT", blurb: "Africa's highest peak and the world's tallest mountain that stands on its own, climbed via several established routes.", activities: ["Summit trekking", "Day hikes on lower slopes"] },
        ],
      },
      {
        title: "Coast & Islands",
        icon: "Waves",
        items: [
          { name: "Zanzibar & Stone Town", image: "ZANZIBAR STONE TOWN CLIENT PHOTO", blurb: "Tanzania's spice island and its old quarter, recognised by UNESCO. Explore its full guide on the Zanzibar page.", linksTo: "zanzibar", linksToLabel: "Zanzibar" },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Maasai Cultural Experiences", image: "MAASAI CULTURAL EXPERIENCES", blurb: "Visits hosted by Maasai communities near several northern parks, offered where local hosts make them available.", activities: ["Village visits", "Beadwork demonstrations"] },
        ],
      },
    ],
    gallery: ["MAASAI CULTURAL EXPERIENCES", "SERENGETI CLIENT BALLOON", "NGORONGORO CRATER RIM", "KILIMANJARO SUMMIT", "TARANGIRE BAOBABS", "STONE TOWN SPICE TOUR IMAGE"],
  },
  {
    id: "uganda",
    name: "Uganda",
    country: "Uganda",
    region: "Safari & Forest",
    tags: ["Safari", "Wildlife", "Culture"],
    coordinates: "1.05°S, 29.63°E",
    tagline: "Mountain gorillas in the misted forests of Bwindi",
    accent: "teal",
    heroImage: "UGANDA CLIENT HERO",
    cardImage: "MOUNTAIN GORILLA CLOSE-UP",
    description:
      "Uganda's Bwindi Impenetrable National Park is one of the last strongholds of the mountain gorilla, reached through dense, ancient rainforest in the country's southwest.",
    bestTime: "June – August and December – February (drier, more comfortable trekking conditions)",
    highlights: [
      "Mountain gorilla trekking in Bwindi Impenetrable National Park",
      "Treks led by rangers through dense, ancient rainforest",
    ],
    quote: "Bwindi doesn't reveal its gorillas easily. The trek is part of what makes finding them feel earned.",
    categories: [
      {
        title: "Wildlife & Safari",
        icon: "PawPrint",
        items: [
          { name: "Bwindi Impenetrable National Park", image: "MOUNTAIN GORILLA IN THE FOREST", blurb: "Journey into Uganda's ancient rainforest for an unforgettable mountain gorilla trekking experience.", activities: ["Mountain gorilla trekking"] },
          { name: "Mountain Gorilla Trekking", image: "MOUNTAIN GORILLA CLOSE-UP", blurb: "A permitted trek led by a ranger to a habituated gorilla family, Bwindi's signature experience." },
          { name: "Queen Elizabeth National Park", image: "UGANDA QUEEN ELIZABETH NATIONAL PARK", blurb: "Explore savannah, wetlands and woodland in one of Uganda's best-known wildlife parks.", activities: ["Game drives", "Boat safari"] },
        ],
      },
      {
        title: "Lakes & Waterways",
        icon: "Waves",
        items: [
          { name: "Lake Bunyonyi", image: "HIGHLAND LAKE VIEW", blurb: "Explore the quiet highland waters and green island-dotted scenery of southwestern Uganda.", activities: ["Canoeing", "Island visits"] },
          { name: "Lake Victoria", image: "UGANDA LAKE VICTORIA BOAT PHOTO", blurb: "Discover the lakeside around Entebbe, with boat trips, wetlands and views across Africa's largest lake.", activities: ["Boat trips", "Birdwatching"] },
        ],
      },
      {
        title: "Culture & History",
        icon: "Landmark",
        items: [
          { name: "Kasubi Royal Tombs", image: "KASUBI ROYAL TOMBS", blurb: "Visit the burial ground of Buganda kings and learn about the traditions and living heritage of the Baganda." },
          { name: "Uganda Martyrs Heritage Tour", image: "UGANDA MARTYRS HISTORY TOUR", blurb: "Visit sites connected with the Uganda Martyrs and learn about this important chapter in the country's history." },
          { name: "Kabaka Mutesa and Buganda History", image: "UGANDA KABAKA MUTESA HISTORY", blurb: "Explore the history of Kabaka Mutesa and the Buganda kingdom through its people, traditions and heritage sites." },
        ],
      },
    ],
    gallery: ["MOUNTAIN GORILLA IN THE FOREST", "MOUNTAIN GORILLA CLOSE-UP", "HIGHLAND LAKE VIEW", "THATCHED LODGE COTTAGE", "UGANDA LAKE VICTORIA BOAT PHOTO", "KASUBI ROYAL TOMBS"],
  },
  {
    id: "zimbabwe",
    name: "Zimbabwe",
    country: "Zimbabwe",
    region: "Adventure",
    tags: ["Adventure", "Wildlife", "Culture"],
    coordinates: "17.93°S, 25.86°E",
    tagline: "Home to Victoria Falls, one of the world's largest waterfalls, and the adventures built around it",
    accent: "gold",
    heroImage: "VICTORIA FALLS — HERO IMAGE",
    cardImage: "VICTORIA FALLS — MAIN IMAGE",
    description:
      "Zimbabwe's headline attraction is Victoria Falls, one of the world's largest waterfalls on the Zambezi River border with Zambia. Beyond the falls, the country opens into a wider wilderness that includes Hwange's elephant herds and the Matobo Hills' granite kopjes.",
    bestTime: "February – May for peak water flow; August – December for lower water and clearer viewing of the gorge",
    highlights: [
      "Victoria Falls, one of the largest waterfalls in the world",
      "Sunset cruises and whitewater rafting on the Zambezi",
      "Hwange National Park's large elephant herds",
      "Great Zimbabwe's stone ruins, dating back centuries",
    ],
    quote: "You hear Victoria Falls before you see it. Locally, it's called Mosi-oa-Tunya, \"the smoke that thunders.\"",
    categories: [
      {
        title: "The Falls & Zambezi River",
        icon: "Waves",
        items: [
          { name: "Victoria Falls", image: "VICTORIA FALLS WATERFALL VIEW", blurb: "Witness one of the world's most spectacular waterfalls, surrounded by breathtaking scenery and unforgettable adventure experiences.", activities: ["Falls viewing walks", "Scenic helicopter flights (visibility is seasonal)"] },
          { name: "Victoria Falls National Park", image: "VICTORIA FALLS NATIONAL PARK IMAGE", blurb: "The Zimbabwean park protecting the falls themselves, with a network of viewpoints along the rainforest edge." },
        ],
      },
      {
        title: "Wildlife & National Parks",
        icon: "PawPrint",
        items: [
          { name: "Hwange National Park", image: "ZIMBABWE ELEPHANT HERD", blurb: "Explore Zimbabwe's largest national park, known for its wide savannahs and abundant wildlife.", activities: ["Game drives", "Elephant viewing"], galleryTitle: "Wildlife gallery", gallery: ["ZIMBABWE ANTELOPE HERD", "ZIMBABWE ELEPHANT HERD"] },
          { name: "Lake Kariba Wilderness", image: "KARIBA FISHERMANS COVE LODGE", blurb: "Take in the open water, rugged shoreline and lakeside setting around Kariba.", activities: ["Lakeside scenery", "Nature outings"] },
          { name: "Zimbabwe Waterhole Safari", image: "ZIMBABWE ANTELOPES AT WATERHOLE", blurb: "Watch antelope gather at a waterhole amid Zimbabwe's open bush and grassland.", activities: ["Wildlife viewing", "Waterhole sightings"] },
        ],
      },
    ],
    gallery: ["VICTORIA FALLS WATERFALL VIEW", "ZIMBABWE ANTELOPE HERD", "ZIMBABWE ANTELOPES AT WATERHOLE", "KARIBA FISHERMANS COVE LODGE", "ZIMBABWE ELEPHANT HERD"],
  },
  {
    id: "botswana",
    name: "Botswana",
    country: "Botswana",
    region: "Safari",
    tags: ["Safari", "Wildlife", "Wilderness"],
    coordinates: "19.98°S, 23.42°E",
    tagline: "Wilderness where the safari vehicle gives way to a mokoro canoe",
    accent: "teal",
    heroImage: "BOTSWANA — HERO IMAGE",
    cardImage: "BOTSWANA — OKAVANGO IMAGE",
    description:
      "Botswana trades the classic safari by vehicle for slower experiences, such as a mokoro gliding through the Okavango Delta's channels or a boat easing along the Chobe River past elephant herds. Beyond the delta, the country opens into vast salt pans and one of the world's largest protected wilderness areas in the Central Kalahari.",
    bestTime: "May – October (dry season, the most reliable stretch for wildlife viewing)",
    highlights: [
      "Mokoro (canoe) safaris through the Okavango Delta",
      "Chobe National Park's riverside elephant herds",
      "The vast salt expanses of the Makgadikgadi Pans",
      "San rock art at the Tsodilo Hills",
    ],
    quote: "In the Okavango, the vehicle stops and the mokoro starts. The delta only shows itself at paddling pace.",
    categories: [
      {
        title: "Wilderness & Safari",
        icon: "PawPrint",
        items: [
          { name: "Okavango Delta", image: "OKAVANGO DELTA MOKORO CANOES", blurb: "The Okavango Delta is best known for mokoro rides and nature walks. Its waterways and floodplains are part of the wider ecosystem explored on Moremi game drives.", gallery: ["OKAVANGO DELTA MOKORO CANOES", "OKAVANGO DELTA PHOTO 1", "OKAVANGO DELTA PHOTO 2", "OKAVANGO DELTA PHOTO 3"], activities: ["Mokoro (canoe) safaris", "Nature walks"], linksTo: "okavango-delta", linksToLabel: "Okavango Delta" },
          { name: "Moremi Game Reserve", image: "WILD DOG PAIR", blurb: "Moremi Game Reserve is well known for leopards, lions, African wild dogs and other wild cats, as well as its many elephants and buffalo.", gallery: ["MOREMI WILD DOG", "MOREMI RESERVE PHOTO 1", "MOREMI RESERVE PHOTO 2", "MOREMI RESERVE PHOTO 3", "MOREMI RESERVE PHOTO 4"], activities: ["Game drives", "Boat safaris"], linksTo: "moremi-game-reserve", linksToLabel: "Moremi Game Reserve" },
          { name: "Chobe National Park", image: "CHOBE HIPPOS GRAZING", blurb: "Home to one of Africa's largest elephant populations, especially along the Chobe River during the dry season.", gallery: ["CHOBE HIPPOS GRAZING", "CHOBE LIONESS FEEDING", "CHOBE ANTELOPE PAIR", "CHOBE HIPPOS IN WATER"], activities: ["Boat safaris", "Game drives"], linksTo: "chobe-national-park", linksToLabel: "Chobe National Park" },
        ],
      },
      {
        title: "Desert & Landscapes",
        icon: "TreePine",
        items: [
          { name: "Makgadikgadi Pans", blurb: "Among the largest salt pan systems in the world, hosting a seasonal zebra migration across otherwise stark, open terrain.", activities: ["Quad biking", "Zebra migration viewing (seasonal)"] },
        ],
      },
      {
        title: "Culture & Heritage",
        icon: "Landmark",
        items: [
          { name: "Tsodilo Hills", blurb: "A UNESCO World Heritage site holding thousands of San rock paintings, sometimes called the \"Louvre of the Desert.\"" },
        ],
      },
      {
        title: "Conservation",
        icon: "Compass",
        items: [
          { name: "Khama Rhino Sanctuary", blurb: "A sanctuary run by the community near Serowe, dedicated to protecting and reintroducing white and black rhino." },
        ],
      },
    ],
    gallery: ["OKAVANGO DELTA AERIAL", "MOKORO CANOE SAFARI", "CHOBE RIVER ELEPHANTS"],
  },
  {
    id: "namibia", name: "Namibia", country: "Namibia", region: "Adventure",
    hidden: true, tags: ["Adventure", "Wildlife"], coordinates: "22.56°S, 17.09°E",
    tagline: "Desert landscapes, open plains and wildlife encounters",
    accent: "gold", heroImage: "NAMIBIA DEADVLEI TREE 1", cardImage: "NAMIBIA DEADVLEI TREE 1",
    description: "Explore Namibia’s striking desert landscapes and open country, with wildlife sightings across its dry plains.",
    bestTime: "May – October",
    highlights: ["Namib Desert scenery", "Wildlife across open plains", "Deadvlei’s distinctive trees and dunes"],
    quote: "Namibia’s broad horizons bring desert scenery and wildlife into one remarkable journey.",
    categories: [{ title: "Desert", icon: "TreePine", items: [
      { name: "Sesriem Canyon", image: null, blurb: "Explore the narrow, river-carved gorge in Namibia’s Namib-Naukluft region." },
      { name: "Deadvlei", image: "NAMIBIA DEADVLEI TREE 1", blurb: "See ancient camel thorn trees rising from a pale clay pan beneath the red dunes." },
      { name: "Sossusvlei", image: "NAMIBIA DEADVLEI TREE 2", blurb: "Visit the salt and clay pan surrounded by some of the Namib’s tallest dunes." },
      { name: "Big Daddy", image: "NAMIB DUNE WALK 286864", blurb: "Climb one of the Namib’s tallest dunes for sweeping views over the desert." },
      { name: "Dune 45", image: "NAMIBIA DEADVLEI TREE 1", blurb: "Walk the famous red dune and take in the shifting colours of the Namib Desert." },
      { name: "Etosha National Park", image: "NAMIBIA ELEPHANT AND ANTELOPE", blurb: "Spot elephants and other wildlife around Etosha’s salt pan and waterholes.", gallery: ["ETOSHA NATIONAL PARK PHOTO 1", "ETOSHA NATIONAL PARK PHOTO 2", "ETOSHA NATIONAL PARK PHOTO 3", "ETOSHA NATIONAL PARK PHOTO 4"] },
    ] }],
    gallery: ["NAMIBIA DEADVLEI TREE 1", "NAMIBIA DEADVLEI TREE 2", "NAMIB DUNE WALK 286864", "NAMIBIA DESERT PHOTO 1", "NAMIBIA DESERT PHOTO 2", "NAMIBIA DESERT PHOTO 3"],
  },
  {
    id: "chobe-national-park", name: "Chobe National Park", country: "Botswana", region: "Northern Botswana",
    hidden: true, excludeFromCategoryFilters: true, tags: ["Safari", "Wildlife"], coordinates: "18.67°S, 24.50°E",
    tagline: "River safaris and abundant wildlife along the Chobe",
    accent: "teal", heroImage: "CHOBE NATIONAL PARK IMAGE", cardImage: "CHOBE NATIONAL PARK IMAGE",
    description: "Chobe National Park is known for its wildlife and river scenery, with boat safaris and game drives offering different views of the park.",
    bestTime: "May – October",
    highlights: ["Chobe River boat safaris", "Elephants and other wildlife", "Game drives through the park"],
    quote: "Along the Chobe River, wildlife gathers at the water’s edge and the river becomes part of the safari.",
    categories: [{ title: "Wildlife & River Safaris", icon: "PawPrint", items: [
      { name: "Chobe River Wildlife", image: "CHOBE HIPPOS IN WATER", blurb: "Watch hippos and other wildlife from the river’s edge." },
    ] }],
    gallery: ["CHOBE HIPPOS GRAZING", "CHOBE NATIONAL PARK IMAGE", "CHOBE LIONESS FEEDING", "CHOBE ANTELOPE PAIR", "CHOBE HIPPOS IN WATER", "CHOBE NATIONAL PARK PHOTO 1", "CHOBE NATIONAL PARK PHOTO 2", "CHOBE NATIONAL PARK PHOTO 3", "CHOBE NATIONAL PARK PHOTO 4", "CHOBE NATIONAL PARK PHOTO 5", "CHOBE NATIONAL PARK PHOTO 6", "CHOBE NATIONAL PARK PHOTO 7", "CHOBE NATIONAL PARK PHOTO 8", "CHOBE NATIONAL PARK PHOTO 9", "CHOBE NATIONAL PARK PHOTO 10", "CHOBE NATIONAL PARK PHOTO 11", "CHOBE NATIONAL PARK PHOTO 12", "CHOBE NATIONAL PARK PHOTO 13", "CHOBE NATIONAL PARK PHOTO 14", "CHOBE NATIONAL PARK PHOTO 15", "CHOBE NATIONAL PARK PHOTO 16", "CHOBE NATIONAL PARK PHOTO 17"],
  },
  {
    id: "moremi-game-reserve", name: "Moremi Game Reserve", country: "Botswana", region: "Okavango Delta",
    hidden: true, excludeFromCategoryFilters: true, tags: ["Safari", "Wildlife"], coordinates: "19.30°S, 23.40°E",
    tagline: "Game drives through wetlands and wildlife-rich plains",
    accent: "gold", heroImage: "MOREMI GAME RESERVE IMAGE", cardImage: "MOREMI GAME RESERVE IMAGE",
    description: "Moremi Game Reserve protects wetlands, waterways and open plains. It is well known for leopards, lions, African wild dogs and other wild cats, along with large numbers of elephants and buffalo.",
    bestTime: "May – October",
    highlights: ["Leopards, lions and African wild dogs", "Elephants and buffalo", "Game drives through wetlands and open plains"],
    quote: "Moremi’s waterways and open country make each game drive a different view of the Okavango region.",
    categories: [{ title: "Wildlife", icon: "PawPrint", items: [
      { name: "Moremi Wild Dogs", image: "MOREMI WILD DOG", blurb: "African wild dogs move through the reserve’s brush and grassland." },
    ] }],
    gallery: ["MOREMI WILD DOG", "MOREMI GAME RESERVE IMAGE", "MOREMI RESERVE PHOTO 1", "MOREMI RESERVE PHOTO 2", "MOREMI RESERVE PHOTO 3", "MOREMI RESERVE PHOTO 4"],
  },
  {
    id: "okavango-delta", name: "Okavango Delta", country: "Botswana", region: "Northwestern Botswana",
    hidden: true, excludeFromCategoryFilters: true, tags: ["Adventure", "Wildlife", "Wilderness"], coordinates: "19.30°S, 22.90°E",
    tagline: "Mokoro rides and nature walks through a living wetland",
    accent: "teal", heroImage: "OKAVANGO DELTA IMAGE", cardImage: "OKAVANGO DELTA IMAGE",
    description: "The Okavango Delta is best explored by mokoro rides and guided nature walks. Its waterways and floodplains form part of the wider Okavango ecosystem that includes Moremi Game Reserve, where game drives can encounter lions, leopards, African wild dogs, elephants and buffalo.",
    bestTime: "May – October",
    highlights: ["Mokoro rides", "Guided nature walks", "Waterways and wetland scenery"],
    quote: "At paddling pace, the Okavango reveals its channels, reed beds and abundant birdlife.",
    categories: [{ title: "Delta Experiences", icon: "Waves", items: [
      { name: "Mokoro Canoe Routes", image: "OKAVANGO DELTA MOKORO CANOES", blurb: "Traditional dugout canoes travel along the Delta’s narrow waterways." },
    ] }],
    gallery: ["OKAVANGO DELTA IMAGE", "OKAVANGO DELTA MOKORO CANOES", "OKAVANGO DELTA PHOTO 1", "OKAVANGO DELTA PHOTO 2", "OKAVANGO DELTA PHOTO 3"],
  },
];

// Destinations shown in top-level listings, cards, and filter chips.
// Cape Town is deliberately excluded here (hidden: true) now that it lives
// under South Africa — but it stays in DESTINATIONS above so its own route,
// its experiences/dining, and the "Explore Cape Town" cross-link from the
// South Africa page all keep resolving correctly by id.

const VISIBLE_DESTINATION_ORDER = ["Kenya", "Uganda", "Tanzania", "South Africa", "Zimbabwe", "Botswana"];
export const VISIBLE_DESTINATIONS = DESTINATIONS
  .filter((d) => !d.hidden)
  .sort((a, b) => VISIBLE_DESTINATION_ORDER.indexOf(a.name) - VISIBLE_DESTINATION_ORDER.indexOf(b.name));

// ── BOOKING DATA LAYER ──────────────────────────────────────────────────
// Single source of truth for "what can be booked": derived live from
// VISIBLE_DESTINATIONS' own categories/items, so adding, renaming or
// removing a destination anywhere above automatically updates Booking too
// — nothing here is a separately-maintained list.

export const BOOKABLE_COUNTRIES = VISIBLE_DESTINATIONS.map((d) => d.name);

export const BOOKABLE_DESTINATIONS = VISIBLE_DESTINATIONS.flatMap((country) =>
  [
    { id: `${country.id}__country`, name: country.name, country: country.name },
    ...country.categories.flatMap((cat) =>
      cat.items.map((item) => {
        const name = item.linksToLabel || item.name;
        return {
          id: `${country.id}__${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name,
          country: country.name,
        };
      })
    ),
  ]
);

// Given a plain destination/place name (as already resolved from an
// experience's destinationSlug, a dining item's destinationSlug, or a
// destination page's own name), find its booking entry. Falls back to
// matching a country name itself, for "Book Now" clicked from a country's
// own top-level page rather than one specific place inside it.

export function findBookableByName(name) {
  if (!name) return null;
  const normalizedName = name.trim().toLowerCase();
  const match = BOOKABLE_DESTINATIONS.find((b) => b.name.trim().toLowerCase() === normalizedName);
  if (match) return match;
  const countryMatch = BOOKABLE_COUNTRIES.find((c) => c.toLowerCase() === normalizedName);
  if (countryMatch) return BOOKABLE_DESTINATIONS.find((b) => b.id === `${VISIBLE_DESTINATIONS.find((d) => d.name === countryMatch)?.id}__country`) || null;
  return null;
}
