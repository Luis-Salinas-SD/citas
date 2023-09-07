function Header(props) {
   return (
      <div>
         <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto py-3">
            Seguimiento de pacientes
            <span className="text-indigo-500"> Veterinaria</span>
            <p className="my-3">Bienvenido <span className="text-indigo-500">{props.nombre}</span></p>
         </h1>
      </div>
   )
}

export default Header