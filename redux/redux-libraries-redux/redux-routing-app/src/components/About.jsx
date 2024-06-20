import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import Navbar from './Navbar'
export default function About() {
  return (
    <div>
    <Header />
    <Navbar />
    <Container className='p-5 shadow'>
    <h1>About us Page</h1>
    </Container>  
    </div>
  )
}
