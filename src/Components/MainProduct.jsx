import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProductsAsync } from "../Redux/actions/actionProducts";
import {
  Main,
  Prin,
  PhoDet,
  Desc,
  ImDiv,
  ImgBtn,
  Card,
  HeadLine,
  SubTitle1,
  Bb,
  Br,
  BodyRegu1,
  BodyRegu2,
  BodyRegu1B,
  BodyRegu1B2,
  BodyBold1,
  BodyBold2,
  BtnDet,
  BtnCarrito,
  BtnCompra,
  DescTitle,
  ContList,
  List,
} from "../styles/MainProduct_styles";
import ListProduct1 from "./ListProduct1";
import ListProduct2 from "./ListProduct2";
import Opinions from "./Opinions";

const MainProduct = () => {
  const [carrito, setCarrito] = useState([]);
  const [product, setProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const [current, setCurrent] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductsAsync());
    getProducts();
  }, [dispatch]);

  const getProducts = () => {
    let data = localStorage.getItem("producto");
    data = JSON.parse(data);
    setProducts(data);
    setImages(data[0].imagenes[0]);
    setImages2(data[0].imagenes[1]);
    setImages3(data[0].imagenes[2]);
    setCurrent(data[0].imagenes[0]);
  };

  console.log(product);

  const list = useSelector((store) => store.products.products);

  // Comprar

  const Comprar = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const comprar = list.find((prod) => prod.id === Number(id));
    setCarrito([...carrito, comprar]);
    window.localStorage.setItem(
      "comprar",
      JSON.stringify([...carrito, comprar])
    );
  };

  const ComprarAhora = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const comprar = list.find((prod) => prod.id === Number(id));
    setCarrito([...carrito, comprar]);
    window.localStorage.setItem(
      "comprar",
      JSON.stringify([...carrito, comprar])
    );
    setTimeout(() => {
      window.location.href = "cart";
    }, 10);
  };

  // Cambiar imagen

  const ChangeImage = () => {
    setCurrent(images2);
  };

  const ChangeImage2 = () => {
    setCurrent(images3);
  };

  const resetImage = () => {
    setCurrent(images);
  };

  return (
    <div>
      <Link style={{ color: "inherit" }} to="/principal">
        <Prin>&lt; Volver a los resultados</Prin>
      </Link>
      {product.map((e) => (
        <Main>
          <div key={e.id}>
            <PhoDet>
              <ImDiv>
                <BtnDet>
                  <ImgBtn src={images} onClick={resetImage} />
                </BtnDet>
                <BtnDet>
                  <ImgBtn src={images2} onClick={ChangeImage} />
                </BtnDet>
                <BtnDet>
                  <ImgBtn src={images3} onClick={ChangeImage2} />
                </BtnDet>
              </ImDiv>
              <div>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Principal",
                      src: current,
                      width: 600,
                      height: 600,
                      sizes:
                        "(max-width: 480px) 100vw, (max-width: 1900px) 20vw",
                    },
                    largeImage: {
                      src: current,
                      alt: "Zoom",
                      width: 1000,
                      height: 1000,
                    },
                  }}
                />
              </div>
            </PhoDet>
          </div>

          <div>
            <Desc>
              <HeadLine>{e.nombre}</HeadLine>
              <BodyRegu1B2> Marca: {e.marca}</BodyRegu1B2>
              <br />
              <hr />
              <br />
              <BodyRegu1>
                Precio: <Br> {e.precio} </Br>
                <b>Envío GRATIS.</b> <Bb>Detalles</Bb>
              </BodyRegu1>
              <BodyRegu2>
                Hasta <b>18 meses sin intereses</b> de $5,592.76.{" "}
                <Bb>
                  Ver mensualidades Solicita tu tarjeta Amazon Recargable{" "}
                </Bb>
                y obtén $100 de descuento en tu primera compra mayor a $500
              </BodyRegu2>

              <BodyRegu1>
                Precio: <b>{e.precio}</b>
              </BodyRegu1>
              <BodyRegu1>
                Color: <b>{e.color}</b>
              </BodyRegu1>
              <br />
              <hr />
              <br />
              <DescTitle>Acerca de este artículo</DescTitle>
              <ContList>
                <List>- {e.description[0]}</List>
                <List>- {e.description[1]}</List>
                <List>- {e.description[2]}</List>
                <List>- {e.description[3]}</List>
                <List>- {e.description[4]}</List>
              </ContList>
            </Desc>
          </div>
          <div>
            <Card>
              <SubTitle1>COP$ {e.precio}</SubTitle1>
              <div>
                <BodyBold1>
                  Envío GRATIS. <Bb>Detalles</Bb>
                </BodyBold1>
              </div>
              <BodyRegu1>
                Llega:<b> dic 15 - 28</b>
              </BodyRegu1>
              <BodyBold2>Puede que lo recibas depués de Navidad</BodyBold2>
              <BtnCarrito id={e.id} onClick={(e) => Comprar(e)}>
                Agregar al Carrito
              </BtnCarrito>
              <BtnCompra id={e.id} onClick={(e) => ComprarAhora(e)}>
                Comprar ahora
              </BtnCompra>
              <BodyRegu1B>Transación segura</BodyRegu1B>
            </Card>
          </div>
        </Main>
      ))}
      <ListProduct1 />
      <ListProduct2 />
      <Opinions />
    </div>
  );
};

export default MainProduct;
