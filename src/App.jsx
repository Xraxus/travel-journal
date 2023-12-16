import Header from "./assets/Header";
import LocationCard from "./assets/LocationCard";
import data from "./data.js";

export default function App() {
  const cards = data.map((item) => {
    return <LocationCard key={item.id} item={item} />;
  });

  console.log(cards)

  return (
    <>
      <Header />
      <main className="location-cards-container">{cards}</main>
    </>
  );
}
