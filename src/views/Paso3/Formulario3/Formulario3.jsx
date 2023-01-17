import "./css/Formulario3.css";
import img1 from "../../../assets/images/rostro-frontal.png";
import img2 from "../../../assets/images/rostro-perfil.png";
import img3 from "../../../assets/images/rostro-abajo.png";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

export const Formulario3 = () => {
  const [img1Subida, setImg1Subida] = useState(false);
  const [img2Subida, setImg2Subida] = useState(false);
  const [img3Subida, setImg3Subida] = useState(false);
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const inputFile1 = useRef();
  const inputFile2 = useRef();
  const inputFile3 = useRef();

  function handleImg1Upload() {
    setImg1(URL.createObjectURL(inputFile1.target.files[0]));
    setImg1Subida(true);
  }
  function handleImg2Upload() {
    setImg1(URL.createObjectURL(inputFile2.target.files[0]));
    setImg1Subida(true);
  }
  function handleImg3Upload() {
    setImg1(URL.createObjectURL(inputFile3.target.files[0]));
    setImg1Subida(true);
  }

  return (
    <div className="Formulario3">
      {img1Subida ? (
        <div className="Frontal">
          <img src={img1} alt="Subir foto frontal de su rostro." />
          <p>
            FOTO FRONTAL: Debe mantenerse de frente donde se aprecie el rostro
          </p>
        </div>
      ) : null}
      <button>
        <label htmlFor="img1-upload">Seleccionar imagen 1</label>
        <input
          type="file"
          id="img1-upload"
          onChange={handleImg1Upload}
          hidden
        />
      </button>

      {img2Subida ? (
        <div className="Perfil">
          <img src={img2} alt="Subir foto de perfil de su rostro." />
          <p>
            FOTO DE PERFIL: Gire el rostro donde se aprecie la parte izquierda.
          </p>
        </div>
      ) : null}
      <button>
        <label htmlFor="img2-upload">Seleccionar imagen 2</label>
        <input
          type="file"
          id="img2-upload"
          onChange={handleImg2Upload}
          hidden
        />
      </button>

      {img3Subida ? (
        <div className="Base">
          <img
            src={img3}
            alt="Subir foto donde se puedan ver las fosas nasales."
          />
          <p>
            FOTO DE BASE: Debe inclinar hacia arriba el rostro donde puedan
            verse las fosas nasales.
          </p>
        </div>
      ) : null}
      <button>
        <label htmlFor="img3-upload">Seleccionar imagen 3</label>
        <input
          type="file"
          id="img3-upload"
          onChange={handleImg3Upload}
          hidden
        />
      </button>

      <div className="Botones">
        <Link to="/segundo-paso" className="AtrasBoton">
          <span></span>Atrás
        </Link>
        <Link className="EnviarDatos">Enviar datos</Link>
      </div>
    </div>
  );
};
