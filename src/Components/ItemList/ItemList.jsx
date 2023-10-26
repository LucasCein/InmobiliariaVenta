import { Col, Container, Row } from "react-bootstrap"
import Item from "../Item/Item"
const ItemList = ({ productos, home }) => {

    return (
        <Row md={'auto'} xl={'auto'} className={"w-100"}>
            {
                productos.map(({ id, descripcion, imagen, category, nombre }) =>
                    <Col key={id} md={'auto'}>
                        <Item key={id} id={id} imagen={imagen} nombre={nombre} descripcion={descripcion} />
                    </Col>
                )

            }
        </Row>
    )
}

export default ItemList