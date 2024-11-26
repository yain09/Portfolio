import React, { useState, useEffect } from "react";
import {
  gmImages,
  gmImagesHD,
  jfImages,
  jfImagesHD,
  mcImages,
  mcImagesHD,
  aguImages,
  aguImagesHD,
  aguplanoImages,
  aguplanoImagesHD,
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

  // Determinar qué texto mostrar según el ancho de la ventana
  const renderText = () => {
    if (windowWidth > 1200 || windowWidth < 902) {
      return (
        <>
          <p className="mt-2">
            El proyecto contempló la ampliación de una vivienda con la
            incorporación de un dormitorio con vestidor, un lavadero y un baño.
          </p>
          <p>
            Se desarrollaron diversas propuestas para el cliente, y una vez
            definida la opción final, se elaboraron los documentos planimétricos
            necesarios para su ejecución.
          </p>
        </>
      );
    } else {
      return (
        <p className="mt-2">
          El proyecto consistió en la ampliación de una vivienda, desarrollando
          diversas alternativas y propuestas para el cliente, y elaborando la
          documentación planimétrica necesaria para su ejecución.
        </p>
      );
    }
  };
  const renderText2 = () => {
    if (windowWidth > 1200 || windowWidth < 902) {
      return (
        <>
          <p className="mt-2">
            El proyecto consistió en la reestructuración y ampliación de la sede
            de la Mutual optimizando su funcionalidad y servicios.
          </p>
          <p>
            Se reorganizó el sector administrativo en un bloque de dos niveles,
            integrando áreas de trabajo, sala de reuniones y atención al
            público.
          </p>
          <p>
            Para el salón de fiestas, se diseñaron un nuevo ingreso, baños
            diferenciados y la conexión con una cocina para catering.
          </p>
          <p>
            Además, se incorporó un anexo destinado a la capacitación de socios,
            con recepción, dos aulas y baños, distribuidos en dos niveles y con
            ingreso compartido con el salón.
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="mt-2">
            El proyecto consistió en la reestructuración y ampliación de la sede
            de la Mutual, reorganizando el sector administrativo en un bloque de
            dos niveles con áreas de trabajo, reuniones y atención al público.
            También se optimizó el salón de fiestas mediante un nuevo ingreso,
            baños diferenciados y conexión con una cocina para catering.
          </p>{" "}
          <p>
            Se incorporó, además, un anexo destinado a la capacitación de
            socios, que incluye recepción, aulas y baños distribuidos en dos
            niveles, con ingreso compartido con el salón de fiestas.
          </p>
        </>
      );
    }
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
        {/* Galería 1 German*/}

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
          <a
            className="a"
            href="https://photos.google.com/share/AF1QipNviXv2NRA46Zk1jXoBxtTs4sylyCinkAPwC1Qnq7WzhgN5WToD0--a-_hOE5ySEw?key=QlROdXZjeUhSQVNLZ3NrRVFBYWRQRlR0MVJmWUdB"
            target="_blank"
            rel="noreferrer noopener"
          >
            Aqui{" "}
          </a>
          se puede ver el proceso de construcción de la obra.
        </div>

        <div className="carfree01">
          <Carousel>
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

        {/* Galería 2  Juanfran*/}
        <div className="texto2">
          <h4 className="titulo" style={{ display: "inline" }}>
            Reforma Cocina-Comedor{" "}
          </h4>
          <p style={{ display: "inline" }}> 2022</p>
          <p className="mt-2">
            El proyecto consistió en la refuncionalización de la cocina de una
            vivienda premoldeada, optimizando la distribución de artefactos y
            circulaciones para mejorar tanto la funcionalidad como la estética
            del espacio. Con un presupuesto ajustado, se incorporó mobiliario
            estándar y una mesada de piedra regional, equilibrando calidad y
            costos al evitar gastos adicionales en transportes y muebles a medida
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

        {/* Galería 3 ASOEM*/}
        <div className="texto3">
          <h4 className="titulo" style={{ display: "inline" }}>
            Ampliación ASOEM{" "}
          </h4>
          <p style={{ display: "inline" }}>2019</p>
          {renderText2()}
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

        {/* Galería 4  Agustin*/}
        <div className="texto4">
          <h4 className="titulo" style={{ display: "inline" }}>
            Ampliación Casa A²{" "}
          </h4>
          <p style={{ display: "inline" }}> 2024</p>
          {renderText()}
        </div>
        <div className="planosAgu">
          <Carousel data-bs-theme="dark">
            {aguplanoImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                  onClick={() =>
                    handleImageClick(aguplanoImages, aguplanoImagesHD, index)
                  }
                  style={{ cursor: "pointer" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="carfree04">
          <Carousel>
            {aguImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                  onClick={() =>
                    handleImageClick(aguImages, aguImagesHD, index)
                  }
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
