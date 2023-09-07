//# Mensaje de Error Componente
const Error = ({ children }) => {
    return (
        <div className='bg-red-500 text-white text-center rounded-lg p-2 mb-2 drop-shadow-xl'>
            {children}
        </div>
    )
}

export default Error