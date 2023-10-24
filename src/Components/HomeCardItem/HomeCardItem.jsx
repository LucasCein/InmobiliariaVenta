import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./cardItem.css";
import { Link } from "react-router-dom";
const HomeCardItem = ({ id, imagen, nombre, descripcion }) => {
  console.log("Imagen:", imagen);
  return (
    <MDBCard>
      <MDBCardImage
        className="cardHeight"
        src={imagen || "/defaultImage.jpg"}
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle>{nombre}</MDBCardTitle>
        <MDBCardText>{descripcion}</MDBCardText>
        <Link to={`/detalleItem/${id}`}>
          <MDBBtn>Detalle</MDBBtn>
        </Link>
        {/* <MDBBtn href="#" to={`/detalleItem/${id}`}>
          Detalle
        </MDBBtn> */}
      </MDBCardBody>
    </MDBCard>
  );
};

export default HomeCardItem;
