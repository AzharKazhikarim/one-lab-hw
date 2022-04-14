import {FC, useState} from "react";
import "./Counter.css"

const FunctionBasedCounter: FC = () => {

    const [value, setValue] = useState<number>(0);

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
                <h1>Counter Function Based</h1>
                <Value value={value}/>
                <div className="operations">
                    <button onClick={handleIncrement} className="button">+</button>
                    <button onClick={handleDecrement} className="button">-</button>
                    <button onClick={handleReset} className="button">Reset</button>
                </div>
            </div>
        </>
    )
}

function Value({value}: { value: number }) {
    return <div className="value">{value}</div>
}

export default FunctionBasedCounter;