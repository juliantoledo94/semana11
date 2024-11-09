import React from 'react'

const Header = ({titulo, descripcion}) => {

    


  return (
    <header>
        <div className='container mt-5'>
        <h1 className='text-center'>{titulo}</h1>
        <p className='text-center mt-3'>{descripcion}</p>
            
        </div>
    </header>
  )
}

export default Header