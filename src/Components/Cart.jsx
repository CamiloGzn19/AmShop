import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Main,
  Sub,
  Own,
  Det,
  Desc,
  Imag,
  Title,
  BodyBold1,
  BodyReg1,
  Price,
  Stot,
  For,
  Titl,
  Lab,
  Inp,
  BtnPhoto,
  BtnAct,
  BtnAct2,
  Check,
  Pti,
} from "../styles/Cart-styles";
import { useDispatch, useSelector } from "react-redux";
import { fileUpload } from "../helpers/FileUpload";
import {
  deleteOwnProductAsync,
  listOwnProductsAsync,
  registerOwnProductAsync,
} from "../Redux/actions/actionOwnProducts";
import * as Yup from "yup";
import Editar from "./Editar";

const Cart = () => {
  // Utilidades

  const dispatch = useDispatch();
  // Estados generales

  const [modal, setModal] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);
  const [compras, setCompras] = useState([]);
  const [cant, setCant] = useState(0);

  // Formulario Formik y Yup - Añadir producto

  const formik = useFormik({
    initialValues: {
      nombre: "",
      codigo: "",
      categoria: "",
      marca: "",
      precio: "",
      descripcion: "",
      url: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required(),
      codigo: Yup.string().required(),
      categoria: Yup.string().required(),
      marca: Yup.string().required(),
      precio: Yup.string().required(),
      descripcion: Yup.string().required(),
      url: Yup.string().required(),
    }),
    onSubmit: (data) => {
      dispatch(registerOwnProductAsync(data));
    },
  });

  // Reset del formulario de

  const regProd = () => setTimeout(() => {
    window.location.reload();
  }, 2000);

  // Subir imagen

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        formik.initialValues.url = response;
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Obtener los productos que he publicado

  const propio = useSelector((state) => state.propios.propios);
  let price = propio.length;

  useEffect(() => {
    dispatch(listOwnProductsAsync());
    getCompras();
  }, []);

  // Editar los productos que he publicado

  const editar = (nombre) => {
    const traerProducto = propio.find((t) => t.nombre === nombre);
    setModal(true);
    setEnviarDatosModal(traerProducto);
  };

  // Obtener productos comprados

  const getCompras = () => {
    let data = localStorage.getItem("comprar");
    data = JSON.parse(data);
    setCant(data.length);
    setCompras(data);
  };

  // Borrar productos del carrito de

  const deleteCarrito = (e) => {
    let data = localStorage.getItem("comprar");
    data = JSON.parse(data);
    const id = e.target.id;
    const buscado = data.find((data) => data.id === Number(id));
    data.forEach((element, index) => {
      if (element.id === buscado.id) {
        data.splice(index, 1);
        localStorage.setItem("comprar", JSON.stringify(data));
        getCompras();
      }
    });
  };

  return (
    <div>
      <Main>
        <div>
          <Sub>
            <Title>Carrito</Title>
            <Pti>Precio</Pti>
            <hr />
            <br />
            {compras !== null ? (
              compras.map((c) => (
                <Det key={c.id}>
                  <div>
                    <Imag src={c.image1} />
                  </div>
                  <Desc>
                    <BodyBold1>{c.nombre}</BodyBold1>
                    <BodyReg1>Disponible</BodyReg1>
                    <BodyReg1>Envío Gratis a Colombia</BodyReg1>
                    <BodyReg1>Categoria: Televisión y sonido</BodyReg1>
                    <BodyReg1>
                      Cant: 1 |
                      <BtnAct id={c.id} onClick={(e) => deleteCarrito(e)}>
                        Eliminar
                      </BtnAct>{" "}
                      | Guardar para más tarde | Comparar con artículos
                      similares
                    </BodyReg1>
                  </Desc>
                  <div>
                    <Price>COP {c.precio}</Price>
                  </div>
                </Det>
              ))
            ) : (
              <BodyReg1> Aún no has comprado productos </BodyReg1>
            )}
            <hr />
            <br />
            <div>
              <Stot>Subtotal ( {cant} prod )</Stot>
            </div>
          </Sub>
          <Own>
            <For onSubmit={formik.handleSubmit}>
              <Titl>¿Quieres vender?</Titl>
              <h5>*Primero sube la foto</h5>
              <input
                id="fileSelector"
                type="file"
                autoComplete="off"
                className="form-control "
                placeholder="url image"
                style={{ display: "none" }}
                name="url"
                onChange={handleFileChanged}
                required
              />
              <BtnPhoto
                type="button"
                onClick={handlePictureClick}
              >
                Agregar la imagen del producto
              </BtnPhoto>
              <Lab>Nombre</Lab>
              <Inp
                type="text"
                name="nombre"
                autoComplete="off"
                placeholder="Ingresa nombre del producto"
                onChange={formik.handleChange}
                required
              />
              <Lab>Código</Lab>
              <Inp
                type="text"
                name="codigo"
                autoComplete="off"
                placeholder="Ingresa el código del producto"
                onChange={formik.handleChange}
                required
              />
              <Lab>Categoría</Lab>
              <Inp
                type="text"
                name="categoria"
                autoComplete="off"
                placeholder="Ingresa la categoría del producto"
                onChange={formik.handleChange}
                required
              />
              <Lab>Marca</Lab>
              <Inp
                type="text"
                name="marca"
                autoComplete="off"
                placeholder="Ingresa la marca del producto"
                onChange={formik.handleChange}
                required
              />
              <Lab>Precio</Lab>
              <Inp
                type="text"
                name="precio"
                autoComplete="off"
                placeholder="Ingresa el precio del producto"
                onChange={formik.handleChange}
                required
              />
              <Lab>Descripción</Lab>
              <Inp
                type="text"
                name="descripcion"
                autoComplete="off"
                placeholder="Ingresa la descripción del producto"
                onChange={formik.handleChange}
                required
              />

              <br />
              <Check type="submit" onClick={() => regProd()}>Registrar</Check>
            </For>
          </Own>
          <Sub>
            <Title>Mis productos</Title>
            <Pti>Precio</Pti>
            <hr />
            <br />
            {propio.map((e) => (
              <Det key={e.nombre}>
                <div>
                  <Imag src={e.url} />
                </div>
                <Desc>
                  <BodyBold1>{e.nombre}</BodyBold1>
                  <BodyReg1>Disponible</BodyReg1>
                  <BodyReg1>Envío Gratis a Colombia</BodyReg1>
                  <BodyReg1>Categoria: {e.categoria}</BodyReg1>
                  <BodyReg1>
                    Cant: 1 |
                    <BtnAct
                      onClick={() => dispatch(deleteOwnProductAsync(e.nombre))}
                    >
                      Eliminar
                    </BtnAct>
                    | <BtnAct2 onClick={() => editar(e.nombre)}>Editar</BtnAct2>{" "}
                    | Comparar con artículos similares
                  </BodyReg1>
                </Desc>
                <div>
                  <Price>COP$ {e.precio}</Price>
                </div>
              </Det>
            ))}
            <hr />
            <br />
            <div>
              <Stot>Subtotal ( {price} prod )</Stot>
            </div>
          </Sub>
          {modal === true ? <Editar modal={enviarDatosModal} /> : ""}
        </div>
      </Main>
    </div>
  );
};

export default Cart;
