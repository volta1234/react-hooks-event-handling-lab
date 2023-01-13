import React from "react";


function Keypad (){
    function onChange(event) {
        event.preventDefault();
        console.log('Entering password...')
    }
    return (
        <form onChange={onChange} >
            <input type="password" placeholder="password" ></input>
            <button >submit</button>
        </form>
    )
}

export default Keypad;