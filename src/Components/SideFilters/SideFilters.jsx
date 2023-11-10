import { useState } from "react";
import { Button, FormCheck } from "react-bootstrap";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
const SideFilters = ({
  setCountrySelected,
  setRegionSelected,
  countrySelected,
  regionSelected,
  setAireAcondicionado,
  setLavarropas,
  setWifi,
  setEstacionamiento,
  setApplyFilters,
  aireAcondicionado,
  lavarropas,
  wifi,
  estacionamiento,
  setIsLoadingFilters,
}) => {
  const handlePaisChange = (val) => {
    setCountrySelected(val);
  };
  const handleRegionChange = (val) => {
    setRegionSelected(val);
  };
  const deleteFilters = () => {
    setCountrySelected("");
    setRegionSelected("");
    setAireAcondicionado(false);
    setLavarropas(false);
    setWifi(false);
    setEstacionamiento(false);
    setApplyFilters(false);
    setCheckAire(false);
    setCheckLavarropas(false);
    setCheckWifi(false);
    setCheckEstacionamiento(false);
  };
  const [checkAire, setCheckAire] = useState(false);
  const [checkLavarropas, setCheckLavarropas] = useState(false);
  const [checkWifi, setCheckWifi] = useState(false);
  const [checkEstacionamiento, setCheckEstacionamiento] = useState(false);
  return (
    <div className="mt-2 me-5 ms-5 border d-flex flex-column align-items-center">
      <h4 className="mb-3">Filtros</h4>
      <p className="fw-bold ">Ubicacion:</p>
      <CountryDropdown
        className="comboCss  mb-3 w-75"
        value={countrySelected}
        onChange={(val) => handlePaisChange(val)}
        name="pais"
      />
      <RegionDropdown
        disableWhenEmpty={true}
        value={regionSelected}
        country={countrySelected}
        name="region"
        onChange={(val) => handleRegionChange(val)}
        className="comboCss mb-2 w-75"
      />
      <p className="fw-bold">Caracteristicas:</p>
      <div className="d-flex flex-column">
        <FormCheck
          inline
          label="Aire acondicionado"
          checked={checkAire}
          onChange={(e) => {
            setAireAcondicionado(e.target.checked),
              setCheckAire(e.target.checked);
          }}
        ></FormCheck>
        <FormCheck
          inline
          label="Lavarropa"
          checked={checkLavarropas}
          onChange={(e) => {
            setLavarropas(e.target.checked),
              setCheckLavarropas(e.target.checked);
          }}
        ></FormCheck>
        <FormCheck
          inline
          label="Estacionamiento"
          checked={checkEstacionamiento}
          onChange={(e) => {
            setEstacionamiento(e.target.checked),
              setCheckEstacionamiento(e.target.checked);
          }}
        ></FormCheck>
        <FormCheck
          inline
          label="Wifi"
          checked={checkWifi}
          onChange={(e) => {
            setWifi(e.target.checked), setCheckWifi(e.target.checked);
          }}
        ></FormCheck>
      </div>
      <div className="d-flex gap-3">
        <Button
          className="mt-3 mb-3"
          onClick={() => {
            setApplyFilters(true), setIsLoadingFilters(true);
          }}
        >
          Aplicar
        </Button>
        <Button
          className="mt-3 mb-3"
          variant="danger"
          onClick={() => deleteFilters()}
        >
          Borrar
        </Button>
      </div>
    </div>
  );
};

export default SideFilters;
