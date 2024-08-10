import TopRatedAnimeCard from "./card/TopRatedAnimeCard";

const AnimeList = ({ animes }) => {
  console.log(animes);

  return (
    <div className="py-10 flex flex-wrap">
      {animes.slice(0, 25).map((anime) => (
        <div key={anime.mal_id}>
          <TopRatedAnimeCard
            imageUrl={anime.images.jpg.image_url}
            title={anime.title}
            rating={anime.score}
            desc={anime.synopsis} // Assuming the API provides a `score` field for rating
          />
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
