// Code Keypad Component Here
function Keypad(){
    
    function eventHandler(){
        console.log('Entering password...')
    }

    return(
     <input onChange={eventHandler} type="password" name="password"></input>
    )
}

export default Keypad
