import { useState } from 'react';

export default function UserInput() {
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
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input
                        type="number"
                        value={userInput.initialInvestment}
                        onChange={event => handleChange('initialInvestment', event.target.value)}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input
                        type="number"
                        value={userInput.annualInvestment}
                        onChange={event => handleChange('annualInvestment', event.target.value)}
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input
                        type="number"
                        value={userInput.expectedReturn}
                        onChange={event => handleChange('expectedReturn', event.target.value)}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input
                        type="number"
                        value={userInput.duration}
                        onChange={event => handleChange('duration', event.target.value)}
                        required
                    />
                </p>
            </div>
        </section>
    );
}
