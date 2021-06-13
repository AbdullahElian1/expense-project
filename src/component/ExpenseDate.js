import React from'react';
// import './ExpenseData';
import './ExpenseData.css';



const ExpenseDate=(props)=>{
    let month=props.date.toLocaleString('en-us', {month: 'long'});
let day=props.date.toLocaleString('en-us', {day: '2-digit'});
let year=props.date.getFullYear();
    return(
        <div className="expense-date">
             <div className="expense-date__month">{month} </div>
             <div className="expense-date__year"> {year}</div>
                <div className="expense-date__day">{day}</div>
        
        </div>
    )
}

export default ExpenseDate;