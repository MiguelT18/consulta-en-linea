import "./css/Formulario3.css";
import img1 from "../../../assets/images/rostro-frontal.png";
import img2 from "../../../assets/images/rostro-perfil.png";
import img3 from "../../../assets/images/rostro-abajo.png";
import { Link } from "react-router-dom";

export const Formulario3 = () => {
  return (
    <div className="Formulario3">
      <div className="Frontal">
        <img src={img1} alt="Subir foto frontal de su rostro." />
        <p>
          FOTO FRONTAL: Debe mantenerse de frente donde se aprecie el rostro
        </p>
      </div>
      <div className="Perfil">
        <img src={img2} alt="Subir foto de perfil de su rostro." />
        <p>
          FOTO DE PERFIL: Gire el rostro donde se aprecie la parte izquierda.
        </p>
      </div>
      <div className="Base">
        <img
          src={img3}
          alt="Subir foto donde se puedan ver las fosas nasales."
        />
        <p>
          FOTO DE BASE: Debe inclinar hacia arriba el rostro donde puedan verse
          las fosas nasales.
        </p>
      </div>

      <div className="Botones">
        <Link to="/segundo-paso" className="AtrasBoton">
          <span></span>Atrás
        </Link>
        <Link className="EnviarDatos">Enviar datos</Link>
      </div>
    </div>
  );
};
