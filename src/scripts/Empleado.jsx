import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { rukaImages, rukaImagesHD, sjImages } from "./imagenes";
import ImageModal from "./ImageModal"; // Importamos el modal
import sj00 from "../img/empleado/sj/sj00.png";
import sj00b from "../img/empleado/sj/sj00b.png";

function Empleado() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImagesHD, setCurrentImagesHD] = useState([]);

  // Manejar el cambio de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mostrar texto basado en el ancho de la ventana
  const textStyle = {
    display:
      windowWidth > 1200 || windowWidth < 992 ? "inline" : "none !important",
    fontSize: "1rem",
  };

  // Manejar la apertura del modal
  const handleImageClick = (images, imagesHD, index) => {
    setCurrentImages(images);
    setCurrentImagesHD(imagesHD);
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  // Cerrar el modal
  const handleClose = () => setShowModal(false);

  // Cambiar el índice seleccionado en el modal
  const handleSelect = (selectedIndex) => {
    setSelectedImageIndex(selectedIndex);
  };

  const images2 = [sjImages[2], sjImages[3], sjImages[4]];

  return (
    <Container className="grid-empleado">
      <div className="texto">
        <h4 className="titulo" style={{ display: "inline" }}>
          Ruka{" "}
        </h4>
        <p style={{ textStyle }}> oficina de Arquitectura</p>
        <p style={{ display: "inline" }}> 2013-2015</p>
        <p className="mt-2">
          En este estudio de arquitectura realicé un proyecto, sus pliegos
          municipales y detalles constructivos para una vividenda en el country
          Aires del Llano de la localidad de Santo Tomé, Santa Fe.
        </p>
        <p>
          También realicé consultorías de diseño para la sucursal de ReMax
          Futuro, Cómputo y presupuesto de proyectos ejecutivos y análisis de
          propuestas de inversión sobre terrenos.
        </p>
      </div>

      {/* Slider de Ruka con Modal */}
      <div className="carfree01">
        <Carousel>
          {rukaImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
                onClick={() =>
                  handleImageClick(rukaImages, rukaImagesHD, index)
                }
                style={{ cursor: "pointer" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="texto2" style={{ height: "100%" }}>
        <h4 className="titulo" style={{ display: "inline" }}>
          Arq. Doña{" "}
        </h4>
        <p style={{ display: "inline" }}> 2019</p>

        <p className="mt-2">
          En mi rol, proporcioné asistencia a profesionales en el desarrollo de
          proyectos al crear esquemas para entrevistas y planos de anteproyecto
          en un parque solar modelo ubicado en la fábrica de paneles solares en
          San Juan. Además, colaboré en la planificación de los cercos
          perimetrales para una planta solar de alta tensión.
        </p>
      </div>

      <div className="carfree02">
        <Carousel data-bs-theme="dark">
          {images2.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <a href={sj00} target="_blank" rel="noreferrer" className="pdf">
        <Image src={sj00b} />
      </a>

      {/* Modal para Ruka */}
      <ImageModal
        show={showModal}
        onClose={handleClose}
        images={currentImages}
        imagesHD={currentImagesHD}
        currentIndex={selectedImageIndex}
        onSelect={handleSelect}
      />
    </Container>
  );
}

export default Empleado;
