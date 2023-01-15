import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
    resetInput(e);
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    resetInput(e);
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    resetInput(e);
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    null;
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    setTimeout(() => inputRef.current.value = null, 500);
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>substract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button>
        <br />
        <br />
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
