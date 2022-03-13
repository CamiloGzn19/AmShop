import React from "react";
import { Cont, HeadLine, Sep, CardCont, Card, Ref, Price } from "../styles/ListProduct1_styles";

const ListProduct1 = () => {
  return (
    <div>
      <Cont>
        <HeadLine>Productos relacionados con tu búsqueda</HeadLine>
        <br />
        <Sep />
        <CardCont>
        <Card>
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1646792170/Sprint%203/Camara1_t7ehrl.svg" alt="product" />
          <Ref href="#">PS5 Call of Suty Black Ops: Cold War - Standard Edition - PlayStation Edition</Ref>
          <br />
          <Price>$1,453.99</Price>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1647130707/Sprint%203/cam2_zowo3n.svg" alt="product" />
          <Ref href="#">PS5 Call of Suty Black Ops: Cold War - Standard Edition - PlayStation Edition</Ref>
          <br />
          <Price>$1,453.99</Price>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1647130707/Sprint%203/cam_3_ykypg8.svg" alt="product" />
          <Ref href="#">PS5 Call of Suty Black Ops: Cold War - Standard Edition - PlayStation Edition</Ref>
          <br />
          <Price>$1,453.99</Price>
        </Card>
        <Card>
          <img src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1647130707/Sprint%203/cam_4_wggb2t.svg" alt="product" />
          <Ref href="#">PS5 Call of Suty Black Ops: Cold War - Standard Edition - PlayStation Edition</Ref>
          <br />
          <Price>$1,453.99</Price>
        </Card>
        </CardCont>
      </Cont>
    </div>
  );
};

export default ListProduct1;
