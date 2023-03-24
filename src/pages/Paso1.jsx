import React from "react";
import ContadorPasos from "../components/container/ContadorPasos";
import FormPaso1 from "../components/pure/forms/FormPaso1";
import FormButtons from "../components/pure/FormButtons";

const Paso1 = () => {
  return (
    <div className="bg-dark-blue pb-8">
      <ContadorPasos />
      <div className="w-[80%] mx-auto">
        <p className="text-white text-center mb-10">
          Completa la siguiente información. <br />
          Recibe un diagnóstico y presupuesto
        </p>
        <FormPaso1 />
        <FormButtons next="/paso2" back="/" />
      </div>
    </div>
  );
};

// const Paso1 = () => {
//   const [form, setForm] = useState({});

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleChecked = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.checked,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario se ha enviado");
//   };

//   return (
//     <div className="bg-dark-blue">
//       <ContadorPasos />

//       {/* FORMULARIO */}
//       <h1 className="text-white">FORMULARIO</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre:</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={form.nombre}
//           onChange={handleChange}
//         />
//         <p>Elige tu Sabor JS Favorito:</p>
//         <label htmlFor="vanilla">Vanilla</label>
//         <input
//           type="radio"
//           id="vanilla"
//           name="sabor"
//           value="vanilla"
//           onChange={handleChange}
//         />{" "}
//         <label htmlFor="react">React</label>
//         <input
//           type="radio"
//           id="react"
//           name="sabor"
//           value="react"
//           onChange={handleChange}
//           defaultChecked
//         />{" "}
//         <label htmlFor="angular">Angular</label>
//         <input
//           type="radio"
//           id="angular"
//           name="sabor"
//           value="angular"
//           onChange={handleChange}
//         />{" "}
//         <label htmlFor="vue">Vue</label>
//         <input
//           type="radio"
//           id="vue"
//           name="sabor"
//           value="vue"
//           onChange={handleChange}
//         />{" "}
//         <label htmlFor="svelte">Svelte</label>
//         <input
//           type="radio"
//           id="svelte"
//           name="sabor"
//           value="svelte"
//           onChange={handleChange}
//         />
//         <select name="lenguaje" onChange={handleChange} defaultValue="">
//           <option value="">---</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto términos y condiciones</label>
//         <input
//           type="checkbox"
//           id="terminos"
//           name="terminos"
//           onChange={handleChecked}
//         />
//       </form>
//     </div>
//   );
// };

// const Paso1 = () => {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setsabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario se ha enviado");
//   };

//   return (
//     <div className="bg-dark-blue">
//       <ContadorPasos />

//       {/* FORMULARIO */}
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre:</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elige tu Sabor JS Favorito:</p>
//         <label htmlFor="vanilla">Vanilla</label>
//         <input
//           type="radio"
//           id="vanilla"
//           name="sabor"
//           value="vanilla"
//           onChange={(e) => setsabor(e.target.value)}
//         />{" "}
//         <label htmlFor="react">React</label>
//         <input
//           type="radio"
//           id="react"
//           name="sabor"
//           value="react"
//           onChange={(e) => setsabor(e.target.value)}
//           defaultChecked
//         />{" "}
//         <label htmlFor="angular">Angular</label>
//         <input
//           type="radio"
//           id="angular"
//           name="sabor"
//           value="angular"
//           onChange={(e) => setsabor(e.target.value)}
//         />{" "}
//         <label htmlFor="vue">Vue</label>
//         <input
//           type="radio"
//           id="vue"
//           name="sabor"
//           value="vue"
//           onChange={(e) => setsabor(e.target.value)}
//         />{" "}
//         <label htmlFor="svelte">Svelte</label>
//         <input
//           type="radio"
//           id="svelte"
//           name="sabor"
//           value="svelte"
//           onChange={(e) => setsabor(e.target.value)}
//         />
//         <select
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue=""
//         >
//           <option value="">---</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto términos y condiciones</label>
//         <input
//           type="checkbox"
//           id="terminos"
//           name="terminos"
//           onChange={(e) => setTerminos(e.target.checked)}
//         />
//         <input type="submit" name="" id="" />
//       </form>
//     </div>
//   );
// };

export default Paso1;
