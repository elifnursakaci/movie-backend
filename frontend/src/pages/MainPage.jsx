import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Hero from "../components/Hero";

const MainPage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/movies") // Tam URL'yi belirtmeyi unutma
      .then((res) => setMovies(res.data.movies))
      .catch((err) => setError(err?.response?.data?.message)); // err.response.message -> err.response.data.message olarak değiştirildi
  }, []);
  console.log(movies);
  return (
    <div>
      <Hero />
      <div className="p-4 gap-10 justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!movies ? (
          <p>yükleniyor....</p>
        ) : (
          movies.map((movie, i) => (
            <Card key={movie.id} movie={movie} index={i} />
          ))
          // Yukarıda movie'nin key'ini belirtmeyi unutma, her elemanın benzersiz bir key'e sahip olması gerekir.
        )}
      </div>
    </div>
  );
};

export default MainPage;
