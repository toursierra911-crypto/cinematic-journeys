import spiti from "@/assets/spiti/key-monastery.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import goa from "@/assets/dest-goa.jpg";
import him from "@/assets/tour-himalaya.jpg";
import varanasi from "@/assets/tour-varanasi.jpg";
import manali from "@/assets/manali/snow-view.jpg";
import yulla from "@/assets/yulla-kanda/main.jpg"
import kedarkantha from "@/assets/kedarkantha/main.jpg"
// import meg from "@/assets/tour-meghalaya.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

// Spiti gallery imports
import spitiCloudy from "@/assets/spiti/cloudy.jpeg";
import spitiNight from "@/assets/spiti/night-view.jpeg";
import spitiW1 from "@/assets/spiti/WhatsApp Image 2026-04-20 at 2.32.34 PM.jpeg";
import spitiW2 from "@/assets/spiti/WhatsApp Image 2026-04-20 at 2.54.43 PM.jpeg";
import spitiW3 from "@/assets/spiti/WhatsApp Image 2026-04-20 at 4.51.43 PM (1).jpeg";

// Manali gallery imports
import manaliMain from "@/assets/manali/main.jpg";
import manali1 from "@/assets/manali/pexels-billingphotography-9605458.jpg";
import manali2 from "@/assets/manali/pexels-mohit-hambiria-92377455-19992232.jpg";
import manali3 from "@/assets/manali/pexels-prem-kumar-ar-791622347-37015004.jpg";

// Kedarkantha gallery imports
import ked1 from "@/assets/kedarkantha/pexels-ex-route-adventures-656223369-20282345.jpg";
import ked2 from "@/assets/kedarkantha/pexels-ex-route-adventures-656223369-20282349.jpg";

// Yulla Kanda gallery imports
import yulla2 from "@/assets/yulla-kanda/yulla 2.jpg";
import yulla3 from "@/assets/yulla-kanda/yulla 3.jpg";
import yulla4 from "@/assets/yulla-kanda/yulla 4.jpg";

// Ladakh gallery imports
import ladakh1 from "@/assets/ladakh/2026-02-06-6985e9c0de441.webp";
import ladakh2 from "@/assets/ladakh/2026-02-06-6985e9c15bf73.webp";
import ladakh3 from "@/assets/ladakh/biking-2.webp";
import ladakh4 from "@/assets/ladakh/biking-3.webp";
import ladakh5 from "@/assets/ladakh/pexels-alkajha-12094542.jpg";
import ladakh6 from "@/assets/ladakh/pexels-harshitpatel-13470947.jpg";
import ladakh7 from "@/assets/ladakh/pexels-simarphotos-32909855.jpg";
import ladakh8 from "@/assets/ladakh/pexels-withbaxit-32793643.jpg";

export type Destination = {
  name: string;
  tag: string;
  img: string;
  blurb: string;
  gallery?: (string | undefined)[];
};

export const destinations: Destination[] = [
  { 
    name: "Spiti Valley", 
    tag: "Moonland", 
    img: spiti, 
    blurb: "A cold desert valley at 12,500 ft, where Buddhist monasteries cling to cliffs and the sky burns blue.",
    gallery: [
      spitiCloudy,
      spiti,
      spitiNight,
      spitiW1,
      spitiW2,
      spitiW3,
    ]
  },
  { 
    name: "Rajasthan", 
    tag: "Desert", 
    img: rajasthan, 
    blurb: "Forts of honey-coloured stone, dunes that shift gold to rose at dusk.",
    gallery: [g1, g2, g3]
  },
  { 
    name: "Ladakh", 
    tag: "High Himalaya", 
    img: ladakh, 
    blurb: "Cold deserts above the clouds, monasteries clinging to bare cliffs.",
    gallery: [
      ladakh,
      ladakh1,
      ladakh2,
      ladakh3,
      ladakh4,
      ladakh5,
      ladakh6,
      ladakh7,
      ladakh8,
    ]
  },
  { 
    name: "Manali", 
    tag: "Mountain Valley", 
    img: manali, 
    blurb: "Snow-covered peaks, pine forests, and serene alpine lakes.",
    gallery: [
      manali,
      manaliMain,
      manali1,
      manali2,
      manali3,
    ]
  },
  { 
    name: "Kedarkantha", 
    tag: "Mountains", 
    img: kedarkantha, 
    blurb: "Pine-scented valleys, alpine lakes, and old stone temples in the snow.",
    gallery: [
      kedarkantha,
      ked1,
      ked2,
    ]
  },
  { 
    name: "Yulla Kanda", 
    tag: "Sacred River", 
    img: yulla, 
    blurb: "The eternal city — dawn boats, ghats, and prayers carried by the Ganges.",
    gallery: [
      yulla,
      yulla2,
      yulla3,
      yulla4,
    ]
  },
];
