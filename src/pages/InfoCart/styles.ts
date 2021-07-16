import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`

  .header-cart {
    display: flex;
    width: 100%;
    justify-content: space-between;
    > a {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;

      svg {
        margin-right: 10px;
      }
    }
    .actions {
      display: flex;

      .payment {
        display: flex;
        align-items: center;
        background: #3cba92;
        font-size: 14px;
        cursor: pointer;
        color: #fff;
        text-transform: uppercase;
        padding: 10px;
        border-radius: 20px;

        svg {
          margin-left: 10px;
        }

        :hover {
          background: ${shade(0.2, '#3cba92')};
        }
      }

      .clean-cart {
        display: flex;
        align-items: center;
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        color: #f62854;
        text-transform: uppercase;
        padding: 10px;
        border-radius: 20px;

        &:hover {
          font-weight: bold;
        }

        svg {
          margin-left: 10px;
        }
      }
    }
  }

  .box-content {
    display: flex;
    flex-direction: column;

    .cart-values {
      width: 70%;
      .content-cart-values {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #252525;
        & + .content-cart-values {
          margin-top: 5px;
        }
      }

      .value-total {
        margin-top: 5px;
        text-align: right;
        font-weight: bold;
      }
    }
  }
`;
