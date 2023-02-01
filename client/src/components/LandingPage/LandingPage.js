//imports
import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import '../LandingPage/LandingPage.css'


//codigo

export default function LandingPage (){
    return (
        <div className="container-LandingPage">
            {/* <div className="imagen-LandingPage">
                <img src="http://www.mascotahogar.com/1920x1080/fondo-divertido-de-perros.jpg"/>
            </div> */}
        <div className="container-Text">
        <div>
            <Link className="botonIngreso" to ={'/home'}>
            <h1> Bienvenidos </h1>
            </Link>
        </div>
        <div className="texto-Landing">
            <h1> API DOGS  </h1>
            <h2> From Mateo Mugnaini  </h2>
        </div>
        </div>
        </div>
    )
}