import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import CustomSpinner from '../CustomSpinner/CustomSpinner'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { app } from '../../firebase/config'
const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { cpd } = useParams()
  useEffect(() => {
    const dbFirestore = getFirestore(app)
    const queryCollection = query(collection(dbFirestore, 'propiedades'),where('estado', '==', 'disponible'),where('visible', '==', true))
    const queryCollectionFiltered = !cpd ? queryCollection : query(
      queryCollection,
      where('tipo', '==', cpd),
    )

    getDocs(queryCollectionFiltered)
      .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))


  }, [cpd])

  return (
    <section >
      {isLoading ?
        <CustomSpinner />
        : <>
          {cpd == 'venta' ? <h2 className="ms-4">Inmuebles para {cpd.charAt(0).toUpperCase() + cpd.slice(1)}</h2> : <h2 className="ms-4">Inmuebles para {cpd.charAt(0).toUpperCase() + cpd.slice(1)}</h2>}
          <ItemList productos={productos} home={false}/>
        </>
      }

    </section>
  )
}

export default ItemListContainer