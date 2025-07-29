import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleCalculate = async (e) => {
    e.preventDefault();
    try {
      // Mock API endpoint (replace with actual microservice endpoint if provided)
      const response = await axios.post('https://api.example.com/calculate', {
        num1: parseFloat(num1),
        num2: parseFloat(num2),
        operation
      });
      setResult(response.data.result);
    } catch (error) {
      // Mock result for demo
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      let mockResult;
      switch (operation) {
        case 'add': mockResult = n1 + n2; break;
        case 'subtract': mockResult = n1 - n2; break;
        case 'multiply': mockResult = n1 * n2; break;
        case 'divide': mockResult = n2 !== 0 ? n1 / n2 : 'Error: Division by zero'; break;
        default: mockResult = 'Invalid operation';
      }
      setResult(mockResult);
    }
  };

  return (
    <div className="calculator-container">
      <h2>Calculator</h2>
      <form onSubmit={handleCalculate}>
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          required
        />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
};

export default Calculator;