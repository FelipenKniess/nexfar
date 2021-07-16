import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .filters {
      display: flex;

      .search {
          display: flex;
          width: 50%;

        .button-search {
          height: 40px;
          width: 40px;
          z-index: 1;
          cursor: pointer;
          color: #000;
          border-radius: 50%;
          background: #5b127d;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            fill: #FFF;
          }

        }

        input {
          flex: 1;
          border: none;
          z-index: 0;
          //width: 850px;
          margin-left: -25px;
          padding-left: 40px;
          border-radius: 20px;
          background: #d8c8e0;
        }
      }

      .order-by,
        .exibition {
          display: flex;
          align-items: center;
          margin-left: 20px;
          select {
            margin-left: 15px;
            height: 40px;
            border-radius: 20px;
            padding: 0 15px;
            border: 0;

            option {
              border-radius: 20px;
            }
          }
        }
    }

    .products {
        width: 80%;
        margin-top: 45px;

      .product-item {
        background: #FFF;
        border-radius: 20px;
        padding: 20px;

        & + .product-item {
          margin-top: 20px;
        }

        .info {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #ebebff;
          padding-bottom: 10px;
          .sku {
            margin-right: 30px;
            color: #FFF;
            font-size: 12px;
            text-align: center;
            line-height: 20px;
            background: #301b2c;
            border-radius: 20px;
            padding: 0 10px;
          }

          .title {
            font-weight: bold;
          }

          .icon-info {
            margin-left: auto;
            svg {
              cursor: pointer;
            }

            svg + svg {
              margin-left: 20px;
            }
          }
        }

        .content-product {
          display: flex;
          margin-top: 35px;
          width: 100%;

          img {
            width: 150px;
            height: 150px;
          }

          .values-product {
            width: 100%;

            .values-product-content {
              display: flex;
              justify-content:space-around;
              align-items: center;

              .base,
              .stock,
              .quantity,
              .value-total {
                display: flex;
                flex-direction: column;

                .head {
                  color: #808080;
                  margin-bottom: 20px;
                  text-align:center;
                }
              }
              .base {
                .result {
                    font-size:16px;
                    font-weight: bold;
                }
              }

              .stock {
                display: flex;

                .result{
                  display: flex;
                }

                .result svg {
                  margin-right: 5px;
                }

                .no-stock {
                  display: flex;
                  flex-direction: column;
                  font-size: 12px;
                  text-transform: uppercase;

                  .avisa-me {
                    margin-top: 5px;
                    text-align: center;
                    background: #c3c3c3;
                    border-radius: 10px;
                    cursor: pointer;

                     &:hover {
                       font-weight: bold;
                     }
                  }
                }
              }
              .value-total {
                .result {
                  font-weight: bold;
                }
              }

              .quantity {
                .result {
                  .icon-add {
                    margin-left:5px;
                    cursor:pointer;

                    path {
                      color: #39FF14;
                    }
                  }

                  .quantity-value {
                    text-decoration: underline;
                  }

                  .icon-remove {
                    margin-right: 5px;
                    cursor:pointer;
                    path {
                      color: #ff0000;
                    }
                  }
                }
              }

              .icon-trash {
                cursor: pointer;
                path {
                  color: #ff0000;
                }
              }
            }
          }
        }
      }
    }
`;
