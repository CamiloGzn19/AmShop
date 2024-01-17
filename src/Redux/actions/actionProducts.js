import { typesProducts } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "@firebase/firestore";

//Listar

export const listProductsAsync = (filter) => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const producto = [];
    const currentProduct = [];
    querySnapshot.forEach((doc) => {
      producto.push({
        ...doc.data(),
      });
    });

    producto.forEach((element) => {
      if (element.categoria === filter || element.categoría === filter) {
        currentProduct.push(element);
      } else if (filter === "Todos") {
        currentProduct.push(element);
      }
    });

    dispatch(listSync(currentProduct));
    dispatch(filterAsyn(filter));
  };
};

export const listSync = (producto) => {
  return {
    type: typesProducts.list,
    payload: producto,
  };
};

// Buscar

export const searchAsyn = (producto) => {
  return async (dispatch) => {
    const TraerCollection = collection(db, "Productos");
    const q = query(
      TraerCollection,
      where("snombre", ">=", producto, "<=", producto + "z")
    );
    const datos = await getDocs(q);

    const propio = [];

    datos.forEach((docu) => {
      propio.push(docu.data());
    });
    dispatch(searchSyn(propio));
  };
};

export const searchSyn = (propio) => {
  return {
    type: typesProducts.search,
    payload: propio,
  };
};

// Filtrar

export const filterAsyn = (filter) => {
  return {
    type: typesProducts.filter,
    payload: filter,
  };
};
