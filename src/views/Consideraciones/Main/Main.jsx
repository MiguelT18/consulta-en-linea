import "./css/Main.css";
import "./toastr.min.css";
import { useState } from "react";
import toastr from "toastr";
import img1 from "../../../assets/icons/global-internet.svg";
import img2 from "../../../assets/icons/gmail-icon.png";
import img3 from "../../../assets/icons/preguntas-icon.png";

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: true,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "1000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

export const Main = () => {
  const [email, setEmail] = useState("contacto@drsimonscristian.com");

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(
      () => {
        toastr.success("Se ha copiado al portapapeles");
      },
      () => {
        toastr.error("Mensaje de error");
      }
    );
  };

  return (
    <main>
      <div className="CardsContainer">
        <div className="Card Card1">
          <img src={img1} alt="Ícono de Internet" />
          <p>Asegúrate de tener una conexión a internet estable.</p>
        </div>
        <div className="Card Card2">
          <img src={img2} alt="Ícono de Gmail" />
          <p>
            Procura utilizar un correo electrónico que uses frecuentemente y
            procura escribirlo bien.
          </p>
        </div>
        <div className="Card Card3">
          <img src={img3} alt="Ícono de preguntas" />
          <p>
            Tus dudas adicionales las puedes aclarar a través del siguiente
            correo: <br />
            👉
            <span id="email" onClick={handleEmailClick}>
              {email}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};
