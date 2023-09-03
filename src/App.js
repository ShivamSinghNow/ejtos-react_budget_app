import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
// Add code to import the other components here under
import RemainingBudget from './components/Remaining'
import ExpenseTotal from './components/ExpenseTotal'
import ExpenseList from './components/ExpenseList'

import { AppProvider } from './context/AppContext';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>


                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>

                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>

                    <div className='col-sm'>
                        <CurrencyDropdown />
                    </div>

                </div>
                <h3 classname='mt-3'>Allocation</h3>
                <div classname='row'>
                    
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>

                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>

                    <div className='col-sm'>
                        <AllocationForm />
                    </div>

                </div>
            </div>
        </AppProvider>
    );
};
export default App;