import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { cpImages, eeImages } from "./imagenes";

function Concurso() {
  const images = [cpImages[1], cpImages[2], cpImages[3]];
  const images2 = [eeImages[2], eeImages[3], eeImages[4]];
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
          <li>Coordinar las tareas de los participantes.</li>{" "}
          <li>Producción de planimetrías.</li> <li>Renderizado.</li>
        </ul>
      </div>

      <div className="pdf">
        <Image src={cpImages[0].src} />
      </div>
      <div className="carousel-2" style={{ height: "100%", width: "100%" }}>
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image.src} alt="" />
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
      <a href={eeImages[0]} target="_blank" rel="noreferrer" className="t2">
        <Image src={eeImages[1].src} />
      </a>

      <div className="carousel">
        <Carousel data-bs-theme="dark">
          {images2.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image.src} alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default Concurso;
