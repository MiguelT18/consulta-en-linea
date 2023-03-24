import React from "react";
import { NavLink } from "react-router-dom";
import NationalPayment from "../assets/images/qr-bcp-image.png";
import InternationalPayment from "../assets/images/payment-methods-image.png";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PagoConsulta = () => {
  return (
    <div className="w-[80%] mx-auto py-5">
      <h1 className="text-center">Pago de Consulta</h1>
      <p className="text-center">
        Con el pago de tu consulta en línea tienes incluido la evaluación
        presencial. Aquí tienes los métodos de pagos.
      </p>

      <div className="flex gap-16 mt-6 max-w-[100%] mx-auto max-lg:flex-col max-lg:gap-8">
        <div className="flex flex-col items-center flex-1 bg-light-blue rounded-lg py-5 px-4">
          <h2 className="text-center text-white">PAGO NACIONAL</h2>
          <p className="text-center text-white mt-2">
            Dentro del pago nacional puedes hacer una transferencia desde
            cualquier banco boliviano o enviar tu pago mediante código QR
          </p>
          <img
            className="my-4"
            src={NationalPayment}
            alt="Pago con QR al banco BCP"
          />
          <NavLink>
            <button className="text-white">REALIZAR PAGO</button>
          </NavLink>
        </div>

        <div className="flex flex-col flex-1 items-center bg-light-blue rounded-lg py-5 px-4">
          <h2 className="text-center text-white">
            PAGO NACIONAL E INTERNACIONAL
          </h2>
          <p className="text-center text-white mt-2">
            Con el pago nacional e internacional puedes pagar con tarjetas de
            debito, tarjetas de credito, paypal, pagos en efectivo (mexico,
            colombia ecuador y chile).
          </p>
          <img
            className="my-4"
            src={InternationalPayment}
            alt="Pagos extranjeros"
          />
          <NavLink>
            <button className="text-white">REALIZAR PAGO</button>
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h2 className="text-dark-blue text-center mt-8">
          Si necesitas ayuda con tu pago contáctanos ahora mismo
        </h2>
        <button className="text-white bg-green-500 hover:bg-green-600 active:scale-95 flex gap-x-3 items-center">
          <FontAwesomeIcon icon="fa-brands fa-whatsapp" size="xl" />
          <a href="#">Necesito un soporte</a>
        </button>
      </div>
    </div>
  );
};

export default PagoConsulta;
