import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import cp00 from "../img/concursos/cp00.png";
import cp01 from "../img/concursos/cp01.png";
import cp02 from "../img/concursos/cp02.png";
import cp03 from "../img/concursos/cp03.png";
import ee from "../img/concursos/ee/ee.jpg";
import ee00 from "../img/concursos/ee/ee00.png";
import ee01 from "../img/concursos/ee/ee01.png";
import ee02 from "../img/concursos/ee/ee02.png";
import ee03 from "../img/concursos/ee/ee03.png";

function Concurso() {
  const images = [cp01, cp02, cp03];
  const images2 = [ee01, ee02, ee03];
  return (
    <Container className="grid-concursos">
      <div className="texto">
        <h4 className="titulo" style={{ display: "inline" }}>
          CPIC{" "}
        </h4>

        <p style={{ display: "inline" }}> 2016 </p>

        <p>
          Ganador de la Primera Mención en el Concurso Nacional de Anteproyecto
          Nueva sede CPIC en conjunto con un equipo de 8 personas. En mi caso
          estuve acargo de:
          <ul>
            <li> Coordinar las tareas de los participantes.</li>{" "}
            <li>Producción de planimetrías.</li> <li> Renderizado.</li>
          </ul>
        </p>
      </div>

      <div className="pdf">
        <Image src={cp00} />
      </div>
      <div className="carousel-2" style={{ height: "100%", width: "100%" }}>
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
          Espacio Escuela{" "}
        </h4>
        <p style={{ display: "inline" }}> 2012</p>
        <p>
          Primera Mención Concurso de Ideas Espacio Escuela del Seminario
          "Desplazamientos y límites en el espacio educativo. Intersecciones
          entre arquitectura y educación".{" "}
        </p>
      </div>
      <a href={ee} target="_blank" rel="noreferrer" className="t2">
        <Image src={ee00} />
      </a>

      <div className="carousel">
        <Carousel data-bs-theme="dark">
          {images2.map((image) => (
            <Carousel.Item key={image}>
              <img className="d-block w-100" src={image} alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default Concurso;
