import { useState, useEffect } from "react";

const Button = () => {
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleReset = () => {
    setTimeout(() => {
      setScore(0);
      setSeconds(0);
    }, 5000);
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds === 10) {
            setIsRunning(false);
            clearInterval(interval);
            return seconds;
          }
          return seconds + 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className="container">
      <h2>Seconds: {seconds}</h2>
      {seconds === 0 ? (
        <button
          className="start-button"
          onClick={(event) => {
            if (!isRunning) {
              setIsRunning(true);
            }
          }}
        >
          Click to Start
        </button>
      ) : seconds < 10 ? (
        <button
          className="click-button"
          onClick={() => {
            setScore(score + 1);
          }}
        >
          Click Me!
        </button>
      ) : (
        <>
          <button className="reset-button" onClick={handleReset}>
            Play Again
          </button>
          <h2 className="game-over">
            Game over!{" "}
            {score < 10
              ? "You Can Do Better"
              : score > 50
              ? "Amazing Clicking!"
              : "Not Bad..."}
          </h2>
        </>
      )}

      <h2>Score: {score}</h2>
    </div>
  );
};

export default Button;
