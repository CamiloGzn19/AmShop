import { useFormik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import { Busc, BtnBusc, All, Catg } from "../styles/Navbar_styles";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { searchAsyn } from "../Redux/actions/actionProducts";

const Search = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: Yup.object({
      search: Yup.string().required(),
    }),
    onSubmit: ({ search }) => {
      console.log(search);
      dispatch(searchAsyn(search));
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <All>
          <Catg name="cars" id="cars">
            <option value="Todos los departamentos">Todos los departamentos</option>
            <option value="Electrónicos">Electrónicos</option>
            <option value="Hogar y cocina">Hogar y cocina</option>
            <option value="Artículos para mascotas">Artículos para mascotas</option>
          </Catg>
          <Busc name="search" onChange={formik.handleChange} />
          <BtnBusc type="submit" className="btn btn-outline-dark">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7C0 3.14585 3.14585 0 7 0C10.8541 0 14 3.14585 14 7C14 8.748 13.348 10.345 12.2812 11.5742L12.707 12H14L20 18L18 20L12 14V12.707L11.5742 12.2812C10.345 13.348 8.748 14 7 14C3.14585 14 0 10.8541 0 7ZM12 7C12 4.22673 9.77327 2 7 2C4.22673 2 2 4.22673 2 7C2 9.77327 4.22673 12 7 12C9.77327 12 12 9.77327 12 7Z"
                fill="#333333"
              />
            </svg>
          </BtnBusc>
        </All>
      </Form>
    </div>
  );
};

export default Search;
