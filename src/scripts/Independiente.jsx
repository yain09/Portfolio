import React, { useState, useEffect } from "react";
import { gmImages, jfImages, mcImages } from "./imagenes";
import { Carousel, Container } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

function Independiente() {
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
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };
  const handleSelect = (selectedIndex) => {
    setSelectedImageIndex(selectedIndex);
  };

  return (
    <>
      <Container className="grid-free">
        <div className="texto">
          <h4 className="titulo" style={{ display: "inline" }}>
            Casa L{" "}
          </h4>
          <p style={{ display: "inline" }}> 2015-2018</p>
          <p className="mt-2">
            Vivienda individual financiada bajo plan de viviendas Pro.Cre.Ar.
            ubicada en la localidad de Arrollo Leyes, de la provincia de Santa
            Fe.{" "}
          </p>
          <p>
            La complejidad estaba en resolver la construcción en 2 etapas, cuya
            segunda iteración incorporara la cochera, deposito y piscina. <br />
          </p>

          <p>
            <a
              className="a"
              href="https://photos.google.com/share/AF1QipNviXv2NRA46Zk1jXoBxtTs4sylyCinkAPwC1Qnq7WzhgN5WToD0--a-_hOE5ySEw?key=QlROdXZjeUhSQVNLZ3NrRVFBYWRQRlR0MVJmWUdB"
              target="_blank"
              rel="noreferrer noopener"
            >
              Aqui{" "}
            </a>
            se puede ver el proceso de construcción de la obra.
            {/* La primer etapa de este proyecto fue desarrollada en colaboración con
          el estudio Farqtory que llevó adelante la conduccion técnica. */}
          </p>
        </div>

        <div className="carfree01">
          <Carousel activeIndex={selectedImageIndex} onSelect={handleSelect}>
            {gmImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick(index)}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="texto2">
          <h4 className="titulo" style={{ display: "inline" }}>
            Reforma Cocina-Comedor
          </h4>{" "}
          <p style={{ display: "inline" }}> 2022 </p>
          <p className="mt-2">
            Proyecto de refuncionalización de Cocina en vivienda premoldeada,
            donde se buscaba mejorar la distribución de los artefactos y
            circulaciones.
          </p>{" "}
          <p>
            Los desafíos radicaban en las dimensiones existentes, los elementos
            premoldeados, el presupuesto ajustado y en brindar los documentos
            apropiados para que el comitente sea capaz de hacer el seguimiento
            de la obra.
          </p>
          <p style={textStyle}>
            La documentación de la propuesta se contenía toda la información
            necesaria para el seguimiento de la obra, la confección del
            mobiliario, la instalación sanitaria, eléctrica y la construcción
            del separador de ambientes.
          </p>
        </div>
        <div className="texto3">
          <h4 className="titulo" style={{ display: "inline" }}>
            Ampliación ASOEM
          </h4>{" "}
          <p style={{ display: "inline" }}>2019</p>
          <p className="mt-2">
            Ubicada en San Javier, la propuesta contemplaba la incorporación de
            nuevos locales tanto para servicios existentes como nuevos, la
            incorporación de ingresos independientes para cada uno de los
            servicios, y la re-estructuración de los flujos internos.
          </p>
          <p>
            Se pedia incorporar un ingreso ceremonial para el salon de fiestas
            existente, re definir la zona de la administración gremial
            incorporando oficina y sala de reuniones, y ubicar un nuevo sector
            de capacitaciones con al menos un aula para 15 personas.
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
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="carfree03">
          <Carousel>
            {mcImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* <ModalComponent
          show={showModal}
          onHide={() => setShowModal(false)}
          images={images}
          selectedImageIndex={selectedImageIndex}
          handleSelect={handleSelect}
        /> */}

        <style>
          {`
          .modal-content {
            background: none;
          }
        `}
        </style>
      </Container>
    </>
  );
}

export default Independiente;
