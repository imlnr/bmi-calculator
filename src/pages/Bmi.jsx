import React, { useState } from 'react';
// import './Bmi.css'; // CSS file for styling
import '../styles/Bmi.css'

const Bmi = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);

    const calculateBmi = () => {
        if (height && weight) {
            const heightInMeters = height / 100; // Convert height from cm to meters
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2)); // Round BMI to 2 decimal places
        }
    };

    return (
        <div className="bmi-container">
            <h2>BMI Calculator</h2>
            <div className="input-group">
                <label htmlFor="height">Height (cm):</label>
                <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="weight">Weight (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            {bmi !== null && (
                <div className="result">
                    <h3>Your BMI: {bmi}</h3>
                </div>
            )}
        </div>
    );
};

export default Bmi;
