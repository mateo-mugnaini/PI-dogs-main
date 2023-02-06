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
    <div className="contenedor-Detalle">
      {breed && (
        <div className='contenedor-Textos-Detalle'>
        {/* NOMBRE */}
          <div className='contenedor-Texto'>
          <h1 className="TextoTitulo">NOMBRE:</h1>
          <h3 className="Texto">{breed.name}</h3>
          </div>
        {/* PESO */}
          <div className='contenedor-Texto'>
          <h1 className="TextoTitulo">PESO:</h1>
          <h3 className="Texto">{breed.weight?.metric} kg</h3>
          </div>
        {/* ALTURA */}
          <div className='contenedor-Texto'>
          <h1 className="TextoTitulo">ALTURA:</h1>
          <h3 className="Texto">{breed.height?.metric} cm</h3>
          </div>
          {/* AÑO DE VIDA */}
          <div className='contenedor-Texto'>
          <h1 className="TextoTitulo">AÑO DE VIDA:</h1>
          <h3 className="Texto">{breed.life_span}</h3>
          </div>
          {/* TEMPERAMENTOS */}
          <div className='contenedor-Texto'>
          <h1 className="TextoTitulo">TEMPERAMENTOS:</h1>
          <h3 className="Texto">{breed.temperament}</h3>
          </div>
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