import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogs } from '../datos/blogs';
import Main from './Main';

const Blog = () => {
  const {id} = useParams()
  const blog = blogs.find(blog=>blog.id === parseInt(id))

  if(!blog){
    return <h2>No encontrado</h2>
  }



  return (
   <Main>
      <Link to="/">Home</Link>
      <h1 className='text-center'>{blog.title}</h1>
      <p className='text-center'>{blog.summary}</p>
      
   </Main>
  )
}

export default Blog