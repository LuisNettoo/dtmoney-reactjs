import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("/transactions").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/03/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$800,00</td>
            <td>Desenvolvimento</td>
            <td>10/03/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
