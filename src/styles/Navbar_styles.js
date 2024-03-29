import styled from "styled-components";

export const Main = styled.div`
  background-color: #131921;
  display: flex;
  flex-direction: row;
  height: 64px;
  align-items: center;
  color: white;
`;

export const Loc = styled.div`
  display: flex;
`;

export const Cit = styled.div`
  margin-left: 20px;
  height: 50px;
`;

export const Car = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 126px;
`;

export const LogoCar = styled.img`
  width: 40px;
  padding-right: 4px;
`;

export const BodyBold1 = styled.h3`
  color: white;
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700px;
`;

export const BodyRegular2 = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
`;

// Segundo Nav

export const Sub = styled.div`
  background-color: #242f3e;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  color: white;
`;

export const List = styled.ul`
  margin-left: -30px;
  display: inline-flex;
  item-spacing: 30px;
  list-style-type: none;
`;

export const Element = styled.li`
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  font-weight: 400;
  padding-left: 40px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    font-weight: 700;
  }
`;

// Tercer Nav

export const Sub2 = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  color: #333333;
`;

// Botones

export const BtnCar = styled.button`
  width: 84px;
  border: 0;
  background-color: transparent;
`;

export const BtnCompra = styled.button`
  cursor: pointer;
  background-color: #f0ad64;
  width: 100px;
  height: 25px;
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  border: 0;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`;

// El search

export const All = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: row;
  justify-content: center;
`;

export const Catg = styled.select`
  height: 42px;
  width: 177px;
  background-color: #f3f3f3;
  border: 0;
  border-radius: 8px 0 0 8px;
  text-align: center;
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`;

export const Hidden = styled.option`
  display: none;
`;

export const Busc = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  width: 361px;
  height: 40px;
  border: 0;
  /* border-radius: 8px 0 0 8px; */
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const BtnBusc = styled.button`
  cursor: pointer;
  background-color: #f0ad64;
  height: 42px;
  width: 48px;
  border: 0;
  border-radius: 0 8px 8px 0;
`;

export const BtnImg = styled.img`
  margin-top: 10px;
  width: 20px;
`;
