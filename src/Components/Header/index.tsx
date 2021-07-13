import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Container } from './styles';
import Logo from '../../assets/images/Logo.png';

const Header:React.FC = () => (
  <Container>
    <img src={Logo} className="logo" alt="NexFar" />

    <div className="info-header">
      <div className="cart">
        <span className="title">NexFar</span>
        <Link to="/infoCart" className="price-cart">
          <FiShoppingCart size={22} color="#3cba92" />
          <span>R$ 450,00</span>
        </Link>
        <span className="min-order">Pedido mínimo: R$150,00</span>
      </div>
      <div className="icon-notification">
        <IoMdNotificationsOutline className="" size={30} />
        <span>0</span>
      </div>

      <div className="user">
        U
      </div>
    </div>
  </Container>
);

export default Header;
