import "./App.css";
import Arquitectura from "./scripts/Arquitectura";
import Cabecera from "./scripts/Cabecera";
import BentoLayout from "./scripts/BentoLayout";
import Model3D from "./scripts/Model3D";
import { Route, Routes } from "react-router";
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
  return (
    <div className="App">
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
