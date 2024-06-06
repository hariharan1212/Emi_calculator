import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function Topbar (){

    return(
        <>
          <Navbar style={{background:'#000036'}}>
        <Container>
        <Navbar.Brand className='fw-bolder text-white '>EMI Calculator</Navbar.Brand>
        <Navbar.Text style={{fontSize:'70%'}} className='text-white fw-bolder'>Calculate your financial freedom with ease.</Navbar.Text>    
           </Container>
        </Navbar>
        </>
    )

}