import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-bottom: 3px solid #3cba92;
  background: #FFF;
  padding: 0px 100px;

  .logo {
    height: 50px;
    width: 140px;
  }

  .info-header {
    display: flex;
    align-items: center;

    .cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      margin-right: 100px;

      .title {
        text-transform: uppercase;
        font-size: 12px;
      }

      .price-cart {
        color: #3cba92;

        span {
          margin-left: 10px;
          font-weight: bold;
        }
      }

      .min-order {
        font-size: 12px;
      }
    }

    .icon-notification {
      position:relative;
      margin-right: 50px;
      cursor: pointer;

      span {
        position: absolute;
        left: 16px;
        border-radius: 50%;
        text-align: center;
        background: #f62854;
        color: #FFF;
        font-size: 10px;
        width: 15px;
        height: 15px;
        line-height: 15px;
      }
    }

    .user {
      background: #3cba92;
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      text-transform: uppercase;
      color: #FFF;
      font-size: 30px;
    }
  }

`;
