import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Question from "../../components/Question";
import Answer from "../../components/Answer";

import QuizService from "../../services/api/quiz";

import { errorMessage } from "../../utils/toastify";
import Loading from "../../components/Loading";
import Button from "../../components/Button";

export default function Game() {
  const navigate = useNavigate();

  const [disableAnswers, setDisableAnswers] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [loading, setLoading] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const questionsQuantity = () => questions.length;
  const finalQuestion = () => currentQuestion.index === questionsQuantity();

  useEffect(() => {
    QuizService.get()
      .then(({ data }) => {
        data = data.map((question, index) => ({
          ...question,
          index: index + 1,
        }));
        setQuestions(data);
        setCurrentQuestion(data[0]);
        setLoading(false);
      })
      .catch(({ message }) => {
        errorMessage(message);
      });
  }, []);

  function handleAnswerClick(answerQuestionId) {
    if (currentQuestion.answer === answerQuestionId) {
      setCorrectAnswers((correctAnswers) => correctAnswers + 1);
    }
    setDisableAnswers(true);
    setTimeout(() => {
      handleGoToNextQuestion();
    }, 1000);
  }

  function handleGoToNextQuestion() {
    if (finalQuestion()) {
      navigate("/result", {
        state: {
          correctAnswers: correctAnswers,
          questionsQuantity: questionsQuantity(),
        },
      });
    } else {
      const nextQuestion = questions[currentQuestion.index];
      setCurrentQuestion(nextQuestion);
      setDisableAnswers(false);
    }
  }

  function handleTimeOut() {
    handleGoToNextQuestion();
  }

  function handleNextQuestion() {
    handleGoToNextQuestion();
  }

  return (
    <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
      {loading ? (
        <div className="flex items-center justify-center m-4">
          <Loading />
        </div>
      ) : (
        <div className="bg-white rounded-md shadow-md w-96">
          <Header
            quantity={questionsQuantity()}
            currentQuestion={currentQuestion.index}
            timeout={handleTimeOut}
          />
          <div className="px-5 py-7 flex flex-col gap-5">
            <Question
              value={`${currentQuestion.index}. ${currentQuestion.question}`}
            />
            <div className="flex flex-col gap-3">
              {currentQuestion.options.map((question) => {
                return (
                  <Answer
                    key={question.id}
                    question={question}
                    correct={currentQuestion.answer === question.id}
                    onAnwerClick={handleAnswerClick}
                    disableClick={disableAnswers}
                  />
                );
              })}
            </div>
            <Button
              label={finalQuestion() ? "Finish Quiz" : "Next Question"}
              onButtonClick={handleNextQuestion}
            />
          </div>
        </div>
      )}
    </div>
  );
}
