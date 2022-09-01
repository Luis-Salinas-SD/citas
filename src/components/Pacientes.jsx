
const Pacientes = ({ el }) => {
    const { nombre, propietario, email, alta, desc } = el
    return (
        <div className='m-4 bg-white shadow-md px-5 py-8 rounded-xl border'>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Mascota:{' '}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario:{' '}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email:{' '}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Alta:{' '}
                <span className='font-normal normal-case'> {alta} </span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Descripción: {' '}
                <span className='font-normal normal-case'> {desc} </span>
            </p>
            {/* <p>{el.id}</p> */}
        </div>
    )
}

export default Pacientes
