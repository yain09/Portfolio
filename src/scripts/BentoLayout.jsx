import "../style/grid.scss";
import { Container, Image } from "react-bootstrap";
import me from "../img/home/yaingodoy.webp";
import maqueta3d from "../img/home/maqueta3D.webp";
import freelance from "../img/home/freelance.webp";
import empleado from "../img/home/empleado.webp";
import concursos from "../img/home/concursos.webp";
import sofware from "../img/home/software.webp";
import dev from "../img/home/dev.webp";
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
            construcción me ha llevado desde la concepción y dirección de proyectos
            arquitectónicos a la incursiones en la impresión 3D, el diseño y
            el desarrollo web.{" "}
          </p>
        </div>
        <Image src={me} className=" t2" />
        <Link to="/model" className="t3 p-0 m-0">
          <div className="image-container p-0 m-0">
            <img src={maqueta3d} alt="" className="image" />
            <div className="pieFoto">Modelado 3D / Render</div>
          </div>
        </Link>
        <Link to="/freelance" className=" t4">
          <div className="image-container p-0 m-0">
            <img src={freelance} alt="freelance" />{" "}
            <div className="pieFoto">Independiente</div>
          </div>
        </Link>
        <Link to="/employee" className=" t5">
          <div className="image-container p-0 m-0">
            <img src={empleado} alt="empleado" />{" "}
            <div className="pieFoto">Empleado</div>
          </div>
        </Link>
        <Link to="/concursos" className=" t7">
          <div className="image-container p-0 m-0">
            <img src={concursos} alt="concursos" />{" "}
            <div className="pieFoto">Concursos</div>
          </div>
        </Link>
        <img src={sofware} alt="sofware" className="t6" />
        <div className=" t8">
          <div className="image-container p-0 m-0">
            <a href="https://yain09.github.io/PortfolioDev"  target="_blank"
                  rel="noopener noreferrer"><img src={dev} alt="desarrollo" />{" "}
            <div className="pieFoto" style={{color:"black"}}>web dev</div>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}

export default BentoLayout;
