import React from 'react'
import { Container,Row } from 'react-bootstrap'
export default function Header() {
  return (
    <div>
      <Container className='p-5'>
       <Row>
        <div className='col-md-3'>Call us on :9998003879</div>
        <div className='col-md-5 '>
            <input type='text' placeholder='search anything here...' className='form-control' />
        </div>
        <div className='col-md-3 ms-3'><button className='btn btn-primary bg-primary'>Create Account</button></div>
       </Row>
      </Container>
    </div>
  )
}
