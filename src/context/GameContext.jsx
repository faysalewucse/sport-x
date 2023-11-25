import { createContext, useContext, useEffect, useState } from "react";

// Create a context
export const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

const GameProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    // Fetch data from the URL
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/games");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        console.log(data);

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
    filteredGames,
    loading,
  };

  return (
    // Provide the fetched data through the context
    <GameContext.Provider value={value}>
      {!loading && children}
    </GameContext.Provider>
  );
};

export default GameProvider;
