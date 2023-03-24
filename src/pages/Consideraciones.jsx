import React from "react";
import { Link } from "react-router-dom";
// Images
import wifiIcon from "../assets/icons/wifi-icon.png";
import gmailIcon from "../assets/icons/gmail-icon.png";
import consultantIcon from "../assets/icons/consultant-icon.png";
import warninIcon from "../assets/icons/warning-icon.png";

const Consideraciones = () => {
  return (
    <div className="p-6">
      <header>
        <h1 className="text-center">CONSIDERACIONES</h1>
        <h2 className="text-dark-gray text-center mt-3">
          👇COSTO DE LA CONSULTA👇
        </h2>
        <h3 className="text-dark-blue text-center">Depósito o Pago QR</h3>
        <h4 className="text-green-500 text-center">36$ USD / 250 Bs</h4>
        <h3 className="text-dark-blue text-center">
          Tarjeta Crédito, Débito o Paypal
        </h3>
        <h4 className="text-green-500 text-center">39$ USD / 270 BS</h4>
        <p className="text-center text-dark-gray max-w-[80%] mt-4 mx-auto">
          La consulta en línea es una <b>PRECONSULTA</b> donde por medio de una
          encuesta de tu historial médico y fotografías recibirás un informe
          médico y presupuesto a tu <b>CORREO ELECTRÓNICO</b>. Asimismo
          obtendrás una consulta privada online con el Dr. Cristian Simons
          especialista en cirugía de rinoplastia ultrasónica.
        </p>
      </header>

      <main>
        <section>
          <div className="flex flex-wrap gap-8 max-w-[80%] mx-auto mt-3">
            <div className="flex-1 min-w-[120px]">
              <img
                className="w-[110px] mx-auto max-sm:w-[90px] max-md:[100px]"
                src={wifiIcon}
                alt="wifi-icon"
              />
              <p className="text-center">
                Asegúrate de tener una conexión a internet estable.
              </p>
            </div>
            <div className="flex-1 min-w-[120px]">
              <img
                className="w-[110px] mx-auto max-sm:w-[90px] max-md:[100px]"
                src={gmailIcon}
                alt="gmail-icon"
              />
              <p className="text-center">
                Procura utilizar un correo electrónico que uses frecuentemente y
                procura escribirlo bien.
              </p>
            </div>
            <div className="flex-1 min-w-[120px]">
              <img
                className="w-[110px] mx-auto max-sm:w-[90px] max-md:[100px]"
                src={consultantIcon}
                alt="consultant-icon"
              />
              <p className="text-center">
                Tus dudas adicionales las puedes aclarar a través del siguiente
                correo:{" "}
                <a
                  href="mailto:contacto@drsimonscristian.com"
                  className="text-dark-blue hover:underline"
                >
                  contacto@drsimonscristian.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-light-blue grid justify-items-center w-[80%] max-w-[520px] mx-auto mt-12 relative p-4 rounded-md md:rounded-lg lg:rounded-xl drop-shadow-2xl">
            <img
              className="w-20 absolute right-[-30px] top-[-28px] animate-bounce"
              src={warninIcon}
              alt="warning-icon"
            />
            <h3 className="text-white text-center">ADVERTENCIA</h3>
            <p className="text-cream-white text-center">
              Al realizar el proceso de la consulta en línea, tendrás un plazo
              de siete días continuos, para concretar la misma posterior a eso
              deberás ingresar como una nueva consulta.
            </p>
            <Link to="/paso1">
              <button className="text-white mt-4 ">CONTINUAR</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Consideraciones;
