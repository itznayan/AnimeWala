import React, { useState, useEffect } from "react";
import axios from "axios";
import TopRatedAnimeCard from "./card/TopRatedAnimeCard"; // Import the TopRatedAnimeCard component

const TopRatedAnime = () => {
  const [topRatedAnime, setTopRatedAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((res) => {
        setTopRatedAnime(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching top-rated anime: " + error.message);
        setLoading(false);
      });
  }, []);

  return (  
    <div className="p-4">
      <h2 className="text-3xl px-4 py-4 ">Top Rated Anime</h2>
      {loading && <p>Loading top-rated anime...</p>}
      {error && <p>{error}</p>}
      <div className="flex flex-wrap gap-6 items-center ">
        {!loading &&
          !error &&
          topRatedAnime.length > 0 &&
          topRatedAnime.map((anime) => (
            <TopRatedAnimeCard
              key={anime.mal_id}
              imageUrl={anime.images.jpg.image_url}
              title={anime.title}
              rating={anime.score}
              desc={anime.synopsis} // Assuming the API provides a `score` field for rating
            />
          ))}
      </div>
    </div>
  );
};

export default TopRatedAnime;
