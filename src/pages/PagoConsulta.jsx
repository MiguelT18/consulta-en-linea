import React from "react";
import { NavLink } from "react-router-dom";
import NationalPayment from "../assets/images/qr-bcp-image.png";
import InternationalPayment from "../assets/images/payment-methods-image.png";
import PagoNacional from "./PagoNacional";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PagoConsulta = () => {
  return (
    <div className="min-h-screen bg-dark-blue mx-auto py-5 grid justify-center">
      <header>
        <h1 className="text-center text-white">Pago de Consulta</h1>
        <p className="text-center text-white">
          Con el pago de tu consulta en línea tienes incluido la evaluación
          presencial. Aquí tienes los métodos de pagos.
        </p>
      </header>

      <div className="w-[80%] mt-5 flex gap-16 max-w-[100%] mx-auto max-lg:flex-col max-lg:gap-8">
        <div className="h-min flex flex-col items-center justify-start flex-1 bg-white rounded-lg py-5 px-4 shadow-xl">
          <div>
            <h2 className="text-center text-dark-blue">PAGO NACIONAL</h2>
            <p className="text-center text-dark-gray mt-2">
              Dentro del pago nacional puedes hacer una transferencia desde
              cualquier banco boliviano o enviar tu pago mediante código QR
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[290px] my-4"
              src={NationalPayment}
              alt="Pago con QR al banco BCP"
            />
            <NavLink to="/pagoNacional" target="_blank">
              <button className="text-white">REALIZAR PAGO</button>
            </NavLink>
          </div>
        </div>

        <div className="h-min flex flex-col items-center justify-start flex-1 bg-white rounded-lg py-5 px-4 shadow-xl">
          <div>
            <h2 className="text-center text-dark-blue">
              PAGO NACIONAL E INTERNACIONAL
            </h2>
            <p className="text-center text-dark-gray mt-2">
              Con el pago nacional e internacional puedes pagar con tarjetas de
              debito, tarjetas de credito, paypal, pagos en efectivo (mexico,
              colombia ecuador y chile).
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[320px] my-4"
              src={InternationalPayment}
              alt="Pagos extranjeros"
            />
            <a href="https://pay.hotmart.com/E77601218Y" target="_blank">
              <button className="text-white">REALIZAR PAGO</button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h2 className="text-white text-center mt-8">
          Si necesitas ayuda con tu pago contáctanos ahora mismo
        </h2>
        <button className="text-white bg-green-500 hover:bg-green-600 active:scale-95 flex gap-x-3 items-center">
          <FontAwesomeIcon icon="fa-brands fa-whatsapp" size="xl" />
          <a href="https://wa.link/hmwa5c" target="_blank">
            Necesito un soporte
          </a>
        </button>
      </div>
    </div>
  );
};

export default PagoConsulta;
