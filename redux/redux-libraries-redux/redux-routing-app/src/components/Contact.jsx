import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import Navbar from './Navbar'
export default function Contact() {
  return (
    <div>
    <Header />
    <Navbar />
    <Container className='p-5 shadow'>
    <h1>Contact us</h1>
    <form>
    <div className='form-group mt-3 w-50'>
        <input type='text' placeholder='Name *' className='form-control' />
    </div>

    <div className='form-group mt-3 w-50'>
        <input type='text' placeholder='Email *' className='form-control' />
    </div>

    <div className='form-group mt-3 w-50'>
        <input type='text' placeholder='Mobile *' className='form-control' />
    </div>

    <div className='form-group mt-3 w-50'>
        <input type='text' placeholder='Subject *' className='form-control' />
    </div>
    <div className='form-group mt-3 w-50'>
        <input type='text' placeholder='Message *' className='form-control' />
    </div>

    <div className='form-group mt-3 w-50'>
        <input type='submit' value="Send" className="btn  bg-dark text-white" placeholder='Name *'  />
    </div>
    </form>
    </Container>  
    </div>
  )
}
