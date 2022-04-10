import { useState } from "react";
//useState() when data changes re-render the UI
function App() {
  const [count, setCount] = useState(0);
  const [, setDeviceType] = useState("desktop");
  const [datos, setDatos] = useState({
    nobre: "Fab",
    edad: 26,
  });

  console.log(datos);

  return (
    <div onClick={() => setCount(count + 1)}>
      # of clicks: {count}
      <br />
      <button
        onClick={() =>
          setDatos({
            ...datos,
            nobre: "Fabian",
          })
        }
      >
        cambiar datos
      </button>
      <br />
      <input
        onCLick={() => setDeviceType("desktop")}
        checked={deviceType === "desktop"}
        type="checkbox"
      />
      <input
        onCLick={() => setDeviceType("mobile")}
        checked={deviceType === "mobile"}
        type="checkbox"
      />
    </div>
  );
}
export default App;
