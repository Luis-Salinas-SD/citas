import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState} from "react";

function App() {
  /* Hooks */
  const [pacientes, setPacientes] = useState([]);
  return (
    <div className="container mx-auto mt-5">

      <Header
        numeros={2500}
      />

      <div className="mt-12 md:flex">
      <Formulario/>
      <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
