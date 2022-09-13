import React, { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef();

useEffect(() => {
    inputRef.current.focus();
}, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
