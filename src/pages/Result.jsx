import { useLocation, useNavigate } from "react-router-dom";
import { AiTwotoneCrown } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import Button from "../components/Button";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const correctAnswers = () => location.state.correctAnswers;
  const questionsQuantity = () => location.state.questionsQuantity;

  function handlePlayAgain() {
    navigate("/");
  }

  return (
    <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
      <Fade bottom>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md px-10 py-5">
          <AiTwotoneCrown size={100} className="text-blue-500" />
          <p className="font-poppins text-xl">You've completed the Quiz!</p>
          <p className="mb-3">
            Nice! You scored {correctAnswers()} out of {questionsQuantity()}
          </p>
          <Button label="Play Again" onButtonClick={handlePlayAgain} />
        </div>
      </Fade>
    </div>
  );
}
