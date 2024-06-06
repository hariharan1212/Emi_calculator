import React from 'react';
import '../src/App.css'
import Appcontainer from './compoents/Appcontainer';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

export default function App (){

  return(
    <> 
      <Container  >
     
        <Appcontainer />
       
      </Container>
    </>
  )
}