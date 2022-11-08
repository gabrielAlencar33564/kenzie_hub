import styled from "styled-components";

export const DeshboardPage = styled.div`
  header {
    padding: 0 18rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;

      h1 {
        color: #ff577f;
        font-weight: 800;
        font-size: 25px;
      }

      button {
        width: 55px;
        height: 32px;

        background: #212529;
        border-radius: 4px;

        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        color: #f8f9fa;
      }
    }
  }

  main {
    padding: 0 18rem;
  }

  @media (max-width: 768px) {
    header {
      padding: 0 13px;
    }

    main {
      padding: 0 13px;
    }
  }
`;

export const DeshboardPageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #212529;
  border-bottom: 1px solid #212529;
  height: 118px;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #868e96;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export const OnModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 11px 0 21px 0;

  h3 {
    color: #f8f9fa;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    width: 40%;

    textarea:focus,
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    input {
      width: 79%;
      border-radius: 4px;
      border: none;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;

      span {
        color: #f8f9fa;
        font-weight: 600;
        font-size: 22px;
      }

      background: #212529;
      border-radius: 4px;
      cursor: pointer;
    }

    @media (max-width: 1025px) {
      width: 60%;
    }

    @media (max-width: 769px) {
      width: 40%;
    }

    @media (max-width: 426px) {
      width: 62%;
    }
  }
`;
