import { useState } from "react";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form onChange={handleChange}>
      <input type="text" name="query" />
      <button>Search</button>
    </form>
  );
};

export default MoviesPage;
