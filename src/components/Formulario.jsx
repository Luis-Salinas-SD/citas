import { useState, useEffect } from 'react'
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes }) => {
  //# Use State
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [desc, setDesc] = useState('');

  //# Estado para el error de campo
  const [error, setError] = useState(false)

  //# Generar ID

  const generarId = () => {
    let w = Math.random().toString(36).substr(2);
    let fecha = Date.now().toString(36)

    return w + fecha
  }


  //# Se maneja el envio del formulario.
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, alta, desc].includes('')) {
      console.error('Campos vacios');
      setError(true)
      return;
    }
    setError(false)
    const objPaciente = {
      nombre,
      propietario,
      email,
      alta,
      desc,
      id: generarId()
    }

    //# Se agregan los pacientes a setPacientes
    setPacientes([...pacientes, objPaciente])

    //# Reiniciar el Fromulario

    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setDesc('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 bg-gray-100 rounded-lg border border-gray-200 shadow-md shadow-gray-300 p-5 m-2' >
      {/* Titulo */}
      <h2 className='font-black text-2xl text-center'>Seguimiento Pacientes</h2>
      {/* Subtitle */}
      <p className='text-lg mt-5 mb-5 text-center'>
        Añade Pacientes y {' '}<span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      {/* Formulario  */}
      <form className='bg-white shadow-md rounded-lg py-10 px-5' onSubmit={handleSubmit}>
        {/* Mensaje de Error */}
        {error && <Error>
          <h1>⚠️ Alto ⚠️</h1>
          <p>Todos los campos son obligatorios</p>
        </Error>}

        {/* Mascota */}
        <div className='mt-5'>
          <label htmlFor='mascota' className='block text-gray-600 uppercase font-bold'>Nombre de la mascota</label>
          <input
            id='mascota'
            type='text'
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40'
            value={nombre}
            onChange={(event) => setNombre(event.target.value)} />
        </div>
        {/* Propietario */}
        <div className='mt-5'>
          <label htmlFor='propietario' className='block text-gray-600 uppercase font-bold'>Nombre Propietario</label>
          <input
            id='propietario'
            type='text'
            placeholder='Nombre del propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40'
            value={propietario}
            onChange={(event) => setPropietario(event.target.value)}
          />
        </div>
        {/* Email */}
        <div className='mt-5'>
          <label htmlFor='email' className='block text-gray-600 uppercase font-bold'>E-mail</label>
          <input
            id='email'
            type='email' placeholder='Email de contacto'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        {/* Fecha de alta */}
        <div className='mt-5'>
          <label htmlFor='alta' className='block text-gray-600 uppercase font-bold'>Alta</label>
          <input
            id='emaaltal'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40'
            value={alta}
            onChange={(event) => setAlta(event.target.value)}
          />
        </div>
        {/* Descripción */}
        <div className='mt-5'>
          <label htmlFor='alta' className='block text-gray-600 uppercase font-bold'>Descripción</label>
          <textarea
            id='desc'
            type="text"
            placeholder='Describe los sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-lg shadow-md shadow-gray-500/40'
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          />
        </div>
        {/* btn - submit */}
        <input type='submit' className='bg-indigo-600 w-full p-3 text-white uppercase font-bold my-6 hover:bg-indigo-700 cursor-pointer' />
      </form>
    </div>
  )
}
export default Formulario
