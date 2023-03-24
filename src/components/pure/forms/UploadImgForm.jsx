import React, { useState } from "react";

const FormPaso3 = ({ title, description, imageExam }) => {
  const [image, setImage] = useState("");
  const [hasImage, setHasImage] = useState(false);

  const handleImageClick = (event) => {
    event.preventDefault();
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setImage(imageDataUrl);
        setHasImage(true);
      };
    });
    input.click();
  };

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-white text-center">TOMA TU MEJOR FOTO</h2>

      <form className="grid mx-auto justify-items-center mt-6 shadow-2xl bg-light-blue w-[80%] py-5 px-4 rounded-lg max-w-[346px] sm:rounded-2xl">
        <img
          className="mb-4 w-[250px]"
          src={hasImage ? image : imageExam}
          alt="subir foto frontal de su rostro"
        />
        <h3 className="text-white text-center">{title}</h3>
        <p className="text-cream-white text-center">{description}</p>
        <button
          onClick={handleImageClick}
          className="bg-white hover:bg-slate-200 mt-5"
        >
          SUBIR IMAGEN
        </button>
      </form>
    </div>
  );
};

export default FormPaso3;
