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
  BtnCompra,
  Car,
  Loc,
  Cit,
} from "../styles/Navbar_styles";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../Redux/actions/actionLogin";

export const Navbar = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  useEffect(() => {
    getPosition();
  }, []);

  const nombre = useSelector((store) => store.login.name);
  const nombre2 = useSelector((store) => store.register.name);

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
            setCity(response.data.results[0].address_components[0].long_name);
          })
          .catch((e) => {
            console.log(e);
          });
      });
    }
  };

  // Logout

  const handleLogout = () => {
    dispatch(logoutAsync());
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
        <Loc>
          <img
            src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1647206826/Sprint%203/local_mij8rn.svg"
            alt="local"
          />
          <Cit>
            <BodyRegular2>Ciudad</BodyRegular2>
            <BodyBold1>{city}</BodyBold1>
          </Cit>
        </Loc>
        <Search />
        <div>
          <BodyRegular2>
            Hola {nombre2} {nombre}
          </BodyRegular2>
          <BtnCompra>
            <BodyRegular2 onClick={handleLogout}>Cerrar Sesión</BodyRegular2>
          </BtnCompra>
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
        <List>
          <Element>Tarjetas de regalo</Element>
          <Element>Prime</Element>
          <Element>Los Más vendidos</Element>
          <Element>AmazonBasics</Element>
          <Element>Cómputo y Tabletas</Element>
          <Element>Lo Más Regalados</Element>
        </List>
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
