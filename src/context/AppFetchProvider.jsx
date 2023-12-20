import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppFetchProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [boats, setBoats] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [responseMessage, setResponseMessage] = useState(null);
  const [refresh, setRefresh] = useState(false);

  //  General Get Fetch Funktion

  const fetchAsync = async (url, options) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const { data, message } = await response.json();
      return { data, message };
    } catch (error) {
      console.log("Fetch Error: ", error.message);
      throw new Error("An error occurred during the fetch operation");
    }
  };

  //GET ALL BOATS

  const fetchBoats = async () => {
    try {
      const { data, message } = await fetchAsync(
        `${import.meta.env.VITE_BACKEND_URL}/api/boats`
      );
      setLoading(false);
      setBoats(data);
      setResponseMessage(message);
    } catch {
      console.error("Error fetching Boats", error);
    }
  };

  //GET ALL RENTALS

  const fetchRental = async () => {
    try {
      const { data, message } = await fetchAsync(
        `${import.meta.env.VITE_BACKEND_URL}/api/rentals`
      );
      setLoading(false);
      setRentals(data);
      setResponseMessage(message);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Inital fetch

  useEffect(() => {
    fetchBoats();
    fetchRental();
  }, [refresh]);

  return (
    <AppContext.Provider
      value={{
        boats,
        setBoats,
        rentals,
        setRentals,
        refresh,
        setRefresh,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
