export interface SafariDay {
  day: string;
  title: string;
  description: string;
}

const standardIncludes = [
  'Park fees or conservation fees',
  'All activities (Unless labeled as optional)',
  'All accommodation (Unless listed as upgrade)',
  'A professional driver/guide',
  'All transportation',
  'All Taxes/VAT',
  'Meals (As specified in the day-by-day section)',
  'Drinking water (On all days in the bus during game drives)',
  '*AMREF Flying Doctor Service in the event of a necessity for evacuation to the nearest hospital'
];

const standardExcludes = [
  'International flights (From/to home)',
  'Additional accommodation before and at the end of the tour',
  'Tips (Tipping guideline US$10.00 pp per day)',
  'Personal items (Souvenirs, travel insurance, visa fees, etc.)',
  'Government imposed increase of taxes and/or park fees',
  'All the accommodation and booking request'
];

export const safaris = [
  {
    id: 'WSHN01',
    title: '6 Days Samburu Frontier, Lake Nakuru & Masai Mara Wildlife Park',
    duration: '6 Days',
    locations: 'Samburu, Nakuru, Masai Mara',
    image: 'https://wilbersafariholidays.com/wp-content/uploads/2021/05/1.jpg',
    type: 'Premium Expedition',
    description: 'A comprehensive 6-day journey taking you through the rugged Samburu frontier, the birdlife-rich Lake Nakuru, and the world-famous Masai Mara. Experience diverse landscapes and unparalleled wildlife viewing.',
    whatToExpect: [
      'Game drives in Samburu National Reserve, spotting unique northern species.',
      'A visit to Lake Nakuru National Park, a paradise for bird watchers and rhino lovers.',
      'Extensive exploration of the Masai Mara National Reserve, home to the Great Migration and big cats.',
    ],
    itinerary: [
      {
        day: 'Day 1 & 2',
        title: 'Nairobi to Samburu National Reserve',
        description: 'Depart from Nairobi to the rugged semi-arid landscape of Samburu. Spend two days exploring the reserve, uniquely positioned along the Ewaso Nyiro River. Enjoy standard game drives looking for the rare "Samburu Special Five". Overnight at a selected lodge.'
      },
      {
        day: 'Day 3',
        title: 'Samburu to Lake Nakuru National Park',
        description: 'Leave Samburu after breakfast and head towards the Great Rift Valley, arriving at Lake Nakuru in time for lunch. Spend the afternoon game driving around the lake shores, famous for its rhinos, flamingos, and pelicans. Dinner and overnight at a lodge.'
      },
      {
        day: 'Day 4 & 5',
        title: 'Lake Nakuru to Masai Mara',
        description: 'Travel south to the iconic Masai Mara National Reserve. Spend two full days enjoying magnificent game drives across the rolling savannahs in search of the Big Five and witnessing spectacular wildlife scenes. Picnic lunches in the wild and comfortable overnights at the lodge/camp.'
      },
      {
        day: 'Day 6',
        title: 'Masai Mara to Nairobi',
        description: 'Enjoy a final early morning game drive before breakfast. Afterwards, check out and drive back to Nairobi, concluding your ultimate safari experience.'
      }
    ],
    includes: standardIncludes,
    excludes: standardExcludes
  },
  {
    id: 'WSHN02',
    title: '3 days 2 Nights Masai Mara Leading Wildlife Park',
    duration: '3 Days',
    locations: 'Masai Mara',
    image: 'https://wilbersafariholidays.com/wp-content/uploads/2022/01/wsn02.jpg',
    type: 'Wildlife Experience',
    description: 'A short but incredible encounter with the Masai Mara. Perfect for those with limited time who still want to experience the very best of African wildlife in Kenya\'s premier reserve.',
    whatToExpect: [
      'Morning and afternoon game drives in the Masai Mara.',
      'Opportunities to spot the Big Five in their natural habitat.',
      'Cultural visits to local Maasai villages (optional).',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Nairobi to Masai Mara',
        description: 'Depart from Nairobi in the morning (07:30 am) and drive along the floor of the Rift Valley to Maasai Mara National Reserve arriving at the camp in the afternoon for lunch. Afternoon game drives followed by dinner and overnight at the Keekorok Lodge or similar.'
      },
      {
        day: 'Day 2',
        title: 'Maasai Mara Full Day',
        description: 'Full day spent exploring the park in search of the Big Five. You will have a picnic Lunch in the plains of the Mara enjoying the wilderness. After another game drive in the afternoon, return to your camp. Dinner and overnight at Keekorok or similar.'
      },
      {
        day: 'Day 3',
        title: 'Masai Mara to Nairobi',
        description: 'After an early morning game drive, you return for Breakfast to the camp. Later proceed to Nairobi to arrive by 1600 hrs. and drop off at a Hotel or continue with your onward holiday arrangements.'
      }
    ],
    includes: standardIncludes,
    excludes: standardExcludes
  },
  {
    id: 'WSHN03',
    title: '3 days 2 Nights Masai Mara Superior Lodge Experience',
    duration: '3 Days',
    locations: 'Masai Mara',
    image: 'https://wilbersafariholidays.com/wp-content/uploads/2021/05/wshn03.jpg',
    type: 'Superior Lodge',
    description: 'Enjoy the wonders of the Masai Mara with a touch of luxury. Stay in superior lodges or luxury tented camps, offering excellent amenities alongside thrilling game drives.',
    whatToExpect: [
      'Premium accommodation with exquisite dining and views.',
      'Expertly guided game drives in specialized 4x4 vehicles.',
      'Sundowners and optional hot air balloon safari over the plains.',
    ],
    itinerary: [
        {
          day: 'Day 1',
          title: 'Nairobi to Masai Mara',
          description: 'Depart from Nairobi in the morning (07:30 am) and drive along the floor of the Rift Valley to Maasai Mara National Reserve arriving at the superior lodge in the afternoon for an exquisite lunch. Afternoon game drives followed by luxury dinner and overnight.'
        },
        {
          day: 'Day 2',
          title: 'Maasai Mara Full Day Explorer',
          description: 'Full day spent exploring the park in luxury vehicles. Enjoy a gourmet picnic Lunch in the wilderness. After another rewarding game drive in the afternoon, return to your camp for sundowners. Dinner and overnight.'
        },
        {
          day: 'Day 3',
          title: 'Masai Mara to Nairobi',
          description: 'After an early morning game drive, you return for Breakfast to the lodge. Later proceed to Nairobi to arrive by 1600 hrs. and drop off at a Hotel or continue with your onward holiday arrangements.'
        }
      ],
      includes: standardIncludes,
      excludes: standardExcludes
  },
  {
    id: 'WSHN04',
    title: '6 Days Masai Mara, Lake Nakuru & Samburu Expedition',
    duration: '6 Days',
    locations: 'Masai Mara, Nakuru, Samburu',
    image: 'https://wilbersafariholidays.com/wp-content/uploads/2021/05/4.jpg',
    type: 'Expedition',
    description: 'An extended exploration to Kenya\'s most contrasting environments. From the arid beauty of Samburu to the lush shores of Lake Nakuru and the sweeping savannahs of the Mara.',
    whatToExpect: [
      'See the "Samburu Special Five" (Grevy\'s zebra, reticulated giraffe, gerenuk, Beisa oryx, Somali ostrich).',
      'Spot endangered black and white rhinos in Lake Nakuru.',
      'Witness dramatic predator-prey interactions in the Masai Mara.',
    ],
    itinerary: [
      {
        day: 'Day 1 & 2',
        title: 'Nairobi to Masai Mara',
        description: 'Start your adventure with a drive into the heart of the Masai Mara. Spend your first two days roaming the reserve in search of large predator populations and herds of herbivores. Overnight in the Mara.'
      },
      {
        day: 'Day 3',
        title: 'Masai Mara to Lake Nakuru',
        description: 'Bid farewell to the Mara and ascend into the Great Rift Valley towards Lake Nakuru. Enjoy a late afternoon game drive observing flocks of flamingos and rhinos at close range.'
      },
      {
        day: 'Day 4 & 5',
        title: 'Lake Nakuru to Samburu',
        description: 'Drive via the scenic highlands to the northern frontier district of Samburu. Discover unique wildlife that only thrives in this arid environment along the Ewaso Nyiro River.'
      },
      {
        day: 'Day 6',
        title: 'Samburu to Nairobi',
        description: 'Conclude your expedition with an early morning game drive followed by a comfortable journey back to Nairobi.'
      }
    ],
    includes: standardIncludes,
    excludes: standardExcludes
  },
  {
    id: 'WSHN05',
    title: '3 Days 2 Nights Masai Mara Budget Camping Safari',
    duration: '3 Days',
    locations: 'Masai Mara',
    image: 'https://wilbersafariholidays.com/wp-content/uploads/2021/05/5.jpg',
    type: 'Budget Safari',
    description: 'An immersive, authentic, and budget-friendly way to experience the Masai Mara. Stay in comfortable camping facilities and enjoy the rustic charm of staying close to nature.',
    whatToExpect: [
      'Affordable camping accommodation near the reserve.',
      'Daily game drives with knowledgeable driver-guides.',
      'Evenings around the campfire sharing safari stories.',
    ],
    itinerary: [
        {
          day: 'Day 1',
          title: 'Nairobi to Masai Mara Camp',
          description: 'Depart from Nairobi in the morning (07:30 am) and drive to Maasai Mara National Reserve setting up camp in the afternoon. Enjoy an introductory late afternoon game drive. Dinner and overnight at the camp.'
        },
        {
          day: 'Day 2',
          title: 'Maasai Mara Full Day',
          description: 'A full day exploring the magnificent park from sunrise to sunset. A packed lunch will be served by the river. Return to the campsite in the evening for dinner by the bonfire.'
        },
        {
          day: 'Day 3',
          title: 'Masai Mara to Nairobi',
          description: 'After a final early morning game drive and breakfast, break camp and return to Nairobi, arriving in the mid-afternoon.'
        }
      ],
      includes: standardIncludes,
      excludes: standardExcludes
  },
  {
    id: 'WSHM01',
    title: '2 Days Tsavo East Theater of the Wild',
    duration: '2 Days',
    locations: 'Tsavo East',
    image: 'https://wilbersafariholidays.com/wp-content/uploads/2021/05/tsavo-east-1.1.jpg',
    type: 'Short Break',
    description: 'A quick getaway to Tsavo East National Park, famous for its "red elephants" turning the red-dust landscape iconic. A perfect overnight adventure from the coast.',
    whatToExpect: [
      'Sightings of large herds of dust-red elephants.',
      'Game drives along the Galana River.',
      'Visiting the impressive Mudanda Rock and Lugard Falls.',
    ],
    itinerary: [
        {
          day: 'Day 1',
          title: 'Mombasa/Coast to Tsavo East',
          description: 'Pick up early morning from your coastal hotel and drive along the Mombasa-Nairobi highway to Tsavo East. Enter the park and commence a game drive straight away towards your lodge for lunch. Afternoon game drive, returning at sunset.'
        },
        {
          day: 'Day 2',
          title: 'Tsavo East back to Coast',
          description: 'Early morning game drive before breakfast. Check out and embark on a final game drive en route to the park gate. Drive back to the coast, arriving in the afternoon.'
        }
      ],
      includes: standardIncludes,
      excludes: standardExcludes
  },
  {
    id: 'WSHM02',
    title: '2 Days Tsavo East & Taita Hills Sanctuary',
    duration: '2 Days',
    locations: 'Tsavo East, Taita Hills',
    image: 'https://wilbersafariholidays.com/wp-content/uploads/2021/05/4daystaita.png',
    type: 'Sanctuary Explorer',
    description: 'Combine the vast plains of Tsavo East with the private Taita Hills Wildlife Sanctuary, renowned for its unique elevated lodges and frequent wildlife sightings at waterholes.',
    whatToExpect: [
      'Game drives in Tsavo East National Park.',
      'Night game drives in Taita Hills Sanctuary.',
      'Incredible photo opportunities from lodge waterholes.',
    ],
    itinerary: [
        {
          day: 'Day 1',
          title: 'Coast to Tsavo East & Taita Hills',
          description: 'Depart the coastline early heading to Tsavo East for a morning game drive. After lunch, proceed to the adjacent Taita Hills Wildlife Sanctuary. Enjoy an afternoon and optional night game drive. Overnight at the stilted lodge.'
        },
        {
          day: 'Day 2',
          title: 'Taita Hills to Coast',
          description: 'Wake up to wildlife at the waterhole beneath the lodge. Have an early breakfast followed by a morning game drive through the sanctuary. Drive back to the coast arriving by afternoon.'
        }
      ],
      includes: standardIncludes,
      excludes: standardExcludes
  },
  {
    id: 'WSHM03',
    title: '3 Days Tsavo East/West & Amboseli',
    duration: '3 Days',
    locations: 'Tsavo, Amboseli',
    image: 'https://wilbersafariholidays.com/wp-content/uploads/2021/05/amboseli-21.png',
    type: 'Adventure',
    description: 'A diverse 3-day adventure that takes you through the contrasting landscapes of Tsavo East and West, finishing with spectacular views of Mount Kilimanjaro in Amboseli.',
    whatToExpect: [
      'Exploring the volcanic terrain of Shetani Lava Flows in Tsavo West.',
      'Viewing hippos at Mzima Springs.',
      'Unmatched views of elephants roaming beneath Mt. Kilimanjaro in Amboseli.',
    ],
    itinerary: [
        {
          day: 'Day 1',
          title: 'Coast to Tsavo East & West',
          description: 'Depart the coast early morning towards Tsavo East for a game drive. Proceed to Tsavo West, passing by the Shetani Lava flows, and arrive at your lodge for lunch. Afternoon game drive including a visit to Mzima Springs.'
        },
        {
          day: 'Day 2',
          title: 'Tsavo West to Amboseli',
          description: 'After breakfast, drive to Amboseli National Park. Enjoy an en-route game drive to the lodge for lunch. The afternoon is dedicated to exploring the plains of Amboseli with Mount Kilimanjaro towering in the background.'
        },
        {
          day: 'Day 3',
          title: 'Amboseli to Nairobi/Coast',
          description: 'Early game drive taking advantage of the clear mountain views. After breakfast, journey back to your drop-off location (Nairobi or the Coast), concluding your diverse safari.'
        }
      ],
      includes: standardIncludes,
      excludes: standardExcludes
  },
  {
    id: 'WSH05',
    title: '3 Days Tsavo East & West Superior',
    duration: '3 Days',
    locations: 'Tsavo East & West',
    image: 'https://wilbersafariholidays.com/wp-content/uploads/2021/05/3.jpg',
    type: 'Luxury Escape',
    description: 'Explore the full expanse of the Tsavo ecosystem while staying in superior lodge accommodations. Experience maximum comfort alongside intense wildlife encounters.',
    whatToExpect: [
      'Comprehensive game drives in both Tsavo East and West.',
      'Premium dining and lodge amenities deep within the wilderness.',
      'Exceptional guiding services and panoramic landscape views.',
    ],
    itinerary: [
        {
          day: 'Day 1',
          title: 'Depart to Tsavo East',
          description: 'Travel from your starting point to Tsavo East, arriving for a premium lunch at your superior lodge. Experience an expertly guided afternoon game drive tracking the red elephants of Tsavo.'
        },
        {
          day: 'Day 2',
          title: 'Tsavo East to Tsavo West',
          description: 'After a morning game drive in East, transfer to Tsavo West. Check into your luxury accommodation. Spend the afternoon exploring the contrasting terrain, lush springs, and rocky outcrops of West.'
        },
        {
          day: 'Day 3',
          title: 'Departure',
          description: 'Final early morning game drive in Tsavo West. Relish a lavish breakfast before checking out and beginning your journey onward.'
        }
      ],
      includes: standardIncludes,
      excludes: standardExcludes
  }
];
