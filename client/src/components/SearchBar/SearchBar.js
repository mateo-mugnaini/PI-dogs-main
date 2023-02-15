//imports
import { useState } from "react";
import "../SearchBar/SearchBar.css";
import { getBreed } from "../../Redux/Actions/actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

//codigo

function SearchBar(props) {
  const [nameBreeds, setNameBreeds] = useState("");
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(getBreed(nameBreeds, "All"));
  }

  return (
    <div className="contenedor_search">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="searchbar"
          type="search"
          placeholder="Buscar raza..."
          value={nameBreeds}
          onChange={(e) => setNameBreeds(e.target.value)}
        />
        <input className="botonSearch" type="submit" value="Buscar" />
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    breeds: state.breeds,
  };
}

export default connect(mapStateToProps, { getBreed })(SearchBar);
