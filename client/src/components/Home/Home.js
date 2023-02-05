//imports
import React, { useEffect } from "react";
import Cards from '../Cards/Cards'
import { getBreeds } from "../../Redux/Actions/actions";
import { connect } from "react-redux";
import '../Home/Home.css'


//codigo
function Home(props){
   
    useEffect(() => {
        if (!props.filtered) props.getBreeds();
      }, []);
    return(
        <div className="conteiner-home">
          <div className="card-home">
            <Cards/>
          </div>
        </div>
    )
} 

function mapStateToProps(state) {
    return {
      breeds: state.breeds,
      filtered: state.filtered,
    };
  }


export default connect(mapStateToProps, { getBreeds })(Home);