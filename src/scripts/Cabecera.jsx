import {
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";
import yo from "../img/home/yaingodoy.jpg";
import {
  IoMailUnreadOutline,
  IoCallOutline,
  IoLocationOutline,
  IoLogoLinkedin,
  IoHomeOutline,
} from "react-icons/io5";

function Cabecera() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="black" data-bs-theme="dark" style={{ height: "50px" }}>
      <Container className="fluid" >
        <Row className="w-100 d-flex m-0">
          <Col
            xs={2}
            className="d-flex my-0 align-content-center align-items-center text-start "
          >
            <Nav>
              <Link to="/">
                <IoHomeOutline
                  size={30}
                  color={"white"}
                  style={{ marginRight: "15px" }}
                >
                  {" "}
                </IoHomeOutline>
              </Link>
            </Nav>
            <NavDropdown
              className="text-white"
              title={<GiHamburgerMenu size={30} />}
              id="basic-nav-dropdown"
            >
             <NavDropdown.Item className="text-black" as={Link} to="/model">
                Modelado 3D
              </NavDropdown.Item>
              <NavDropdown.Item className="text-black" as={Link} to="/freelance">
                Ejercicio independiente
              </NavDropdown.Item>
              <NavDropdown.Item className="text-black" as={Link} to="/employee">
                Relación de dependencia
              </NavDropdown.Item>
              <NavDropdown.Item className="text-black" as={Link} to="/concursos">
                Concursos
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col xs={6}></Col>
          <Col xs={4} className="p-0">
            <Nav
              className="me-auto align-items-center"
              style={{ justifyContent: "flex-end" }}
            >
              <Nav.Link className="text-white px-0 " onClick={handleShow}>
                <Button
                  variant="outline-light"
                  style={{ height: "35px" }}
                  className="p-1"
                >
                  {" "}
                  contacto{" "}
                </Button>
              </Nav.Link>
              <Nav.Link className="pr-0">
                <Button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1Obne4S8ePzHwN-T8RQu5X2cdJNiV1Z2d/view?usp=sharing",
                      "_blank"
                    )
                  }
                  variant="outline-light"
                  style={{ height: "35px", marginRight: "10px" }}
                  className="p-1"
                >
                  {" "}
                   CV {" "}
                </Button>
              </Nav.Link>

              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title
                    style={{ fontFamily: "Montserrat", fontWeight: "300" }}
                  >
                    YAIN GODOY
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row className="w-100 align-items-center m-0">
                    <Col xs={8} className="p-0">
                      <div className="pb-3">
                        <p
                          className="icon"
                          style={{ display: "inline", paddingBottom: "10px" }}
                        >
                          <IoCallOutline style={{ marginRight: "7px" }} />
                        </p>
                        <p style={{ display: "inline" }}>+54 9 342 4473227</p>
                      </div>
                      <div className="pb-3">
                        <p className="icon" style={{ display: "inline" }}>
                          {" "}
                          <IoMailUnreadOutline
                            style={{ marginRight: "7px" }}
                          />{" "}
                        </p>
                        <p style={{ display: "inline" }}>yaingodoy@gmail.com</p>
                      </div>
                      <div className="d-flex">
                        <p className="icon">
                          <IoLocationOutline style={{ marginRight: "7px" }} />
                        </p>
                        <p>
                          Centenario 1998 <br />
                          Santo Tomé, Santa Fe
                          <br />
                          Argentina
                        </p>
                      </div>
                      <IoLogoLinkedin style={{ fontSize: "1.5rem" }} />{" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/yain-godoy/"
                        style={{ color: "black" }}
                      >
                        {" "}
                        in/yain-godoy{" "}
                      </a>
                    </Col>
                    <Col xs={4} className="p-0">
                      <img src={yo} alt="" className="yo" />
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Cabecera;
