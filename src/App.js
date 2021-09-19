import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import HomePage from "./components/pages/HomePage/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}
