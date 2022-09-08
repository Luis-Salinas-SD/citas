import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState } from "react";

function App() {
  /* Hooks */
  const [pacientes, setPacientes] = useState([]);
  //# Hook para editar
  const [paciente, setPaciente] = useState({});

  return (
    <div className="container mx-auto mt-5">

      <Header
        nombre="Luis"
      />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
