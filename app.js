/* ════════════════════════════════════════════════
   TRAVELBOOKER — app.js
════════════════════════════════════════════════ */

'use strict';

// ════════════════════════════════════════════════
// DATA
// ════════════════════════════════════════════════

const PACKAGES = [
  {
    id: 1,
    title: 'Enchanted Bali Retreat',
    region: 'Asia',
    dest: 'Bali, Indonesia',
    duration: 8,
    price: 1290,
    rating: 4.9,
    reviews: 312,
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80',
    badge: 'Best Seller',
    discount: { percentage: 15, validUntil: '2024-12-31', description: 'Early Bird Special' },
    desc: 'Immerse yourself in the spiritual heart of Bali with temple visits, rice terrace walks, and world-class spa experiences among the emerald green hillsides of Ubud and beyond.',
    includes: [
      '5-star resort accommodation', 'All meals included', 'Airport transfers',
      'Temple tour with private guide', 'Sunset boat cruise', 'Cooking class'
    ],
    highlights: ['Tegallalang Rice Terraces', 'Uluwatu Temple', 'Seminyak Beach', 'Mount Batur Sunrise Hike'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Welcome', desc: 'Airport pickup, resort check-in, welcome dinner overlooking the rice fields with traditional Balinese dance performance.' },
      { day: 'Day 2', title: 'Ubud Cultural Tour', desc: 'Visit the Sacred Monkey Forest, Ubud Royal Palace, and traditional Kecak art markets. Afternoon coffee plantation tour.' },
      { day: 'Day 3', title: 'Rice Terrace Trek', desc: 'Early morning walk through Tegallalang terraces, followed by a traditional Balinese cooking class using fresh local produce.' },
      { day: 'Day 4', title: 'Mount Batur Sunrise', desc: 'Pre-dawn hike to the volcanic summit for a spectacular sunrise over the caldera. Breakfast cooked over volcanic steam.' },
      { day: 'Day 5', title: 'Temple Trail', desc: 'Visit Tanah Lot sea temple, Uluwatu cliff temple, and witness the legendary Kecak fire dance at sunset.' },
      { day: 'Day 6', title: 'Beach & Spa Day', desc: 'Free morning at Seminyak Beach followed by a full-day traditional Balinese spa treatment at the resort.' },
      { day: 'Day 7', title: 'Water Temple & Free Time', desc: 'Morning visit to Tirta Empul holy spring purification temple. Afternoon free for shopping and personal exploration.' },
      { day: 'Day 8', title: 'Departure', desc: 'Farewell breakfast with your guide, final souvenir shopping, and airport transfer.' }
    ],
    reviewsList: [
      { author: 'Sarah M.', rating: 5, date: 'November 2024', text: 'Absolutely magical. The sunrise hike to Mount Batur was the highlight of our entire trip. The guide was knowledgeable and the resort exceeded expectations.' },
      { author: 'James K.', rating: 5, date: 'October 2024', text: 'Perfect blend of culture, nature, and relaxation. The cooking class was incredibly fun and we learnt so much. Highly recommended for couples.' },
      { author: 'Priya N.', rating: 4, date: 'September 2024', text: 'The spa day and temple tours were exceptional. The cooking class was so much fun. Staff were incredibly warm and helpful throughout.' },
      { author: 'Chaminda Fernando', rating: 5, date: 'August 2024', text: 'As a Sri Lankan, I was impressed by how well the local culture was presented to tourists. The traditional dance performance was authentic and beautiful.' }
    ]
  },
  {
    id: 2,
    title: 'Amalfi Coast Odyssey',
    region: 'Europe',
    dest: 'Amalfi Coast, Italy',
    duration: 10,
    price: 2850,
    rating: 4.8,
    reviews: 198,
    img: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=900&q=80',
    badge: 'Popular',
    desc: 'Sail along the breathtaking Amalfi Coast, explore ancient ruins, indulge in world-class Italian cuisine, and lose yourself in the timeless charm of cliff-top villages and azure waters.',
    includes: [
      'Boutique hotel accommodation', 'Breakfast daily', 'Private boat charter (1 day)',
      'Guided Pompeii tour', 'Wine & limoncello tasting', 'Regional train passes'
    ],
    highlights: ['Positano village', 'Pompeii ruins', 'Capri island & Blue Grotto', 'Ravello Gardens'],
    itinerary: [
      { day: 'Day 1', title: 'Naples Arrival', desc: 'Arrive in Naples, private transfer to Amalfi Coast hotel with sea view. Welcome aperitivo.' },
      { day: 'Day 2', title: 'Positano Exploration', desc: 'Wander the iconic pastel-coloured cliffside village, shop for ceramics, enjoy lunch overlooking the harbour.' },
      { day: 'Day 3', title: 'Capri Day Trip', desc: 'Ferry to Capri, visit the mystical Blue Grotto, lunch in Anacapri, return by sunset.' },
      { day: 'Day 4', title: 'Pompeii & Herculaneum', desc: 'Full-day guided tour of ancient Pompeii ruins and the remarkably preserved Herculaneum.' },
      { day: 'Days 5 to 9', title: 'Villages & Leisure', desc: 'Explore Ravello Gardens, Amalfi town, limoncello distillery, private boat trip along the coast, cooking class.' },
      { day: 'Day 10', title: 'Departure', desc: 'Transfer to Naples International Airport.' }
    ],
    reviewsList: [
      { author: 'Clara B.', rating: 5, date: 'September 2024', text: 'The private boat trip was absolutely stunning. We anchored in secret coves and swam in crystal clear water. 10 out of 10 experience.' },
      { author: 'Michael T.', rating: 4, date: 'August 2024', text: 'Beautiful scenery, world-class food. The Pompeii guide was exceptional. A little pricey but genuinely worth every penny.' },
      { author: 'Nimali Perera', rating: 5, date: 'July 2024', text: 'The Amalfi Coast reminded me of the beauty of Sri Lanka\'s southern beaches. The limoncello tasting was a highlight!' }
    ]
  },
  {
    id: 3,
    title: 'Serengeti Safari Adventure',
    region: 'Africa',
    dest: 'Tanzania, East Africa',
    duration: 12,
    price: 4200,
    rating: 5.0,
    reviews: 87,
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=80',
    badge: 'Premium',
    discount: { percentage: 20, validUntil: '2024-11-30', description: 'Safari Season Deal' },
    desc: 'Witness the Great Migration and encounter the Big Five in the vast wilderness of the Serengeti. A once-in-a-lifetime luxury tented safari with expert naturalist guides.',
    includes: [
      'Luxury tented lodge accommodation', 'All meals and beverages', 'Twice-daily game drives',
      'Expert wildlife naturalist guide', 'All park and conservation fees', 'Hot air balloon safari'
    ],
    highlights: ['Great Wildebeest Migration', 'Big Five sightings', 'Ngorongoro Crater descent', 'Maasai village visit'],
    itinerary: [
      { day: 'Days 1 to 2', title: 'Arrival & Arusha', desc: 'Arrive at Kilimanjaro International Airport, overnight at boutique lodge in Arusha, safari briefing.' },
      { day: 'Days 3 to 5', title: 'Serengeti Plains', desc: 'Fly to Serengeti, twice-daily game drives across the vast ecosystem. Sundowners on the plains.' },
      { day: 'Day 6', title: 'Balloon Safari', desc: 'Sunrise hot air balloon over the Serengeti, traditional champagne breakfast on landing in the bush.' },
      { day: 'Days 7 to 9', title: 'Ngorongoro Crater', desc: 'Descend into the ancient volcanic crater, home to the densest concentration of wildlife on Earth.' },
      { day: 'Days 10 to 11', title: 'Tarangire National Park', desc: 'Massive elephant herds and ancient baobab trees in one of Tanzania\'s most dramatic landscapes.' },
      { day: 'Day 12', title: 'Departure', desc: 'Transfer to Arusha or Kilimanjaro Airport, onward international connections.' }
    ],
    reviewsList: [
      { author: 'David L.', rating: 5, date: 'October 2024', text: 'The balloon safari over the Serengeti at sunrise was beyond description. We watched a lion pride on a kill from 100 metres up. Extraordinary.' },
      { author: 'Amara O.', rating: 5, date: 'July 2024', text: 'The very best trip of my life. Our guide had an encyclopaedic knowledge of wildlife behaviour. Every day brought something utterly unforgettable.' },
      { author: 'Roshan de Silva', rating: 5, date: 'June 2024', text: 'Coming from Sri Lanka, I was amazed by the vastness of the Serengeti. The Maasai village visit was incredibly insightful.' }
    ]
  },
  {
    id: 4,
    title: 'Japan Cherry Blossom Trail',
    region: 'Asia',
    dest: 'Tokyo, Kyoto & Osaka, Japan',
    duration: 14,
    price: 3600,
    rating: 4.9,
    reviews: 245,
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=900&q=80',
    badge: 'Seasonal',
    desc: 'Follow the sakura bloom from Tokyo to Kyoto to Osaka on this immersive cultural journey through ancient temples, modern metropolises, and unforgettable cuisine.',
    includes: [
      'Premium hotel accommodation', '14-day JR Rail Pass', 'Bullet train (Shinkansen) tickets',
      'Traditional tea ceremony', 'Premium sake tasting', 'Sumo morning practice visit'
    ],
    highlights: ['Shinjuku Gyoen Park', 'Arashiyama Bamboo Grove', 'Fushimi Inari Shrine', 'Nara deer park'],
    itinerary: [
      { day: 'Days 1 to 4', title: 'Tokyo', desc: 'Shibuya, Harajuku, Shinjuku Gyoen in full bloom, Tsukiji market, teamLab digital art museum.' },
      { day: 'Days 5 to 6', title: 'Nikko & Hakone', desc: 'UNESCO World Heritage shrines in Nikko, open-air bath with Mount Fuji views in Hakone.' },
      { day: 'Days 7 to 10', title: 'Kyoto', desc: 'Gion geisha district, Arashiyama bamboo grove, Fushimi Inari\'s thousand torii gates, Kinkaku-ji.' },
      { day: 'Days 11 to 13', title: 'Osaka & Nara', desc: 'Dotonbori street food paradise, ancient deer park at Nara, Osaka castle, takoyaki tasting.' },
      { day: 'Day 14', title: 'Departure', desc: 'Transfer to Kansai International Airport, Osaka.' }
    ],
    reviewsList: [
      { author: 'Yuki H.', rating: 5, date: 'April 2024', text: 'Timing was absolutely perfect. Blossom at 100% peak. Standing under the sakura in Shinjuku Gyoen was the most magical moment of my life.' },
      { author: 'Tom W.', rating: 5, date: 'April 2024', text: 'The JR Rail Pass made everything seamless. Every single city was incredible in its own right. The food tour in Osaka was world-class.' }
    ]
  },
  {
    id: 5,
    title: 'Patagonia Wilderness Trek',
    region: 'Americas',
    dest: 'Chile & Argentina',
    duration: 15,
    price: 3900,
    rating: 4.7,
    reviews: 76,
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80',
    badge: 'Adventure',
    discount: { percentage: 10, validUntil: '2024-10-31', description: 'Adventure Savings' },
    desc: 'Trek through the most spectacular wilderness on Earth — glaciers, granite towers, turquoise lakes, and condors overhead in the raw heart of Chilean and Argentine Patagonia.',
    includes: [
      'Mountain lodge accommodation on trail', 'All meals during trek', 'Expert certified mountain guides',
      'National park entrance fees', 'Bus transfers', 'Trekking equipment hire'
    ],
    highlights: ['Torres del Paine', 'Perito Moreno Glacier', 'Los Glaciares National Park', 'Fitz Roy massif'],
    itinerary: [
      { day: 'Days 1 to 2', title: 'Punta Arenas Arrival', desc: 'Arrive, gear check, briefing, overnight in Punta Arenas.' },
      { day: 'Days 3 to 8', title: 'W Trek, Torres del Paine', desc: 'Classic W circuit: Valle del Francés, Grey Glacier, Las Torres. The most iconic trek in South America.' },
      { day: 'Day 9', title: 'Perito Moreno Glacier', desc: 'Cross into Argentina, walk on the vast Perito Moreno glacier with crampons and a certified ice guide.' },
      { day: 'Days 10 to 14', title: 'El Chaltén & Fitz Roy', desc: 'Hike to the base of Fitz Roy and Cerro Torre, two of the world\'s most dramatic peaks.' },
      { day: 'Day 15', title: 'Departure', desc: 'Bus to El Calafate, flights to Buenos Aires or Santiago.' }
    ],
    reviewsList: [
      { author: 'Ana R.', rating: 5, date: 'November 2024', text: 'Reaching the Torres at sunrise after a 4-hour predawn hike was worth every single step. Brutal, beautiful, and completely unforgettable.' },
      { author: 'Hans K.', rating: 4, date: 'December 2024', text: 'Extraordinarily well-organised with exceptional mountain guides. Genuinely challenging — fitness preparation essential. Absolutely worth it.' }
    ]
  },
  {
    id: 6,
    title: 'Maldives Overwater Escape',
    region: 'Asia',
    dest: 'North Malé Atoll, Maldives',
    duration: 7,
    price: 3200,
    rating: 5.0,
    reviews: 421,
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=80',
    badge: 'Luxury',
    desc: 'Drift into paradise with a private overwater villa, bioluminescent lagoons, house reef snorkelling, and absolute serenity in the world\'s most breathtaking island destination.',
    includes: [
      'Overwater bungalow villa', 'Full board all-inclusive', 'Seaplane transfers from Malé',
      'Snorkel and diving equipment', 'Sunset dhoni cruise', '$200 spa credit per couple'
    ],
    highlights: ['Bioluminescent beach at night', 'House reef coral diving', 'Dolphin watching cruise', 'Private sandbank picnic'],
    itinerary: [
      { day: 'Day 1', title: 'Seaplane Arrival', desc: 'Touch down on turquoise water, champagne welcome at your private jetty, overwater villa orientation.' },
      { day: 'Days 2 to 6', title: 'Island Living', desc: 'Snorkel the house reef, scuba dive with whale sharks, kayak through lagoons, spa treatments, private beach dinners, dolphin watching.' },
      { day: 'Day 7', title: 'Farewell', desc: 'Final sunrise swim, farewell breakfast, seaplane transfer back to Malé International Airport.' }
    ],
    reviewsList: [
      { author: 'Sofia P.', rating: 5, date: 'December 2024', text: 'Heaven on Earth. The bioluminescent beach at midnight was jaw-dropping — like swimming in stars. Perfect honeymoon destination.' },
      { author: 'Alex V.', rating: 5, date: 'January 2025', text: 'Not inexpensive, but completely and utterly unforgettable. The overwater villa exceeded every expectation. We will return.' }
    ]
  },
  {
    id: 7,
    title: 'Morocco Desert Expedition',
    region: 'Africa',
    dest: 'Morocco, North Africa',
    duration: 9,
    price: 1480,
    rating: 4.6,
    reviews: 163,
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=80',
    badge: 'Cultural',
    desc: 'Journey through imperial cities, cascading waterfalls, and endless sand dunes. Sleep under the stars in a Sahara desert camp and ride camels as the sun sets over the Erg Chebbi.',
    includes: [
      'Traditional riad accommodation', 'Camel trek into the Sahara', 'Luxury desert camp overnight',
      'Guided medina walks', 'Local home-cooked meals', 'Air-conditioned 4x4 transport'
    ],
    highlights: ['Erg Chebbi Sahara Desert camp', 'Chefchaouen blue city', 'Fes UNESCO medina', 'Ait Benhaddou Kasbah'],
    itinerary: [
      { day: 'Days 1 to 2', title: 'Marrakech', desc: 'Jemaa el-Fnaa square, souks, hammam experience, Bahia Palace.' },
      { day: 'Days 3 to 4', title: 'Atlas Mountains to Sahara', desc: 'Cross the High Atlas via Tizi n\'Tichka pass, drive through the Valley of Roses, arrive Erg Chebbi dunes at sunset.' },
      { day: 'Days 5 to 6', title: 'Sahara Desert Camp', desc: 'Camel trek to camp, traditional music under an extraordinary star-filled sky, sunrise on the golden dunes.' },
      { day: 'Days 7 to 8', title: 'Fes Imperial City', desc: 'UNESCO World Heritage medina, medieval tanneries, Al-Qarawiyyin mosque, intricate Islamic architecture.' },
      { day: 'Day 9', title: 'Departure', desc: 'Transfer to Casablanca Mohammed V International Airport.' }
    ],
    reviewsList: [
      { author: 'Laila K.', rating: 5, date: 'October 2024', text: 'The Sahara night was absolutely surreal — no light pollution whatsoever. The star-gazing session with a guide was unexpectedly emotional. Wonderful trip.' },
      { author: 'Brett M.', rating: 4, date: 'September 2024', text: 'Outstanding value for money. Morocco is endlessly stunning. The riad in Marrakech was a genuine highlight — magical courtyard.' }
    ]
  },
  {
    id: 8,
    title: 'New Zealand South Island',
    region: 'Oceania',
    dest: 'South Island, New Zealand',
    duration: 11,
    price: 2750,
    rating: 4.8,
    reviews: 134,
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80',
    badge: 'Popular',
    desc: 'Fjords, glaciers, vineyards, and adventure sports — the South Island packs an extraordinary amount of natural drama into one breathtaking self-drive journey.',
    includes: [
      'Premium rental car', 'Boutique lodge accommodation', 'Breakfast daily',
      'Milford Sound cruise', 'Bungee jump option (Queenstown)', 'Marlborough wine tour'
    ],
    highlights: ['Milford Sound fiord', 'Queenstown adventure sports', 'Franz Josef Glacier', 'Fiordland National Park'],
    itinerary: [
      { day: 'Days 1 to 3', title: 'Christchurch & Lake Tekapo', desc: 'Arrival, garden city orientation, mountain lakes, world-class International Dark Sky Reserve stargazing.' },
      { day: 'Days 4 to 5', title: 'Queenstown', desc: 'Adventure capital of the world: bungy jumping, jet boating, skyline gondola, wine tasting in Gibbston Valley.' },
      { day: 'Days 6 to 7', title: 'Fiordland & Milford Sound', desc: 'World-famous Milford Sound cruise through majestic fjords, overnight in Te Anau lodge.' },
      { day: 'Days 8 to 10', title: 'West Coast Glaciers', desc: 'Fox Glacier, Franz Josef Glacier heli-hike option, Punakaiki Pancake Rocks, Hokitika Gorge.' },
      { day: 'Day 11', title: 'Departure', desc: 'Return drive to Christchurch International Airport.' }
    ],
    reviewsList: [
      { author: 'Emma J.', rating: 5, date: 'February 2025', text: 'Milford Sound is genuinely one of the most otherworldly places on Earth. The South Island took our breath away every single day.' },
      { author: 'Raj P.', rating: 5, date: 'January 2025', text: 'The perfect self-drive itinerary — every stop was stunning. The Franz Josef Glacier heli-hike was utterly spectacular.' }
    ]
  },
  {
    id: 9,
    title: 'Sri Lanka Family Adventure',
    region: 'Asia',
    dest: 'Sri Lanka',
    duration: 10,
    price: 1850,
    rating: 4.8,
    reviews: 156,
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80',
    badge: 'Family Special',
    desc: 'Explore ancient temples, wildlife safaris, and pristine beaches with family-friendly activities and child discounts.',
    includes: [
      'Family accommodation', 'Child-friendly activities', 'Yala National Park safari',
      'Sigiriya rock fortress', 'Beach resorts', 'Cultural shows'
    ],
    highlights: ['Yala Wildlife Safari', 'Sigiriya Rock', 'Temple of the Tooth', 'Colombo City Tour'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo Arrival', desc: 'Welcome to Sri Lanka, transfer to hotel with family rooms.' },
      { day: 'Day 2-3', title: 'Cultural Triangle', desc: 'Visit ancient cities, Sigiriya Rock, and Polonnaruwa.' },
      { day: 'Day 4-5', title: 'Yala Safari', desc: 'Wildlife safari in Yala National Park, spot elephants and leopards.' },
      { day: 'Day 6-7', title: 'Hill Country', desc: 'Tea plantations, Nuwara Eliya, and Ella Gap.' },
      { day: 'Day 8-9', title: 'Beach Relaxation', desc: 'Unawatuna or Mirissa beaches, whale watching optional.' },
      { day: 'Day 10', title: 'Departure', desc: 'Transfer to Colombo airport.' }
    ],
    reviewsList: [
      { author: 'Family Smith', rating: 5, date: 'March 2025', text: 'Perfect family trip! The kids loved the safari and beaches. Great value with child discounts.' },
      { author: 'Nimali Fernando', rating: 5, date: 'February 2025', text: 'As a Sri Lankan mother, I was proud to show my children our beautiful country. The family packages are well-designed.' },
      { author: 'Raj & Priya Patel', rating: 4, date: 'January 2025', text: 'Great family adventure! The child discounts made it affordable. Yala safari was the highlight for our kids.' }
    ]
  }
];

// ════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════
let currentRole = 'customer';
let currentPkg  = null;
let compareList = [];
let rooms       = [{ id: 1, people: 2 }];
let bookingStep = 1;
let aiOpen      = false;
let bookingHistory = [
  { ref: 'TB-2025-AB3F2', pkg: 'Enchanted Bali Retreat',       date: 'Jan 15, 2025', status: 'Completed', amount: 1290, client: 'Sarah Anderson', location: 'New York, USA' },
  { ref: 'TB-2025-X9KLM', pkg: 'Japan Cherry Blossom Trail',   date: 'Mar 20, 2025', status: 'Upcoming',  amount: 3600, client: 'TechCorp Solutions', location: 'San Francisco, USA' },
  { ref: 'TB-2025-QR7TY', pkg: 'Morocco Desert Expedition',    date: 'Feb 10, 2025', status: 'Cancelled', amount: 1480, client: 'Mike Johnson', location: 'London, UK' },
  { ref: 'TB-2025-MN8PL', pkg: 'Serengeti Safari Adventure',   date: 'Dec 5, 2024',  status: 'Completed', amount: 4200, client: 'Priya & Raj Patel', location: 'Mumbai, India' },
  { ref: 'TB-2025-KL2WX', pkg: 'Amalfi Coast Odyssey',        date: 'Nov 18, 2024', status: 'Completed', amount: 2850, client: 'Carlos Mendes', location: 'São Paulo, Brazil' },
  { ref: 'TB-2025-VB9NM', pkg: 'Sri Lanka Family Adventure',  date: 'Oct 22, 2024', status: 'Completed', amount: 1850, client: 'Nimali Fernando', location: 'Colombo, Sri Lanka' },
  { ref: 'TB-2025-HJ4QR', pkg: 'Patagonia Wilderness Trek',   date: 'Sep 8, 2024',  status: 'Completed', amount: 3900, client: 'Lisa Thompson', location: 'Sydney, Australia' },
  { ref: 'TB-2025-RT3YU', pkg: 'Maldives Overwater Paradise',  date: 'Aug 15, 2024', status: 'Completed', amount: 3200, client: 'Chaminda Perera', location: 'Colombo, Sri Lanka' },
  { ref: 'TB-2025-WE8OP', pkg: 'New Zealand South Island',     date: 'Jul 3, 2024',  status: 'Completed', amount: 2800, client: 'Rashika de Silva', location: 'Kandy, Sri Lanka' },
  { ref: 'TB-2025-ZX5CV', pkg: 'Iceland Northern Lights',     date: 'Jun 12, 2024', status: 'Completed', amount: 4100, client: 'Global Marketing Inc', location: 'Singapore' },
  { ref: 'TB-2025-BN7MK', pkg: 'Vietnam Cultural Journey',    date: 'May 28, 2024', status: 'Completed', amount: 1950, client: 'Sunil Jayawardena', location: 'Colombo, Sri Lanka' },
  { ref: 'TB-2025-PL9OI', pkg: 'Peru Inca Trail Trek',        date: 'Apr 10, 2024', status: 'Completed', amount: 2400, client: 'Nordic Enterprises', location: 'Stockholm, Sweden' }
];

const AGENT_CLIENTS = [
  { id: 'sarah-anderson', name: 'Sarah Anderson', contact: 'sarah@email.com', phone: '+1 555-0123', type: 'Family', lastTrip: 'Bali Retreat', totalSpent: '$8,400', status: 'Active', details: '4 travellers; 30% repeat-booking rate' },
  { id: 'techcorp-solutions', name: 'TechCorp Solutions', contact: 'travel@techcorp.com', phone: '+1 555-0456', type: 'Corporate', lastTrip: 'Japan Team Building', totalSpent: '$67,200', status: 'Active', details: '45 employees; 12 bookings this year' },
  { id: 'mike-johnson', name: 'Mike Johnson', contact: 'mike@corp.com', phone: '+1 555-0789', type: 'Business', lastTrip: 'Serengeti Safari', totalSpent: '$24,100', status: 'Planning', details: 'Solo executive traveler; prefers premium packages' },
  { id: 'priya-raj-patel', name: 'Priya & Raj Patel', contact: 'priya@biz.com', phone: '+1 555-0321', type: 'Family', lastTrip: 'Maldives Resort', totalSpent: '$12,800', status: 'Active', details: 'Couple+2 children; high interest in Asian family adds' },
  { id: 'global-marketing', name: 'Global Marketing Inc', contact: 'hr@globalmkt.com', phone: '+1 555-0654', type: 'Corporate', lastTrip: 'Amalfi Team Event', totalSpent: '$42,600', status: 'Inactive', details: '28 employees; require quarterly trips' },
  { id: 'carlos-mendes', name: 'Carlos Mendes', contact: 'carlos@travel.co', phone: '+1 555-0987', type: 'Individual', lastTrip: 'Patagonia Trek', totalSpent: '$14,600', status: 'Active', details: 'Adventure travel specialist client' },
  { id: 'nordic-enterprises', name: 'Nordic Enterprises', contact: 'travel@nordic.com', phone: '+1 555-0432', type: 'Corporate', lastTrip: 'Multiple destinations', totalSpent: '$89,400', status: 'Active', details: '67 employees; strategic partner' },
  { id: 'lisa-thompson', name: 'Lisa Thompson', contact: 'lisa@consulting.net', phone: '+1 555-0765', type: 'Business', lastTrip: 'London Conference', totalSpent: '$6,200', status: 'Planning', details: 'Frequent high-value client' }
];

// ════════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════════
function navigate(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Reset nav link active states
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // Map special info pages to 'info' page
  const infoPages = ['about','careers','contact','press','help','faq','cancel','chat','destinations','deals','guides'];
  let targetId = pageId;

  if (pageId.startsWith('info-')) {
    const sub = pageId.replace('info-', '');
    if (sub === 'chat') {
      openAI();
      // Navigate to home so it has a base
      targetId = 'home';
    } else {
      renderInfoPage(sub);
      targetId = 'info';
    }
  }

  const el = document.getElementById('page-' + targetId);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Highlight correct nav link
  const navMap = { home: 'Home', packages: 'Packages', login: 'Login', dashboard: 'Dashboard' };
  const navLabel = navMap[targetId];
  if (navLabel) {
    document.querySelectorAll('.nav-link').forEach(l => {
      if (l.textContent.trim() === navLabel) l.classList.add('active');
    });
  }

  // Update browser history
  const url = pageId === 'home' ? '/' : '/' + pageId;
  if (window.location.pathname !== url) {
    history.pushState({ page: pageId }, '', url);
  }

  // Page-specific init
  if (targetId === 'packages')  renderPackages(PACKAGES);
  if (targetId === 'home')      renderFeatured();
  if (targetId === 'dashboard') renderDashboard();
  if (targetId === 'booking')   initBooking();
  if (targetId === 'individual') renderIndividualPackages();
  if (targetId === 'family')    renderFamilyPackages();
  if (targetId === 'group')     renderGroupPackages();
}

// Handle browser back/forward
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.page) {
    navigate(event.state.page);
  }
});

// ════════════════════════════════════════════════
// LEGAL PAGE TABS
// ════════════════════════════════════════════════
function showLegalSection(section, btn) {
  // Hide all legal sections
  document.querySelectorAll('.legal-section').forEach(s => {
    s.style.display = 'none';
    s.classList.remove('active-section');
  });
  // Show selected
  const target = document.getElementById('legal-' + section);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active-section');
  }
  // Update pill tabs
  const tabs = document.querySelectorAll('#legalTabs .pill-tab');
  tabs.forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ════════════════════════════════════════════════
// INFO PAGES
// ════════════════════════════════════════════════
function renderInfoPage(sub) {
  const content = document.getElementById('infoContent');
  if (!content) return;

  const pages = {
    about: renderAbout,
    careers: renderCareers,
    contact: renderContact,
    press: renderPress,
    help: renderHelp,
    faq: renderFaq,
    cancel: renderCancel,
    destinations: renderDestinations,
    deals: renderDeals,
    guides: renderGuides
  };

  if (pages[sub]) {
    content.innerHTML = pages[sub]();
  } else {
    content.innerHTML = `<button class="back-btn" onclick="navigate('home')">Back to Home</button><div class="info-hero"><h1>Page Not Found</h1></div>`;
  }
}

function renderAbout() {
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero">
      <h1>About TravelBooker</h1>
      <p>We believe travel changes lives. Our mission is to make extraordinary journeys accessible to everyone.</p>
    </div>
    <div class="info-section">
      <h3>Our Story</h3>
      <p>TravelBooker was founded in 2026 by a group of passionate travelers who are also university students. We were frustrated with the fragmented and impersonal experience of booking travel online. We believe that planning a journey should be as exciting as the journey itself. Starting with a small team of five in Sri Lanka, we have grown to serve over 98,000 travelers across 180 destinations worldwide. Our AI-powered platform combines the warmth of a personal travel agent with the scale and convenience of modern technology.</p>
    </div>
    <div class="info-section">
      <h3>Our Values</h3>
      <div class="info-grid">
        <div class="info-card"><h4>Responsible Travel</h4><p>We partner exclusively with operators who adhere to sustainable tourism practices and fair pay for local guides.</p></div>
        <div class="info-card"><h4>Radical Transparency</h4><p>No hidden fees, ever. Every price you see is fully inclusive. We publish our margin on every booking.</p></div>
        <div class="info-card"><h4>People First</h4><p>Our AI assists, but our expert human team is always available. Real people, real answers, any time.</p></div>
        <div class="info-card"><h4>Local Impact</h4><p>Over 80% of our packages use local accommodation, local guides, and local restaurants wherever possible.</p></div>
      </div>
    </div>
    <div class="info-section">
      <h3>By the Numbers</h3>
      <div class="info-grid">
        <div class="info-card"><h4>98,000+</h4><p>Happy travellers who have booked through TravelBooker since 2026</p></div>
        <div class="info-card"><h4>180+</h4><p>Destinations across every continent, curated by our expert team</p></div>
        <div class="info-card"><h4>4,200+</h4><p>Unique tour packages, regularly refreshed and quality-checked</p></div>
        <div class="info-card"><h4>4.8 / 5</h4><p>Average customer satisfaction rating across all completed bookings</p></div>
      </div>
    </div>`;
}

function renderCareers() {
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero">
      <h1>Join Our Team</h1>
      <p>Help us build the future of travel. We are a team of explorers, builders, and dreamers.</p>
    </div>
    <div class="info-section">
      <h3>Why Work at TravelBooker</h3>
      <div class="info-grid">
        <div class="info-card"><h4>Annual Travel Credit</h4><p>Every employee receives $3,000 per year to use on TravelBooker packages. We practise what we preach.</p></div>
        <div class="info-card"><h4>Remote First</h4><p>Work from anywhere in the world. We have team members across 14 countries with quarterly in-person gatherings.</p></div>
        <div class="info-card"><h4>Competitive Salaries</h4><p>We benchmark against top-quartile industry salaries and offer equity to every employee.</p></div>
        <div class="info-card"><h4>Learning Budget</h4><p>$1,500 per year for conferences, courses, and books. We invest in your growth.</p></div>
      </div>
    </div>
    <div class="info-section">
      <h3>Open Positions</h3>
      <div class="faq-item"><div class="faq-q">Senior Product Designer — Remote<span>London / Remote</span></div><div class="faq-a">Lead design across our consumer booking experience and AI assistant interfaces. 5+ years experience required. Salary: £80k–£100k.</div></div>
      <div class="faq-item"><div class="faq-q">Senior Backend Engineer — Remote<span>Remote</span></div><div class="faq-a">Build and scale our core booking infrastructure. Node.js, PostgreSQL, AWS. 4+ years experience. Salary: $120k–$150k.</div></div>
      <div class="faq-item"><div class="faq-q">Travel Content Curator — Various Regions<span>Multiple Locations</span></div><div class="faq-a">Research, test, and curate new tour packages in your region. Must be based in and have deep knowledge of Asia, Europe, or the Americas.</div></div>
      <div class="faq-item"><div class="faq-q">Customer Experience Lead<span>London, UK</span></div><div class="faq-a">Lead our growing CX team and ensure every traveller has an exceptional experience from booking to return. £55k–£70k.</div></div>
    </div>
    <div style="text-align:center;margin-top:32px">
      <button class="btn btn-primary" onclick="showToast('Application portal opening — careers@travelbooker.com')">Apply Now</button>
    </div>`;
}

function renderContact() {
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero">
      <h1>Contact Us</h1>
      <p>Our team is here to help you with anything travel-related, any time.</p>
    </div>
    <div class="info-section">
      <h3>Get in Touch</h3>
      <div class="contact-grid">
        <div class="contact-card"><div class="cc-icon">&#9990;</div><h4>Phone</h4><p>+94 11 234 5678<br/>Mon–Fri, 9am–8pm SLST</p></div>
        <div class="contact-card"><div class="cc-icon">&#9993;</div><h4>Email</h4><p>hello@travelbooker.com<br/>Response within 4 hours</p></div>
        <div class="contact-card"><div class="cc-icon">&#9997;</div><h4>Live Chat</h4><p>Available 24/7<br/>Average wait: 2 minutes</p></div>
        <div class="contact-card"><div class="cc-icon">&#9968;</div><h4>Head Office</h4><p>123 Galle Road, Colombo 3<br/>Sri Lanka</p></div>
      </div>
    </div>
    <div class="info-section">
      <h3>Send Us a Message</h3>
      <div class="form-card">
        <div class="form-grid">
          <div class="form-field"><label>Full Name</label><input type="text" placeholder="Your name" /></div>
          <div class="form-field"><label>Email</label><input type="email" placeholder="your@email.com" /></div>
          <div class="form-field"><label>Subject</label><select><option>General Enquiry</option><option>Booking Support</option><option>Cancellation Request</option><option>Partnership</option><option>Press Enquiry</option></select></div>
          <div class="form-field"><label>Booking Reference (optional)</label><input type="text" placeholder="TB-2025-XXXXXX" /></div>
          <div class="form-field full"><label>Message</label><textarea rows="4" placeholder="How can we help?"></textarea></div>
        </div>
        <div style="margin-top:20px"><button class="btn btn-primary" onclick="showToast('Message sent. We will reply within 4 hours.')">Send Message</button></div>
      </div>
    </div>`;
}

function renderPress() {
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero">
      <h1>Press & Media</h1>
      <p>TravelBooker in the news. For media enquiries, contact press@travelbooker.com</p>
    </div>
    <div class="info-section">
      <h3>Recent Coverage</h3>
      <div class="faq-item"><div class="faq-q">TravelBooker raises $40M Series C to expand AI travel planning<span>TechCrunch — January 2025</span></div><div class="faq-a">TravelBooker announced a $40 million Series C funding round led by Sequoia Capital to accelerate AI-powered itinerary planning and expand into South East Asian markets.</div></div>
      <div class="faq-item"><div class="faq-q">The best travel booking platforms of 2025<span>Which? Travel — February 2025</span></div><div class="faq-a">TravelBooker was awarded "Best for Group Travel" and "Best AI Features" in Which? magazine's annual travel platform review, scoring 4.8 out of 5.</div></div>
      <div class="faq-item"><div class="faq-q">How AI is changing the way we plan holidays<span>The Guardian — December 2024</span></div><div class="faq-a">TravelBooker's AI assistant was featured as a leading example of responsible AI application in consumer travel, with 94% of users reporting higher satisfaction with AI-suggested itineraries.</div></div>
    </div>
    <div class="info-section">
      <h3>Media Assets</h3>
      <p>Download our brand kit, high-resolution logos, and founder photographs for editorial use.</p>
      <button class="btn btn-outline btn-sm" onclick="showToast('Downloading media kit...')">Download Media Kit</button>
    </div>
    <div class="info-section">
      <h3>Press Contact</h3>
      <p>For media enquiries, interview requests, or photography permissions, please contact:<br/><strong>press@travelbooker.com</strong> — Response within 2 business hours.</p>
    </div>`;
}

function renderHelp() {
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero">
      <h1>Help Centre</h1>
      <p>Find answers, manage your booking, or reach our support team.</p>
    </div>
    <div class="info-section">
      <h3>Quick Actions</h3>
      <div class="info-grid">
        <div class="info-card" style="cursor:pointer" onclick="navigate('dashboard')"><h4>Manage Booking</h4><p>View, modify, or cancel an existing booking from your dashboard.</p></div>
        <div class="info-card" style="cursor:pointer" onclick="navigate('info-faq')"><h4>Frequently Asked Questions</h4><p>Answers to the most common questions about bookings, payments, and travel.</p></div>
        <div class="info-card" style="cursor:pointer" onclick="navigate('info-cancel')"><h4>Cancellation Policy</h4><p>Understand your refund options and cancellation windows.</p></div>
        <div class="info-card" style="cursor:pointer" onclick="openAI()"><h4>Ask the AI Assistant</h4><p>Get instant answers about destinations, visa requirements, and packages.</p></div>
      </div>
    </div>
    <div class="info-section">
      <h3>Contact Support</h3>
      <p>Our support team is available 7 days a week. Average response time: under 2 hours.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:14px">
        <button class="btn btn-primary" onclick="showToast('Opening live chat...');openAI()">Start Live Chat</button>
        <button class="btn btn-outline" onclick="navigate('info-contact')">Send an Email</button>
      </div>
    </div>`;
}

function renderFaq() {
  const faqs = [
    { q: 'How do I modify a booking?', a: 'Log in to your Dashboard, navigate to "My Bookings" and select the booking you wish to modify. Date changes are permitted up to 30 days before departure for a $50 administration fee.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), bank transfers, Apple Pay, Google Pay, and PayPal. All payments are secured by 256-bit SSL encryption via Stripe.' },
    { q: 'Are flights included in the package price?', a: 'Flights are not included unless explicitly stated. Our packages cover accommodation, activities, transfers, and meals as described. We partner with major airlines if you need help booking flights.' },
    { q: 'What is the group discount?', a: 'Groups of 10 or more travelers receive a 10% discount. Groups of 20 or more receive 15% off. Corporate groups may be eligible for additional discounts — contact our corporate team.' },
    { q: 'Can I travel solo?', a: 'Absolutely. All packages are available for solo travellers. We offer a small single supplement for certain packages that would otherwise require sharing. Solo traveller groups can also be arranged.' },
    { q: 'What travel insurance do you recommend?', a: 'We strongly recommend comprehensive travel insurance covering medical evacuation, cancellation, and personal belongings. We partner with AXA and Allianz — you can add insurance at checkout.' },
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 3 months in advance for peak season travel (July-August, December-January). Seasonal packages such as the Japan Blossom Trail sell out 4-6 months ahead.' },
    { q: 'Are visas included?', a: 'Visa assistance is included for all packages — we provide documentation templates and submission guidance. However, visa fees are the traveller\'s responsibility. Some nationalities may require additional processing time.' }
  ];
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero"><h1>Frequently Asked Questions</h1><p>Everything you need to know about travelling with TravelBooker.</p></div>
    <div class="info-section">
      <h3>Common Questions</h3>
      ${faqs.map(f => `
        <div class="faq-item" onclick="this.querySelector('.faq-a').style.display = this.querySelector('.faq-a').style.display==='none'?'block':'none'">
          <div class="faq-q">${f.q}<span style="color:var(--green);font-size:.8rem">View answer</span></div>
          <div class="faq-a" style="display:none">${f.a}</div>
        </div>`).join('')}
    </div>
    <div style="margin-top:28px" class="alert alert-info">Cannot find what you are looking for? <button class="btn btn-sm btn-outline" style="margin-left:10px" onclick="navigate('info-contact')">Contact Support</button></div>`;
}

function renderCancel() {
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero"><h1>Cancellation Policy</h1><p>Clear, fair, and transparent. No surprises.</p></div>
    <div class="info-section">
      <h3>Standard Cancellation Windows</h3>
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;margin-top:10px">
        <thead><tr><th style="text-align:left;padding:12px 14px;background:var(--green-dark);color:white;border-radius:8px 0 0 0">Cancellation Notice</th><th style="text-align:left;padding:12px 14px;background:var(--green-dark);color:white">Refund</th></tr></thead>
        <tbody>
          <tr><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200)">More than 14 days before departure</td><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200);color:var(--green);font-weight:600">100% full refund</td></tr>
          <tr><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200)">7 to 14 days before departure</td><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200);color:#b45309;font-weight:600">75% refund (25% cancellation fee)</td></tr>
          <tr><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200)">3 to 7 days before departure</td><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200);color:#b45309;font-weight:600">50% refund</td></tr>
          <tr><td style="padding:12px 14px">Less than 3 days before departure</td><td style="padding:12px 14px;color:#c0392b;font-weight:600">No refund</td></tr>
        </tbody>
      </table>
    </div>
    <div class="info-section">
      <h3>How to Cancel</h3>
      <p>Log in to your Dashboard, select "My Bookings", and click "Cancel Booking" on the relevant booking. You will receive confirmation and your refund within 5–10 business days to your original payment method.</p>
    </div>
    <div class="info-section">
      <h3>Exceptions</h3>
      <p>Certain premium and seasonal packages (e.g. Japan Cherry Blossom, Serengeti Migration season) have specific cancellation terms stated at the time of booking. TravelBooker may offer a full refund or rebook at no charge in the event of significant itinerary changes or natural disasters.</p>
    </div>`;
}

function renderDestinations() {
  const dests = [
    { name: 'Bali, Indonesia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=70', count: 14 },
    { name: 'Amalfi Coast, Italy', img: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&q=70', count: 8 },
    { name: 'Tokyo, Japan', img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=70', count: 11 },
    { name: 'Serengeti, Tanzania', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=70', count: 6 },
    { name: 'Maldives', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=70', count: 9 },
    { name: 'Patagonia', img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=70', count: 5 },
    { name: 'Morocco', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=70', count: 7 },
    { name: 'New Zealand', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=70', count: 10 },
  ];
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero"><h1>Explore Destinations</h1><p>180+ destinations across every continent. Where will you go next?</p></div>
    <div class="info-section">
      <h3>Featured Destinations</h3>
      <div class="deals-grid">
        ${dests.map(d => `
          <div class="deal-card" onclick="navigate('packages');filterByDest('${d.name.split(',')[0]}')">
            <img src="${d.img}" alt="${d.name}" loading="lazy" />
            <div class="deal-card-body">
              <h4>${d.name}</h4>
              <p>${d.count} packages available</p>
              <button class="btn btn-sm btn-outline" onclick="event.stopPropagation();navigate('packages')">Explore</button>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderDeals() {
  const deals = [
    { title: 'Bali Early Bird', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=70', desc: 'Book 60 days ahead and save 20% on our 8-day Bali Retreat', price: '$1,032', original: '$1,290', badge: '20% OFF' },
    { title: 'Japan Spring Special', img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=70', desc: 'Cherry blossom season — 2 free nights when you book before Feb 28', price: '$3,240', original: '$3,600', badge: 'FREE NIGHTS' },
    { title: 'Maldives Honeymoon', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=70', desc: 'Honeymoon package: free couple\'s spa treatment and sunset dhoni cruise', price: '$3,200', original: '$3,800', badge: 'HONEYMOON' },
    { title: 'Morocco Group Deal', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=70', desc: 'Book for 8+ people and receive 15% off per person', price: '$1,258', original: '$1,480', badge: 'GROUP' },
  ];
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero"><h1>Current Deals</h1><p>Exclusive offers, limited-time savings, and early bird discounts.</p></div>
    <div class="info-section">
      <div class="deals-grid">
        ${deals.map(d => `
          <div class="deal-card">
            <div style="position:relative">
              <img src="${d.img}" alt="${d.title}" />
              <span class="badge" style="position:absolute;top:12px;left:12px;background:var(--green-dark);color:white">${d.badge}</span>
            </div>
            <div class="deal-card-body">
              <h4>${d.title}</h4>
              <p>${d.desc}</p>
              <div><span class="deal-price">${d.price}</span><span class="deal-original">${d.original}</span></div>
              <button class="btn btn-sm btn-primary" style="margin-top:12px" onclick="navigate('packages')">Book Now</button>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderGuides() {
  const guides = [
    { title: 'The Complete Guide to Bali', desc: 'Best temples, rice terraces, beaches, and local food — everything you need for your Bali itinerary.', readTime: '12 min read', region: 'Asia' },
    { title: 'First-Time Safari: What to Expect', desc: 'Packing lists, wildlife etiquette, the Big Five, and how to choose the right safari for your budget.', readTime: '15 min read', region: 'Africa' },
    { title: 'Travelling Japan During Blossom Season', desc: 'Timing the sakura bloom, crowd avoidance strategies, and the best viewing spots in every major city.', readTime: '10 min read', region: 'Asia' },
    { title: 'Patagonia Trekking: A Beginner\'s Guide', desc: 'Fitness preparation, gear lists, permit requirements, and everything you need to know before your first Patagonian trek.', readTime: '18 min read', region: 'Americas' },
    { title: 'How to Plan the Perfect Amalfi Coast Trip', desc: 'Driving the coast, choosing your base town, hidden beaches, and the best restaurants with sea views.', readTime: '11 min read', region: 'Europe' },
    { title: 'Maldives on a Budget (Yes, Really)', desc: 'Guesthouses vs resorts, local island hopping, and how to experience paradise without the luxury price tag.', readTime: '9 min read', region: 'Asia' },
  ];
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero"><h1>Travel Guides</h1><p>In-depth guides written by our expert team of seasoned travellers.</p></div>
    <div class="info-section">
      <h3>Latest Guides</h3>
      <div class="info-grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))">
        ${guides.map(g => `
          <div class="info-card" style="cursor:pointer;border:1.5px solid var(--gray-200);background:white" onclick="showToast('Opening guide: ${g.title}')">
            <div style="margin-bottom:8px"><span class="badge badge-green">${g.region}</span></div>
            <h4 style="margin-bottom:8px">${g.title}</h4>
            <p style="margin-bottom:12px">${g.desc}</p>
            <span style="font-size:.78rem;color:var(--gray-400)">${g.readTime}</span>
          </div>`).join('')}
      </div>
    </div>`;
}

// ════════════════════════════════════════════════
// PACKAGE RENDERING
// ════════════════════════════════════════════════
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (grid) grid.innerHTML = PACKAGES.slice(0, 8).map(pkg => pkgCard(pkg)).join('');
}

function renderPackages(list) {
  const grid = document.getElementById('pkgGrid');
  const cnt  = document.getElementById('pkgCount');
  if (grid) {
    if (list.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column:1/-1">
          <div class="es-icon">
            <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </div>
          <p>No packages match your current filters. Try adjusting your search.</p>
        </div>`;
    } else {
      grid.innerHTML = list.map(pkg => pkgCard(pkg)).join('');
    }
  }
  if (cnt) cnt.textContent = list.length;
}

function renderIndividualPackages(dest) {
  let list = PACKAGES.filter(p => p.duration <= 10); // Shorter trips for individuals
  if (dest) {
    list = list.filter(p =>
      p.dest.toLowerCase().includes(dest) ||
      p.region.toLowerCase().includes(dest) ||
      p.title.toLowerCase().includes(dest)
    );
  }
  const grid = document.getElementById('individualGrid');
  if (grid) grid.innerHTML = list.map(pkgCard).join('');
}

function renderFamilyPackages(dest) {
  let list = PACKAGES.filter(p => p.duration <= 14); // Family-friendly durations
  if (dest) {
    list = list.filter(p =>
      p.dest.toLowerCase().includes(dest) ||
      p.region.toLowerCase().includes(dest) ||
      p.title.toLowerCase().includes(dest)
    );
  }
  // Mark packages as family-friendly
  list = list.map(pkg => ({ ...pkg, familyFriendly: true, childDiscount: '20% off for children under 12' }));
  const grid = document.getElementById('familyGrid');
  if (grid) grid.innerHTML = list.map(pkg => pkgCard(pkg, true)).join(''); // Pass true for family mode
}

function renderGroupPackages(dest) {
  let list = PACKAGES.filter(p => p.price <= 3000); // More affordable for groups
  if (dest) {
    list = list.filter(p =>
      p.dest.toLowerCase().includes(dest) ||
      p.region.toLowerCase().includes(dest) ||
      p.title.toLowerCase().includes(dest)
    );
  }
  const grid = document.getElementById('groupGrid');
  if (grid) grid.innerHTML = list.map(pkgCard).join('');
}

function pkgCard(pkg, familyMode = false) {
  const childInfo = familyMode && pkg.childDiscount ? `<div style="font-size:.8rem;color:var(--green);margin-top:4px">👶 ${pkg.childDiscount}</div>` : '';

  // Calculate discount display
  let discountBadge = '';
  let priceDisplay = `<span class="amount">$${pkg.price.toLocaleString()}</span>`;
  if (pkg.discount) {
    const discountPrice = pkg.price * (1 - pkg.discount.percentage / 100);
    discountBadge = `<div class="pkg-badge" style="top:8px;left:8px"><span class="badge badge-red">-${pkg.discount.percentage}% ${pkg.discount.description}</span></div>`;
    priceDisplay = `
      <span class="amount discounted">$${pkg.price.toLocaleString()}</span>
      <span class="amount">$${Math.round(discountPrice).toLocaleString()}</span>
    `;
  }

  return `
    <div class="pkg-card" onclick="openPackage(${pkg.id})" role="button" tabindex="0" aria-label="View ${pkg.title}">
      <div class="pkg-img">
        <img src="${pkg.img}" alt="${pkg.title}" loading="lazy" />
        <div class="pkg-badge"><span class="badge">${pkg.badge}</span></div>
        ${discountBadge}
        ${familyMode ? '<div class="pkg-badge" style="top:8px;right:8px"><span class="badge badge-green">👨‍👩‍👧‍👦 Family</span></div>' : ''}
        <button class="pkg-fav" onclick="event.stopPropagation();showToast('Added to wishlist')" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="pkg-body">
        <div class="pkg-meta">
          <span>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${pkg.dest}
          </span>
          <span>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
            ${pkg.duration} days
          </span>
        </div>
        <div class="pkg-title">${pkg.title}</div>
        <div class="pkg-desc">${pkg.desc.substring(0, 92)}...</div>
        ${childInfo}
        <div class="pkg-footer">
          <div class="pkg-price">
            ${priceDisplay}
            <div class="per">per person</div>
          </div>
          <div class="pkg-rating">
            <span class="stars">&#9733;</span>
            ${pkg.rating}
            <span style="color:var(--gray-400);font-weight:400">(${pkg.reviews})</span>
          </div>
        </div>
      </div>
    </div>`;
}

// ════════════════════════════════════════════════
// PACKAGE DETAIL
// ════════════════════════════════════════════════
function openPackage(id) {
  const pkg = PACKAGES.find(p => p.id === id);
  if (!pkg) return;
  currentPkg = pkg;

  // Hero
  document.getElementById('detailHeroImg').src = pkg.img;
  document.getElementById('detailHeroImg').alt = pkg.title;
  document.getElementById('detailTitle').textContent = pkg.title;
  document.getElementById('detailRegion').textContent = pkg.region;
  document.getElementById('detailDurTag').textContent = pkg.duration + ' days';
  document.getElementById('detailRating').textContent = pkg.rating + ' / 5.0';
  document.getElementById('detailReviews').textContent = pkg.reviews + ' reviews';

  // Pricing
  const tax   = Math.round(pkg.price * 0.12);
  const total = pkg.price + tax;

  // Populate all tab panes
  document.getElementById('tab-overview').innerHTML = `
    <p style="color:var(--gray-600);line-height:1.85;margin-bottom:28px;font-size:.93rem">${pkg.desc}</p>
    <h4 class="detail-section-title">What is Included</h4>
    <div class="includes-grid">${pkg.includes.map(i => `<div class="include-item"><span class="include-check">&#10003;</span>${i}</div>`).join('')}</div>
    <h4 class="detail-section-title">Highlights</h4>
    <div class="highlights-row">${pkg.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}</div>`;

  document.getElementById('tab-itinerary').innerHTML =
    pkg.itinerary.map(d => `
      <div class="itinerary-day">
        <div class="day-label">${d.day}</div>
        <div class="day-title">${d.title}</div>
        <div class="day-desc">${d.desc}</div>
      </div>`).join('');

  document.getElementById('tab-pricing').innerHTML = `
    <div class="price-breakdown" style="margin-bottom:20px">
      <div class="price-row"><span>Base package</span><span>$${pkg.price.toLocaleString()}</span></div>
      <div class="price-row"><span>Accommodation</span><span>Included</span></div>
      <div class="price-row"><span>Guided tours &amp; activities</span><span>Included</span></div>
      <div class="price-row"><span>Meals (as stated)</span><span>Included</span></div>
      <div class="price-row"><span>Airport transfers</span><span>Included</span></div>
      <div class="price-row"><span>Taxes &amp; fees (12%)</span><span>$${tax.toLocaleString()}</span></div>
      <div class="price-row total"><span>Total per person</span><span>$${total.toLocaleString()}</span></div>
    </div>
    <div class="alert alert-success">Group discount: 10% off for 10 or more travelers; 15% for 20 or more travelers.</div>
    <div class="alert alert-info">Flights, travel insurance, and visa fees are not included in the package price.</div>`;

  document.getElementById('tab-reviews').innerHTML = `
    <div style="margin-bottom:24px">
      <h4 style="margin-bottom:16px">Write a Review</h4>
      <div class="form-grid" style="max-width:500px">
        <div class="form-field"><label>Your Name</label><input type="text" id="reviewName" placeholder="John Doe" /></div>
        <div class="form-field"><label>Rating</label>
          <select id="reviewRating">
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
        <div class="form-field full"><label>Your Review</label><textarea id="reviewText" rows="3" placeholder="Share your experience..."></textarea></div>
      </div>
      <button class="btn btn-primary" onclick="submitReview(${pkg.id})" style="margin-top:12px">Submit Review</button>
    </div>
    <h4>Customer Reviews</h4>
    ${pkg.reviewsList.map(r => `
      <div class="review-item">
        <div class="review-header">
          <span class="review-author">${r.author}</span>
          <div><span class="stars">${'&#9733;'.repeat(r.rating)}</span> <span style="font-size:.78rem;color:var(--gray-400)">${r.date}</span></div>
        </div>
        <div class="review-text">${r.text}</div>
      </div>`).join('')}`;

  // Booking card
  document.getElementById('detailBookingCard').innerHTML = `
    <div class="price-big">$${pkg.price.toLocaleString()}</div>
    <div class="price-note">per person &middot; taxes &amp; fees extra</div>
    <div class="price-breakdown">
      <div class="price-row"><span>Base price</span><span>$${pkg.price.toLocaleString()}</span></div>
      <div class="price-row"><span>Taxes &amp; fees (12%)</span><span>$${tax.toLocaleString()}</span></div>
      <div class="price-row total"><span>Total per person</span><span>$${total.toLocaleString()}</span></div>
    </div>
    <button class="btn btn-primary book-card-btn" onclick="navigate('booking')">Book Now</button>
    <button class="btn btn-outline book-card-btn" onclick="addToCompare(currentPkg)">Add to Compare</button>
    <div class="book-card-note">Free cancellation up to 14 days before departure</div>`;

  // Reset to first tab
  activateTab('overview');

  navigate('detail');
}

function activateTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const btn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  const pane = document.getElementById('tab-' + tabId);
  if (btn) btn.classList.add('active');
  if (pane) pane.classList.add('active');
}

function showTab(btn, tabId) {
  activateTab(tabId);
}

// ════════════════════════════════════════════════
// FILTERS
// ════════════════════════════════════════════════
function filterPackages() {
  let list = [...PACKAGES];
  const dest   = document.getElementById('filterDest').value;
  const dur    = document.getElementById('filterDur').value;
  const budget = parseFloat(document.getElementById('filterBudget').value) || Infinity;
  const sort   = document.getElementById('filterSort').value;

  if (dest)   list = list.filter(p => p.region === dest);
  if (dur === 'short')  list = list.filter(p => p.duration <= 5);
  if (dur === 'medium') list = list.filter(p => p.duration >= 6 && p.duration <= 10);
  if (dur === 'long')   list = list.filter(p => p.duration >= 11);
  list = list.filter(p => p.price <= budget);

  if (sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (sort === 'duration')   list.sort((a, b) => a.duration - b.duration);
  if (sort === 'rating')     list.sort((a, b) => b.rating - a.rating);

  renderPackages(list);
}

function clearFilters() {
  document.getElementById('filterDest').value   = '';
  document.getElementById('filterDur').value    = '';
  document.getElementById('filterBudget').value = '';
  document.getElementById('filterSort').value   = 'featured';
  renderPackages(PACKAGES);
}

function filterByDest(keyword) {
  const dest = document.getElementById('filterDest');
  if (dest) {
    const opt = Array.from(dest.options).find(o => o.text.includes(keyword));
    if (opt) { dest.value = opt.value; filterPackages(); }
  }
}

function doSearch() {
  const dest = (document.getElementById('searchDest').value || '').toLowerCase().trim();
  const travelers = parseInt(document.getElementById('searchNum').value) || 1;

  // Redirect based on traveler count
  if (travelers === 1) {
    navigate('individual');
    renderIndividualPackages(dest);
  } else if (travelers >= 2 && travelers <= 10) {
    navigate('family');
    renderFamilyPackages(dest);
  } else {
    navigate('group');
    renderGroupPackages(dest);
  }
}

// ════════════════════════════════════════════════
// BOOKING
// ════════════════════════════════════════════════
function initBooking() {
  if (currentPkg) document.getElementById('bkgPackage').value = currentPkg.title;
  bookingStep = 1;
  rooms = [{ id: 1, people: 2 }];
  renderBookingSteps();
  renderRooms();
  updatePaymentSummary();
}

function renderBookingSteps() {
  for (let i = 1; i <= 4; i++) {
    const stepEl = document.getElementById('step' + i);
    const bodyEl = document.getElementById('bookStep' + i);
    stepEl.classList.remove('active', 'done');
    if (i < bookingStep) { stepEl.classList.add('done'); stepEl.querySelector('.step-circle').innerHTML = '&#10003;'; }
    else if (i === bookingStep) { stepEl.classList.add('active'); stepEl.querySelector('.step-circle').textContent = i; }
    else { stepEl.querySelector('.step-circle').textContent = i; }
    if (bodyEl) bodyEl.classList.toggle('hidden', i !== bookingStep);
  }
}

function nextBookingStep(n) {
  if (n === 2 && !validateBookingStep1()) return;
  bookingStep = n;
  renderBookingSteps();
  if (n === 3) updatePaymentSummary();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderRooms() {
  const container = document.getElementById('roomsContainer');
  if (!container) return;
  container.innerHTML = rooms.map((r, i) => {
    const atMax = r.people >= 15;
    return `
      <div class="room-block${atMax ? ' at-max' : ''}">
        <div class="room-header">
          <span>Room ${i + 1}</span>
          ${rooms.length > 1
            ? `<button class="btn btn-sm btn-danger" onclick="removeRoom(${i})">Remove</button>`
            : ''}
        </div>
        <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap">
          <span style="font-size:.87rem;color:var(--gray-600)">Guests in this room:</span>
          <div class="people-counter">
            <button class="counter-btn" onclick="changePeople(${i}, -1)" ${r.people <= 1 ? 'disabled' : ''} aria-label="Remove guest">&#8722;</button>
            <span class="counter-val">${r.people}</span>
            <button class="counter-btn" onclick="changePeople(${i}, 1)" ${atMax ? 'disabled' : ''} aria-label="Add guest">&#43;</button>
          </div>
          <span class="badge ${atMax ? 'badge-orange' : 'badge-green'}">${r.people} / 15</span>
        </div>
        ${atMax ? `<div class="room-limit-msg">Maximum 15 guests per room reached. Please add another room below.</div>` : ''}
      </div>`;
  }).join('');
}

function changePeople(roomIdx, delta) {
  rooms[roomIdx].people = Math.max(1, Math.min(15, rooms[roomIdx].people + delta));
  renderRooms();
  updatePaymentSummary();
}

function addRoom() {
  rooms.push({ id: rooms.length + 1, people: 1 });
  renderRooms();
  showToast('New room added');
}

function removeRoom(idx) {
  if (rooms.length > 1) {
    rooms.splice(idx, 1);
    renderRooms();
  }
}

function validateBookingStep1() {
  const travelers = parseInt(document.getElementById('bkgTravelers').value) || 0;
  const checkin = document.getElementById('bkgCheckin').value;
  const checkout = document.getElementById('bkgCheckout').value;
  const groupType = document.getElementById('bkgGroupType').value;

  if (travelers < 1) {
    showToast('Please enter the number of travelers');
    return false;
  }
  if (!checkin) {
    showToast('Please select a check-in date');
    return false;
  }
  if (!checkout) {
    showToast('Please select a check-out date');
    return false;
  }
  if (new Date(checkin) >= new Date(checkout)) {
    showToast('Check-out date must be after check-in date');
    return false;
  }
  if (groupType === 'Travel Agent Bulk' && travelers < 10) {
    showToast('Bulk bookings require at least 10 travelers');
    return false;
  }
  return true;
}

function confirmBooking() {
  const ref = 'TB-2025-' + Math.random().toString(36).toUpperCase().substr(2, 6);
  document.getElementById('confirmRef').textContent = ref;
  bookingHistory.push({
    ref,
    pkg:    currentPkg ? currentPkg.title : 'Package',
    date:   new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    status: 'Upcoming',
    amount: currentPkg ? currentPkg.price : 0
  });
  nextBookingStep(4);
}

// ════════════════════════════════════════════════
// LOGIN
// ════════════════════════════════════════════════
function doLogin(event) {
  if (event) event.preventDefault();
  const role = document.getElementById('loginRole').value;
  currentRole = role;
  navigate('dashboard');
  showToast('Signed in as ' + role.charAt(0).toUpperCase() + role.slice(1));
  updateAIVisibility();
}

function doSignup(event) {
  event.preventDefault();
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;

  if (password !== confirmPassword) {
    showToast('Passwords do not match', 'error');
    return;
  }

  const role = document.getElementById('signupRole').value;
  currentRole = role;
  navigate('dashboard');
  showToast('Account created successfully! Signed in as ' + role.charAt(0).toUpperCase() + role.slice(1));
  updateAIVisibility();
}

function switchAuthTab(tab) {
  // Update tab buttons
  document.querySelectorAll('.auth-tab').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[onclick="switchAuthTab('${tab}')"]`).classList.add('active');

  // Update forms
  document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
  document.getElementById(tab + 'Form').classList.add('active');
}

function socialLogin(provider) {
  showToast(`Signing in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}...`);
  setTimeout(() => {
    currentRole = 'customer'; // Default to customer for social login
    navigate('dashboard');
    showToast(`Successfully signed in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`);
    updateAIVisibility();
  }, 1500);
}

// ════════════════════════════════════════════════
// DASHBOARD
// ════════════════════════════════════════════════
const DASH_CONFIGS = {
  customer: {
    label: 'Direct Customer',
    sections: [
      { group: 'Main',  items: [{ icon: 'overview', label: 'Overview' }, { icon: 'bookings', label: 'My Bookings' }, { icon: 'budget', label: 'Budget Tracker' }, { icon: 'notifs', label: 'Notifications' }] },
      { group: 'Trips', items: [{ icon: 'active', label: 'Active Trips' }, { icon: 'past', label: 'Past Trips' }, { icon: 'wishlist', label: 'Wishlist' }] }
    ]
  },
  agent: {
    label: 'Travel Agent',
    sections: [
      { group: 'Main',  items: [{ icon: 'overview', label: 'Overview' }, { icon: 'bulk', label: 'Bulk Bookings' }, { icon: 'clients', label: 'Clients' }, { icon: 'availability', label: 'Availability' }] },
      { group: 'Tools', items: [{ icon: 'commission', label: 'Commission' }, { icon: 'reports', label: 'Reports' }] }
    ]
  },
  corporate: {
    label: 'Corporate Partner',
    sections: [
      { group: 'Main',     items: [{ icon: 'overview', label: 'Overview' }, { icon: 'employees', label: 'Employee Bookings' }, { icon: 'approvals', label: 'Approvals' }, { icon: 'invoices', label: 'Invoices' }] },
      { group: 'Settings', items: [{ icon: 'policy', label: 'Travel Policy' }, { icon: 'spend', label: 'Spend Report' }] }
    ]
  },
  admin: {
    label: 'Administrator',
    sections: [
      { group: 'Management', items: [{ icon: 'overview', label: 'Overview' }, { icon: 'packages', label: 'Packages' }, { icon: 'users', label: 'Users' }, { icon: 'bookings', label: 'Bookings' }] },
      { group: 'System',     items: [{ icon: 'alerts', label: 'Alerts' }, { icon: 'analytics', label: 'Analytics' }, { icon: 'settings', label: 'Settings' }] }
    ]
  }
};

let activeDashSection = 'overview';

function renderDashboard() {
  activeDashSection = 'overview';
  buildSidebar();
  renderDashContent('overview');
}

function buildSidebar() {
  const config = DASH_CONFIGS[currentRole];
  const sidebar = document.getElementById('dashSidebar');
  sidebar.innerHTML = `
    <div class="sidebar-role-banner">
      <div class="sidebar-role-label">Signed in as</div>
      <div class="sidebar-role-name">${config.label}</div>
    </div>
    ${config.sections.map(s => `
      <div class="sidebar-section">
        <div class="sidebar-label">${s.group}</div>
        ${s.items.map(item => `
          <button
            class="sidebar-link${activeDashSection === item.icon ? ' active' : ''}"
            onclick="renderDashContent('${item.icon}')"
          >${item.label}</button>`).join('')}
      </div>`).join('')}`;
}

function renderDashContent(section) {
  activeDashSection = section;

  // Rebuild sidebar to update active states
  buildSidebar();

  const content = document.getElementById('dashContent');
  let html = '';

  if (currentRole === 'customer')  html = getCustomerContent(section);
  if (currentRole === 'agent')     html = getAgentContent(section);
  if (currentRole === 'corporate') html = getCorporateContent(section);
  if (currentRole === 'admin')     html = getAdminContent(section);

  content.innerHTML = html;
}

// ── CUSTOMER ──
function getCustomerContent(s) {
  if (s === 'overview') return `
    <div class="dash-header"><h2>Welcome Back</h2><p>Here is your travel overview</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Total Trips</div><div class="value">7</div><div class="sub">2 upcoming</div></div>
      <div class="stat-card"><div class="label">Countries</div><div class="value">12</div><div class="sub">Visited</div></div>
      <div class="stat-card"><div class="label">Total Spent</div><div class="value">$18,400</div><div class="sub">Lifetime</div></div>
      <div class="stat-card"><div class="label">Reward Points</div><div class="value">4,250</div><div class="sub">Worth ~$85</div></div>
    </div>
    <div class="dash-card">
      <h4>Upcoming Trip</h4>
      <div class="alert alert-success">Japan Cherry Blossom Trail departs March 20, 2025 — 28 days away</div>
      <button class="btn btn-sm btn-outline" onclick="renderDashContent('active')">View Active Trips</button>
    </div>
    <div class="dash-card"><h4>Recent Bookings</h4>${bookingTable(bookingHistory.slice(0, 3), false)}</div>`;

  if (s === 'bookings') return `
    <div class="dash-header"><h2>My Bookings</h2><p>All your past and upcoming reservations</p></div>
    <div class="dash-card">${bookingTable(bookingHistory, true, false)}</div>`;

  if (s === 'budget') return `
    <div class="dash-header"><h2>Budget Tracker</h2><p>Track your travel spending in real time</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Total Budget</div><div class="value">$5,000</div></div>
      <div class="stat-card"><div class="label">Spent</div><div class="value">$3,200</div></div>
      <div class="stat-card"><div class="label">Remaining</div><div class="value" style="color:var(--green)">$1,800</div><div class="sub">36% remaining</div></div>
    </div>
    <div class="dash-card">
      <h4>Spending by Category</h4>
      ${budgetBar('Accommodation', '$1,200', '$1,800', 67)}
      ${budgetBar('Flights',       '$800',   '$1,200', 67)}
      ${budgetBar('Food & Dining', '$450',   '$600',   75)}
      ${budgetBar('Activities',    '$380',   '$600',   63)}
      ${budgetBar('Transport',     '$170',   '$400',   43)}
      ${budgetBar('Shopping',      '$200',   '$400',   50)}
    </div>`;

  if (s === 'notifs') return `
    <div class="dash-header"><h2>Notifications</h2></div>
    <div class="dash-card">
      ${[
        { msg: 'Your Japan trip departs in 28 days — review your itinerary', time: '2 hours ago' },
        { msg: 'Payment confirmed for booking TB-2025-X9KLM', time: '3 days ago' },
        { msg: 'New deal: Bali retreat now from $999 — limited availability', time: '5 days ago' },
        { msg: 'Travel advisory: review Japan entry requirements before travel', time: '1 week ago' }
      ].map(n => `
        <div style="padding:14px 0;border-bottom:1px solid var(--gray-100);display:flex;gap:14px;align-items:flex-start">
          <div style="flex:1">
            <div style="font-size:.88rem;margin-bottom:3px">${n.msg}</div>
            <div style="font-size:.76rem;color:var(--gray-400)">${n.time}</div>
          </div>
          <button class="btn btn-sm btn-ghost-dark" onclick="showToast('Marked as read')">Dismiss</button>
        </div>`).join('')}
    </div>`;

  if (s === 'active') return `
    <div class="dash-header"><h2>Active Trips</h2></div>
    <div class="dash-card">
      <div style="padding:22px;background:var(--green-wash);border-radius:var(--radius);border:1.5px solid var(--green-pale)">
        <div style="font-family:'Playfair Display',serif;font-size:1.2rem;color:var(--green-dark);margin-bottom:6px">Japan Cherry Blossom Trail</div>
        <div style="font-size:.85rem;color:var(--gray-600);margin-bottom:14px">March 20 – April 2, 2025 &middot; 14 days &middot; Tokyo, Kyoto, Osaka</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn btn-sm btn-primary" onclick="showToast('Itinerary downloaded')">Download Itinerary</button>
          <button class="btn btn-sm btn-outline" onclick="openPackage(4)">View Package Details</button>
          <button class="btn btn-sm btn-danger" onclick="cancelBooking('TB-2025-X9KLM')">Cancel Booking</button>
        </div>
      </div>
    </div>`;

  if (s === 'past') return `
    <div class="dash-header"><h2>Past Trips</h2></div>
    <div class="dash-card">${bookingTable(bookingHistory.filter(b => b.status === 'Completed'), false, false)}</div>`;

  if (s === 'wishlist') return `
    <div class="dash-header"><h2>Wishlist</h2></div>
    <div class="dash-card">
      <div class="packages-grid" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr))">
        ${PACKAGES.slice(2, 5).map(pkg => pkgCard(pkg)).join('')}
      </div>
    </div>`;

  return fallbackDash(s);
}

// ── AGENT ──
function getAgentContent(s) {
  if (s === 'overview') return `
    <div class="dash-header"><h2>Agent Dashboard</h2><p>Manage your clients and bookings</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Active Clients</div><div class="value">48</div><div class="sub">+3 this month</div></div>
      <div class="stat-card"><div class="label">Bookings (Q1)</div><div class="value">127</div><div class="sub">+18% vs Q4</div></div>
      <div class="stat-card"><div class="label">Commission Earned</div><div class="value">$12,840</div><div class="sub">This quarter</div></div>
      <div class="stat-card"><div class="label">Pending</div><div class="value">9</div><div class="sub">Confirmations</div></div>
    </div>
    <div class="dash-card">
      <h4>Recent Client Bookings</h4>
      <div class="table-wrap"><table>
        <thead><tr><th>Client</th><th>Package</th><th>Travel Date</th><th>Status</th><th>Commission</th></tr></thead>
        <tbody>
          <tr><td>Anderson Family</td><td>Bali Retreat</td><td>14 Feb 2025</td><td><span class="badge badge-green">Confirmed</span></td><td>$129</td></tr>
          <tr><td>Green Corp Team</td><td>Japan Trail</td><td>20 Mar 2025</td><td><span class="badge badge-blue">Pending</span></td><td>$360</td></tr>
          <tr><td>Ms. K. Williams</td><td>Maldives Escape</td><td>5 Apr 2025</td><td><span class="badge badge-green">Confirmed</span></td><td>$320</td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'bulk') return `
    <div class="dash-header"><h2>Bulk Booking</h2></div>
    <div class="form-card">
      <h3>Create Bulk Booking</h3>
      <div class="form-grid">
        <div class="form-field">
          <label>Client Name or Company <span style="color:red">*</span></label>
          <input type="text" id="bulkClientName" placeholder="ABC Corporation" required />
        </div>
        <div class="form-field">
          <label>Package <span style="color:red">*</span></label>
          <select id="bulkPackage" required>
            <option value="">Select a package</option>
            ${PACKAGES.map(p => `<option value="${p.id}">${p.title}</option>`).join('')}
          </select>
        </div>
        <div class="form-field">
          <label>Number of Travelers <span style="color:red">*</span></label>
          <input type="number" id="bulkTravelers" value="20" min="10" max="200" required />
        </div>
        <div class="form-field">
          <label>Departure Date <span style="color:red">*</span></label>
          <input type="date" id="bulkDate" required />
        </div>
        <div class="form-field full">
          <label>Special Notes</label>
          <textarea rows="2" id="bulkNotes" placeholder="Dietary requirements, room preferences..."></textarea>
        </div>
      </div>
      <button class="btn btn-primary" id="bulkSubmitBtn" onclick="submitBulkBooking()" disabled>Submit Bulk Booking</button>
      <script>
        // Form validation for bulk booking
        function validateBulkForm() {
          const clientName = document.getElementById('bulkClientName').value.trim();
          const packageId = document.getElementById('bulkPackage').value;
          const travelers = document.getElementById('bulkTravelers').value;
          const date = document.getElementById('bulkDate').value;
          const submitBtn = document.getElementById('bulkSubmitBtn');

          const isValid = clientName && packageId && travelers >= 10 && date;
          submitBtn.disabled = !isValid;
          submitBtn.style.opacity = isValid ? '1' : '0.5';
        }

        // Add event listeners
        document.getElementById('bulkClientName').addEventListener('input', validateBulkForm);
        document.getElementById('bulkPackage').addEventListener('change', validateBulkForm);
        document.getElementById('bulkTravelers').addEventListener('input', validateBulkForm);
        document.getElementById('bulkDate').addEventListener('change', validateBulkForm);

        // Initial validation
        validateBulkForm();
      </script>
    </div>`;

  if (s === 'clients') return `
    <div class="dash-header"><h2>Client Management</h2><p>Manage your travel clients and their bookings</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Total Clients</div><div class="value">156</div><div class="sub">Active this year</div></div>
      <div class="stat-card"><div class="label">New This Month</div><div class="value">12</div><div class="sub">+25% growth</div></div>
      <div class="stat-card"><div class="label">Avg. Trip Value</div><div class="value">$2,840</div><div class="sub">Per booking</div></div>
      <div class="stat-card"><div class="label">Commission YTD</div><div class="value">$34,200</div><div class="sub">Earned</div></div>
    </div>
    <div class="dash-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
        <input type="text" id="clientSearch" placeholder="Search clients..." style="border:1.5px solid var(--gray-200);border-radius:8px;padding:9px 14px;font-size:.87rem;outline:none;width:240px" oninput="filterClients()" />
        <div style="display:flex;gap:8px">
          <button class="btn btn-sm btn-outline" onclick="exportClients()">Export</button>
          <button class="btn btn-sm btn-primary" onclick="addNewClient()">Add Client</button>
        </div>
      </div>
      <div class="table-wrap"><table id="clientsTable">
        <thead><tr><th>Client</th><th>Contact</th><th>Type</th><th>Last Trip</th><th>Total Spent</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="clientsTableBody">
          <tr data-client-id="sarah-anderson"><td><strong>Sarah Anderson</strong><br><small>Family of 4</small></td><td>sarah@email.com<br>+1 555-0123</td><td>Individual</td><td>Bali Retreat<br><small>Dec 2024</small></td><td>$8,400</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('sarah-anderson')">View</button></td></tr>
          <tr data-client-id="techcorp-solutions"><td><strong>TechCorp Solutions</strong><br><small>45 employees</small></td><td>travel@techcorp.com<br>+1 555-0456</td><td>Corporate</td><td>Japan Team Building<br><small>Nov 2024</small></td><td>$67,200</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('techcorp-solutions')">View</button></td></tr>
          <tr data-client-id="mike-johnson"><td><strong>Mike Johnson</strong><br><small>Solo traveler</small></td><td>mike@corp.com<br>+1 555-0789</td><td>Business</td><td>Serengeti Safari<br><small>Oct 2024</small></td><td>$24,100</td><td><span class="badge badge-blue">Planning</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('mike-johnson')">View</button></td></tr>
          <tr data-client-id="priya-raj-patel"><td><strong>Priya & Raj Patel</strong><br><small>Couple + 2 kids</small></td><td>priya@biz.com<br>+1 555-0321</td><td>Family</td><td>Maldives Resort<br><small>Sep 2024</small></td><td>$12,800</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('priya-raj-patel')">View</button></td></tr>
          <tr data-client-id="global-marketing"><td><strong>Global Marketing Inc</strong><br><small>28 employees</small></td><td>hr@globalmkt.com<br>+1 555-0654</td><td>Corporate</td><td>Amalfi Team Event<br><small>Aug 2024</small></td><td>$42,600</td><td><span class="badge badge-orange">Inactive</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('global-marketing')">View</button></td></tr>
          <tr data-client-id="carlos-mendes"><td><strong>Carlos Mendes</strong><br><small>Adventure seeker</small></td><td>carlos@travel.co<br>+1 555-0987</td><td>Individual</td><td>Patagonia Trek<br><small>Jul 2024</small></td><td>$14,600</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('carlos-mendes')">View</button></td></tr>
          <tr data-client-id="nordic-enterprises"><td><strong>Nordic Enterprises</strong><br><small>67 employees</small></td><td>travel@nordic.com<br>+1 555-0432</td><td>Corporate</td><td>Multiple destinations<br><small>Jun 2024</small></td><td>$89,400</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('nordic-enterprises')">View</button></td></tr>
          <tr data-client-id="lisa-thompson"><td><strong>Lisa Thompson</strong><br><small>Solo business</small></td><td>lisa@consulting.net<br>+1 555-0765</td><td>Business</td><td>London Conference<br><small>May 2024</small></td><td>$6,200</td><td><span class="badge badge-blue">Planning</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('lisa-thompson')">View</button></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'availability') return `
    <div class="dash-header"><h2>Real-Time Availability</h2></div>
    <div class="dash-card">
      <div class="table-wrap"><table>
        <thead><tr><th>Package</th><th>Next Departure</th><th>Seats Left</th><th>Status</th></tr></thead>
        <tbody>
          ${PACKAGES.slice(0, 5).map(p => `<tr>
            <td>${p.title}</td>
            <td>${new Date(Date.now() + Math.random() * 90 * 86400000).toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'})}</td>
            <td>${Math.floor(Math.random() * 18) + 2}</td>
            <td><span class="badge badge-green">Available</span></td>
          </tr>`).join('')}
        </tbody>
      </table></div>
    </div>`;

  return fallbackDash(s);
}

// ── CORPORATE ──
function getCorporateContent(s) {
  if (s === 'overview') return `
    <div class="dash-header"><h2>Corporate Travel</h2><p>Manage employee trips and approvals</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Employees</div><div class="value">340</div><div class="sub">Travel-enabled</div></div>
      <div class="stat-card"><div class="label">Active Bookings</div><div class="value">28</div><div class="sub">This quarter</div></div>
      <div class="stat-card"><div class="label">Q1 Spend</div><div class="value">$84,200</div><div class="sub">vs $90k budget</div></div>
      <div class="stat-card"><div class="label">Pending</div><div class="value">5</div><div class="sub">Approvals needed</div></div>
    </div>
    <div class="dash-card">
      <h4>Pending Approvals</h4>
      <div class="table-wrap"><table>
        <thead><tr><th>Employee</th><th>Package</th><th>Purpose</th><th>Cost</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Alice Chen</td><td>Tokyo Business 5-day</td><td>Client Meeting</td><td>$1,840</td><td><button class="btn btn-sm btn-primary" onclick="showToast('Booking approved')">Approve</button> <button class="btn btn-sm btn-danger" onclick="showToast('Booking rejected')">Reject</button></td></tr>
          <tr><td>David Park</td><td>London Summit</td><td>Conference</td><td>$2,100</td><td><button class="btn btn-sm btn-primary" onclick="showToast('Booking approved')">Approve</button> <button class="btn btn-sm btn-danger" onclick="showToast('Booking rejected')">Reject</button></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'employees') return `
    <div class="dash-header"><h2>Employee Bookings</h2></div>
    <div class="dash-card">
      <div class="table-wrap"><table>
        <thead><tr><th>Employee</th><th>Department</th><th>Package</th><th>Dates</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Alice Chen</td><td>Sales</td><td>Tokyo Business</td><td>Feb 14–19</td><td><span class="badge badge-blue">Pending</span></td></tr>
          <tr><td>James Wilson</td><td>Engineering</td><td>Singapore Summit</td><td>Mar 1–4</td><td><span class="badge badge-green">Approved</span></td></tr>
          <tr><td>Maria Santos</td><td>Marketing</td><td>New York Cannes Lions</td><td>Jun 16–22</td><td><span class="badge badge-green">Approved</span></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'approvals') return `
    <div class="dash-header"><h2>Travel Approvals</h2><p>Review and approve employee travel requests</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Pending</div><div class="value">8</div><div class="sub">Awaiting approval</div></div>
      <div class="stat-card"><div class="label">This Month</div><div class="value">24</div><div class="sub">Total requests</div></div>
      <div class="stat-card"><div class="label">Avg. Response</div><div class="value">4.2 hrs</div><div class="sub">Time to approve</div></div>
      <div class="stat-card"><div class="label">Over Budget</div><div class="value">3</div><div class="sub">Need review</div></div>
    </div>
    <div class="dash-card">
      <div class="alert alert-info" style="margin-bottom:20px">
        <strong>8 bookings require approval.</strong> Requests older than 48 hours are automatically escalated to senior management.
      </div>
      <div style="margin-bottom:16px">
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn btn-sm btn-outline active" onclick="filterApprovals('all')">All (8)</button>
          <button class="btn btn-sm btn-outline" onclick="filterApprovals('urgent')">Urgent (3)</button>
          <button class="btn btn-sm btn-outline" onclick="filterApprovals('overbudget')">Over Budget (2)</button>
          <button class="btn btn-sm btn-outline" onclick="filterApprovals('international')">International (5)</button>
        </div>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Submitted</th><th>Employee</th><th>Department</th><th>Destination</th><th>Purpose</th><th>Cost</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td><strong>Today, 09:14</strong><br><small>2 hours ago</small></td><td><strong>Alice Chen</strong><br><small>Senior Sales Rep</small></td><td>Sales</td><td>Tokyo, Japan</td><td>Q1 client review meeting</td><td>$1,840</td><td><span class="badge badge-blue">Pending</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('alice-chen')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('alice-chen')">Reject</button></td></tr>
          <tr><td><strong>Today, 11:32</strong><br><small>23 min ago</small></td><td><strong>David Park</strong><br><small>Tech Lead</small></td><td>Engineering</td><td>London, UK</td><td>Tech conference & team summit</td><td>$2,100</td><td><span class="badge badge-blue">Pending</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('david-park')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('david-park')">Reject</button></td></tr>
          <tr><td><strong>Yesterday</strong><br><small>18 hours ago</small></td><td><strong>Maria Santos</strong><br><small>Marketing Dir</small></td><td>Marketing</td><td>New York, USA</td><td>Cannes Lions advertising festival</td><td>$3,200</td><td><span class="badge badge-orange">Urgent</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('maria-santos')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('maria-santos')">Reject</button></td></tr>
          <tr><td><strong>2 days ago</strong><br><small>48 hours ago</small></td><td><strong>James Wilson</strong><br><small>Product Mgr</small></td><td>Product</td><td>Singapore</td><td>Product strategy offsite</td><td>$1,650</td><td><span class="badge badge-red">Escalated</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('james-wilson')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('james-wilson')">Reject</button></td></tr>
          <tr><td><strong>3 days ago</strong><br><small>72 hours ago</small></td><td><strong>Sarah Kim</strong><br><small>HR Manager</small></td><td>Human Resources</td><td>Vancouver, Canada</td><td>HR leadership conference</td><td>$2,400</td><td><span class="badge badge-red">Escalated</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('sarah-kim')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('sarah-kim')">Reject</button></td></tr>
          <tr><td><strong>Today, 14:45</strong><br><small>1 min ago</small></td><td><strong>Raj Patel</strong><br><small>Sales Rep</small></td><td>Sales</td><td>Mumbai, India</td><td>Client negotiations</td><td>$950</td><td><span class="badge badge-blue">Pending</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('raj-patel')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('raj-patel')">Reject</button></td></tr>
          <tr><td><strong>Yesterday</strong><br><small>16 hours ago</small></td><td><strong>Lisa Thompson</strong><br><small>Finance Dir</small></td><td>Finance</td><td>Sydney, Australia</td><td>Board meeting & audit review</td><td>$4,200 <span class="badge badge-red" style="font-size:0.7rem">Over Budget</span></td><td><span class="badge badge-orange">Urgent</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('lisa-thompson')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('lisa-thompson')">Reject</button></td></tr>
          <tr><td><strong>Today, 08:30</strong><br><small>4 hours ago</small></td><td><strong>Michael Chen</strong><br><small>VP Sales</small></td><td>Sales</td><td>Dubai, UAE</td><td>Regional sales summit</td><td>$2,800</td><td><span class="badge badge-blue">Pending</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('michael-chen')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('michael-chen')">Reject</button></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'invoices') return `
    <div class="dash-header"><h2>Invoices</h2></div>
    <div class="dash-card">
      <div style="display:flex;justify-content:flex-end;margin-bottom:16px">
        <button class="btn btn-primary btn-sm" onclick="showToast('Generating invoice...')">Generate Invoice</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Invoice</th><th>Period</th><th>Amount</th><th>Status</th><th>Download</th></tr></thead>
        <tbody>
          <tr><td>INV-2025-001</td><td>January 2025</td><td>$28,400</td><td><span class="badge badge-green">Paid</span></td><td><button class="btn btn-sm btn-outline" onclick="showToast('Downloading PDF...')">PDF</button></td></tr>
          <tr><td>INV-2025-002</td><td>February 2025</td><td>$31,200</td><td><span class="badge badge-orange">Pending</span></td><td><button class="btn btn-sm btn-outline" onclick="showToast('Downloading PDF...')">PDF</button></td></tr>
        </tbody>
      </table></div>
    </div>`;

  return fallbackDash(s);
}

// ── ADMIN ──
function getAdminContent(s) {
  if (s === 'overview') return `
    <div class="dash-header"><h2>Admin Overview</h2><p>System-wide monitoring and management</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Total Users</div><div class="value">12,840</div><div class="sub">+124 this week</div></div>
      <div class="stat-card"><div class="label">Active Bookings</div><div class="value">3,420</div><div class="sub">+8% vs last month</div></div>
      <div class="stat-card"><div class="label">Revenue (MTD)</div><div class="value">$2.4M</div><div class="sub">On track</div></div>
      <div class="stat-card"><div class="label">Packages Live</div><div class="value">248</div><div class="sub">16 pending review</div></div>
    </div>
    <div class="dash-card">
      <h4>System Status</h4>
      <div class="alert alert-warning">16 packages pending content review for Q2 season update</div>
      <div class="alert alert-red">Payment gateway latency detected: avg 3.2s (normal: under 1s)</div>
      <div class="alert alert-success">All servers operating normally. Last backup: 2 hours ago</div>
    </div>
    <div class="dash-card">
      <h4>Recent Activity</h4>
      <div class="table-wrap"><table>
        <thead><tr><th>Time</th><th>User</th><th>Action</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>2 min ago</td><td>sarah@mail.com</td><td>Booked Bali Retreat</td><td><span class="badge badge-green">OK</span></td></tr>
          <tr><td>8 min ago</td><td>Agent: Martinez</td><td>Bulk booking &times; 24</td><td><span class="badge badge-blue">Processing</span></td></tr>
          <tr><td>12 min ago</td><td>corp@acme.com</td><td>Invoice generated</td><td><span class="badge badge-green">OK</span></td></tr>
          <tr><td>18 min ago</td><td>new_user@abc.com</td><td>Account created</td><td><span class="badge badge-green">OK</span></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'packages') return `
    <div class="dash-header"><h2>Manage Packages</h2><p>${PACKAGES.length} packages live</p></div>
    <div class="dash-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <span style="font-size:.9rem;color:var(--gray-600)">${PACKAGES.length} active packages</span>
        <button class="btn btn-sm btn-primary" onclick="showToast('Opening package creator...')">Add Package</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Package</th><th>Region</th><th>Price</th><th>Duration</th><th>Rating</th><th>Actions</th></tr></thead>
        <tbody>${PACKAGES.map(p => `<tr>
          <td>${p.title}</td><td>${p.region}</td>
          <td>$${p.price.toLocaleString()}</td><td>${p.duration} days</td>
          <td>${p.rating}</td>
          <td>
            <button class="btn btn-sm btn-outline" onclick="showToast('Editing ${p.title}')">Edit</button>
            <button class="btn btn-sm btn-danger" style="margin-left:6px" onclick="showToast('Package hidden')">Hide</button>
          </td>
        </tr>`).join('')}</tbody>
      </table></div>
    </div>`;

  if (s === 'users') return `
    <div class="dash-header"><h2>User Management</h2></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Customers</div><div class="value">11,200</div></div>
      <div class="stat-card"><div class="label">Agents</div><div class="value">840</div></div>
      <div class="stat-card"><div class="label">Corporate</div><div class="value">120</div></div>
      <div class="stat-card"><div class="label">Admins</div><div class="value">12</div></div>
    </div>
    <div class="dash-card">
      <div class="table-wrap"><table>
        <thead><tr><th>User</th><th>Role</th><th>Joined</th><th>Bookings</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>John Smith</td><td>Customer</td><td>Jan 2024</td><td>7</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="showToast('Viewing profile')">View</button></td></tr>
          <tr><td>Martinez Agency</td><td>Agent</td><td>Mar 2023</td><td>248</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="showToast('Viewing profile')">View</button></td></tr>
          <tr><td>ACME Corp</td><td>Corporate</td><td>Jun 2023</td><td>84</td><td><span class="badge badge-orange">Under Review</span></td><td><button class="btn btn-sm btn-outline" onclick="showToast('Viewing profile')">View</button></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'bookings') return `
    <div class="dash-header"><h2>All Bookings</h2></div>
    <div class="dash-card">
      <div class="table-wrap"><table>
        <thead><tr><th>Ref</th><th>Customer</th><th>Package</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-AB3F2</td><td>Sarah Anderson</td><td>Bali Retreat</td><td>Jan 15</td><td>$1,290</td><td><span class="badge badge-green">Completed</span></td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-X9KLM</td><td>Tom Wilson</td><td>Japan Trail</td><td>Mar 20</td><td>$3,600</td><td><span class="badge badge-blue">Upcoming</span></td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-QR7TY</td><td>Lisa Park</td><td>Morocco Expedition</td><td>Feb 10</td><td>$1,480</td><td><span class="badge badge-red">Cancelled</span></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'alerts') return `
    <div class="dash-header"><h2>System Alerts</h2></div>
    <div class="dash-card">
      ${[
        { level: 'alert-red',     msg: 'Critical: Payment gateway latency — 3.2s average (SLA: under 1s)' },
        { level: 'alert-warning', msg: 'Warning: 16 packages awaiting content review' },
        { level: 'alert-warning', msg: 'Warning: 3 unresolved support tickets over 48 hours' },
        { level: 'alert-success', msg: 'Database backup completed successfully — 2 hours ago' },
        { level: 'alert-success', msg: 'All API endpoints responding within normal parameters' },
        { level: 'alert-info',    msg: 'System maintenance scheduled for Sunday 02:00–04:00 UTC' }
      ].map(a => `<div class="alert ${a.level}">${a.msg}</div>`).join('')}
    </div>`;

  if (s === 'analytics') return `
    <div class="dash-header"><h2>Analytics</h2></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Conversion Rate</div><div class="value">4.2%</div><div class="sub">+0.3% vs last month</div></div>
      <div class="stat-card"><div class="label">Avg Order Value</div><div class="value">$2,840</div><div class="sub">+$120 vs last month</div></div>
      <div class="stat-card"><div class="label">Page Views (MTD)</div><div class="value">184k</div><div class="sub">+12% growth</div></div>
      <div class="stat-card"><div class="label">NPS Score</div><div class="value">72</div><div class="sub">Industry avg: 45</div></div>
    </div>
    <div class="dash-card">
      <h4>Top Performing Packages (This Month)</h4>
      <div class="table-wrap"><table>
        <thead><tr><th>Package</th><th>Bookings</th><th>Revenue</th><th>Rating</th></tr></thead>
        <tbody>
          ${PACKAGES.slice(0, 5).map((p, i) => `<tr>
            <td>${p.title}</td>
            <td>${40 - i * 5}</td>
            <td>$${((40 - i * 5) * p.price).toLocaleString()}</td>
            <td>${p.rating}</td>
          </tr>`).join('')}
        </tbody>
      </table></div>
    </div>`;

  return fallbackDash(s);
}

function fallbackDash(s) {
  return `
    <div class="dash-header"><h2>${s.charAt(0).toUpperCase() + s.slice(1)}</h2></div>
    <div class="empty-state">
      <div class="es-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg></div>
      <p>No data available for this section yet.</p>
    </div>`;
}

// ── TABLE & BAR HELPERS ──
function bookingTable(list, actions, showClient = false) {
  if (!list.length) return '<p style="color:var(--gray-400);font-size:.88rem;text-align:center;padding:20px">No bookings found</p>';
  const clientCell = showClient ? '<th>Client</th><th>Location</th>' : '';
  return `<div class="table-wrap"><table>
    <thead><tr><th>Reference</th>${clientCell}<th>Package</th><th>Date</th><th>Status</th><th>Amount</th>${actions ? '<th>Action</th>' : ''}</tr></thead>
    <tbody>${list.map(b => `<tr>
      <td style="font-family:monospace;font-size:.8rem">${b.ref}</td>
      ${showClient ? `<td>${b.client || 'N/A'}</td><td>${b.location || 'N/A'}</td>` : ''}
      <td>${b.pkg}</td>
      <td>${b.date}</td>
      <td><span class="badge ${b.status === 'Completed' ? 'badge-green' : b.status === 'Upcoming' ? 'badge-blue' : 'badge-red'}">${b.status}</span></td>
      <td>$${Number(b.amount).toLocaleString()}</td>
      ${actions ? `<td>${b.status !== 'Cancelled' ? `<button class="btn btn-sm btn-danger" onclick="cancelBooking('${b.ref}')">Cancel</button>` : '<span style="color:var(--gray-400);font-size:.82rem">Cancelled</span>'}</td>` : ''}
    </tr>`).join('')}</tbody>
  </table></div>`;
}

function budgetBar(label, spent, budget, pct) {
  return `
    <div class="budget-bar-wrap">
      <div class="budget-bar-label"><span>${label}</span><span>${spent} of ${budget}</span></div>
      <div class="budget-bar"><div class="budget-bar-fill" style="width:${pct}%"></div></div>
    </div>`;
}

function submitReview(pkgId) {
  const name = document.getElementById('reviewName').value.trim();
  const rating = parseInt(document.getElementById('reviewRating').value);
  const text = document.getElementById('reviewText').value.trim();

  if (!name || !text) {
    showToast('Please fill in all fields');
    return;
  }

  const pkg = PACKAGES.find(p => p.id === pkgId);
  if (pkg) {
    const newReview = {
      author: name,
      rating: rating,
      date: new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
      text: text
    };
    pkg.reviewsList.unshift(newReview);
    pkg.reviews += 1;
    // Recalculate average rating
    const totalRating = pkg.reviewsList.reduce((sum, r) => sum + r.rating, 0);
    pkg.rating = (totalRating / pkg.reviewsList.length).toFixed(1);
    showToast('Review submitted successfully!');
    openPackage(pkgId); // Refresh the page
  }
}

function updateAIVisibility() {
  const fab = document.getElementById('aiFab');
  if (fab) {
    fab.style.display = currentRole === 'admin' ? 'none' : 'flex';
  }
}

// ════════════════════════════════════════════════
// COMPARE
// ════════════════════════════════════════════════
function addToCompare(pkg) {
  if (!pkg) return;
  if (compareList.find(p => p.id === pkg.id)) { showToast(pkg.title + ' is already in compare list'); return; }
  if (compareList.length >= 3) { showToast('You can compare up to 3 packages'); return; }
  compareList.push(pkg);
  updateCompareBar();
  showToast(pkg.title + ' added to comparison');
}

function updateCompareBar() {
  const bar   = document.getElementById('compareBar');
  const items = document.getElementById('compareItems');
  const cnt   = document.getElementById('compareCnt');
  const btn   = document.getElementById('compareBtn');

  if (compareList.length > 0) {
    bar.classList.add('visible');
    items.innerHTML = compareList.map(p =>
      `<div class="compare-item">${p.title} <button onclick="removeCompare(${p.id})" aria-label="Remove">&times;</button></div>`
    ).join('');
    if (cnt) cnt.textContent = compareList.length;
    if (btn) btn.style.display = 'inline-flex';
  } else {
    bar.classList.remove('visible');
    if (btn) btn.style.display = 'none';
  }
}

function removeCompare(id) { compareList = compareList.filter(p => p.id !== id); updateCompareBar(); }
function clearCompare()    { compareList = []; updateCompareBar(); }

function runCompare() {
  if (compareList.length < 2) { showToast('Select at least 2 packages to compare'); return; }
  const rows = ['Destination', 'Region', 'Duration', 'Price', 'Rating', 'Reviews'];
  const keys = ['dest', 'region', 'duration', 'price', 'rating', 'reviews'];
  const fmt  = (key, val) => key === 'price' ? '$' + val.toLocaleString() : key === 'rating' ? val + ' / 5.0' : key === 'duration' ? val + ' days' : val;
  document.getElementById('compareContent').innerHTML = `
    <table style="width:100%;border-collapse:collapse;font-size:.85rem">
      <thead><tr>
        <th style="text-align:left;padding:10px 14px;border-bottom:2px solid var(--gray-200)">Feature</th>
        ${compareList.map(p => `<th style="padding:10px 14px;border-bottom:2px solid var(--gray-200);text-align:center"><div style="font-family:'Playfair Display',serif;font-size:.92rem;color:var(--green-dark)">${p.title}</div></th>`).join('')}
      </tr></thead>
      <tbody>
        ${rows.map((r, i) => `<tr>
          <td style="padding:10px 14px;font-weight:600;color:var(--gray-600);border-bottom:1px solid var(--gray-100)">${r}</td>
          ${compareList.map(p => `<td style="padding:10px 14px;text-align:center;border-bottom:1px solid var(--gray-100)">${fmt(keys[i], p[keys[i]])}</td>`).join('')}
        </tr>`).join('')}
      </tbody>
    </table>`;
  document.getElementById('compareModal').classList.add('open');
}

function closeCompareModal(e) {
  if (e.target.id === 'compareModal') document.getElementById('compareModal').classList.remove('open');
}

// ════════════════════════════════════════════════
// AI CHAT
// ════════════════════════════════════════════════
const AI_RESPONSES = [
  { keywords: ['bali', 'indonesia'], reply: 'Bali is one of our most popular destinations. Our 8-day Enchanted Bali Retreat at $1,290 per person covers temples, rice terraces, Mount Batur sunrise, and a full spa day. Best time to visit is April through October. Visa on Arrival available for most nationalities.' },
  { keywords: ['japan', 'cherry', 'blossom', 'sakura'], reply: 'Our 14-day Japan Cherry Blossom Trail is an extraordinary journey from Tokyo to Osaka. Book early — this package sells out 4-6 months ahead. We track the sakura forecast and adjust departure dates each season.' },
  { keywords: ['budget', 'cheap', 'affordable', 'value'], reply: 'Our best value packages are Morocco ($1,480 / 9 days) and Bali ($1,290 / 8 days). Group discounts of 10-15% apply for 10 or more travelers. Early bird discounts of 20% are available 60 days ahead.' },
  { keywords: ['safari', 'africa', 'serengeti', 'tanzania'], reply: 'Our Serengeti Safari Adventure is a premium 12-day experience at $4,200 per person, rated 5.0 stars. The Great Migration occurs July-October; the Ngorongoro Crater offers year-round Big Five sightings.' },
  { keywords: ['cancel', 'refund'], reply: 'Free cancellation is available up to 14 days before departure. Between 7 and 14 days, a 25% fee applies. Within 7 days, bookings are non-refundable. You can cancel directly from your Dashboard.' },
  { keywords: ['group', 'corporate', 'team', 'family'], reply: 'We offer dedicated group booking tools. Groups of 10+ receive 10% off; 20+ get 15% off. Corporate accounts include approval workflows, invoices, and an account manager. Contact corporate@travelbooker.com.' },
  { keywords: ['visa'], reply: 'Visa requirements vary by nationality and destination. We provide documentation guidance for all packages. Generally: Bali — Visa on Arrival for most; Japan — visa-free for EU, UK, US; Morocco — visa-free for most Western passports.' },
  { keywords: ['maldives', 'overwater'], reply: 'Our Maldives Overwater Escape is 7 days at $3,200 per person, rated 5.0 stars. The overwater villa includes seaplane transfers, full board, snorkel equipment, and a sunset dhoni cruise. Perfect for honeymoons.' },
  { keywords: ['patagonia', 'trek', 'chile', 'argentina'], reply: 'Our 15-day Patagonia Wilderness Trek covers Torres del Paine, Perito Moreno Glacier, and the Fitz Roy massif at $3,900 per person. Moderate to challenging fitness level required. Best season: November through March.' }
];

function toggleAI() {
  if (currentRole === 'admin') return; // Hide AI for admin
  const panel = document.getElementById('aiPanel');
  aiOpen = !aiOpen;
  panel.classList.toggle('open', aiOpen);
  if (aiOpen) document.getElementById('aiInput').focus();
}

function openAI() {
  if (currentRole === 'admin') return; // Hide AI for admin
  aiOpen = true;
  document.getElementById('aiPanel').classList.add('open');
  document.getElementById('aiInput').focus();
}

function sendAI() {
  const input = document.getElementById('aiInput');
  const msg   = input.value.trim();
  if (!msg) return;
  addAIMessage(msg, 'user');
  input.value = '';
  // Typing indicator
  setTimeout(() => {
    const lower = msg.toLowerCase();
    let reply = 'I can help with destination recommendations, package details, visa guidance, group bookings, cancellations, and more. Try asking about a specific destination or feature.';
    for (const r of AI_RESPONSES) {
      if (r.keywords.some(kw => lower.includes(kw))) { reply = r.reply; break; }
    }
    addAIMessage(reply, 'bot');
  }, 550);
}

function addAIMessage(text, type) {
  const msgs = document.getElementById('aiMessages');
  const div  = document.createElement('div');
  div.className = 'ai-msg ' + type;
  div.innerHTML  = `<div class="bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// ════════════════════════════════════════════════
// PILL TABS
// ════════════════════════════════════════════════
function switchPillTab(btn, groupId) {
  const group = document.getElementById(groupId);
  if (group) group.querySelectorAll('.pill-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ════════════════════════════════════════════════
// TOAST
// ════════════════════════════════════════════════
let _toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimeout);
  _toastTimeout = setTimeout(() => t.classList.remove('show'), 3000);
}

function submitBulkBooking() {
  const clientName = document.getElementById('bulkClientName').value.trim();
  const packageId = parseInt(document.getElementById('bulkPackage').value);
  const travelers = parseInt(document.getElementById('bulkTravelers').value);
  const date = document.getElementById('bulkDate').value;
  const notes = document.getElementById('bulkNotes').value;

  if (!clientName || !packageId || !travelers || !date) {
    showToast('Please fill in all required fields', 'error');
    return;
  }

  if (travelers < 10) {
    showToast('Bulk bookings require at least 10 travelers', 'error');
    return;
  }

  // In a real app, this would submit to backend
  showToast(`Bulk booking submitted for ${clientName}. Awaiting confirmation.`);
  // Reset form
  document.getElementById('bulkClientName').value = '';
  document.getElementById('bulkPackage').value = '';
  document.getElementById('bulkTravelers').value = '20';
  document.getElementById('bulkDate').value = '';
  document.getElementById('bulkNotes').value = '';
  validateBulkForm();
}

function approveBooking(employeeId) {
  showToast(`Booking approved for ${employeeId.replace('-', ' ')}`);
  // In a real app, this would update the database
  setTimeout(() => {
    renderDashContent('approvals'); // Refresh the approvals list
  }, 500);
}

function rejectBooking(employeeId) {
  const reason = prompt('Please provide a reason for rejection:');
  if (reason) {
    showToast(`Booking rejected for ${employeeId.replace('-', ' ')}: ${reason}`);
    setTimeout(() => {
      renderDashContent('approvals'); // Refresh the approvals list
    }, 500);
  }
}

function filterApprovals(filter) {
  showToast(`Filtering approvals by: ${filter}`);
  // In a real app, this would filter the table data
}

// Client management functions
function filterClients() {
  const searchTerm = document.getElementById('clientSearch').value.toLowerCase();
  const rows = document.querySelectorAll('#clientsTableBody tr');

  rows.forEach(row => {
    const clientName = row.cells[0].textContent.toLowerCase();
    const contact = row.cells[1].textContent.toLowerCase();
    const type = row.cells[2].textContent.toLowerCase();

    const matches = clientName.includes(searchTerm) ||
                   contact.includes(searchTerm) ||
                   type.includes(searchTerm);

    row.style.display = matches ? '' : 'none';
  });
}

function exportClients() {
  showToast('Exporting client data to CSV...');
  // In a real app, this would generate and download a CSV file
}

function addNewClient() {
  showToast('Opening new client form...');
  // In a real app, this would open a modal or navigate to a form
}

function viewClient(clientId) {
  const client = AGENT_CLIENTS.find(c => c.id === clientId);
  if (!client) {
    showToast('Client profile not found', 'error');
    return;
  }

  const detailHtml = `
    <div class="dash-header"><h2>${client.name}</h2><p>Client details and booking history</p></div>
    <div class="dash-card" style="margin-bottom:20px">
      <div><strong>Contact:</strong> ${client.contact} &bull; ${client.phone}</div>
      <div><strong>Type:</strong> ${client.type}</div>
      <div><strong>Last Trip:</strong> ${client.lastTrip}</div>
      <div><strong>Total Spent:</strong> ${client.totalSpent}</div>
      <div><strong>Status:</strong> <span class="badge ${client.status === 'Active' ? 'badge-green' : client.status === 'Planning' ? 'badge-blue' : 'badge-orange'}">${client.status}</span></div>
      <div><strong>Details:</strong> ${client.details}</div>
    </div>
    <div class="dash-card">
      <h4>Recent Bookings</h4>
      ${bookingTable(bookingHistory.filter(b => b.client && b.client.toLowerCase().includes(client.name.toLowerCase().split(' ')[0])), false)}
    </div>
    <button class="btn btn-sm btn-outline" onclick="renderDashContent('clients')">Back to client list</button>
  `;

  document.getElementById('dashContent').innerHTML = detailHtml;
}

// ════════════════════════════════════════════════
// NEWSLETTER
// ════════════════════════════════════════════════
function handleNewsletter() {
  showToast('Thank you for subscribing to TravelBooker updates');
}

// ════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════
(function init() {
  // Set default search dates
  const today  = new Date();
  const next7  = new Date(today); next7.setDate(today.getDate() + 7);
  const next21 = new Date(today); next21.setDate(today.getDate() + 21);
  const fmt    = d => d.toISOString().split('T')[0];
  const si = document.getElementById('searchIn');
  const so = document.getElementById('searchOut');
  if (si) si.value = fmt(next7);
  if (so) so.value = fmt(next21);

  // Render home featured
  renderFeatured();

  // Keyboard nav for logo
  document.querySelector('.logo').addEventListener('keydown', e => {
    if (e.key === 'Enter') navigate('home');
  });
})();
