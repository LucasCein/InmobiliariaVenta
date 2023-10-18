import { BsSearch } from "react-icons/bs";
import "./home.css";
import ReactSelect from "react-select";
const Home = () => {
  const options = [
    { value: "departamento", label: "Departamento" },
    { value: "ph", label: "PH" },
    { value: "casa", label: "Casa" },
    { value: "terrenos", label: "Terrenos y Lotes" },
    { value: "cochera", label: "Cochera" },
  ];

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div className="w-100">
        <img className="w-100 d-block" src="bg-home.jpg" alt="" />
        <div className="overlay-content">
          <h1 className="text-white">Mucho más que mudarte</h1>
          <div className="d-flex gap-3 justify-content-center">
            <button className="btn btn-light btn-lg">Quiero Comprar</button>
            <button className="btn btn-light btn-lg">Quiero Alquilar</button>
          </div>
          <div className="d-flex gap-1">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe aquí"
            />
            <ReactSelect
              isMulti
              name="properties"
              options={options}
              className="basic-multi-select w-100"
              classNamePrefix="select"
            />
            <button className="btn btn-primary">
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
      <div className="d-flex flex-column align-items-center mt-4">
        <div>
          <h1>Nuevos alquileres disponibles</h1>
        </div>
        <div className="d-flex flex-row w-50 justify-content-center gap-5 mt-5">
          <img src="bg-remax-collection.jpg" className="w-50" />
          <img src="bg-remax-collection.jpg" className="w-50" />
          <img src="bg-remax-collection.jpg" className="w-50" />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-4">
        <div>
          <h1>Clientes satisfechos</h1>
        </div>
        <div className="d-flex flex-row w-75 justify-content-center gap-5 mt-5">
          <div className="bg-primary">
            <p className="text-center">
              En nuestra inmobiliaria, ofrecemos un servicio excepcional y
              personalizado para cada cliente. Nuestro equipo de agentes
              altamente capacitados trabaja incansablemente para garantizar que
              cada cliente tenga una experiencia de compra o venta de bienes
              raíces sin problemas y satisfactoria
            </p>
          </div>
          <div className="bg-primary">
            <p className="text-center">
              En nuestra inmobiliaria, ofrecemos un servicio excepcional y
              personalizado para cada cliente. Nuestro equipo de agentes
              altamente capacitados trabaja incansablemente para garantizar que
              cada cliente tenga una experiencia de compra o venta de bienes
              raíces sin problemas y satisfactoria
            </p>
          </div>
          <div className="bg-primary">
            <p className="text-center">
              En nuestra inmobiliaria, ofrecemos un servicio excepcional y
              personalizado para cada cliente. Nuestro equipo de agentes
              altamente capacitados trabaja incansablemente para garantizar que
              cada cliente tenga una experiencia de compra o venta de bienes
              raíces sin problemas y satisfactoria
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 bg-warning w-100 m-0">
        <div className="row">
          <div className="col-sm text-center">asd</div>
          <div className="col-sm text-center">asd</div>
          <div className="col-sm text-center">asd</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
