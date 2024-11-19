import React, { useState, useEffect } from "react";
import { Modal, Carousel } from "react-bootstrap";

const ImageModal = ({
  show,
  onClose,
  images,
  imagesHD,
  currentIndex,
  onSelect,
}) => {
  const [activeImages, setActiveImages] = useState([]); // Imágenes actuales (HD o estándar)
  const [styles, setStyles] = useState([]); // Estilos dinámicos para las imágenes
  const [iconColor, setIconColor] = useState("white"); // Blanco por defecto

  // Actualiza las imágenes activas al abrir el modal
  useEffect(() => {
    if (show) {
      const selectedImages = imagesHD?.length > 0 ? imagesHD : images;
      setActiveImages(selectedImages);

      // Determina el color del ícono en función del contraste con el fondo
      const backgroundColor = window.getComputedStyle(
        document.body
      ).backgroundColor;
      setIconColor(getContrastColor(backgroundColor));
    }
  }, [show, images, imagesHD]);

  // Calcula el color basado en el contraste
  const getContrastColor = (backgroundColor) => {
    const rgb = backgroundColor.match(/\d+/g).map(Number);
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness > 128 ? "black" : "white"; // Negro si es claro, blanco si es oscuro
  };

  // Manejo del tamaño de las imágenes
  const handleImageLoad = (index) => {
    const img = new Image();
    img.src = activeImages[index]?.src;

    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      const viewportRatio = window.innerWidth / window.innerHeight;

      const newStyle =
        aspectRatio > viewportRatio
          ? { width: "80vw", height: "auto", objectFit: "contain" } // Limitar por ancho
          : { height: "80vh", width: "auto", objectFit: "contain" }; // Limitar por alto

      setStyles((prevStyles) => {
        const updatedStyles = [...prevStyles];
        updatedStyles[index] = newStyle;
        return updatedStyles;
      });
    };
  };

  // Recalcular estilos al redimensionar la ventana
  useEffect(() => {
    if (show) {
      const handleResize = () => {
        activeImages.forEach((_, index) => handleImageLoad(index));
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [show, activeImages]);

  return (
    <Modal show={show} onHide={onClose} dialogClassName="modal-dialog">
      <Carousel
        activeIndex={currentIndex}
        onSelect={onSelect}
        prevIcon={
          <span className="nav-icons">
            <svg
              viewBox="0 0 24 24"
              className="nav-prev"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14 2L20 12L14 22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        }
        nextIcon={
          <span className="nav-icons">
            <svg
              viewBox="0 0 24 24"
              className="nav-next"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14 2L20 12L14 22"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        }
      >
        {activeImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image.src}
              alt={image.alt}
              onLoad={() => handleImageLoad(index)}
              style={
                styles[index] || {
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }
              }
              className="d-block mx-auto modal-image"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Modal>
  );
};

export default ImageModal;
