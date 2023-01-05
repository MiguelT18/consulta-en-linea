import "./css/Footer.css";
import { Link } from "react-router-dom";
import { Paso1 } from "../../Paso1/Paso1";

export const Footer = () => {
  return (
    <footer>
      <Link to={<Paso1 />}>
        <button>Continuar</button>
      </Link>
      <p>
        <span>ADVERTENCIA:</span> Al realizar el proceso de la consulta en
        línea, tendrás un plazo de <span>siete días continuos</span>, para
        concretar la misma posterior a esto deberás ingresar como una nueva
        consulta.
      </p>
    </footer>
  );
};
