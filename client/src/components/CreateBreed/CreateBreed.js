//imports
import React, { useEffect, useState, useSelector } from "react";
import { connect } from "react-redux";
import { getTemperaments } from "../../Redux/Actions/actions";
import axios from "axios";
import "./CreateBreed.css";
import { Link } from "react-router-dom";

// codigo

function CreateBreed(props) {
  const [inputs, setInputs] = useState({
    // Seteo mi estado local asi puediendo modoficarlo de manera local
    nombre: "", // useState se utiliza para crear un objeto de estado inputs.
    altura_max: "",
    altura_min: "",
    peso_min: "",
    peso_max: "",
    anosDeVida_min: "",
    anosDeVida_max: "",
    temperamentos: [],
    nombreTemperamento: [],
  });

  function handleSelectTemperament(e) {
    // Elijo temperamentos

    const filterName = props.temperaments.filter(
      (c) => c.id.toString() === e.target.value
    );

    setInputs({
      ...inputs,
      temperamentos: [...inputs.temperamentos, e.target.value],
      nombreTemperamento: [...inputs.nombreTemperamento, filterName[0].nombre],
    });
  }

  function handleChange(e) {
    // Modifico los estados

    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (
      inputs.nombre &&
      inputs.altura_min &&
      inputs.altura_max &&
      inputs.peso_min &&
      inputs.peso_max &&
      inputs.anosDeVida_min &&
      inputs.anosDeVida_max &&
      inputs.temperamentos.length > 0
    ) {
      const formData = {
        nombre: inputs.nombre,
        altura: `${inputs.altura_min} - ${inputs.altura_max}`,
        peso: `${inputs.peso_min} - ${inputs.peso_max}`,
        anoDeVida: `${inputs.anosDeVida_min} - ${inputs.anosDeVida_max} years`,
        temperament: inputs.temperamentos,
      };
      await axios.post("http://localhost:3001/dogs", formData);
      window.alert("Raza creada con exito!");
      window.location.href = "http://localhost:3000/home";
    } else {
      window.alert("Alguno de los campos esta vacio");
    }
  }

  function handleDelete(e) {
    const deleteTemperament = inputs.nombreTemperamento.filter(
      (c) => c !== e.target.name
    );
    setInputs({
      ...inputs,
      nombreTemperamento: deleteTemperament,
    });
  }

  useEffect(() => {
    props.getTemperaments();
  }, []);

  return (
    <div className="container-create">
      <div className="fondo-texto">
        <div className="texto-Titulo">
          <h2> CREAR UNA RAZA </h2>
        </div>
        <div className="texto-parrafo">
          <p>
            {" "}
            ¡Hola! En esta seccion vas a poder crear tu raza de perro y asignale
            distintos temperamentos. <br />
            La proxima vez que entres en nuestro sitio web vas a poder verlos en
            el home y filtrar entre las razas existentes y las creadas por vos.
          </p>
        </div>
      </div>
      <form className="form-CB" onSubmit={(e) => onSubmit(e)}>
        <div className="Form-fondo">
          {/* -------------------------------NOMNRE---------------------------------------------------------------------*/}
          <div className="div-Label">
            <label className="label">Nombre: </label>
            <input
              className="input-marco"
              placeholder="Nombre de la raza"
              name="nombre"
              value={inputs.nombre}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          {/* ---------------------------------ALTURA------------------------------------------------------------------ */}
          <div className="div-Label">
            <label className="label">Altura: </label>
            <input
              className="input-marco-altura"
              placeholder="Altura minima"
              name="altura_min"
              type="number"
              value={inputs.altura_min}
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              className="input-marco-altura"
              placeholder="Altura maxima"
              name="altura_max"
              type="number"
              value={inputs.altura_max}
              onChange={(e) => handleChange(e)}
              required
            />
            <label className="label">cm</label>
          </div>
          {/* ----------------------------------PESO-------------------------------------------------------------------- */}
          <div className="div-Label">
            <label className="label">Peso: </label>
            <input
              className="input-marco-altura"
              placeholder="Peso minimo"
              name="peso_min"
              type="number"
              value={inputs.peso_min}
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              className="input-marco-altura"
              placeholder="Peso maximmo"
              name="peso_max"
              type="number"
              value={inputs.peso_max}
              onChange={(e) => handleChange(e)}
              required
            />
            <label className="label"> kg</label>
          </div>
          {/* --------------------------------AÑO DE VIDA--------------------------------------------------------------- */}
          <div className="div-Label">
            <label className="label">Años de vida:</label>
            <input
              className="input-marco-altura"
              placeholder="Año de vida min"
              name="anosDeVida_min"
              type="number"
              value={inputs.anosDeVida_min}
              onChange={(e) => handleChange(e)}
              required
            />
            <input
              className="input-marco-altura"
              placeholder="Año de vida max"
              name="anosDeVida_max"
              type="number"
              value={inputs.anosDeVida_max}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          {/* ---------------------------------TEMPERAMENTOS----------------------------------------------------------- */}
          <div className="div-Label">
            <label className="label">Temperamentos: </label>
            <select
              defaultValue={"none"}
              className="Form-temperamentos"
              name="temperaments"
              onChange={(e) => handleSelectTemperament(e)}
              required
            >
              {props.temperaments &&
                props.temperaments.map((c) => (
                  <option value={c.id} primary={c.nombre}>
                    {c.nombre}
                  </option>
                ))}
            </select>
          </div>
          {/* ----------------------------------BOTON SUMMIT------------------------------------------------------------ */}
          <div className="boton">
            <input className="boton-crear" type="submit" value="Crear!" />
            {/* Boton de Crear */}
          </div>
        </div>
      </form>
      {/* ----------------------------------BOTON BORRAR TEMPERAMENTO----------------------------------------------- */}
      <div className="opciones-temperamentos">
        {/* muestra los temperamentos seleccionados */}
        {inputs.nombreTemperamento.length > 0 &&
          inputs.nombreTemperamento.map((c) => (
            <div className="temperamento-seleccionado">
              <button
                className="boton-temperamentos"
                name={c}
                onClick={(e) => handleDelete(e)}
              >
                {" "}
                X{" "}
              </button>
              <p>{c}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    temperaments: state.temperaments,
  };
}

export default connect(mapStateToProps, { getTemperaments })(CreateBreed);
