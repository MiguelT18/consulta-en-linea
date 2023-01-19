import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Consideraciones } from "./views/Consideraciones/Consideraciones";
import { Paso1 } from "./views/Paso1/Paso1";
import { Paso2 } from "./views/Paso2/Paso2";
import { Paso3 } from "./views/Paso3/Paso3";
import { Paso4 } from "./views/Paso4/Paso4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Consideraciones />,
  },
  {
    path: "primer-paso",
    element: <Paso1 />,
  },
  {
    path: "segundo-paso",
    element: <Paso2 />,
  },
  {
    path: "tercer-paso",
    element: <Paso3 />,
  },
  {
    path: "cuarto-paso",
    element: <Paso4 />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
