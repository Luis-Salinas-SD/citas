import { render } from "react-dom"
import Pacientes from "./Pacientes"

const ListadoPacientes = ({ pacientes }) => {

    return (
        <div className='md:w-1/2 lg:w3/5rounded-lg p-3 m-2 md:h-screen overflow-y-scroll'>
            <h2 className='font-black text-2xl text-center'>
                Listado de Pacientes
            </h2>
            <p className='text-lg mt-5 mb-5 text-center'>
                Administra tus pacientes y {' '}
                <span className='text-indigo-600 font-bold'>citas</span>
            </p>

            {pacientes.map((el) => (

                <Pacientes
                    el={el}
                />

            ))}

        </div>
    )

}




export default ListadoPacientes