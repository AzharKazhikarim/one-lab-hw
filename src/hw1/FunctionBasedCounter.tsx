import { FC, useState } from "react";
import "./Counter.css";

const FunctionBasedCounter: FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleDecrement = () => {
    value > 0 ? setValue(value - 1) : setValue(0);
  };

  return (
    <>
      <div className="container">
        <h1>Counter Function Based</h1>
        <div className="value">{value}</div>{" "}
        <input
          type="text"
          placeholder="Type number..."
          onChange={(e) => setValue(+e.target.value)}
        />
        <div className="operations">
          <button onClick={() => setValue(value + 1)} className="button">
            +
          </button>
          <button onClick={handleDecrement} className="button">
            -
          </button>
          <button onClick={() => setValue(0)} className="button">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default FunctionBasedCounter;
