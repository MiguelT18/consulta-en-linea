import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Consideraciones } from "./views/Consideraciones/Consideraciones";
import { Paso1 } from "./views/Paso1/Paso1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/consideraciones" element={<Consideraciones />} />
        <Route path="/formulario" element={<Paso1 />} />
      </Routes>
    </>
  );
}

export default App;
