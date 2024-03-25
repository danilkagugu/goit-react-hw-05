import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { ApiMovieDetails } from "../../components/ApiService/ApiService";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const img = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [qwe, setQwe] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const results = await ApiMovieDetails(movieId);
        setQwe(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <div>
      <div>
        <img src={img + qwe.poster_path} alt={qwe.original_title} width={150} />
        <div>
          <h1>{qwe.original_title}</h1>
          <p>User Score: {qwe.vote_average * 10}%</p>
          <h2>Overwiew</h2>
          <p>{qwe.overview}</p>
          <h2>Genres</h2>
          {qwe.genres && (
            <p>{qwe.genres.map((genre) => genre.name).join(", ")}</p>
          )}
        </div>
      </div>
      <h3>Aditional information</h3>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Rewiews</Link>
      <Routes>
        <Route path="cast" element={<MovieCast />}></Route>
        <Route path="reviews" element={<MovieReviews />}></Route>
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
