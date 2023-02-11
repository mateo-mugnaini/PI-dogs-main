//imports
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getBreeds,
  orderByName,
  orderByWeight,
  getTemperaments,
  filterByTemperaments,
} from "../../Redux/Actions/actions";

import "../Filter/Filter.css";

// codigo

function Filter(props) {
  const [type, setType] = useState("All");

  function handleSelectTemperament(e) {
    if (e.target.value === "All") {
      props.getBreeds();
    } else {
      props.filterByTemperaments(e.target.value, type);
    }
  }

  useEffect(() => {
    props.getTemperaments();
  }, []);

  useEffect(() => {}, [props.temperaments]);

  function handleOrderAlf(e) {
    if (e.target.value === "All") {
      props.getBreeds();
    } else {
      props.orderByName(e.target.value, props.breeds);
    }
  }

  function handleOrderWe(e) {
    if (e.target.value === "All") {
      props.getBreeds();
    } else {
      props.orderByWeight(e.target.value, props.breeds);
    }
  }

  function handleBdApi(e) {
    props.getBreeds(e.target.value);
    setType(e.target.value);
  }

  return (
    <div className="container-filter">
      {/* --------------------ORDENAR ALFABETICAMENTE--------------------*/}
      <div className="name-filter">
        <select
          className="filtro"
          name="Alfabeticamente"
          onChange={(e) => handleOrderAlf(e)}
        >
          <option value="All">Ordenar alfabeticamente</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      {/* --------------------ORDENAR TEMPERAMENTO--------------------*/}
      <div>
        <select
          className="filtro"
          name="temperaments"
          onChange={(e) => handleSelectTemperament(e)}
          required
        >
          <option value="All">Temperamentos</option>
          {props.temperaments &&
            props.temperaments.map((c) => (
              <option value={c.name}> {c.nombre}</option>
            ))}
        </select>
      </div>
      {/* --------------------ORDENAR BD o API --------------------*/}
      <div className="name-filter">
        <select
          className="filtro"
          name="Alfabeticamente"
          onChange={(f) => handleBdApi(f)}
        >
          <option value="All">All</option>
          <option value="DB">Data Base</option>
          <option value="API">API</option>
        </select>
      </div>
      {/* --------------------ORDENAR POR PESO --------------------*/}
      <div className="name-filter">
        <select
          className="filtro"
          name="peso"
          onChange={(e) => handleOrderWe(e)}
        >
          <option value="All">Ordenar por peso</option>
          <option value="ASC">ASC</option>
          <option value="DES">DES</option>
        </select>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    breeds: state.breeds,
    temperaments: state.temperaments,
  };
}

export default connect(mapStateToProps, {
  getBreeds,
  orderByName,
  orderByWeight,
  getTemperaments,
  filterByTemperaments,
})(Filter);
