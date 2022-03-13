import React from "react";
import { Cont, HeadLine, Sep, CardCont, Card, Ref, Price } from "../styles/ListProduct1_styles";

const ListProduct2 = () => {
  return (
    <div>
      <Cont>
        <HeadLine>Inspirado por tu historial de búsqueda</HeadLine>
        <br />
        <Sep />
        <CardCont>
        <Card>
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1646756556/Sprint%203/Game_1_t8m6fp.svg" alt="product" />
          <Ref href="#">PS5 Call of Suty Black Ops: Cold War - Standard Edition - PlayStation Edition</Ref>
          <br />
          <Price>$1,453.99</Price>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1647130517/Sprint%203/Game2_izr1vd.svg" alt="product" />
          <Ref href="#">PS5 Call of Suty Black Ops: Cold War - Standard Edition - PlayStation Edition</Ref>
          <br />
          <Price>$1,453.99</Price>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1647130517/Sprint%203/Game_3_iucqqi.svg" alt="product" />
          <Ref href="#">PS5 Call of Suty Black Ops: Cold War - Standard Edition - PlayStation Edition</Ref>
          <br />
          <Price>$1,453.99</Price>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1647130517/Sprint%203/game_4_bqgxhn.svg" alt="product" />
          <Ref href="#">PS5 Call of Suty Black Ops: Cold War - Standard Edition - PlayStation Edition</Ref>
          <br />
          <Price>$1,453.99</Price>
        </Card>
        </CardCont>
      </Cont>
    </div>
  );
};

export default ListProduct2;
