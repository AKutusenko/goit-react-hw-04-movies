import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getTrending } from "../../../services/MoviesApi";
import s from "./HomePage.module.css";
import GoBackBtn from "../../GoBackBtn/GoBackBtn";

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    getTrending().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div className={s.homePage}>
      <h1 className={s.header}>Trending today</h1>
      <GoBackBtn />
      {movies &&
        movies.map(({ id, title }) => (
          <li className={s.item} key={id}>
            <Link to={`${url}movies/${id}`}>{title}</Link>
          </li>
        ))}
    </div>
  );
}
