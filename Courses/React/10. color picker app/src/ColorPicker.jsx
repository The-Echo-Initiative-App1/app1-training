import React, {useState} from 'react'
function ColorPicker(){
    const [color, setColor]= useState("#f2e3e3");
function handleColorChange(event){
    setColor(event.target.value);
    
}

    return(<div className='color-picker-container'>
        <h1>color picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>selected color: {color}</p>
        </div>
        <label>select a color</label>
        <input type='color' value={color} onChange={handleColorChange}/>
    </div>)
}
export default ColorPicker