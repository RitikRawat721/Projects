// This is a simple program which uses
// useState function, input with type color
// and uses the color value to show the changes in a div


import React, {useState} from "react"

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF")

    function colorChange(event){
        setColor(event.target.value);
    }

    return(
        <>
        <div className="color-P-C">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={colorChange}/>
        </div>
        </>
    )
}

export default ColorPicker