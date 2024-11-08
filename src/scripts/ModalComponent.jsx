import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ show, onHide, images, selectedImageIndex, handleSelect }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Imagen seleccionada</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel activeIndex={selectedImageIndex} onSelect={handleSelect}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
                style={{ width: '80%', height: '80%' }}
              />
              <Carousel.Caption>
                <h3>{image.caption}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;