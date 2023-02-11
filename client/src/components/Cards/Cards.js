//imports
import React, { useState } from "react";
import Card from "../Card/Card";
import "../Cards/Cards.css";
import { useSelector } from "react-redux";

//codigo
export default function Cards() {
  // CARDS

  const razas = useSelector((state) => state.breeds);

  // PAGINADO

  const [numeroPagina, setNumeroPagina] = useState(1);

  const grupo = 8;
  const conteoFinal = numeroPagina * grupo;
  const conteoInicial = conteoFinal - grupo;

  const raza =
    razas && razas.slice ? razas.slice(conteoInicial, conteoFinal) : [];

  return (
    <div className="container-General">
      <div className="container-Cards">
        {/* ------------------------------MAPEO DE LAS TARJETAS----------------------------------------- */}
        {raza.length > 0 &&
          raza.map((e) => {
            const tempArray = [];
            e.temperaments?.map((el) => tempArray.push(el.nombre));
            return (
              // -----------------------------------------CARDS------------------------------------------------ //
              <Card
                imagen={e.image}
                nombre={e.name}
                temperamento={
                  tempArray.length > 0 ? tempArray.join() : e.temperament
                }
                peso={e.weight?.metric || e.weight}
                id={e.id}
              />
            );
          })}
      </div>
      {/*-----------------------------------------PAGINADO--------------------------------------------*/}
      <div className="container-Pagination">
        <div>
          <button
            className="btnPag"
            onClick={() => setNumeroPagina(numeroPagina - 1)}
          >
            BACK
          </button>
          <button className="btnPag">{numeroPagina}</button>
          <button
            className="btnPag"
            onClick={() => setNumeroPagina(numeroPagina + 1)}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
