import React, { useState } from "react";

function SumAndMultiply() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);
  const [multiply, setMultiply] = useState(0);

  const handleSum = () => {
    setSum(number1 + number2);
  };

  const handleMultiply = () => {
    setMultiply(number1 * number2);
  };

  return (
    <div>
      <div>
        <label>Số thứ nhất:</label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Số thứ hai:</label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button style={{
          border: '1px solid black',
          margin: 10
        }} onClick={handleSum}>Tính tổng</button>
        <button style={{
          border: '1px solid black',
          margin: 10
        }} onClick={handleMultiply}>Tính tích</button>
      </div>
      <div>
        <p>Tổng: {sum}</p>
        <p>Tích: {multiply}</p>
      </div>
    </div>
  );
}

export default SumAndMultiply;