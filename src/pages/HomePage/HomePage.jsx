import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiTrendingMovies } from "../../components/ApiService/ApiService";

const HomePage = () => {
  const [qwe, setQwe] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { results } = await ApiTrendingMovies();
        setQwe(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {qwe.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
