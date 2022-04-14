import {useState} from "react";
import "./Counter.css"

function FunctionBasedCounter() {

    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1)
    }
    const handleDecrement = () => {
        value > 0 ? setValue(value - 1) : setValue(0);
    }

    const handleReset = () => {
        setValue(0);
    }

    return (
        <>
            <div className="container">
                <h1>Counter Functional Based</h1>
                <div className="value">{value}</div>
                <div className="operations">
                    <button onClick={handleIncrement} className="button">+</button>
                    <button onClick={handleDecrement} className="button">-</button>
                    <button onClick={handleReset} className="button">Reset</button>
                </div>
            </div>
        </>
    )
}

export default FunctionBasedCounter;