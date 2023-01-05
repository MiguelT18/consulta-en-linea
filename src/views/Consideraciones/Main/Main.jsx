import "./css/Main.css";
import img1 from "../../../assets/icons/global-internet.svg";
import img2 from "../../../assets/icons/gmail-icon.png";
import img3 from "../../../assets/icons/preguntas-icon.png";

export const Main = () => {
  return (
    <main>
      <div className="CardsContainer">
        <div className="Card Card1">
          {" "}
          <img src={img1} alt="Ícono de Internet" />
          <p>Asegúrate de tener una conexión a internet estable.</p>
        </div>
        <div className="Card Card2">
          {" "}
          <img src={img2} alt="Ícono de Gmail" />
          <p>
            Procura utilizar un correo electrónico que uses frecuentemente y
            procura escribirlo bien.
          </p>
        </div>
        <div className="Card Card3">
          {" "}
          <img src={img3} alt="Ícono de preguntas" />
          <p>
            Tus dudas adicionales las puedes aclarar a través del siguiente
            correo: <br />
            👉 <span>contacto@drsimonscristian.com</span>
          </p>
        </div>
      </div>
    </main>
  );
};
