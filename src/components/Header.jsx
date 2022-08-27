function Header(props) {
   return (
      <div>
         <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto py-3">
            Seguimiento Pacientes 
            <span className="text-indigo-500"> Veterinaria</span>
            <p>{props.numeros}</p>
         </h1>
      </div>
   )
}

export default Header