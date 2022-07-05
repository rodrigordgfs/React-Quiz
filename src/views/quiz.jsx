import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Game from "../pages/Game";
import Start from "../pages/Start";
import Result from "../pages/Result";

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
