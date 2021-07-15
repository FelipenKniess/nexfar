import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;

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

        svg {
          margin-left: 10px;
        }
      }
    }
  }
`;
