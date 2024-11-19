import "../style/grid.scss";
import { Container, Image } from "react-bootstrap";
import { homeImages } from "./imagenes";
import { Link } from "react-router-dom";
function BentoLayout() {
  return (
    <>
      <Container className="gridHome">
        <div className="t1 ">
          {" "}
          <p className="mb-0">
            Apasionado por la tecnología, el diseño y la arquitectura. Me
            considero una persona proactiva, abierta a nuevos retos. La
            exploración a través de diversos ámbitos del diseño y la
            construcción me ha llevado desde la concepción y dirección de
            proyectos arquitectónicos a la incursiones en la impresión 3D, el
            diseño y el desarrollo web.{" "}
          </p>
        </div>
        <Image src={homeImages.yaingodoy} className=" t2" />
        <Link to="/model" className="t3 p-0 m-0">
          <div className="image-container p-0 m-0">
            <img src={homeImages.maqueta3d} alt="" className="image" />
            <div className="pieFoto">Modelado 3D / Render</div>
          </div>
        </Link>
        <Link to="/freelance" className=" t4">
          <div className="image-container p-0 m-0">
            <img src={homeImages.freelance} alt="freelance" />{" "}
            <div className="pieFoto">Independiente</div>
          </div>
        </Link>
        <Link to="/employee" className=" t5">
          <div className="image-container p-0 m-0">
            <img src={homeImages.empleado} alt="empleado" />{" "}
            <div className="pieFoto">Empleado</div>
          </div>
        </Link>
        <Link to="/concursos" className=" t7">
          <div className="image-container p-0 m-0">
            <img src={homeImages.concursos} alt="concursos" />{" "}
            <div className="pieFoto">Concursos</div>
          </div>
        </Link>
        <img src={homeImages.software} alt="sofware" className="t6" />
        <div className=" t8">
          <div className="image-container p-0 m-0">
            <a
              href="https://yain09.github.io/PortfolioDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={homeImages.dev} alt="desarrollo" />{" "}
              <div className="pieFoto" style={{ color: "white", textShadow: "0px 0px 3px black" }}>
                web dev
              </div>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}

export default BentoLayout;
