import React from "react";
import ContadorPasos from "../components/container/ContadorPasos";
import FormButtons from "../components/pure/FormButtons";
import FormPaso2 from "../components/pure/forms/FormPaso2";

const Paso2 = () => {
  return (
    <div className="bg-dark-blue min-h-screen">
      <ContadorPasos />
      <div className="w-[80%] mx-auto">
        <FormPaso2 />
        <FormButtons back="/paso1" next="/paso3" />
      </div>
    </div>
  );
};

export default Paso2;
