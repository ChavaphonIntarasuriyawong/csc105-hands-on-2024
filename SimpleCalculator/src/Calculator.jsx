import React from 'react'

function Calculator() {

    const [value, setValue] = React.useState(0)

    const add = (value) => {
        setValue(prevValue => prevValue + parseInt(value));
    }
    const subtract = (value) => {
        setValue(prevValue => prevValue - value);
    }
    const multiply = (value) => {
        setValue(prevValue => prevValue * value);
    }
    const divide = (value) => {
        setValue(prevValue => prevValue / value);
    }
    const resetValue = () => {
        setValue(0);
    }

    return (
      <div className="body">
        <h1>Simple Calculator</h1>
        <h2 className="result">Result: {value}</h2>
        <form>
            <input type="number" id="operand" />
        </form><br/>
          <section id="Operations">
            <button id="add" onClick={() => add(document.getElementById("operand").value)}>Add</button>
            <button id="subtract" onClick={() => subtract(document.getElementById("operand").value)}>Subtract</button>
            <button id="multiply" onClick={() => multiply(document.getElementById("operand").value)}>Multiply</button>
            <button id="divide" onClick={() => divide(document.getElementById("operand").value)}>Divide</button>
          </section><br/>
          <section id="Resets">
              <button id="resetInput" onClick={() => document.getElementById("operand").value = ""}>Reset Input</button>
              <button id="resetResult" onClick={() => resetValue()}>Reset Result</button>
          </section>
      </div>
    );
}

export default Calculator
