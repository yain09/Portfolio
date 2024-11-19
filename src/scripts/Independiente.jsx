import React, { useState, useEffect } from "react";
import {
  gmImages,
  gmImagesHD,
  jfImages,
  jfImagesHD,
  mcImages,
  mcImagesHD,
} from "./imagenes";
import { Carousel, Container } from "react-bootstrap";
import ImageModal from "./ImageModal";

function Independiente() {
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

  // Mostrar u ocultar texto basado en el ancho de la ventana
  const textStyle = {
    display: windowWidth > 1200 || windowWidth < 992 ? "block" : "none",
  };

  // Abrir el modal con imágenes seleccionadas
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

  return (
    <>
      <Container className="grid-free">
        {/* Galería 1 */}
        <div className="texto">
          <h4 className="titulo" style={{ display: "inline" }}>
            Casa L{" "}
          </h4>
          <p style={{ display: "inline" }}> 2015-2018</p>
          <p className="mt-2">
            Vivienda individual financiada bajo plan de viviendas Pro.Cre.Ar.
            ubicada en la localidad de Arrollo Leyes, de la provincia de Santa
            Fe.
          </p>
          <p>
            La complejidad estaba en resolver la construcción en 2 etapas, cuya
            segunda iteración incorporara la cochera, depósito y piscina.
          </p>
        </div>

        <div className="carfree01">
          <Carousel
          
          >
            {gmImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick(gmImages, gmImagesHD, index)}
                  style={{ cursor: "pointer" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Galería 2 */}
        <div className="texto2">
          <h4 className="titulo" style={{ display: "inline" }}>
            Reforma Cocina-Comedor{" "}
          </h4>
          <p style={{ display: "inline" }}> 2022</p>
          <p className="mt-2">
            Proyecto de refuncionalización de Cocina en vivienda premoldeada,
            donde se buscaba mejorar la distribución de los artefactos y
            circulaciones.
          </p>
        </div>

        <div className="carfree02">
          <Carousel data-bs-theme="dark">
            {jfImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick(jfImages, jfImagesHD, index)}
                  style={{ cursor: "pointer" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Galería 3 */}
        <div className="texto3">
          <h4 className="titulo" style={{ display: "inline" }}>
            Ampliación ASOEM{" "}
          </h4>
          <p style={{ display: "inline" }}>2019</p>
          <p className="mt-2">
            Ubicada en San Javier, la propuesta contemplaba la incorporación de
            nuevos locales tanto para servicios existentes como nuevos.
          </p>
        </div>

        <div className="carfree03">
          <Carousel>
            {mcImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick(mcImages, mcImagesHD, index)}
                  style={{ cursor: "pointer" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>

      {/* Modal para las galerías */}
      <ImageModal
        show={showModal}
        onClose={handleClose}
        images={currentImages}
        imagesHD={currentImagesHD}
        currentIndex={selectedImageIndex}
        onSelect={handleSelect}
      />
    </>
  );
}

export default Independiente;
