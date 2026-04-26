// import him from "@/assets/tour-himalaya.jpg";
import spiti from "@/assets/spiti/key-monastery.jpg"
import yulla from "@/assets/yulla-kanda/main.jpg"
import kedarkantha from "@/assets/kedarkantha/main.jpg"
import manali from "@/assets/manali/main.jpg";
// import meg from "@/assets/tour-meghalaya.jpg";
import hampta from "@/assets/hampta-pass/main.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import biking from "@/assets/ladakh/biking-main.webp";
import ladakh from "@/assets/dest-ladakh.jpg";
import biking2 from "@/assets/ladakh/biking-2.webp";
import biking3 from "@/assets/ladakh/biking-3.webp";

export type Tour = {
  slug: string;
  name: string;
  region: string;
  days: string;
  price: string;
  img: string;
  tagline: string;
  intro: string;
  highlights: string[];
  itinerary: { day: string; title: string; body: string }[];
  includes: string[];
};

export const tours: Tour[] = [
  {
  slug: "spiti-valley",
  name: "Spiti Valley Expedition",
  region: "Himachal Pradesh",
  days: "8 Days",
  price: "₹20,000",
  img: spiti,
  tagline: "Raw landscapes. Ancient monasteries. High-altitude adventure.",
  intro:
    "Experience the raw beauty of Spiti Valley through this adventurous circuit via Kinnaur. From lush green valleys to barren cold deserts, explore ancient monasteries, remote villages, and some of the highest motorable roads in the Himalayas.",
  highlights: [
    "Chitkul – last village near Indo-Tibet border",
    "Khab Sangam & Nako Lake",
    "Gue Monastery (mummy)",
    "Tabo Monastery (1000+ years old)",
    "Langza, Hikkim & Komic villages",
    "Key Monastery, Kibber & Chicham Bridge",
    "Chandratal lake camping",
    "Atal Tunnel & Manali sightseeing",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Chandigarh → Narkanda",
      body: "Pickup from Chandigarh. Drive via Shimla, Solan & Theog. Scenic mountain roads and apple orchards. Overnight in Narkanda."
    },
    {
      day: "Day 2",
      title: "Narkanda → Sangla / Chitkul",
      body: "Drive to Sangla Valley. Visit Chitkul, the last inhabited village near Indo-Tibet border. Enjoy Baspa river views."
    },
    {
      day: "Day 3",
      title: "Sangla → Tabo",
      body: "Enter Spiti via Kinnaur. Visit Khab Sangam, Nako Lake, Gue Monastery (mummy), and Tabo Monastery."
    },
    {
      day: "Day 4",
      title: "Tabo → Kaza (via Dhankar)",
      body: "Visit Dhankar Monastery. Explore Langza (fossil village), Hikkim (highest post office), and Komic village."
    },
    {
      day: "Day 5",
      title: "Kaza Sightseeing",
      body: "Visit Key Monastery, Kibber village & Chicham Bridge. Explore Kaza market and local cafés."
    },
    {
      day: "Day 6",
      title: "Kaza → Chandratal",
      body: "Drive via Losar and Kunzum Pass to Chandratal Lake. Overnight camping near the lake."
    },
    {
      day: "Day 7",
      title: "Chandratal → Manali",
      body: "Cross Kunzum Pass & Atal Tunnel. Reach Manali. Visit Hidimba Temple & Mall Road."
    },
    {
      day: "Day 8",
      title: "Manali → Chandigarh",
      body: "Return journey via Kullu along Beas River. Drop at Chandigarh."
    },
  ],
  includes: [
    "7 nights stay (hotel + camps)",
    "Transportation (Tempo Traveler / SUV)",
    "Meals (Breakfast & Dinner)",
    "Trip captain",
    "Permits & taxes",
  ],
},
{
  slug: "yulla-kanda",
  name: "Yulla Kanda Trek",
  region: "Himachal Pradesh (Kinnaur)",
  days: "6 Days",
  price: "₹14,000",
  img: yulla,
  tagline: "Hidden lake. High-altitude trek. Untouched Kinnaur.",
  intro:
    "Yulla Kanda is one of Himachal’s most unexplored high-altitude treks, leading to a sacred lake and the world’s highest Krishna temple. This journey combines road adventure through Kinnaur with a rewarding trek to pristine alpine landscapes far from the crowds.",
  highlights: [
    "Hidden Yulla Kanda lake trek",
    "World’s highest Krishna temple",
    "Raw Kinnaur landscapes & villages",
    "Offbeat camping experience",
    "Apple orchards & Sutlej valley drive",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Chandigarh → Shimla / Narkanda",
      body: "Pickup from Chandigarh. Drive via Shimla through scenic mountain roads. Overnight stay."
    },
    {
      day: "Day 2",
      title: "Shimla → Reckong Peo / Lambar",
      body: "Drive through Kinnaur valley along Sutlej River. Reach base village near Lambar for trek."
    },
    {
      day: "Day 3",
      title: "Trek Start → Base Camp",
      body: "Begin trek towards Yulla Kanda. Gradual ascent through forests and meadows. Camp overnight."
    },
    {
      day: "Day 4",
      title: "Yulla Kanda Lake Summit",
      body: "Early morning trek to Yulla Kanda lake and Krishna temple. Enjoy panoramic Himalayan views. Return to camp."
    },
    {
      day: "Day 5",
      title: "Descend → Reckong Peo",
      body: "Trek down to base village and drive back to Reckong Peo / Kalpa. Relax with mountain views."
    },
    {
      day: "Day 6",
      title: "Return to Chandigarh",
      body: "Drive back via Shimla. Trip ends with drop at Chandigarh."
    },
  ],
  includes: [
    "5 nights stay (hotel + camps)",
    "Transportation (Tempo Traveler / SUV)",
    "Meals (Breakfast & Dinner)",
    "Trek guide & support staff",
    "Camping equipment",
    "Permits & taxes",
  ],
},
{
  slug: "kedarkantha-trek",
  name: "Kedarkantha Trek",
  region: "Uttarakhand",
  days: "7 Days",
  price: "+91 8160958530",
  img: kedarkantha,
  tagline: "Snow trek. Summit sunrise. Himalayan adventure.",
  intro:
    "Kedarkantha is one of India’s most popular winter treks, offering stunning snow-covered trails, frozen lakes, and a rewarding summit climb. From dense pine forests to breathtaking 360° Himalayan views, this trek is perfect for beginners and adventure seekers alike.",
  highlights: [
    "Kedarkantha summit (12,500 ft)",
    "Juda Ka Talab frozen lake",
    "Snow trekking & camping",
    "Dense pine & oak forests",
    "Views of Swargarohini & Black Peak",
    "Rishikesh river rafting & Ganga Aarti",
    "Mussoorie sightseeing & Kempty Falls",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival at Rishikesh",
      body: "Pickup from Haridwar/Dehradun. River rafting experience and Ganga Aarti in evening. Overnight stay."
    },
    {
      day: "Day 2",
      title: "Rishikesh → Sankri",
      body: "Drive via Yamuna & Tons river valleys. Reach Sankri village and explore the scenic hamlet."
    },
    {
      day: "Day 3",
      title: "Sankri → Juda Ka Talab",
      body: "Start trek through dense pine forests. Reach Juda Ka Talab and camp overnight."
    },
    {
      day: "Day 4",
      title: "Juda Ka Talab → Base Camp",
      body: "Trek through snow-covered meadows with stunning mountain views. Overnight at base camp."
    },
    {
      day: "Day 5",
      title: "Summit → Descend",
      body: "Early morning summit climb. Witness sunrise from Kedarkantha peak and descend back to campsite."
    },
    {
      day: "Day 6",
      title: "Sankri → Mussoorie",
      body: "Return trek to Sankri and drive to Mussoorie. Visit Kempty Falls & Mall Road."
    },
    {
      day: "Day 7",
      title: "Return Journey",
      body: "Drive back to Haridwar/Dehradun with beautiful memories."
    },
  ],
  includes: [
    "Accommodation (hotel + camps)",
    "All meals (Breakfast, Lunch, Dinner)",
    "Transportation (Tempo Traveller / SUV)",
    "Trek guide & support staff",
    "Camping equipment",
    "Forest permits",
    "River rafting in Rishikesh",
  ],
},
{
  slug: "royal-jaisalmer",
  name: "Royal Jaisalmer",
  region: "Rajasthan",
  days: "3 Days",
  price: "6,000",
  img: rajasthan,
  tagline: "Golden fort. Desert dunes. Royal camping nights.",
  intro:
    "Experience the charm of Rajasthan’s Golden City with this Royal Jaisalmer getaway. From historic forts and havelis to thrilling desert safaris and cultural nights under the stars, this trip blends heritage with adventure in the heart of the Thar Desert.",
  highlights: [
    "Jaisalmer Golden Fort & heritage havelis",
    "Camel safari in Sam Sand Dunes",
    "Desert camping in Swiss tents",
    "Folk dance, DJ night & bonfire",
    "Jeep desert safari experience",
    "Kuldhara haunted village visit",
    "Authentic Rajasthani cuisine",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival & Jaisalmer Sightseeing",
      body: "Arrival at Jaisalmer. Visit Golden Fort, Patwon Ki Haveli, Salim Singh Haveli & Gadisar Lake. Evening leisure at hotel."
    },
    {
      day: "Day 2",
      title: "Desert Camp Experience",
      body: "Drive to Sam Sand Dunes via Kuldhara village. Enjoy camel safari, sunset views, cultural folk dance, DJ night, bonfire & Rajasthani dinner. Overnight stay in Swiss tents."
    },
    {
      day: "Day 3",
      title: "Jeep Safari & Departure",
      body: "Early morning jeep safari in desert. Return to Jaisalmer. Free time for shopping and departure."
    },
  ],
  includes: [
    "2 nights stay (hotel + desert camp)",
    "Meals (Breakfast & Dinner)",
    "Camel safari & jeep safari",
    "Cultural program & bonfire",
    "Local sightseeing",
    "Transportation (local transfers)",
  ],
},
{
  slug: "manali-kasol",
  name: "Manali Kasol",
  region: "Himachal Pradesh",
  days: "7 Days",
  price: "+91 8160958530",
  img: manali,
  tagline: "Trekking. River vibes. Adventure-packed Himalayan escape.",
  intro:
    "A perfect blend of adventure and chill vibes, this Manali–Kasol trip takes you through Parvati Valley, thrilling treks, and snow-covered landscapes. From Kasol’s peaceful riverside charm to Manali’s adrenaline-filled activities, this journey is built for explorers.",
  highlights: [
    "Kasol & Parvati Valley exploration",
    "Manikaran Gurudwara visit",
    "Magic Valley / Malana trek",
    "Bhrigu Lake / Jogini waterfall trek",
    "River rafting in Kullu",
    "Solang Valley & Atal Tunnel visit",
    "Adventure activities (rappelling, river crossing)",
    "Campfire & DJ night experience",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Departure",
      body: "Departure from hometown towards Jalandhar/Delhi via train or bus (overnight journey)."
    },
    {
      day: "Day 2",
      title: "Jalandhar → Kasol",
      body: "Arrival and transfer to Kasol. Check-in and relax in Parvati Valley."
    },
    {
      day: "Day 3",
      title: "Kasol Sightseeing",
      body: "Visit Manikaran Gurudwara, Kasol market, Parvati river trail and adventure activities. Campfire at night."
    },
    {
      day: "Day 4",
      title: "Malana / Magic Valley Trek",
      body: "Full-day trek experience through scenic valley. Return to Kasol for overnight stay."
    },
    {
      day: "Day 5",
      title: "Kasol → Manali",
      body: "Drive to Manali. Visit Jogini Waterfall / Bhrigu base camp (seasonal)."
    },
    {
      day: "Day 6",
      title: "Manali Adventure & Sightseeing",
      body: "Visit Solang Valley, Atal Tunnel, Hidimba Temple. Enjoy river rafting and adventure activities."
    },
    {
      day: "Day 7",
      title: "Return Journey",
      body: "Departure from Manali/Kullu towards hometown with unforgettable memories."
    },
  ],
  includes: [
    "Accommodation (hotel + camps)",
    "Meals (Breakfast, Lunch & Dinner)",
    "Transportation (Tempo Traveller / bus)",
    "Trekking activities",
    "River rafting",
    "Adventure activities",
    "Campfire & DJ night",
    "Permits & entry fees",
  ],
},
{
  slug: "hampta-pass",
  name: "Hampta Pass Trek",
  region: "Himachal Pradesh",
  days: "8 Days",
  price: "+91 8160958530",
  img: hampta,
  tagline: "Cross valleys. Summit a Himalayan pass. Camp under stars.",
  intro:
    "Hampta Pass is one of the most dramatic crossover treks in the Himalayas, connecting the lush green valleys of Kullu to the barren landscapes of Lahaul. From forest trails and river crossings to snow-covered passes and Chandratal lake, this trek delivers a complete Himalayan adventure.",
  highlights: [
    "Hampta Pass summit (~14,100 ft)",
    "Chika & Balu Ka Ghera scenic campsites",
    "River crossings & glacier views",
    "Chandratal lake visit",
    "Transition from green Kullu to barren Spiti landscapes",
    "Camping under stars in high altitude",
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Departure → Manali",
      body: "Overnight journey from Delhi to Manali."
    },
    {
      day: "Day 2",
      title: "Manali Acclimatisation",
      body: "Arrival in Manali. Local sightseeing and short acclimatisation trek."
    },
    {
      day: "Day 3",
      title: "Manali → Jobra → Chika",
      body: "Drive to Jobra and trek to Chika campsite through forest trails and riverside paths."
    },
    {
      day: "Day 4",
      title: "Chika → Balu Ka Ghera",
      body: "Trek through rocky terrain and river crossings. Reach Balu Ka Ghera campsite."
    },
    {
      day: "Day 5",
      title: "Balu Ka Ghera → Hampta Pass → Shea Goru",
      body: "Summit Hampta Pass and descend into Lahaul valley. Long but rewarding day."
    },
    {
      day: "Day 6",
      title: "Shea Goru → Chatru → Chandratal",
      body: "Trek to Chatru and drive to Chandratal Lake (weather permitting)."
    },
    {
      day: "Day 7",
      title: "Return to Manali",
      body: "Drive back via Atal Tunnel. Evening departure."
    },
    {
      day: "Day 8",
      title: "Arrival Home",
      body: "Reach Delhi with unforgettable memories."
    },
  ],
  includes: [
    "Accommodation (hotel + camps)",
    "All meals during trek",
    "Transportation (Tempo Traveller / Volvo)",
    "Trek guide & support staff",
    "Camping equipment",
    "Permits & forest fees",
    "Chandratal visit",
  ],
},
{
    slug: "ladakh-leh-umlingleh",
    name: "Leh to Leh Umling La Expedition",
    region: "Ladakh",
    days: "7 Days",
    price: "+91 8160958530",
    img: biking,
    tagline: "Ride the highest roads on Earth.",
    intro:
      "A high-altitude biking adventure covering Ladakh’s most iconic routes including Umling La – one of the highest motorable roads in the world.",
    highlights: [
      "Umling La (19,000+ ft)",
      "Khardung La pass",
      "Pangong Tso lake",
      "Hanle Dark Sky Reserve",
      "Nubra Valley",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Leh", body: "Acclimatise and briefing." },
      { day: "Day 2", title: "Leh → Nubra", body: "Ride via Khardung La." },
      { day: "Day 3", title: "Nubra → Pangong", body: "Shyok route adventure." },
      { day: "Day 4", title: "Pangong → Hanle", body: "Rezang La War Memorial." },
      { day: "Day 5", title: "Hanle → Umling La → Nyoma", body: "World’s highest pass ride." },
      { day: "Day 6", title: "Nyoma → Leh", body: "Via Chumathang." },
      { day: "Day 7", title: "Departure", body: "Trip ends." },
    ],
    includes: [
      "Royal Enfield bike",
      "Fuel & permits",
      "Stay (hotel + camps)",
      "Backup vehicle",
      "Meals (Breakfast & Dinner)",
    ],
  },

  {
    slug: "ladakh-delhi-srinagar",
    name: "Delhi to Srinagar Umling La Expedition",
    region: "Ladakh",
    days: "12 Days",
    price: "+91 8160958530",
    img: biking2,
    tagline: "The ultimate Ladakh circuit ride.",
    intro:
      "A complete Himalayan expedition from Delhi to Srinagar covering Manali, Leh, Nubra, Pangong, Hanle and Umling La.",
    highlights: [
      "Delhi to Ladakh full circuit",
      "Zoji La & Baralacha La",
      "Pangong Tso & Nubra Valley",
      "Umling La highest pass",
      "Srinagar & Kargil route",
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi → Manali", body: "Overnight Volvo journey." },
      { day: "Day 2", title: "Manali", body: "Acclimatisation." },
      { day: "Day 3", title: "Manali → Jispa", body: "Via Atal Tunnel." },
      { day: "Day 4", title: "Jispa → Leh", body: "Cross high passes." },
      { day: "Day 5", title: "Leh → Nubra", body: "Via Khardung La." },
      { day: "Day 6", title: "Nubra → Pangong", body: "Off-road ride." },
      { day: "Day 7", title: "Pangong → Hanle", body: "Rezang La." },
      { day: "Day 8", title: "Hanle → Umling La → Nyoma", body: "Extreme altitude ride." },
      { day: "Day 9", title: "Nyoma → Leh", body: "Return." },
      { day: "Day 10", title: "Leh → Kargil", body: "Highway ride." },
      { day: "Day 11", title: "Kargil → Srinagar", body: "Zoji La pass." },
      { day: "Day 12", title: "Departure", body: "Trip ends." },
    ],
    includes: [
      "Bike & fuel",
      "Stay",
      "Backup vehicle",
      "Meals",
      "Permits",
    ],
  },

  {
    slug: "ladakh-turtuk",
    name: "Leh – Turtuk – Pangong Ride",
    region: "Ladakh",
    days: "6 Days",
    price: "+91 8160958530",
    img: ladakh,
    tagline: "Explore the last village before LOC.",
    intro:
      "A compact Ladakh ride covering Nubra Valley, Turtuk village, and Pangong Lake with thrilling high-pass crossings.",
    highlights: [
      "Turtuk village (near LOC)",
      "Khardung La pass",
      "Pangong Lake",
      "Diskit Monastery",
      "Chang La pass",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Leh", body: "Acclimatise." },
      { day: "Day 2", title: "Leh → Nubra", body: "Via Khardung La." },
      { day: "Day 3", title: "Nubra → Turtuk → Nubra", body: "Explore border village." },
      { day: "Day 4", title: "Nubra → Pangong", body: "Shyok route." },
      { day: "Day 5", title: "Pangong → Leh", body: "Via Chang La." },
      { day: "Day 6", title: "Departure", body: "Trip ends." },
    ],
    includes: [
      "Bike",
      "Stay",
      "Meals",
      "Permits",
      "Support vehicle",
    ],
  },

  {
    slug: "ladakh-srinagar-delhi",
    name: "Srinagar to Delhi Umling La Expedition",
    region: "Ladakh",
    days: "12 Days",
    price: "+91 8160958530",
    img: biking3,
    tagline: "Ride across the Himalayas end-to-end.",
    intro:
      "A reverse Ladakh expedition starting from Srinagar covering Kargil, Leh, Nubra, Pangong, Hanle and ending in Delhi via Manali.",
    highlights: [
      "Srinagar to Delhi route",
      "Zoji La pass",
      "Pangong & Nubra",
      "Umling La highest road",
      "Manali highway ride",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Srinagar", body: "Local exploration." },
      { day: "Day 2", title: "Srinagar → Kargil", body: "Via Zoji La." },
      { day: "Day 3", title: "Kargil → Leh", body: "Lamayuru & Magnetic Hill." },
      { day: "Day 4", title: "Leh → Nubra", body: "Khardung La." },
      { day: "Day 5", title: "Nubra → Pangong", body: "Off-road ride." },
      { day: "Day 6", title: "Pangong → Hanle", body: "Rezang La." },
      { day: "Day 7", title: "Hanle → Umling La → Nyoma", body: "Extreme ride." },
      { day: "Day 8", title: "Nyoma → Leh", body: "Return." },
      { day: "Day 9", title: "Leh → Sarchu", body: "Highway ride." },
      { day: "Day 10", title: "Sarchu → Manali", body: "Via passes." },
      { day: "Day 11", title: "Manali → Delhi", body: "Return journey." },
      { day: "Day 12", title: "Arrival", body: "Trip ends." },
    ],
    includes: [
      "Bike",
      "Fuel",
      "Stay",
      "Meals",
      "Support crew",
    ],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
