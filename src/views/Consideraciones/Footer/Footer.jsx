import "./css/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <Link className="MainButton" to="primer-paso">
        Continuar
      </Link>
      <p>
        <span>ADVERTENCIA:</span> Al realizar el proceso de la consulta en
        línea, tendrás un plazo de <span>siete días continuos</span>, para
        concretar la misma posterior a esto deberás ingresar como una nueva
        consulta.
        <br />
      </p>
    </footer>
  );
};
