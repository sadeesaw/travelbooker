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
    title: 'Sacred City Retreat',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Anuradhapura', 'Sigiriya', 'Kandy'],
    duration: 6,
    price: 115000,
    originalPrice: 140000,
    rating: 4.8,
    reviews: 245,
    img: 'https://www.distinctdestinations.in/DistinctDestinationsBackEndImg/downloads/Kandy-Perahera-A-Many-Splendoured-Spectacle--9.jpg',
    badge: 'Best Seller',
    desc: 'Ancient Kingdom Trail: Explore the rich heritage of Sri Lanka from Colombo to Anuradhapura, Sigiriya, and Kandy.',
    includes: [
      '5-star & 4-star hotels', 'Breakfast & Dinner', 'Private AC vehicle + transfers',
      'Anuradhapura Sacred City Tour', 'Sigiriya Rock Fortress Visit', 'Kandy Temple of the Tooth'
    ],
    highlights: ['Anuradhapura Sacred City', 'Sigiriya Rock Fortress', 'Kandy Cultural Sites'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo Check-in', desc: 'Meet your local host and settle into your Colombo hotel.' },
      { day: 'Day 2', title: 'Anuradhapura', desc: 'Explore ancient ruins and sacred sites.' },
      { day: 'Day 3', title: 'Sigiriya', desc: 'Climb the rock fortress and enjoy the views.' },
      { day: 'Day 4-5', title: 'Kandy', desc: 'Visit temples and cultural sites.' },
      { day: 'Day 6', title: 'Return Transfer', desc: 'Comfortable road transfer back to Colombo or your next local stop.' }
    ],
    reviewsList: [
      { author: 'John D.', rating: 5, date: 'March 2025', text: 'Amazing cultural experience. Sigiriya was breathtaking.' },
      { author: 'Sara L.', rating: 5, date: 'February 2025', text: 'Perfect introduction to Sri Lankan heritage.' }
    ]
  },
  {
    id: 2,
    title: 'Beach Escape',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Bentota', 'Galle'],
    duration: 5,
    price: 165000,
    originalPrice: 195000,
    rating: 4.7,
    reviews: 198,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/587129613.webp?k=113434455153a5f4814d9151a40e1e706e05af7a673466e63ed999f8a4705c9c&o=',
    badge: 'Popular',
    desc: 'Sun, Sand & Serenity: Relax on beautiful beaches from Colombo to Bentota and Galle.',
    includes: [
      'Beachfront resorts', 'Breakfast', 'Private car transfers',
      'Bentota water sports', 'Galle Fort walking tour'
    ],
    highlights: ['Bentota Beach', 'Galle Fort', 'Water Sports'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo to Bentota', desc: 'Transfer and relax on the beach.' },
      { day: 'Day 2-3', title: 'Bentota Activities', desc: 'Water sports and beach time.' },
      { day: 'Day 4', title: 'Galle', desc: 'Explore the fort and town.' },
      { day: 'Day 5', title: 'Return Transfer', desc: 'Road transfer back to Colombo after your coastal stay.' }
    ],
    reviewsList: [
      { author: 'Mike R.', rating: 5, date: 'April 2025', text: 'Perfect beach getaway. Bentota was stunning.' },
      { author: 'Anna K.', rating: 4, date: 'March 2025', text: 'Great value and beautiful beaches.' }
    ]
  },
  {
    id: 3,
    title: 'Hill Country Escape',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Kandy', 'Nuwara Eliya', 'Ella'],
    duration: 6,
    price: 135000,
    originalPrice: 165000,
    rating: 4.9,
    reviews: 312,
    img: 'https://www.visittheglobe.com/wp-content/uploads/2025/07/Best-Places-to-Visit-in-Nuwara-Eliya-banner.webp',
    badge: 'Nature',
    desc: 'Misty Hills Adventure: Discover the scenic beauty of Sri Lanka\'s hill country.',
    includes: [
      'Boutique hotels', 'Breakfast', 'Train + private transfers',
      'Scenic train ride', 'Tea plantation visit'
    ],
    highlights: ['Kandy', 'Nuwara Eliya', 'Ella', 'Tea Plantations'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo to Kandy', desc: 'Transfer and explore Kandy.' },
      { day: 'Day 2', title: 'Kandy to Nuwara Eliya', desc: 'Visit tea plantations.' },
      { day: 'Day 3-4', title: 'Nuwara Eliya & Ella', desc: 'Scenic views and hikes.' },
      { day: 'Day 5', title: 'Ella Exploration', desc: 'Nine Arches Bridge and more.' },
      { day: 'Day 6', title: 'Return Transfer', desc: 'Scenic return transfer from Ella to your onward Sri Lanka destination.' }
    ],
    reviewsList: [
      { author: 'David S.', rating: 5, date: 'May 2025', text: 'Breathtaking landscapes. The train ride was unforgettable.' },
      { author: 'Lisa M.', rating: 5, date: 'April 2025', text: 'Perfect for nature lovers.' }
    ]
  },
  {
    id: 4,
    title: 'Lion Rock Escape',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Dambulla', 'Sigiriya', 'Polonnaruwa'],
    duration: 4,
    price: 140000,
    originalPrice: 170000,
    rating: 5.0,
    reviews: 156,
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Sigiriya_%28141688197%29.jpeg',
    badge: 'Adventure',
    desc: 'Ancient Wonders Trail: Discover the majestic Sigiriya Rock Fortress and surrounding cultural sites.',
    includes: [
      '4-star hotels', 'Breakfast & Dinner', 'Private AC vehicle + transfers',
      'Sigiriya Rock Fortress climb', 'Dambulla Cave Temple visit', 'Polonnaruwa ancient city tour'
    ],
    highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temples', 'Polonnaruwa Ancient City'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo to Dambulla', desc: 'Transfer and visit Dambulla Cave Temples.' },
      { day: 'Day 2', title: 'Sigiriya', desc: 'Climb the legendary rock fortress.' },
      { day: 'Day 3', title: 'Polonnaruwa', desc: 'Explore ancient ruins and history.' },
      { day: 'Day 4', title: 'Return Transfer', desc: 'Road transfer back to Colombo with optional stops en route.' }
    ],
    reviewsList: [
      { author: 'Tom H.', rating: 5, date: 'June 2025', text: 'Sigiriya was incredible. The views from the top are breathtaking.' },
      { author: 'Emma W.', rating: 5, date: 'May 2025', text: 'Amazing cultural sites. Dambulla caves were stunning.' }
    ]
  },
  {
    id: 5,
    title: 'Luxury Escape',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Sigiriya', 'Galle'],
    duration: 5,
    price: 185000,
    originalPrice: 220000,
    rating: 4.9,
    reviews: 87,
    img: 'https://theportuguesetraveler.com/wp-content/uploads/2024/11/colombo-sri-lanka-drone-view-1.jpg.webp',
    badge: 'Luxury',
    desc: 'Indulge in Elegance: A luxurious journey through Sri Lanka\'s highlights.',
    includes: [
      '5-star resorts', 'Breakfast & Dinner', 'Private luxury vehicle',
      'Spa sessions', 'Private guided tours'
    ],
    highlights: ['Sigiriya', 'Galle', 'Luxury Accommodations', 'Spa Treatments'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo Welcome Stay', desc: 'Private chauffeur meet-and-greet followed by a luxury city stay.' },
      { day: 'Day 2-3', title: 'Sigiriya & Cultural Sites', desc: 'Private tours and luxury stays.' },
      { day: 'Day 4', title: 'Galle', desc: 'Explore the fort and beach.' },
      { day: 'Day 5', title: 'Luxury Return Transfer', desc: 'Private luxury vehicle transfer back to Colombo or your next Sri Lanka hotel.' }
    ],
    reviewsList: [
      { author: 'Sophia L.', rating: 5, date: 'July 2025', text: 'Absolute luxury. Every detail was perfect.' },
      { author: 'James P.', rating: 5, date: 'June 2025', text: 'Worth every penny. Exceptional service.' }
    ]
  },
  {
    id: 6,
    title: 'Honeymoon Package',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Ella', 'Mirissa'],
    duration: 6,
    price: 152000,
    originalPrice: 180000,
    rating: 4.8,
    reviews: 134,
    img: 'https://www.theglobetrottergp.com/wp-content/uploads/2019/05/oDZ1LpuSxCdJQd5UhbjSA_thumb_60bb.jpg',
    badge: 'Romantic',
    desc: 'Romantic Island Escape: Perfect for couples seeking romance and beauty.',
    includes: [
      'Romantic villas & resorts', 'Breakfast & Candlelight Dinner', 'Private transfers',
      'Private beach dinner', 'Whale watching tour'
    ],
    highlights: ['Ella', 'Mirissa', 'Romantic Dinners', 'Whale Watching'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo to Ella', desc: 'Scenic transfer and romantic check-in.' },
      { day: 'Day 2-4', title: 'Ella & Mirissa', desc: 'Explore and relax with romantic touches.' },
      { day: 'Day 5', title: 'Whale Watching', desc: 'Exciting marine adventure.' },
      { day: 'Day 6', title: 'Departure', desc: 'Romantic farewell.' }
    ],
    reviewsList: [
      { author: 'Alex & Mia', rating: 5, date: 'August 2025', text: 'Perfect honeymoon. So romantic and beautiful.' },
      { author: 'Chris & Zoe', rating: 5, date: 'July 2025', text: 'Memorable experience. Highly recommend.' }
    ]
  },
  {
    id: 7,
    title: 'Wellness Retreat',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Bentota', 'Beruwala'],
    duration: 5,
    price: 105000,
    originalPrice: 130000,
    rating: 4.7,
    reviews: 76,
    img: 'https://images.trvl-media.com/lodging/5000000/4620000/4612300/4612252/7afc8fb0.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
    badge: 'Wellness',
    desc: 'Rejuvenate Your Soul: Ayurveda and wellness in Sri Lanka.',
    includes: [
      'Ayurveda resorts', 'Healthy full board meals', 'Private transfers',
      'Daily Ayurveda treatments', 'Yoga & meditation sessions'
    ],
    highlights: ['Bentota', 'Beruwala', 'Ayurveda Treatments', 'Yoga'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo to Bentota', desc: 'Arrival and initial treatment.' },
      { day: 'Day 2-4', title: 'Wellness Program', desc: 'Daily treatments and yoga.' },
      { day: 'Day 5', title: 'Return Transfer', desc: 'Wellness wrap-up and return road transfer to Colombo.' }
    ],
    reviewsList: [
      { author: 'Rachel G.', rating: 5, date: 'September 2025', text: 'Transformative experience. Felt completely renewed.' },
      { author: 'Mark T.', rating: 4, date: 'August 2025', text: 'Great wellness retreat. Highly relaxing.' }
    ]
  },
  {
    id: 8,
    title: 'Scenic Rail Journey',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Kandy', 'Ella'],
    duration: 5,
    price: 155000,
    originalPrice: 185000,
    rating: 4.6,
    reviews: 163,
    img: 'https://lakpura.com/cdn/shop/files/demodara-nine-arch-bridge-ella-sri-lanka-scaled-1_77c0b1eb-4170-472a-b6df-950903726734.jpg?v=1654085052&width=3840',
    badge: 'Experience',
    desc: 'Iconic Train Adventure: Scenic train rides through Sri Lanka\'s landscapes.',
    includes: [
      'Boutique hotels', 'Breakfast', 'Train + transfers',
      'Kandy to Ella train ride', 'Nine Arches Bridge visit'
    ],
    highlights: ['Scenic Train Rides', 'Kandy', 'Ella', 'Nine Arches Bridge'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo to Kandy', desc: 'Train journey and exploration.' },
      { day: 'Day 2-3', title: 'Kandy to Ella', desc: 'Iconic train ride and sights.' },
      { day: 'Day 4', title: 'Ella Exploration', desc: 'Hikes and views.' },
      { day: 'Day 5', title: 'Return Transfer', desc: 'Return transfer after your rail journey through the hill country.' }
    ],
    reviewsList: [
      { author: 'Nina S.', rating: 5, date: 'October 2025', text: 'The train ride was magical. Stunning scenery.' },
      { author: 'Oliver B.', rating: 4, date: 'September 2025', text: 'Unique experience. Loved the train journey.' }
    ]
  },
  {
    id: 9,
    title: 'Corporate Travel',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Kandy', 'Bentota'],
    duration: 3,
    price: 280000,
    originalPrice: 320000,
    rating: 4.5,
    reviews: 45,
    img: 'https://do6raq9h04ex.cloudfront.net/sites/8/2021/07/galle-fort-1050x700-1.jpg',
    badge: 'Corporate',
    desc: 'Corporate Team Retreat: Team building and relaxation in Sri Lanka.',
    includes: [
      '5-star conference facilities', 'All meals & beverages', 'Coach transfer, AV-equipped',
      'Team building activities', 'Group road transfers'
    ],
    highlights: ['Kandy', 'Bentota', 'Team Building', 'Conferences'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo to Kandy', desc: 'Arrival and team activities.' },
      { day: 'Day 2', title: 'Kandy to Bentota', desc: 'More activities and relaxation.' },
      { day: 'Day 3', title: 'Return Transfer', desc: 'Coordinated group road transfer back to Colombo.' }
    ],
    reviewsList: [
      { author: 'Corporate Team A', rating: 5, date: 'November 2025', text: 'Excellent team retreat. Productive and fun.' },
      { author: 'Corporate Team B', rating: 4, date: 'October 2025', text: 'Great facilities and activities.' }
    ]
  },
  {
    id: 10,
    title: 'Corporate Leadership Retreat',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Sigiriya', 'Dambulla'],
    duration: 4,
    price: 390000,
    originalPrice: 450000,
    rating: 4.8,
    reviews: 32,
    img: 'https://whenonearth.net/wp-content/uploads/Sigiriya-Rock-Sri-Lanka.jpg',
    badge: 'Executive',
    desc: 'Executive Strategy Escape: Leadership workshops in luxurious settings.',
    includes: [
      '5-star resorts with conference facilities', 'All inclusive premium dining', 'Luxury coach + transfers',
      'Leadership workshops', 'Guided cultural excursions'
    ],
    highlights: ['Sigiriya', 'Dambulla', 'Workshops', 'Cultural Excursions'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo to Sigiriya', desc: 'Arrival and initial workshop.' },
      { day: 'Day 2-3', title: 'Workshops & Excursions', desc: 'Leadership sessions and cultural tours.' },
      { day: 'Day 4', title: 'Return Transfer', desc: 'Executive road transfer back to Colombo after the retreat.' }
    ],
    reviewsList: [
      { author: 'Executive Group C', rating: 5, date: 'December 2025', text: 'Inspiring retreat. Great for leadership development.' },
      { author: 'Executive Group D', rating: 5, date: 'November 2025', text: 'Luxurious and productive. Highly recommend.' }
    ]
  },
  {
    id: 11,
    title: 'Wildlife Safari',
    region: 'Asia',
    dest: 'Sri Lanka',
    locations: ['Colombo', 'Yala', 'Udawalawe'],
    duration: 4,
    price: 140000,
    originalPrice: 170000,
    rating: 5.0,
    reviews: 156,
    img: 'https://storage.ghost.io/c/06/05/0605d076-503a-4d1d-ace4-836b187f90d8/content/images/size/w1200/2024/10/udawalawe-national-park.webp',
    badge: 'Adventure',
    desc: 'Into the Wild: Experience Sri Lanka\'s wildlife in Yala and Udawalawe.',
    includes: [
      'Safari lodges', 'All meals', 'Safari jeep + transfers',
      'Yala National Park safari', 'Elephant Transit Home visit'
    ],
    highlights: ['Yala Safari', 'Udawalawe Elephants', 'Wildlife Encounters'],
    itinerary: [
      { day: 'Day 1', title: 'Colombo to Yala', desc: 'Transfer and evening safari.' },
      { day: 'Day 2', title: 'Yala Safari', desc: 'Full day wildlife watching.' },
      { day: 'Day 3', title: 'Udawalawe', desc: 'Elephant safari.' },
      { day: 'Day 4', title: 'Return Transfer', desc: 'Return transfer from the safari circuit to Colombo or your next local stop.' }
    ],
    reviewsList: [
      { author: 'Tom H.', rating: 5, date: 'June 2025', text: 'Saw leopards and elephants. Incredible experience.' },
      { author: 'Emma W.', rating: 5, date: 'May 2025', text: 'Best safari I\'ve ever been on.' }
    ]
  }
];

// ════════════════════════════════════════════════
// HOTELS
// ════════════════════════════════════════════════

const HOTELS = [
  {
    id: 1,
    name: 'Heritance Kandalama',
    location: 'Dambulla',
    category: '5-Star Eco Resort',
    rating: 4.8,
    ratingLabel: 'Exceptional',
    reviewIndicator: '10,000+ reviews',
    discount: 12,
    originalPrice: 1300,
    discountedPrice: 1180,
    eventName: 'Eco Luxury',
    eventDate: '2026-09-01',
    amenities: ['Infinity Pool', 'Spa', 'Nature Trails', 'Free WiFi', 'Wildlife View'],
    additionalAmenitiesCount: 10,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/34687318.jpg?k=76cc5b29b46c9e95814271db622f8ce20030cc266d29818b451242f5c6e955c1&o='
  },
  {
    id: 2,
    name: 'Earl\'s Regency',
    location: 'Kandy',
    category: '5-Star',
    rating: 4.7,
    ratingLabel: 'Excellent',
    reviewIndicator: '8,500+ reviews',
    discount: 18,
    originalPrice: 1500,
    discountedPrice: 1320,
    eventName: 'Cultural Stay',
    eventDate: '2026-07-20',
    amenities: ['Pool', 'Spa', 'Mountain Views', 'Free WiFi', 'Fine Dining'],
    additionalAmenitiesCount: 11,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://d3a2q5al71qg9.cloudfront.net/sites/2/2021/01/Slide4.jpg'
  },
  {
    id: 3,
    name: 'Taj Bentota Resort & Spa',
    location: 'Bentota',
    category: '5-Star Beach Resort',
    rating: 4.6,
    ratingLabel: 'Exceptional',
    reviewIndicator: '7,000+ reviews',
    discount: 16,
    originalPrice: 1400,
    discountedPrice: 1180,
    eventName: 'Beachfront Retreat',
    eventDate: '2026-07-28',
    amenities: ['Beachfront', 'Spa', 'Pool', 'Fine Dining', 'Free WiFi'],
    additionalAmenitiesCount: 10,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/17323777.jpg?k=e6e8428985c32104207cab909e749c0fb7965a12a719b5192049aa00e399efc4&o='
  },
  {
    id: 4,
    name: 'Galle Fort Hotel',
    location: 'Galle',
    category: 'Boutique Heritage',
    rating: 4.7,
    ratingLabel: 'Exceptional',
    reviewIndicator: '4,500+ reviews',
    discount: 18,
    originalPrice: 1350,
    discountedPrice: 1170,
    eventName: 'Historic Stay',
    eventDate: '2026-08-05',
    amenities: ['Heritage Rooms', 'Pool', 'Fine Dining', 'Free WiFi'],
    additionalAmenitiesCount: 9,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://www.thehotelguru.com/_images/7c/69/7c69791f0460e2f1ecd437c33298c291/original.jpg'
  },
  {
    id: 5,
    name: 'Heritance Tea Factory',
    location: 'Nuwara Eliya',
    category: '5-Star Unique',
    rating: 4.8,
    ratingLabel: 'Exceptional',
    reviewIndicator: '8,100+ reviews',
    discount: 14,
    originalPrice: 1450,
    discountedPrice: 1247,
    eventName: 'Tea Time Retreat',
    eventDate: '2026-09-20',
    amenities: ['Tea Estate Views', 'Luxury Rooms', 'Spa', 'Free WiFi'],
    additionalAmenitiesCount: 11,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/349259635.jpg?k=0c188c6a235f3cd1ae80c2c52c03b334a6b83ecc8cb1d976de2798a583c35dcc&o='
  },
  {
    id: 6,
    name: '98 Acres Resort & Spa',
    location: 'Ella',
    category: 'Eco Luxury',
    rating: 4.9,
    ratingLabel: 'Exceptional',
    reviewIndicator: '9,300+ reviews',
    discount: 15,
    originalPrice: 1550,
    discountedPrice: 1318,
    eventName: 'Hill Country Retreat',
    eventDate: '2026-09-30',
    amenities: ['Mountain Views', 'Infinity Pool', 'Spa', 'Tea Plantation Walks'],
    additionalAmenitiesCount: 10,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://linkstravelandtours.co.uk/wp-content/uploads/2018/11/98-Acres-Resort-Spa-ella-sri-lanka.jpg'
  },
  {
    id: 7,
    name: 'Cinnamon Wild Yala',
    location: 'Yala',
    category: 'Wildlife Resort',
    rating: 4.7,
    ratingLabel: 'Exceptional',
    reviewIndicator: '5,600+ reviews',
    discount: 20,
    originalPrice: 1600,
    discountedPrice: 1280,
    eventName: 'Safari Adventure',
    eventDate: '2026-10-10',
    amenities: ['Safari', 'Pool', 'Nature Tours', 'Spa', 'Free WiFi'],
    additionalAmenitiesCount: 11,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/679226546.jpg?k=93984560a6eea303c7a8978fa3884e125c29a03629bd06b5f0e7e20b865853a4&o='
  },
  {
    id: 8,
    name: 'Grand Udawalawe Safari Resort',
    location: 'Udawalawe',
    category: 'Safari Resort',
    rating: 4.6,
    ratingLabel: 'Very Good',
    reviewIndicator: '3,800+ reviews',
    discount: 18,
    originalPrice: 1420,
    discountedPrice: 1164,
    eventName: 'Safari Experience',
    eventDate: '2026-11-02',
    amenities: ['Safari', 'Pool', 'Spa', 'River Views', 'Free WiFi'],
    additionalAmenitiesCount: 8,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/66248630.jpg?k=40108e15c84738cbad4e755af76e29290c20e85618567fc69193bb739f07f21c&o='
  },
  {
    id: 9,
    name: 'Shangri-La Colombo',
    location: 'Colombo',
    category: '5-Star Luxury',
    rating: 4.8,
    ratingLabel: 'Exceptional',
    reviewIndicator: '9,900+ reviews',
    discount: 15,
    originalPrice: 1700,
    discountedPrice: 1445,
    eventName: 'City Luxury Escape',
    eventDate: '2026-11-10',
    amenities: ['Infinity Pool', 'Spa', 'City View', 'Gym', 'Free WiFi'],
    additionalAmenitiesCount: 10,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d5/1f/66/deluxe-lake-view-twin.jpg?w=700&h=-1&s=1'
  },
  {
    id: 10,
    name: 'Amangalla',
    location: 'Galle Fort',
    category: 'Ultra Luxury Heritage',
    rating: 4.9,
    ratingLabel: 'Exceptional',
    reviewIndicator: '5,000+ reviews',
    discount: 10,
    originalPrice: 1800,
    discountedPrice: 1620,
    amenities: ['Butler Service', 'Spa', 'Historic Library', 'Fine Dining'],
    additionalAmenitiesCount: 10,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d7/aa/13/amangalla-the-zaal.jpg?w=900&h=500&s=1'
  },
  {
    id: 11,
    name: 'Weligama Bay Marriott Resort & Spa',
    location: 'Weligama',
    category: '5-Star Beach Resort',
    rating: 4.7,
    ratingLabel: 'Excellent',
    reviewIndicator: '4,100+ reviews',
    discount: 17,
    originalPrice: 1650,
    discountedPrice: 1369,
    amenities: ['Beachfront', 'Spa', 'Pool', 'Restaurants', 'Free WiFi'],
    additionalAmenitiesCount: 9,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://www.bookingsrilanka.com/wp-content/uploads/2019/06/2-Weligama-Bay-Marriott-Resort-Spa-09.jpg'
  },
  {
    id: 12,
    name: 'Barberyn Ayurveda Resort',
    location: 'Beruwala',
    category: 'Ayurveda Retreat',
    rating: 4.6,
    ratingLabel: 'Very Good',
    reviewIndicator: '3,900+ reviews',
    discount: 12,
    originalPrice: 1680,
    discountedPrice: 1478,
    amenities: ['Ayurveda', 'Spa', 'Beachfront', 'Yoga', 'Free WiFi'],
    additionalAmenitiesCount: 9,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/48/a3/c8/barberyn-reef-ayurveda.jpg?w=700&h=-1&s=1'
  },
  {
    id: 13,
    name: 'EKHO Ella',
    location: 'Ella',
    category: 'Boutique Resort',
    rating: 4.7,
    ratingLabel: 'Excellent',
    reviewIndicator: '4,000+ reviews',
    discount: 12,
    originalPrice: 1750,
    discountedPrice: 1540,
    amenities: ['Town Views', 'Pool', 'Restaurant', 'Free WiFi'],
    additionalAmenitiesCount: 7,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://lakpura.com/cdn/shop/files/LK15009BD2-03-E.jpg?v=1707728997&width=1445'
  },
  {
    id: 14,
    name: 'Cinnamon Bentota Beach',
    location: 'Bentota',
    category: '5-Star Beach Resort',
    rating: 4.6,
    ratingLabel: 'Very Good',
    reviewIndicator: '4,600+ reviews',
    discount: 14,
    originalPrice: 220,
    discountedPrice: 189,
    amenities: ['Beachfront', 'Pool', 'Spa', 'Water Sports', 'Free WiFi'],
    additionalAmenitiesCount: 9,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/679218200.jpg?k=5dd2f2d697684c603e578155e4c1b5e31ee644d7f2536c3683530ef391a965fe&o='
  },
  {
    id: 15,
    name: 'Jetwing Lake',
    location: 'Kandy',
    category: '5-Star Lakeside Resort',
    rating: 4.5,
    ratingLabel: 'Very Good',
    reviewIndicator: '3,700+ reviews',
    discount: 13,
    originalPrice: 210,
    discountedPrice: 183,
    amenities: ['Lake View', 'Pool', 'Spa', 'Fine Dining', 'Free WiFi'],
    additionalAmenitiesCount: 9,
    compareAction: 'Compare',
    mapAction: 'View on Map',
    viewDetailsAction: 'View Details',
    img: 'https://www.jetwinghotels.com/jetwinglake/wp-content/uploads/sites/8/2024/02/JW-Lake-Intro-1742x871-1.jpg'
  }
];

// ════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════
let currentRole = 'customer';
let currentPkg  = null;
let currentHotel = null;
let compareList = [];
let hotelCompareList = [];
let selectedTravelers = 2;
let rooms       = [{ id: 1, people: 2 }];
let bookingStep = 1;
let aiOpen      = false;

// Currency System
let currentCountry = 'Sri Lanka';
let currentCurrency = 'LKR';
let currencySymbol = 'Rs.';

const CURRENCY_RATES = {
  'Sri Lanka': { code: 'LKR', symbol: 'Rs.', rate: 1 },
  'USA': { code: 'USD', symbol: '$', rate: 0.0030 },
  'UK': { code: 'GBP', symbol: '£', rate: 0.0024 },
  'India': { code: 'INR', symbol: '₹', rate: 0.22 },
  'Australia': { code: 'AUD', symbol: 'A$', rate: 0.0045 },
  'Canada': { code: 'CAD', symbol: 'C$', rate: 0.0040 },
  'Germany': { code: 'EUR', symbol: '€', rate: 0.0027 },
  'Singapore': { code: 'SGD', symbol: 'S$', rate: 0.0040 }
};

function changeCurrency(country) {
  currentCountry = country;
  const currencyData = CURRENCY_RATES[country];
  currentCurrency = currencyData.code;
  currencySymbol = currencyData.symbol;
  
  // Update all price displays
  updateAllPrices();
  
  // Update currency selector display
  const selector = document.getElementById('currencySelector');
  if (selector) {
    selector.value = country;
    syncCustomSelect(selector);
  }
  
  showToast(`Currency changed to ${currentCurrency}`);
}

function convertPrice(lkrAmount) {
  return Math.round(lkrAmount * CURRENCY_RATES[currentCountry].rate);
}

function formatPrice(amount) {
  const converted = convertPrice(amount);
  return `${currencySymbol}${converted.toLocaleString()}`;
}

function updateAllPrices() {
  // Update package prices
  if (document.getElementById('packages')) {
    renderPackages(PACKAGES);
  }
  
  // Update hotel prices
  if (document.getElementById('hotelGrid')) {
    renderHotels(HOTELS);
  }
  
  // Update detail pages
  if (currentPkg) {
    openPackage(currentPkg.id);
  }
  
  if (currentHotel) {
    openHotel(currentHotel.id);
  }
  
  // Update booking summary if open
  if (bookingStep > 0) {
    updatePaymentSummary();
  }
}
let bookingHistory = [
  { ref: 'TB-2025-AB3F2', pkg: 'Sacred City Retreat',         date: 'Jan 15, 2025', status: 'Completed', amount: 115000, client: 'Sarah Anderson', location: 'Colombo, Sri Lanka' },
  { ref: 'TB-2025-X9KLM', pkg: 'Beach Escape',                date: 'Mar 20, 2025', status: 'Upcoming',  amount: 165000, client: 'TechCorp Solutions', location: 'Colombo, Sri Lanka' },
  { ref: 'TB-2025-QR7TY', pkg: 'Hill Country Escape',         date: 'Feb 10, 2025', status: 'Cancelled', amount: 135000, client: 'Mike Johnson', location: 'Kandy, Sri Lanka' },
  { ref: 'TB-2025-MN8PL', pkg: 'Wildlife Safari',             date: 'Dec 5, 2024',  status: 'Completed', amount: 140000, client: 'Priya & Raj Patel', location: 'Yala, Sri Lanka' },
  { ref: 'TB-2025-KL2WX', pkg: 'Luxury Escape',               date: 'Nov 18, 2024', status: 'Completed', amount: 185000, client: 'Carlos Mendes', location: 'Colombo, Sri Lanka' },
  { ref: 'TB-2025-VB9NM', pkg: 'Honeymoon Package',           date: 'Oct 22, 2024', status: 'Completed', amount: 152000, client: 'Nimali Fernando', location: 'Mirissa, Sri Lanka' },
  { ref: 'TB-2025-HJ4QR', pkg: 'Wellness Retreat',            date: 'Sep 8, 2024',  status: 'Completed', amount: 105000, client: 'Lisa Thompson', location: 'Bentota, Sri Lanka' },
  { ref: 'TB-2025-RT3YU', pkg: 'Scenic Rail Journey',         date: 'Aug 15, 2024', status: 'Completed', amount: 155000, client: 'Chaminda Perera', location: 'Ella, Sri Lanka' },
  { ref: 'TB-2025-WE8OP', pkg: 'Corporate Travel',            date: 'Jul 3, 2024',  status: 'Completed', amount: 280000, client: 'Rashika de Silva', location: 'Kandy, Sri Lanka' },
  { ref: 'TB-2025-ZX5CV', pkg: 'Corporate Leadership Retreat', date: 'Jun 12, 2024', status: 'Completed', amount: 390000, client: 'Global Marketing Inc', location: 'Sigiriya, Sri Lanka' },
  { ref: 'TB-2025-BN7MK', pkg: 'Sacred City Retreat',         date: 'May 28, 2024', status: 'Completed', amount: 115000, client: 'Sunil Jayawardena', location: 'Colombo, Sri Lanka' },
  { ref: 'TB-2025-PL9OI', pkg: 'Beach Escape',                date: 'Apr 10, 2024', status: 'Completed', amount: 165000, client: 'Nordic Enterprises', location: 'Bentota, Sri Lanka' }
];

const AGENT_CLIENTS = [
  { id: 'sarah-anderson', name: 'Sarah Anderson', contact: 'sarah@email.com', phone: '+1 555-0123', type: 'Family', lastTrip: 'Sacred City Retreat', totalSpent: 'Rs. 345,000', status: 'Active', details: '4 travellers; 30% repeat-booking rate' },
  { id: 'techcorp-solutions', name: 'TechCorp Solutions', contact: 'travel@techcorp.com', phone: '+1 555-0456', type: 'Corporate', lastTrip: 'Corporate Travel', totalSpent: 'Rs. 1,960,000', status: 'Active', details: '45 employees; 12 bookings this year' },
  { id: 'mike-johnson', name: 'Mike Johnson', contact: 'mike@corp.com', phone: '+1 555-0789', type: 'Business', lastTrip: 'Wildlife Safari', totalSpent: 'Rs. 420,000', status: 'Planning', details: 'Solo executive traveler; prefers premium packages' },
  { id: 'priya-raj-patel', name: 'Priya & Raj Patel', contact: 'priya@biz.com', phone: '+1 555-0321', type: 'Family', lastTrip: 'Honeymoon Package', totalSpent: 'Rs. 760,000', status: 'Active', details: 'Couple+2 children; high interest in Sri Lanka adventures' },
  { id: 'global-marketing', name: 'Global Marketing Inc', contact: 'hr@globalmkt.com', phone: '+1 555-0654', type: 'Corporate', lastTrip: 'Corporate Leadership Retreat', totalSpent: 'Rs. 1,560,000', status: 'Inactive', details: '28 employees; require quarterly trips' },
  { id: 'carlos-mendes', name: 'Carlos Mendes', contact: 'carlos@travel.co', phone: '+1 555-0987', type: 'Individual', lastTrip: 'Luxury Escape', totalSpent: 'Rs. 740,000', status: 'Active', details: 'Adventure travel specialist client' },
  { id: 'nordic-enterprises', name: 'Nordic Enterprises', contact: 'travel@nordic.com', phone: '+1 555-0432', type: 'Corporate', lastTrip: 'Scenic Rail Journey', totalSpent: 'Rs. 2,170,000', status: 'Active', details: '67 employees; strategic partner' },
  { id: 'lisa-thompson', name: 'Lisa Thompson', contact: 'lisa@consulting.net', phone: '+1 555-0765', type: 'Business', lastTrip: 'Wellness Retreat', totalSpent: 'Rs. 420,000', status: 'Planning', details: 'Frequent high-value client' }
];

const ADMIN_USERS = [
  { id: 'john-smith', name: 'John Smith', role: 'Customer', email: 'john@mail.com', joined: 'Jan 2024', bookings: 7, status: 'Active', details: 'Regular family traveler; 3 international trips this year.' },
  { id: 'martinez-agency', name: 'Martinez Agency', role: 'Agent', email: 'contact@martineztravel.com', joined: 'Mar 2023', bookings: 248, status: 'Active', details: 'Top agent partner with corporate and leisure accounts.' },
  { id: 'acme-corp', name: 'ACME Corp', role: 'Corporate', email: 'travel@acme.com', joined: 'Jun 2023', bookings: 84, status: 'Under Review', details: 'Corporate travel agreement pending renewal.' }
];

const ADMIN_BOOKING_TYPE_DATA = [
  { label: 'Leisure Escapes', value: 42, color: '#ff8a5b' },
  { label: 'Corporate Travel', value: 27, color: '#5b6cff' },
  { label: 'Family Tours', value: 18, color: '#18c7a1' },
  { label: 'Wellness & Romance', value: 13, color: '#ffc857' }
];

const ADMIN_OVERVIEW_TREND = [
  { label: 'Mon', value: 52, color: '#5b6cff' },
  { label: 'Tue', value: 64, color: '#24c5a1' },
  { label: 'Wed', value: 71, color: '#ff8a5b' },
  { label: 'Thu', value: 68, color: '#ff5fa2' },
  { label: 'Fri', value: 84, color: '#8f67ff' },
  { label: 'Sat', value: 93, color: '#ffb347' },
  { label: 'Sun', value: 78, color: '#23b5e8' }
];

const ADMIN_RECENT_ACTIVITY = [
  { time: '2 min ago', title: 'Sacred City Retreat was booked', meta: 'Sarah Anderson completed checkout worth Rs. 115,000', tone: 'good' },
  { time: '8 min ago', title: 'Bulk corporate request received', meta: 'Martinez Agency submitted 24 seats for June departures', tone: 'info' },
  { time: '14 min ago', title: 'Top-up payment captured', meta: 'TechCorp Solutions cleared the final invoice installment', tone: 'good' },
  { time: '21 min ago', title: 'Customer engagement spiked', meta: 'Push notification campaign lifted return visits by 12%', tone: 'warm' }
];

const ADMIN_DESTINATION_DATA = [
  { label: 'Ella', value: 92, amount: '92 bookings', color: '#5b6cff' },
  { label: 'Mirissa', value: 81, amount: '81 bookings', color: '#ff8a5b' },
  { label: 'Kandy', value: 74, amount: '74 bookings', color: '#18c7a1' },
  { label: 'Sigiriya', value: 59, amount: '59 bookings', color: '#ffc857' },
  { label: 'Bentota', value: 48, amount: '48 bookings', color: '#ff5fa2' }
];

const ADMIN_ENGAGEMENT_SERIES = [
  { label: 'W1', value: 48 },
  { label: 'W2', value: 56 },
  { label: 'W3', value: 61 },
  { label: 'W4', value: 72 },
  { label: 'W5', value: 68 },
  { label: 'W6', value: 79 }
];

const ADMIN_CHANNEL_DATA = [
  { label: 'Direct', value: 46, detail: '46% of bookings', color: '#5b6cff' },
  { label: 'Travel Agents', value: 31, detail: '31% of bookings', color: '#ff8a5b' },
  { label: 'Corporate', value: 23, detail: '23% of bookings', color: '#18c7a1' }
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
  const infoPages = ['about','careers','contact','press','help','faq','cancel','destinations','deals','guides'];
  let targetId = pageId;

  if (infoPages.includes(pageId)) {
    renderInfoPage(pageId);
    targetId = 'info';
  }

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
  const navMap = { home: 'Home', packages: 'Packages', hotels: 'Destinations', about: 'About', login: 'Login', dashboard: 'Dashboard' };
  let navLabel = navMap[targetId];
  if (targetId === 'info') {
    // For info pages, find the corresponding nav link
    if (pageId === 'about') navLabel = 'About';
    // Add more if needed
  }
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
  if (targetId === 'hotels')    renderHotels(HOTELS);
  if (targetId === 'home')      renderFeatured();
  if (targetId === 'dashboard') renderDashboard();
  if (targetId === 'booking')   initBooking();
  if (targetId === 'individual') renderIndividualPackages();
  if (targetId === 'family')    renderFamilyPackages();
  if (targetId === 'group')     renderGroupPackages();

  initializeCustomSelects(el || document);
  syncCustomSelects(el || document);
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
    guides: renderGuides,
    'group-access': renderGroupAccess,
    'group-dashboard': renderGroupDashboard,
    'group-discounts': renderGroupDiscounts,
    'group-payment': renderGroupPayment,
    'group-policies': renderGroupPolicies,
    'group-comparison': renderGroupComparison,
    'travel-smarter': renderTravelSmarter,
    'corporate-policy': renderCorporatePolicy
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
    <div class="about-hero-card">
      <div class="about-hero-copy">
        <div class="about-kicker">Island-first luxury travel</div>
        <h1>About TravelBooker</h1>
        <p>We design colourful Sri Lanka journeys that feel seamless online and unforgettable in real life, blending boutique stays, local expertise, and smart planning into one polished booking experience.</p>
        <div class="about-hero-actions">
          <button class="btn btn-primary" onclick="navigate('packages')">Explore Packages</button>
          <button class="btn btn-outline" onclick="navigate('hotels')">Browse Destinations</button>
        </div>
      </div>
      <div class="about-hero-visual">
        <div class="about-glass-card accent-coral">
          <span>Travel Promise</span>
          <strong>Handpicked stays, smooth routes, and local experiences that feel easy to book.</strong>
        </div>
        <div class="about-glass-card accent-sky">
          <span>Why Guests Choose Us</span>
          <strong>Packages and destinations curated for couples, families, and premium island getaways.</strong>
        </div>
        <div class="about-orbit about-orbit-one"></div>
        <div class="about-orbit about-orbit-two"></div>
      </div>
    </div>
    <div class="about-metrics-grid">
      <div class="about-metric-card sunrise">
        <div class="metric-value">98K+</div>
        <div class="metric-label">Guest nights and trip enquiries supported</div>
      </div>
      <div class="about-metric-card lagoon">
        <div class="metric-value">15+</div>
        <div class="metric-label">Sri Lanka destinations actively curated by our team</div>
      </div>
      <div class="about-metric-card twilight">
        <div class="metric-value">4.8/5</div>
        <div class="metric-label">Average satisfaction score across completed bookings</div>
      </div>
      <div class="about-metric-card citrus">
        <div class="metric-value">80%</div>
        <div class="metric-label">Packages built with local accommodation and guide partners</div>
      </div>
    </div>
    <div class="about-story-grid">
      <div class="about-story-panel">
        <div class="story-eyebrow">Our Story</div>
        <h2>Designed in Sri Lanka, not just about Sri Lanka</h2>
        <p>TravelBooker was founded in 2026 by a small local team who wanted trip planning to feel more inspiring than spreadsheets and more trustworthy than scattered marketplace listings. We rebuilt the journey around clarity, confidence, and premium local detail.</p>
        <p>That means travellers can move from discovery to booking with one connected flow, while still feeling the character of the island through every hotel, route, and experience we recommend.</p>
      </div>
      <div class="about-highlight-stack">
        <div class="about-highlight-card">
          <span class="highlight-index">01</span>
          <h3>Curated by people on the ground</h3>
          <p>Packages are reviewed with local insight, not copied from generic global inventory.</p>
        </div>
        <div class="about-highlight-card">
          <span class="highlight-index">02</span>
          <h3>Built for modern planning</h3>
          <p>Compare, customise, and manage trips from one streamlined dashboard.</p>
        </div>
        <div class="about-highlight-card">
          <span class="highlight-index">03</span>
          <h3>Premium without feeling distant</h3>
          <p>We mix concierge-like care with practical local knowledge and transparent pricing.</p>
        </div>
      </div>
    </div>
    <div class="info-section">
      <h3>What Makes Us Different</h3>
      <div class="about-experience-grid">
        <div class="about-experience-card" onclick="showToast('Every package is designed around actual Sri Lanka travel rhythms and seasonality.')">
          <div class="experience-icon">01</div>
          <h4>Local-first curation</h4>
          <p>Trips are shaped around monsoon patterns, regional culture, and realistic travel times.</p>
        </div>
        <div class="about-experience-card" onclick="showToast('Your dashboard keeps bookings, budget, and support in one place.')">
          <div class="experience-icon">02</div>
          <h4>Interactive planning tools</h4>
          <p>Guests can compare routes, review inclusions, and track trips through one clean interface.</p>
        </div>
        <div class="about-experience-card" onclick="showToast('We prioritise transparent pricing and reliable service partners.')">
          <div class="experience-icon">03</div>
          <h4>Premium service standards</h4>
          <p>Clear inclusions, responsive support, and trusted supplier relationships stay at the center.</p>
        </div>
      </div>
    </div>
    <div class="info-section">
      <h3>Our Values In Motion</h3>
      <div class="about-values-grid">
        <div class="about-value-card">
          <div class="value-chip">Responsible</div>
          <h4>Travel that gives back</h4>
          <p>We favour operators who support fair pay, lower-impact logistics, and long-term local partnerships.</p>
        </div>
        <div class="about-value-card">
          <div class="value-chip">Transparent</div>
          <h4>No mystery pricing</h4>
          <p>Packages clearly show inclusions, accommodation, and support so guests know what they are buying.</p>
        </div>
        <div class="about-value-card">
          <div class="value-chip">Human</div>
          <h4>Technology with real backup</h4>
          <p>AI helps speed things up, but travellers can still reach a real team when decisions matter.</p>
        </div>
        <div class="about-value-card">
          <div class="value-chip">Expressive</div>
          <h4>Trips with personality</h4>
          <p>From surf escapes to tea-country rail journeys, we keep itineraries rich, specific, and memorable.</p>
        </div>
      </div>
    </div>
    <div class="info-section">
      <h3>Start Your Next Trip</h3>
      <div class="about-cta-panel">
        <div>
          <h4>Want a trip that feels more tailored?</h4>
          <p>Jump into our most popular packages, explore destination collections, or head to the dashboard to manage your next booking.</p>
        </div>
        <div class="about-cta-actions">
          <button class="btn btn-primary" onclick="navigate('packages')">See Packages</button>
          <button class="btn btn-outline" onclick="navigate('dashboard')">Open Dashboard</button>
        </div>
      </div>
    </div>`;
}

function renderCareers() {
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero">
      <h1>Join Our Team</h1>
      <p>Help us build the best domestic travel platform for Sri Lanka.</p>
    </div>
    <div class="info-section">
      <h3>Why Work at TravelBooker</h3>
      <div class="info-grid">
        <div class="info-card"><h4>Annual Travel Credit</h4><p>Every employee receives a Sri Lanka travel credit to experience our local stays and packages first-hand.</p></div>
        <div class="info-card"><h4>Flexible Work</h4><p>Hybrid-friendly roles with collaboration hubs in Colombo and regular field visits around the island.</p></div>
        <div class="info-card"><h4>Competitive Salaries</h4><p>We benchmark against strong local market rates and reward teams that improve guest experience.</p></div>
        <div class="info-card"><h4>Learning Budget</h4><p>Annual funding for courses, certifications, language learning, and hospitality training.</p></div>
      </div>
    </div>
    <div class="info-section">
      <h3>Open Positions</h3>
      <div class="faq-item"><div class="faq-q">Product Designer<span>Colombo / Hybrid</span></div><div class="faq-a">Shape the booking experience for Sri Lanka packages, hotel discovery, and guest dashboards. 3+ years experience preferred.</div></div>
      <div class="faq-item"><div class="faq-q">Operations Coordinator<span>Kandy / Colombo</span></div><div class="faq-a">Coordinate local suppliers, departure schedules, and guest support for domestic trips across the island.</div></div>
      <div class="faq-item"><div class="faq-q">Travel Content Curator<span>Island-wide</span></div><div class="faq-a">Create accurate destination guides, package copy, and itinerary updates for Sri Lanka-based experiences.</div></div>
      <div class="faq-item"><div class="faq-q">Customer Experience Lead<span>Colombo</span></div><div class="faq-a">Lead our local support team and improve every touchpoint from booking confirmation to post-trip follow-up.</div></div>
    </div>
    <div style="text-align:center;margin-top:32px">
      <button class="btn btn-primary" onclick="showToast('Application portal opening - careers@travelbooker.com')">Apply Now</button>
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
        <div class="info-card" style="cursor:pointer" onclick="navigate('info-faq')"><h4>Frequently Asked Questions</h4><p>Answers to the most common questions about bookings, payments, and local travel.</p></div>
        <div class="info-card" style="cursor:pointer" onclick="navigate('info-cancel')"><h4>Cancellation Policy</h4><p>Understand your refund options and cancellation windows.</p></div>
        <div class="info-card" style="cursor:pointer" onclick="openAI()"><h4>Ask the AI Assistant</h4><p>Get instant answers about Sri Lanka destinations, package details, and budgeting.</p></div>
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
    { q: 'How do I modify a booking?', a: 'Log in to your Dashboard, open "My Bookings" and select the trip you want to update. Date changes can usually be requested up to 30 days before the trip, subject to availability and supplier confirmation.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), bank transfers, Apple Pay, Google Pay, and PayPal. All payments are secured by 256-bit SSL encryption via Stripe.' },
    { q: 'What is included in the package price?', a: 'Our package pricing is built around Sri Lanka travel services only: accommodation, local transport, activities, and meals listed in the itinerary. Package details always show exactly what is included.' },
    { q: 'What is the group discount?', a: 'Groups of 10 or more travelers receive a 10% discount. Groups of 20 or more receive 15% off. Corporate groups may be eligible for additional discounts - contact our corporate team.' },
    { q: 'Can I travel solo?', a: 'Absolutely. All packages are available for solo travellers. We offer a small single supplement for certain packages that would otherwise require sharing. Solo traveller groups can also be arranged.' },
    { q: 'What travel insurance do you recommend?', a: 'For domestic travel within Sri Lanka, we recommend cover for cancellations, medical emergencies, and personal belongings, especially for longer stays or adventure activities.' },
    { q: 'How far in advance should I book?', a: 'For peak Sri Lanka travel periods, booking 4 to 8 weeks ahead is ideal. Long weekends, school holidays, and festive periods often sell out fastest.' },
    { q: 'Do I need any special travel documents?', a: 'For domestic travel within Sri Lanka, guests usually only need the identification required by their hotel or payment method. We will clearly list any property-specific requirements before checkout.' }
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
  const isAdmin = currentRole === 'admin';
  return `
    <button class="back-btn" onclick="navigate('home')" style="margin-bottom:12px">Back to Home</button>
    <div class="info-hero" style="margin-bottom:24px"><h1>Cancellation Policy</h1><p>Clear, fair, and transparent. No surprises.</p></div>
    <div class="info-section">
      <h3>Booking Cancellation Terms</h3>
      <div class="policy-notice" style="background:#fef3c7;border:1px solid #f59e0b;border-radius:8px;padding:16px;margin:16px 0;color:#92400e">
        <strong>Important:</strong> Cancellations are only allowed within 10 days after booking. Requests made after the 10-day window may still be processed at TravelBooker's discretion, but standard cancellation fees will apply.
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:.9rem;margin-top:10px">
        <thead><tr><th style="text-align:left;padding:12px 14px;background:var(--green-dark);color:white;border-radius:8px 0 0 0">Cancellation Notice</th><th style="text-align:left;padding:12px 14px;background:var(--green-dark);color:white">Refund</th></tr></thead>
        <tbody>
          <tr><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200)">Within 10 days of booking</td><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200);color:var(--green);font-weight:600">100% full refund</td></tr>
          <tr><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200)">More than 14 days before departure</td><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200);color:var(--green);font-weight:600">100% full refund</td></tr>
          <tr><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200)">7 to 14 days before departure</td><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200);color:#b45309;font-weight:600">75% refund (25% cancellation fee)</td></tr>
          <tr><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200)">3 to 7 days before departure</td><td style="padding:12px 14px;border-bottom:1px solid var(--gray-200);color:#b45309;font-weight:600">50% refund</td></tr>
          <tr><td style="padding:12px 14px">Less than 3 days before departure</td><td style="padding:12px 14px;color:#c0392b;font-weight:600">No refund</td></tr>
        </tbody>
      </table>
    </div>
    <div class="info-section">
      <h3>How to Cancel</h3>
      <p>Log in to your Dashboard, select "My Bookings", and click "Cancel Booking" on the relevant booking. You will receive confirmation and your refund within 5-10 business days to your original payment method.</p>
    </div>
    <div class="info-section">
      <h3>Exceptions</h3>
      <p>Certain peak-season Sri Lanka packages, festival departures, and limited-capacity wildlife stays may have specific cancellation terms shown at the time of booking. TravelBooker may offer a refund or local rebooking support if major weather or transport disruptions affect the itinerary.</p>
      ${isAdmin ? `<div style="margin-top:20px"><button class="btn btn-outline" onclick="updateCancellationPolicy()">Update Policy</button></div>` : ''}
    </div>`;
}

function renderDestinations() {
  const dests = HOTELS.slice(0, 8).map(hotel => ({
    name: hotel.location,
    img: hotel.img,
    count: PACKAGES.filter(pkg => packageMatchesSearch(pkg, hotel.location)).length,
    tag: hotel.category
  }));
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero"><h1>Explore Destinations</h1><p>Discover curated stays and package routes across Sri Lanka.</p></div>
    <div class="info-section">
      <h3>Featured Destinations</h3>
      <div class="deals-grid">
        ${dests.map(d => `
          <div class="deal-card" onclick="navigate('packages');filterByDest('${d.name}')">
            <img src="${d.img}" alt="${d.name}" loading="lazy" />
            <div class="deal-badge"><span class="badge badge-green">${d.tag}</span></div>
            <div class="deal-card-body">
              <h4>${d.name}</h4>
              <p>${d.count} packages available</p>
              <button class="btn btn-sm btn-outline" onclick="event.stopPropagation();navigate('packages');filterByDest('${d.name}')">Explore</button>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderDeals() {
  const deals = PACKAGES.slice(0, 4).map(pkg => ({
    title: pkg.title,
    img: pkg.img,
    desc: `${pkg.desc} Save on selected departures while availability lasts.`,
    price: formatPrice(pkg.price),
    original: formatPrice(pkg.originalPrice || pkg.price),
    badge: pkg.badge.toUpperCase()
  }));
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero"><h1>Current Deals</h1><p>Local offers, early booking savings, and limited-time Sri Lanka package specials.</p></div>
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
    { title: 'Planning a Cultural Triangle Journey', desc: 'How to combine Anuradhapura, Sigiriya, Dambulla, and Polonnaruwa into one smooth Sri Lanka itinerary.', readTime: '12 min read', region: 'Culture' },
    { title: 'Your First Sri Lanka Safari', desc: 'What to pack, when to go, and how to choose between Yala and Udawalawe for wildlife experiences.', readTime: '15 min read', region: 'Wildlife' },
    { title: 'Hill Country by Rail', desc: 'Where to stop between Kandy, Nuwara Eliya, and Ella for scenery, tea country, and local stays.', readTime: '10 min read', region: 'Scenic' },
    { title: 'South Coast Escape Guide', desc: 'Tips for combining Bentota, Galle, and Mirissa into an easy beach-focused trip.', readTime: '11 min read', region: 'Coast' },
    { title: 'How to Travel Sri Lanka with Family', desc: 'Family-friendly transport tips, hotel ideas, and activity pacing for multi-generation trips.', readTime: '13 min read', region: 'Family' },
    { title: 'Wellness Weekends in Sri Lanka', desc: 'The best local areas for ayurveda, yoga, and slow travel without leaving the island.', readTime: '9 min read', region: 'Wellness' },
  ];
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero"><h1>Travel Guides</h1><p>In-depth Sri Lanka guides written by our local team.</p></div>
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
  const pkgGrid = document.getElementById('featuredGrid');
  const hotelGrid = document.getElementById('featuredHotelsGrid');
  if (pkgGrid) pkgGrid.innerHTML = PACKAGES.slice(0, 8).map(pkg => pkgCard(pkg)).join('');
  if (hotelGrid) hotelGrid.innerHTML = HOTELS.slice(0, 8).map(hotel => hotelCard(hotel)).join('');
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

function renderIndividualPackages(dest, budget = Infinity) {
  let list = PACKAGES.filter(p => p.duration <= 10); // Shorter trips for individuals
  const relatedLocations = getRelatedHotelLocations(dest);
  if (dest) list = list.filter(p => packageMatchesSearch(p, dest, relatedLocations));
  list = list.filter(p => p.price <= budget);
  const grid = document.getElementById('individualGrid');
  if (grid) {
    if (list.length === 0) {
      renderEmptyState(grid, 'No packages match your current search. Try a broader term or higher budget.');
    } else {
      grid.innerHTML = list.map(pkg => pkgCard(pkg, '🙎‍♀️ Individual')).join('');
    }
  }
  renderTravelerDestinations('individualHotelGrid', dest, budget);
}

function renderFamilyPackages(dest, budget = Infinity) {
  let list = PACKAGES.filter(p => p.duration <= 14); // Family-friendly durations
  const relatedLocations = getRelatedHotelLocations(dest);
  if (dest) list = list.filter(p => packageMatchesSearch(p, dest, relatedLocations));
  list = list.filter(p => p.price <= budget);
  // Mark packages as family-friendly
  list = list.map(pkg => ({ ...pkg, familyFriendly: true, childDiscount: '20% off for children under 12' }));
  const grid = document.getElementById('familyGrid');
  if (grid) {
    if (list.length === 0) {
      renderEmptyState(grid, 'No family packages match your current search. Try a broader term or higher budget.');
    } else {
      grid.innerHTML = list.map(pkg => pkgCard(pkg, '👨‍👩‍👧‍👦 Family', true)).join('');
    }
  }
  renderTravelerDestinations('familyHotelGrid', dest, budget);
}

function renderGroupPackages(dest, budget = Infinity) {
  let list = [...PACKAGES];
  const relatedLocations = getRelatedHotelLocations(dest);
  if (dest) list = list.filter(p => packageMatchesSearch(p, dest, relatedLocations));
  list = list.filter(p => p.price <= budget);
  const grid = document.getElementById('groupGrid');
  if (grid) {
    if (list.length === 0) {
      renderEmptyState(grid, 'No group packages match your current search. Try a broader term or higher budget.');
    } else {
      grid.innerHTML = list.map(pkg => pkgCard(pkg, '👫🏻 Group', false, true)).join('');
    }
  }
  renderTravelerDestinations('groupHotelGrid', dest, budget);
}

function pkgCard(pkg, travelerLabel = '', familyMode = false, groupMode = false) {
  const childInfo = familyMode && pkg.childDiscount ? `<div style="font-size:.8rem;color:var(--green);margin-top:4px">👶 ${pkg.childDiscount}</div>` : '';

  // Calculate discount display
  const travelerBadgeClass = familyMode ? 'badge-green' : groupMode ? 'badge-blue' : 'badge';
  const travelerBadge = travelerLabel
    ? `<div class="pkg-badge" style="top:8px;right:8px"><span class="badge ${travelerBadgeClass}">${travelerLabel}</span></div>`
    : '';
  let discountBadge = '';
  let priceDisplay = `<span class="amount">${currencySymbol}${convertPrice(pkg.price).toLocaleString()}</span>`;
  if (pkg.discount) {
    const discountPrice = pkg.price * (1 - pkg.discount.percentage / 100);
    discountBadge = `<div class="pkg-badge" style="top:8px;left:8px"><span class="badge badge-red">-${pkg.discount.percentage}% ${pkg.discount.description}</span></div>`;
    priceDisplay = `
      <span class="amount discounted">${currencySymbol}${convertPrice(pkg.price).toLocaleString()}</span>
      <span class="amount">${currencySymbol}${Math.round(convertPrice(discountPrice)).toLocaleString()}</span>
    `;
  }

  return `
    <div class="pkg-card" onclick="openPackage(${pkg.id})" role="button" tabindex="0" aria-label="View ${pkg.title}">
      <div class="pkg-img">
        <img src="${pkg.img}" alt="${pkg.title}" loading="lazy" />
        <div class="pkg-badge"><span class="badge">${pkg.badge}</span></div>
        ${discountBadge}
        ${travelerBadge}
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
  const tax   = Math.round(convertPrice(pkg.price) * 0.12);
  const total = convertPrice(pkg.price) + tax;

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
      <div class="price-row"><span>Base package</span><span>${currencySymbol}${convertPrice(pkg.price).toLocaleString()}</span></div>
      <div class="price-row"><span>Accommodation</span><span>Included</span></div>
      <div class="price-row"><span>Guided tours &amp; activities</span><span>Included</span></div>
      <div class="price-row"><span>Meals (as stated)</span><span>Included</span></div>
      <div class="price-row"><span>Local transfers</span><span>Included</span></div>
      <div class="price-row"><span>Taxes &amp; fees (12%)</span><span>${currencySymbol}${tax.toLocaleString()}</span></div>
      <div class="price-row total"><span>Total per person</span><span>${currencySymbol}${total.toLocaleString()}</span></div>
    </div>
    <div class="alert alert-success">Group discount: 10% off for 10 or more travelers; 15% for 20 or more travelers.</div>
    <div class="alert alert-info">Travel insurance and personal expenses are not included in the package price.</div>`;

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
    <div class="price-big">${currencySymbol}${convertPrice(pkg.price).toLocaleString()}</div>
    <div class="price-note">per person &middot; taxes &amp; fees extra</div>
    <div class="price-breakdown">
      <div class="price-row"><span>Base price</span><span>${currencySymbol}${convertPrice(pkg.price).toLocaleString()}</span></div>
      <div class="price-row"><span>Taxes &amp; fees (12%)</span><span>${currencySymbol}${tax.toLocaleString()}</span></div>
      <div class="price-row total"><span>Total per person</span><span>${currencySymbol}${total.toLocaleString()}</span></div>
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

  if (dest) {
    const relatedLocations = getRelatedHotelLocations(dest);
    list = list.filter(p => packageMatchesSearch(p, dest, relatedLocations));
  }
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
  syncCustomSelects();
  renderPackages(PACKAGES);
}

function filterByDest(keyword) {
  const dest = document.getElementById('filterDest');
  if (dest) {
    const normalizedKeyword = normalizeSearchTerm(keyword);
    const opt = Array.from(dest.options).find(o => normalizeSearchTerm(o.text).includes(normalizedKeyword));
    if (opt) {
      dest.value = opt.value;
      syncCustomSelect(dest);
      filterPackages();
    }
  }
}

function initializeCustomSelects(root = document) {
  const selects = [];

  if (root instanceof Element && root.matches('select')) {
    selects.push(root);
  }

  if (root.querySelectorAll) {
    selects.push(...root.querySelectorAll('select'));
  }

  selects.forEach(select => {
    if (select.dataset.customSelectReady === 'true' || select.multiple || select.size > 1) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'custom-select-wrap';

    if (select.classList.contains('nav-currency-selector')) {
      wrapper.classList.add('custom-select-nav');
    }
    if (select.closest('.filter-group')) {
      wrapper.classList.add('custom-select-filter');
    }
    if (select.closest('.form-field')) {
      wrapper.classList.add('custom-select-form');
    }
    if (select.closest('.search-field')) {
      wrapper.classList.add('custom-select-search');
    }

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'custom-select-trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');

    const label = document.createElement('span');
    label.className = 'custom-select-label';
    trigger.appendChild(label);

    const menu = document.createElement('div');
    menu.className = 'custom-select-menu';
    menu.setAttribute('role', 'listbox');

    select.parentNode.insertBefore(wrapper, select);
    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);
    wrapper.appendChild(select);

    select.classList.add('custom-select-native');
    select.dataset.customSelectReady = 'true';

    rebuildCustomSelect(select);

    trigger.addEventListener('click', event => {
      event.preventDefault();
      toggleCustomSelect(select);
    });

    trigger.addEventListener('keydown', event => {
      if (['Enter', ' ', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        openCustomSelect(select);
      }
      if (event.key === 'Escape') {
        closeAllCustomSelects();
      }
    });

    select.addEventListener('change', () => syncCustomSelect(select));
  });
}

function rebuildCustomSelect(select) {
  const wrapper = select.parentElement;
  const menu = wrapper ? wrapper.querySelector('.custom-select-menu') : null;
  if (!wrapper || !menu) return;

  menu.innerHTML = Array.from(select.options).map(option => `
    <button
      type="button"
      class="custom-select-option${option.selected ? ' active' : ''}"
      data-value="${option.value}"
      role="option"
      aria-selected="${option.selected ? 'true' : 'false'}"
    >${option.text}</button>
  `).join('');

  menu.querySelectorAll('.custom-select-option').forEach(optionBtn => {
    optionBtn.addEventListener('click', () => {
      select.value = optionBtn.dataset.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      syncCustomSelect(select);
      closeAllCustomSelects();
    });
  });

  syncCustomSelect(select);
}

function syncCustomSelect(select) {
  if (!select || !select.dataset.customSelectReady) return;

  const wrapper = select.parentElement;
  const label = wrapper ? wrapper.querySelector('.custom-select-label') : null;
  const menu = wrapper ? wrapper.querySelector('.custom-select-menu') : null;
  const selectedOption = select.options[select.selectedIndex] || select.options[0];

  if (label && selectedOption) {
    label.textContent = selectedOption.text;
  }

  if (menu) {
    menu.querySelectorAll('.custom-select-option').forEach(optionBtn => {
      const isActive = optionBtn.dataset.value === select.value;
      optionBtn.classList.toggle('active', isActive);
      optionBtn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }
}

function syncCustomSelects(root = document) {
  const selects = root.querySelectorAll ? root.querySelectorAll('select[data-custom-select-ready="true"]') : [];
  selects.forEach(select => syncCustomSelect(select));
}

function toggleCustomSelect(select) {
  const wrapper = select ? select.parentElement : null;
  if (!wrapper) return;

  const isOpen = wrapper.classList.contains('open');
  closeAllCustomSelects();

  if (!isOpen) {
    wrapper.classList.add('open');
    const trigger = wrapper.querySelector('.custom-select-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
  }
}

function openCustomSelect(select) {
  const wrapper = select ? select.parentElement : null;
  if (!wrapper) return;

  closeAllCustomSelects();
  wrapper.classList.add('open');
  const trigger = wrapper.querySelector('.custom-select-trigger');
  if (trigger) trigger.setAttribute('aria-expanded', 'true');
}

function closeAllCustomSelects() {
  document.querySelectorAll('.custom-select-wrap.open').forEach(wrapper => {
    wrapper.classList.remove('open');
    const trigger = wrapper.querySelector('.custom-select-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
}

document.addEventListener('click', event => {
  if (!event.target.closest('.custom-select-wrap')) {
    closeAllCustomSelects();
  }
});

const customSelectObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        initializeCustomSelects(node);
        syncCustomSelects(node);
      }
    });
  });
});

function normalizeSearchTerm(value) {
  return (value || '').toLowerCase().trim();
}

function renderEmptyState(target, message) {
  if (!target) return;
  target.innerHTML = `
    <div class="empty-state" style="grid-column:1/-1">
      <div class="es-icon">
        <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      </div>
      <p>${message}</p>
    </div>`;
}

function setupHomeSearch() {
  const searchInput = document.getElementById('searchDest');

  if (searchInput && !searchInput.dataset.searchBound) {
    searchInput.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        doSearch();
      }
    });
    searchInput.dataset.searchBound = 'true';
  }
}

function packageMatchesSearch(pkg, term, extraTerms = []) {
  if (!term && extraTerms.length === 0) return true;

  const searchableValues = [
    pkg.dest,
    pkg.region,
    ...(pkg.locations || []),
    pkg.title,
    pkg.desc,
    ...(pkg.highlights || []),
    ...(pkg.includes || []),
    ...((pkg.itinerary || []).flatMap(stop => [stop.title, stop.desc]))
  ]
    .filter(Boolean)
    .map(normalizeSearchTerm);

  const termsToMatch = [term, ...extraTerms]
    .map(normalizeSearchTerm)
    .filter(Boolean);

  return termsToMatch.some(searchTerm =>
    searchableValues.some(value => value.includes(searchTerm))
  );
}

function getRelatedHotelLocations(term) {
  if (!term) return [];
  const normalizedTerm = normalizeSearchTerm(term);

  return [...new Set(
    HOTELS
      .filter(hotel => {
        const hotelName = normalizeSearchTerm(hotel.name);
        const hotelLocation = normalizeSearchTerm(hotel.location);
        return hotelName.includes(normalizedTerm) || hotelLocation.includes(normalizedTerm);
      })
      .map(hotel => hotel.location)
      .filter(Boolean)
  )];
}

function hotelMatchesSearch(hotel, term) {
  if (!term) return true;

  const searchableValues = [
    hotel.name,
    hotel.location,
    hotel.category,
    hotel.eventName,
    ...(hotel.amenities || [])
  ]
    .filter(Boolean)
    .map(normalizeSearchTerm);

  return searchableValues.some(value => value.includes(term));
}

function renderTravelerDestinations(gridId, dest, budget = Infinity) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  let list = [...HOTELS];
  if (dest) list = list.filter(hotel => hotelMatchesSearch(hotel, dest));
  list = list.filter(hotel => hotel.discountedPrice * 100 <= budget);

  if (list.length === 0) {
    renderEmptyState(grid, 'No destinations match your current search. Try a broader term or higher budget.');
    return;
  }

  grid.innerHTML = list.map(hotelCard).join('');
}

function doSearch() {
  const dest = normalizeSearchTerm(document.getElementById('searchDest').value);
  const travelers = parseInt(document.getElementById('searchNum').value) || 1;
  const budget = parseFloat(document.getElementById('searchBudget').value) || Infinity;
  selectedTravelers = travelers;

  // Redirect based on traveler count
  if (travelers === 1) {
    navigate('individual');
    renderIndividualPackages(dest, budget);
  } else if (travelers >= 2 && travelers <= 10) {
    navigate('family');
    renderFamilyPackages(dest, budget);
  } else {
    navigate('group');
    renderGroupPackages(dest, budget);
  }
}

// ════════════════════════════════════════════════
// HOTELS
// ════════════════════════════════════════════════
function hotelCard(hotel) {
  const originalPriceLKR = hotel.originalPrice * 100;
  const discountedPriceLKR = hotel.discountedPrice * 100;
  const originalPrice = convertPrice(originalPriceLKR);
  const discountedPrice = convertPrice(discountedPriceLKR);
  
  return `
    <div class="pkg-card" onclick="openHotel(${hotel.id})">
      <div class="pkg-img">
        <img src="${hotel.img}" alt="${hotel.name}" loading="lazy" />
        <div class="pkg-rating">${'★'.repeat(Math.floor(hotel.rating))}${hotel.rating % 1 ? '☆' : ''} <span>${hotel.rating}</span></div>
        ${hotel.discount > 0 ? `<div class="pkg-badge"><span class="badge badge-red">-${hotel.discount}% OFF</span></div>` : ''}
      </div>
      <div class="pkg-body">
        <div class="pkg-meta">
          <span>${hotel.location}, Sri Lanka</span>
          <span>${hotel.category}</span>
        </div>
        <h3 class="pkg-title">${hotel.name}</h3>
        <div class="pkg-desc">${hotel.eventName}</div>
        <div class="pkg-amenities">${hotel.amenities.slice(0, 3).join(' • ')}${hotel.additionalAmenitiesCount > 0 ? ` +${hotel.additionalAmenitiesCount} more` : ''}</div>
        <div class="pkg-reviews">${hotel.reviewIndicator}</div>
        <div class="pkg-footer">
          <div class="pkg-price">
            ${hotel.discount > 0 ? `<span class="original-price">${currencySymbol}${originalPrice.toLocaleString()}</span>` : ''}
            <span class="amount">${currencySymbol}${discountedPrice.toLocaleString()}</span>
            <div class="per">per night</div>
          </div>
        </div>
      </div>
    </div>`;
}

function renderHotels(list) {
  const grid = document.getElementById('hotelGrid');
  const cnt = document.getElementById('hotelCount');
  if (grid) {
    grid.innerHTML = list.map(hotelCard).join('');
  }
  if (cnt) cnt.textContent = list.length;
}

function filterHotels() {
  let list = [...HOTELS];
  const location = document.getElementById('filterHotelLoc').value;
  const type = document.getElementById('filterHotelCat').value;
  const budget = parseFloat(document.getElementById('filterHotelBudget').value) || Infinity;
  const sort = document.getElementById('filterHotelSort').value;

  if (location) list = list.filter(h => h.location === location);
  if (type) list = list.filter(h => h.category === type);
  list = list.filter(h => h.discountedPrice <= budget);

  if (sort === 'price-asc') list.sort((a, b) => a.discountedPrice - b.discountedPrice);
  if (sort === 'price-desc') list.sort((a, b) => b.discountedPrice - a.discountedPrice);
  if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

  renderHotels(list);
}

function clearHotelFilters() {
  document.getElementById('filterHotelLoc').value = '';
  document.getElementById('filterHotelCat').value = '';
  document.getElementById('filterHotelBudget').value = '';
  document.getElementById('filterHotelSort').value = 'featured';
  syncCustomSelects();
  renderHotels(HOTELS);
}

function openHotel(id) {
  const hotel = HOTELS.find(h => h.id === id);
  if (!hotel) return;

  currentHotel = hotel;
  currentPkg = null;

  // Populate hotel detail page
  document.getElementById('hotelDetailImg').style.backgroundImage = `url('${hotel.img}')`;
  document.getElementById('hotelDetailTitle').textContent = hotel.name;
  document.getElementById('hotelDetailLocation').textContent = `${hotel.location}, Sri Lanka`;
  document.getElementById('hotelDetailType').textContent = hotel.category;
  document.getElementById('hotelDetailRating').innerHTML = `${'★'.repeat(Math.floor(hotel.rating))}${hotel.rating % 1 ? '☆' : ''} <span>${hotel.rating} (${hotel.ratingLabel})</span>`;
  document.getElementById('hotelDetailDesc').innerHTML = `
    <p><strong>Event:</strong> ${hotel.eventName}</p>
    <p><strong>Event Date:</strong> ${new Date(hotel.eventDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p><strong>Reviews:</strong> ${hotel.reviewIndicator}</p>
    <p>Experience luxury accommodation with world-class amenities and exceptional service.</p>
  `;

  // Amenities
  document.getElementById('hotelDetailAmenities').innerHTML = hotel.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('');

  // Pricing
  const originalPriceLKR = hotel.originalPrice * 100;
  const discountedPriceLKR = hotel.discountedPrice * 100;
  const originalPrice = convertPrice(originalPriceLKR);
  const discountedPrice = convertPrice(discountedPriceLKR);
  const tax = Math.round(discountedPrice * 0.12);
  const total = discountedPrice + tax;

  document.getElementById('hotelDetailPrice').innerHTML = `
    <div class="price-big">${currencySymbol}${discountedPrice.toLocaleString()}</div>
    <div class="price-note">per traveler &middot; taxes &amp; fees extra</div>
    <div class="price-breakdown" style="margin-bottom:20px">
      <div class="price-row"><span>Base price per traveler</span><span>${currencySymbol}${discountedPrice.toLocaleString()}</span></div>
      ${hotel.discount > 0 ? `<div class="price-row"><span>Original price</span><span style="text-decoration: line-through; color: var(--gray-400)">${currencySymbol}${originalPrice.toLocaleString()}</span></div>` : ''}
      <div class="price-row"><span>Taxes & fees (12%)</span><span>${currencySymbol}${tax.toLocaleString()}</span></div>
      <div class="price-row total"><span>Total per traveler</span><span>${currencySymbol}${total.toLocaleString()}</span></div>
    </div>
    ${hotel.discount > 0 ? `<div class="alert alert-success" style="margin-bottom: 20px">${hotel.discount}% discount applied!</div>` : ''}
    <button class="btn btn-primary book-card-btn" onclick="navigate('booking')">Book Now</button>
    <button class="btn btn-outline book-card-btn" onclick="addToCompare(currentHotel)">Add to Compare</button>
    <div class="book-card-note">Flexible changes available for most destination bookings</div>`;

  navigate('hotel-detail');
}

// ════════════════════════════════════════════════
// BOOKING
// ════════════════════════════════════════════════
function initBooking() {
  const currentItemName = currentPkg ? currentPkg.title : currentHotel ? currentHotel.name : '';
  if (currentItemName) document.getElementById('bkgPackage').value = currentItemName;
  const travelerInput = document.getElementById('bkgTravelers');
  if (travelerInput) travelerInput.value = selectedTravelers;
  bookingStep = 1;
  rooms = [{ id: 1, people: Math.min(15, selectedTravelers) }];
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

function toggleBusinessNameField() {
  const groupType = document.getElementById('bkgGroupType').value;
  const businessField = document.getElementById('businessNameField');
  if (groupType === 'Corporate Group' || groupType === 'Travel Agent Bulk') {
    businessField.style.display = 'block';
  } else {
    businessField.style.display = 'none';
  }
}

function toggleBusinessAuthField(roleId, fieldId) {
  const role = document.getElementById(roleId).value;
  const field = document.getElementById(fieldId);
  if (!field) return;
  if (role === 'agent' || role === 'corporate') {
    field.style.display = 'block';
  } else {
    field.style.display = 'none';
  }
}

function updatePaymentSummary() {
  const travelers = parseInt(document.getElementById('bkgTravelers').value) || 1;
  const basePrice = currentPkg
    ? currentPkg.price
    : currentHotel
      ? currentHotel.discountedPrice * 100
      : 0;
  const subtotal = basePrice * travelers;
  const tax = subtotal * 0.12; // 12% tax
  const total = subtotal + tax;

  // Update payment summary elements if they exist
  const payBaseLabel = document.getElementById('payBaseLabel');
  const paySubtotal = document.getElementById('paySubtotal');
  const payTax = document.getElementById('payTax');
  const payTotal = document.getElementById('payTotal');

  if (payBaseLabel) payBaseLabel.textContent = `Base price for ${travelers} ${travelers === 1 ? 'traveler' : 'travelers'}`;
  if (paySubtotal) paySubtotal.textContent = formatPrice(subtotal);
  if (payTax) payTax.textContent = formatPrice(Math.round(tax));
  if (payTotal) payTotal.textContent = formatPrice(Math.round(total));
}

function handleReceiptUpload(input, labelId) {
  const label = document.getElementById(labelId);
  if (!label) return;
  const fileName = input && input.files && input.files[0] ? input.files[0].name : 'No receipt uploaded yet';
  label.textContent = fileName;
}

function showGroupCoordinationInfo(feature) {
  const valid = ['access', 'dashboard', 'discounts', 'payment', 'policies', 'comparison'];
  if (valid.includes(feature)) {
    navigate('info-group-' + feature);
  } else {
    showToast('Feature page not found', 'error');
  }
}

function renderGroupAccess() {
  return `
    <button class="back-btn" onclick="navigate('group')">Back to Group Coordination</button>
    <div class="info-hero"><h1>Group Access & Tracking</h1><p>Real-time visibility and coordinated workflow for all group members.</p></div>
    <div class="info-section">
      <h3>What You Get</h3>
      <ul>
        <li><strong>Shared Dashboard</strong> for everyone involved in the booking</li>
        <li><strong>Real-time updates</strong> on booking progress, payments and changes</li>
        <li><strong>Group member management</strong>: add, remove or assign roles</li>
        <li><strong>Automated reminders</strong> for documents, payments and check-in</li>
      </ul>
    </div>
  `;
}

function renderGroupDashboard() {
  return `
    <button class="back-btn" onclick="navigate('group')">Back to Group Coordination</button>
    <div class="info-hero"><h1>Trip Coordinator Dashboard</h1><p>Centralized controls for all group travel activities.</p></div>
    <div class="info-section">
      <h3>Dashboard Features</h3>
      <ul>
        <li>Booking overview and status tracking</li>
        <li>Task assignment and deadline monitoring</li>
        <li>Shared document repository for guest lists, payment slips, and rooming details</li>
        <li>Expense and contribution tracking</li>
      </ul>
    </div>
  `;
}

function renderGroupDiscounts() {
  return `
    <button class="back-btn" onclick="navigate('group')">Back to Group Coordination</button>
    <div class="info-hero"><h1>Group Discounts & Packages</h1><p>Tiered pricing and specially curated group packages.</p></div>
    <div class="info-section">
      <h3>Discount Breakpoints</h3>
      <ul>
        <li>10+ travelers: 10% off</li>
        <li>20+ travelers: 15% off + complimentary coordinator support</li>
        <li>50+ travelers: 20% off + custom itinerary creation</li>
      </ul>
      <h3>Why it works</h3>
      <p>By pooling services, accommodations, and transport, the group saves significantly while still getting premium custom options.</p>
    </div>
  `;
}

function renderGroupPayment() {
  return `
    <button class="back-btn" onclick="navigate('group')">Back to Group Coordination</button>
    <div class="info-hero"><h1>Split Payment Tools</h1><p>Flexible payment handling built for groups.</p></div>
    <div class="info-section">
      <ul>
        <li>Individual contribution links</li>
        <li>Coordinator-managed bulk payment option</li>
        <li>Installment and milestone payment plans</li>
        <li>Automatic reminders for outstanding invoices</li>
      </ul>
    </div>
  `;
}

function renderGroupPolicies() {
  return `
    <button class="back-btn" onclick="navigate('group')">Back to Group Coordination</button>
    <div class="info-hero"><h1>Flexible Policies</h1><p>Group-friendly change and cancellation terms.</p></div>
    <div class="info-section">
      <h3>Group Cancellation Policy</h3>
      <ul>
        <li>60+ days: full refund</li>
        <li>30-60 days: 75% refund</li>
        <li>14-30 days: 50% refund</li>
        <li>7-14 days: 25% refund</li>
        <li>0-6 days: no refund (force majeure excluded)</li>
      </ul>
      <h3>Change Management</h3>
      <p>Same-day schedule changes for major group travel incidents (weather, strikes, cancellations); easy add/remove members.</p>
    </div>
  `;
}

function renderGroupComparison() {
  return `
    <button class="back-btn" onclick="navigate('group')">Back to Group Coordination</button>
    <div class="info-hero"><h1>Interactive Comparison Charts</h1><p>Side-by-side package, price, and inclusion analysis.</p></div>
    <div class="info-section">
      <ul>
        <li>Package comparison matrix</li>
        <li>Per-person vs total cost analysis</li>
        <li>Feature highlights and missing inclusions</li>
        <li>Downloadable comparison sheets</li>
      </ul>
    </div>
  `;
}

// Group feature modals
function showGroupAccessModal() {
  const html = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Group Access & Tracking</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <p>Real-time group booking visibility and progress tracking:</p>
        <div class="group-bookings">
          <div class="booking-status">
            <h4>Current Group Bookings</h4>
            <div class="status-item">
              <div class="status-icon">✓</div>
              <div class="status-text">Hotel booking confirmed - Heritance Kandalama</div>
              <div class="status-date">2026-04-15</div>
            </div>
            <div class="status-item">
              <div class="status-icon">⏳</div>
              <div class="status-text">Package booking in progress - Sacred City Retreat</div>
              <div class="status-date">2026-05-01</div>
            </div>
            <div class="status-item">
              <div class="status-icon">💳</div>
              <div class="status-text">Payment pending - Split payment initiated</div>
              <div class="status-date">Awaiting confirmation</div>
            </div>
          </div>
          <div class="group-members">
            <h4>Group Members (5)</h4>
            <div class="member-item">John Doe - Coordinator</div>
            <div class="member-item">Jane Smith - Confirmed</div>
            <div class="member-item">Bob Johnson - Pending</div>
            <div class="member-item">Alice Brown - Confirmed</div>
            <div class="member-item">Charlie Wilson - Confirmed</div>
          </div>
        </div>
        <div class="alert alert-success">All group members can view this dashboard in real-time.</div>
      </div>
    </div>
  `;
  showModal(html);
}

function showGroupDashboardModal() {
  const html = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Trip Coordinator Dashboard</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <p>Centralized trip management for coordinators:</p>
        <div class="coordinator-tools">
          <div class="tool-section">
            <h4>Manage Group Bookings</h4>
            <button class="btn btn-sm btn-primary" onclick="showToast('Booking management opened')">Edit Hotel Booking</button>
            <button class="btn btn-sm btn-outline" onclick="showToast('Package management opened')">Modify Package</button>
            <button class="btn btn-sm btn-outline" onclick="showToast('Room assignment opened')">Reassign Rooms</button>
          </div>
          <div class="tool-section">
            <h4>Send Updates to Group</h4>
            <button class="btn btn-sm btn-primary" onclick="showToast('Notification sent')">Send Itinerary Update</button>
            <button class="btn btn-sm btn-outline" onclick="showToast('Reminder sent')">Payment Reminder</button>
          </div>
          <div class="tool-section">
            <h4>Track Progress</h4>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%"></div>
            </div>
            <p>75% of group members have confirmed</p>
          </div>
        </div>
        <div class="alert alert-success">You are the designated trip coordinator for this group.</div>
      </div>
    </div>
  `;
  showModal(html);
}

function showGroupDiscountsModal() {
  const html = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Group Discounts & Packages</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <p>Special pricing and packages for groups:</p>
        <div class="discounts-list">
          <div class="discount-item">
            <h4>5+ Travelers: 5% Off</h4>
            <p>Automatic discount applied to packages and hotels</p>
            <span class="badge badge-green">Active</span>
          </div>
          <div class="discount-item">
            <h4>10+ Travelers: 10% Off</h4>
            <p>Additional discount for larger groups</p>
            <span class="badge badge-green">Active</span>
          </div>
          <div class="discount-item">
            <h4>Custom Group Packages</h4>
            <p>Tailored experiences with added inclusions</p>
            <button class="btn btn-sm btn-primary" onclick="showToast('Contacting sales team')">Request Quote</button>
          </div>
          <div class="discount-item">
            <h4>Corporate Rates</h4>
            <p>Special pricing for business groups</p>
            <button class="btn btn-sm btn-outline" onclick="showToast('Corporate form opened')">Apply</button>
          </div>
        </div>
        <div class="alert alert-success">Group discounts are automatically applied at checkout.</div>
      </div>
    </div>
  `;
  showModal(html);
}

function showGroupPaymentModal() {
  const html = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Split Payment Tools</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <p>Easy cost-sharing for group bookings:</p>
        <div class="payment-tools">
          <div class="payment-section">
            <h4>Payment Splitting Options</h4>
            <div class="split-option">
              <input type="radio" name="split" id="equal" checked>
              <label for="equal">Equal split among all members</label>
            </div>
            <div class="split-option">
              <input type="radio" name="split" id="custom">
              <label for="custom">Custom amounts per person</label>
            </div>
            <div class="split-option">
              <input type="radio" name="split" id="coordinator">
              <label for="coordinator">Coordinator pays, members reimburse</label>
            </div>
          </div>
          <div class="payment-section">
            <h4>Payment Methods</h4>
            <div class="payment-tab-wrap">
              <div class="pill-tabs payment-tabs" id="groupPaymentTabs">
                <button class="pill-tab active" data-panel="card" onclick="switchPillTab(this, 'groupPaymentTabs')">Credit Card</button>
                <button class="pill-tab" data-panel="bank" onclick="switchPillTab(this, 'groupPaymentTabs')">Bank Transfer</button>
                <button class="pill-tab" data-panel="wallet" onclick="switchPillTab(this, 'groupPaymentTabs')">Digital Wallet</button>
              </div>
            </div>
            <div class="payment-panel active" data-panel-group="groupPaymentTabs" data-panel="card">
              <div class="method-item">Coordinator card payment with instant split tracking</div>
              <div class="method-item">Supports Visa, Mastercard, and Amex</div>
            </div>
            <div class="payment-panel" data-panel-group="groupPaymentTabs" data-panel="bank">
              <div class="payment-info-card compact">
                <h4>Bank Transfer Details</h4>
                <div class="payment-info-grid">
                  <div><strong>Bank:</strong> Bank of Ceylon</div>
                  <div><strong>Account:</strong> TravelBooker Pvt Ltd</div>
                  <div><strong>Number:</strong> 784512369874</div>
                  <div><strong>SWIFT:</strong> BCEYLKLX</div>
                </div>
              </div>
              <div class="form-grid">
                <div class="form-field"><label>Transfer Amount</label><input type="number" placeholder="250000" /></div>
                <div class="form-field"><label>Reference</label><input type="text" placeholder="Group payment ref" /></div>
                <div class="form-field full"><label>Upload Receipt</label><div class="upload-field"><input type="file" id="groupReceiptInput" class="upload-input" accept=".jpg,.jpeg,.png,.pdf" onchange="handleReceiptUpload(this, 'groupReceiptName')" /><label for="groupReceiptInput" class="upload-dropzone"><span class="upload-btn">Upload Receipt</span><span class="upload-file-name" id="groupReceiptName">No receipt uploaded yet</span></label></div></div>
              </div>
            </div>
            <div class="payment-panel" data-panel-group="groupPaymentTabs" data-panel="wallet">
              <div class="form-grid">
                <div class="form-field"><label>Wallet Provider</label><select><option>eZ Cash</option><option>mCash</option><option>PayPal</option></select></div>
                <div class="form-field"><label>Wallet ID</label><input type="text" placeholder="wallet-id-123" /></div>
                <div class="form-field full"><label>Transaction Reference</label><input type="text" placeholder="TXN-789456" /></div>
              </div>
            </div>
          </div>
          <div class="payment-section">
            <h4>Current Split Status</h4>
            <div class="status-item">John Doe - $500 - Paid ✓</div>
            <div class="status-item">Jane Smith - $500 - Paid ✓</div>
            <div class="status-item">Bob Johnson - $500 - Pending ⏳</div>
            <div class="status-item">Alice Brown - $500 - Paid ✓</div>
            <div class="status-item">Charlie Wilson - $500 - Paid ✓</div>
          </div>
        </div>
        <div class="alert alert-info">Secure payment processing with automatic tracking.</div>
      </div>
    </div>
  `;
  showModal(html);
}

function showGroupPoliciesModal() {
  const html = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Flexible Policies</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <p>Group-friendly booking policies:</p>
        <div class="policies-list">
          <div class="policy-item">
            <h4>Free Cancellation</h4>
            <p>Up to 30 days before travel - 100% refund</p>
            <span class="badge badge-green">Available</span>
          </div>
          <div class="policy-item">
            <h4>Flexible Date Changes</h4>
            <p>Modify dates with minimal fees up to 14 days prior</p>
            <span class="badge badge-green">Available</span>
          </div>
          <div class="policy-item">
            <h4>Group Size Adjustments</h4>
            <p>Add or remove members up to 7 days before travel</p>
            <span class="badge badge-green">Available</span>
          </div>
          <div class="policy-item">
            <h4>Special Group Considerations</h4>
            <p>Extended support for large groups and special needs</p>
            <button class="btn btn-sm btn-primary" onclick="showToast('Support contacted')">Contact Support</button>
          </div>
        </div>
        <div class="alert alert-success">All policies apply automatically to group bookings.</div>
      </div>
    </div>
  `;
  showModal(html);
}

function showGroupComparisonModal() {
  const html = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Interactive Comparison Charts</h2>
        <button class="modal-close" onclick="closeModal()">&times;</button>
      </div>
      <div class="modal-body">
        <p>Visual comparison tools for groups:</p>
        <div class="comparison-tools">
          <div class="tool-section">
            <h4>Package Comparison</h4>
            <button class="btn btn-sm btn-primary" onclick="runCompare()">Compare Selected Packages</button>
            <p>Side-by-side feature analysis</p>
          </div>
          <div class="tool-section">
            <h4>Cost Breakdown</h4>
            <button class="btn btn-sm btn-outline" onclick="showToast('Cost chart opened')">View Cost Analysis</button>
            <p>Per-person vs total costs</p>
          </div>
          <div class="tool-section">
            <h4>Group Voting</h4>
            <button class="btn btn-sm btn-outline" onclick="showToast('Voting started')">Start Group Poll</button>
            <p>Let members vote on options</p>
          </div>
          <div class="tool-section">
            <h4>Download Reports</h4>
            <button class="btn btn-sm btn-primary" onclick="showToast('Report downloaded')">Export Comparison</button>
            <p>Shareable comparison sheets</p>
          </div>
        </div>
        <div class="alert alert-info">Interactive tools for collaborative decision making.</div>
      </div>
    </div>
  `;
  showModal(html);
}

function renderTravelSmarter() {
  return `
    <button class="back-btn" onclick="navigate('home')">Back to Home</button>
    <div class="info-hero"><h1>Travel Smarter</h1><p>Discover our AI, tools, and business-grade coordination for modern travel.</p></div>
    <div class="info-section">
      <h3>Smart Features</h3>
      <ul>
        <li>AI itinerary planning tuned to your preferences</li>
        <li>Real-time pricing guarantees and dynamic re-pricing alerts</li>
        <li>Group collaboration dashboard with task/status workflows</li>
        <li>Custom alerts for deadlines, reviews, and mandatory documents</li>
      </ul>
      <h3>How It Helps</h3>
      <p>Less administration, more confidence. <strong>TravelBooker</strong> helps teams, families, agents, and enterprises minimize cost overruns and maximize satisfaction.</p>
    </div>
  `;
}

function renderCorporatePolicy() {
  return `
    <button class="back-btn" onclick="navigate('dashboard')">Back to Dashboard</button>
    <div class="info-hero"><h1>Corporate Partner Travel Policy</h1><p>A structured, transparent corporate travel policy for partners.</p></div>
    <div class="info-section">
      <h3>Policy Summary</h3>
      <p>TravelBooker partners with corporate clients to deliver controlled, compliant, and budget-friendly business travel.</p>
      <ul>
        <li><strong>Scope:</strong> Business trip bookings, employee-level travel, and group incentive travel.</li>
        <li><strong>Approval:</strong> All requests must be approved by managers before booking. Escalations after 24h.</li>
        <li><strong>Booking Window:</strong> Minimum 14 days lead time for regular travel; 21 days for large group departures and retreats.</li>
        <li><strong>Cost Controls:</strong> Per-diem allowances, class of travel, accommodation max rates, and preferred supplier usage.</li>
        <li><strong>Payment:</strong> Central invoicing, corporate credit line, and split payment options.</li>
        <li><strong>Cancellations:</strong> 30+ days for full refund; 15-30 days partial; less than 15 days subject to supplier penalties.</li>
      </ul>
    </div>
    <div class="info-section">
      <h3>Employee Safety & Compliance</h3>
      <ul>
        <li>24/7 emergency assistance and travel-risk monitoring</li>
        <li>Local transport coordination and accommodation support for all corporate itineraries</li>
        <li>Health & safety requirements aligned with WHO travel advisories</li>
        <li>Environmental & sustainability partner programs (offsetting, local impact)</li>
      </ul>
    </div>
  `;
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
    // Read the role from the active form (login or signup)
    const loginRoleElement = document.getElementById('loginRole');
    const signupRoleElement = document.getElementById('signupRole');
    
    if (loginRoleElement && loginRoleElement.offsetParent !== null) {
      // Login form is visible
      currentRole = loginRoleElement.value;
    } else if (signupRoleElement && signupRoleElement.offsetParent !== null) {
      // Signup form is visible
      currentRole = signupRoleElement.value;
    } else {
      // Fallback to customer if neither form is clearly visible
      currentRole = 'customer';
    }
    
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
      { group: 'Settings', items: [{ icon: 'spend', label: 'Spend Report' }] }
    ]
  },
  admin: {
    label: 'Administrator',
    sections: [
      { group: 'Management', items: [{ icon: 'overview', label: 'Overview' }, { icon: 'packages', label: 'Packages' }, { icon: 'users', label: 'Users' }, { icon: 'bookings', label: 'Bookings' }] },
      { group: 'Reports',    items: [{ icon: 'reports', label: 'Reports' }] },
      { group: 'Trips',     items: [{ icon: 'past', label: 'Past Trips' }] },
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
      <div class="stat-card"><div class="label">Total Spent</div><div class="value">Rs. 2,450,000</div><div class="sub">Lifetime</div></div>
      <div class="stat-card"><div class="label">Reward Points</div><div class="value">4,250</div><div class="sub">Worth ~Rs. 8,500</div></div>
    </div>
    <div class="dash-card">
      <h4>Upcoming Trip</h4>
      <div class="alert alert-success">Beach Escape departs March 20, 2025 — 28 days away</div>
      <button class="btn btn-sm btn-outline" onclick="renderDashContent('active')">View Active Trips</button>
    </div>
    <div class="dash-card"><h4>Recent Bookings</h4>${bookingTable(bookingHistory.slice(0, 3), false)}</div>`;

  if (s === 'bookings') return `
    <div class="dash-header"><h2>My Bookings</h2><p>All your past and upcoming reservations</p></div>
    <div class="dash-card">${bookingTable(bookingHistory, true, false)}</div>`;

  if (s === 'budget') return `
    <div class="dash-header"><h2>Budget Tracker</h2><p>Track your travel spending in real time</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Total Budget</div><div class="value">Rs. 300,000</div></div>
      <div class="stat-card"><div class="label">Spent</div><div class="value">Rs. 192,000</div></div>
      <div class="stat-card"><div class="label">Remaining</div><div class="value" style="color:var(--green)">Rs. 108,000</div><div class="sub">36% remaining</div></div>
    </div>
    <div class="dash-card">
      <h4>Spending by Category</h4>
      ${budgetBar('Accommodation', 'Rs. 72,000', 'Rs. 108,000', 67)}
      ${budgetBar('Local Transport', 'Rs. 48,000', 'Rs. 72,000', 67)}
      ${budgetBar('Food & Dining', 'Rs. 21,600',   'Rs. 36,000',   60)}
      ${budgetBar('Activities',    'Rs. 19,200',   'Rs. 36,000',   53)}
      ${budgetBar('Transport',     'Rs. 8,400',   'Rs. 24,000',   35)}
      ${budgetBar('Shopping',      'Rs. 12,000',   'Rs. 24,000',   50)}
    </div>`;

  if (s === 'notifs') return `
    <div class="dash-header"><h2>Notifications</h2></div>
    <div class="dash-card">
      ${[
        { msg: 'Your Beach Escape begins in 14 days - review your itinerary', time: '2 hours ago' },
        { msg: 'Payment confirmed for booking TB-2025-X9KLM', time: '3 days ago' },
        { msg: 'New deal: Wellness Retreat now from Rs. 105,000 - limited availability', time: '5 days ago' },
        { msg: 'Travel advisory: review local weather updates before hill country travel', time: '1 week ago' }
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
        <div style="font-family:'Playfair Display',serif;font-size:1.2rem;color:var(--green-dark);margin-bottom:6px">Beach Escape</div>
        <div style="font-size:.85rem;color:var(--gray-600);margin-bottom:14px">April 20 - April 24, 2026 &middot; 5 days &middot; Colombo, Bentota, Galle</div>
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
      <div class="stat-card"><div class="label">Commission Earned</div><div class="value">Rs. 768,000</div><div class="sub">This quarter</div></div>
      <div class="stat-card"><div class="label">Pending</div><div class="value">9</div><div class="sub">Confirmations</div></div>
    </div>
    <div class="dash-card">
      <h4>Recent Client Bookings</h4>
      <div class="table-wrap"><table>
        <thead><tr><th>Client</th><th>Package</th><th>Travel Date</th><th>Status</th><th>Commission</th></tr></thead>
        <tbody>
          <tr><td>Anderson Family</td><td>Sacred City Retreat</td><td>14 Feb 2025</td><td><span class="badge badge-green">Confirmed</span></td><td>Rs. 7,680</td></tr>
          <tr><td>Green Corp Team</td><td>Corporate Leadership Retreat</td><td>20 Mar 2025</td><td><span class="badge badge-blue">Pending</span></td><td>Rs. 21,600</td></tr>
          <tr><td>Ms. K. Williams</td><td>Wellness Retreat</td><td>5 Apr 2025</td><td><span class="badge badge-green">Confirmed</span></td><td>Rs. 19,200</td></tr>
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
      <div class="stat-card"><div class="label">Avg. Trip Value</div><div class="value">Rs. 852,000</div><div class="sub">Per booking</div></div>
      <div class="stat-card"><div class="label">Commission YTD</div><div class="value">Rs. 10,260,000</div><div class="sub">Earned</div></div>
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
          <tr data-client-id="sarah-anderson"><td><strong>Sarah Anderson</strong><br><small>Family of 4</small></td><td>sarah@email.com<br>+1 555-0123</td><td>Individual</td><td>Sacred City Retreat<br><small>Dec 2024</small></td><td>Rs. 2,520,000</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('sarah-anderson')">View</button></td></tr>
          <tr data-client-id="techcorp-solutions"><td><strong>TechCorp Solutions</strong><br><small>45 employees</small></td><td>travel@techcorp.com<br>+1 555-0456</td><td>Corporate</td><td>Corporate Travel<br><small>Nov 2024</small></td><td>Rs. 20,160,000</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('techcorp-solutions')">View</button></td></tr>
          <tr data-client-id="mike-johnson"><td><strong>Mike Johnson</strong><br><small>Solo traveler</small></td><td>mike@corp.com<br>+1 555-0789</td><td>Business</td><td>Wildlife Safari<br><small>Oct 2024</small></td><td>Rs. 7,230,000</td><td><span class="badge badge-blue">Planning</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('mike-johnson')">View</button></td></tr>
          <tr data-client-id="priya-raj-patel"><td><strong>Priya & Raj Patel</strong><br><small>Couple + 2 kids</small></td><td>priya@biz.com<br>+1 555-0321</td><td>Family</td><td>Honeymoon Package<br><small>Sep 2024</small></td><td>Rs. 3,840,000</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('priya-raj-patel')">View</button></td></tr>
          <tr data-client-id="global-marketing"><td><strong>Global Marketing Inc</strong><br><small>28 employees</small></td><td>hr@globalmkt.com<br>+1 555-0654</td><td>Corporate</td><td>Corporate Leadership Retreat<br><small>Aug 2024</small></td><td>Rs. 12,780,000</td><td><span class="badge badge-orange">Inactive</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('global-marketing')">View</button></td></tr>
          <tr data-client-id="carlos-mendes"><td><strong>Carlos Mendes</strong><br><small>Adventure seeker</small></td><td>carlos@travel.co<br>+1 555-0987</td><td>Individual</td><td>Wildlife Safari<br><small>Jul 2024</small></td><td>Rs. 4,380,000</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('carlos-mendes')">View</button></td></tr>
          <tr data-client-id="nordic-enterprises"><td><strong>Nordic Enterprises</strong><br><small>67 employees</small></td><td>travel@nordic.com<br>+1 555-0432</td><td>Corporate</td><td>Multiple destinations<br><small>Jun 2024</small></td><td>Rs. 26,820,000</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('nordic-enterprises')">View</button></td></tr>
          <tr data-client-id="lisa-thompson"><td><strong>Lisa Thompson</strong><br><small>Solo business</small></td><td>lisa@consulting.net<br>+1 555-0765</td><td>Business</td><td>Wellness Retreat<br><small>May 2024</small></td><td>Rs. 1,860,000</td><td><span class="badge badge-blue">Planning</span></td><td><button class="btn btn-sm btn-outline" onclick="viewClient('lisa-thompson')">View</button></td></tr>
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

  if (s === 'commission') return `
    <div class="dash-header"><h2>Commission Tracking</h2><p>Monitor your earnings and commission rates</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Total Earned</div><div class="value">Rs. 10,260,000</div><div class="sub">This year</div></div>
      <div class="stat-card"><div class="label">Pending</div><div class="value">Rs. 730,000</div><div class="sub">To be paid</div></div>
      <div class="stat-card"><div class="label">Avg. Commission</div><div class="value">8.5%</div><div class="sub">Per booking</div></div>
      <div class="stat-card"><div class="label">This Month</div><div class="value">Rs. 1,236,000</div><div class="sub">+15% vs last</div></div>
    </div>
    <div class="dash-card">
      <h4>Commission Breakdown</h4>
      <div class="table-wrap"><table>
        <thead><tr><th>Package</th><th>Bookings</th><th>Total Value</th><th>Commission Rate</th><th>Earned</th></tr></thead>
        <tbody>
          <tr><td>Sacred City Retreat</td><td>23</td><td>Rs. 11,241,000</td><td>10%</td><td>Rs. 1,124,100</td></tr>
          <tr><td>Scenic Rail Journey</td><td>18</td><td>Rs. 19,440,000</td><td>8%</td><td>Rs. 1,555,200</td></tr>
          <tr><td>Honeymoon Package</td><td>15</td><td>Rs. 14,400,000</td><td>12%</td><td>Rs. 1,728,000</td></tr>
          <tr><td>Wildlife Safari</td><td>8</td><td>Rs. 5,040,000</td><td>15%</td><td>Rs. 756,000</td></tr>
          <tr><td>Sri Lanka Family</td><td>12</td><td>Rs. 6,696,000</td><td>9%</td><td>Rs. 602,640</td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'reports') return `
    <div class="dash-header"><h2>Reports & Analytics</h2><p>Detailed insights into your business performance</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Conversion Rate</div><div class="value">24.5%</div><div class="sub">Quotes to bookings</div></div>
      <div class="stat-card"><div class="label">Client Retention</div><div class="value">78%</div><div class="sub">Repeat business</div></div>
      <div class="stat-card"><div class="label">Avg. Trip Size</div><div class="value">4.2</div><div class="sub">Travelers per booking</div></div>
      <div class="stat-card"><div class="label">Top Destination</div><div class="value">Sigiriya</div><div class="sub">45% of bookings</div></div>
    </div>
    <div class="dash-card">
      <h4>Monthly Performance</h4>
      <div class="table-wrap"><table>
        <thead><tr><th>Month</th><th>Bookings</th><th>Revenue</th><th>Commission</th><th>Growth</th></tr></thead>
        <tbody>
          <tr><td>January 2025</td><td>28</td><td>Rs. 26,820,000</td><td>Rs. 2,145,600</td><td><span class="badge badge-green">+12%</span></td></tr>
          <tr><td>February 2025</td><td>32</td><td>Rs. 30,840,000</td><td>Rs. 2,467,200</td><td><span class="badge badge-green">+15%</span></td></tr>
          <tr><td>March 2025</td><td>35</td><td>Rs. 35,460,000</td><td>Rs. 2,837,400</td><td><span class="badge badge-green">+9%</span></td></tr>
          <tr><td>April 2025</td><td>29</td><td>Rs. 28,380,000</td><td>Rs. 2,270,400</td><td><span class="badge badge-red">-5%</span></td></tr>
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
      <div class="stat-card"><div class="label">Q1 Spend</div><div class="value">Rs. 5,640,000</div><div class="sub">vs Rs. 6,000,000 budget</div></div>
      <div class="stat-card"><div class="label">Pending</div><div class="value">5</div><div class="sub">Approvals needed</div></div>
    </div>
    <div class="dash-card">
      <div style="margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;">
        <h4>Pending Approvals</h4>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Employee</th><th>Package</th><th>Purpose</th><th>Cost</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Alice Chen</td><td>Corporate Travel</td><td>Client Meeting</td><td>Rs. 110,400</td><td><button class="btn btn-sm btn-primary" onclick="showToast('Booking approved')">Approve</button> <button class="btn btn-sm btn-danger" onclick="showToast('Booking rejected')">Reject</button></td></tr>
          <tr><td>David Park</td><td>Corporate Leadership Retreat</td><td>Conference</td><td>Rs. 144,000</td><td><button class="btn btn-sm btn-primary" onclick="showToast('Booking approved')">Approve</button> <button class="btn btn-sm btn-danger" onclick="showToast('Booking rejected')">Reject</button></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'employees') return `
    <div class="dash-header"><h2>Employee Bookings</h2></div>
    <div class="dash-card">
      <div class="table-wrap"><table>
        <thead><tr><th>Employee</th><th>Department</th><th>Package</th><th>Dates</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td>Alice Chen</td><td>Sales</td><td>Corporate Travel</td><td>Feb 14–19</td><td><span class="badge badge-blue">Pending</span></td></tr>
          <tr><td>James Wilson</td><td>Engineering</td><td>Corporate Leadership Retreat</td><td>Mar 1–4</td><td><span class="badge badge-green">Approved</span></td></tr>
          <tr><td>Maria Santos</td><td>Marketing</td><td>Luxury Escape</td><td>Jun 16–22</td><td><span class="badge badge-green">Approved</span></td></tr>
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
          <tr><td><strong>Today, 09:14</strong><br><small>2 hours ago</small></td><td><strong>Alice Chen</strong><br><small>Senior Sales Rep</small></td><td>Sales</td><td>Kandy, Sri Lanka</td><td>Q1 client review meeting</td><td>Rs. 110,400</td><td><span class="badge badge-blue">Pending</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('alice-chen')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('alice-chen')">Reject</button></td></tr>
          <tr><td><strong>Today, 11:32</strong><br><small>23 min ago</small></td><td><strong>David Park</strong><br><small>Tech Lead</small></td><td>Engineering</td><td>London, UK</td><td>Tech conference & team summit</td><td>Rs. 144,000</td><td><span class="badge badge-blue">Pending</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('david-park')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('david-park')">Reject</button></td></tr>
          <tr><td><strong>Yesterday</strong><br><small>18 hours ago</small></td><td><strong>Maria Santos</strong><br><small>Marketing Dir</small></td><td>Marketing</td><td>Galle, Sri Lanka</td><td>Campaign planning workshop</td><td>Rs. 216,000</td><td><span class="badge badge-orange">Urgent</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('maria-santos')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('maria-santos')">Reject</button></td></tr>
          <tr><td><strong>2 days ago</strong><br><small>48 hours ago</small></td><td><strong>James Wilson</strong><br><small>Product Mgr</small></td><td>Product</td><td>Singapore</td><td>Product strategy offsite</td><td>Rs. 99,600</td><td><span class="badge badge-red">Escalated</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('james-wilson')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('james-wilson')">Reject</button></td></tr>
          <tr><td><strong>3 days ago</strong><br><small>72 hours ago</small></td><td><strong>Sarah Kim</strong><br><small>HR Manager</small></td><td>Human Resources</td><td>Bentota, Sri Lanka</td><td>HR leadership workshop</td><td>Rs. 144,000</td><td><span class="badge badge-red">Escalated</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('sarah-kim')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('sarah-kim')">Reject</button></td></tr>
          <tr><td><strong>Today, 14:45</strong><br><small>1 min ago</small></td><td><strong>Raj Patel</strong><br><small>Sales Rep</small></td><td>Sales</td><td>Colombo, Sri Lanka</td><td>Client negotiations</td><td>Rs. 57,600</td><td><span class="badge badge-blue">Pending</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('raj-patel')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('raj-patel')">Reject</button></td></tr>
          <tr><td><strong>Yesterday</strong><br><small>16 hours ago</small></td><td><strong>Lisa Thompson</strong><br><small>Finance Dir</small></td><td>Finance</td><td>Nuwara Eliya, Sri Lanka</td><td>Board meeting & audit review</td><td>Rs. 288,000 <span class="badge badge-red" style="font-size:0.7rem">Over Budget</span></td><td><span class="badge badge-orange">Urgent</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('lisa-thompson')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('lisa-thompson')">Reject</button></td></tr>
          <tr><td><strong>Today, 08:30</strong><br><small>4 hours ago</small></td><td><strong>Michael Chen</strong><br><small>VP Sales</small></td><td>Sales</td><td>Yala, Sri Lanka</td><td>Regional sales summit</td><td>Rs. 201,600</td><td><span class="badge badge-blue">Pending</span></td><td><button class="btn btn-sm btn-primary" onclick="approveBooking('michael-chen')">Approve</button> <button class="btn btn-sm btn-danger" onclick="rejectBooking('michael-chen')">Reject</button></td></tr>
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
          <tr><td>INV-2025-001</td><td>January 2025</td><td>Rs. 1,920,000</td><td><span class="badge badge-green">Paid</span></td><td><button class="btn btn-sm btn-outline" onclick="showToast('Downloading PDF...')">PDF</button></td></tr>
          <tr><td>INV-2025-002</td><td>February 2025</td><td>Rs. 2,112,000</td><td><span class="badge badge-orange">Pending</span></td><td><button class="btn btn-sm btn-outline" onclick="showToast('Downloading PDF...')">PDF</button></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'spend') return `
    <div class="dash-header"><h2>Spend Report</h2><p>Track and analyze travel spending across your organization</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Q1 Spend</div><div class="value">Rs. 5,640,000</div><div class="sub">vs Rs. 6,000,000 budget</div></div>
      <div class="stat-card"><div class="label">Avg. per Employee</div><div class="value">Rs. 16,588</div><div class="sub">This quarter</div></div>
      <div class="stat-card"><div class="label">Top Category</div><div class="value">Local Transport</div><div class="sub">42% of spend</div></div>
      <div class="stat-card"><div class="label">Compliance Rate</div><div class="value">94%</div><div class="sub">Policy adherence</div></div>
    </div>
    <div class="dash-card">
      <h4>Spending by Category</h4>
      <div class="table-wrap"><table>
        <thead><tr><th>Category</th><th>Amount</th><th>% of Total</th><th>vs Budget</th></tr></thead>
        <tbody>
          <tr><td>Local Transport</td><td>Rs. 2,371,200</td><td>42%</td><td><span class="badge badge-green">Under</span></td></tr>
          <tr><td>Hotels</td><td>Rs. 1,915,200</td><td>34%</td><td><span class="badge badge-green">Under</span></td></tr>
          <tr><td>Meals & Expenses</td><td>Rs. 720,000</td><td>15%</td><td><span class="badge badge-orange">Slightly over</span></td></tr>
          <tr><td>Ground Transport</td><td>Rs. 226,800</td><td>5%</td><td><span class="badge badge-green">Under</span></td></tr>
          <tr><td>Other</td><td>Rs. 226,800</td><td>4%</td><td><span class="badge badge-green">Under</span></td></tr>
        </tbody>
      </table></div>
    </div>`;

  return fallbackDash(s);
}

// ── ADMIN ──
function getAdminContent(s) {
  if (s === 'overview') return `
    <div class="dash-header admin-header">
      <h2>Admin Overview</h2>
      <p>A real-time view of booking trends, performance, and platform activity.</p>
    </div>
    <div class="stats-grid admin-stats-grid">
      ${adminStatCard('Total Users', '12,840', '+124 new this week', 'peach', '01')}
      ${adminStatCard('Active Bookings', '3,420', '+8% vs last month', 'violet', '02')}
      ${adminStatCard('Revenue (MTD)', 'Rs. 144M', '92% of monthly goal reached', 'mint', '03')}
      ${adminStatCard('Avg. Trip Value', 'Rs. 188K', 'Higher by Rs. 14K this month', 'gold', '04')}
    </div>
    <div class="admin-overview-grid">
      ${adminBarsCard('Booking Momentum', 'Daily booking volume over the last 7 days', ADMIN_OVERVIEW_TREND)}
      ${adminDonutCard('Booking Types', 'Share of bookings by travel category', '100%', 'Bookings', ADMIN_BOOKING_TYPE_DATA)}
    </div>
    <div class="admin-overview-grid secondary">
      ${adminRecentBookingsCard(bookingHistory.filter(booking => booking.status !== 'Cancelled').slice(0, 4))}
      ${adminActivityCard(ADMIN_RECENT_ACTIVITY)}
    </div>`;

  if (s === 'packages') return `
    <div class="dash-header"><h2>Manage Packages</h2><p>11 packages live</p></div>
    <div class="dash-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <span style="font-size:.9rem;color:var(--gray-600)">11 active packages</span>
        <button class="btn btn-sm btn-primary" onclick="showToast('Opening package creator...')">Add Package</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Package</th><th>Region</th><th>Price</th><th>Duration</th><th>Rating</th><th>Actions</th></tr></thead>
        <tbody>${PACKAGES.map(p => `<tr>
          <td>${p.title}</td><td>${p.region}</td>
          <td>Rs. ${p.price.toLocaleString()}</td><td>${p.duration} days</td>
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
          <tr><td>John Smith</td><td>Customer</td><td>Jan 2024</td><td>7</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewAdminUser('john-smith')">View</button></td></tr>
          <tr><td>Martinez Agency</td><td>Agent</td><td>Mar 2023</td><td>248</td><td><span class="badge badge-green">Active</span></td><td><button class="btn btn-sm btn-outline" onclick="viewAdminUser('martinez-agency')">View</button></td></tr>
          <tr><td>ACME Corp</td><td>Corporate</td><td>Jun 2023</td><td>84</td><td><span class="badge badge-orange">Under Review</span></td><td><button class="btn btn-sm btn-outline" onclick="viewAdminUser('acme-corp')">View</button></td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'bookings') return `
    <div class="dash-header"><h2>All Bookings</h2></div>
    <div class="dash-card">
      <div class="table-wrap"><table>
        <thead><tr><th>Ref</th><th>Customer</th><th>Package</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-AB3F2</td><td>Sarah Anderson</td><td>Sacred City Retreat</td><td>Jan 15</td><td>Rs. 77,400</td><td><span class="badge badge-green">Completed</span></td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-X9KLM</td><td>Tom Wilson</td><td>Beach Escape</td><td>Mar 20</td><td>Rs. 216,000</td><td><span class="badge badge-blue">Upcoming</span></td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-QR7TY</td><td>Lisa Park</td><td>Lion Rock Escape</td><td>Feb 10</td><td>Rs. 89,400</td><td><span class="badge badge-red">Cancelled</span></td></tr>
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
    <div class="dash-header admin-header">
      <h2>Analytics</h2>
      <p>Visual insight into where guests are booking, how they engage, and which channels convert best.</p>
    </div>
    <div class="stats-grid admin-stats-grid">
      ${adminStatCard('Conversion Rate', '4.2%', '+0.3% vs last month', 'violet', 'A1')}
      ${adminStatCard('Returning Visitors', '38%', 'Strong loyalty from remarketing', 'mint', 'A2')}
      ${adminStatCard('Page Views (MTD)', '184K', '+12% month over month', 'peach', 'A3')}
      ${adminStatCard('NPS Score', '72', '27 points above travel average', 'gold', 'A4')}
    </div>
    <div class="admin-analytics-grid">
      ${adminHorizontalMetricsCard('Top Destinations Booked Recently', 'Most popular destinations in the last 30 days', ADMIN_DESTINATION_DATA)}
      ${adminLineChartCard('Customer Engagement', 'Weekly interactions across email, app, and web touchpoints', ADMIN_ENGAGEMENT_SERIES)}
      ${adminHorizontalMetricsCard('Booking Channel Mix', 'Additional stat: which channels are driving recent conversions', ADMIN_CHANNEL_DATA)}
    </div>`;

  if (s === 'past') return `
    <div class="dash-header"><h2>Past Trips</h2><p>All completed trips across the platform</p></div>
    <div class="stats-grid">
      <div class="stat-card"><div class="label">Total Completed</div><div class="value">8,420</div><div class="sub">All time</div></div>
      <div class="stat-card"><div class="label">This Month</div><div class="value">1,240</div><div class="sub">+8% vs last month</div></div>
      <div class="stat-card"><div class="label">Avg. Rating</div><div class="value">4.7</div><div class="sub">Customer satisfaction</div></div>
      <div class="stat-card"><div class="label">Repeat Customers</div><div class="value">68%</div><div class="sub">Book again</div></div>
    </div>
    <div class="dash-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <span style="font-size:.9rem;color:var(--gray-600)">Recent completed trips</span>
        <div style="display:flex;gap:8px">
          <button class="btn btn-sm btn-outline" onclick="showToast('Exporting data...')">Export</button>
          <button class="btn btn-sm btn-outline" onclick="showToast('Generating report...')">Report</button>
        </div>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Reference</th><th>Customer</th><th>Package</th><th>Completion Date</th><th>Amount</th><th>Rating</th></tr></thead>
        <tbody>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-AB3F2</td><td>Sarah Anderson</td><td>Sacred City Retreat</td><td>Jan 15, 2025</td><td>Rs. 77,400</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-KL2WX</td><td>Carlos Mendes</td><td>Luxury Escape</td><td>Nov 18, 2024</td><td>Rs. 192,000</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-VB9NM</td><td>Nimali Fernando</td><td>Honeymoon Package</td><td>Oct 22, 2024</td><td>Rs. 115,200</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-HJ4QR</td><td>Lisa Thompson</td><td>Wildlife Safari</td><td>Sep 8, 2024</td><td>Rs. 288,000</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-RT3YU</td><td>Chaminda Perera</td><td>Honeymoon Package</td><td>Aug 15, 2024</td><td>Rs. 240,000</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-WE8OP</td><td>Rashika de Silva</td><td>Scenic Rail Journey</td><td>Jul 3, 2024</td><td>Rs. 201,600</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-ZX5CV</td><td>Global Marketing Inc</td><td>Corporate Leadership Retreat</td><td>Jun 12, 2024</td><td>Rs. 288,000</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td style="font-family:monospace;font-size:.78rem">TB-2025-BN7MK</td><td>Sunil Jayawardena</td><td>Sacred City Retreat</td><td>May 28, 2024</td><td>Rs. 115,200</td><td>⭐⭐⭐⭐⭐</td></tr>
        </tbody>
      </table></div>
    </div>`;

  if (s === 'reports') return `
    <div class="dash-header"><h2>Reports & Analytics</h2><p>Generate detailed reports on system performance and user activity</p></div>
    <div class="dash-card">
      <h4>Generate Report</h4>
      <div class="form-grid" style="max-width: 600px; margin-bottom: 24px;">
        <div class="form-field">
          <label>Report Type</label>
          <select id="reportType">
            <option value="bookings">Booking Summary</option>
            <option value="revenue">Revenue Report</option>
            <option value="users">User Activity</option>
            <option value="packages">Package Performance</option>
            <option value="hotels">Hotel Performance</option>
          </select>
        </div>
        <div class="form-field">
          <label>Date Range</label>
          <select id="reportPeriod">
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="365">Last year</option>
          </select>
        </div>
        <div class="form-field">
          <label>Format</label>
          <select id="reportFormat">
            <option value="html">HTML</option>
            <option value="csv">CSV</option>
            <option value="pdf">PDF</option>
          </select>
        </div>
      </div>
      <button class="btn btn-primary" onclick="generateReport()">Generate Report</button>
    </div>
    <div class="dash-card">
      <h4>Recent Reports</h4>
      <div class="table-wrap"><table>
        <thead><tr><th>Report</th><th>Type</th><th>Generated</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td>Monthly Revenue Report</td><td>Revenue</td><td>Dec 1, 2025</td><td><span class="badge badge-green">Ready</span></td><td><button class="btn btn-sm btn-outline" onclick="downloadReport('monthly-revenue')">Download</button></td></tr>
          <tr><td>User Activity Summary</td><td>Users</td><td>Nov 28, 2025</td><td><span class="badge badge-green">Ready</span></td><td><button class="btn btn-sm btn-outline" onclick="downloadReport('user-activity')">Download</button></td></tr>
          <tr><td>Package Performance</td><td>Packages</td><td>Nov 25, 2025</td><td><span class="badge badge-blue">Processing</span></td><td><span style="color:var(--gray-400);font-size:.82rem">In progress</span></td></tr>
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
      <td>${currencySymbol}${Number(convertPrice(b.amount)).toLocaleString()}</td>
      ${actions ? `<td>${
        b.status === 'Upcoming' ? `<button class="btn btn-sm btn-danger" onclick="cancelBooking('${b.ref}')">Cancel</button>` :
        b.status === 'Cancelled' ? '<span style="color:var(--gray-400);font-size:.82rem">Cancelled</span>' :
        b.status === 'Completed' ? `<button class="btn btn-sm btn-outline" onclick="showToast('Rebooking feature coming soon')">Rebook</button>` :
        b.status
      }</td>` : ''}
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

function adminStatCard(label, value, sub, accentClass, sparkle) {
  return `
    <div class="stat-card stat-card-vivid ${accentClass}">
      <div class="stat-card-top">
        <div class="label">${label}</div>
        <div class="stat-spark">${sparkle}</div>
      </div>
      <div class="value">${value}</div>
      <div class="sub">${sub}</div>
    </div>`;
}

function createDonutGradient(data) {
  let start = 0;
  const stops = data.map(item => {
    const end = start + item.value;
    const segment = `${item.color} ${start}% ${end}%`;
    start = end;
    return segment;
  });
  return `conic-gradient(${stops.join(', ')})`;
}

function adminDonutCard(title, subtitle, centerValue, centerLabel, data) {
  return `
    <div class="dash-card admin-panel admin-chart-panel">
      <div class="panel-heading">
        <div>
          <h4>${title}</h4>
          <p>${subtitle}</p>
        </div>
      </div>
      <div class="admin-donut-layout">
        <div class="admin-donut" style="background:${createDonutGradient(data)}">
          <div class="admin-donut-hole">
            <strong>${centerValue}</strong>
            <span>${centerLabel}</span>
          </div>
        </div>
        <div class="admin-legend">
          ${data.map(item => `
            <div class="admin-legend-item">
              <div class="admin-legend-label">
                <span class="admin-legend-swatch" style="background:${item.color}"></span>
                <span>${item.label}</span>
              </div>
              <strong>${item.value}%</strong>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

function adminBarsCard(title, subtitle, items) {
  const max = Math.max(...items.map(item => item.value), 1);
  return `
    <div class="dash-card admin-panel admin-chart-panel">
      <div class="panel-heading">
        <div>
          <h4>${title}</h4>
          <p>${subtitle}</p>
        </div>
      </div>
      <div class="admin-bars-card">
        <div class="admin-bars">
          ${items.map(item => `
            <div class="admin-bar-col">
              <div class="admin-bar-track">
                <div class="admin-bar-fill" style="height:${(item.value / max) * 100}%;background:${item.color}"></div>
              </div>
              <div class="admin-bar-value">${item.value}</div>
              <div class="admin-bar-label">${item.label}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

function adminRecentBookingsCard(list) {
  return `
    <div class="dash-card admin-panel">
      <div class="panel-heading">
        <div>
          <h4>Recent Bookings</h4>
          <p>Latest confirmed and upcoming reservations</p>
        </div>
      </div>
      <div class="admin-list">
        ${list.map(booking => `
          <div class="admin-list-item">
            <div>
              <strong>${booking.pkg}</strong>
              <span>${booking.client}</span>
            </div>
            <div>
              <strong>${booking.date}</strong>
              <span>${booking.ref}</span>
            </div>
            <div>
              <span class="badge ${booking.status === 'Upcoming' ? 'badge-blue' : 'badge-green'}">${booking.status}</span>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function adminActivityCard(list) {
  return `
    <div class="dash-card admin-panel">
      <div class="panel-heading">
        <div>
          <h4>Recent Activity</h4>
          <p>Live platform movements and signals</p>
        </div>
      </div>
      <div class="admin-timeline">
        ${list.map(item => `
          <div class="admin-timeline-item">
            <div class="admin-timeline-dot ${item.tone}"></div>
            <div class="admin-timeline-copy">
              <div class="admin-timeline-time">${item.time}</div>
              <strong>${item.title}</strong>
              <p>${item.meta}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function adminHorizontalMetricsCard(title, subtitle, items) {
  return `
    <div class="dash-card admin-panel">
      <div class="panel-heading">
        <div>
          <h4>${title}</h4>
          <p>${subtitle}</p>
        </div>
      </div>
      <div class="admin-metric-list">
        ${items.map(item => `
          <div class="admin-metric-row">
            <div class="admin-metric-top">
              <strong>${item.label}</strong>
              <span>${item.amount || item.detail}</span>
            </div>
            <div class="admin-metric-track">
              <div class="admin-metric-fill" style="width:${item.value}%;background:${item.color}"></div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function adminLineChartCard(title, subtitle, points) {
  const width = 360;
  const height = 160;
  const max = Math.max(...points.map(point => point.value), 1);
  const stepX = points.length > 1 ? width / (points.length - 1) : width;
  const polyline = points.map((point, index) => {
    const x = index * stepX;
    const y = height - ((point.value / max) * (height - 24)) - 12;
    return `${x},${y}`;
  }).join(' ');

  return `
    <div class="dash-card admin-panel admin-chart-panel">
      <div class="panel-heading">
        <div>
          <h4>${title}</h4>
          <p>${subtitle}</p>
        </div>
      </div>
      <div class="admin-line-chart">
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="engagementGradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stop-color="#5b6cff"></stop>
              <stop offset="50%" stop-color="#ff5fa2"></stop>
              <stop offset="100%" stop-color="#18c7a1"></stop>
            </linearGradient>
          </defs>
          <line x1="0" y1="${height - 12}" x2="${width}" y2="${height - 12}" class="admin-axis"></line>
          <polyline points="${polyline}" fill="none" stroke="url(#engagementGradient)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></polyline>
          ${points.map((point, index) => {
            const x = index * stepX;
            const y = height - ((point.value / max) * (height - 24)) - 12;
            return `<circle cx="${x}" cy="${y}" r="6" fill="#ffffff" stroke="#5b6cff" stroke-width="4"></circle>`;
          }).join('')}
        </svg>
        <div class="admin-line-labels">
          ${points.map(point => `<span>${point.label}</span>`).join('')}
        </div>
      </div>
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
function addToCompare(item) {
  if (!item) return;
  const isHotel = item.location !== undefined; // Hotels have location, packages have dest
  const list = isHotel ? hotelCompareList : compareList;
  const name = item.title || item.name || 'Item';
  
  if (list.find(p => p.id === item.id)) { showToast(name + ' is already in compare list'); return; }
  if (list.length >= 3) { showToast('You can compare up to 3 items'); return; }
  list.push(item);
  updateCompareBar();
  showToast(name + ' added to comparison');
}

function updateCompareBar() {
  const bar   = document.getElementById('compareBar');
  const label = document.querySelector('.compare-label');
  const items = document.getElementById('compareItems');
  const cnt   = document.getElementById('compareCnt');
  const btn   = document.getElementById('compareBtn');
  const actionBtn = document.getElementById('compareActionBtn');
  const clearBtn = document.getElementById('compareClearBtn');

  if (compareList.length > 0) {
    bar.classList.add('visible');
    if (label) label.textContent = 'Comparing Packages:';
    items.innerHTML = compareList.map(p => {
      const name = p.title || p.name || 'Item';
      return `<div class="compare-item">${name} <button onclick="removeCompare(${p.id})" aria-label="Remove">&times;</button></div>`;
    }).join('');
    if (cnt) cnt.textContent = compareList.length;
    if (btn) btn.style.display = 'inline-flex';
    if (actionBtn) {
      actionBtn.textContent = 'Compare Now';
      actionBtn.onclick = runCompare;
    }
    if (clearBtn) clearBtn.onclick = clearCompare;
  } else if (hotelCompareList.length > 0) {
    bar.classList.add('visible');
    if (label) label.textContent = 'Comparing Destinations:';
    items.innerHTML = hotelCompareList.map(h => {
      const name = h.name || 'Destination';
      return `<div class="compare-item">${name} <button onclick="removeHotelCompare(${h.id})" aria-label="Remove">&times;</button></div>`;
    }).join('');
    if (btn) btn.style.display = 'none';
    if (actionBtn) {
      actionBtn.textContent = 'Compare Destinations';
      actionBtn.onclick = runHotelCompare;
    }
    if (clearBtn) clearBtn.onclick = clearHotelCompare;
  } else {
    bar.classList.remove('visible');
    if (btn) btn.style.display = 'none';
  }
  
  // Update hotel compare
  updateHotelCompareBar();
}

function updateHotelCompareBar() {
  const cnt = document.getElementById('compareHotelCnt');
  const btn = document.getElementById('compareHotelBtn');
  
  if (cnt) cnt.textContent = hotelCompareList.length;
  if (btn) btn.style.display = hotelCompareList.length > 0 ? 'inline-flex' : 'none';
}

function removeCompare(id) { compareList = compareList.filter(p => p.id !== id); updateCompareBar(); }
function clearCompare()    { compareList = []; updateCompareBar(); }

function removeHotelCompare(id) { hotelCompareList = hotelCompareList.filter(h => h.id !== id); updateCompareBar(); }
function clearHotelCompare()    { hotelCompareList = []; updateCompareBar(); }

function runHotelCompare() {
  if (hotelCompareList.length < 2) { showToast('Select at least 2 hotels to compare'); return; }

  const rows = ['Name', 'Location', 'Category', 'Rating', 'Price', 'Amenities'];
  const getVal = (hotel, key) => {
    switch (key) {
      case 'Name': return hotel.name || 'N/A';
      case 'Location': return hotel.location || 'N/A';
      case 'Category': return hotel.category || 'N/A';
      case 'Rating': return hotel.rating ? `${hotel.rating} (${hotel.ratingLabel})` : 'N/A';
      case 'Price': return `$${hotel.discountedPrice || hotel.price || 'N/A'}`;
      case 'Amenities': return hotel.amenities ? hotel.amenities.slice(0, 3).join(', ') : 'N/A';
      default: return 'N/A';
    }
  };

  const headerCells = hotelCompareList.map(hotel => {
    const name = hotel.name || 'Hotel';
    return `<th style="padding:10px 14px;border-bottom:2px solid var(--gray-200);text-align:center"><div style="font-family:'Playfair Display',serif;font-size:.92rem;color:var(--green-dark)">${name}</div></th>`;
  }).join('');

  const bodyRows = rows.map(label => {
    const cells = hotelCompareList.map(hotel => `<td style="padding:10px 14px;text-align:center;border-bottom:1px solid var(--gray-100)">${getVal(hotel, label)}</td>`).join('');
    return `<tr><td style="padding:10px 14px;font-weight:600;color:var(--gray-600);border-bottom:1px solid var(--gray-100)">${label}</td>${cells}</tr>`;
  }).join('');

  document.getElementById('compareModalTitle').textContent = 'Destination Comparison';
  document.getElementById('compareContent').innerHTML = `
    <table style="width:100%;border-collapse:collapse;font-size:.85rem">
      <thead><tr><th style="text-align:left;padding:10px 14px;border-bottom:2px solid var(--gray-200)">Feature</th>${headerCells}</tr></thead>
      <tbody>${bodyRows}</tbody>
    </table>`;
  document.getElementById('compareModal').classList.add('open');
}

function runCompare() {
  if (compareList.length < 2) { showToast('Select at least 2 items to compare'); return; }

  const rows = ['Name', 'Type', 'Location', 'Duration', 'Price', 'Rating', 'Popularity'];
  const getVal = (pkg, key) => {
    switch (key) {
      case 'Name': return pkg.title || pkg.name || 'N/A';
      case 'Type': return pkg.region || pkg.category || (pkg.dest ? 'Package' : 'Destination') || 'N/A';
      case 'Location': return pkg.dest || pkg.location || 'N/A';
      case 'Duration': return pkg.duration ? `${pkg.duration} days` : 'N/A';
      case 'Price': {
        let amount = pkg.price || pkg.discountedPrice || pkg.originalPrice || 0;
        return amount ? `${currencySymbol}${convertPrice(amount).toLocaleString()}` : 'N/A';
      }
      case 'Rating': return pkg.rating ? `${pkg.rating} / 5` : (pkg.ratingLabel || 'N/A');
      case 'Popularity': return pkg.reviews ? `${pkg.reviews} reviews` : (pkg.reviewIndicator || 'N/A');
      default: return 'N/A';
    }
  };

  const headerCells = compareList.map(item => {
    const name = item.title || item.name || 'Item';
    return `<th style="padding:10px 14px;border-bottom:2px solid var(--gray-200);text-align:center"><div style="font-family:'Playfair Display',serif;font-size:.92rem;color:var(--green-dark)">${name}</div></th>`;
  }).join('');

  const bodyRows = rows.map(label => {
    const cells = compareList.map(item => `<td style="padding:10px 14px;text-align:center;border-bottom:1px solid var(--gray-100)">${getVal(item, label)}</td>`).join('');
    return `<tr><td style="padding:10px 14px;font-weight:600;color:var(--gray-600);border-bottom:1px solid var(--gray-100)">${label}</td>${cells}</tr>`;
  }).join('');

  document.getElementById('compareModalTitle').textContent = 'Package Comparison';
  document.getElementById('compareContent').innerHTML = `
    <table style="width:100%;border-collapse:collapse;font-size:.85rem">
      <thead><tr><th style="text-align:left;padding:10px 14px;border-bottom:2px solid var(--gray-200)">Feature</th>${headerCells}</tr></thead>
      <tbody>${bodyRows}</tbody>
    </table>`;
  document.getElementById('compareModal').classList.add('open');
}

function closeCompareModal(e) {
  if (e.target.id === 'compareModal') document.getElementById('compareModal').classList.remove('open');
}

function showModal(html) {
  document.getElementById('generalModalContent').innerHTML = html;
  document.getElementById('generalModal').classList.add('open');
}

function closeModal() {
  document.getElementById('generalModal').classList.remove('open');
}

function closeGeneralModal(e) {
  if (e.target.id === 'generalModal') closeModal();
}

function openThumbnailVideo(el) {
  const videoId = el.getAttribute('data-yt');
  if (!videoId) return;
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?rel=0&controls=1&modestbranding=1`);
  iframe.setAttribute('title', 'Video 2');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');
  iframe.style.height = '100%';
  iframe.style.width = '100%';
  iframe.style.border = 'none';
  el.replaceWith(iframe);
}

// ════════════════════════════════════════════════
// AI CHAT
// ════════════════════════════════════════════════
const AI_RESPONSES = [
  { keywords: ['sigiriya', 'lion rock', 'dambulla'], reply: 'Lion Rock Escape is one of our most popular short Sri Lanka packages. It focuses on Sigiriya, Dambulla, and Polonnaruwa with local road transfers, guided cultural visits, and comfortable hotel stays.' },
  { keywords: ['kandy', 'heritage', 'sacred city'], reply: 'Sacred City Retreat is ideal if you want a culture-focused journey through Colombo, Anuradhapura, Sigiriya, and Kandy. It combines heritage sites, hotel stays, and private local transport.' },
  { keywords: ['budget', 'cheap', 'affordable', 'value'], reply: 'Our best value Sri Lanka packages usually include Wellness Retreat, Sacred City Retreat, and Hill Country Escape. Group discounts of 10-15% apply for larger bookings, and selected departures include promotional pricing.' },
  { keywords: ['safari', 'yala', 'udawalawe', 'wildlife'], reply: 'Wildlife Safari is our main Sri Lanka wildlife package, covering Yala and Udawalawe with safari jeep experiences, local lodges, and road transfers. The driest months usually offer the strongest wildlife viewing.' },
  { keywords: ['cancel', 'refund'], reply: 'Free cancellation is available up to 14 days before departure. Between 7 and 14 days, a 25% fee applies. Within 7 days, bookings are non-refundable. You can cancel directly from your Dashboard.' },
  { keywords: ['group', 'corporate', 'team', 'family'], reply: 'We offer dedicated group booking tools for Sri Lanka travel. Groups of 10+ receive 10% off, 20+ get 15% off, and corporate accounts include approval workflows, invoices, and an account manager.' },
  { keywords: ['documents', 'id', 'check-in'], reply: 'For Sri Lanka domestic travel, most bookings only require the identification details needed for hotel check-in and payment verification. Any supplier-specific requirements are shown before confirmation.' },
  { keywords: ['honeymoon', 'mirissa', 'romantic'], reply: 'Honeymoon Package is a romantic Sri Lanka itinerary covering Ella and Mirissa with scenic travel, private experiences, and beach time. It is one of our best options for couples.' },
  { keywords: ['ella', 'train', 'hill country'], reply: 'Scenic Rail Journey and Hill Country Escape are great picks for Ella, Kandy, and Nuwara Eliya. They focus on rail scenery, tea country views, boutique stays, and relaxed local transfers.' }
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
    let reply = 'I can help with Sri Lanka destination recommendations, package details, local transport, group bookings, cancellations, and more. Try asking about a specific place or package.';
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
  const panel = btn.getAttribute('data-panel');
  if (!panel) return;
  document.querySelectorAll(`[data-panel-group="${groupId}"]`).forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-panel') === panel);
  });
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

function toggleStoryPanel() {
  const panel = document.getElementById('shareStoryPanel');
  if (!panel) return;
  panel.classList.toggle('active');
}

function submitGuestStory() {
  const storyInput = document.getElementById('storyText');
  if (!storyInput || !storyInput.value.trim()) {
    showToast('Please enter a story before submitting.');
    return;
  }
  showToast('Thank you! Your experience has been shared.');
  storyInput.value = '';
  const panel = document.getElementById('shareStoryPanel');
  if (panel) panel.classList.remove('active');
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
  syncCustomSelect(document.getElementById('bulkPackage'));
  validateBulkForm();
}

function cancelBooking(ref) {
  // Find the booking in the history
  const booking = bookingHistory.find(b => b.ref === ref);
  if (!booking) {
    showToast('Booking not found', 'error');
    return;
  }

  if (booking.status === 'Cancelled') {
    showToast('Booking is already cancelled');
    return;
  }

  if (booking.status === 'Completed') {
    showToast('Cannot cancel completed trips');
    return;
  }

  const bookingDate = new Date(booking.date);
  const daysSinceBooking = Math.floor((new Date() - bookingDate) / (1000 * 60 * 60 * 24));
  if (isNaN(bookingDate.getTime())) {
    showToast('Invalid booking date; unable to process cancellation', 'error');
    return;
  }

  if (daysSinceBooking > 10) {
    showToast('Cancellation window expired (more than 10 days since booking)', 'error');
    return;
  }

  // Show confirmation dialog
  if (!confirm(`Are you sure you want to cancel booking ${ref}? This action cannot be undone.`)) {
    return;
  }

  // Update booking status
  booking.status = 'Cancelled';
  showToast(`Booking ${ref} has been cancelled`);

  // Refresh the current dashboard section
  renderDashContent(activeDashSection);
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

function viewAdminUser(userId) {
  const user = ADMIN_USERS.find(u => u.id === userId);
  if (!user) {
    showToast('User profile not found', 'error');
    return;
  }

  const userHtml = `
    <div class="dash-header"><h2>${user.name}</h2><p>Admin detail view</p></div>
    <div class="dash-card" style="margin-bottom:20px">
      <div><strong>Role:</strong> ${user.role}</div>
      <div><strong>Email:</strong> ${user.email}</div>
      <div><strong>Joined:</strong> ${user.joined}</div>
      <div><strong>Bookings:</strong> ${user.bookings}</div>
      <div><strong>Status:</strong> <span class="badge ${user.status === 'Active' ? 'badge-green' : user.status === 'Under Review' ? 'badge-orange' : 'badge-gray'}">${user.status}</span></div>
      <div><strong>Details:</strong> ${user.details}</div>
    </div>
    <div class="dash-card">
      <h4>Related Bookings</h4>
      ${bookingTable(bookingHistory.filter(b => b.client && b.client.toLowerCase().includes(user.name.toLowerCase().split(' ')[0])), false)}
    </div>
    <button class="btn btn-sm btn-outline" onclick="renderDashContent('users')">Back to user list</button>
  `;

  document.getElementById('dashContent').innerHTML = userHtml;
}

// ════════════════════════════════════════════════
// NEWSLETTER
// ════════════════════════════════════════════════
function handleNewsletter() {
  showToast('Thank you for subscribing to TravelBooker updates');
}

// ════════════════════════════════════════════════
// REPORTS
// ════════════════════════════════════════════════
function generateReport() {
  const reportType = document.getElementById('reportType').value;
  const reportPeriod = document.getElementById('reportPeriod').value;
  const reportFormat = document.getElementById('reportFormat').value;

  showToast(`Generating ${reportType} report for the last ${reportPeriod} days...`);

  // Simulate report generation delay
  setTimeout(() => {
    showToast(`${reportType.charAt(0).toUpperCase() + reportType.slice(1)} report generated successfully!`);
    // In a real app, this would trigger a download or refresh the recent reports table
    renderDashContent('reports'); // Refresh to show new report in the list
  }, 2000);
}

function downloadReport(reportId) {
  showToast(`Downloading ${reportId} report...`);

  // Simulate download delay
  setTimeout(() => {
    showToast('Report downloaded successfully!');
    // In a real app, this would trigger an actual file download
  }, 1000);
}

// ════════════════════════════════════════════════
// CANCELLATION POLICY
// ════════════════════════════════════════════════
function updateCancellationPolicy() {
  showToast('Opening cancellation policy editor...');
  // In a real app, this would open a modal or form to edit the policy
  setTimeout(() => {
    showToast('Policy update feature coming soon');
  }, 500);
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

  // Set default currency
  const currencySelector = document.getElementById('currencySelector');
  if (currencySelector) currencySelector.value = 'Sri Lanka';

  // Render home featured
  renderFeatured();
  setupHomeSearch();
  initializeCustomSelects();
  syncCustomSelects();
  customSelectObserver.observe(document.body, { childList: true, subtree: true });

  // Keyboard nav for logo
  document.querySelector('.logo').addEventListener('keydown', e => {
    if (e.key === 'Enter') navigate('home');
  });

  // Initialize business name field visibility for auth pages
  toggleBusinessAuthField('loginRole', 'loginBusinessNameField');
  toggleBusinessAuthField('signupRole', 'signupBusinessNameField');
})();














