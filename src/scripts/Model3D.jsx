// src/scripts/Model3D.jsx
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import ReactPlayer from "react-player";
import miniatura3D from "../img/3d/thumbnail.webp";
import miniatura3D2 from "../img/3d/thumbnail2.webp";
import miniatura3D3 from "../img/3d/thumbnail3.webp";
import { bimImages, bimImagesHD, mitreImages, mitreImagesHD } from "./imagenes";
import ImageModal from "./ImageModal"; // Importar el componente del modal

function Model3D() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImagesHD, setCurrentImagesHD] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manejo del tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mostrar el modal al hacer clic en una imagen
  const handleImageClick = (images, imagesHD, index) => {
    setCurrentImages(images);
    setCurrentImagesHD(imagesHD);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  // Estilos de texto dependientes del ancho de la ventana
  const textStyle = {
    display: windowWidth > 1200 || windowWidth < 992 ? "block" : "none",
  };
  const fcmitre = {
    display: windowWidth > 340 ? "block" : "none",
  };

  return (
    <Container className="grid3d">
      {/* Texto y Videos */}
      <div className="texto">
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

      {/* Carrusel de imágenes (BIM) */}
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
            BIM+Arquitectura{" "}
          </a>
          a partir del pliego de licitación de un proyecto público con el fin de
          simular la hipótesis de la tesis.
        </p>
      </div>
      <div className="carousel-3">
        <Carousel>
          {bimImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
                onClick={() => handleImageClick(bimImages, bimImagesHD, index)}
                style={{ cursor: "pointer" }}
              />
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

      {/* Carrusel de imágenes (Mitre) */}
      <div className="texto3">
        <h4 className="titulo" >Estación Mitre</h4>
        <p style={fcmitre}>Modelado en SketchUp y renderizado con Vray.</p>
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
        <Carousel>
          {mitreImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
                onClick={() =>
                  handleImageClick(mitreImages, mitreImagesHD, index)
                }
                style={{ cursor: "pointer" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Modal */}
      <ImageModal
        show={showModal}
        onClose={handleCloseModal}
        images={currentImages}
        imagesHD={currentImagesHD}
        currentIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
      />
    </Container>
  );
}

export default Model3D;
