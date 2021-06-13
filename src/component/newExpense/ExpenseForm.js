import React from 'react';
import './ExpenseForm.css'
const ExpenseForm =()=>{
    return(
        <form>
        <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" name="title"  />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" name="amount" min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" name="date"  min="2019-01-01" max="2022-12-31"/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add NewEpense</button>
                </div>

        </div>
            </form>
    )
}

export default ExpenseForm;