import "./css/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="HeaderFormulario">
      <h1>Datos Personales</h1>
      <h3>En este paso deberás proporcionar tus datos personales</h3>
      <ul>
        <Link to="/primer-paso">
          <li>1</li>
        </Link>
        <Link to="/segundo-paso">
          <li>2</li>
        </Link>
        <Link to="/tercer-paso">
          <li>3</li>
        </Link>
        <Link to="/cuarto-paso">
          <li>4</li>
        </Link>
      </ul>
    </div>
  );
};
