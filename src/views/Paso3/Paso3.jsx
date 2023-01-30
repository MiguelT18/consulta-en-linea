import "../Paso1/Header/css/Header.css";
import Header from "../../views/Paso1/Header/Header";
import { Formulario3 } from "./Formulario3/Formulario3";

export const Paso3 = () => {
  const styles = {
    width: "70vw",
  };

  return (
    <div style={styles}>
      <Header />
      <Formulario3 />
    </div>
  );
};
