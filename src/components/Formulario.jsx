import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 bg-gray-100 rounded-lg border border-gray-200 shadow-md shadow-gray-300 p-5 m-2'>
      <h2 className='font-black text-2xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 mb-5 text-center'>
        Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 px-5'>
        <div className='mt-5'>
          <label htmlFor='mascota' className='block text-gray-600 uppercase font-bold'>Nombre de la mascota</label>
          <input id='mascota' type='text' placeholder='Nombre de la mascota' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40' />
        </div>
        <div className='mt-5'>
          <label htmlFor='propietario' className='block text-gray-600 uppercase font-bold'>Nombre Propietario</label>
          <input id='propietario' type='text' placeholder='Nombre del propietario' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40' />
        </div>
        <div className='mt-5'>
          <label htmlFor='email' className='block text-gray-600 uppercase font-bold'>E-mail</label>
          <input id='email' type='email' placeholder='Email de contacto' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40' />
        </div>
        <div className='mt-5'>
          <label htmlFor='alta' className='block text-gray-600 uppercase font-bold'>Alta</label>
          <input id='emaaltal' type='date' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40' />
        </div>
        <div className='mt-5'>
          <label htmlFor='alta' className='block text-gray-600 uppercase font-bold'>Descripción</label>
          <textarea type="text" placeholder='Describe los sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40' />
        </div>

        <input type='submit' className='bg-indigo-600 w-full p-3 text-white uppercase font-bold my-6 hover:bg-indigo-700 cursor-pointer'/>
      </form>
    </div>
  )
}

export default Formulario
