import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Formulario3.css";
import img1 from "../../../assets/images/rostro-frontal.png";
import img2 from "../../../assets/images/rostro-perfil.png";
import img3 from "../../../assets/images/rostro-abajo.png";

export const Formulario3 = () => {
  const [selectedImageFrontal, setSelectedImageFrontal] = useState(null);
  const [selectedImagePerfil, setSelectedImagePerfil] = useState(null);
  const [selectedImageBase, setSelectedImageBase] = useState(null);

  const handleFileUploadFrontal = (e) => {
    setSelectedImageFrontal(null);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImageFrontal(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileUploadPerfil = (e) => {
    setSelectedImagePerfil(null);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImagePerfil(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileUploadBase = (e) => {
    setSelectedImageBase(null);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImageBase(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="Formulario3">
      <div className="Fotos-Paciente">
        <div className="Frontal">
          <div className="Imagenes">
            <img src={img1} alt="Subir foto frontal de su rostro." />
            {selectedImageFrontal && (
              <img src={selectedImageFrontal} alt="Previsualizacion" />
            )}
          </div>
          <p>
            FOTO FRONTAL: Debe mantenerse de frente donde se aprecie el rostro
          </p>
          <button className="UploadButton">
            <span></span>Subir imagen
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUploadFrontal}
            />
          </button>
        </div>

        <span className="SpanLine"></span>

        <div className="Perfil">
          <div className="Imagenes">
            <img src={img2} alt="Subir foto de perfil de su rostro." />
            {selectedImagePerfil && (
              <img src={selectedImagePerfil} alt="Previsualizacion" />
            )}
          </div>
          <p>
            FOTO DE PERFIL: Gire el rostro donde se aprecie la parte izquierda.
          </p>
          <button className="UploadButton">
            <span></span>Subir imagen
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUploadPerfil}
            />
          </button>
        </div>

        <span className="SpanLine"></span>

        <div className="Base">
          <div className="Imagenes">
            <img
              src={img3}
              alt="Subir foto donde se puedan ver las fosas nasales."
            />
            {selectedImageBase && (
              <img src={selectedImageBase} alt="Previsualizacion" />
            )}
          </div>
          <p>
            FOTO DE BASE: Debe inclinar hacia arriba el rostro donde puedan
            verse las fosas nasales.
          </p>
          <button className="UploadButton">
            <span></span>Subir imagen
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUploadBase}
            />
          </button>
        </div>
      </div>

      <div className="Botones">
        <Link to="/segundo-paso" className="AtrasBoton">
          <span></span>Atrás
        </Link>
        <Link to="/pago-qr" className="EnviarDatos">
          Enviar datos
        </Link>
      </div>
    </div>
  );
};
