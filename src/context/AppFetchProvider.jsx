import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppFetchProvider = ({ children }) => {
  const [boats, setBoats] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [freeBoatsToday, setFreeBoatsToday] = useState([]);
  const [rentals, setRentals] = useState([]);

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
          const rentalsData = responseData.data || [];
          setFreeBoatsToday(rentalsData);
        }
      } catch (error) {
        console.log("Fetch Error: ", error.message);
        throw new Error("An error occurred during the fetch operation");
      }
    };

    fetchFreeBootsToday();
  }, [refresh]);

  //--------------------------------!GET all reservations as of today including those that started in the past but are still operating today.

  useEffect(() => {
    const fetchRentals = async () => {
      //today
      let date = new Date();
      let formattedDate = date.toISOString().split("T")[0];
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/rentals/date/${formattedDate}`
        );
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const responseData = await response.json();
        const rentalsData = responseData.data || [];
        setRentals(rentalsData);
      } catch (error) {
        console.log("Fetch Error: ", error.message);
        throw new Error("An error occurred during the fetch operation");
      }
    };

    fetchRentals();
  }, [refresh]);

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
