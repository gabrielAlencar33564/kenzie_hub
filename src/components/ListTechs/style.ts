import styled from "styled-components";

export const ConteinerListTechs = styled.div`
  max-width: 100%;
  max-height: 27.3rem;
  background: #212529;
  border-radius: 4px;
  padding: 23px 26px;
  overflow-y: auto;

  ul {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    max-width: 100%;
    background: #121214;
    border-radius: 4px;
    padding: 13px 22px;
    display: flex;
    height: 50px;
    align-items: center;

    display: flex;
    justify-content: space-between;
    position: relative;

    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 17.5px;
      line-height: 22px;
      color: #ffffff;
      cursor: pointer;

      @media (max-width: 600px) {
        width: 100%;
        overflow-x: hidden;
      }
    }

    h2:hover {
      text-decoration: underline;
    }

    div {
      display: flex;
      gap: 25px;
      color: #868e96;
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;

      @media (max-width: 600px) {
        padding-left: 18px;
      }

      svg {
        color: rgba(255, 255, 255, 0.8);
        height: 19px;
        width: 19px;
        cursor: pointer;
      }
    }
  }
`;
