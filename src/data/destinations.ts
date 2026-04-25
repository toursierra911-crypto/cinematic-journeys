import kerala from "@/assets/dest-kerala.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import goa from "@/assets/dest-goa.jpg";
import him from "@/assets/tour-himalaya.jpg";
import varanasi from "@/assets/tour-varanasi.jpg";
import meg from "@/assets/tour-meghalaya.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export type Destination = {
  name: string;
  tag: string;
  img: string;
  blurb: string;
};

export const destinations: Destination[] = [
  { name: "Kerala", tag: "Backwaters", img: kerala, blurb: "Houseboats drift through palm-lined canals as the sun softens over Alleppey." },
  { name: "Rajasthan", tag: "Desert", img: rajasthan, blurb: "Forts of honey-coloured stone, dunes that shift gold to rose at dusk." },
  { name: "Ladakh", tag: "High Himalaya", img: ladakh, blurb: "Cold deserts above the clouds, monasteries clinging to bare cliffs." },
  { name: "Goa", tag: "Coastline", img: goa, blurb: "Quiet northern beaches, Portuguese churches, slow seafood evenings." },
  { name: "Himachal", tag: "Mountains", img: him, blurb: "Pine-scented valleys, alpine lakes, and old stone temples in the snow." },
  { name: "Varanasi", tag: "Sacred River", img: varanasi, blurb: "The eternal city — dawn boats, ghats, and prayers carried by the Ganges." },
  { name: "Meghalaya", tag: "Cloud Forests", img: meg, blurb: "Living root bridges, the world's wettest hills, Khasi villages in the mist." },
  { name: "Andamans", tag: "Islands", img: g1, blurb: "Reefs, uninhabited beaches, and the bluest water in the country." },
  { name: "Sikkim", tag: "Eastern Himalaya", img: g2, blurb: "Kanchenjunga at dawn, monasteries, and quiet trails through rhododendron." },
  { name: "Hampi", tag: "Ruins", img: g3, blurb: "A surreal landscape of boulders and the remains of a vanished empire." },
  { name: "Coorg", tag: "Coffee Country", img: g4, blurb: "Misty plantations, waterfall walks, and slow afternoons in colonial bungalows." },
  { name: "Pondicherry", tag: "Coastal Heritage", img: g5, blurb: "French quarters, sea-facing cafés, and the calm of Auroville." },
  { name: "Kashmir", tag: "Vale", img: g6, blurb: "Shikaras on Dal Lake, saffron fields, and the gentlest summers in India." },
];
