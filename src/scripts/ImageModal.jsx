// src/scripts/ImageModal.jsx
import React, { useState, useEffect, useRef } from "react";
import { Modal, Carousel } from "react-bootstrap";

const ImageModal = ({ show, onClose, images, imagesHD, currentIndex, onSelect }) => {
  const [activeImages, setActiveImages] = useState([]);
  const [styles, setStyles] = useState([]);
  const [iconColor, setIconColor] = useState("white");
  const activeImagesRef = useRef([]);

  // Calcula el color basado en el contraste
  const getContrastColor = (backgroundColor) => {
    const rgb = backgroundColor.match(/\d+/g).map(Number);
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
    return brightness > 128 ? "black" : "white";
  };

  // Manejo del tamaño de las imágenes
  const handleImageLoad = (imgSrc, index) => {
    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      const viewportRatio = window.innerWidth / window.innerHeight;

      const newStyle =
        aspectRatio > viewportRatio
          ? { width: "80vw", height: "auto", objectFit: "contain" }
          : { height: "80vh", width: "auto", objectFit: "contain" };

      setStyles((prevStyles) => {
        const updatedStyles = [...prevStyles];
        updatedStyles[index] = newStyle;
        return updatedStyles;
      });
    };
  };

  // Actualiza las imágenes activas y color de ícono al mostrar el modal
  useEffect(() => {
    if (show) {
      const selectedImages = imagesHD?.length ? imagesHD : images;
      setActiveImages(selectedImages);
      activeImagesRef.current = selectedImages;

      const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
      setIconColor(getContrastColor(backgroundColor));
    }
  }, [show, images, imagesHD]);

  // Recalcula los estilos al redimensionar la ventana
  useEffect(() => {
    if (show && activeImages.length) {
      const handleResize = () => {
        activeImagesRef.current.forEach((image, index) =>
          handleImageLoad(image.src, index)
        );
      };

      handleResize(); // Inicial
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
          <span className="nav-icons" style={{ color: iconColor }} aria-label="Previous">
            <svg
              viewBox="0 0 24 24"
              className="nav-prev"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2L20 12L14 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        }
        nextIcon={
          <span className="nav-icons" style={{ color: iconColor }} aria-label="Next">
            <svg
              viewBox="0 0 24 24"
              className="nav-next"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2L20 12L14 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        }
      >
        {activeImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              onLoad={() => handleImageLoad(image.src, index)}
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
