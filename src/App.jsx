import React, { useState } from 'react';

import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputId, newValue) {
        setUserInput(prevUserInput => ({
            ...prevUserInput,
            [inputId]: newValue,
        }));
    }

    return (
        <>
            <Header />
            <UserInput userInput={userInput} onChange={handleChange} />
            <Results input={userInput} />
        </>
    );
}

export default App;
