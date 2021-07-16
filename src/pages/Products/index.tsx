import React, { useState, useCallback } from 'react';

import { BsSearch, BsTrash } from 'react-icons/bs';
import { AiOutlineInfoCircle, AiOutlineDropbox } from 'react-icons/ai';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';
import { FaBarcode } from 'react-icons/fa';
import { FiSmartphone } from 'react-icons/fi';

import FormatValue from '../../utils/formatValue';
import { useCart } from '../../hooks/useCart';
import { dataProducts, DataProduct } from '../../utils/dataProducts';
import { Container } from './styles';

const Products:React.FC = () => {
  const [products, setProducts] = useState<DataProduct[]>(() => {
    const storagedProducts = localStorage.getItem('@Nexfar:products');

    if (storagedProducts) {
      return JSON.parse(storagedProducts);
    }

    localStorage.setItem('@Nexfar:products', JSON.stringify(dataProducts));

    return dataProducts;
  });

  const { addProduct, removeProduct, removeQtdItemCart } = useCart();

  const handleAddItemCart = useCallback((Product: DataProduct) => {
    addProduct(Product);

    if (Product.quantityAvailable > 0 && Product.quantityAvailable > Product.quantityCart) {
      const updateProduct = products.map((productItem) => (productItem.id === Product.id ? {
        ...Product,
        quantityCart: Number(productItem.quantityCart) + 1,
      } : productItem));

      setProducts(updateProduct);
      localStorage.setItem('@Nexfar:products', JSON.stringify(updateProduct));
    }
  }, [addProduct, products]);

  const handleRemoveQtdItemCart = useCallback((Product: DataProduct) => {
    removeQtdItemCart(Product);

    if (Product.quantityCart && Product.quantityCart > 0) {
      const updateProduct = products.map((productItem) => (productItem.id === Product.id ? {
        ...Product,
        quantityCart: Number(productItem.quantityCart) - 1,
      } : productItem));

      setProducts(updateProduct);
      localStorage.setItem('@Nexfar:products', JSON.stringify(updateProduct));
    }
  }, [products, removeQtdItemCart]);

  const handleRemoveItemCart = useCallback((Product: DataProduct) => {
    removeProduct(Product);

    if (Product.quantityCart && Product.quantityCart > 0) {
      const updateProduct = products.map((productItem) => (productItem.id === Product.id ? {
        ...Product,
        quantityCart: 0,
      } : productItem));

      setProducts(updateProduct);
      localStorage.setItem('@Nexfar:products', JSON.stringify(updateProduct));
    }
  }, [removeProduct, products]);

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
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="info">
              <span className="sku">{product.sku}</span>
              <span className="title">{product.name}</span>
              <div className="icon-info">
                <FaBarcode size={18} />
                <AiOutlineInfoCircle size={18} />
              </div>
            </div>
            <div className="content-product">
              <img src={product.imageURL} alt={product.name} />
              <div className="values-product">
                <div className="values-product-content">
                  <div className="base">
                    <span className="head">Base</span>
                    <span className="result">
                      {FormatValue(product.price.price)}
                    </span>
                  </div>

                  <div className="stock">
                    <span className="head">Estoque</span>
                    <span className="result">
                      {product.quantityAvailable > 0 ? (
                        <>
                          <AiOutlineDropbox size={22} />
                          {product.quantityAvailable}
                          {' '}
                          un
                        </>
                      ) : (
                        <>
                          <FiSmartphone size={22} />
                          <div className="no-stock">
                            <span className="no-stock-desc">Sem estoque</span>
                            <span className="avisa-me">Avisa-me</span>
                          </div>
                        </>
                      )}
                    </span>
                  </div>

                  <div className="quantity">
                    <span className="head">Quantidade</span>
                    <span className="result">
                      <MdRemoveCircleOutline onClick={() => handleRemoveQtdItemCart(product)} className="icon-remove" size={26} />
                      <span>
                        {!product.quantityCart ? 0 : product.quantityCart}
                      </span>
                      <MdAddCircleOutline onClick={() => handleAddItemCart(product)} className="icon-add" size={26} />
                    </span>
                  </div>

                  <div className="value-total">
                    <span className="head">Valor</span>
                    <span className="result">
                      {FormatValue(Number(
                        !product.quantityCart ? 0 : product.quantityCart * product.price.price,
                      ))}
                    </span>
                  </div>

                  <BsTrash onClick={() => handleRemoveItemCart(product)} className="icon-trash" size={20} />

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
