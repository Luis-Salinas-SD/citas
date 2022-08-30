const Pacientes = () => {
    return (
        <div className='m-4 bg-white shadow-md px-5 py-8 rounded-xl border'>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Mascota:
                <span className='font-normal normal-case'>Hook</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario:
                <span className='font-normal normal-case'>Luis</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email:
                <span className='font-normal normal-case'>correo@correo.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Alta:
                <span className='font-normal normal-case'> 32/13/6666 </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Descripción:
                <span className='font-normal normal-case'> Descripción aqui </span>
            </p>
        </div>
    )
}

export default Pacientes
