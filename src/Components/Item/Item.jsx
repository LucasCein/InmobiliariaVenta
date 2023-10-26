import { Link } from "react-router-dom";
const Item = ({ id, imagen, nombre, descripcion }) => {
  return (
    <div key={id} className="card h-100">
      <img
        src={imagen ? imagen : "/defaultImage.jpg"}
        className="card-img-top img-thumbnail h-75"
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
