import { createContext, useContext, useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

// Create a context
export const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

const GameProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  console.log(import.meta.env.VITE_BASE_URL);

  useEffect(() => {
    // Fetch data from the URL
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}`);
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
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <ClimbingBoxLoader
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        children
      )}
    </GameContext.Provider>
  );
};

export default GameProvider;
