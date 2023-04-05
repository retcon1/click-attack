import { useState, useEffect } from "react";

const Button = () => {
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let secs = 0;
    if (isRunning) {
      const interval = setInterval(() => {
        secs += 1;
        setSeconds(seconds + 1)
      }, 1000);

      if (seconds === 10) {
        setHasStarted(false);
        setIsRunning(false);
        return clearInterval(interval);
      }
    }
  }, [isRunning, seconds]);

  // if(seconds >= 10) {
  //   clearInterval(interval);
  //   console.log('hello');
  //   setIsRunning(false);
  //   setHasStarted(false);
  //   return () => setSeconds(10);
  // }
  // setSeconds(seconds => seconds + 1);
  // return () =>

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
      {!isRunning ? (
        <button
          onClick={(event) => {
            if (!hasStarted) {
              setHasStarted(true);
              setIsRunning(true);
            }
          }}
        >
          Click to start
        </button>
      ) : (
        <button
          onClick={() => {
            setScore(score + 1);
          }}
        >
          Click Me!
        </button>
      )}

      <h2>Score: {score}</h2>
    </div>
  );
};

export default Button;
