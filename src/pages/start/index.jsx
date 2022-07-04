import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();

  function handleStartQuiz() {
    navigate("/game");
  }

  return (
    <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
      <button
        onClick={handleStartQuiz}
        className="bg-white px-4 py-2 rounded-md font-poppins shadow-lg cursor-pointer"
      >
        Start Quiz
      </button>
    </div>
  );
}
