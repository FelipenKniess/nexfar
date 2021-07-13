import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  padding-top: 30px;
  background-color: #FFF;
  width: 250px;
  height: 100vh;
  margin-top: 100px;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;

  .establishment {
    display: flex;
    padding: 0 14px;
    margin-bottom: 10px;

    div{
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }

    .title {
      font-size: 14px;
      text-transform: uppercase;
    }

    .cnpj {
      margin-top: 5px;
      font-size: 12px;
    }
  }

  .nav-menu-items {
    width: 100%;

    .title-submenu {
      display: block;
      font-weight: bold;
      font-size: 16px;
      color: #301b2c;
      text-transform: uppercase;
      padding: 0 14px;
      margin: 10px 0px;
    }

    .nav-text {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 8px 0px;
      list-style: none;
      height: 60px;

      a {
        flex: 1;
        text-decoration: none;
        color: #d3d3d3;
        font-size: 18px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 25px;

        :hover {
          background: #ebebff;
          border-radius: 20px 0px 0px 20px;
          color: #3cba92;
        }
      }

      span {
        margin-left: 16px;
      }
    }
  }
`;
