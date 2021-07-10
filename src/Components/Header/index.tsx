import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Container } from './styles';
import Logo from '../../assets/images/Logo.png';

const Header:React.FC = () => (
  <Container>
    <img src={Logo} alt="NexFar" />
    <div className="info-cart">
      <span className="title">NexFar</span>
      <div className="price-cart">
        <FiShoppingCart color="#3cba92" />
        <span>R$ 450,00</span>
      </div>
      <span className="min-order">Pedido mínimo: R$150,00</span>
    </div>
  </Container>
);

export default Header;
