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

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-ZZE0RB25R3", {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true); // Estado de carga inicial
  const location = useLocation(); // Detectar cambios en la ruta

  useEffect(() => {
    // Inicializa Google Analytics
    ReactGA.initialize("G-ZZE0RB25R3");
  }, []);

  useEffect(() => {
    // Cambia a true cada vez que cambia la ruta
    setIsLoading(true);

    // Simular carga de recursos específicos (por ejemplo, imágenes, modelos)
    const loadResources = async () => {
      try {
        // Espera a que los recursos estén listos (simula API, imágenes, etc.)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Quita este `setTimeout` si no necesitas simular
      } catch (error) {
        console.error("Error cargando recursos:", error);
      } finally {
        setIsLoading(false); // Indica que ha terminado de cargar
      }
    };

    loadResources();
  }, [location]);

  if (isLoading) {
    // Mostrar la pantalla de carga mientras `isLoading` es verdadero
    return (
      <>
        <div className="App">
          <Cabecera />
          <Loader />
        </div>
      </>
    );
  }

  return (
    <div className="App">
      <TrackPageView />
      <Cabecera />
      <div className="">
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/model" element={<Model />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/concursos" element={<Concursos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
