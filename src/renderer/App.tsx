import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import React, { Component, Fragment } from "react";
import { elements } from "./_data";
import ListaDatos from "./ListaDatos";
import CloseButton from "./btnCerrar";
import Element from "./Element";
import "../styles/elements.css"


interface AppState {
  showInfo: boolean;
  element: Record<string, any>;
}

class Hello extends Component<{}, AppState> {

  state: AppState = {
    showInfo: false,
    element: {},
  };

  showInfo = (num: number) => {
    this.setState({ showInfo: true, element: elements[num] });
  };

  closeInfo = () => {
    this.setState({ showInfo: false });
  };

  populateElements = (start: number, end: number): JSX.Element[] => {
    let items: JSX.Element[] = [];
    for (let i = start; i <= end; i++) {
      items.push(<Element showInfo={this.showInfo} num={i} />);
    }
    return items;
  };

  render() {
    let {
      nombre,
      masaAtomica,
      electronegatividad,
      simbolo,
      noOxidacion,
      numeroAtomico,
      impactoEconomico,
      impactoAmbiental,
      categoria,
      color,
      url
    } = this.state.element;

    return (  
      <div className="wrapper">
        <div className='Barra'></div>
        <div id="table">
          {/* Renderizar elementos del 1-4 */}
          {this.populateElements(1, 4)}
          {/* Informacion de la tabla */}
          {this.state.showInfo && (
            <div className="offcanvas">
              
              <div className="offcanvas-overlay" onClick={this.closeInfo}></div>
              <div className="offcanvas-content" style={{borderColor: `${color}`,borderWidth: "3px",borderStyle:"solid"}}>
       
                <CloseButton onClose={this.closeInfo} color="red" size={24} borderWidth={2} />
               
                <div>
                  <h1 className="big_title">{nombre}</h1><br />
                  <span className={`cat_name ${categoria.trim()}`}>{categoria}</span>
                  <div className="atom_info"></div>
                  <div>
                    <div>
                    <ListaDatos datos={[{titulo: "Numero atomico",
                                        valor: `${numeroAtomico}`,
                                        color: "#ff0066"},

                                        {titulo: "Simbolo",
                                        valor: `${simbolo}`,
                                        color: "#ff0066"},

                                        {titulo: "Nombre",
                                        valor: `${nombre}`,
                                        color: "#ff0066"},

                                        {titulo: "Masa atomica",
                                        valor: `${masaAtomica}`,
                                        color: "#ff0066"},

                                        {titulo: "No. de oxidación",
                                        valor:  `${noOxidacion}`,
                                        color: "#ff0066"},

                                        {titulo: "Electronegatividad",
                                        valor: `${electronegatividad}`,
                                        color: "#ff0066"},

                                        {titulo: "Impacto económico",
                                        valor: `${impactoEconomico}`,
                                        color: "#ff0066"},

                                        {titulo: "Impacto ambiental",
                                        valor: `${impactoAmbiental}`,
                                        color: "#ff0066"},
                                        
                                        ]} />
                                     
                                    
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          )}
          {}
          {this.populateElements(5, 57)}
          {}
          {this.populateElements(72, 89)}
          {}
          {this.populateElements(104, 118)}
          {}
          {this.populateElements(58, 71)}
          {}
          {this.populateElements(90, 103)}
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}