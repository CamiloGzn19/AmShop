import styled from "styled-components";

export const Cont = styled.div`
  background-color: white;
`;

export const HeadLine = styled.h1`
  padding-left: 20px;
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato";
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  color: #333333;
`;

export const CardCont = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 48px;
`;

export const Card = styled.div`
  width: 312px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

export const Ref = styled.a`
  margin-top: 20px;
  text-decoration: none;
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #0e7184;
`;

export const Price = styled.p`
  margin-left: 0px;
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  font-weight: 400;
  color: #af2913;
`;

export const Sep = styled.hr`
  background-color: #565959;
`;
