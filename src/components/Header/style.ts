import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #0f52ba;

  @media (min-width: 600px) {
    gap: 150px;
  }

  @media (min-width: 1200px) {
    gap: 400px;
  }

  h1 {
    display: flex;
    justify-content: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 19px;
    color: #ffffff;
  }

  span {
    font-weight: 300;
    font-size: 16px;
    margin-left: 8px;
  }

  button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 48px;
    height: 26px;
    left: 300px;
    top: 11px;
    background: #ffffff;
    border-radius: 8px;
    border: none;
  }

  button:hover {
    color: #ffffff;
    background-color: #182175;
    transition: 400ms;
  }

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
  }
`;
