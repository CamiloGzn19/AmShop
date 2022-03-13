import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search";
import {
  Main,
  Sub,
  Sub2,
  Logo,
  LogoCar,
  BodyBold1,
  BodyRegular2,
  List,
  Element,
  BtnCar,
  Car,
} from "../styles/Navbar_styles";
import { useSelector } from "react-redux";

export const Navbar = () => {

  const [city, setCity] = useState("");

  useEffect(() => {
    getPosition();
  }, []);

  const nombre = useSelector((store) => store.login.name);

  // Geolocalizar

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        let city =
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "&key=AIzaSyB4LGKEmja14d6bBcaRSLNR31PZUZBqNaI";
        console.log(city);
        axios
          .get(city)
          .then((response) => {
            console.log(
              response.data.results[0].address_components[4].long_name
            );
            setCity(response.data.results[0].address_components[4].long_name);
          })
          .catch((e) => {
            console.log(e);
          });
      });
    }
  };


  return (
    <div>
      <Main>
        <div>
          <Link to="/principal">
            <Logo
              src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1646702912/Sprint%203/logo-amazon_b0xwkr.png"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <BodyBold1>Ciudad</BodyBold1>
          <BodyBold1>{city}</BodyBold1>
        </div>
        {/* <div>
          <Search type="text" />
        </div> */}
        <Search />
        <div>
          <BodyRegular2>Hola, {nombre}</BodyRegular2>
          <BodyBold1>Cuenta y listas</BodyBold1>
        </div>
        <div>
          <BodyRegular2>Devoluciones</BodyRegular2>
          <BodyBold1>Y pedidos</BodyBold1>
        </div>
        <BtnCar>
          <Link to="/cart">
            <Car>
              <LogoCar src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1646801074/Sprint%203/Carrito_uqqbi3.svg" />
              <BodyBold1>Carrito</BodyBold1>
            </Car>
          </Link>
        </BtnCar>
      </Main>
      <Sub>
        <div></div>
        <div>
          <List>
            <Element>Tarjetas de regalo</Element>
            <Element>Prime</Element>
            <Element>Los Más vendidos</Element>
            <Element>AmazonBasics</Element>
            <Element>Cómputo y Tabletas</Element>
            <Element>Lo Más Regalados</Element>
          </List>
        </div>
      </Sub>
      <Sub2>
        <List>
          <Element>Electrónicos</Element>
          <Element>Los Más vendidos</Element>
          <Element>Televisión y Video</Element>
          <Element>Cómputo y Tabletas</Element>
          <Element>Audio y Equipos de Sonido</Element>
        </List>
      </Sub2>
    </div>
  );
};

export default Navbar;
