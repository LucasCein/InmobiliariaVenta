import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { app } from "../../firebase/config";
import SideFilters from "../SideFilters/SideFilters";
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [productosToShow, setProductosToShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countrySelected, setCountrySelected] = useState("");
  const [regionSelected, setRegionSelected] = useState("");
  const [estacionamiento, setEstacionamiento] = useState(false);
  const [aireAcondicionado, setAireAcondicionado] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [lavarropas, setLavarropas] = useState(false);
  const [applyFilters, setApplyFilters] = useState(false);
  const [isLoadingFilters, setIsLoadingFilters] = useState(false);
  const { cpd } = useParams();
  /* console.log("estacionamiento", estacionamiento);
  console.log("aireAcondicionado", aireAcondicionado);
  console.log("lavarropas", lavarropas);
  console.log("wifi", wifi);
  console.log("filter", applyFilters);
  console.log("pais", countrySelected);
  console.log("region", regionSelected); */
  // useEffect(() => {
  //   const dbFirestore = getFirestore(app)
  //   const queryCollection = query(collection(dbFirestore, 'propiedades'), where('estado', '==', 'disponible'), where('visible', '==', true))
  //   const queryCollectionFiltered = !cpd ? queryCollection : query(
  //     queryCollection,
  //     where('tipo', '==', cpd),
  //   )
  //   const filter = applyFilters ? query(queryCollectionFiltered,where('estacionamiento', '==', estacionamiento),where('aireAcondicionado', '==', aireAcondicionado),where('lavarropas', '==', lavarropas),where('wifi', '==', wifi)) : queryCollectionFiltered
  //   getDocs(filter)
  //     .then(res => {setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))),console.log(res.docs.map(producto => ({ id: producto.id, ...producto.data() })))})
  //     .catch(error => console.log(error))
  //     .finally(() => setIsLoading(false))

  // }, [cpd, estacionamiento, aireAcondicionado, lavarropas, wifi, applyFilters])
  useEffect(() => {
    const dbFirestore = getFirestore(app);
    const baseQuery = query(
      collection(dbFirestore, "propiedades"),
      where("estado", "==", "disponible"),
      where("visible", "==", true),
      where("vendido", "==", false)
    );

    let queries = [baseQuery];

    // if (applyFilters) {
    //   queries = [
    //     query(baseQuery, where("estacionamiento", "==", estacionamiento)),
    //     query(baseQuery, where("aireAcondicionado", "==", aireAcondicionado)),
    //     query(baseQuery, where("lavarropas", "==", lavarropas)),
    //     query(baseQuery, where("wifi", "==", wifi)),
    //   ];
    // }

    if (cpd) {
      queries = queries.map((q) => query(q, where("tipo", "==", cpd)));
    }
    console.log("render");
    // if (regionSelected !== "") {
    //   queries = queries.map((q) =>
    //     query(q, where("region", "==", regionSelected))
    //   );
    // }

    // Map to store unique documents
    const uniqueDocs = {};

    const fetchDocs = async () => {
      for (let q of queries) {
        const res = await getDocs(q);
        for (let doc of res.docs) {
          uniqueDocs[doc.id] = { id: doc.id, ...doc.data() };
        }
      }

      const results = Object.values(uniqueDocs);
      /* console.log(results); */
      setProductos(results);
      setProductosToShow(results);
      /* console.log(results); */
    };

    fetchDocs()
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false), setIsLoadingFilters(false);
        filtrar();
      });
  }, [
    cpd,
    estacionamiento,
    aireAcondicionado,
    lavarropas,
    wifi,
    applyFilters,
    countrySelected,
    regionSelected,
  ]);
  const filtrar = () => {
    if (aireAcondicionado) {
      const productosFiltered = productos.filter((p) => p.aire == true);
      setProductosToShow(productosFiltered);
    }
    if (lavarropas) {
      const productosFiltered = productos.filter((p) => p.lavarropa == true);
      setProductosToShow(productosFiltered);
    }
    if (estacionamiento) {
      const productosFiltered = productos.filter(
        (p) => p.estacionamiento == true
      );
      setProductosToShow(productosFiltered);
    }
    if (wifi) {
      const productosFiltered = productos.filter((p) => p.wifi == true);
      setProductosToShow(productosFiltered);
    }
    if (countrySelected != "") {
      console.log("QWEQWEEQ");
      const productosFiltered = productos.filter(
        (p) => p.pais == countrySelected
      );
      console.log("FILTROAD PAIS", productosFiltered);
      setProductosToShow(productosFiltered);
    }

    if (regionSelected != "") {
      const productosFiltered = productos.filter(
        (p) => p.region == regionSelected
      );
      setProductosToShow(productosFiltered);
    }

    console.log("productosToShow ASSSS", productosToShow);
    console.log("productos ASSSSS", productos);
  };

  return (
    <section>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <div>
          {
            <h2 className="ms-4 mb-5 mt-2 ms-5">
              Inmuebles para {cpd.charAt(0).toUpperCase() + cpd.slice(1)}
            </h2>
          }
          <div className="d-flex flex-row  w-100">
            <SideFilters
              setIsLoadingFilters={setIsLoadingFilters}
              aireAcondicionado={aireAcondicionado}
              lavarropas={lavarropas}
              wifi={wifi}
              estacionamiento={estacionamiento}
              setCountrySelected={setCountrySelected}
              setRegionSelected={setRegionSelected}
              countrySelected={countrySelected}
              regionSelected={regionSelected}
              setAireAcondicionado={setAireAcondicionado}
              setLavarropas={setLavarropas}
              setWifi={setWifi}
              setEstacionamiento={setEstacionamiento}
              setApplyFilters={setApplyFilters}
            ></SideFilters>
            {isLoadingFilters ? (
              <CustomSpinner />
            ) : (
              <ItemList productos={productosToShow} home={false} />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ItemListContainer;
