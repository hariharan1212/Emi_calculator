import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Loanstatement.css'


const Loanstatement = () => {
    const { amount, rate, month } = useSelector(state => state.userinput);
    const roi = rate / 100;
    const monthlyemi = amount * (roi / 12) * Math.pow((1 + roi / 12), month) / (Math.pow((1 + roi / 12), month) - 1);

    const generateRepaymentTable = () => {
        let current_balance = amount;
        let payment_months = 1 ;
        let principal_amount = 0;
        let monthly_payment = monthlyemi;
        let i = roi;
        let tableRows = []; 

        // Generate table rows
        while (current_balance > 0) {
            principal_amount = (i / 12) * current_balance;
            let towards_balance = monthly_payment - principal_amount;
            current_balance = current_balance - towards_balance;

            tableRows.push({
                month: payment_months,
                monthlyPayment: monthly_payment.toFixed(2),
                towardsBalance: towards_balance.toFixed(2),
                principalAmount: principal_amount.toFixed(2),
                currentBalance: current_balance.toFixed(2)
            });

            payment_months++;
        }

        return tableRows;
    };

    return (
        <div className='Loanstatement_container mt-3'>
            <table>
                <thead>
                    <tr>
                        <th className='fw-semibold'>Month</th>
                        <th className='fw-semibold'>Monthly Payment</th>
                        <th className='fw-semibold'>Towards Balance</th>
                        <th className='fw-semibold'>Principal Amount</th>
                        <th className='fw-semibold'>Current Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {generateRepaymentTable().map(row => (
                        <tr key={row.month}>
                            <td className='fw-normal'>{row.month}</td>
                            <td className='fw-normal'>{row.monthlyPayment}</td>
                            <td className='fw-normal'>{row.towardsBalance}</td>
                            <td className='fw-normal'>{row.principalAmount}</td>
                            <td className='fw-normal'>{row.currentBalance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Loanstatement;