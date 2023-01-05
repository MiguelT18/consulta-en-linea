export const Formulario = () => {
  return (
    <form>
      <input type="text" placeholder="Nombres" />
      <input type="text" placeholder="Apellidos" />
      <select name="genero" id="gender">
        <option disabled selected>
          Género
        </option>
        <option value="hombre">Masculino</option>
        <option value="mujer">Femeninio</option>
      </select>
    </form>
  );
};
