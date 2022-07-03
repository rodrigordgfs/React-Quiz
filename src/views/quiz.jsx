import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "../pages/game";
import Home from "../pages/home";
import Result from "../pages/result";

export default function QuizView() {
  return (
    <Router>
      <Switch>
        <Route exat path="/">
          <Home />
        </Route>
        <Route exat path="/game">
          <Game />
        </Route>
        <Route exat path="/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  );
}
