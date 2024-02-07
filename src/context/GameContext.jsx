/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import CustomLoader from "../components/CustomLoader";

// Create a context
export const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

const GameProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [season, setSeason] = useState(2024);

  console.log(import.meta.env.VITE_BASE_URL);

  useEffect(() => {
    // Fetch data from the URL
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setGames(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const value = {
    games,
    loading,
    season,
    setSeason,
  };

  return (
    <GameContext.Provider value={value}>
      {loading ? <CustomLoader loading={loading} /> : children}
    </GameContext.Provider>
  );
};

export default GameProvider;
