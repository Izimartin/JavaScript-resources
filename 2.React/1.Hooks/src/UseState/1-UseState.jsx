import { useState } from "react";

function App() {
  const [count, setCounter] = useState(0);
  const [otherStuffs, setOtherStuffs] = useState({
    saludo: "Hola Mundo ",
    despedida: "Adios Mundo",
  });

  const setCount = () => {
    setCounter(count + 1);
  };

  const setStuff = () => {
    setOtherStuffs({
      ...otherStuffs,
      saludo: "Hola JavaScript",
    });
  };
  console.log(count);
  console.log(otherStuffs);

  return (
    <div>
      <br />
      <button onClick={() => setCount()}>Contador </button>
      <br />
      <button onClick={() => setStuff()}>Cambiar Saludo</button>
      <br />
    </div>
  );
}
export default App;
