import React from "react";
import '../styles/listaDatos.css';

interface Datos {
  titulo: string;
  valor: string;
  color: string;
}

interface Props {
  datos: Datos[];
}

const ListaDatos: React.FC<Props> = ({ datos }) => {
  return (
    <div className="container">
      {datos.map((dato, index) => (
        <div key={index} className="dato">
          <h3 style={{ color: dato.color }}>{dato.titulo}</h3>
          <p>{dato.valor}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaDatos;