// useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.

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
