import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Checkout:React.FC = () => (
  <Container className="content">
    <div className="header-cart">
      <Link to="/produtos">
        <AiOutlineArrowLeft size={18} />
        Voltar
      </Link>
      <div className="actions">
        <div className="payment">
          Ir para Pagamento
          <AiOutlineArrowRight size={18} />
        </div>
        <div className="clean-cart">
          Limpar Carrinho
          <BsTrash size={18} />
        </div>
      </div>
    </div>
  </Container>
);

export default Checkout;
