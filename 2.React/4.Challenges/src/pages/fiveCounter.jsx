import React, { useState } from "react";

export const FiveCounter = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(0);
  const handleClick = () => {
    setCount(count => count + 1);
    setFlag(flag => flag + + "5");
  }

  return (
    <>
      <h1>5 Counter</h1>
      <button onClick={handleClick}>{flag}</button>
    </>

  );
};
  // 1. After running the following script, you click the resulting button three times in your web browser which results in 0555 over the button:
//   What changes can you make inside setFlag() to display 15 after clicking the button three times?
