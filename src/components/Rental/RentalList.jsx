import { useEffect, useState } from "react";
import RentalItem from "./RentalItem";

const RentalList = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.log(responseData);
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
      <div className="flex flex-col  gap-8 pb-[10rem]">
        {rentals.map((rent) => (
          <RentalItem key={rent._id} {...rent} />
        ))}
      </div>
    </>
  );
};

export default RentalList;
