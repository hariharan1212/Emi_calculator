import React from 'react';
import '../styles/Loaninfo.css'
import { useSelector } from 'react-redux';

export default function Loaninfo (){
    const {amount,rate,month} = useSelector(state => state.userinput)
    
    const roi = rate/(100);

    const monthlyemi = amount*(roi/12)*Math.pow((1+roi/12),month)/(Math.pow((1+roi/12),month)-1);

    const finalamount = monthlyemi*month;

    const totalemiamount = finalamount-amount;

    return(
        <>
       
            <div  className='Loaninfo_container d-flex justify-content-center align-items-center mt-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <div>
                <h3 className='mb-3  fw-bolder text-decoration-underline'>Loan Info</h3>
                <p className='fw-medium'>Monthly Loan EMI : {monthlyemi ? monthlyemi.toFixed(2) : '--'} </p>
                <p className='fw-medium'>Total Payment <br />(Principal + Interest) :<br /> {finalamount ? finalamount.toFixed(2) : '--'} </p>
                <p className='fw-medium'>Total Interest Payable : {totalemiamount ? totalemiamount.toFixed(2) : '--'} </p>
                </div>
            </div>
        </>
    )

}