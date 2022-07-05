import { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";

export default function Header({
  quantity = 0,
  currentQuestion = 0,
  timeout = null,
}) {
  const SECONDS = 10;
  const [counter, setCounter] = useState(SECONDS);
  const formatedCounter = () => counter.toString().padStart(2, "0");
  const progressCounter = () => (counter * 100) / SECONDS;

  useEffect(() => {
    setCounter(SECONDS);
  }, [currentQuestion]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (counter <= 0 && timeout) {
      timeout();
      setCounter(SECONDS);
    }
  }, [counter, timeout]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between font-poppins">
        <p className="p-4">
          {currentQuestion} of {quantity} Question
        </p>
        <div className="flex flex-row gap-2 items-center justify-center bg-gray-300 m-4 my-2 px-3 py-2 rounded-sm">
          <BiTimeFive size={18} />
          <p>{formatedCounter()}</p>
        </div>
      </div>
      <progress max="100" value={progressCounter()} className="w-full h-2 progressbar" />
    </div>
  );
}
