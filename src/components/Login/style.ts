import styled from "styled-components";

export const FormLogin = styled.div`
  width: 348px;
  padding: 42px 22px 28px 22px;
  text-align: center;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
    padding-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 22px;
  }

  form input,
  form select,
  form button {
    max-width: 100%;
    height: 48px;

    background: #343b41;

    border: 1.2px solid #343b41;
    border-radius: 4px;
    padding-left: 16px;

    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    color: #868e96;
  }

  form label {
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    color: #f8f9fa;
  }

  form span {
    color: #b22222;
    font-size: 13px;
  }

  form button {
    background: #59323f;
    border: 3px solid #59323f;
    color: #ffffff;
    cursor: pointer;
  }

  form button:hover {
    background-color: #212529;
    color: #59323f;

    font-weight: 700;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: #868e96;
    padding-bottom: 18px;
  }

  a {
    text-decoration: none;
    max-width: 100%;
    height: 45px;

    background: #868e96;

    border: 3px solid #868e96;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #f8f9fa;
    cursor: pointer;
  }

  a:hover {
    background-color: #212529;

    font-weight: 700;
  }
`;
