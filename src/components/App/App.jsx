import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "../MovieCast/MovieCast";
// import MovieReviews from "../MovieReviews/MovieReviews";
const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
