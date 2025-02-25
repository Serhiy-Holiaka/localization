import React, { useState } from "react";

interface ICounterProps {
  setCountTranslation: (count: number) => string;
}

export const Counter: React.FC<ICounterProps> = ({ setCountTranslation }) => {
  const [count, setCount] = useState(0);

  return (
    <button id="counter" type="button" onClick={() => setCount(count + 1)}>
      {setCountTranslation(count)}
    </button>
  );
};
