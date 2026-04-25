import him from "@/assets/tour-himalaya.jpg";
import var_ from "@/assets/tour-varanasi.jpg";
import meg from "@/assets/tour-meghalaya.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import goa from "@/assets/dest-goa.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";

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
    name: "Spiti Valley Odyssey",
    region: "Himachal Pradesh",
    days: "9 Days",
    price: "₹84,000",
    img: him,
    tagline: "Cold desert. High passes. Whispered monasteries.",
    intro:
      "Trace the old trade road into Spiti — a cold-desert valley suspended between sky and stone. Stay in restored heritage homes, share butter tea with monks at Key Monastery, and fall asleep beneath the densest stars in the country.",
    highlights: [
      "Drive the Manali–Kaza high road",
      "Sunrise at Key Monastery",
      "Stargazing camp at Komic (4,587m)",
      "Ancient murals at Tabo, AD 996",
    ],
    itinerary: [
      { day: "Day 1–2", title: "Arrive Manali", body: "Acclimatise in old Manali. Forest walks, slow mornings." },
      { day: "Day 3", title: "Manali → Chandratal", body: "Cross Kunzum Pass. Camp by the moon-lake under open sky." },
      { day: "Day 4–5", title: "Kaza & Key", body: "Settle in Kaza. Sunrise at Key Monastery. Visit Kibber village." },
      { day: "Day 6", title: "Komic & Hikkim", body: "World's highest village. Post a letter from Hikkim's post office." },
      { day: "Day 7", title: "Tabo & Dhankar", body: "Thousand-year murals. Cliff-edge monastery views." },
      { day: "Day 8–9", title: "Return", body: "Down through Kinnaur. Final stay in Shimla, depart." },
    ],
    includes: ["8 nights premium stays", "Private 4x4 with driver", "All meals", "Permits & guide", "Airport transfers"],
  },
  {
    slug: "sacred-ganges",
    name: "Sacred Ganges",
    region: "Varanasi & Bodh Gaya",
    days: "5 Days",
    price: "₹52,000",
    img: var_,
    tagline: "Where the river remembers everything.",
    intro:
      "Five quiet days along India's oldest living city. Dawn boat rides through mist-veiled ghats, evening aarti from a private terrace, silk weavers in narrow lanes, and a slow detour to Bodh Gaya — where the Buddha found stillness.",
    highlights: [
      "Private boat at sunrise on the Ganges",
      "Subah-e-Banaras at Assi Ghat",
      "Silk weaving with master artisans",
      "Day trip to the Mahabodhi Temple",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Varanasi", body: "Settle into a heritage haveli overlooking the river." },
      { day: "Day 2", title: "Ghats at Dawn", body: "Sunrise rowboat. Walking tour through old Kashi." },
      { day: "Day 3", title: "Sarnath", body: "Where the Buddha first taught. Quiet afternoon at the museum." },
      { day: "Day 4", title: "Bodh Gaya", body: "Day excursion to the Mahabodhi Temple complex." },
      { day: "Day 5", title: "Aarti & Depart", body: "Final private aarti viewing. Transfer to airport." },
    ],
    includes: ["4 nights riverside stay", "Private boat charters", "Local guide", "All breakfasts & 3 dinners", "Transfers"],
  },
  {
    slug: "living-roots",
    name: "Living Roots",
    region: "Meghalaya",
    days: "7 Days",
    price: "₹68,000",
    img: meg,
    tagline: "Cloud forests. Bridges grown, not built.",
    intro:
      "A week in the world's wettest hills. Walk to bridges woven from living tree roots over generations, swim in glass-clear pools, and stay with Khasi families in villages so clean the air feels new.",
    highlights: [
      "Double-decker root bridge at Nongriat",
      "Mawlynnong — Asia's cleanest village",
      "Dawki river — boat over visible riverbed",
      "Cherrapunji's hidden waterfalls",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrive Shillong", body: "Pine-scented hill station. Settle in." },
      { day: "Day 2", title: "Shillong to Cherrapunji", body: "Drive through clouds. Nohkalikai falls at golden hour." },
      { day: "Day 3–4", title: "Nongriat Trek", body: "Descend 3,500 steps to the root bridges. Two nights in the village." },
      { day: "Day 5", title: "Mawlynnong & Dawki", body: "The cleanest village. Boat on the transparent Umngot." },
      { day: "Day 6", title: "Sacred Forests", body: "Mawphlang's 800-year-old protected grove." },
      { day: "Day 7", title: "Return", body: "Drive back to Guwahati. Depart." },
    ],
    includes: ["6 nights stays", "Private vehicle", "Trek guide & permits", "All meals", "Airport transfers"],
  },
  {
    slug: "kerala-backwaters",
    name: "Kerala Backwaters",
    region: "Alleppey & Kumarakom",
    days: "6 Days",
    price: "₹58,000",
    img: kerala,
    tagline: "Slow water. Coconut palms. Coir villages.",
    intro:
      "Drift through 900 km of inland canals on a private houseboat, wake to the call of kingfishers, and end your evenings with banana-leaf feasts in palm-thatched homestays.",
    highlights: ["Private houseboat in Alleppey", "Sunset at Vembanad Lake", "Toddy tapping village walk", "Ayurvedic spa evening"],
    itinerary: [
      { day: "Day 1", title: "Arrive Kochi", body: "Fort Kochi heritage walk. Chinese fishing nets at dusk." },
      { day: "Day 2–3", title: "Houseboat", body: "Private kettuvallam through the backwaters. Sleep on the water." },
      { day: "Day 4", title: "Kumarakom", body: "Bird sanctuary at dawn. Lakeside heritage stay." },
      { day: "Day 5", title: "Marari Beach", body: "Quiet fishing-village beach. Ayurveda treatments." },
      { day: "Day 6", title: "Depart", body: "Transfer to Kochi airport." },
    ],
    includes: ["5 nights including houseboat", "Private transfers", "All meals on boat", "Ayurveda session", "Local guide"],
  },
  {
    slug: "royal-rajasthan",
    name: "Royal Rajasthan",
    region: "Jaipur · Jodhpur · Udaipur",
    days: "10 Days",
    price: "₹1,15,000",
    img: rajasthan,
    tagline: "Forts of honey stone. Lakes that mirror palaces.",
    intro:
      "A grand circuit through the desert kingdoms — sleep in restored havelis, dine with descendants of royal families, and watch dawn break over the dunes from a private camp outside Jaisalmer.",
    highlights: ["Amber Fort at sunrise", "Mehrangarh, Jodhpur", "Lake Pichola boat in Udaipur", "Camel safari & desert camp"],
    itinerary: [
      { day: "Day 1–2", title: "Jaipur", body: "Pink City. Amber Fort. Block-printing workshop." },
      { day: "Day 3–4", title: "Pushkar & Jodhpur", body: "Holy lake. Mehrangarh. Blue city lanes." },
      { day: "Day 5–6", title: "Jaisalmer", body: "Golden fort. Desert camp under stars." },
      { day: "Day 7–8", title: "Udaipur", body: "City Palace. Sunset boat on Pichola." },
      { day: "Day 9–10", title: "Return", body: "Drive to Udaipur airport. Depart." },
    ],
    includes: ["9 nights heritage stays", "Private car & driver", "All breakfasts & 5 dinners", "Monument fees", "Camel safari"],
  },
  {
    slug: "ladakh-high-passes",
    name: "Ladakh High Passes",
    region: "Leh · Nubra · Pangong",
    days: "8 Days",
    price: "₹92,000",
    img: ladakh,
    tagline: "Where the road ends and the sky begins.",
    intro:
      "Cross some of the world's highest motorable passes, sleep beside a lake that changes colour seven times a day, and share momos with monks in 1,000-year-old gompas.",
    highlights: ["Khardung La pass", "Pangong Tso lake camp", "Hunder sand dunes & Bactrian camels", "Thiksey & Hemis monasteries"],
    itinerary: [
      { day: "Day 1–2", title: "Leh", body: "Acclimatise. Old town walk. Shanti Stupa at sunset." },
      { day: "Day 3", title: "Monasteries", body: "Thiksey at dawn prayer. Hemis. Stok." },
      { day: "Day 4–5", title: "Nubra Valley", body: "Cross Khardung La. Hunder dunes. Diskit monastery." },
      { day: "Day 6–7", title: "Pangong", body: "Drive via Shyok. Lakeside camp." },
      { day: "Day 8", title: "Depart", body: "Return to Leh. Fly out." },
    ],
    includes: ["7 nights stays & camp", "Innerline permits", "Private SUV", "All meals", "Oxygen support"],
  },
  {
    slug: "goa-coastline",
    name: "North Goa Coast",
    region: "Goa",
    days: "5 Days",
    price: "₹46,000",
    img: goa,
    tagline: "Quiet beaches. Portuguese churches. Slow afternoons.",
    intro:
      "Skip the crowds of the south. Stay in a heritage Portuguese villa in Assagao, swim at empty northern beaches, and end each day with seafood at a family-run shack.",
    highlights: ["Heritage villa in Assagao", "Chapora & Vagator beaches", "Old Goa churches", "Saturday Night Market"],
    itinerary: [
      { day: "Day 1", title: "Arrive", body: "Settle into the villa. Sunset at Vagator." },
      { day: "Day 2", title: "Beach Hop", body: "Morena, Ashwem, Mandrem. Seafood lunch." },
      { day: "Day 3", title: "Old Goa", body: "Basilica of Bom Jesus. Spice plantation." },
      { day: "Day 4", title: "Markets", body: "Mapusa morning. Saturday Night Market in Arpora." },
      { day: "Day 5", title: "Depart", body: "Brunch and transfer." },
    ],
    includes: ["4 nights villa stay", "Airport transfers", "Daily breakfast", "Local driver", "Beach club access"],
  },
  {
    slug: "andaman-isles",
    name: "Andaman Isles",
    region: "Havelock & Neil",
    days: "7 Days",
    price: "₹78,000",
    img: g1,
    tagline: "Reefs you can see from the boat.",
    intro:
      "Seven days across the country's bluest water — snorkel above coral gardens, walk empty white-sand beaches at dawn, and stay in eco-luxe cabanas just steps from the surf.",
    highlights: ["Radhanagar Beach sunset", "Scuba intro at Elephant Beach", "Bioluminescence kayak at Havelock", "Neil Island day cycle"],
    itinerary: [
      { day: "Day 1", title: "Port Blair", body: "Arrive. Cellular Jail light & sound." },
      { day: "Day 2–4", title: "Havelock", body: "Beach cabana. Snorkel. Scuba intro dive." },
      { day: "Day 5–6", title: "Neil Island", body: "Slow island days. Natural bridge at low tide." },
      { day: "Day 7", title: "Return", body: "Ferry to Port Blair. Fly out." },
    ],
    includes: ["6 nights beachfront stays", "Inter-island ferries", "Snorkel gear", "Breakfasts", "Permits"],
  },
  {
    slug: "sikkim-monasteries",
    name: "Sikkim Monasteries",
    region: "Gangtok · Pelling",
    days: "6 Days",
    price: "₹62,000",
    img: g2,
    tagline: "Kanchenjunga at first light.",
    intro:
      "A quiet circuit through the eastern Himalayas. Watch the world's third-highest peak turn gold at sunrise, walk forest trails to hidden gompas, and share thukpa with monks at Rumtek.",
    highlights: ["Kanchenjunga sunrise from Pelling", "Rumtek Monastery", "Tsomgo Lake", "Forest trail to Khecheopalri"],
    itinerary: [
      { day: "Day 1–2", title: "Gangtok", body: "Arrive. Rumtek monastery. Old market evening." },
      { day: "Day 3", title: "Tsomgo Lake", body: "Glacial lake at 3,750m. Yak ride." },
      { day: "Day 4–5", title: "Pelling", body: "Sunrise on Kanchenjunga. Pemayangtse monastery." },
      { day: "Day 6", title: "Depart", body: "Transfer to Bagdogra." },
    ],
    includes: ["5 nights stays", "Private vehicle", "Permits", "All breakfasts", "Local guide"],
  },
  {
    slug: "hampi-ruins",
    name: "Hampi Ruins",
    region: "Karnataka",
    days: "4 Days",
    price: "₹38,000",
    img: g3,
    tagline: "An empire turned to stone.",
    intro:
      "A surreal landscape of giant boulders and the remains of Vijayanagara — wander temple complexes at dawn, climb Matanga Hill for sunset, and stay in a riverside boutique camp.",
    highlights: ["Virupaksha Temple at dawn", "Vittala Temple stone chariot", "Matanga Hill sunset", "Coracle ride on Tungabhadra"],
    itinerary: [
      { day: "Day 1", title: "Arrive", body: "Drive from Hubli. Settle in riverside camp." },
      { day: "Day 2", title: "Royal Centre", body: "Lotus Mahal. Elephant Stables. Queen's bath." },
      { day: "Day 3", title: "Sacred Centre", body: "Vittala Temple. Coracle ride. Matanga sunset." },
      { day: "Day 4", title: "Depart", body: "Transfer to Hubli airport." },
    ],
    includes: ["3 nights camp stay", "Private guide", "All meals", "Cycle hire", "Airport transfers"],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
