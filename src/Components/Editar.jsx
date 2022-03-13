import React, { useState } from "react";
import { Own, For, Titl, Lab, Inp, Check } from "../styles/Editar_styles";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { editAsyn } from "../Redux/actions/actionOwnProducts";

const Editar = ({ modal }) => {
  console.log(modal);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  };
  const [values, handleInputChange, reset] = useForm({
    nombre: modal.nombre,
    categoria: modal.categoria,
    marca: modal.marca,
    codigo: modal.codigo,
    precio: modal.precio,
    descripcion: modal.descripcion,
  });
  const { nombre, codigo, descripcion, precio, categoria } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAsyn(codigo, values));
    reset();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <Own show={show}>
        <For onSubmit={handleSubmit}>
          <Titl>Editar producto</Titl>
          <Lab>Nombre</Lab>
          <Inp
            type="text"
            name="nombre"
            placeholder="Nuevo nombre"
            value={nombre}
            onChange={handleInputChange}
          />
          <Lab>Categoria</Lab>
          <Inp
            type="text"
            name="categoria"
            autoComplete="off"
            placeholder="Nueva categoria"
            value={categoria}
            onChange={handleInputChange}
          />
          <Lab>Precio</Lab>
          <Inp
            type="text"
            name="precio"
            placeholder="Nuevo precio"
            value={precio}
            onChange={handleInputChange}
          />
          <Lab>Descripción</Lab>
          <Inp
            type="text"
            name="descripcion"
            placeholder="Nueva descripcion"
            value={descripcion}
            onChange={handleInputChange}
          />

          <br />

          <Check
            type="submit"
            variant="primary"
            onClick={() => {
              handleClose();
              handleSubmit();
            }}
          >
            Guardar cambios
          </Check>
          <Check onClick={() => handleClose()}>Cerrar</Check>
        </For>
      </Own>
    </>
  );
};

export default Editar;
