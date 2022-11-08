import styled from "styled-components";

export const ConteinerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Modal = styled.div`
  width: 369px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 4px;
  background: #212529;

  @media (max-width: 425px) {
    width: 93.5%;
  }

  div {
    background: #343b41;
    padding: 0 20px;
    height: 50px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px 4px 0px 0px;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;

      color: #f8f9fa;
    }

    span {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;

      color: #868e96;

      cursor: pointer;
    }
  }

  form {
    padding: 20px 20px;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    height: 210px;

    label {
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 0px;

      color: #f8f9fa;
    }

    input {
      box-sizing: border-box;
      padding: 0px 16.2426px;
      height: 48px;

      background: #343b41;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;

      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: #f8f9fa;
    }

    textarea:focus,
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    select {
      box-sizing: border-box;
      padding: 0px 16px;
      height: 48px;

      background: #343b41;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;

      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      color: #f8f9fa;
    }

    textarea:focus,
    select:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    button {
      box-sizing: border-box;
      max-width: 100%;
      height: 48px;

      background: #ff577f;
      border: 3px solid #ff577f;
      border-radius: 4.06066px;

      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;

      color: #ffffff;
    }

    button:hover {
      background-color: #212529;
      color: #ff577f;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;
