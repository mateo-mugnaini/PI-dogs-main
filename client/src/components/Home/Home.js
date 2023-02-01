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
        console.log(props.breeds);
      }, []);
    return(
        <div className="conteiner-home">
            <Cards/>
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