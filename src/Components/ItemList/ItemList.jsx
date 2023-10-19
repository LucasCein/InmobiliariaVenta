import { Col, Container, Row } from "react-bootstrap"
import Item from "../Item/Item"
const ItemList = ({productos}) => {
  return (
    <div>
            <Row xs={1} md={4} className="ms-2 me-2 mt-2">
            {
                productos.map(({id, descripcion, imagen, category, nombre}) => 
                    <Col key={id} className="mb-2">
                        <Item key={id} id={id} imagen={imagen} nombre={nombre} descripcion={descripcion} />
                    </Col>
                )
                
            }
            </Row>

        </div>
  )
}

export default ItemList