import { useEffect, useState } from "react";
import CorrectIcon from "../CorrectIcon";
import WrongIcon from "../WrongIcon";

export default function Answer({
  question = {},
  correct = false,
  disableClick = false,
  onAnwerClick = null,
}) {
  const { id, text } = question;
  const [answerSelected, setAnswerSelected] = useState(false);

  const colorAnswer = answerSelected
    ? correct
      ? "border-green-600 bg-green-200 hover:bg-green-300 text-green-700"
      : "border-red-600 bg-red-200 text-red-700 hover:bg-red-300"
    : "border-gray-400 bg-white hover:bg-gray-200 text-gray-700";
  const showCorrectIcon = answerSelected && correct;
  const showWrongIcon = answerSelected && !correct;

  function handleAnswerClick() {
    if (onAnwerClick && !disableClick) {
      onAnwerClick(id);
      setAnswerSelected(true);
    }
  }

  function handleResetFields() {
    setAnswerSelected(false);
  }

  useEffect(() => {
    handleResetFields();
  }, [id]);

  return (
    <div
      onClick={handleAnswerClick}
      className={`${colorAnswer} flex flex-row items-center font-poppins justify-between w-full border-2 rounded-md p-3 cursor-pointer`}
    >
      <p>{text}</p>
      {showCorrectIcon && <CorrectIcon />}
      {showWrongIcon && <WrongIcon />}
    </div>
  );
}
