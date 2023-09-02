import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    // Local state for the input field
    const [inputBudget, setInputBudget] = useState(budget);

    useEffect(() => {
        setInputBudget(budget);
    }, [budget]);

    const handleInputChange = (event) => {
        setInputBudget(event.target.value);
    };

    const updateBudget = () => {
        if (parseInt(inputBudget, 10) > 20000) {
            alert('Budget cannot exceed £20,000');
            setInputBudget(20000);
            dispatch({
                type: 'SET_BUDGET',
                payload: 20000
            });
        } else if (parseInt(inputBudget, 10) < parseInt(ExpenseTotal, 10)) {
            alert('Budget cannot be lower than the current total expenses');
            setInputBudget(budget);
        }else {
            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(inputBudget, 10)
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            Budget: £
            <input
                required='required'
                type='number'
                id='budget'
                value={inputBudget}
                style={{ marginLeft: '1rem', width: '6rem' }}
                onChange={handleInputChange}
                onBlur={updateBudget}
                step="10"
                max="20000"
            />
        </div>
    );
};

export default Budget;
