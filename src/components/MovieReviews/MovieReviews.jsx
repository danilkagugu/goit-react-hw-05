import { useEffect, useState } from "react";
import { ApiMovieRewiews } from "../ApiService/ApiService";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [rewiews, setRewiews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const results = await ApiMovieRewiews(movieId);
        setRewiews(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <>
      {rewiews <= 0 ? (
        <p className={css.noResult}>
          We do not have any rewiews for this movies😢
        </p>
      ) : (
        <ul className={css.rewiewsList}>
          {rewiews.results.map((item) => (
            <li key={item.id} className={css.rewiewsItem}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieReviews;
