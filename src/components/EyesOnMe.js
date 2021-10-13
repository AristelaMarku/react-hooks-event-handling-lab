// Code EyesOnMe Component Here
 function EyesOnMe(){

     function OnFocusEventHandler(){
       console.log('Good!')
     }

     function onBloorEventHandler(){
         console.log('Hey! Eyes on me!')
     }

    return (
       
         <button onFocus={OnFocusEventHandler} onBlur={onBloorEventHandler}>'Eyes on me'</button>
        
    )
 }

 export default EyesOnMe