import { Link } from "react-router-dom";
import './item.css'
const Item = ({ id, imagen, nombre, descripcion, precio }) => {
  return (
    <div key={id} className="card fixed-card mb-4">
      <img
        src={imagen ? imagen : "/defaultImage.jpg"}
        className="card-img card-img-top img-thumbnail"
        alt="imagen-card"
      />
      <div className="card-body">
        <h6>{nombre}</h6>
        <p>{descripcion}</p>
        <h5 className="card-text text-end">{parseInt(precio).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}</h5>
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
