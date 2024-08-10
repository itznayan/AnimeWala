import { useState, useEffect } from "react";
import axios from "axios";
import AnimeList from "./components/AnimeList";
import TopRatedAnime from "./components/TopRated";
import GenreMenuWithCheckbox from "./Navbar/GenreMenuWithCheckbox";
import SearchBar from "./Navbar/SearchBar";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]); // State for selected genres
  const [triggerSearch, setTriggerSearch] = useState(false); // State to control when to trigger search

  useEffect(() => {
    if (query === "" && selectedGenres.length === 0) return;

    if (triggerSearch) {
      setLoading(true);

      // API endpoint with search and genre filtering
      const genreParams = selectedGenres.join(",");
      const endpoint = query
        ? `https://api.jikan.moe/v4/anime?q=${query}&limit=10${
            selectedGenres.length > 0 ? `&genres=${genreParams}` : ""
          }`
        : `https://api.jikan.moe/v4/anime?genres=${genreParams}&limit=10`;

      axios
        .get(endpoint)
        .then((res) => {
          setData(res.data.data);
          setLoading(false);
          setTriggerSearch(false); // Reset the triggerSearch state after search is complete
        })
        .catch((error) => {
          setError("Error fetching data: " + error.message);
          setLoading(false);
          setTriggerSearch(false); // Reset the triggerSearch state even if there's an error
        });
    }
  }, [triggerSearch]); // Effect runs when triggerSearch state changes

  const handleSearch = (query) => {
    setQuery(query);
    setTriggerSearch(true); // Trigger search when search is executed
  };

  const handleGenreChange = (id) => {
    setSelectedGenres((prev) =>
      prev.includes(id)
        ? prev.filter((genreId) => genreId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="px-4 ">
      <header className="flex items-center flex-wrap justify-between shadow-md px-10 rounded-3xl">
        <h1 className="text-3xl font-semibold">AnimeWala</h1>
        <nav className="flex gap-4 my-4">
          <SearchBar onSearch={handleSearch} />
          <GenreMenuWithCheckbox
            selectedGenres={selectedGenres}
            onChange={handleGenreChange}
          />
        </nav>
      </header>
      {loading && <p>Loading search results...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && data.length > 0 && <AnimeList animes={data} />}

      {/* Render the TopRatedAnime component */}
      <TopRatedAnime />
    </div>
  );
};

export default App;
