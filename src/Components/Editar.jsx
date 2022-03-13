import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
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
    codigo: modal.codigo,
    descripcion: modal.descripcion,
    precio: modal.precio,
  });
  const { nombre, categoria, codigo, descripcion, precio } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAsyn(codigo, values));
    reset();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  placeholder="Nuevo nombre"
                  value={nombre}
                  onChange={handleInputChange}
                />

                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  type="text"
                  name="categoria"
                  placeholder="Nueva categoria"
                  value={categoria}
                  onChange={handleInputChange}
                />

                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  type="text"
                  name="descripcion"
                  placeholder="Nueva descripcion"
                  value={descripcion}
                  onChange={handleInputChange}
                />

                <Form.Label>Codigo</Form.Label>
                <Form.Control
                  type="text"
                  name="codigo"
                  placeholder="El código contiene dos letras y 3 numeros"
                  value={codigo}
                  onChange={handleInputChange}
                />

                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="text"
                  name="precio"
                  placeholder="El precio en Pesos Colombiano"
                  value={precio}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button
                type="submit"
                variant="primary"
                onClick={() => {
                  handleClose();
                  handleSubmit();
                }}
              >
                Guardar cambios
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default Editar;
