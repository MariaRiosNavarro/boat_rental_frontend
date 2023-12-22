import { createContext, useContext, useEffect, useState } from "react";
// import { fetchAsync } from "./utils/fetchAsync";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppFetchProvider = ({ children }) => {
  const [boats, setBoats] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [freeBoatsToday, setFreeBoatsToday] = useState([]);
  const [reservedBoats, setReservedBoats] = useState([]);

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
    fetchBoats();
  }, [refresh]);

  useEffect(() => {
    const fetchFreeBootsToday = async () => {
      //today free Boats
      let date = new Date();

      let formattedDate = date.toISOString().split("T")[0];
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/boats/free-boats/${formattedDate}/${formattedDate}`
        );
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const responseData = await response.json();
        setFreeBoatsToday(responseData);
      } catch (error) {
        console.log("Fetch Error: ", error.message);
        throw new Error("An error occurred during the fetch operation");
      }
    };

    fetchFreeBootsToday();
  }, []);

  // useEffect(() => {
  //   const findReservedBoats = async () => {
  //     try {
  //       const response = await fetch(
  //         `${import.meta.env.VITE_BACKEND_URL}/api/boats/reserved-boats/all`
  //       );
  //       if (!response.ok) {
  //         throw new Error(`Request failed with status ${response.status}`);
  //       }
  //       const responseData = await response.json();
  //       // setReservedBoats(responseData);
  //       console.log(responseData);
  //     } catch (error) {
  //       console.log("Fetch Error: ", error.message);
  //       throw new Error("An error occurred during the fetch operation");
  //     }
  //   };

  //   findReservedBoats();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        boats,
        setBoats,
        refresh,
        setRefresh,
        freeBoatsToday,
        setFreeBoatsToday,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
