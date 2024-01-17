import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProductsAsync } from "../Redux/actions/actionProducts";
import {
  Cont,
  HeadLine,
  Sep,
  Til,
  CardCont,
  Card,
  Image,
  BodyBold1,
  Body2R,
  BtnComprar,
} from "../styles/Principal_styles";

const Principal = () => {
  const [carrito, setCarrito] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductsAsync());
  }, [dispatch]);

  const product = useSelector((store) => store.products.products);

  // Seleccionar

  const Detallar = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const producto = product.find((prod) => prod.id === Number(id));
    setCarrito([producto]);
    localStorage.setItem("producto", JSON.stringify([producto]));
    setTimeout(() => {
      window.location.href = "product";
    }, 10);
  };

  const Comprar = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const comprar = product.find((prod) => prod.id === Number(id));
    setCarrito([...carrito, comprar]);
    window.localStorage.setItem(
      "comprar",
      JSON.stringify([...carrito, comprar])
    );
  };

  const filtro = useSelector((store) => store.filtro.filter);

  return (
    <div>
      <Cont>
        <>
          {filtro === "Electrónicos" ||
          filtro === "Todos" ||
          filtro === undefined ? (
            <>
              <HeadLine>Electrónicos</HeadLine>
              <Sep />
            </>
          ) : (
            <></>
          )}
          <CardCont>
            {product.slice(0, 4).map((e) => (
              <Card key={e.id}>
                <Link style={{ color: "inherit" }} to="/product">
                  <Image
                    src={e.image1}
                    alt="product"
                    id={e.id}
                    onClick={(e) => Detallar(e)}
                  />
                </Link>
                <Til>{e.snombre}</Til>
                <BodyBold1>COP$ {e.precio}</BodyBold1>
                <Body2R>
                  <b>Envío GRATIS</b> a Colombia cuando gastes más de USD 35.00
                  (COP 134,539.47) en artículos elegibles
                </Body2R>
                <BtnComprar id={e.id} onClick={(e) => Comprar(e)}>
                  Añadir al carrito
                </BtnComprar>
                <br />
              </Card>
            ))}
          </CardCont>
        </>
        <>
          {filtro === "Hogar y cocina" ||
          filtro === "Todos" ||
          filtro === undefined ? (
            <>
              <HeadLine>Hogar y Cocina</HeadLine>
              <Sep />
            </>
          ) : (
            <></>
          )}
          <CardCont>
            {product.slice(4, 8).map((e) => (
              <Card key={e.id}>
                <Link style={{ color: "inherit" }} to="/product">
                  <Image
                    src={e.image1}
                    alt="product"
                    id={e.id}
                    onClick={(e) => Detallar(e)}
                  />
                </Link>
                <Til>{e.snombre}</Til>
                <BodyBold1>COP$ {e.precio}</BodyBold1>
                <Body2R>
                  <b>Envío GRATIS</b> a Colombia cuando gastes más de USD 35.00
                  (COP 134,539.47) en artículos elegibles
                </Body2R>
                <BtnComprar id={e.id} onClick={(e) => Comprar(e)}>
                  Añadir al carrito
                </BtnComprar>

                <br />
              </Card>
            ))}
          </CardCont>
        </>
        <>
          {filtro === "Artículos para mascotas" ||
          filtro === "Todos" ||
          filtro === undefined ? (
            <>
              <HeadLine>Artículos para mascotas</HeadLine>
              <Sep />
            </>
          ) : (
            <></>
          )}

          <CardCont>
            {product.slice(8, 12).map((e) => (  
              <Card key={e.id}>
                <Link style={{ color: "inherit" }} to="/product">
                  <Image
                    src={e.image1}
                    alt="product"
                    id={e.id}
                    onClick={(e) => Detallar(e)}
                  />
                </Link>
                <Til>{e.snombre}</Til>
                <BodyBold1>COP$ {e.precio}</BodyBold1>
                <Body2R>
                  <b>Envío GRATIS</b> a Colombia cuando gastes más de USD 35.00
                  (COP 134,539.47) en artículos elegibles
                </Body2R>
                <BtnComprar id={e.id} onClick={(e) => Comprar(e)}>
                  Añadir al carrito
                </BtnComprar>

                <br />
              </Card>
            ))}
          </CardCont>
        </>
      </Cont>
    </div>
  );
};

export default Principal;
