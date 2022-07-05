import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Button from "../components/Button";

export default function Start() {
  const navigate = useNavigate();

  function handleStartQuiz() {
    navigate("/game");
  }

  return (
    <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
      <Fade bottom>
        <Button
          label="Start Quiz"
          color="text-blue-700 bg-white hover:bg-gray-200"
          onButtonClick={handleStartQuiz}
        />
      </Fade>
    </div>
  );
}
