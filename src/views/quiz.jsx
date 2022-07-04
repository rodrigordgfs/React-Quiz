import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Game from "../pages/game";
import Start from "../pages/start";
import Result from "../pages/result";

export default function QuizView() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}
