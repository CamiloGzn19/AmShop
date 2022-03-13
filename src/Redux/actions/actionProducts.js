import { typesProducts } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
} from "@firebase/firestore";

//Listar

export const listProductsAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const producto = [];
    querySnapshot.forEach((doc) => {
      producto.push({
        ...doc.data(),
      });
    });
    dispatch(listSync(producto));
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
      const q = query(TraerCollection, where("snombre", ">=", producto, "<=", producto + "z" ))
      const datos = await getDocs(q)
              
      const propio = []

      datos.forEach((docu) => {
          propio.push(docu.data())
      })
      dispatch(searchSyn(propio))
  }
}

export const searchSyn = (propio) => {
  return{
      type: typesProducts.search,
      payload: propio
  }
} 

