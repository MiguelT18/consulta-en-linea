import React from "react";
import ContadorPasos from "../components/container/ContadorPasos";
import FormButtons from "../components/pure/FormButtons";
import UploadImgForm from "../components/pure/forms/UploadImgForm";
import PerfilImg from "../assets/images/foto-perfil.png";

const Paso4 = () => {
  return (
    <div className="bg-dark-blue min-h-screen">
      <ContadorPasos />
      <div className="w-[80%] mx-auto">
        <UploadImgForm
          title="FOTO DE PERFIL"
          description="Mantente de perfil donde se aprecie el rostro"
          imageExam={PerfilImg}
          next="/paso5"
          back="/paso3"
        />
      </div>
    </div>
  );
};

export default Paso4;
