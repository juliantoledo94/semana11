import React from 'react'
import { Link } from 'react-router-dom'

const Main = ({children}) => {
    return (
        <main className='container mt-5'>
            {children}
        </main >
    )
}

export default Main