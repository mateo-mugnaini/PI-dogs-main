// imports
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "../NavBar/NavBar.css";
import Img from "../NavBar/dog.png";
import { Link } from "react-router-dom";

//codigo

export default function NavBar(props) {
  return (
    <nav className="nav">
      <div className="container-NV">
        <img className="icon-NV" src={Img} />
        <div className="div-Btn-NV">
          <Link className="btn-NV" to="/home">
            <p> HOME </p>{" "}
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="div-Btn-NV">
          <Link className="btn-NV" to="/breedcreate">
            <p> BREED CREATE </p>{" "}
          </Link>
        </div>
        {/* <div className="div-Btn-NV">
          <Link className="btn-NV" to="/breedcreate">
            <img className="icon-NV" src="client/src/components/NavBar/github-mark.png"/>
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
