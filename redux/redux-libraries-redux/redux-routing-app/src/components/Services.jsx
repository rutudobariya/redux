import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import Navbar from './Navbar'
export default function Services() {
  return (
    <div>
    
    <Header />
    <Navbar />
    <Container className='p-5 shadow'>
    <h1>Our Services</h1>
    </Container>    
    </div>
  )
}
