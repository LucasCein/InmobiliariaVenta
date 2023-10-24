import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
import { app } from "../../firebase/config";

import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dbFirestore = getFirestore(app);
    const queryCollection = query(
      collection(dbFirestore, "propiedades"),
      where("id", "==", id)
    );
    getDocs(queryCollection)
      .then((res) => setProducto(res.docs[0].data()))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className="w-100 h-100 justify-content-center align-items-center d-flex flex-column">
          <div className="border border-dark rounded w-50 h-50">
            <MDBCardImage
              src={producto.imagen || "/defaultImage.jpg"}
              position="top"
              alt="..."
            />
          </div>
          <MDBCard className="w-100">
            <MDBCardBody>
              <MDBCardTitle>{producto.nombre}</MDBCardTitle>
              <MDBCardText>{producto.descripcion}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
