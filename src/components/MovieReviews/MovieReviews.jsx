import { useEffect, useState } from "react";
import { ApiMovieRewiews } from "../ApiService/ApiService";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [qwe, setQwe] = useState({ results: [] });
  useEffect(() => {
    async function fetchData() {
      try {
        const results = await ApiMovieRewiews(movieId);
        setQwe(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <ul>
      {qwe.results.map((item) => (
        <li key={item.id}>
          <p>{item.author}</p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
