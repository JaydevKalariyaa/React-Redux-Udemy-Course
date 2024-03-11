import { useState } from "react";
import Accordian from "./components/Accordian";
import Places from "./components/Places";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];
function App() {
  return (
    <>
      <main>
        <h1>React Patterns & Practices</h1>
        <Accordian>
          <Accordian.item
            title="item1"
            description="item1 description"
            id="a1"
          />
          <Accordian.item
            title="item2"
            description="item2 description"
            id="a2"
          />
          <Accordian.item
            title="item3"
            description="item3 description"
            id="a3"
          />
        </Accordian>

        <Places places={PLACES} />
      </main>
    </>
  );
}

export default App;
