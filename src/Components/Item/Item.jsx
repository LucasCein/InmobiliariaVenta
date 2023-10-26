import { Link } from "react-router-dom";
import './item.css'
const Item = ({ id, imagen, nombre, descripcion }) => {
  return (
    <div key={id} className="card fixed-card">
      <img
        src={imagen ? imagen : "/defaultImage.jpg"}
        className="card-img card-img-top img-thumbnail"
        alt="imagen-card"
      />
      <div className="card-body">
        <h6>{nombre}</h6>
        <p>{descripcion}</p>
      </div>
      <div className="card-footer text-center">
        <Link to={`/detalleItem/${id}`}>
          <button className="btn btn-outline-dark ">Detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
