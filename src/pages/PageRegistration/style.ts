import styled from "styled-components";

export const ConteinerPageRegistration = styled.div`
  margin-top: 60px;

  header {
    display: flex;
    justify-content: center;
    margin-bottom: 31px;
  }

  header div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 390px;
  }

  header div h1 {
    color: #ff577f;
    font-weight: 800;
    font-size: 25px;
  }

  header div a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 32px;

    background: #212529;
    border-radius: 4px;

    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;
    color: #f8f9fa;
  }

  main {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 425px) {
    padding: 0 12px;
  }
`;
