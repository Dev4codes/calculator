import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [curval,setCurval]=useState("0");
  const [inp1,setInp1]=useState("");
  const [display,setDisplay]=useState("")
  const [result,setResult]=useState("");
 
  const [operator,setOperator]=useState();
 
  
  
  const one=()=>{
    setCurval(curval+1);
    setDisplay(display+1)
   
  }
  const two=()=>{
    setCurval(curval+2);
    setDisplay(display+2)
   } 
   const three=()=>{
    setCurval(curval+3);
    setDisplay(display+3)
   }
   const four=()=>{
    setCurval(curval+4);
    setDisplay(display+4)
   }
   const five=()=>{
    setCurval(curval+5);
    setDisplay(display+5)
   }
   const six=()=>{
    setCurval(curval+6);
    setDisplay(display+6)
   }
   const seven=()=>{
    setCurval(curval+7);
    setDisplay(display+7)
   }
   const eight=()=>{
    setCurval(curval+8);
    setDisplay(display+8)
   }
   const nine=()=>{
    setCurval(curval+9);
    setDisplay(display+9)
   }
   const zero=()=>{
    setCurval(curval+0);
    setDisplay(display+0)
   } 

  const displayresult=()=>{
    const input2=(parseInt(curval));
   
    console.log(inp1+input2)
    setDisplay(display+" = ") 
      
      if(operator=="+"){
        setResult(input2+inp1)
      }
      else if(operator=="-"){
        setResult(inp1-input2)
      }
      else if(operator=="*"){
        setResult(inp1*input2)
      }
      else if(operator=="/"){
        setResult(inp1/input2)
      }
    
    
    
    
  
    
    
  } 
  const clear=()=>{
    setCurval("0")
    setInp1("0");
   
    setResult("0");
    setDisplay("")
   
    
 
    
  }
  const add=()=>{
    setOperator("+");
   
    setInp1( parseInt(curval));
   
    setDisplay(parseInt(curval)+"+");
    setCurval("");
   
  
    
    
  }
 
  const minus=()=>{
    setOperator("-");
   
    setInp1( parseInt(curval));
   
    setDisplay(curval+"-");
    setCurval("");
   
  }
  const mult=()=>{
    setOperator("*");
   
    setInp1( parseInt(curval));
   
    setDisplay(curval+"*");
    setCurval("");
   
  }
  const div=()=>{
    setOperator("/");
   
    setInp1( parseInt(curval));
   
    setDisplay(curval+"/");
    setCurval("");
   
  }


  
  return ( 
    <>
   
     <div className="maindiv">
             <div className="display">
                <div className="subdsplay"> {display}</div>
                 <input className="rslt"  value={result} ></input>

             </div>
 

       <div className="numbers">
        <div className="number">
        <div ><button className="buttons" onClick={one}>1</button><button className="buttons" onClick={two}>2</button><button className="buttons" onClick={three}>3</button></div>
        <div ><button className="buttons" onClick={four}>4</button><button className="buttons" onClick={five}>5</button><button className="buttons" onClick={six}>6</button></div>
        <div ><button className="buttons" onClick={seven}>7</button><button className="buttons" onClick={eight}>8</button><button className="buttons" onClick={nine}>9</button></div>
          
          <div ><button className="clear" onClick={clear}>C</button><button className="buttons" onClick={zero}>0</button>
          <button className="equal"onClick={displayresult}>=</button></div>
          
          
          </div>
         {/* {console.log(`inp1 type`+typeof(inp1))}
         {console.log(`inp1 value `+inp1)}
         {console.log(`inp2 type`+typeof(inp2))}
         {console.log(`inp2 value `+inp2)}
      */}
        <div className="symbol"> <button className="buttons" onClick={add}>+</button> <button className="buttons" onClick={minus}>-</button> <button className="buttons" onClick={mult}>*</button><button className="buttons" onClick={div}>/</button> </div>
  
         </div> 

       </div>
    </>
  );
}
