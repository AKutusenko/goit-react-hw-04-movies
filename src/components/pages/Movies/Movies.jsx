import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import s from "./Movies.module.css";
import { getMovieByQuery } from "../../../services/MoviesApi";
import GoBackBtn from "../../GoBackBtn/GoBackBtn";

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const { url } = useRouteMatch();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchQuery.length > 0 &&
      getMovieByQuery(searchQuery).then(({ results }) => setMovies(results));
    setSearchQuery("");
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleInputChange}
            value={searchQuery}
          />
        </form>
      </header>
      <GoBackBtn />
      {movies && (
        <ul>
          {movies.map(({ original_title, id }) => (
            <li className={s.listItem} key={id}>
              <Link to={`${url}/${id}`}>{original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
