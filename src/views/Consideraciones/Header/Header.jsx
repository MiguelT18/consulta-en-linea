import "./css/Header.css";

export const Header = () => {
  return (
    <header>
      <p>
        Completa la siguiente información. Recibe un dignóstico y presupuesto.
      </p>
      <div className="Consideraciones">
        <h1>Consideraciones</h1>
        <h3>
          COSTO DE LA CONSULTA: 30$ USD <span>(210 Bs)</span>
        </h3>
        <p>
          La consulta en línea es una <span>PRECONSULTA</span> donde por medio
          de una encuesta de tu historial médico y fotografías recibirás un
          informe médico y presupuesto a tu <span>CORREO ELECTRÓNICO</span>.
          Asimismo obtendrás una consulta privada online con el Dr. Cristian
          Simons especialista en cirugía de rinoplastia ultrasónica.
        </p>
      </div>
    </header>
  );
};
