import Header from "./Header/Header";
import { Formulario } from "./Formulario/Formulario";

export const Paso1 = () => {
  const styles = {
    width: "70vw",
  };

  return (
    <div style={styles}>
      <Header />
      <Formulario />
    </div>
  );
};
