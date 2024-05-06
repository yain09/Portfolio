import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import gm01 from "../img/freelance/gm01.jpg";
import gm02 from "../img/freelance/gm02.jpg";
import gm03 from "../img/freelance/gm03.jpg";
import gm04 from "../img/freelance/gm04.jpg";
import gm05 from "../img/freelance/gm05.jpg";
import gm06 from "../img/freelance/gm06.jpg";
import gm07 from "../img/freelance/gm07.jpg";
import gm08 from "../img/freelance/gm08.jpg";
import gm09 from "../img/freelance/gm09.jpg";
import gm10 from "../img/freelance/gm10.jpg";
import gm11 from "../img/freelance/gm11.jpg";
import jf01 from "../img/freelance/Juanfran/jf01.jpg";
import jf02 from "../img/freelance/Juanfran/jf02.jpg";
import jf03 from "../img/freelance/Juanfran/jf03.png";
import jf04 from "../img/freelance/Juanfran/jf04.png";
import jf05 from "../img/freelance/Juanfran/jf05.jpg";
import jf06 from "../img/freelance/Juanfran/jf06.jpg";
import jf07 from "../img/freelance/Juanfran/jf07.jpg";
import jf08 from "../img/freelance/Juanfran/jf08.jpg";
import jf09 from "../img/freelance/Juanfran/jf09.jpg";
import jf10 from "../img/freelance/Juanfran/jf10.jpg";
import mc00 from "../img/freelance/San Javier/mc00.png";
import mc00a from "../img/freelance/San Javier/mc00a.jpg";
import mc00b from "../img/freelance/San Javier/mc00b.jpg";
import mc00c from "../img/freelance/San Javier/mc00c.jpg";
import mc01 from "../img/freelance/San Javier/mc01.png";
import mc02 from "../img/freelance/San Javier/mc02.jpg";
import mc03 from "../img/freelance/San Javier/mc03.jpg";
import mc04 from "../img/freelance/San Javier/mc04.png";
import mc05 from "../img/freelance/San Javier/mc05.jpg";
import mc06 from "../img/freelance/San Javier/mc06.jpg";

function Independiente() {
  const images = [
    gm01,
    gm02,
    gm03,
    gm04,
    gm05,
    gm06,
    gm07,
    gm08,
    gm09,
    gm10,
    gm11,
  ];
  const images2 = [jf01, jf02, jf03, jf04, jf05, jf06, jf07, jf08, jf09, jf10];
  const images3 = [
    mc00,
    mc00a,
    mc00b,
    mc00c,
    mc01,
    mc02,
    mc03,
    mc04,
    mc05,
    mc06,
  ];
  return (
    <Container className="grid-free">
      <div className="texto">
        <h4 className="titulo" style={{ display: "inline" }}>
          Casa L{" "}
        </h4>
        <p style={{ display: "inline" }}> 2015-2018</p>
        <p>
          Vivienda individual financiada bajo plan de viviendas Pro.Cre.Ar.
          ubicada en la localidad de Arrollo Leyes, de la provincia de Santa Fe.{" "}
        </p>
        <p>
          La complejidad estaba en resolver la construcción en 2 etapas, cuya
          segunda iteración incorporara la cochera, deposito y piscina. <br />
        </p>

        <p>
          {/* <a
            className="a"
            href="https://photos.google.com/share/AF1QipNviXv2NRA46Zk1jXoBxtTs4sylyCinkAPwC1Qnq7WzhgN5WToD0--a-_hOE5ySEw?key=QlROdXZjeUhSQVNLZ3NrRVFBYWRQRlR0MVJmWUdB"
            target="_blank"
            rel="noreferrer noopener"
          >
            Aqui{" "}
          </a>
          se puede ver el proceso de construcción de la obra. */}
          La primer etapa de este proyecto fue desarrollada en colaboración con
          el estudio Farqtory que llevó adelante la conduccion técnica.
        </p>
        {/* <PiBlueprint /> */}
      </div>
      {/* <div className="t2">
        <img src={gm00} alt="" />
      </div> */}
      <div className="carfree01">
        <Carousel data-bs-theme="dark">
          {images.map((image) => (
            <Carousel.Item key={image}>
              <img className="d-block w-100" src={image} alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="texto2">
        <h4 className="titulo" style={{ display: "inline" }}>
          Reforma Cocina-Comedor
        </h4>{" "}
        <p style={{ display: "inline" }}> 2022 </p>
        <p>
          Proyecto de refuncionalización de Cocina en vivienda premoldeada,
          donde se buscaba mejorar la distribución de los artefactos y
          circulaciones.
        </p>{" "}
        <p>
          Los desafíos radicaban en las dimensiones existentes, los elementos
          premoldeados, el presupuesto ajustado y en brindar los documentos
          apropiados para que el comitente sea capaz de hacer el seguimiento de
          la obra.
        </p>
        <p>
          La documentación de la propuesta se contenía toda la información
          necesaria para el seguimiento de la obra, la confección del
          mobiliario, la instalación sanitaria, eléctrica y la construcción del
          separador de ambientes.
        </p>
      </div>
      <div className="texto3">
        <h4 className="titulo" style={{ display: "inline" }}>
          Ampliación ASOEM
        </h4>{" "}
        <p style={{ display: "inline" }}>2019</p>
        <p>
          Ubicada en San Javier, la propuesta contemplaba la incorporación de
          nuevos locales tanto para servicios existentes como nuevos, la
          incorporación de ingresos independientes para cada uno de los
          servicios, y la re-estructuración de los flujos internos.
        </p>
        <p>
          Se pedia incorporar un ingreso ceremonial para el salon de fiestas
          existente, re definir la zona de la administración gremial
          incorporando oficina y sala de reuniones, y ubicar un nuevo sector de
          capacitaciones con al menos un aula para 15 personas.
        </p>
      </div>
      <div className="carfree02">
        <Carousel data-bs-theme="dark">
          {images2.map((image2) => (
            <Carousel.Item key={image2}>
              <img className="d-block w-100" src={image2} alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="carfree03">
        <Carousel data-bs-theme="dark">
          {images3.map((image3) => (
            <Carousel.Item key={image3}>
              <img className="d-block w-100" src={image3} alt="" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default Independiente;
