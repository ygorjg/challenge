import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 245px;
  height: 100%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  margin-top: 25px;

  img {
    width: 170px;
  }

  .namePriceContainer {
    display: flex;
    justify-content: center;
    height: 50px;
    gap: 10px;
    margin-top: 12px;
  }

  h4 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2c2c2c;
    width: 135px;
  }

  h5 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 25px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    color: #ffffff;
    background: #373737;
    border-radius: 5px;
  }

  p {
    width: 95%;
    height: 58px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #2c2c2c;
    margin-left: 8px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    width: 100%;
    height: 45px;
    background: #0f52ba;
    border-radius: 0px 0px 8px 8px;
    border: none;
  }

  button:hover {
    font-size: 15px;
    background-color: #182175;
    transition: 400ms;
  }
`;
