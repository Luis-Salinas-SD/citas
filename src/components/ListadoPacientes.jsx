import { render } from "react-dom"
import Pacientes from "./Pacientes"
import { useEffect } from "react";

const ListadoPacientes = ({ pacientes, setPaciente }) => {

    useEffect(() => {
        console.log('se agrego un nuevo patitntito');
    }, [])

    return (
        <div className='md:w-1/2 lg:w3/5 rounded-lg p-3 m-2 md:h-screen overflow-y-scroll'>
            <h2 className='font-black text-2xl text-center'>
                Listado de Pacientes
            </h2>
            <p className='text-lg mt-5 mb-5 text-center'>
                Administra tus pacientes y {' '}
                <span className='text-indigo-600 font-bold'>citas</span>
            </p>
            {pacientes && pacientes.length ? (
                <>
                    {pacientes.map((el) => (
                        <Pacientes
                            key={el.id}
                            el={el}
                            setPaciente={setPaciente}
                        />
                    ))}
                </>
            ) : (
                <div className="bg-indigo-400 text-center text-white p-1 rounded-full">
                    <h1>Aun no has agregado pacientes 🙇🏻‍♂️</h1>
                </div>
            )}
        </div>
    )

}




export default ListadoPacientes