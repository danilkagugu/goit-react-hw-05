import { useEffect, useState } from "react";
import { ApiMovieCast } from "../ApiService/ApiService";
import { useParams } from "react-router-dom";
const img = "https://image.tmdb.org/t/p/w500";

const MovieCast = () => {
  const { movieId } = useParams();
  const [qwe, setQwe] = useState({ cast: [] });
  useEffect(() => {
    async function fetchData() {
      try {
        const results = await ApiMovieCast(movieId);
        setQwe(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <div>
      <ul>
        {qwe.cast.map((item) => (
          <li key={item.id}>
            <img src={img + item.profile_path} alt={item.name} width={50} />
            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
