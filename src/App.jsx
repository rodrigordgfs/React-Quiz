import QuizView from "./views/quiz";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <QuizView />
      <ToastContainer />
    </div>
  );
}

export default App;
