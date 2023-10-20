import { BsSearch } from "react-icons/bs";
import "./home.css";
import ReactSelect from "react-select";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore";
import { app } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";
import ReviewContainer from "../ReviewContainer/ReviewContainer";
import HomeCardItem from "../HomeCardItem/HomeCardItem";
import HomeCards from "../HomeCards/HomeCards";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
const Home = () => {
  const options = [
    { value: "departamento", label: "Departamento" },
    { value: "ph", label: "PH" },
    { value: "casa", label: "Casa" },
    { value: "terrenos", label: "Terrenos y Lotes" },
    { value: "cochera", label: "Cochera" },
  ];
  const [clickedButtonC, setClickedButtonC] = useState(true);
  const [clickedButtonA, setClickedButtonA] = useState(false);
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const dbFirestore = getFirestore(app)
    const queryCollection = query(collection(dbFirestore, 'propiedades'), limit(3),where('estado', '==', 'disponible'),where('visible', '==', true))
    getDocs(queryCollection)
      .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))

  }, [])
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div className="w-100">
        <img className="w-100 d-block" src="bg-home.jpg" alt="" />
        <div className="overlay-content">
          <h1 className="text-white">Mucho más que mudarte</h1>
          <div className="d-flex gap-3 justify-content-center">
            <button onClick={() => { setClickedButtonC(!clickedButtonC), setClickedButtonA(!clickedButtonA) }} className={clickedButtonC ? "btn btn-primary btn-lg" : "btn btn-light btn-lg"}>Quiero Comprar</button>
            <button onClick={() => { setClickedButtonA(!clickedButtonA), setClickedButtonC(!clickedButtonC) }} className={clickedButtonA ? "btn btn-primary btn-lg" : "btn btn-light btn-lg"}>Quiero Alquilar</button>
          </div>
          <div className="d-flex gap-1 ms-5 pe-2 ps-1">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe aquí"
            />
            <ReactSelect
              isMulti
              name="properties"
              options={options}
              className="basic-multi-select w-100 ms-2"
              classNamePrefix="select"
            />
            <button className="btn btn-primary ms-2">
              <BsSearch></BsSearch>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center card-container">
        <div className="d-flex align-items-center justify-content-center flex-column overlay-card">
          <h2 className="text-primary">Sumate a Remax</h2>
          <p className="text-center">
            En nuestra inmobiliaria, ofrecemos un servicio excepcional y
            personalizado para cada cliente. Nuestro equipo de agentes altamente
            capacitados trabaja incansablemente para garantizar que cada cliente
            tenga una experiencia de compra o venta de bienes raíces sin
            problemas y satisfactoria
          </p>
        </div>
        <img className="w-50 card-image" src="bg-remax-collection.jpg" alt="" />
      </div>
      <div className="d-flex flex-column align-items-center mt-5 ">
        <div>
          <h1>Nuevos alquileres disponibles</h1>
        </div>
        <div className="justify-content-center mt-5">
          <HomeCards productos={productos}></HomeCards>
        </div>
      </div>

      <div className="mt-5">
        <div className="d-flex justify-content-center my-4">
          <hr style={{ width: '75%' }} />
        </div>
        <ReviewContainer></ReviewContainer>
      </div>
      <div className="w-100 mt-5">
        <MDBFooter className='bg-dark text-center text-white'>
          <MDBContainer className='p-4 pb-0'>
            <section className='mb-4'>
              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='google' />
              </MDBBtn>
              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='instagram' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </section>
          </MDBContainer>

          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
              Luthisa
            </a>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default Home;
