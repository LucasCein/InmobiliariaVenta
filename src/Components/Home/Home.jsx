import { BsSearch } from "react-icons/bs";
import './home.css'
import ReactSelect from 'react-select';
const Home = () => {

  const options = [
    { value: 'departamento', label: 'Departamento' },
    { value: 'ph', label: 'PH' },
    { value: 'casa', label: 'Casa' },
    { value: 'terrenos', label: 'Terrenos y Lotes' },
    { value: 'cochera', label: 'Cochera' }
  ];

  return (
    <div>
      <img className="w-100 d-block" src="bg-home.jpg" alt="" />
      <div className="overlay-content">
        <h1 className='text-white'>Mucho más que mudarte</h1>
        <div className='d-flex gap-3 justify-content-center'>
          <button className='btn btn-light btn-lg'>Quiero Comprar</button>
          <button className='btn btn-light btn-lg'>Quiero Alquilar</button>
        </div>
        <div className="d-flex gap-1">
          <input type="text" className="form-control" placeholder="Escribe aquí" />
          <ReactSelect
            isMulti
            name="properties"
            options={options}
            className="basic-multi-select w-100"
            classNamePrefix="select"
          />
          <button className="btn btn-primary">
            <BsSearch></BsSearch>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
