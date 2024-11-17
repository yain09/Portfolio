import "../style/modals.scss";
import React, { useState } from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import { cpImages, cpImagesHD, eeImages, eeImagesHD } from "./imagenes";
import ImageModal from "./ImageModal"; // Importar el nuevo componente
import cpic from "../img/concursos/cp/vertical/cp00.webp";
import espescuela from "../img/concursos/ee/vertical/ee00.webp";
import espescuelaHD from "../img/concursos/ee/vertical/hd/ee.jpg";

const Concurso = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImagesHD, setCurrentImagesHD] = useState([]);

  const handleImageClick = (images, imagesHD, index) => {
    setCurrentImages(images);
    setCurrentImagesHD(imagesHD);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <Container className="grid-concursos">
      <div className="texto">
        <h4 className="titulo" style={{ display: "inline" }}>
          CPIC{" "}
        </h4>
        <p style={{ display: "inline" }}> 2016 </p>
        <p className="mt-2">
          Ganador de la Primera Mención en el Concurso Nacional de Anteproyecto
          Nueva sede CPIC en conjunto con un equipo de 8 personas. En mi caso
          estuve acargo de:
        </p>
        <ul>
          <li>Coordinar las tareas de los participantes.</li>
          <li>Producción de planimetrías.</li>
          <li>Renderizado.</li>
        </ul>
      </div>

      <a href="" className="pdf">
        <Image src={cpic} />
      </a>

      <div className="carousel-2" style={{ height: "100%", width: "100%" }}>
        <Carousel>
          {cpImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="d-block w-100"
                onClick={() => handleImageClick(cpImages, cpImagesHD, index)}
                style={{ cursor: "pointer" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="texto2" style={{ height: "100%" }}>
        <h4 className="titulo" style={{ display: "inline" }}>
          Espacio Escuela{" "}
        </h4>
        <p style={{ display: "inline" }}> 2012</p>
        <p className="mt-2">
          Primera Mención Concurso de Ideas Espacio Escuela del Seminario
          "Desplazamientos y límites en el espacio educativo. Intersecciones
          entre arquitectura y educación".{" "}
        </p>
      </div>

      <a href={espescuelaHD} target="_blank" rel="noreferrer" className="t2">
        <Image src={espescuela} />
      </a>

      <div className="carousel">
        <Carousel>
          {eeImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="d-block w-100"
                onClick={() => handleImageClick(eeImages, eeImagesHD, index)}
                style={{ cursor: "pointer" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Usar el componente ImageModal */}
      <ImageModal
        show={showModal}
        onClose={handleClose}
        images={currentImages}
        imagesHD={currentImagesHD}
        currentIndex={currentIndex}
        onSelect={handleSelect}
      />
    </Container>
  );
};

export default Concurso;
