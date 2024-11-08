import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import miniatura3D from "../img/3d/thumbnail.webp";
import miniatura3D2 from "../img/3d/thumbnail2.webp";
import miniatura3D3 from "../img/3d/thumbnail3.webp";
import ReactPlayer from "react-player";
import { bimImages, mitreImages } from "./imagenes";

function Model3D() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textStyle = {
    display: windowWidth > 1200 || windowWidth < 992 ? "block" : "none",
  };
  const fcmitre = {
    display: windowWidth > 530 ? "block" : "none",
  };

  return (
    <Container className="grid3d">
      <div className="texto">
        {" "}
        <h4 className="titulo">Puerto Santa Fe</h4>
        <p>
          Animación realizada con Vray, el modelo se desarrolló a partir de
          planos municipales, imágenes de Google Earth y otras fuentes.
        </p>
      </div>
      <div className="videosf">
        <ReactPlayer
          light={
            <img src={miniatura3D} alt="Thumbnail" className="miniatura" />
          }
          className="react-player"
          url="https://youtu.be/HyHBKJPXrM4?vq=hd1080"
          loop
          playing
          width="100%"
          height="100%"
          controls
        />
      </div>
      <div className="texto2">
        <h4 className="titulo">Conjunto de viviendas</h4>
        <p>
          Edificio modelado en Revit y SketchUp para mi tesis de Grado
          <a
            className="a"
            href="https://drive.google.com/file/d/1HXv1WjWB5Un482jWx9PADN4jPBPRva6G/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            BIM+Arquitectura
          </a>
          a partir del pliego de licitación de un proyecto publico con el fin de
          simular la hipótesis de la tesis.
        </p>

        <p style={textStyle}>
          La animación se realizó a partir del modelo de SketchUp, mientras que
          las imagenes son del modelo Revit.
        </p>
      </div>
      <div className="carousel">
        <Carousel data-bs-theme="dark">
          {bimImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="videotesis">
        <ReactPlayer
          light={
            <img src={miniatura3D2} alt="Thumbnail" className="miniatura" />
          }
          className="react-player"
          url="https://youtu.be/rbRCYFgTVss?vq=hd1080"
          loop
          playing
          width="100%"
          height="100%"
          controls={true}
          quality="1080p"
          style={{ borderRadius: "10px" }}
          
        />
      </div>
      <div className="texto3">
        <h4 className="titulo">Estación Ferroviaria Mitre</h4>
        <p>Modelado en Sketchup y renderizado con Vray. </p>
        <p style={fcmitre}>
          Es parte de un proyecto universitario de intervención sobre el
          edificio patrimonial de la ciudad de Santa Fe, Argentina.
        </p>
      </div>
      <div className="youtube">
        <ReactPlayer
          light={
            <img src={miniatura3D3} alt="Thumbnail" className="miniatura" />
          }
          className="react-player"
          url="https://youtu.be/bA0_Guc_C3Q?vq=hd1080"
          playing
          width="100%"
          height="100%"
          volume={0.1}
          controls
        />
      </div>
      <div className="carousel-2">
        <Carousel data-bs-theme="dark">
          {mitreImages.map((image, index) => (
            <Carousel.Item key={index}>
              {" "}
              {/* Cambia `image2` a `index` */}
              <img className="d-block w-100" src={image.src} alt={image.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default Model3D;
