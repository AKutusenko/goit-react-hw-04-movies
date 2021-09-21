import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import HomePage from "./components/pages/HomePage/HomePage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage/MovieDetailsPage";
import Movies from "./components/pages/Movies/Movies";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}
