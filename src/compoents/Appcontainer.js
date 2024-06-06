import React, { useState } from 'react';
import Userinput from './Usersiput';
import { Col, Row } from 'react-bootstrap';
import Loaninfo from './Loaninfo';
import Loanstatement from './Loanstatement';

export default function Appcontainer (){
    const [isrender , setIsrender] = useState(false)

    
    return(
        <>   
        <div style={{ }} >
            <Row className='justify-content-md-center'>
                 <Col sm={12} md={6}> 
                  <Userinput setIsrender={setIsrender}/>
                 </Col>     
                 <Col sm={12} md={6}>
                 <Loaninfo />
                 </Col>
            </Row>
            {
                isrender ? 
                <Col lg={12}>
                <Loanstatement />
                </Col>
                : null
            }
        </div>     
        </>
    )

}