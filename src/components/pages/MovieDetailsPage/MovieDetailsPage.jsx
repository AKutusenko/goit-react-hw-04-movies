import { useParams } from "react-router-dom";
import { NavLink, useRouteMatch } from "react-router-dom";

import { Route } from "react-router-dom";

import { useState, useEffect } from "react";
import { getMovieDetails } from "../../../services/MoviesApi";
import s from "./MovieDetailsPage.module.css";
import Cast from "../../../components/Cast/Cast";
import Reviews from "../../../components/Reviews/Reviews";
import GoBackBtn from "../../GoBackBtn/GoBackBtn";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");
  const { original_title, poster_path, vote_average, genres, overview } = movie;
  const IMG_PATH = "https://image.tmdb.org/t/p/original";
  const { url, path } = useRouteMatch();
  useEffect(() => {
    getMovieDetails(movieId).then((results) => setMovie(results));
  }, [movieId]);

  return (
    <div className={s.page}>
      <h1 className={s.header}>{original_title}</h1>
      <GoBackBtn />
      <div className={s.wrapper}>
        <img className={s.img} src={`${IMG_PATH}/${poster_path}`} alt="" />
        <div className={s.rightSide}>
          <h2>Rating: {vote_average}</h2>
          <div className={s.genres}>
            <h2>Genres: </h2>
            {genres &&
              genres.map((genre) => (
                <h2 key={genre.id} className={s.genresItem}>
                  {genre.name}
                </h2>
              ))}
          </div>
          <h3>Overview: {overview}</h3>
        </div>
      </div>
      <NavLink
        className={s.link}
        activeClassName={s.activeLink}
        to={`${url}/cast`}
      >
        Cast
      </NavLink>
      <NavLink
        className={s.link}
        activeClassName={s.activeLink}
        exact
        to={`${url}/reviews`}
      >
        Reviews
      </NavLink>

      <Route path={`${path}/cast`}>
        <Cast />
      </Route>
      <Route exact path={`${path}/reviews`}>
        <Reviews />
      </Route>
    </div>
  );
}
