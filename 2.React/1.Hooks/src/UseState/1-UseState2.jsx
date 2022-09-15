import { useState } from "react";
//useState() when data changes re-render the UI
function App() {
  const [count, setCount] = useState(0);
  const [datos, setDatos] = useState({
    nombre: "Brealy",
    edad: 26,
  });

  console.log(count);
  console.log(datos);

  return (
    <>
      <div onClick={() => setCount(count + 1)}>
        <h2># of clicks:</h2>
        <p>{count}</p>
      </div>
      <button
        onClick={() =>
          setDatos({
            ...datos,
            nombre: "Fabian",
            edad: 27,
          })
        }
      >
        cambiar datos
      </button>
      <br />
    </>
  );
}
export default App;
