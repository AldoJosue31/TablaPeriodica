import React from "react";
import "../styles/DarkContainer.css"; // Archivo CSS con el tema oscuro


interface Props {
  title1: string;
  title2: string;
  image1: string;
  image2: string;
}

function DarkContainer({ title1, title2, image1, image2 }: Props) {
  return (
    <div className="dark-container">
      <div className="image-container">
        <img src={image1} alt="" />
        <h2>{title1}</h2>
      </div>
      <div className="image-container">
        <img src={image2} alt="" />
        <h2>{title2}</h2>
      </div>
    </div>
  );
}

export default DarkContainer;