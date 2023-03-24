// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
// ===============================
import Paso1 from "./pages/Paso1";
import Paso2 from "./pages/Paso2";
import Paso3 from "./pages/Paso3";
import Paso4 from "./pages/Paso4";
import Paso5 from "./pages/Paso5";
import Consideraciones from "./pages/Consideraciones";
import PagoConsulta from "./pages/PagoConsulta";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

library.add(fab, faCheckSquare, faCoffee);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Consideraciones />,
  },
  {
    path: "/paso1",
    element: <Paso1 />,
  },
  {
    path: "/paso2",
    element: <Paso2 />,
  },
  {
    path: "/paso3",
    element: <Paso3 />,
  },
  {
    path: "/paso4",
    element: <Paso4 />,
  },
  {
    path: "/paso5",
    element: <Paso5 />,
  },
  {
    path: "/pagoConsulta",
    element: <PagoConsulta />,
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
