import him from "@/assets/tour-himalaya.jpg";
import var_ from "@/assets/tour-varanasi.jpg";
import meg from "@/assets/tour-meghalaya.jpg";

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
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
