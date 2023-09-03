import React, { useState } from 'react';

const CurrencyDropdown = () => {
    const {currency, setCurrency} = useState('');

   

    return (
        <div className="alert alert-secondary">
            Currency: (
            <select className = "custom-select" value={currency} onChange={(event) => setCurrency(event.target.value)} style = {{backgroundColor: 'green'}}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound </option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
            )</div>
    );
};

export default CurrencyDropdown;
