import "../Paso1/Header/css/Header.css";
import Header from "../Paso1/Header/Header";
import { Formulario2 } from "./Formulario2/Formulario2";

export const Paso2 = () => {
  const styles = {
    width: "70vw",
  };

  return (
    <div style={styles}>
      <Header />
      <Formulario2 />
    </div>
  );
};
