import React from "react";

import { Main, Sub, List, BodyBold1, BodyRegu1, New } from "../styles/Footer_styles";

const Footer = () => {


  return (
    <div>
      <Main>
        <Sub>
          <div>
            <BodyBold1>Conócenos</BodyBold1>
            <List>
              <BodyRegu1>Trabajar en Amazon</BodyRegu1>
              <BodyRegu1>Información corporativa</BodyRegu1>
              <BodyRegu1>Departamento de prensa</BodyRegu1>
            </List>
          </div>
          <div>
            <BodyBold1>Gana dinero con nosotros</BodyBold1>
            <List>
              <BodyRegu1>Vender en Amazon</BodyRegu1>
              <BodyRegu1>Vender en Amazon Handmade</BodyRegu1>
              <BodyRegu1>Publica tu libro de Kindle</BodyRegu1>
              <BodyRegu1>Programa de afiliados</BodyRegu1>
              <BodyRegu1>Anuncia tus productos</BodyRegu1>
            </List>
          </div>
          <div>
            <BodyBold1>Podemos ayudarte</BodyBold1>
            <List>
              <BodyRegu1>Amazon y COVID-19</BodyRegu1>
              <BodyRegu1>Devolver o reemplazar productos</BodyRegu1>
              <BodyRegu1>Programa de afiliados</BodyRegu1>
              <BodyRegu1>Gestionar contenido y dispositivos</BodyRegu1>
              <BodyRegu1>Ayuda</BodyRegu1>
            </List>
          </div>
          <div>
            <BodyBold1>Métodos de pago</BodyBold1>
            <List>
              <BodyRegu1>Tarjetas de crédito y débito</BodyRegu1>
              <BodyRegu1>Tarjetas de regalo</BodyRegu1>
              <BodyRegu1>Meses sin intereses</BodyRegu1>
              <BodyRegu1>Amazon Cash</BodyRegu1>
              <BodyRegu1>Amazon Recargable</BodyRegu1>
            </List>
          </div>
        </Sub>
        <New>
          <img
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1646702912/Sprint%203/logo-amazon_b0xwkr.png"
            alt="logo"
          />
        </New>
      </Main>
    </div>
  );
};

export default Footer;
