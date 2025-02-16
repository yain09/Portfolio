import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import "./App.css";
import Cabecera from "./scripts/Cabecera";
import Loader from "./scripts/Loader";
import Arquitectura from "./scripts/Arquitectura";
import BentoLayout from "./scripts/BentoLayout";
import Model3D from "./scripts/Model3D";
import Empleado from "./scripts/Empleado";
import Independiente from "./scripts/Independiente";
import Concurso from "./scripts/Concurso";

const Home = () => (
  <>
    <Arquitectura />
    <BentoLayout />
  </>
);

const Model = () => (
  <>
    <Arquitectura />
    <Model3D />
  </>
);

const Freelance = () => (
  <>
    <Arquitectura />
    <Independiente />
  </>
);

const Employee = () => (
  <>
    <Arquitectura />
    <Empleado />
  </>
);

const Concursos = () => (
  <>
    <Arquitectura />
    <Concurso />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true); // Control de carga inicial
  const location = useLocation(); // Detectar cambios en la ruta

  useEffect(() => {
    ReactGA.initialize("G-ZZE0RB25R3"); // Inicializa Google Analytics
  }, []);

  useEffect(() => {
    // Cambia a true cada vez que cambie la ruta
    setIsLoading(true);

    // Cargar elementos clave
    const imagesToLoad = document.querySelectorAll("img"); // Todas las imágenes de la página
    const totalElements = imagesToLoad.length; // Número de elementos a cargar
    let loadedCount = 0; // Contador de elementos cargados

    const checkIfAllLoaded = () => {
      loadedCount++;
      if (loadedCount === totalElements) {
        setIsLoading(false); // Una vez cargado todo, ocultar el loader
      }
    };

    // Agrega listeners para cada imagen
    imagesToLoad.forEach((img) => {
      if (img.complete) {
        checkIfAllLoaded(); // Imagen ya estaba cargada
      } else {
        img.addEventListener("load", checkIfAllLoaded); // Espera a que cargue
        img.addEventListener("error", checkIfAllLoaded); // Maneja errores (para no bloquear)
      }
    });

    // Fallback en caso de que no haya elementos que cargar
    if (totalElements === 0) {
      setIsLoading(false);
    }
  }, [location]); // Repetir la lógica cada vez que cambie la ruta

  if (isLoading) {
    // Mostrar pantalla de carga mientras se cargan los elementos
    return (
      <div className="App">
        <Cabecera />
        <Loader />
      </div>
    );
  }

  return (
    <div className="App">
      <Cabecera />
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/concursos" element={<Concursos />} />
      </Routes>
    </div>
  );
}

export default App;
