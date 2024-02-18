import React from "react";

export default function App(){

  let extraButtonstyle = {
    backgroundColor:"#A8A29E",
    color:"black"
  }
  let operatorsButtonstyle = {
    backgroundColor:"#C98A03",
    color:"#FFF"
  }
  
  let numberButtonSytle = {
    backgroundColor: "#56534F",
    color:"#FFF"
  }

  let [inputs , setInputs] = React.useState(0);

  // console.log(inputs)



  function updateInputs(event){
    setInputs((preInputs) => event.target.value === "AC" || event.target.value === "C" ? "0" : preInputs === "0" ? event.target.value : preInputs+event.target.value)
    // console.log(event.target)
    // console.log(inputs)
  }

  
  function showResult(){


    let value_1 = "";
    let value_2 = "";
    let operator = "";
      inputs.split("").map((item)=>{
        item === "+" || item === "-" || item === "*" || item === "/" || item === "%" ? operator = item : operator !== "" ? value_2 += item : value_1 += item;
        return ""
    })
    
      let operand_1 = Number(value_1);
      let operand_2 = Number(value_2);
      if(operator === "+"){
          setInputs( operand_1+operand_2)
      }
      if(operator === "-"){
          setInputs( operand_1-operand_2)
      }
      if(operator === "*"){
          setInputs( operand_1*operand_2)
      }
      if(operator === "/"){
          setInputs( operand_1/+operand_2)
      }
      if(operator === "%"){
          setInputs( operand_1%operand_2)
      }

  }

  return(
    <>
      <div className="DisplayBox" style={{gridArea:"element_1"}} >{inputs}</div>
      <button onClick={(event) => updateInputs(event)} value = "AC" style={{gridArea:"element_2" , ...extraButtonstyle}}>AC</button>
      <button onClick={(event) => updateInputs(event)} value = "C" style={{gridArea:"element_3" , ...extraButtonstyle}}>C</button>
      <button onClick={(event) => updateInputs(event)} value = "%" style={{gridArea:"element_4" , ...extraButtonstyle}}>%</button>
      <button onClick={(event) => updateInputs(event)} value = "/" style={{gridArea:"element_5" , ...operatorsButtonstyle}}>&#247;</button>
      <button onClick={(event) => updateInputs(event)} value = "7" style={{gridArea:"element_6" , ...numberButtonSytle}}>7</button>
      <button onClick={(event) => updateInputs(event)} value = "8" style={{gridArea:"element_7" , ...numberButtonSytle}}>8</button>
      <button onClick={(event) => updateInputs(event)} value = "9" style={{gridArea:"element_8" , ...numberButtonSytle}}>9</button>
      <button onClick={(event) => updateInputs(event)} value = "*" style={{gridArea:"element_9" , ...operatorsButtonstyle}}>&#215;</button>
      <button onClick={(event) => updateInputs(event)} value = "4" style={{gridArea:"element_10" , ...numberButtonSytle}}>4</button>
      <button onClick={(event) => updateInputs(event)} value = "5" style={{gridArea:"element_11" , ...numberButtonSytle}}>5</button>
      <button onClick={(event) => updateInputs(event)} value = "6" style={{gridArea:"element_12" , ...numberButtonSytle}}>6</button>
      <button onClick={(event) => updateInputs(event)} value = "-" style={{gridArea:"element_13" , ...operatorsButtonstyle}}>-</button>
      <button onClick={(event) => updateInputs(event)} value = "1" style={{gridArea:"element_14" , ...numberButtonSytle}}>1</button>
      <button onClick={(event) => updateInputs(event)} value = "2" style={{gridArea:"element_15" , ...numberButtonSytle}}>2</button>
      <button onClick={(event) => updateInputs(event)} value = "3" style={{gridArea:"element_16" , ...numberButtonSytle}}>3</button>
      <button onClick={(event) => updateInputs(event)} value = "+" style={{gridArea:"element_17" , ...operatorsButtonstyle}}>+</button>
      <button onClick={(event) => updateInputs(event)} value = "0" style={{gridArea:"element_18" , ...numberButtonSytle}} className="ZeroElement">0</button>
      <button onClick={(event) => updateInputs(event)} value = "." style={{gridArea:"element_19" , ...numberButtonSytle}}>.</button>
      <button onClick={() => showResult()} value = "=" style={{gridArea:"element_20" , ...operatorsButtonstyle}}>=</button>
    </>
  )
}