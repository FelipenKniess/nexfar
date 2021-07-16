import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
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
                  {' '}
                  {FormatValue(itemCart.price.price)}
                </span>
              </div>
            ))}
            <span className="value-total">
              Total:
              {' '}
              {FormatValue(GetTotalCart(cart))}
            </span>
          </BoxInfo>
        </div>
        <div className="total-values">
          <BoxInfo title="Valores">
            <div className="values">
              <span>
                Total
                <br />
                (sem impostos)
                <br />
                <strong>{FormatValue(GetTotalCart(cart))}</strong>
              </span>

              <span>
                Imposto
                <br />
                <strong>{FormatValue(10)}</strong>
              </span>
            </div>

            <span className="total">
              Total:
              <br />
              <strong>{FormatValue(GetTotalCart(cart) + 10)}</strong>
            </span>
          </BoxInfo>
        </div>
      </div>
    </Container>
  );
};

export default InfoCart;
