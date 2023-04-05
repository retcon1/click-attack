import { useState, useEffect } from "react";

const Button = () => {
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    if(isRunning) {
      const interval = setInterval(() => {
        if(seconds >= 10) {
          clearInterval(interval);
          console.log('hello');
          setIsRunning(false);
          setHasStarted(false);
          return () => setSeconds(10);
        }
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
      
    // return () => 

  }, [isRunning]);
  
  
  
  
  
  return (
    <div>
      <h2>Seconds: {seconds}</h2>
      {!isRunning ? <button
        onClick={(event) => {
          if(!hasStarted) {
            setHasStarted(true);
            setIsRunning(true);
          }
    
         
        }}
      >Click to start</button> : <button onClick={() => {
        setScore(score + 1);
     }}>
       Click Me!
     </button>}
      
      <h2>Score: {score}</h2>
    </div>
  );
};

export default Button;
