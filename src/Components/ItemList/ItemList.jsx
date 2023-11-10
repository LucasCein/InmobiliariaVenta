import { Col, Container, Row } from "react-bootstrap";
import Item from "../Item/Item";
import { FaSadTear } from "react-icons/fa"; // Importa un ícono de reacción de FontAwesome

const ItemList = ({ productos, home }) => {
  console.log("ITEMLIST", productos);
  return (
    <Row md={"auto"} xl={"auto"} className={"w-100"}>
      {productos.length > 0 ? (
        productos.map(
          ({ id, descripcion, imagen, category, nombre, precio }) => (
            <Col key={id} md={"auto"}>
              <Item
                key={id}
                id={id}
                imagen={imagen}
                nombre={nombre}
                descripcion={descripcion}
                precio={precio}
              />
            </Col>
          )
        )
      ) : (
        <Container className="text-center mt-5">
          <Row>
            <Col>
              <FaSadTear size={50} className="text-muted mb-3" />
              <h3 className="text-muted">¡Ups! No hay resultados</h3>
              <p className="text-muted">
                No pudimos encontrar lo que estás buscando. ¡Prueba con otra
                búsqueda!
              </p>
            </Col>
          </Row>
        </Container>
      )}
    </Row>
  );
};

export default ItemList;
