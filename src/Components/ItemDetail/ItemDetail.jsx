import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "react-bootstrap/Form";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./ItemDetail.css";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  setDoc,
  addDoc,
  query,
  where,
  doc,
} from "firebase/firestore";
import { app } from "../../firebase/config";

import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [dateSince, setDateSince] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());

  console.log("Fecha: ", new Date());

  const dbFirestore = getFirestore(app);
  useEffect(() => {
    const queryCollection = query(
      collection(dbFirestore, "propiedades"),
      where("id", "==", id)
    );
    getDocs(queryCollection)
      .then((res) => {
        setProducto(res.docs[0].data());
        console.log(res.docs[0].data());
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleReservar = () => {
    addDoc(collection(dbFirestore, "reservas"), {
      idPropiedad: `/propiedades/${id}`,
      activo: true,
      fechaDesde: dateSince,
      fechaHasta: dateTo,
    })
      .then((res) => {
        console.log("REserva creada con el Id: ", res.id);
      })
      .catch((error) => console.log("ERROR: ", error))
      .finally(alert("FIJATE"));
  };

  return (
    <div className="background-card">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className="w-100 h-100 justify-content-center align-items-center d-flex flex-column">
          <div className="border border-dark rounded div-imagen p-0 m-0">
            <MDBCardImage
              src={producto.imagen || "/defaultImage.jpg"}
              position="top"
              className="h-100 w-100"
              alt="..."
            />
          </div>
          <MDBCard className="card-detail">
            <MDBCardBody>
              <MDBCardTitle>{producto.nombre}</MDBCardTitle>
              <MDBCardText>{producto.descripcion}</MDBCardText>
              <MDBCardTitle>Ubicación</MDBCardTitle>
              <MDBCardText>País: {producto.pais}</MDBCardText>
              <MDBCardText>Región: {producto.region}</MDBCardText>
              <MDBCardText>
                Dirección: {producto.calle} {producto.altura}
              </MDBCardText>
              <MDBCardTitle>Datos</MDBCardTitle>
              <MDBCardText>
                Cantidad de Cuartos: {producto.cantCuarto}
              </MDBCardText>
              <MDBCardText>
                Cantidad de Baños:{" "}
                {producto.cantBaños == "" ? 0 : producto.cantBaños}
              </MDBCardText>
              <MDBCardText>Area: {producto.area} m²</MDBCardText>
              <MDBCardTitle>Datos Extra</MDBCardTitle>
              <MDBCardText>
                Aire Acondicionado: {producto.aire ? "Si" : "No"}{" "}
              </MDBCardText>
              <MDBCardText>
                Estacionamiento: {producto.estacionamiento ? "Si" : "No"}{" "}
              </MDBCardText>
              <MDBCardText>
                Lavarropa: {producto.lavarropa ? "Si" : "No"}{" "}
              </MDBCardText>
              <MDBCardText>WiFi: {producto.wifi ? "Si" : "No"} </MDBCardText>
              {producto.tipo == "venta" ? (
                <>
                  <MDBCardTitle>Contactanos</MDBCardTitle>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Ingresá tu Mail"
                  />
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    placeholder="Ingresa tu consulta.."
                  >
                    <Form.Label>Escribí tu consulta...</Form.Label>
                    <Form.Control as="textarea" className="mb-3 " />
                    <Button variant="success" className="justify-content-end">
                      Enviar
                    </Button>
                  </Form.Group>
                </>
              ) : (
                <>
                  <MDBCardTitle>Reservá</MDBCardTitle>
                  <div className="d-flex mb-3">
                    <div className="colCalendar d-flex flex-column align-items-center">
                      <MDBCardTitle className="mb-3">Desde</MDBCardTitle>
                      <Calendar
                        onChange={setDateSince}
                        value={dateSince}
                        className="w-100"
                      />
                    </div>
                    <div className="colCalendar  d-flex flex-column align-items-center">
                      <MDBCardTitle className="mb-3">Hasta</MDBCardTitle>
                      <Calendar
                        onChange={setDateTo}
                        value={dateTo}
                        className="w-100"
                      />
                    </div>
                  </div>
                  <Button
                    variant="success"
                    className="justify-content-end"
                    onClick={() => handleReservar()}
                  >
                    Reservar
                  </Button>
                </>
              )}
            </MDBCardBody>
          </MDBCard>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
