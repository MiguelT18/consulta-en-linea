import React from "react";
import ImgBCP from "../assets/images/BCP-image.png";
import ImgQR from "../assets/images/qr-250Bs.jpg";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PagoNacional = () => {
  return (
    <div className="bg-dark-blue min-h-screen">
      <header className="flex flex-col items-center">
        <h1 className="text-white text-center mt-5">Pago Nacional</h1>
        <h2 className="text-white text-center mt-4">TRANSFERENCIA BANCARIA</h2>
        <p className="text-white text-center max-w-[80%] mt-2">
          Puedes realizar una transferencia al siguiente número de cuenta, una
          vez realizado el pago envía el comprobante haciendo click en el botón
          “quiero reportar mi pago”.
        </p>
      </header>

      <main>
        <div className="bg-gradient-to-r from-blue-400 to-blue-300 w-[95%] max-w-[360px] flex relative py-5 px-4 rounded-lg mx-auto mt-8 shadow-lg ">
          <ul>
            <li className="text-white font-inherit text-[18px] max-sm-text-[16px]">
              Cristian Simons
            </li>
            <li className="text-white font-inherit text-[18px] max-sm-text-[16px]">
              5006963 tja
            </li>
            <li className="text-white font-inherit text-[18px] max-sm-text-[16px]">
              Banco de crédito (BCP)
            </li>
            <li className="text-white font-inherit text-[18px] max-sm-text-[16px]">
              Caja de ahorro
            </li>
            <li className="text-white font-inherit text-[18px] max-sm-text-[16px]">
              # de cuenta.- 20151366584319
            </li>
          </ul>
          <img
            className="absolute right-4"
            src={ImgBCP}
            alt="Logotipo del BCP"
          />
        </div>

        <div className="flex flex-col items-center py-8 gap-8">
          <h2 className="text-white text-center">
            TAMBIÉN PUEDES PAGAR A TRAVÉS DEL CÓDIGO QR...
          </h2>
          <img
            className="max-w-[20%] min-w-[260px]"
            src={ImgQR}
            alt="Imagen para realizar el pago a través de QR"
          />
          <button className="text-white bg-green-500 hover:bg-green-600 active:scale-95 flex gap-x-3 items-center">
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" size="xl" />
            <a href="https://wa.link/hmwa5c" target="_blank">
              Necesito un soporte
            </a>
          </button>
        </div>
      </main>
    </div>
  );
};

export default PagoNacional;
