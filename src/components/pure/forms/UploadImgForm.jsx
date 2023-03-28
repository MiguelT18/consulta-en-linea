import React, { useState } from "react";
import FormButtons from "../../pure/FormButtons";

const FormPaso3 = ({ title, description, imageExam, next, back, nextStep }) => {
  const [image, setImage] = useState("");
  const [hasImage, setHasImage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage("");
      };
    });
    input.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // no se necesita la validación aquí
    next();
  };

  return (
    <div className="w-[80%] mx-auto pb-8">
      <h2 className="text-white text-center">TOMA TU MEJOR FOTO</h2>

      <form
        onSubmit={handleSubmit}
        className="grid mx-auto justify-items-center mt-6 shadow-2xl mb-8 bg-light-blue w-[80%] py-5 px-4 rounded-lg max-w-[346px] sm:rounded-2xl"
      >
        <img
          className="mb-4 w-[250px]"
          src={hasImage ? image : imageExam}
          alt="subir foto frontal de su rostro"
        />
        <h3 className="text-white text-center">{title}</h3>
        <p className="text-cream-white text-center">{description}</p>
        <button
          type="button"
          onClick={handleImageClick}
          className="bg-white hover:bg-slate-200 mt-5"
        >
          SUBIR IMAGEN
        </button>
        {errorMessage && (
          <p className="text-red-500 text-center mt-3 font-semibold">
            {errorMessage}
          </p>
        )}
      </form>
      <FormButtons
        className="my-5"
        next={next}
        back={back}
        disabled={!hasImage}
        nextStep={nextStep}
      />
    </div>
  );
};

export default FormPaso3;
