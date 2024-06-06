import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/Userinput.css'
import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form'
import {userInputamount,userInputmonth,userInputrate} from './userInputslice'



export default function Userinput ({setIsrender}){

   const {register,handleSubmit,formState:{errors},reset} = useForm()

    const dispatch = useDispatch()
    
    const handle_submit = (data)=>{
       const {loanamount,interestrate,totalmonths} = data
       dispatch(userInputamount(loanamount))
       dispatch(userInputrate(interestrate))
       dispatch(userInputmonth(totalmonths))
       reset() ;
       setIsrender(true)
    }

    return(
        <>      
            <div className='Userinput_container d-flex justify-content-center align-items-center mt-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
               <div>
          <Form onSubmit={ handleSubmit(handle_submit)}>
             <Form.Group >
                <Form.Label  className='fw-medium'>Total Loan Amount :</Form.Label>
                <Form.Control type='number' min={1} className='custom-input' {...register('loanamount',{
                  required:'Please Fill LoanAmount',
                })}  />
                {errors.loanamount && <p className='text-danger mt-1'>{errors.loanamount.message}</p>}
             </Form.Group>
             <Form.Group className='mt-1'>
                <Form.Label  className='fw-medium'>Interest Rate (%) :</Form.Label>
                <Form.Control type='text' {...register('interestrate',{
                  required:'Please Fill InterestRate',
                  pattern:{
                     value:  /^[0-9]+(\.[0-9]{1,2})?$/,
                     message: 'Invalid Loan Amount. Please enter a valid number'
                  }
                })}/>
                 {errors.interestrate && <p className='text-danger mt-1'>{errors.interestrate.message}</p>}
             </Form.Group>
             <Form.Group className='mt-1'>
                <Form.Label  className='fw-medium'>Loan Tenure In Months :</Form.Label>
                <Form.Control type='number' min={1} {...register('totalmonths',{
                  required:'Please Fill LoanTenure'
                })}/>
                {errors.totalmonths && <p className='text-danger mt-1'>{errors.totalmonths.message}</p>}
             </Form.Group>
             <Form.Group className='mt-3 text-center'>
                <Button className='btn-success fw-medium ' type='submit'>Submit</Button>
             </Form.Group>
          </Form>
          </div>
          </div>      
        </>
     )

}