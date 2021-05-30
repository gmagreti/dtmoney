import { useState } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="dt Money" />
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transacao
          </button>
        </Content>
      </Container>
    </>
  );
}
