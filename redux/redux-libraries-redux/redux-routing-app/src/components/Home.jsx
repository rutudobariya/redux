import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Header from './Header'
import Navbar from './Navbar'
const Home=({count,increment,decrement})=>{


    return (

        <>
           <Header />
           <Navbar />

           <Container className='p-5 shadow'>
            <h3>Home page React redux Routing App(increment/decrement)</h3>
            <p className='fs-2'>Count Data :{count}</p>
            <p><button type='button' onClick={increment} className='btn btn-sm btn-success'>Increment</button>
            
            <button type='button' onClick={decrement} className='btn btn-sm btn-success ms-3'>Decrement</button>
            
            </p>
            </Container>
        </>

    )

}

const mapStateToProps=state=>({
    count:state.count
})

const mapDispatchToProps=dispatch=>({
    increment:()=>dispatch({type:'INCREMENT'}),
    decrement:()=>dispatch({type:'DECREMENT'})
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);