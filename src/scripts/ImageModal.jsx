import React, { useState, useEffect } from "react";
import { Modal, Carousel } from "react-bootstrap";

const ImageModal = ({ show, onClose, images, currentIndex, onSelect, imagesHD }) => {
  const [activeImages, setActiveImages] = useState([]); // Imágenes actuales (HD o estándar)
  const [styles, setStyles] = useState([]); // Estilos dinámicos para las imágenes

  // Determina qué imágenes usar: HD o estándar
  useEffect(() => {
    if (show) {
      const selectedImages = imagesHD?.length > 0 ? imagesHD : images;
      setActiveImages(selectedImages);

      // Precalcular estilos al abrir el modal
      calculateStyles(selectedImages);
    }
  }, [show, images, imagesHD]);

  // Calcula el estilo dinámico basado en las proporciones
  const calculateStyles = (imageArray) => {
    const newStyles = imageArray.map((image) => {
      const img = new Image();
      img.src = image.src;

      // Relación de aspecto de la imagen y del viewport
      const aspectRatio = img.width / img.height;
      const viewportRatio = window.innerWidth / window.innerHeight;

      if (aspectRatio > viewportRatio) {
        return { width: "80vw", height: "auto", objectFit: "contain" }; // Limitar por ancho
      } else {
        return { height: "80vh", width: "auto", objectFit: "contain" }; // Limitar por alto
      }
    });

    setStyles(newStyles);
  };

  // Recalcula los estilos al redimensionar la ventana
  useEffect(() => {
    if (show) {
      const handleResize = () => calculateStyles(activeImages);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [show, activeImages]);

  return (
    <Modal show={show} onHide={onClose} dialogClassName="modal-dialog">
      <Carousel activeIndex={currentIndex} onSelect={onSelect}>
        {activeImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={styles[index] || { width: "auto", height: "auto", objectFit: "contain" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Modal>
  );
};

export default ImageModal;
