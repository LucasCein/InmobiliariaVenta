import { Col, Row } from "react-bootstrap"
import HomeCardItem from "../HomeCardItem/HomeCardItem"

const HomeCards = ({productos}) => {
  return (
    <div>
            <Row xs={1} md={4} className="mt-2 justify-content-center">
                {
                    productos.map(({ id, descripcion, imagen, nombre }) =>
                        <Col key={id} className="mb-2">
                            <HomeCardItem key={id} id={id} imagen={imagen} nombre={nombre} descripcion={descripcion} />
                        </Col>
                    )

                }
            </Row>

        </div>
  )
}

export default HomeCards