import { useState } from "react";
import Modal from "react-modal";

import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt Money" />
        <button onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  );
};
