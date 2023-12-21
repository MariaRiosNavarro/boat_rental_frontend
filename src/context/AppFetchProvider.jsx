import { createContext, useContext, useEffect, useState } from "react";
// import { fetchAsync } from "./utils/fetchAsync";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppFetchProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [boats, setBoats] = useState([]);

  const [freeBoatsToday, setFreeBoatsToday] = useState([]);
  const [responseMessage, setResponseMessage] = useState(null);
  const [refresh, setRefresh] = useState(false);

  //GET ALL BOATS

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/boats`
        );
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const responseData = await response.json();
        setBoats(responseData);
      } catch (error) {
        console.log("Fetch Error: ", error.message);
        throw new Error("An error occurred during the fetch operation");
      }
    };
    //GET ALL RENTALS

    //Get All Free Boots Today

    // const fetchFreeBootsToday = async () => {
    //   let date = new Date();
    //   let formattedDate = date.toISOString().split("T")[0];
    //   try {
    //     const response = await fetch(
    //       `${
    //         import.meta.env.VITE_BACKEND_URL
    //       }/api/boats/free-boats/${formattedDate}`
    //     );
    //     if (!response.ok) {
    //       throw new Error(`Request failed with status ${response.status}`);
    //     }
    //     const responseData = await response.json();
    //     console.log(responseData);
    //   } catch (error) {
    //     console.log("Fetch Error: ", error.message);
    //     throw new Error("An error occurred during the fetch operation");
    //   }
    // };

    // Inital fetch

    fetchBoats();

    // fetchFreeBootsToday();
  }, [refresh]);

  return (
    <AppContext.Provider
      value={{
        boats,
        setBoats,
        refresh,
        setRefresh,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
