import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeCardItem from '../HomeCardItem/HomeCardItem';

const HomeCards = ({ productos }) => {
  // Crear una copia de los productos actuales
  const productosAMostrar = [...productos];

  // Definir el producto por defecto
  const productoDefault = {
    id: 'default',
    descripcion: 'Descripción predeterminada',
    imagen: 'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg', // Reemplazar con el path a tu imagen por defecto
    nombre: 'Nombre predeterminado',
  };

  // Completar los productos hasta que haya al menos 3
  while (productosAMostrar.length < 3) {
    // Añadir un producto por defecto con un ID único
    productosAMostrar.push({ ...productoDefault, id: `default-${productosAMostrar.length}` });
  }

  return (
    <div>
      <Row xs={1} md={4} className="mt-2 justify-content-center">
        {productosAMostrar.map((producto) => (
          <Col key={producto.id} className="mb-2">
            <HomeCardItem
              id={producto.id}
              imagen={producto.imagen}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeCards;
