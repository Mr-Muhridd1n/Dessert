import { useState } from "react";
import { Desserts } from "./components/Desserts";
import { YourCard } from "./components/YourCard";
import { useFetch } from "./hooks/useFetch";
import { Order } from "./components/Order";

function App() {
  const { data, error, loading } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  const [order, setOrder] = useState(false);
  return (
    <div className="container">
      {loading && (
        <div style={{ width: "70%" }}>
          <h1 className="title">Loading...</h1>
        </div>
      )}
      {data && <Desserts desserts={data.data} />}
      <YourCard setOrder={setOrder} />
      {order && <Order setOrder={setOrder} />}
    </div>
  );
}

export default App;
