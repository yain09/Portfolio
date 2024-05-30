import { Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
function Arquitectura() {
  const location = useLocation();

  return (
    <Container>
      <Row className="text-start font-monospace align-items-end ">
        <Col className="arq">
          <div className="arq">
            {(location.pathname === "/Portfolio" || location.pathname === "/Portfolio/") && (
              <p className="fs-5 m-0 p-0">portfolio</p>
            )}
            {location.pathname === "/model" && (
              <p className="fs-5 m-0 p-0">modelado 3D</p>
            )}
            {location.pathname === "/employee" && (
              <p className="fs-5 m-0 p-0">en relación de dependencia</p>
            )}
            {location.pathname === "/concursos" && (
              <p className="fs-5 m-0 p-0">concursos</p>
            )}
            {location.pathname === "/freelance" && (
              <p className="fs-5 m-0 p-0">independiente</p>
            )}
            <span className="fs-1 m-0 p-0">Yain Godoy </span>
            <span>arquitecto </span>
            <div className="arq"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Arquitectura;
