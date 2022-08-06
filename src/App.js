import React,{useState} from "react";
import "./style.css";

export default function App() {
  const [result,setResult]=useState("0");
  const [inp1,setInp1]=useState("");
  const [display,setDisplay]=useState("0");
  const [operator,setOperator]=useState();
 
  
  
  const one=()=>{
    
    setResult(result+1);
  }
  const two=()=>{
    setResult(result+2);
   } 
   const three=()=>{
    setResult(result+3);
   }
   const four=()=>{
    setResult(result+4);
   } 
   const five=()=>{
    setResult(result+5);
   } 
   const six=()=>{
    setResult(result+6);
   } 
   const seven=()=>{
    setResult(result+7);
   }
   const eight=()=>{
    setResult(result+8);
   }  
   const nine=()=>{
    setResult(result+9);
   } 
   const zero=()=>{
    setResult(result+0);
   } 

  const displayresult=()=>{
   
    if(operator== "+"){
      
      setResult(parseInt(result)+inp1);
      
      
    }
    else if(operator=="-"){
      setResult(inp1-parseInt(result));
    }
    else {
      setResult((inp1)/parseInt(result));
    }
    
    
  
    setDisplay(inp1+"+"+result+"=");
    
  } 
  const clear=()=>{
    setResult("0")
    setDisplay("0");
 
    
  }
  const add=()=>{
    setOperator("+");
   
    setInp1( parseInt(result));
   
    // setDisplay(display+result+"+");
    setResult("");
   
   
    
    
  }
 
  const minus=()=>{
    setOperator("-");
   
    setInp1( parseInt(result))
    setResult("");
   
  }
  const mult=()=>{
    setOperator("*");
   
    setInp1( parseInt(result))
    setResult("");
   
  }
  const div=()=>{
    setOperator("/");
   
    setInp1( parseInt(result))
    setResult("");
   
  }
 const att=()=>{

 }

  
  return ( 
    <>
   
     <div className="maindiv">
             <div className="display">
                <div className="subdsplay"> {display}</div>
                 <input className="rslt" type="text" onChange={att}value={result} ></input>

             </div>
 

       <div className="numbers">
        
        <div ><button className="buttons" onClick={one}>1</button><button className="buttons" onClick={two}>2</button><button className="buttons" onClick={three}>3</button></div>
        <div ><button className="buttons" onClick={four}>4</button><button className="buttons" onClick={five}>5</button><button className="buttons" onClick={six}>6</button></div>
        <div ><button className="buttons" onClick={seven}>7</button><button className="buttons" onClick={eight}>8</button><button className="buttons" onClick={nine}>9</button></div>
          
          <div ><button className="buttons" onClick={add}>+</button><button className="buttons" onClick={zero}>0</button><button className="buttons"onClick={minus}>-</button></div>
          <button className="buttons" onClick={displayresult}>=</button>
          <button className="buttons" onClick={clear}>C</button>
         {/* {console.log(result)} */}
     
       
  
         </div> 

       </div>
    </>
  );
}
