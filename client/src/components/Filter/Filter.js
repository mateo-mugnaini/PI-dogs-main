//imports
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getBreeds,
  orderByName,
  getTemperaments,
  filterByTemperaments,
} from "../../Redux/Actions/actions";
import "../Filter/Filter.css";

// codigo

function Filter(props) {

    function handleSelectTemperament(e) {
      if (e.target.value === "All") {
        props.getBreeds();
      } else {
      props.filterByTemperaments(e.target.value)
    }
  }

    useEffect(() => {
      props.getTemperaments();
    }, []);

    useEffect(() => {
    }, [props.temperaments])

  function handleOrderAlf(e) {
    if (e.target.value === "All") {
      props.getBreeds();
    } else {
      props.orderByName(e.target.value, props.breeds);
    }
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
                  <option value={c.name} > {c.nombre}</option>
                ))}
            </select>
      </div>

    </div>
  );
}

function mapStateToProps(state) {
  return {
    breeds: state.breeds,
    temperaments: state.temperaments
  };
}

export default connect(mapStateToProps, {
  getBreeds,
  orderByName,
  getTemperaments,
  filterByTemperaments
})(Filter);
