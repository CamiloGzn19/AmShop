import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #eaeded;
`;

export const Sub = styled.div`
  margin-left: 0;
  width: 70%;
  height: 100%;
  padding: 30px;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
`;

export const Own = styled.div`
  position: absolute;
  display: flex;
  width: 20%;
  height: 600px;
  right: 0;
  top: 195px;
  margin-right: 30px;
  background-color: white;
  justify-content: center;
  border-radius: 5px;
`;

export const Det = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
`;

export const Desc = styled.div`
  width: 55%;
`;

export const Imag = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

export const Price = styled.p`
  margin-right: -30px;
  text-align: end;
`;

export const Pti = styled.p`
  text-align: right;
`;

// Textos de

export const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  color: #333333;
  padding-bottom: 20px;
`;

export const BodyBold1 = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
`;

export const BodyReg1 = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

export const Stot = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  text-align: end;
`;

// Styles Reg Prod

export const Logo = styled.img`
  width: 200px;
  margin-top: 50px;
`;

export const For = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  width: 350px;
  padding-bottom: 0px;
  margin-bottom: 20px;
`;

export const Titl = styled.h1`
  padding-top: 15px;
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Lab = styled.label`
  text-align: right;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  font-weight: 400;
`;

export const Inp = styled.input`
  width: 254px;
  height: 30px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid #c2c2c2;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
`;

export const Red = styled.button`
  border: 0;
  background-color: transparent;
  width: 60px;
  cursor: pointer;
`;

export const Stam = styled.img`
  width: 40px;
`;

export const Check = styled.button`
  width: 274px;
  height: 40px;
  margin-top: 10px;
  background: linear-gradient(
    0deg,
    rgba(241, 197, 87, 1) 0%,
    rgba(246, 222, 162, 1) 100%
  );
  border: 1px solid gray;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
`;

export const Reg = styled.button`
  width: 294px;
  height: 40px;
  margin-top: 20px;
  background: linear-gradient(
    0deg,
    rgba(241, 197, 87, 1) 0%,
    rgba(246, 222, 162, 1) 100%
  );
  border: 1px solid gray;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
`;

export const BtnPhoto = styled.button`
  width: 274px ;
  height: 40px ;
  margin-top: 20px ;
  background-color: #ffdc14;
  border: 0;
  border-radius: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
`;

export const BtnAct = styled.button`
  background-color: #f3d184;
  border: 0;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: Roboto;
  cursor: pointer;
`;

export const BtnAct2 = styled.button`
  background-color: #f0ad64;
  border: 0;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  font-family: Roboto;
  cursor: pointer;
`;
