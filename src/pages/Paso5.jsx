import React from "react";
import ContadorPasos from "../components/container/ContadorPasos";
import FormButtons from "../components/pure/FormButtons";
import UploadImgForm from "../components/pure/forms/UploadImgForm";
import NasalImg from "../assets/images/foto-nasal.png";

const Paso5 = () => {
  return (
    <div className="bg-dark-blue min-h-screen">
      <ContadorPasos />

      <div className="w-[80%] mx-auto">
        <UploadImgForm
          title="FOTO NASAL"
          description="Inclina hacia arriba el rostro en donde se puedan ver las fosas nasales"
          imageExam={NasalImg}
        />
        <FormButtons next="/pagoConsulta" back="/paso4" />
      </div>
    </div>
  );
};

export default Paso5;
