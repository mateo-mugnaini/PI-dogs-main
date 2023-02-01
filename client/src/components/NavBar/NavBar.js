// imports
import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import '../NavBar/NavBar.css';
import Img from '../NavBar/dog.png'
import { Link } from "react-router-dom";

//codigo

export default function NavBar(props){
    return (
        <div className="container-NV">

            <img className="icon-NV" src={Img}/>
        <div className="div-Btn-NV">
            <Link className="btn-NV" to ='/home'> <p> Home </p> </Link>
        </div>
        </div>
        
    )
}
