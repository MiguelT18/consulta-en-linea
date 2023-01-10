import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Consideraciones } from "./views/Consideraciones/Consideraciones";
import { Paso1 } from "./views/Paso1/Paso1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Consideraciones />,
  },
  {
    path: "primer-paso",
    element: <Paso1 />,
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
