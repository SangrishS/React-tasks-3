import React, { useState } from 'react';
import './App.css';

const colors = ["#FF5733", "#C70039", "#900C3F", "#581845", "#FFC300", "#DAF7A6", "#FF5733", "#C70039", "#900C3F"];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  const containerStyle = {
    backgroundColor: selectedColor,
  };

  const colorSquares = colors.map((color, index) => (
    <div
      key={index}
      className="color-square"
      style={{ backgroundColor: color }}
      onClick={() => changeColor(color)}
    ></div>
  ));

  return (
    <div className='app'>
      <div className="color-picker">
        <h2>Color Picker:</h2>
        <div className="color-container" style={containerStyle}>
          {colorSquares}
        </div>
        <div backgroundColorcolor='green'>
          <div className='outer-cover'>
            <h3>Pick a Color</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
