import "./css/Main.css";
import imgQR from "../../../assets/images/PAGOBCP-QR.png";

export const Main = () => {
  return (
    <main className="Main-PagoQR">
      <h2>Pago de Consulta</h2>
      <p className="Texto-Pago">
        Con el pago de tu consulta en línea tienes incluido la evaluación
        presencial. Acá tienes los métodos de pagos.
      </p>

      <div className="Transferencia-Bancaria">
        <h3>Transferencia Bancaria</h3>
        <p>
          Puedes realizar una transferencia al siguiente número de cuenta, una
          vez realizado el pago envia el comprobante haciendo click en el botón
          “quiero reportar mi pago”
        </p>
        <ul>
          <li>Cristian Simons</li>
          <li>5006963 tja</li>
          <li>Banco de crédito (BCP)</li>
          <li>Caja de ahorro</li>
          <li># de cuenta.- 20151366584319</li>
        </ul>
      </div>

      <p className="TextoFinal">
        También puedes cancelar a través del código QR:
      </p>
      <img src={imgQR} alt="QR para realizar la transferencia" />
    </main>
  );
};
