import React, {useState} from "react";

function Toggle (){
 const [isOn, setIsOn] = useState(true)

 function handleClick(e){
  setIsOn((isOn)=>!isOn)
 }
 const colors = isOn ? "white" : "red"

  return (
    <>
      <button style={{background:colors}} onClick={handleClick}>{isOn ? "ON" :"OFF"}</button>
    </>
  )
}

export default Toggle;