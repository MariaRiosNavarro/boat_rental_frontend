import { createContext, useContext, useEffect, useState } from "react";
// import { fetchAsync } from "./utils/fetchAsync";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppFetchProvider = ({ children }) => {
  const [boats, setBoats] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [freeBoatsToday, setFreeBoatsToday] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  //---------------------------------------!GET ALL BOATS

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/boats`
        );
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        } else {
          const responseData = await response.json();
          const boatsData = responseData.data || [];
          setBoats(boatsData);
        }
      } catch (error) {
        console.log("Fetch Error: ", error.message);
        throw new Error("An error occurred during the fetch operation");
      }
    };
    fetchBoats();
  }, [refresh]);

  // ----------------------------------!GET FREE BOOTS TODAY

  useEffect(() => {
    const fetchFreeBootsToday = async () => {
      //today free Boats
      let date = new Date();

      let formattedDate = date.toISOString().split("T")[0];
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/rentals/free-boats/${formattedDate}/${formattedDate}`
        );
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        } else {
          const responseData = await response.json();
          setFreeBoatsToday(responseData);
        }
      } catch (error) {
        console.log("Fetch Error: ", error.message);
        throw new Error("An error occurred during the fetch operation");
      }
    };

    fetchFreeBootsToday();
  }, []);

  //--------------------------------!GET ALL RESERVATIONS

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
        const rentalsData = responseData.data || [];
        setRentals(rentalsData);
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
    <AppContext.Provider
      value={{
        boats,
        setBoats,
        refresh,
        setRefresh,
        freeBoatsToday,
        setFreeBoatsToday,
        rentals,
        setRentals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
