import { Row, Col, Container } from "react-bootstrap";
function BlockB() {
  return (
    <Container>
      <Row className="text-start font-monospace align-items-end">
        <Col xs="12" md="6">
          <p className="m-0 p-0">arquitecto</p>
          <p className="fs-1 m-0 p-0">Yain Godoy</p>
        </Col>
        <Col xs="12" md="6" className="text-start ">
          <p className="m-0 p-0 align-bottom">
            portfolio profesional <br />
            de arquitectura
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default BlockB;
