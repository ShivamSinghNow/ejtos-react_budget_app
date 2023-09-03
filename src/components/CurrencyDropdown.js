import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleChange = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    };

    return (
        <select value={currency} onChange={handleChange}>
            <option value="$">$ - Dollar</option>
            <option value="£">£ - Pound</option>
            <option value="€">€ - Euro</option>
            <option value="₹">₹ - Ruppee</option>
        </select>
    );
};

export default CurrencyDropdown;
