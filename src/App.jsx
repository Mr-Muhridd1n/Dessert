import { Desserts } from "./components/Desserts";
import { YourCard } from "./components/YourCard";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data, error, loading } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  return (
    <div className="container">
      {loading && (
        <div style={{ width: "70%" }}>
          <h1 className="title">Loading...</h1>
        </div>
      )}
      {data && <Desserts desserts={data.data} />}
      <YourCard />
    </div>
  );
}

export default App;
