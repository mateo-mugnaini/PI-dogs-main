//imports
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../Redux/Actions/actions';

import '../Detail/Detail.css';



//codigo

function Detail({getDetail, breed}){

  console.log(breed)
  const {idRaza} = useParams();

  useEffect(() => {
    getDetail(idRaza)
    console.log(idRaza)
  }, [])

  return(
    <div className="contenedorDetalle">
      {breed && (
        <div className='contenedorTextosDetalle'>
          <h1 className="TextoDetalle">Nombre: {breed.name}</h1>
          <h3 className="TextoDetalle">Altura:  {breed.height?.metric} cm</h3>
          <p className="TextoDetalle">Peso:  {breed.weight?.metric} kg</p>
          <p className='TextoDetalle'> Año de vida: {breed.life_span}</p>
          <img className='imgDetalle' src= {breed.image?.url}/>
        </div>
      )}

  </div>  
)
}

function mapStateToProps(state) {
  return {
    breed: state.breed,
  };
}


export default connect(mapStateToProps, { getDetail })(Detail);