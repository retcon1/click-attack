import { useState } from "react";

const Button = () => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <button
        onClick={(event) => {
          setScore(score + 1);
        }}
      >Click Me!</button>
    </div>
  );
};
