import Pacientes from "./Pacientes"

const ListadoPacientes = () => (

    <div className='md:w-1/2 lg:w3/5rounded-lg p-3 m-2 md:h-screen overflow-y-scroll'>
        <h2 className='font-black text-2xl text-center'>
            Listado de Pacientes
        </h2>
        <p className='text-lg mt-5 mb-5 text-center'>
            Administra tus pacientes y {' '}
            <span className='text-indigo-600 font-bold'>citas</span>
        </p>
        <Pacientes />
        <Pacientes />
        <Pacientes />
        <Pacientes />
    </div>

)

export default ListadoPacientes