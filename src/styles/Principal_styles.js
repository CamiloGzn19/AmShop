import styled from "styled-components";

export const Cont = styled.div`
  padding-top: 20px;
  background-color: #eaeded;
`;

export const HeadLine = styled.h1`
  padding-left: 20px;
  padding-bottom: 10px;
  font-family: Roboto;
  font-style: bold;
  font-weight: 700;
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
`;

export const Card = styled.div`
  width: 312px;
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 2px;
  margin-bottom: 30px;
`;

export const Til = styled.div`
  width: 280px;
  margin-top: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
  font-weight: 700;
`;

export const Image = styled.img`
  padding-top: 20px;
  width: 280px;
  height: 280px;
  object-fit: contain;
`;

export const Ref = styled.p`
  text-decoration: none;
  margin-top: 10px;
  margin-left: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: #0e7184;
`;

export const Price = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 22px;
  font-weight: 400;
  color: #af2913;
`;

export const Sep = styled.hr`
  width: 98%;
  background-color: #565959;
`;

// Textos

export const BodyBold1 = styled.h3`
  padding-top: 10px;
  margin-left: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

export const Body2R = styled.h4`
  margin-left: 15px;
  padding-top: 10px;
  padding-right: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

export const BtnComprar = styled.button`
  cursor: pointer;
  background-color: #f3d184;
  width: 280px;
  height: 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-top: 15px;
  color: #333333;
  border: 0;
  border-radius: 4px;
  &:hover {
    color: #000;
    background-color: #f0ad64;
  }
`;
