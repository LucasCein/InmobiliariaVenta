import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import './cardItem.css'
const HomeCardItem = ({id,imagen,nombre,descripcion}) => {
  return (
    <MDBCard >
      <MDBCardImage className='cardHeight' src={imagen || '/defaultImage.jpg'} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{nombre}</MDBCardTitle>
        <MDBCardText>
          {descripcion}
        </MDBCardText>
        <MDBBtn href='#'>Detalle</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

export default HomeCardItem