import { Container } from "./styles";
import entradasImg from "../../assets/entradas.svg";
import saidasImg from "../../assets/saidas.svg";
import totalImg from "../../assets/total.svg";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasImg} alt="Entradas" />
        </header>
        <strong>-R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
    </Container>
  );
};
