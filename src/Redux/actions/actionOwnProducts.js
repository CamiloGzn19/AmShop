import { typesOwnProducts } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";

// Guardar producto

export const registerOwnProductAsync = (newProduct) => {
  return (dispatch) => {
    addDoc(collection(db, "propios"), newProduct)
      .then((resp) => {
        dispatch(registerProductSync(newProduct));
        dispatch(listOwnProductsAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const registerProductSync = (product) => {
  return {
    type: typesOwnProducts.register,
    payload: product,
  };
};

// Borrar producto

export const deleteOwnProductAsync = (nombre) => {
  return async (dispatch) => {
    const estCollection = collection(db, "propios");
    const q = query(estCollection, where("nombre", "==", nombre));

    const datos = await getDocs(q);
    datos.forEach((docu) => {
      deleteDoc(doc(db, "propios", docu.id));
    });
    dispatch(deleteSync(nombre));
  };
};

export const deleteSync = (product) => {
  return {
    type: typesOwnProducts.delete,
    payload: product,
  };
};

// Listar 

export const listOwnProductsAsync = () => {
    return async (dispatch) => {
      const querySnapshot = await getDocs(collection(db, "propios"));
      const producto = [];
      querySnapshot.forEach((doc) => {
        producto.push({
          ...doc.data(),
        });
      });
      dispatch(listOwnSync(producto));
    };
  };
  
  export const listOwnSync = (producto) => {
    return {
      type: typesOwnProducts.read,
      payload: producto,
    };
  };

  // Editar

  export const editAsyn =(codigo, product)=>{
    console.log(codigo);
    return async (dispatch)=>{
        const traerCollection = collection(db, "propios")
        const q = query(traerCollection, where("codigo", "==", codigo))
        const datosQ = await getDocs(q)
        let id
        datosQ.forEach( async (docu) =>{
            id= docu.id 
        })
        console.log(id)
       
        const docRef = doc(db, "propios", id)
        await updateDoc(docRef, product)
        .then(()=>listOwnProductsAsync())


    }
}

export const editSyn = (codigo, product)=>{
    return{
        type:typesOwnProducts.edit,
        payload: product
    }
}