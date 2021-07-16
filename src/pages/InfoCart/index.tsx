import React, { useCallback } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { title } from 'process';
import { Container } from './styles';
import BoxInfo from '../../Components/BoxInfo';
import { useCart } from '../../hooks/useCart';
import FormatValue from '../../utils/formatValue';
import GetTotalCart from '../../utils/getTotalCart';

const InfoCart = () => {
  const { cart, cleanCart } = useCart();

  return (
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
          <button className="clean-cart" type="button" onClick={() => cleanCart()}>
            Limpar Carrinho
            <BsTrash size={18} />
          </button>
        </div>
      </div>

      <div className="box-content">
        <div className="cart-values">
          <BoxInfo title="Produtos">
            {cart.map((itemCart) => (
              <div key={itemCart.id} className="content-cart-values">
                <span className="title">{itemCart.name}</span>
                <span className="price">
                  {itemCart.quantityCart}
                  {' '}
                  un
                  -
                  {FormatValue(itemCart.price.price)}
                </span>
              </div>
            ))}
            <span className="value-total">{FormatValue(GetTotalCart(cart))}</span>
          </BoxInfo>
        </div>
      </div>
    </Container>
  );
};

export default InfoCart;
