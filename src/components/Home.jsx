import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import { blogs } from '../datos/blogs';

const Home = () => {
    /* const navigate = useNavigate()

    function goToAbout(){
        navigate("/blog")
    } */


  return (
    <div> 
      <Header 
        titulo="Bienvenidos al blog de la semana 11"
        descripcion="Vamos a ver que nos ofrece este blog"
      />
      <Main >
        <section className='d-flex flex-column justify-content-center align-items-center'>
          <h2>nuestros blogs</h2>
          <ul className='mt-3 '>
            {blogs.map(blog =>(
              <li key={blog.id}>
                <Link to={`blog/${blog.id}`}>{blog.title}</Link>
              </li>
            ))}
          </ul>
          
        </section>
      </Main>
        {/* <h2>Home</h2>
        <nav>
          <ul>
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">contact</Link></li>
            
          </ul>
        </nav>
        
        <Outlet/> */}
    </div>
  )
}

export default Home