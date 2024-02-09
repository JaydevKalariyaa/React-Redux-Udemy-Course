import React, { useEffect, useState } from "react";

export default function QuizTimer({ timeout, handleClick }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    let timer = setTimeout(handleClick, timeout + 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, handleClick]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timeout} id="question-time" />;
}
