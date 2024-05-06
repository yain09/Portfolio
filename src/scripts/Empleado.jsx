import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import ruka01 from "../img/empleado/ruka01.jpg";
import ruka02 from "../img/empleado/ruka02.jpg";
import ruka03 from "../img/empleado/ruka03.jpg";
import ruka04 from "../img/empleado/ruka04.jpg";
import ruka05 from "../img/empleado/ruka05.jpg";
import ruka06 from "../img/empleado/ruka06.jpg";
import ruka07 from "../img/empleado/ruka07.jpg";
import ruka08 from "../img/empleado/ruka08.jpg";
import ruka09 from "../img/empleado/ruka09.jpg";
import ruka10 from "../img/empleado/ruka10.jpg";
import ruka11 from "../img/empleado/ruka11.jpg";
import ruka12 from "../img/empleado/ruka12.jpg";
import ruka13 from "../img/empleado/ruka13.jpg";
import sj00b from "../img/empleado/sj00b.png";
import sj00 from "../img/empleado/sj00.png";
import sj01 from "../img/empleado/sj01.jpg";
import sj02 from "../img/empleado/sj02.jpg";
import sj03 from "../img/empleado/sj03.jpg";

function Empleado() {
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
    display:
      windowWidth > 1200 || windowWidth < 992 ? "inline" : "none !important",
  };
  const images = [
    ruka01,
    ruka02,
    ruka03,
    ruka04,
    ruka05,
    ruka06,
    ruka07,
    ruka08,
    ruka09,
    ruka10,
    ruka11,
    ruka12,
    ruka13,
  ];
  const images2 = [sj01, sj02, sj03];
  return (
    <Container className="grid-empleado">
      <div className="texto">
        <h4 className="titulo" style={{ display: "inline" }}>
          Ruka{" "}
        </h4>
        <p style={{ fontSize: "1rem" }} style={textStyle}>
          {" "}
          oficina de Arquitectura
        </p>
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
      <div className="carfree01">
        <Carousel data-bs-theme="dark">
          {images.map((image) => (
            <Carousel.Item key={image}>
              <img className="d-block w-100" src={image} alt="" />
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
          perimetrales para una planta solar de alta tensión.{" "}
        </p>
      </div>
      <div className="carfree02">
        <Carousel data-bs-theme="dark">
          {images2.map((images) => (
            <Carousel.Item key={images}>
              <img className="d-block w-100" src={images} alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <a href={sj00} target="_blank" rel="noreferrer" className="pdf">
        <Image src={sj00b} />
      </a>
    </Container>
  );
}

export default Empleado;
