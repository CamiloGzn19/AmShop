import styled from "styled-components";

export const Own = styled.div`
  position: absolute;
  display: flex;
  width: 20%;
  height: 500px;
  right: 0;
  top: 820px;
  margin-right: 30px;
  background-color: white;
  justify-content: center;
  border-radius: 5px;
`;

export const For = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 300px;
`;

export const Titl = styled.h1`
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
