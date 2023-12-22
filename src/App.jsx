import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Header from "./components/General/Header";
import List from "./pages/List";
import { useEffect, useState } from "react";

function App() {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  let rentalCount = rentals.length;
  console.log(rentalCount);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/rentals`
        );
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const responseData = await response.json();

        setRentals(responseData);
        setLoading(false);
      } catch (error) {
        console.log("Fetch Error: ", error.message);
        setLoading(false);
        throw new Error("An error occurred during the fetch operation");
      }
    };

    fetchRentals();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home rentalCount={rentalCount} />} />
          <Route
            path="/boats"
            element={<List listType="boats" rentals={rentals} />}
          />
          <Route path="/boat/:id" element={<Detail />} />
          <Route path="/add-boat" element={<Add formType="boats" />} />
          <Route
            path="/rentals"
            element={<List listType="rentals" rentals={rentals} />}
          />
          <Route path="/rental/:id" element={<Detail />} />
          <Route path="/rent" element={<Add formType="rentals" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
