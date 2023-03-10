import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export const Dashbord = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};
