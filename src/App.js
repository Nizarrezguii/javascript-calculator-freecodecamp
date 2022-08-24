import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [calculate, setCalculate] = useState('');
  const [answer, setAnswer] = useState('');

  const operators = ['/', '*', '+', '-', '.'];

  const updateCalculate = value => {
    if (operators.includes(value) && calculate === '' || operators.includes(value) && operators.includes(calculate.slice(-1))) {
      return;
    } 
    setCalculate(calculate + value);
    
    if (!operators.includes(value)){
      setAnswer(eval(calculate + value).toString())
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++ ){
        digits.push(
          <button onClick={()=> updateCalculate(i.toString())} 
          key={i}>
          {i}
          </button>
        );
    } 
    return digits;
  }

  const equal = () => {
    setCalculate(eval(calculate).toString())
  }

  const allClear = () => {
    setAnswer('');
    setCalculate('');
  }

  return (
    <div className="App">
      <div className='calculator'>
      <div className="display" id="display">
        {answer ? <span>({answer})</span> : ''}
        {calculate || '0'}
      </div>
      <div className="operators">
        <button className='' onClick={()=> updateCalculate('/')}>/</button>
        <button className='' onClick={()=> updateCalculate('*')}>*</button>
        <button className='' onClick={()=> updateCalculate('+')}>+</button>
        <button className='' onClick={()=> updateCalculate('-')}>-</button>

        <button className='' onClick={allClear}>AC</button>
      </div>
      <div className="digits">
        { createDigits() }
        <button className='bottom' onClick={()=> updateCalculate('0')}>0</button>
        <button className='bottom' onClick={()=> updateCalculate('.')}>.</button>
        <button className='bottom' onClick={equal}>=</button>
      </div>
      </div>
    </div>
  );
}

export default App;
