import React, { useEffect, useState } from 'react';
import { BsSearch, BsTrash } from 'react-icons/bs';
import { AiOutlineInfoCircle, AiOutlineDropbox } from 'react-icons/ai';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';
import { FaBarcode } from 'react-icons/fa';
import axios from 'axios';
import { Container } from './styles';

const Products:React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDataProducts();

    async function getDataProducts() {
      const { data } = await axios.get('https://cors-anywhere.herokuapp.com/https://nexfar-static-public.s3-sa-east-1.amazonaws.com/j-application/products.json');
      setProducts(data);
    }
  }, []);

  console.log(products);

  return (
    <Container className="content">
      <div className="filters">
        <div className="search">
          <div className="button-search">
            <BsSearch size={20} />
          </div>
          <input placeholder="Pesquisar" type="text" name="search" />
        </div>

        <div className="order-by">
          <span>
            Ordenar por:
          </span>
          <select name="orderby" id="orderby">
            <option>Nome (A - Z)</option>
            <option>Nome (Z - A)</option>
            <option>Lançamentos</option>
          </select>
        </div>

        <div className="exibition">
          <span>Exibição:</span>
          <select name="exibition" id="exibition">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
      </div>

      <div className="products">
        <div className="product-item">
          <div className="info">
            <span className="sku">156156</span>
            <span className="title">CIMEGRIPE C/20 P22 PARAC+FENIL</span>
            <div className="icon-info">
              <FaBarcode size={18} />
              <AiOutlineInfoCircle size={18} />
            </div>
          </div>
          <div className="content-product">
            <img src="https://cfarma-public.s3-sa-east-1.amazonaws.com/images/nexfar-product-default-image.jpg" alt="das" />
            <div className="values-product">
              <div className="values-product-content">
                <div className="base">
                  <span className="head">Base</span>
                  <span className="result">
                    R$4,50
                  </span>
                </div>

                <div className="stock">
                  <span className="head">Estoque</span>
                  <span className="result">
                    <AiOutlineDropbox size={22} />
                    1000 un
                  </span>
                </div>

                <div className="quantity">
                  <span className="head">Quantidade</span>
                  <span className="result">
                    <MdRemoveCircleOutline className="icon-remove" size={26} />
                    <span>
                      100un
                    </span>
                    <MdAddCircleOutline className="icon-add" size={26} />
                  </span>
                </div>

                <div className="value-total">
                  <span className="head">Valor</span>
                  <span className="result">
                    R$ 450,00
                  </span>
                </div>

                <BsTrash className="icon-trash" size={20} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
