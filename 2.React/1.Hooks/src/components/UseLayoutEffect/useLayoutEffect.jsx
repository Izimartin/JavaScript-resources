import React from "react";
import "./styles.css";

export default function App() {
  React.useLayoutEffect(() => {
    const square = document.querySelector(".square");
    square.style.transform = "translate(-50%, -50%)";
    square.style.left = "10%";
    square.style.top = "80%";
  });

  return (
    <div className="App">
      <main className="App__main">
        <div className="square" />
      </main>
    </div>
  );
}
