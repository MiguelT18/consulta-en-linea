import React from "react";
import ContadorPasos from "../components/container/ContadorPasos";
import FormPaso1 from "../components/pure/forms/FormPaso1";

const Paso1 = () => {
  return (
    <div className="bg-dark-blue pb-8 h-full min-h-screen">
      <ContadorPasos />
      <div className="w-[80%] mx-auto">
        <p className="text-white text-center mb-10">
          Completa la siguiente información. <br />
          Recibe un diagnóstico y presupuesto
        </p>
        <FormPaso1 next="/paso2" back="/" />
      </div>
    </div>
  );
};

export default Paso1;
