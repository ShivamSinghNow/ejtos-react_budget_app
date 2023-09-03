import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (e) => {
        const selectedCurrency = e.target.value;
        console.log("Selected Currency:", selectedCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    return (
        <div className="alert alert-secondary">
            Currency
            <select value={currency} onChange={handleCurrencyChange} key={currency}>
                <option value="$">$ - US Dollar</option>
                <option value="£">£ Pound </option>
                <option value="€">€ - Euro</option>
                <option value="₹">₹ - Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencyDropdown;
