import React from "react";
import ContadorPasos from "../components/container/ContadorPasos";
import UploadImgForm from "../components/pure/forms/UploadImgForm.jsx";
import FrontImage from "../assets/images/foto-frontal.png";

const Paso3 = () => {
  return (
    <div className="bg-dark-blue min-h-screen">
      <ContadorPasos />

      <div className="w-[80%] mx-auto">
        <UploadImgForm
          title="FOTO FRONTAL"
          description="Mantente de frente donde se aprecie el rostro"
          imageExam={FrontImage}
          next="/paso4"
          back="/paso2"
        />
      </div>
    </div>
  );
};

export default Paso3;
